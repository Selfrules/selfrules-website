# Codebase Concerns

**Analysis Date:** 2026-04-06

## Tech Debt

**Duplicated `markdownBold` function across all case study pages:**
- Issue: The same `markdownBold(text: string)` regex function is copy-pasted identically into every case study and lab page
- Files: `src/app/[locale]/work/payments-rescue/page.tsx`, `src/app/[locale]/work/cashless-system/page.tsx`, `src/app/[locale]/work/leadsbridge-redesign/page.tsx`, `src/app/[locale]/lab/casahunter/page.tsx`
- Impact: Any change (new markdown syntax support, escaping logic) must be applied in 4 places. Risk of divergence over time.
- Fix approach: Extract to `src/lib/markdown.ts` and import everywhere

**Post list duplicated across `notes/page.tsx` and `src/lib/posts.ts`:**
- Issue: The canonical list of post slugs exists in `src/lib/posts.ts` as `POSTS` const, but `src/app/[locale]/notes/page.tsx` re-declares the same 8 slugs manually in a `posts` array (line 32–97) built from translation keys
- Files: `src/lib/posts.ts`, `src/app/[locale]/notes/page.tsx`
- Impact: Adding a new note requires editing both files. Easy to forget one.
- Fix approach: Drive the notes list from `POSTS` in `src/lib/posts.ts`; iterate over it to build translation lookups

**`baseUrl` hardcoded string repeated in many files:**
- Issue: `const baseUrl = 'https://selfrules.org'` is declared inline in ~10+ files: `src/app/sitemap.ts`, `src/lib/metadata.ts`, `src/components/layout/NoteLayout.tsx`, every work page, every note layout
- Files: widespread across `src/app/[locale]/work/*/page.tsx`, `src/app/[locale]/notes/*/page.tsx`, `src/lib/metadata.ts`
- Impact: If the domain ever changes, or for staging environments, it must be updated everywhere
- Fix approach: Export `BASE_URL` from `src/lib/constants.ts` (or `src/lib/metadata.ts`) and import it

**`generateStaticParams` duplicated with identical content:**
- Issue: Every page file contains `export function generateStaticParams() { return [{ locale: 'en' }, { locale: 'it' }]; }` verbatim
- Files: all ~15 page files in `src/app/[locale]/`
- Impact: Low — but makes locale changes require touching every page file
- Fix approach: Export a shared `LOCALE_PARAMS` constant from `src/i18n/routing.ts` and reference it

**Locale-conditional string formatting duplicated in every component:**
- Issue: `locale === 'it' ? `${baseUrl}/it/...` : `${baseUrl}/...`` pattern is repeated 30+ times across pages and NoteLayout
- Files: `src/components/layout/NoteLayout.tsx`, `src/app/[locale]/notes/page.tsx`, `src/app/[locale]/contact/page.tsx`, etc.
- Impact: Error-prone when URL structure changes; the pattern is not centralized
- Fix approach: Add a `buildLocalizedUrl(locale, path)` helper to `src/lib/metadata.ts`

**Hard-coded page title in `payments-rescue/page.tsx`:**
- Issue: The `<h1>` heading and JSON-LD headline are hardcoded English/Italian strings inline (lines 99–100, 138–141) instead of using translation keys like other pages
- Files: `src/app/[locale]/work/payments-rescue/page.tsx`
- Impact: Copy changes require code edits instead of message file edits
- Fix approach: Add translation keys and use `t('payments.pageTitle')` consistently

---

## Security Considerations

**`dangerouslySetInnerHTML` with `markdownBold()` on translation strings:**
- Risk: The `markdownBold` function replaces `**text**` with `<strong>text</strong>` and the result is injected via `dangerouslySetInnerHTML`. If translation strings ever contain untrusted content (e.g., user-submitted feedback accidentally reflected, or a CMS edit with script tags), this is an XSS vector.
- Files: `src/app/[locale]/work/payments-rescue/page.tsx` (lines 203–244), `src/app/[locale]/work/cashless-system/page.tsx`, `src/app/[locale]/work/leadsbridge-redesign/page.tsx`, `src/app/[locale]/lab/casahunter/page.tsx`
- Current mitigation: Strings come from hardcoded JSON files in `src/messages/`, so content is currently trusted. No external CMS.
- Recommendations: Replace the `dangerouslySetInnerHTML` pattern entirely by using `t.rich()` with a `strong` component, which is already used correctly in other parts of the codebase (e.g., `src/app/[locale]/page.tsx` line 39–42). No sanitization library is in use.

