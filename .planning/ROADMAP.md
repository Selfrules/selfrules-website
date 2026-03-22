# Roadmap: selfrules.org

## Overview

Build Mattia De Luca's personal professional site from scratch: a dark-mode-only, bilingual (IT/EN) static portfolio that communicates competence through specificity and results. The build progresses from project foundation through layout shell, reusable components, homepage, inner pages, and finally SEO/performance/deploy -- each phase delivering a verifiable capability that the next phase depends on.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation** - Project scaffold with Next.js 16, Tailwind v4 design tokens, fonts, and i18n routing
- [ ] **Phase 2: Shell** - Layout wrapper, navbar, footer, 404, language toggle, analytics integration
- [ ] **Phase 3: UI Primitives** - Reusable component library (Button, MetricCard, CaseStudyCard, ProjectCard, etc.)
- [ ] **Phase 4: Homepage** - All 6 homepage sections with full bilingual content
- [ ] **Phase 5: Inner Pages** - About, Work, Lab, Approach, Blog listing + post, with full copy and Modello B compliance
- [ ] **Phase 6: SEO, Polish & Deploy** - Metadata, accessibility audit, performance optimization, animations, Vercel deploy

## Phase Details

### Phase 1: Foundation
**Goal**: A working Next.js 16 project with correct i18n routing, design tokens, and fonts -- the base that every other phase builds on
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05
**Success Criteria** (what must be TRUE):
  1. Visiting `/` shows an EN page, visiting `/it` shows an IT page -- locale routing works
  2. Running `next build` produces static output (circle icons, not lambda) for all routes
  3. Design tokens (colors, spacing, typography scale, 0px border-radius) are available as Tailwind utilities throughout the project
  4. Inter and JetBrains Mono render correctly with no layout shift on page load
**Plans**: 1 plan

Plans:
- [x] 01-01-PLAN.md — Scaffold Next.js 16, configure design tokens + fonts + i18n routing, build placeholder verification page

### Phase 2: Shell
**Goal**: A navigable site skeleton at all viewports -- every page shares a working navbar, footer, language toggle, mobile menu, and 404 fallback
**Depends on**: Phase 1
**Requirements**: LNAV-01, LNAV-02, LNAV-03, LNAV-04, LNAV-05, LNAV-06, COPY-04, ANLT-01, ANLT-02
**Success Criteria** (what must be TRUE):
  1. Navbar is fixed, transitions from transparent to blurred background on scroll, and shows correct links
  2. Mobile hamburger opens full-screen overlay, traps focus, closes on Escape
  3. Language toggle switches between IT and EN while preserving the current page path
  4. Footer displays bio, email, LinkedIn, GitHub, CV download link, and credit line in both languages
  5. Visiting a nonexistent URL shows the 404 page with dedicated copy in both languages
**Plans**: 3 plans
**UI hint**: yes

Plans:
- [x] 02-01-PLAN.md — i18n messages, navigation utility, Footer component, root layout shell (skip-to-content, Umami proxy)
- [x] 02-02-PLAN.md — Navbar with scroll behavior, MobileMenu with slide-in and focus trap, LanguageToggle
- [x] 02-03-PLAN.md — Localized 404 page with catch-all route, full phase visual verification checkpoint

### Phase 3: UI Primitives
**Goal**: A complete component library that pages compose -- each component works in isolation with correct styling, hover states, and responsive behavior
**Depends on**: Phase 2
**Requirements**: UICM-01, UICM-02, UICM-03, UICM-04, UICM-05, UICM-06, UICM-07
**Success Criteria** (what must be TRUE):
  1. Button renders in primary (accent bg, dark text) and secondary (transparent, border) variants with 0px radius and hover transitions
  2. MetricCard displays accent-colored monospace number, label, and context with hover border-accent transition
  3. CaseStudyCard and ProjectCard render with correct layout, tags, hover translate-y and border-accent effects
  4. Section wrapper applies configurable max-width (720px default, 1080px wide) and section-gap padding consistently
**Plans**: 2 plans
**UI hint**: yes

Plans:
- [ ] 03-01-PLAN.md — cn() utility, Tag, Button, Section wrapper, SectionHeader (foundational components)
- [ ] 03-02-PLAN.md — MetricCard, CaseStudyCard, ProjectCard, TimelineBlock, /dev/components verification route + visual checkpoint

