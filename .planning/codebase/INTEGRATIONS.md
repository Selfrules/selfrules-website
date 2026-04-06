# External Integrations

**Analysis Date:** 2026-04-06

## APIs & External Services

**Analytics:**
- Umami Cloud - Privacy-first, cookieless analytics; no consent banner needed
  - SDK/Client: Script tag injected via `next/script` in `src/app/[locale]/layout.tsx`
  - Script URL: proxied through `/api/umami/:path*` → `https://cloud.umami.is/:path*` (rewrite in `next.config.ts`)
  - Auth: `NEXT_PUBLIC_UMAMI_ID` (public env var, website ID from Umami Cloud dashboard)
  - Loaded: `strategy="afterInteractive"`, only when `NEXT_PUBLIC_UMAMI_ID` is set

**Feedback Storage:**
- Notion API - Stores user feedback submissions as pages in a Notion database
  - SDK/Client: Raw `fetch` calls to `https://api.notion.com/v1/pages` (no SDK, direct HTTP)
  - Notion API version: `2022-06-28`
  - Auth: `NOTION_API_KEY` (Bearer token, secret env var)
  - Database: `NOTION_FEEDBACK_DB_ID` (secret env var)
  - Implementation: `src/app/api/feedback/route.ts`
  - Fields stored: Messaggio (title), Tipo (select), Email, Pagina (url), Lingua (select), Stato (select)

## Data Storage

**Databases:**
- None (no ORM, no database client)
- Feedback is persisted to Notion (see above)

**File Storage:**
- Local filesystem only (images in `public/images/`, fonts in `src/assets/fonts/`)

**Caching:**
- None (no Redis, no external cache)

## Authentication & Identity

**Auth Provider:**
- None - No user authentication system
- The feedback API endpoint has in-memory rate limiting (`src/app/api/feedback/route.ts`) using a `Map` keyed by IP address; resets on server restart

## Monitoring & Observability

**Error Tracking:**
- None (no Sentry, no Datadog)

**Logs:**
- `console.error()` in `src/app/api/feedback/route.ts` for Notion API failures

## CI/CD & Deployment

**Hosting:**
- Vercel (configured via `vercel.json`, `framework: "nextjs"`)
- Production domain: `selfrules.org`
- Security headers set in `vercel.json`: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- Font files served with `Cache-Control: public, max-age=31536000, immutable`

**CI Pipeline:**
- Not detected (no GitHub Actions, no CI config files)
- `playwright.config.ts` references `process.env.CI` for retry/worker behavior, implying future CI use

## Environment Configuration

**Required env vars:**
- `NEXT_PUBLIC_UMAMI_ID` - Umami website ID (public, optional - analytics disabled if absent)
- `NOTION_API_KEY` - Notion integration secret (server-only, required for feedback endpoint)
- `NOTION_FEEDBACK_DB_ID` - Target Notion database ID (server-only, required for feedback endpoint)

**Secrets location:**
- `.env.local` (local development, not committed)
- Vercel dashboard for production

## Webhooks & Callbacks

**Incoming:**
- `POST /api/feedback` (`src/app/api/feedback/route.ts`) - Receives feedback form submissions from `FeedbackWidget` component; writes to Notion

**Outgoing:**
- None

## OG Image Generation

**next/og:**
- `src/lib/og-image.tsx` uses `next/og` `ImageResponse` to generate dynamic OG images (1200×630px)
- Requires local font files at `src/assets/fonts/inter.ttf`, `src/assets/fonts/space-grotesk.ttf`, `src/assets/fonts/jetbrains-mono.ttf`
- Used by individual route `opengraph-image` endpoints (not globally)

## Video Rendering

**Remotion:**
- `remotion/` directory contains standalone video compositions
- Not integrated into the Next.js app at runtime; used to pre-render video assets
- Compositions: `HelloWorld`, `CasaHunter` (1350 frames at 30fps = 45 seconds)
- Run locally via `npm run remotion:studio` or `npm run remotion:render`

---

*Integration audit: 2026-04-06*
