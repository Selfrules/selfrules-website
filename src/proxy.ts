import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

// Countries that should be served the Italian locale
const ITALIAN_COUNTRIES = new Set([
  'IT', // Italy
  'SM', // San Marino
  'VA', // Vatican City
  'CH', // Switzerland (large Italian-speaking population)
]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal paths and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/trpc') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    /\.\w+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // --- Geo-redirect logic ---
  // Only redirect if:
  // 1. User has NOT set a manual language preference (no preferred-locale cookie)
  // 2. User is on an EN page (no /it prefix — since EN is default with no prefix)
  // 3. User's country maps to Italian locale
  const preferredLocale = request.cookies.get('preferred-locale')?.value;
  const isOnItalianPath = pathname.startsWith('/it') || pathname === '/it';

  if (!preferredLocale && !isOnItalianPath) {
    const country = request.headers.get('x-vercel-ip-country') || '';

    if (ITALIAN_COUNTRIES.has(country)) {
      // Build the Italian URL: prepend /it to the current path
      const italianPath = `/it${pathname === '/' ? '' : pathname}`;
      const url = request.nextUrl.clone();
      url.pathname = italianPath;

      return NextResponse.redirect(url, 302);
    }
  }

  return handleI18nRouting(request);
}
