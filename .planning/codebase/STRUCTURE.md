# Codebase Structure

**Analysis Date:** 2026-04-06

## Directory Layout

```
selfrules-website/
├── src/
│   ├── app/
│   │   ├── [locale]/               # All user-facing pages, wrapped by locale
│   │   │   ├── layout.tsx          # Root locale layout (Navbar, Footer, providers)
│   │   │   ├── page.tsx            # Homepage
│   │   │   ├── not-found.tsx       # Locale-aware 404 page
│   │   │   ├── opengraph-image.tsx # Dynamic OG image for homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── work/
│   │   │   │   ├── page.tsx        # Work index (case study cards)
│   │   │   │   ├── payments-rescue/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── opengraph-image.tsx
│   │   │   │   ├── cashless-system/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── leadsbridge-redesign/
│   │   │   │       └── page.tsx
│   │   │   ├── notes/
│   │   │   │   ├── page.tsx        # Notes index (grouped by year)
│   │   │   │   └── [slug]/         # Each slug is a static directory, not dynamic
│   │   │   │       ├── page.tsx
│   │   │   │       ├── content.en.mdx
│   │   │   │       ├── content.it.mdx
│   │   │   │       └── opengraph-image.tsx
│   │   │   ├── lab/
│   │   │   │   └── casahunter/
│   │   │   │       └── page.tsx
│   │   │   ├── dev/
│   │   │   │   └── components/     # Dev/preview route (non-production)
│   │   │   └── [...rest]/
│   │   │       └── page.tsx        # Catch-all → notFound()
│   │   ├── api/
│   │   │   └── feedback/
│   │   │       └── route.ts        # POST handler → Notion API
│   │   ├── globals.css             # Tailwind v4 theme + global resets
│   │   ├── not-found.tsx           # Root 404 fallback (outside locale)
│   │   ├── favicon.ico
│   │   ├── icon.svg
│   │   ├── apple-icon.png
│   │   ├── robots.ts               # Generates /robots.txt
│   │   └── sitemap.ts              # Generates /sitemap.xml
│   ├── components/
│   │   ├── layout/                 # Structural chrome and wrappers
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── LanguageToggle.tsx
│   │   │   ├── NoteLayout.tsx      # Wrapper for all blog post pages
│   │   │   └── Section.tsx         # Padded, max-width container (used everywhere)
│   │   ├── sections/               # Full-width homepage and page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── WhatIDo.tsx
│   │   │   ├── HowIWork.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── Metrics.tsx
│   │   │   ├── CurrentWork.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   └── page-cta.tsx        # Cross-page bottom CTA strip
│   │   ├── ui/                     # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   ├── MetricHighlight.tsx
│   │   │   ├── CaseStudyCard.tsx
│   │   │   ├── CaseStudySummary.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── PatternCard.tsx
│   │   │   ├── DecisionCard.tsx
│   │   │   ├── KeyInsight.tsx
│   │   │   ├── PullQuote.tsx
│   │   │   ├── TimelineNode.tsx
│   │   │   ├── VerticalTimeline.tsx
│   │   │   ├── CountUpNumber.tsx
│   │   │   ├── TerminalPrompt.tsx
│   │   │   ├── BlinkingCursor.tsx
│   │   │   ├── AiBadge.tsx
│   │   │   ├── ArchitectureDiagram.tsx
│   │   │   ├── FeedbackWidget.tsx  # Floating feedback button + modal (client)
│   │   │   ├── PageTransition.tsx  # Fade-in on route change (client)
│   │   │   └── scroll-reveal.tsx   # Intersection observer fade-in (client)
│   │   ├── mdx/                    # Custom components for use inside .mdx files
│   │   │   ├── index.ts            # Barrel export
│   │   │   ├── Callout.tsx
│   │   │   ├── KeyTakeaway.tsx
│   │   │   ├── NumberedInsight.tsx
│   │   │   ├── BuildVsBuyDiagram.tsx
│   │   │   ├── MetricsTriangleDiagram.tsx
│   │   │   └── AiSplitDiagram.tsx
│   │   └── seo/
│   │       └── json-ld.tsx         # Renders <script type="application/ld+json">
│   ├── i18n/
│   │   ├── routing.ts              # Locale definitions (locales, defaultLocale, prefix)
│   │   ├── request.ts              # next-intl server config, loads messages JSON
│   │   └── navigation.ts           # Re-exports Link, usePathname from next-intl
│   ├── lib/
│   │   ├── fonts.ts                # next/font/google exports (Inter, Space Grotesk, JetBrains Mono)
│   │   ├── metadata.ts             # createPageMetadata() — canonical + OG + Twitter
│   │   ├── posts.ts                # POSTS array (ordered slugs) + getAdjacentPosts()
│   │   ├── utils.ts                # cn() helper (clsx)
│   │   ├── build-info.ts           # Build-time info utilities
│   │   └── og-image.tsx            # OG image generation helper
│   └── messages/
│       ├── en.json                 # All English UI strings
│       └── it.json                 # All Italian UI strings
├── public/
│   ├── images/
│   │   └── casahunter/             # Screenshots/images for CasaHunter lab page
│   └── videos/                     # Video assets
├── remotion/                       # Remotion video project (separate from Next.js build)
│   ├── components/
│   └── scenes/
├── e2e/                            # Playwright end-to-end tests
├── scripts/                        # Build/utility scripts
├── docs/                           # Project documentation (not deployed)
│   ├── copy/                       # Source copy for all pages (IT + EN)
│   ├── design/                     # Design specs and update notes
│   ├── audits/                     # Site audit reports
│   ├── reference/                  # Analytics events, deploy checklist
│   └── drafts/                     # Work-in-progress documents
├── next.config.ts                  # Next.js config (next-intl plugin + MDX plugin + rewrites)
├── vercel.json                     # Security headers + permanent redirects
├── tsconfig.json                   # TypeScript config with @/ path alias
├── eslint.config.mjs               # ESLint config
├── playwright.config.ts            # Playwright e2e config
└── package.json
```

