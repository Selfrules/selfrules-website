# Feature Landscape

**Domain:** Personal professional site for senior technical PM (dark-mode, multilingual, "Modello B" aspirational identity)
**Researched:** 2026-03-22

---

## Table Stakes

Features users (hiring managers, recruiters, peers) expect. Missing = site feels amateurish or incomplete.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Responsive layout (375px-1920px+)** | 70%+ traffic is mobile; hiring managers browse on phones | Medium | Must not break at any viewport. Content-width capping at 1080px prevents stretching on ultrawide. |
| **Fast page load (Lighthouse 95+)** | Slow sites signal incompetence for a "technical PM who codes" | Medium | Next.js SSG + no images in v1 makes this achievable. Target LCP < 1.5s, CLS < 0.05, INP < 100ms. |
| **Proper SEO meta tags** | The "second click" -- recruiter finds you on LinkedIn, then Googles your name | Low | Title, description, canonical, og:title/description/image per page. Next.js App Router metadata API handles this natively. |
| **hreflang tags for IT/EN** | Google must index the right locale for the right audience | Low | Mandatory for multilingual. Without them, Google may show IT version to EN searchers. next-intl handles routing; hreflang must be added in layout metadata. |
| **sitemap.xml + robots.txt** | Standard crawlability. Missing = unprofessional for a tech PM site | Low | Next.js generates these natively with `app/sitemap.ts` and `app/robots.ts`. |
| **Semantic HTML** | Accessibility baseline; screen readers, SEO crawlers | Low | Use `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`. No `<div>` soup. |
| **WCAG AA color contrast** | Legal requirement trending (April 2026 ADA rule); ethical baseline for a PM site | Low | #F5F5F0 on #0A0A0B = contrast ratio ~18:1 (excellent). #8A8A8E on #0A0A0B = ~3.9:1 -- may need adjustment for body text, acceptable only for decorative labels. |
| **Keyboard navigation + focus styles** | Accessibility table stakes. Broken keyboard nav = inaccessible site | Low | Visible focus rings on all interactive elements. Tab order must be logical. |
| **Skip-to-content link** | WCAG 2.1 AA requirement for keyboard users | Low | Hidden visually, visible on focus. Links to `<main>`. |
| **Language toggle** | Bilingual site without toggle = confusing. Users must control their locale | Low | Toggle in navbar. Preserves current page path. next-intl routing handles this. |
| **404 page with personality** | Dead ends frustrate. A good 404 shows craft | Low | Already spec'd: "This page doesn't exist. But the rest of the site does." -- perfect tone. |
| **External links (LinkedIn, GitHub, email)** | Visitors need to verify you exist elsewhere; hiring managers want LinkedIn | Low | Footer + Contact section. mailto: for email, direct links for social. |
| **CV/resume download** | Hiring managers expect this on professional sites | Low | Direct PDF link, no form gate. In Footer and Contact section only (Modello B). |
| **Mobile hamburger menu** | Nav with 5+ items needs collapse on mobile | Medium | Full-screen overlay on dark bg. Must be accessible (focus trap, escape key closes). |
| **Fixed navbar with scroll behavior** | Standard UX pattern; users expect persistent navigation | Medium | Transparent initially, bg-primary/90 + backdrop-blur on scroll. Border-bottom for separation. |
| **Open Graph image** | Links shared on LinkedIn/Twitter need a branded preview | Medium | Static OG image for v1 is fine. Dynamic OG via `next/og` ImageResponse is a differentiator (see below). |
| **HTTPS** | Chrome marks HTTP as "Not Secure". Non-negotiable. | Low | Vercel provides free SSL automatically. |

---

## Differentiators

