# Architecture

**Analysis Date:** 2026-04-06

## Pattern Overview

**Overall:** Next.js App Router with i18n wrapper, fully static-generated (SSG), server components by default with selective client islands.

**Key Characteristics:**
- All pages are React Server Components rendered at build time via `generateStaticParams`
- Locale is a dynamic route segment `[locale]` wrapping all pages — no middleware redirect needed
- `localePrefix: 'as-needed'` means English has no `/en/` prefix, Italian uses `/it/`
- One API route (`/api/feedback`) handles the only runtime server operation
- No database reads at runtime — all content is either from JSON translation files or co-located MDX

## Layers

**Routing Layer:**
- Purpose: Maps URLs to pages and enforces locale validation
- Location: `src/app/[locale]/`
- Contains: `page.tsx`, `layout.tsx`, `not-found.tsx`, `opengraph-image.tsx` per route
- Depends on: `src/i18n/routing.ts` for locale config
- Used by: Next.js file-system router

**i18n Layer:**
- Purpose: Provides locale-aware translations and locale-prefixed navigation
- Location: `src/i18n/`, `src/messages/`
- Contains: `routing.ts` (locale definitions), `request.ts` (message loader), `navigation.ts` (re-exports `Link`, `usePathname` from next-intl)
- Depends on: `src/messages/en.json`, `src/messages/it.json`
- Used by: all page components and client components using `useTranslations`

**Layout Layer:**
- Purpose: Shared chrome (Navbar, Footer, PageTransition, FeedbackWidget) injected once per locale
- Location: `src/app/[locale]/layout.tsx`
- Contains: HTML shell, font variables, Umami script injection, skip-to-content link, NextIntlClientProvider
- Depends on: `src/lib/fonts.ts`, `src/components/layout/`, `src/components/ui/PageTransition.tsx`
- Used by: all child routes automatically

**Page Layer:**
- Purpose: Assembles sections/components for a given route, fetches translations, generates metadata
- Location: `src/app/[locale]/[route]/page.tsx`
- Contains: async RSC, `generateMetadata`, `generateStaticParams`, JSX composition of section components
- Depends on: `src/components/sections/`, `src/components/ui/`, `src/lib/metadata.ts`
- Used by: Next.js router

**Component Layer:**
- Purpose: Reusable UI primitives, section blocks, layout wrappers, MDX components, SEO helpers
- Location: `src/components/`
- Contains: layout/, sections/, ui/, mdx/, seo/ subdirectories
- Depends on: `src/lib/utils.ts` (cn helper), `src/i18n/navigation.ts` for locale-aware links
- Used by: page components

**Library Layer:**
- Purpose: Pure utilities and shared abstractions
- Location: `src/lib/`
- Contains: `fonts.ts`, `metadata.ts`, `posts.ts`, `utils.ts`, `build-info.ts`, `og-image.tsx`
- Depends on: nothing internal
- Used by: pages and components

**Content Layer (Notes/MDX):**
- Purpose: Blog post content, co-located with their page route
- Location: `src/app/[locale]/notes/[slug]/content.{en,it}.mdx`
- Contains: MDX with embedded custom components (KeyTakeaway, Callout, diagrams)
- Depends on: `src/components/mdx/` for custom components
- Used by: note `page.tsx` via dynamic `import('./content.${locale}.mdx')`

## Data Flow

**Page Request (SSG, build time):**
1. Next.js calls `generateStaticParams` → `[{ locale: 'en' }, { locale: 'it' }]`
2. `generateMetadata` runs: awaits `params`, calls `getTranslations`, calls `createPageMetadata` from `src/lib/metadata.ts`
3. Page component runs: awaits `params`, calls `setRequestLocale`, calls `getTranslations`
4. Translation strings injected into section/component props (all as plain strings)
5. Components render to static HTML

**Blog Post Content Flow:**
1. `page.tsx` dynamically imports `./content.${locale}.mdx`
2. MDX exports named `metadata` object (title, date, readingTime) and default `Content` component
3. `NoteLayout` receives both as props, renders article shell with Content as children
4. Adjacent posts resolved via `getAdjacentPosts` in `src/lib/posts.ts` (hardcoded ordered array)

