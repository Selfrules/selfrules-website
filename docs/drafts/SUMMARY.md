# Project Research Summary

**Project:** selfrules-website
**Domain:** Multilingual static personal portfolio site for senior technical PM
**Researched:** 2026-03-22
**Confidence:** HIGH

## Executive Summary

selfrules.org is a dark-mode-only, bilingual (IT/EN) personal professional site for Mattia De Luca, a Senior Technical Product Manager. The core product challenge is not technical complexity — the stack is well-understood and the content is fully written — but positioning precision: the site must read as the work of a thoughtful practitioner, not a self-promoter. Every technical and design decision flows from this constraint. The recommended approach is a statically rendered Next.js 16 site with App Router, next-intl 4.x for i18n, Tailwind CSS v4 for styling, and @next/mdx for the single blog post. The entire stack is composable, minimal, and ships near-zero client-side JavaScript.

The critical implementation insight is that the project spec references Next.js 15, but `create-next-app@latest` now installs Next.js 16.2 (released March 18, 2026). This is not a minor bump: Next.js 16 renames `middleware.ts` to `proxy.ts` and requires the exported function to be named `proxy`. Starting on 15 creates immediate upgrade debt with no benefit — build on 16.2 from day one. Combined with Tailwind v4's CSS-first configuration (no `tailwind.config.ts`), these two deviations from the spec are the most important decisions to internalize before writing a single line of code.