## Directory Purposes

**`src/app/[locale]/`:**
- Purpose: All user-facing pages, each a separate subdirectory
- Contains: `page.tsx` (RSC), optional `opengraph-image.tsx`, optional `not-found.tsx`
- Key files: `layout.tsx` (locale shell), `page.tsx` (homepage)

**`src/app/[locale]/notes/[slug]/`:**
- Purpose: Blog posts — each slug is a hardcoded static directory (not truly dynamic)
- Contains: `page.tsx`, `content.en.mdx`, `content.it.mdx`, `opengraph-image.tsx`
- Note: Slug directories are pre-created; no filesystem discovery at build time

**`src/components/layout/`:**
- Purpose: Chrome components rendered in layout or as structural wrappers
- Key files: `Navbar.tsx` (client), `Footer.tsx`, `Section.tsx` (spacing/width wrapper), `NoteLayout.tsx` (blog post shell)

**`src/components/sections/`:**
- Purpose: Full-page-width sections used on homepage and inner pages
- Contains: One component per named section of the design (Hero, WhatIDo, etc.)

**`src/components/ui/`:**
- Purpose: Atomic UI pieces and interactive client components
- Note: Not shadcn/ui — all custom-built components following the project design system

**`src/components/mdx/`:**
- Purpose: React components importable inside `.mdx` files to create custom callouts and diagrams
- Contains: Barrel export at `index.ts`; components must be explicitly imported in each MDX file

**`src/i18n/`:**
- Purpose: next-intl configuration and locale-aware navigation exports
- Key file: `navigation.ts` — import `Link` and `usePathname` from here (not from `next/link`)

**`src/lib/`:**
- Purpose: Pure shared utilities with no UI coupling
- Key files: `metadata.ts` (use for all page metadata), `posts.ts` (post registry), `fonts.ts` (font variables)

**`src/messages/`:**
- Purpose: All translatable strings for both locales
- Note: Both files must be kept in sync — every key in `en.json` must exist in `it.json`

**`remotion/`:**
- Purpose: Standalone Remotion video project for generating case study videos
- Generated: No
- Committed: Yes — separate from the Next.js build, not imported by app code

## Key File Locations