Features that set the site apart from generic PM portfolios. Not expected, but signal craft and intentionality.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Dark-mode-only aesthetic with 0px border-radius** | Immediate visual differentiation from the sea of white-background, rounded-corner portfolio sites. Signals deliberate design thinking -- this is a choice, not a default. | Low | Already spec'd. The constraint IS the identity. Do not add light mode in v1. |
| **Typography-as-hero (no hero image)** | Breaks the "hero image + tagline" pattern. Shows confidence -- the words carry the weight, not stock photos. Reference: kevinyien.com uses text-only hero. | Low | Inter 700 at clamp(40px, 5vw, 64px). Typography must be impeccable because nothing competes for attention. |
| **Metrics with context (MetricCard pattern)** | Most PM portfolios list accomplishments as bullets. Showing numbers WITH context (meaning, attribution) demonstrates PM rigor -- "numbers, not words" backed by actual specificity. | Medium | 6 cards in responsive grid. Accent color for numbers, monospace font, context in muted text. Hover-to-accent-border adds tactile quality. |
| **"Notes" not "Blog"** | Naming signals identity: "Blog" = content marketing. "Notes" = IC thinking out loud. Matches kevinyien.com "Posts" pattern. Anti-reference: "Blog" on melissaperri.com = guru energy. | Low | Already spec'd in microcopy. Empty state reinforces: "Notes come when there's something worth saying." |
| **Scroll-triggered fade-in animations** | Adds perceived polish without heavy JS. Creates a "reveal" rhythm as user scrolls through sections. | Low | IntersectionObserver, no libraries. Must respect `prefers-reduced-motion`. CSS-only transitions (opacity + translateY). |
| **Dynamic OG images per page** | When someone shares `/work` on LinkedIn, the preview shows "Work -- Mattia De Luca" with the dark aesthetic, not a generic screenshot or missing image. | Medium | Next.js `ImageResponse` API. Generate at build time per route. Dark bg + Inter font + accent color = branded previews. |
| **JSON-LD structured data (Person + Article + BreadcrumbList)** | Enables rich search results. Person schema on homepage can generate knowledge panel. Article schema on blog shows publication date in SERPs. | Low | Person: name, jobTitle, url, sameAs. BreadcrumbList on inner pages. Article on blog posts. |
| **Monospace tags as visual system** | JetBrains Mono for labels, dates, metrics, and tags creates a consistent "code-adjacent" visual language reinforcing the "technical PM" identity without being a developer portfolio. | Low | `font-mono, 12-13px, uppercase, tracking-wide`. Apply consistently across all pages for coherence. |
| **Cookieless analytics (Umami)** | "This site doesn't use tracking cookies" -- no banner needed. Shows respect for visitors. Also a proof point: this PM chooses tools thoughtfully, not defaults. | Low | Umami script in head. One line of microcopy in footer. The absence of a cookie banner IS the feature. |
| **Case study cards with hover micro-interactions** | Subtle translate-y(-2px) + border-accent on hover creates tactile feel. Shows frontend craft without being gratuitous. The restraint is the point. | Low | Keep transitions at 200ms. Only border color change + slight lift. No scale transforms, no shadows. |
| **Prose styling for long-form content** | Blog post and Approach page with proper line-height (1.7-1.8), content-width (720px), and generous spacing signals care for readability -- the kind of care a PM should have for their product. | Low | `@tailwindcss/typography` plugin. Customize prose colors for dark mode palette. |
| **"Designed and built by Mattia De Luca" footer credit** | Ultimate proof point for a "PM who codes." Not "powered by Webflow" or "made with Squarespace." The fact that this site is hand-built IS the differentiator made visible. | Low | Already in microcopy. Prominent but not loud. |
| **Availability tag (inline, not banner)** | "Available EU remote / US remote / Italy hybrid" as a monospace tag -- not a screaming banner. Modello B compliance: availability exists but doesn't lead. | Low | Contact section and footer only. Monospace, muted color. Visible to those who look, invisible to those who don't. |

---

## Anti-Features

Features to explicitly NOT build. Each would undermine the "Modello B" positioning or add complexity without value.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| **Light mode toggle** | Adds CSS complexity, dilutes the dark-mode-as-identity decision. Dual-theming doubles QA surface. v1 has one aesthetic and owns it. | Ship dark-only. Revisit in v2 only if user feedback demands it. |
| **Contact form** | Forms signal "I'm open for business" (coach/consultant pattern). A direct email link signals "I'm a person you can reach." Forms also need spam handling, validation, backend. | mailto: link. Direct and personal. |
| **CMS for blog** | One post in v1. A CMS adds auth, API, build complexity, and deployment dependencies for zero value at this scale. | Hardcoded MDX or translation JSON. Add CMS only when post count exceeds 5-10. |
| **Newsletter signup** | Content marketing pattern. "Subscribe to my newsletter" = coach/guru energy. Incompatible with Modello B positioning. | Let the content speak. People who want updates will follow on LinkedIn. |
| **Testimonials / social proof carousel** | "Here's what people say about me" is explicitly self-promotional. Incompatible with "the subject is the result, not Mattia" principle. | Case studies with measurable results. The numbers are the proof. |
| **"Hire me" / "Open to work" banner** | Kills Modello B instantly. The site must feel like a professional's home, not a job application. | Availability only in Contact section and Footer, stated factually, not desperately. |
| **Animated page transitions** | Over-engineered for a content-driven site. Adds JS weight (Framer Motion = 30KB+), complexity, and can feel like showing off. Reference sites (kevinyien.com, linear.app) don't use them. | Scroll-triggered fade-ins only. Simple, respectful of motion preferences. |
| **Chat widget / Calendly embed** | Consultant/coach pattern. "Book a call with me" is anti-IC positioning. | Email link. If someone wants to talk, they'll write. |
| **Framework/methodology branding** | Naming your approach "The Selfrules Method" or similar = guru energy. The Approach page already avoids this by using numbered sections without a branded name. | Describe how you work without branding it. |
| **Case study detail pages (`/work/[slug]`)** | Spec'd as out of scope for v1. Only 2 case studies exist. Detail pages are valuable at 4+ cases with full write-ups. | Card listing with key metrics on `/work`. Add detail pages in v2 when LeadsBridge case study is written. |
| **Search functionality** | 6 pages + 1 blog post. Search adds JS, UX complexity, and a search index for zero benefit at this content volume. | Navigation is sufficient. Add search only when blog exceeds 20+ posts. |
| **Cookie consent banner** | Umami is cookieless. No tracking cookies = no banner needed. Adding one "just in case" signals uncertainty about your own tech choices. | One line in footer: "This site doesn't use tracking cookies." Confident, not defensive. |
| **Comments on blog posts** | Attracts spam, requires moderation, adds infrastructure. The blog is "notes" -- one-directional thinking out loud, not a conversation platform. | If readers want to respond, they email or connect on LinkedIn. |
| **Multi-language URL slugs** | `/it/chi-sono` instead of `/it/about`. Adds routing complexity, breaks URL consistency, for minimal SEO benefit on a personal site. | English slugs for both locales. next-intl `localePrefix: 'as-needed'` handles cleanly. |
| **PWA / service worker** | Adds offline capability nobody needs for a portfolio site. Build complexity, cache invalidation headaches. | Standard web site. No install prompt. |