**Feedback Submission (runtime):**
1. Client: `FeedbackWidget` (client component) submits `POST /api/feedback`
2. Route handler: validates input, rate-limits by IP (in-memory Map), POSTs to Notion API
3. Returns 201 on success, 429/400/502 on error

**i18n Resolution:**
1. `src/i18n/request.ts` called by next-intl on each request
2. Reads `requestLocale`, validates against `routing.locales`, falls back to `defaultLocale` ('en')
3. Loads `src/messages/${locale}.json` dynamically

## Key Abstractions

**`Section` component:**
- Purpose: Consistent vertical padding + centered max-width container used on every page
- Location: `src/components/layout/Section.tsx`
- Pattern: `wide` prop switches between `--width-content` (720px) and `--width-wide` (1080px)

**`createPageMetadata`:**
- Purpose: Generates canonical URLs, hreflang alternates, OG/Twitter tags for every page
- Location: `src/lib/metadata.ts`
- Pattern: Called in every `generateMetadata`, takes `{ locale, path, title, description }`

**`NoteLayout`:**
- Purpose: Wraps blog post content with header, breadcrumb JSON-LD, prev/next nav
- Location: `src/components/layout/NoteLayout.tsx`
- Pattern: Pure RSC, receives `metadata` from MDX export + adjacent post data

**`JsonLd`:**
- Purpose: Injects `<script type="application/ld+json">` for schema.org structured data
- Location: `src/components/seo/json-ld.tsx`
- Pattern: Used directly in page components, data typed as generic object

**`POSTS` array in `src/lib/posts.ts`:**
- Purpose: Single source of truth for post ordering and adjacent navigation
- Pattern: Const array of slugs; `getAdjacentPosts(slug)` returns prev/next from the array

**MDX Custom Components:**
- Purpose: Styled callouts, diagrams, and insights usable inside `.mdx` files
- Location: `src/components/mdx/` (exported from `index.ts`)
- Pattern: Must be imported individually in each MDX file (no global MDX component map configured)

## Entry Points

**`src/app/[locale]/layout.tsx`:**
- Triggers: Every page request under a locale route
- Responsibilities: Sets HTML lang, injects fonts, wraps with NextIntlClientProvider, renders Navbar + Footer + FeedbackWidget + PageTransition, injects Umami analytics script

**`src/app/[locale]/page.tsx`:**
- Triggers: GET `/` (en) or `/it` (it)
- Responsibilities: Homepage, assembles 7 section components, injects Person JSON-LD

**`src/app/api/feedback/route.ts`:**
- Triggers: POST `/api/feedback`
- Responsibilities: Rate limiting, validation, Notion API write

**`src/app/sitemap.ts`:**
- Triggers: Build time, `GET /sitemap.xml`
- Responsibilities: Generates all page URLs × 2 locales with hreflang alternates

**`src/app/robots.ts`:**
- Triggers: Build time, `GET /robots.txt`
- Responsibilities: Allow all, reference sitemap

## Error Handling

**Strategy:** Next.js built-in not-found pattern; no custom error boundaries present.

**Patterns:**
- `src/app/[locale]/[...rest]/page.tsx` catches any unmatched sub-route and calls `notFound()`
- `src/app/[locale]/not-found.tsx` renders locale-aware 404 with translation
- `src/app/not-found.tsx` root fallback for paths outside locale wrapper (no Tailwind classes, inline styles only)
- API route returns typed JSON error objects with appropriate HTTP status codes
- Notion API errors logged to `console.error`, propagated as 502 to client

## Cross-Cutting Concerns

**Analytics:** Umami Cloud via proxied script at `/api/umami/script.js` (rewrite in `next.config.ts`). Website ID from `NEXT_PUBLIC_UMAMI_ID` env var. Script only injected when env var is present.

**Fonts:** Loaded via `next/font/google` in `src/lib/fonts.ts`, injected as CSS variables in layout. JetBrains Mono fallback manually overridden in layout `<style>` tag to fix CLS.

**Accessibility:** Skip-to-content link in layout. Focus ring via `focus-visible` in globals.css. All nav links have aria-labels. Min touch target 44px on mobile.

**Dark mode:** Always dark — `class="dark"` hardcoded on `<html>`. No light mode toggle.

**Security headers:** Set in `vercel.json` — `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`.

---

*Architecture analysis: 2026-04-06*