**Entry Points:**
- `src/app/[locale]/layout.tsx`: Locale root layout — fonts, providers, chrome
- `src/app/[locale]/page.tsx`: Homepage
- `src/app/api/feedback/route.ts`: Only API route handler

**Configuration:**
- `next.config.ts`: Framework config — MDX extensions, Umami rewrite, next-intl plugin
- `src/app/globals.css`: Tailwind v4 theme (all design tokens defined here via `@theme`)
- `src/i18n/routing.ts`: Locale list and URL prefix strategy
- `vercel.json`: Security headers, permanent redirects

**Core Logic:**
- `src/lib/metadata.ts`: Used by every page's `generateMetadata`
- `src/lib/posts.ts`: Post registry and navigation — update when adding new notes
- `src/components/layout/Section.tsx`: Used on every content page as primary layout container
- `src/i18n/navigation.ts`: Source of `Link` component for all internal links

**Testing:**
- `e2e/`: Playwright tests (config at `playwright.config.ts`)

## Naming Conventions

**Files:**
- React components: PascalCase `.tsx` (e.g., `Section.tsx`, `FeedbackWidget.tsx`)
- Utilities and config: camelCase `.ts` (e.g., `metadata.ts`, `routing.ts`)
- Next.js special files: lowercase (`page.tsx`, `layout.tsx`, `route.ts`, `not-found.tsx`)
- CSS: `globals.css` (single file)
- MDX content: `content.{locale}.mdx` pattern (e.g., `content.en.mdx`)
- Kebab-case for route directories (e.g., `payments-rescue/`, `build-vs-buy-framework/`)

**Directories:**
- Route segments: kebab-case matching URL slug
- Component groups: lowercase (`layout/`, `sections/`, `ui/`, `mdx/`, `seo/`)
- i18n: lowercase (`i18n/`, `messages/`)
- Utilities: lowercase (`lib/`)

## Where to Add New Code

**New page route:**
- Create directory at `src/app/[locale]/[route-name]/page.tsx`
- Add `generateStaticParams` returning `[{ locale: 'en' }, { locale: 'it' }]`
- Add `generateMetadata` calling `createPageMetadata` from `src/lib/metadata.ts`
- Add translation keys to both `src/messages/en.json` and `src/messages/it.json`
- Add URL to the `pages` array in `src/app/sitemap.ts`

**New blog post (note):**
- Create directory at `src/app/[locale]/notes/[new-slug]/`
- Add `page.tsx`, `content.en.mdx`, `content.it.mdx`, and optionally `opengraph-image.tsx`
- Add the slug to the `POSTS` array in `src/lib/posts.ts` (prepend to keep newest first)
- Add post metadata (title, date, excerpt, readingTime, tags) to both messages files under `notes.posts.[slug]`

**New reusable UI component:**
- Implementation: `src/components/ui/ComponentName.tsx`
- If it needs client-side interactivity: add `'use client'` directive at top

**New section component (homepage/page-level):**
- Implementation: `src/components/sections/SectionName.tsx`
- Pattern: Accept all display strings as props (no direct translation calls inside sections)

**New MDX component (for blog posts):**
- Implementation: `src/components/mdx/ComponentName.tsx`
- Export from: `src/components/mdx/index.ts`
- Usage: Import explicitly at the top of the `.mdx` file

**New utility:**
- Shared helpers: `src/lib/utils.ts` (or new file in `src/lib/` if substantial)

**New layout wrapper:**
- Implementation: `src/components/layout/WrapperName.tsx`

## Special Directories

**`.planning/`:**
- Purpose: GSD planning documents, roadmap, phase plans, codebase analysis
- Generated: No
- Committed: Yes

**`remotion/`:**
- Purpose: Remotion video generation project — runs independently with `npx remotion`
- Generated: No
- Committed: Yes — not part of Next.js compilation

**`docs/`:**
- Purpose: Design specs, copy sources, audit reports — reference material, not deployed
- Generated: No
- Committed: Yes

**`.next/`:**
- Purpose: Next.js build output
- Generated: Yes
- Committed: No

**`node_modules/`:**
- Purpose: NPM dependencies
- Generated: Yes
- Committed: No

---

*Structure analysis: 2026-04-06*