The main risks are all implementation-level, not architectural. Static rendering can be accidentally broken by omitting `setRequestLocale()` calls in next-intl pages, turning a fast CDN-cached site into a cold-start server-rendered one. Accessibility requires care around the darkest color tokens (`text-tertiary` #5A5A5E fails WCAG AA for body text). The locale redirect loop — where next-intl cookies send Italian users to `/it/` even when they follow English links — is prevented by a single config flag. None of these are blockers; all are well-documented with clear mitigations.

---

## Key Findings

### Recommended Stack

The stack is intentionally minimal. Next.js 16.2 with App Router provides static export via Turbopack (400% faster dev startup than webpack). React 19 ships with it; Server Components are the default. Tailwind CSS v4 is CSS-first: design tokens live in a `@theme { }` block in `globals.css`, not in a JS config file. next-intl 4.8.x handles all locale routing and translation loading with full static rendering support. @next/mdx (official package) handles the blog post — the abandoned `next-mdx-remote` and `Contentlayer` must not be used. Fonts load via `next/font/google`, which self-hosts Google Fonts at build time with zero runtime requests and zero CLS. Analytics is Umami Cloud (free tier, cookieless, no consent banner needed). Deployment is Vercel with zero-config CI/CD.

**Core technologies:**
- **Next.js 16.2**: Framework — current stable, Turbopack default, App Router, static export. Spec said 15, use 16.
- **next-intl 4.8.x**: i18n — de facto App Router standard, Server Component native, supports `localePrefix: 'as-needed'`.
- **Tailwind CSS v4**: Styling — CSS-first config via `@theme`, 5x faster builds. No `tailwind.config.ts`.
- **@next/mdx**: Blog content — official package, server-rendered, zero client JS. Not `next-mdx-remote`.
- **next/font/google**: Fonts — self-hosts Inter + JetBrains Mono at build time, eliminates CLS.
- **Umami Cloud**: Analytics — cookieless, GDPR-compliant, free tier sufficient for personal site traffic.
- **Vercel**: Hosting — native Next.js platform, auto preview deploys, free tier covers this project.

**What NOT to use:** `next-mdx-remote` (poorly maintained), `Contentlayer` (abandoned), `next-seo` (redundant with Metadata API), `tailwind.config.ts` (wrong paradigm for v4), `Framer Motion` (30KB for one fade-in animation), `middleware.ts` (deprecated in Next.js 16), `next-themes` (no light mode in v1).

### Expected Features

The audience is hiring managers, recruiters, and technical peers. They scan fast. The site must be complete and credible on first pass, and signal craft on second pass. Content is fully written across 7 source files in `../job-search-2026/selfrules-redesign/`.

**Must have (table stakes):**
- Responsive layout (375px–1920px) — 70%+ of visits are mobile
- Fast page load (Lighthouse 95+, LCP < 1.5s, First Load JS < 100KB) — slow = incompetent for a "technical PM who codes"
- Semantic HTML + WCAG AA contrast — legal baseline trending (ADA April 2026) + ethical
- Keyboard navigation + focus styles + skip-to-content link — WCAG 2.1 AA requirement
- hreflang tags for IT/EN — without them Google de-indexes one language version
- sitemap.xml + robots.txt — missing = unprofessional for a tech PM site
- Language toggle preserving current path — bilingual without toggle is confusing
- Mobile hamburger menu (accessible: focus trap + Escape key closes)
- Fixed navbar with scroll behavior (transparent → bg-primary/90 + backdrop-blur)
- Open Graph image — link previews on LinkedIn require this
- External links (LinkedIn, GitHub, email) + CV PDF download (no form gate)
- HTTPS — Vercel provides free SSL automatically

**Should have (differentiators):**
- Dark-mode-only 0px border-radius aesthetic — the visual identity IS the differentiator; do not add light mode in v1
- Typography-as-hero (no hero image) — breaks the stock-photo-plus-tagline pattern, signals confidence
- MetricCard pattern (numbers + context in monospace font) — PM rigor made visible
- Monospace tag system (JetBrains Mono for labels, dates, metrics) — consistent "code-adjacent" visual language
- Scroll-triggered fade-in via IntersectionObserver (no library) — polish without weight, must respect `prefers-reduced-motion`
- JSON-LD structured data (Person + BreadcrumbList + Article) — rich search results
- Cookieless analytics with footer callout — "This site doesn't use tracking cookies" as a proof point
- Case study card hover micro-interactions (translate-y -2px + border-accent, 200ms, restraint is the point)
- @tailwindcss/typography prose styling for blog and Approach page
- "Designed and built by Mattia De Luca" footer credit — the hand-built site IS the differentiator made visible

**Defer to v2:**
- Dynamic OG images per page — static OG image sufficient for v1
- Case study detail pages `/work/[slug]` — need 3+ cases with full write-ups first
- Light mode — dark-only is the identity; revisit only if user feedback demands it
- Blog CMS — add only when post count exceeds 5

**Never build:**
Contact form, newsletter, testimonials carousel, chat widget/Calendly, "hire me" banner, cookie consent banner, search, animated page transitions, comments, methodology branding, PWA/service worker, multi-language URL slugs (`/it/chi-sono`).

### Architecture Approach

The architecture is statically rendered at build time — zero server-side computation at runtime. Every page is a Server Component by default. Client Components are limited to exactly four: `navbar.tsx` (scroll listener), `mobile-menu.tsx` (toggle state + focus trap), `language-toggle.tsx` (locale switch), and `scroll-reveal.tsx` (IntersectionObserver). The locale routing uses `proxy.ts` (Next.js 16's renamed middleware) with a `[locale]` dynamic segment in the app directory. Translations are single JSON files per locale with namespaced keys. Design tokens live exclusively in `globals.css` under `@theme { }`.

**Major components:**
1. **`proxy.ts` + `i18n/routing.ts`**: Locale detection and routing — the entire i18n layer depends on this being correct from day one.
2. **`[locale]/layout.tsx`**: Shell — NextIntlClientProvider, Navbar, Footer, font variables applied here.
3. **`components/ui/*`**: Stateless primitives (Button, MetricCard, CaseStudyCard, Tag, SectionLabel, ScrollReveal) — built once, used everywhere.
4. **`components/sections/*`**: Homepage sections (Hero, HowIWork, Timeline, MetricsGrid, NowCards, ContactSection) — establish visual language.
5. **`lib/metadata.ts`**: SEO helper — centralizes hreflang and OG tag generation for all pages.
6. **`messages/en.json` + `messages/it.json`**: All translatable content — one file per locale, namespaced by page/component (~200-300 keys, single file is simpler than splitting).

**Build order:** Foundation (routing + tokens + fonts) → Shell (layout + nav + footer) → UI Primitives → Homepage → Inner Pages → SEO + Polish.

### Critical Pitfalls

1. **`middleware.ts` instead of `proxy.ts` (Next.js 16)** — Using the old name silently breaks all locale routing with no error messages. Fix: use `proxy.ts` from project creation, export function as `proxy`. Verify immediately: visit `/it` after scaffold.

2. **Missing `setRequestLocale()` forces dynamic rendering** — next-intl's `useTranslations()` calls `headers()` by default, making every page a cold start on Vercel. Fix: call `setRequestLocale(locale)` at the top of every layout and page, and export `generateStaticParams`. Verify via `next build` — static pages show a circle, not a lambda.

3. **`tailwind.config.ts` with Tailwind v4** — Dual source of truth creates silent conflicts. Fix: all design tokens in `@theme { }` in `globals.css`, `@plugin` directive for plugins. If `tailwind.config.ts` exists AND `@theme` exists, you have this pitfall.

4. **Cookie redirect loop with `localePrefix: 'as-needed'`** — next-intl cookies redirect Italian users to `/it/` even on English links, breaking shared URLs. Fix: `localeDetection: false` in proxy config.

5. **`text-tertiary` (#5A5A5E) fails WCAG AA** — contrast ratio ~2.4:1, fails for body text. Fix: use only for decorative/non-essential elements at large sizes; use `text-secondary` (#8A8A8E, ~5.2:1) for supporting text.

**Additional pitfalls worth flagging:** Tailwind v4 silent breakage from v3 patterns (`bg-gradient-to-*` is now `bg-linear-to-*`; default border color changed to `currentColor`); `@tailwindcss/typography` must be registered via `@plugin` in CSS, not in a JS config; `params` in Next.js 16 is a Promise and must be awaited; language toggle must use next-intl's `usePathname()` + `useRouter()` to preserve current path.

---

## Implications for Roadmap

Based on the dependency graph in ARCHITECTURE.md and the pitfall concentration in PITFALLS.md, a 6-phase structure is appropriate. The architecture file's build order maps directly onto phases.

### Phase 1: Foundation
**Rationale:** Every other component depends on i18n routing, design tokens, and font loading being correct. Getting `proxy.ts` wrong silently breaks the entire site with no diagnostic signal. This phase must be verified before any UI is written.
**Delivers:** Working locale routing (EN + IT), complete design system tokens in CSS, Inter + JetBrains Mono fonts loaded, project scaffolded with correct Next.js 16 + Tailwind v4 patterns.
**Addresses:** Responsive baseline (tokens), font loading (CLS prevention), i18n routing correctness.
**Avoids:** Pitfall 1 (`proxy.ts`), Pitfall 3 (`tailwind.config.ts`), Pitfall 4 (cookie redirect loop), Pitfall 5 (font CLS).

### Phase 2: Shell
**Rationale:** Navbar, Footer, and layout wrapper are used by every single page. They must exist and be correct before any page content can be built. Language toggle and mobile menu are Client Components with non-trivial accessibility requirements.
**Delivers:** Navigable skeleton at all viewports. Language toggle working. Accessible mobile menu. 404 page. Umami analytics script integrated.
**Addresses:** Fixed navbar with scroll behavior, mobile hamburger (accessible), language toggle, external links, CV PDF download, footer credit, cookieless analytics.
**Avoids:** Pitfall 12 (language toggle path preservation with next-intl hooks), Pitfall 11 (border-radius global reset).

### Phase 3: UI Primitives
**Rationale:** Pages compose primitives. Building primitives before pages prevents API thrash — the MetricCard, CaseStudyCard, Tag, and SectionLabel interfaces stabilize here and don't change when pages are built.
**Delivers:** Full component library: Button (primary/secondary), MetricCard, CaseStudyCard, ProjectCard, TimelineBlock, Tag, SectionLabel, ScrollReveal (IntersectionObserver with `prefers-reduced-motion`).
**Addresses:** MetricCard pattern, monospace tag system, scroll fade-in animations, case study card hover micro-interactions, Section spacing wrapper.
**Avoids:** Inconsistent component APIs across pages, duplicated component implementations.

### Phase 4: Homepage
**Rationale:** The homepage has all 6 sections and is the highest-complexity page. Building it first establishes the visual language that all inner pages inherit. It also forces the `setRequestLocale` / `generateStaticParams` static rendering pattern to be correct before it propagates to 5 more pages.
**Delivers:** Complete homepage: Hero (typography-as-hero), How I Work (3 columns), Journey (timeline), Numbers (MetricCard grid), Now (2 cards), Contact section. Both languages.
**Addresses:** Typography-as-hero, MetricCard in context, section spacing system, static rendering setup.
**Avoids:** Pitfall 2 (dynamic rendering — must set `setRequestLocale` here).

### Phase 5: Inner Pages
**Rationale:** About, Work, Lab, Approach, and Blog share no inter-dependencies. They can be built in any order, all reusing primitives and patterns established in Phase 3-4. MDX blog setup is additive.
**Delivers:** All remaining page types: About (narrative long-form), Work (case study cards), Lab (project cards with status), Approach (numbered essay, 720px prose), Blog listing + MDX post (bilingual from filesystem). Both languages throughout.
**Addresses:** Prose styling for long-form content, CaseStudyCard and ProjectCard in real context, blog empty state copy.
**Avoids:** Pitfall 6 (`@tailwindcss/typography` must be `@plugin` in CSS), Pitfall 9 (MDX must be wrapped in `prose prose-invert`).

### Phase 6: SEO, Accessibility, and Polish
**Rationale:** SEO metadata is additive — it doesn't block rendering but must be present before launch. Accessibility audit and Lighthouse verification go last because they validate the complete site, not individual components.
**Delivers:** `generateMetadata` on all pages, hreflang alternates with `x-default`, JSON-LD (Person + BreadcrumbList + Article), `sitemap.ts`, `robots.ts`, static OG image, WCAG AA color contrast verification, keyboard navigation audit, Lighthouse 95+ score, Umami proxy rewrite (ad blocker bypass).
**Addresses:** hreflang, sitemap, robots.txt, JSON-LD structured data, OG image, accessibility audit.
**Avoids:** Pitfall 8 (missing hreflang), Pitfall 13 (dark mode a11y — text-tertiary must not appear on body text), Pitfall 10 (Umami blocked by ad blockers).

### Phase Ordering Rationale

- Foundation before Shell because Shell depends on i18n routing and font CSS variables being available.
- Shell before Primitives because the `Section` wrapper (used by primitives) lives in the layout layer, and font variables must be applied to `<html>` first.
- Primitives before Pages because pages compose primitives — changing a component API after building pages costs more.
- Homepage before inner pages because it is the most complex page and establishes the visual language that inner pages inherit.
- SEO and polish last because metadata is purely additive and accessibility validation requires the complete site to be meaningful.
- The `setRequestLocale` + `generateStaticParams` pattern established in Phase 4 propagates automatically to Phase 5 pages by convention.

### Research Flags

All phases have well-documented patterns. No phase requires a dedicated research-phase during planning.

**Phases requiring extra implementation care (not research, but attention):**
- **Phase 1:** `proxy.ts` export syntax needs immediate verification (visit `/it` after scaffold). Tailwind v4 `@theme` + `next/font` CSS variable integration should be tested before building UI.
- **Phase 4:** Verify `next build` output after first page — static circles, not lambda lambdas. If lambdas appear, `setRequestLocale` is missing.
- **Phase 5:** Bilingual MDX content loading (`content/blog/en/` vs `content/blog/it/` based on locale) is straightforward but needs a working `lib/blog.ts` helper written once.

**Phases with standard patterns (no special care needed):**
- Phase 2 (Shell): Standard layout with documented next-intl hooks.
- Phase 3 (Primitives): Pure UI components, no external dependencies.
- Phase 6 (SEO/Polish): All patterns are Next.js built-ins.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All technologies verified against official docs. Version compatibility matrix confirmed. Next.js 16.2 + next-intl 4.8.x + Tailwind v4 compatibility cross-verified. |
| Features | HIGH | Sourced from reference sites (kevinyien.com verified), PM portfolio guides, WCAG 2026 standards, and fully-written copy files. Table stakes and differentiators are unambiguous. |
| Architecture | HIGH | Standard App Router patterns with next-intl. Directory structure and data flow derived from official docs. Build order validated against dependency graph. |
| Pitfalls | HIGH | All critical pitfalls documented with official sources (Next.js migration guide, next-intl docs, Tailwind v4 upgrade guide). Mitigation strategies are concrete and testable. |

**Overall confidence:** HIGH

### Gaps to Address

- **`proxy.ts` exact export syntax with next-intl 4.x on Next.js 16:** The rename is documented but one source is community-level (not official next-intl docs). Verify the exact export pattern on first run — test `/it` route immediately.
- **Umami proxy rewrite effectiveness:** The ad blocker bypass via Next.js rewrites is community-documented, not in official Umami docs. If analytics shows 0 hits from browsers with ad blockers after Phase 6, investigate.
- **`text-tertiary` usage audit:** Color #5A5A5E (~2.4:1 contrast) must be strictly decorative. During Phase 6 audit, run every instance through a contrast checker to confirm no body text accidentally uses this token. This requires human review, not just code.

---

## Sources

### Primary (HIGH confidence)
- [Next.js 16 blog post](https://nextjs.org/blog/next-16) — version confirmation, Turbopack stable
- [Next.js 16.2 blog post](https://nextjs.org/blog/next-16-2) — latest stable version
- [Next.js Metadata API docs](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) — generateMetadata, OG, hreflang
- [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx) — @next/mdx setup
- [Next.js upgrade guide v16](https://nextjs.org/docs/app/guides/upgrading/version-16) — proxy.ts migration, params as Promise
- [next-intl App Router setup](https://next-intl.dev/docs/getting-started/app-router) — routing, static rendering, setRequestLocale
- [next-intl routing configuration](https://next-intl.dev/docs/routing/configuration) — localeDetection, localePrefix
- [next-intl proxy/middleware docs](https://next-intl.dev/docs/routing/middleware) — proxy pattern
- [Tailwind CSS v4 announcement](https://tailwindcss.com/blog/tailwindcss-v4) — CSS-first config, @theme
- [Tailwind v4 Next.js guide](https://tailwindcss.com/docs/guides/nextjs) — installation, @plugin
- [Tailwind CSS v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide) — v3 patterns that silently break in v4
- [Umami Cloud](https://umami.is/) — free tier, cookieless setup
- [Vercel Academy: next/font](https://vercel.com/academy/nextjs-foundations/fonts-with-next-font) — variable font setup pattern

### Secondary (MEDIUM confidence)
- [next-intl proxy.ts fix for Next.js 16](https://www.buildwithmatija.com/blog/next-intl-nextjs-16-proxy-fix) — proxy export pattern (community source)
- [Next.js Performance Optimization](https://pagepro.co/blog/nextjs-performance-optimization-in-9-steps/) — Lighthouse strategies
- [Next.js Multilingual SEO Guide](https://saas.catlove.cc/en/blog/nextjs-i18n-seo-guide) — hreflang pitfalls
- [Dark Mode SEO & UX Trends 2026](https://grewdev.com/dark-mode-web-design-seo-ux-trends-for-2026/) — dark-mode-as-identity validation
- [WCAG 2.1 AA Requirements 2026](https://www.accessibility.works/blog/wcag-ada-website-compliance-standards-requirements) — contrast ratios, ADA April 2026

### Tertiary (reference and context)
- [kevinyien.com](https://kevinyien.com) — primary design reference: minimal IC personal site, text-only hero, "Posts" not "Blog"
- [SiteBuilder Report - PM Portfolios](https://www.sitebuilderreport.com/inspiration/product-manager-portfolios) — pattern analysis for differentiators vs table stakes
- [Figma Web Design Trends 2026](https://www.figma.com/resource-library/web-design-trends/) — current design trend context for dark-mode decision

---
*Research completed: 2026-03-22*
*Ready for roadmap: yes*