**In-memory rate limiting resets on serverless cold starts:**
- Risk: Serverless functions (Vercel) spawn new instances per request; the `rateLimitMap` in `src/app/api/feedback/route.ts` is process-local and does not survive restarts or scale across instances
- Files: `src/app/api/feedback/route.ts` (lines 3–31)
- Current mitigation: Comment acknowledges this: "resets on server restart — fine for a personal site". The `setInterval` cleanup also has no effect across Vercel function instances.
- Recommendations: For a personal site this is acceptable, but note that in a burst scenario (multiple simultaneous requests from different Vercel instances) rate limiting will not work. Upgrade path: use Vercel KV or an Edge Config store if abuse occurs.

**No Content-Security-Policy (CSP) header:**
- Risk: The `vercel.json` sets `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy`, but no CSP header is present. The site uses inline `<style dangerouslySetInnerHTML>` in `src/app/[locale]/layout.tsx` (line 51) and JSON-LD inline scripts via `src/components/seo/json-ld.tsx`, which would require `'unsafe-inline'` in any future CSP.
- Files: `vercel.json`, `src/app/[locale]/layout.tsx`, `src/components/seo/json-ld.tsx`
- Current mitigation: Frame blocking and type sniffing headers are present. No CSP.
- Recommendations: Adding a CSP would require addressing the inline style and `<script>` tags. The inline style (font fallback fix) and JSON-LD scripts are the blockers. The inline style could be moved to a `.css` file; JSON-LD scripts could use `nonce` or `sha256` hashes.

**Umami analytics proxied through `/api/umami/` with open rewrite:**
- Risk: The `next.config.ts` rewrite `source: '/api/umami/:path*'` forwards all subpaths to `https://cloud.umami.is/:path*`. This means any path under `/api/umami/` on the production domain proxies to Umami, including any POST requests a user crafts.
- Files: `next.config.ts` (lines 19–25)
- Current mitigation: Umami validates requests on their side. The proxy exists purely to bypass adblockers.
- Recommendations: Acceptable for the use case; document intent clearly.

---

## Performance Bottlenecks

**OG image font loading via `fetch` from local assets that don't exist:**
- Problem: `src/lib/og-image.tsx` fetches three font files using `new URL('@/assets/fonts/inter.ttf', import.meta.url)` at OG image generation time. The `src/assets/` directory does not exist.
- Files: `src/lib/og-image.tsx` (lines 124–146)
- Cause: Font assets referenced in code are missing. OG image generation will throw at runtime whenever a page with a dynamic OG image is requested.
- Improvement path: Either add the font `.ttf` files to `src/assets/fonts/`, or remove the font loading (use system fonts, accepting reduced fidelity), or switch to a static `og-image.png` for all pages. Per-page `opengraph-image.tsx` files exist alongside pages and may override this, but the shared utility is broken.

**`ScrollReveal` forces client-side rendering on all homepage sections:**
- Problem: Every section on `src/app/[locale]/page.tsx` is wrapped in `<ScrollReveal>`, a `'use client'` component. This pushes all section hydration to the client and prevents RSC streaming benefits for the homepage.
- Files: `src/components/ui/scroll-reveal.tsx`, `src/app/[locale]/page.tsx`
- Cause: Intersection Observer requires browser APIs, so the wrapper must be a client component
- Improvement path: Use CSS-only `@keyframes` animations triggered by `IntersectionObserver` in a minimal script, or apply `animation-timeline: view()` (scroll-driven animations) for modern browsers with a no-JS fallback

**All messages (both locales) loaded into `NextIntlClientProvider`:**
- Problem: `src/app/[locale]/layout.tsx` calls `await getMessages()` which returns ALL translation keys for the current locale and passes them to `NextIntlClientProvider`. The `src/messages/en.json` and `src/messages/it.json` files contain the full site copy including long case study paragraphs. This sends all copy to the client bundle.
- Files: `src/app/[locale]/layout.tsx` (line 42), `src/messages/en.json`, `src/messages/it.json`
- Cause: The full message file is provided to allow client components (FeedbackWidget, CountUpNumber) to access translations
- Improvement path: Scope messages per page or namespace rather than passing the entire file. Use `NextIntlClientProvider messages={pick(messages, ['feedbackWidget', 'a11y'])}` to limit client bundle size.

---

## Fragile Areas

**`t.raw()` type casting throughout case study pages:**
- Files: `src/app/[locale]/work/payments-rescue/page.tsx`, `src/app/[locale]/work/cashless-system/page.tsx`, `src/app/[locale]/work/leadsbridge-redesign/page.tsx`, `src/app/[locale]/lab/casahunter/page.tsx`
- Why fragile: `t.raw('payments.context.content') as string[]` bypasses TypeScript type checking. If the corresponding JSON key changes shape (e.g., becomes an object instead of an array), the page will fail at runtime with no compile-time error.
- Safe modification: Always update both `src/messages/en.json` and `src/messages/it.json` together, keep the array structure consistent, and test all 4 case study pages after any message structure change.
- Test coverage: No unit tests cover message key presence or shape. E2E tests in `e2e/navigation.spec.ts` cover navigation but not content rendering.