---

## Feature Dependencies

```
Font loading (Inter + JetBrains Mono) --> All typography features
  |
Tailwind design tokens (colors, spacing) --> All UI components
  |
  +-- Section wrapper --> All page sections
  +-- Button component --> Hero CTAs, page CTAs
  +-- Tag component --> Labels, dates, categories
  +-- MetricCard --> Homepage "Numbers" section
  +-- CaseStudyCard --> Work page
  +-- ProjectCard --> Lab page
  +-- TimelineBlock --> Homepage "Journey" + About page
  |
next-intl routing config --> Language toggle --> All page content
  |
  +-- hreflang tags --> SEO (depends on routing being correct)
  |
Navbar (fixed + scroll behavior) --> All pages
Footer (bio + links) --> All pages
  |
  +-- 404 page (needs layout wrapper)
  |
Homepage (6 sections) --> Establishes all component patterns
  |
  +-- Inner pages reuse components (About, Work, Lab, Approach, Blog)
  |
SEO metadata helpers --> All pages (meta, OG, JSON-LD)
  |
  +-- Dynamic OG images (depends on metadata structure being stable)
  |
@tailwindcss/typography --> Blog post prose styling + Approach page
  |
Scroll animations (IntersectionObserver) --> Applied LAST, after content is stable
  |
  +-- prefers-reduced-motion check (built into animation hook)
```

---

## MVP Recommendation

### Must ship (table stakes + high-value differentiators):

1. **Responsive dark-mode layout with full design system** -- the visual identity IS the product
2. **All 6 page types** (Homepage, About, Work, Lab, Approach, Blog) -- content is already written, no reason to cut pages
3. **i18n with language toggle** -- bilingual is a core requirement, not optional
4. **SEO fundamentals** (meta tags, hreflang, sitemap, robots.txt, JSON-LD Person schema) -- the "second click" must work
5. **Accessibility baseline** (semantic HTML, keyboard nav, focus styles, skip-to-content, color contrast) -- non-negotiable
6. **Scroll fade-in animations** with `prefers-reduced-motion` respect -- low effort, high polish payoff
7. **Static OG image** -- at minimum one branded image for social sharing
8. **Umami analytics** -- cookieless, one script tag, zero friction

### Defer to v2:

- **Dynamic OG images per page** -- nice-to-have, adds build complexity for marginal LinkedIn sharing benefit
- **Case study detail pages** (`/work/[slug]`) -- need more case studies first (3+ with full write-ups)
- **Light mode** -- only if user feedback demands it
- **Blog CMS** -- only when post count exceeds 5
- **Horizontal timeline on desktop** -- vertical-only is simpler, works on all viewports, and is honestly better for readability

### Never build:

- Contact form, newsletter, testimonials, chat widget, comments, search, cookie banner, animated page transitions, methodology branding

---

## Content Patterns by Page Type

