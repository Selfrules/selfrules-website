---
phase: 01-foundation
plan: 01
subsystem: infra
tags: [nextjs, tailwind-v4, next-intl, i18n, fonts, design-tokens]

# Dependency graph
requires: []
provides:
  - Next.js 16 project scaffold with App Router and Turbopack
  - Tailwind v4 CSS-first design tokens (colors, typography, spacing, 0px border-radius)
  - Three Google Fonts (Inter, Space Grotesk, JetBrains Mono) via next/font
  - next-intl i18n routing with proxy.ts (EN default, IT /it prefix)
  - Placeholder page verifying all foundation systems
affects: [02-shell, 03-ui-primitives, 04-homepage, 05-inner-pages, 06-seo]

# Tech tracking
tech-stack:
  added: [next@16.2.1, react@19.2.4, next-intl@4.8.3, tailwindcss@4, typescript@5]
  patterns: [css-first-tokens, proxy-routing, static-rendering, font-variable-bridging]

key-files:
  created:
    - src/app/globals.css
    - src/app/layout.tsx
    - src/app/[locale]/layout.tsx
    - src/app/[locale]/page.tsx
    - src/i18n/routing.ts
    - src/i18n/request.ts
    - src/i18n/navigation.ts
    - src/lib/fonts.ts
    - src/proxy.ts
    - src/messages/en.json
    - src/messages/it.json
    - next.config.ts
    - package.json
  modified: []

key-decisions:
  - "Used NextRequest type in proxy.ts instead of Request (TypeScript compatibility with next-intl middleware)"
  - "Font variables bridged into Tailwind via @theme inline block for external CSS variable resolution"
  - "All --radius-* tokens set to 0px plus global border-radius: 0 !important reset as signature element"

patterns-established:
  - "Pattern 1: proxy.ts exports function proxy(request: NextRequest) for Next.js 16 routing"
  - "Pattern 2: setRequestLocale(locale) called before any translation access in every layout/page"
  - "Pattern 3: params is Promise<{ locale: string }> — always await before use"
  - "Pattern 4: @theme inline for bridging next/font CSS variables into Tailwind token system"
  - "Pattern 5: generateStaticParams in [locale]/layout.tsx for static rendering"

requirements-completed: [FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05]

# Metrics
duration: 15min
completed: 2026-03-22
---

# Phase 01: Foundation Summary

**Next.js 16.2 with Tailwind v4 CSS-first tokens, three Google Fonts bridged via @theme inline, and next-intl proxy.ts i18n routing producing statically rendered EN/IT pages**

## Performance

- **Duration:** 15 min
- **Started:** 2026-03-22T23:35:00Z
- **Completed:** 2026-03-22T23:50:00Z
- **Tasks:** 11
- **Files modified:** 24

## Accomplishments
- Scaffolded Next.js 16.2.1 project with TypeScript, Tailwind v4, ESLint, App Router
- Defined complete design token system in globals.css: 10 colors, 8 typography sizes, spacing scale, 0px border-radius
- Configured three Google Fonts (Inter, Space Grotesk, JetBrains Mono) with CSS variable bridging into Tailwind
- Set up next-intl i18n with proxy.ts pattern, EN default (no prefix) + IT (/it prefix), localeDetection disabled
- Created placeholder page verifying all 6 foundation systems (3 fonts, 3 color swatches, locale indicator, dark theme)
- Build produces static output (SSG) for all routes — no dynamic rendering
- Created public GitHub repository at github.com/Selfrules/selfrules-website

## Task Commits

All tasks committed atomically in a single foundation commit:

1. **Tasks 1-11: Full foundation scaffold** - `e5dd63a` (feat)

## Files Created/Modified
- `package.json` - Next.js 16.2.1 + next-intl 4.8.3 dependencies
- `next.config.ts` - createNextIntlPlugin configuration
- `src/app/globals.css` - Tailwind v4 design tokens (@theme + @theme inline)
- `src/app/layout.tsx` - Root layout with font variables on html, dark class
- `src/app/[locale]/layout.tsx` - Locale layout with NextIntlClientProvider, generateStaticParams
- `src/app/[locale]/page.tsx` - Placeholder page with font/token/locale verification
- `src/i18n/routing.ts` - defineRouting with localePrefix: 'as-needed', localeDetection: false
- `src/i18n/request.ts` - getRequestConfig with dynamic message import
- `src/i18n/navigation.ts` - createNavigation exports (Link, redirect, usePathname, useRouter)
- `src/proxy.ts` - proxy function for Next.js 16 i18n routing
- `src/lib/fonts.ts` - Inter, Space Grotesk, JetBrains Mono font configuration
- `src/messages/en.json` - English placeholder messages
- `src/messages/it.json` - Italian placeholder messages

## Decisions Made
- Used `NextRequest` type in proxy.ts (plan specified `Request`, but next-intl middleware requires NextRequest)
- Single commit for all 11 tasks since they form one atomic foundation unit

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] proxy.ts type mismatch**
- **Found during:** Task 10 (Build verification)
- **Issue:** `Request` type incompatible with next-intl's `createMiddleware` which expects `NextRequest`
- **Fix:** Changed parameter type to `NextRequest` with import from `next/server`
- **Files modified:** src/proxy.ts
- **Verification:** Build passes with exit code 0
- **Committed in:** e5dd63a

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Type fix necessary for compilation. No scope creep.

## Issues Encountered
- `create-next-app` refuses to run in non-empty directory — solved by scaffolding in /tmp and copying files over

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All foundation systems verified and working
- Design tokens available for Phase 2 (Shell) components
- i18n routing ready for real page content
- Font system ready for typography implementation

---
*Phase: 01-foundation*
*Completed: 2026-03-22*