**MDX content loaded via dynamic `import()` with locale in path:**
- Files: `src/app/[locale]/notes/*/page.tsx` (all 8 note pages, e.g., line 32–34 in `why-i-prototype-in-code/page.tsx`)
- Why fragile: `await import(`./content.${locale}.mdx`)` is a dynamic import with a runtime string. If a `.mdx` file is missing for one locale, the page throws at runtime with no build-time error. Webpack/Turbopack bundles both files but only detects missing files at build time if the pattern is statically analyzable.
- Safe modification: Always create both `content.en.mdx` and `content.it.mdx` together when adding a new note. Never rename locale suffixes.
- Test coverage: No test verifies both locale content files exist per note.

**`src/lib/posts.ts` is the single source of truth for note ordering:**
- Files: `src/lib/posts.ts`
- Why fragile: `getAdjacentPosts()` uses array index arithmetic. The order in the `POSTS` array determines next/prev navigation. The array is in reverse-chronological order (newest first = index 0 = "next" when navigating forward). Adding a post requires inserting at the correct index or navigation order breaks silently.
- Safe modification: When adding a new note, prepend to the `POSTS` array. The `prev`/`next` logic at lines 15–18 is inverted: `next = POSTS[index - 1]` and `prev = POSTS[index + 1]`, meaning "older" posts are called `prev` in the UI but stored at higher indices.

**`/dev/components` page exposed behind a `process.env.NODE_ENV` check only:**
- Files: `src/app/[locale]/dev/components/page.tsx` (lines 15–16)
- Why fragile: The page calls `notFound()` in production, but the route exists in the built output. If `NODE_ENV` is misconfigured in a preview/staging deployment, the component library page is publicly accessible with internal design system details.
- Safe modification: The check `if (process.env.NODE_ENV === 'production') notFound()` is correct for standard builds. Acceptable risk for a personal site.

---

## Missing Critical Features

**No input sanitization on email field in FeedbackWidget:**
- Problem: The email field in `src/components/ui/FeedbackWidget.tsx` is sent to the feedback API as-is. The API validates only message length and type; no email format validation or sanitization is performed server-side.
- Blocks: Nothing currently; Notion receives invalid email values silently.
- Files: `src/app/api/feedback/route.ts` (line 62, no email validation), `src/components/ui/FeedbackWidget.tsx`

**No error boundary for MDX content rendering:**
- Problem: MDX content is rendered directly as `<Content />` in note pages with no React error boundary. A broken MDX file (syntax error, missing import) will crash the entire page with an unhandled error.
- Files: `src/app/[locale]/notes/*/page.tsx`, `src/app/[locale]/[...rest]/page.tsx` only calls `notFound()`
- Blocks: Graceful error display for malformed MDX

---

## Test Coverage Gaps

**No tests for i18n routing or locale switching:**
- What's not tested: That the geo-redirect logic in `src/proxy.ts` fires correctly for Italian countries, that the `preferred-locale` cookie suppresses redirects, and that the language toggle sets the cookie correctly
- Files: `src/proxy.ts`, `src/components/layout/LanguageToggle.tsx`
- Risk: Locale routing breaks silently on Vercel if the `x-vercel-ip-country` header behavior changes
- Priority: Medium

**No tests for the feedback API route:**
- What's not tested: Rate limiting behavior, Notion API error handling (502), validation edge cases (empty message, malformed JSON)
- Files: `src/app/api/feedback/route.ts`
- Risk: Silent failures when Notion API is unavailable or rate limit logic regresses
- Priority: Low (personal site, low volume)

**No tests verifying message key parity between EN and IT:**
- What's not tested: That every key present in `src/messages/en.json` has a corresponding key in `src/messages/it.json` and vice versa
- Files: `src/messages/en.json`, `src/messages/it.json`
- Risk: Missing translation keys cause `next-intl` to fall back silently or throw, depending on configuration. With `localeDetection: false`, Italian users would see English text without any warning.
- Priority: High — this is the most likely category of silent regression when adding content

**E2E tests cover navigation only, not content:**
- What's not tested: That case study pages render their paragraphs, that metrics display, that the feedback widget submits
- Files: `e2e/navigation.spec.ts`
- Risk: A broken `t.raw()` cast or missing translation array renders a blank section with no test failure
- Priority: Medium

---

## Dependencies at Risk

**Remotion in devDependencies adds significant build surface:**
- Risk: `@remotion/bundler`, `@remotion/cli`, `@remotion/renderer` are in devDependencies at version `^4.0.439`. Remotion is a video rendering SDK unrelated to the website. It's used for generating a CasaHunter demo video but is otherwise inactive in the main app.
- Impact: Increases `npm install` time and attack surface. The `remotion/` directory at project root contains working video composition files.
- Migration plan: No action required unless Remotion introduces a breaking change or security advisory; it does not run in production.

---

*Concerns audit: 2026-04-06*
