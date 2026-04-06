import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiting (resets on server restart — fine for a personal site)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

// Clean up old entries periodically (prevent memory leak)
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}, 10 * 60 * 1000); // every 10 minutes

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // Parse body
  let body: {
    type?: string;
    message?: string;
    email?: string;
    page?: string;
    locale?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { type, message, email, page, locale } = body;

  // Validate
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  if (message.length > 2000) {
    return NextResponse.json({ error: 'Message too long (max 2000 chars)' }, { status: 400 });
  }

  const validTypes = ['feedback', 'bug', 'domanda'];
  if (type && !validTypes.includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  if (email && typeof email === 'string') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }
  }

  // Notion API
  const notionKey = process.env.NOTION_API_KEY;
  const notionDbId = process.env.NOTION_FEEDBACK_DB_ID;

  if (!notionKey || !notionDbId) {
    console.error('Missing NOTION_API_KEY or NOTION_FEEDBACK_DB_ID env vars');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    const notionRes = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: notionDbId },
        properties: {
          Messaggio: {
            title: [{ text: { content: message.trim().slice(0, 200) } }],
          },
          Tipo: {
            select: { name: type || 'feedback' },
          },
          ...(email && {
            Email: { email: email.trim() },
          }),
          ...(page && {
            Pagina: { url: `https://selfrules.org${page}` },
          }),
          Lingua: {
            select: { name: locale === 'it' ? 'it' : 'en' },
          },
          Stato: {
            select: { name: 'nuovo' },
          },
        },
        // If message is longer than 200 chars, put the full text in the page body
        ...(message.trim().length > 200 && {
          children: [
            {
              object: 'block',
              type: 'paragraph',
              paragraph: {
                rich_text: [{ text: { content: message.trim() } }],
              },
            },
          ],
        }),
      }),
    });

    if (!notionRes.ok) {
      const error = await notionRes.text();
      console.error('Notion API error:', notionRes.status, error);
      return NextResponse.json({ error: 'Failed to save feedback' }, { status: 502 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('Notion API request failed:', err);
    return NextResponse.json({ error: 'Failed to save feedback' }, { status: 502 });
  }
}
