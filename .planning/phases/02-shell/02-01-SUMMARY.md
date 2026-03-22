---
phase: 02-shell
plan: 01
subsystem: ui
tags: [next-intl, i18n, footer, umami, analytics, layout]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: "Next.js project with next-intl routing, fonts, Tailwind v4 design tokens"
provides:
  - "Complete i18n messages for all Phase 2 shell components (nav, footer, notFound, common, a11y)"
  - "Footer Server Component with bio, email, links, credit, build version"
  - "Root layout shell with skip-to-content, main wrapper, Footer, conditional Umami analytics"
  - "Umami proxy rewrite in next.config.ts"
  - "next-intl navigation utility (Link, redirect, usePathname, useRouter)"
affects: [02-02, 02-03, 04-homepage, 05-inner-pages]

# Tech tracking
tech-stack:
  added: []
  patterns: [server-component-footer, umami-proxy-rewrite, skip-to-content-a11y, icu-message-format]

key-files:
  created:
    - src/components/layout/Footer.tsx
    - .env.example
  modified:
    - src/messages/en.json
    - src/messages/it.json
    - src/app/[locale]/layout.tsx
    - next.config.ts
    - .gitignore

key-decisions:
  - "Used src/messages/ path (Phase 1 convention) instead of src/i18n/messages/ (plan spec) to match existing request.ts import"
  - "Footer build version uses ICU message format with placeholders for future dynamic values"

patterns-established:
  - "Server Component pattern: async function with getTranslations for server-side i18n"
  - "Umami proxy: /api/umami/:path* rewrites to cloud.umami.is for ad-blocker bypass"
  - "Skip-to-content: sr-only with focus:not-sr-only pattern for keyboard accessibility"

requirements-completed: [LNAV-05, COPY-04, ANLT-01, ANLT-02]

# Metrics
duration: 3min
completed: 2026-03-22
---

# Phase 02 Plan 01: Shell Foundation Summary

**Complete i18n messages for all shell components, Footer Server Component with build version, and root layout wiring with skip-to-content and Umami analytics proxy**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-22T22:47:10Z
- **Completed:** 2026-03-22T22:49:47Z
- **Tasks:** 2
- **Files modified:** 7

## Accomplishments
- All Phase 2 microcopy (nav, footer, notFound, common, a11y) in both EN and IT message files
- Footer Server Component with bio tagline, email (JetBrains Mono + accent hover), LinkedIn/GitHub/CV links, credit line, and build version (11px mono)
- Root layout shell with skip-to-content link, main#main wrapper with 64px navbar offset, Footer, and conditional Umami analytics script
- Umami proxy rewrite configured in next.config.ts to bypass ad blockers

## Task Commits

Each task was committed atomically:

1. **Task 1: Add shell i18n messages and navigation utility** - `b6a6003` (feat)
2. **Task 2: Create Footer component, wire root layout shell** - `1f14b6c` (feat)

## Files Created/Modified
- `src/messages/en.json` - Added nav, footer, notFound, common, a11y namespaces (merged with Phase 1 placeholder content)
- `src/messages/it.json` - Added Italian translations for all shell namespaces
- `src/components/layout/Footer.tsx` - Server Component footer with getTranslations, mono email, build version
- `src/app/[locale]/layout.tsx` - Skip-to-content, main wrapper, Footer integration, conditional Umami Script
- `next.config.ts` - Umami proxy rewrites (/api/umami/* -> cloud.umami.is/*)
- `.env.example` - NEXT_PUBLIC_UMAMI_ID placeholder
- `.gitignore` - Added !.env.example exception

## Decisions Made
- Used `src/messages/` path (Phase 1 convention) instead of `src/i18n/messages/` to match existing `request.ts` import path
- Footer build version uses ICU message format with `{buildMonth}` and `{commitCount}` placeholders for future dynamic values
- LinkedIn/GitHub URLs are placeholders (mattiadeluca) -- user must update with real profile URLs

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Message files placed in src/messages/ instead of src/i18n/messages/**
- **Found during:** Task 1 (i18n messages)
- **Issue:** Plan specified `src/i18n/messages/` but Phase 1's `request.ts` imports from `../messages/` which resolves to `src/messages/`
- **Fix:** Created files in `src/messages/` to match existing import path
- **Files modified:** src/messages/en.json, src/messages/it.json
- **Verification:** Build passes, translations load correctly
- **Committed in:** b6a6003 (Task 1 commit)

**2. [Rule 3 - Blocking] .gitignore blocking .env.example**
- **Found during:** Task 2 (commit)
- **Issue:** `.env*` pattern in .gitignore was excluding `.env.example`
- **Fix:** Added `!.env.example` exception to .gitignore
- **Files modified:** .gitignore
- **Verification:** git add succeeded after fix
- **Committed in:** 1f14b6c (Task 2 commit)

---

**Total deviations:** 2 auto-fixed (2 blocking)
**Impact on plan:** Both auto-fixes necessary for correct file resolution and version control. No scope creep.

## Issues Encountered
None beyond the auto-fixed deviations above.

## User Setup Required
None - no external service configuration required. Umami analytics is optional and will activate when NEXT_PUBLIC_UMAMI_ID is set in environment.

## Next Phase Readiness
- All i18n messages ready for Navbar (Plan 02) and 404 page (Plan 03)
- Footer renders correctly in both locales
- Layout shell ready for Navbar insertion at the comment placeholder
- Build passes with static rendering for both /en and /it routes

---
*Phase: 02-shell*
*Completed: 2026-03-22*

## Self-Check: PASSED