| Page | Content Pattern | Reference |
|------|----------------|-----------|
| **Homepage** | Long-scroll one-pager with 6 distinct sections. Hero (typography-only, no image) > How I Work (3 columns) > Journey (timeline) > Numbers (metric grid) > Now (2 cards) > Contact. Each section separated by 80-160px. | kevinyien.com (minimal hero), linear.app (section density) |
| **About** | Narrative long-form. Journey as prose paragraphs (NOT reusing timeline). Beliefs section with 3 principles. Personal aside (light tone). CTA at end. | kevinyien.com/story (narrative approach) |
| **Work** | Card listing with hover states. Each card: tag + title + preview + key metric. No detail pages in v1. CTA linking to About and Contact. | stripe.com/customers (card-based listing without overwhelming detail) |
| **Lab** | Project cards with status indicators. Main project (CasaHunter) detailed, upcoming (MoneyMind) as one-liner. CTA linking to Work. | Standard developer portfolio pattern |
| **Approach** | Numbered essay sections (5 sections). Content-width (720px). No framework branding, no methodology name. Closing CTA. | Long-form essay pattern, content-driven |
| **Blog listing** | Date (monospace) + title + excerpt. Minimal chrome. Empty state copy ready. | kevinyien.com posts listing |
| **Blog post** | Prose-styled long-form. 720px max-width, line-height 1.7-1.8. Date + title header. No sidebar, no related posts, no share buttons. | Medium reading experience, without Medium's overhead |
| **404** | Centered text, minimal. One line + link to homepage. Personality without effort. | Standard but with personality |

---

## Performance Expectations

| Metric | Target | Rationale |
|--------|--------|-----------|
| Lighthouse Performance | 95+ (target 98-100) | Text-only site with no images should be near-perfect |
| Lighthouse Accessibility | 95+ | Semantic HTML + contrast + keyboard nav + skip-to-content |
| Lighthouse Best Practices | 95+ | HTTPS, no deprecated APIs, no console errors |
| Lighthouse SEO | 95+ | Meta tags, hreflang, sitemap, semantic markup, canonical |
| LCP | < 1.5s | No hero image, font preload with `display: swap` |
| CLS | < 0.05 | No dynamic content loading, no layout shifts from fonts |
| INP | < 100ms | Minimal client JS, no heavy interactions |
| First Load JS | < 100KB | Next.js SSG + minimal client-side code |
| Total page weight | < 300KB | Fonts (Inter variable + JetBrains Mono subset) are heaviest asset |

---

## i18n Patterns

| Pattern | Implementation | Notes |
|---------|---------------|-------|
| URL structure | EN: `/about`, IT: `/it/about` | `localePrefix: 'as-needed'` -- EN has no prefix (default locale) |
| Content translation | JSON message files (`en.json`, `it.json`) | All copy from translation files, not hardcoded |
| Language toggle | Navbar utility link | Preserves current path, swaps locale prefix |
| Meta tags per locale | `generateMetadata` with locale param | Different title/description per language |
| hreflang alternates | `<link rel="alternate">` in head | Must include self-referencing hreflang |
| Sitemap | Separate entries per locale | `/about` and `/it/about` as distinct URLs |
| Blog post | Same slug, different content | `/blog/why-i-prototype-in-code` and `/it/blog/why-i-prototype-in-code` |

---

## Sources

- [SiteBuilder Report - PM Portfolios](https://www.sitebuilderreport.com/inspiration/product-manager-portfolios) -- Portfolio patterns and examples
- [CareerFoundry - PM Portfolio Guide](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/) -- Content strategy for PM sites
- [kevinyien.com](https://kevinyien.com) -- Reference site: minimal IC personal site (confirmed text-only hero, Posts section, Story page, email CTA)
- [Kevin Yien GitHub repo](https://github.com/kevinyien/kevinyien.github.io) -- Static site implementation reference
- [Figma Web Design Trends 2026](https://www.figma.com/resource-library/web-design-trends/) -- Current design trend context
- [Dark Mode SEO & UX Trends 2026](https://grewdev.com/dark-mode-web-design-seo-ux-trends-for-2026/) -- Dark mode as standard practice
- [Next.js Metadata & OG Images docs](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) -- Official dynamic OG implementation
- [WCAG 2.1 AA Requirements 2026](https://www.accessibility.works/blog/wcag-ada-website-compliance-standards-requirements) -- Accessibility standards
- [Next.js Multilingual SEO Guide](https://saas.catlove.cc/en/blog/nextjs-i18n-seo-guide) -- i18n SEO pitfalls and best practices
- [Next.js Performance Optimization](https://pagepro.co/blog/nextjs-performance-optimization-in-9-steps/) -- Lighthouse optimization strategies
- [SimpliStrat - Thought Leader Website Building Blocks](https://blog.simplestrat.com/building-blocks-thought-leader-personal-website-examples) -- Thought leader site patterns (used to identify anti-patterns for Modello B)