### Phase 4: Homepage
**Goal**: The homepage is complete with all 6 sections, bilingual content, and the visual language that inner pages will inherit
**Depends on**: Phase 3
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, HOME-06
**Success Criteria** (what must be TRUE):
  1. Hero section fills the viewport with left-aligned headline, subtitle, 2 CTAs, and monospace tags -- no hero image
  2. "How I Work" displays 3 pillars in columns (desktop) or stacked (mobile), "Journey" shows timeline with 4 career blocks
  3. "Numbers, not words" renders 6 MetricCards in responsive grid (3x2 desktop, 2x3 tablet, 1 column mobile)
  4. "What I'm doing now" shows 2 cards side by side (desktop) or stacked (mobile), Contact section has email, LinkedIn, CV, availability tag
  5. All sections render correctly in both IT and EN with identical copy from source files
**Plans**: 3 plans
**UI hint**: yes

Plans:
- [ ] 04-01-PLAN.md — i18n homepage namespace (full EN+IT content), SectionHeader component, Hero section
- [ ] 04-02-PLAN.md — HowIWork, Timeline, Metrics, CurrentWork, Contact section components
- [ ] 04-03-PLAN.md — page.tsx translation orchestrator wiring all 6 sections, visual verification checkpoint

### Phase 5: Inner Pages
**Goal**: All remaining pages are complete with full bilingual content, and the entire site complies with Modello B positioning
**Depends on**: Phase 4
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, COPY-01, COPY-02, COPY-03, MODB-01, MODB-02, MODB-03, MODB-04
**Success Criteria** (what must be TRUE):
  1. About page shows career blocks, 3 principles, personal section, and CTA -- all in both languages
  2. Work page displays 2 CaseStudyCards (one with draft note), Lab page shows CasaHunter with detail and MoneyMind as "coming soon"
  3. Approach page renders 5 numbered sections in 720px prose width, Blog listing shows post list with dates, blog post renders with prose styling
  4. All page copy is IDENTICAL to source files -- no rewriting, no summarizing, no improving
  5. No "job seeker" framing anywhere; availability and CV download appear ONLY in Contact section and Footer
**Plans**: 4 plans
**UI hint**: yes

Plans:
- [ ] 05-01-PLAN.md — MDX infrastructure, @tailwindcss/typography, PageCTA component, all bilingual i18n content for 6 pages
- [ ] 05-02-PLAN.md — About page (prose career blocks, principles, personal section) + Approach page (5 numbered sections)
- [ ] 05-03-PLAN.md — Work page (2 CaseStudyCards, non-clickable) + Lab page (CasaHunter expanded inline, MoneyMind)
- [ ] 05-04-PLAN.md — Blog listing page + Blog post with MDX content, visual verification checkpoint

### Phase 6: SEO, Polish & Deploy
**Goal**: The site is production-ready: discoverable by search engines, accessible, performant, polished with animations, and live on selfrules.org
**Depends on**: Phase 5
**Requirements**: SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, SEO-06, SEO-07, PERF-01, PERF-02, PERF-03, PERF-04, PERF-05, PERF-06, A11Y-01, A11Y-02, A11Y-03, A11Y-04, A11Y-05, PLSH-01, PLSH-02, PLSH-03, PLSH-04, DEPL-01, DEPL-02, DEPL-03
**Success Criteria** (what must be TRUE):
  1. Every page has correct meta title, description, Open Graph tags, canonical URL, and hreflang alternates in both languages
  2. JSON-LD structured data (Person, BreadcrumbList) is present; sitemap.xml and robots.txt are generated and valid
  3. Lighthouse scores 95+ on Performance, Accessibility, Best Practices, and SEO; first load JS < 100KB
  4. Skip-to-content link works, all interactive elements have visible focus styles, WCAG AA contrast passes for all text
  5. Scroll-triggered fade-in animations work and are disabled when prefers-reduced-motion is set; site is deployed and live on selfrules.org with HTTPS
**Plans**: 4 plans

Plans:
- [ ] 06-01-PLAN.md — SEO metadata infrastructure: metadata helper, generateMetadata on all pages, sitemap, robots, JSON-LD, OG image
- [ ] 06-02-PLAN.md — Accessibility (skip-to-content, focus styles, semantic HTML), scroll animations (ScrollReveal + fade-up), active nav, smooth scroll
- [ ] 06-03-PLAN.md — Performance audit: build analysis, bundle size verification, Lighthouse checkpoint
- [ ] 06-04-PLAN.md — Vercel deploy, selfrules.org domain configuration, www redirect

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/1 | Planning complete | - |
| 2. Shell | 0/3 | Planning complete | - |
| 3. UI Primitives | 0/2 | Planning complete | - |
| 4. Homepage | 0/3 | Planning complete | - |
| 5. Inner Pages | 0/4 | Planning complete | - |
| 6. SEO, Polish & Deploy | 0/4 | Planning complete | - |
