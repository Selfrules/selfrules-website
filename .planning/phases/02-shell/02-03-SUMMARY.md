---
phase: 02-shell
plan: 03
subsystem: ui
tags: [next.js, 404, i18n, catch-all-route, space-grotesk]

# Dependency graph
requires:
  - phase: 02-shell-01
    provides: "i18n messages with notFound namespace, root layout with shell"
  - phase: 02-shell-02
    provides: "Navbar and Footer components wrapping locale layout"
provides:
  - "Localized 404 page with Space Grotesk headline, signature phrase, accent back link"
  - "Catch-all [...rest] route ensuring 404s render within locale layout shell"
affects: [03-ui-primitives, 05-inner-pages]

# Tech tracking
tech-stack:
  added: []
  patterns: ["catch-all route for localized 404", "server component 404 with getTranslations"]

key-files:
  created:
    - src/app/[locale]/not-found.tsx
    - src/app/[locale]/[...rest]/page.tsx
  modified: []

key-decisions:
  - "Used --text-hero token instead of non-existent --text-display for 404 headline sizing"

patterns-established:
  - "Catch-all [...rest]/page.tsx calls notFound() to trigger locale-aware not-found boundary"
  - "Server Component 404 pages use getTranslations (no 'use client' needed)"

requirements-completed: [LNAV-06]

# Metrics
duration: 2min
completed: 2026-03-22
---

# Phase 02 Plan 03: 404 Page Summary

**Localized 404 page with catch-all route, Space Grotesk headline, italic signature phrase, and accent back link within full shell**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-22T22:56:18Z
- **Completed:** 2026-03-22T22:58:30Z
- **Tasks:** 2 (1 auto + 1 checkpoint auto-approved)
- **Files modified:** 2

## Accomplishments
- Catch-all [...rest] route ensures all unknown URLs render 404 within the locale layout (navbar + footer)
- 404 page displays Space Grotesk headline, italic signature phrase, and accent-colored back link
- Server Component using getTranslations for bilingual support (EN/IT)
- Vertically and horizontally centered layout with proper navbar offset

## Task Commits

Each task was committed atomically:

1. **Task 1: Create catch-all route and localized 404 page with signature phrase** - `dfcd4af` (feat)
2. **Task 2: Verify complete Phase 2 shell** - auto-approved checkpoint (no commit)

## Files Created/Modified
- `src/app/[locale]/[...rest]/page.tsx` - Catch-all route calling notFound() for locale-aware 404
- `src/app/[locale]/not-found.tsx` - Localized 404 page with headline, signature phrase, and back link

## Decisions Made
- Used `--text-hero` token (clamp(40px, 5vw, 64px)) instead of `--text-display` which does not exist in globals.css. Same values, correct token name.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Used --text-hero instead of non-existent --text-display token**
- **Found during:** Task 1 (404 page creation)
- **Issue:** Plan references `text-[length:--text-display]` but `--text-display` is not defined in globals.css. Only `--text-hero` exists with the same clamp(40px, 5vw, 64px) values.
- **Fix:** Used `text-[length:--text-hero]` instead
- **Files modified:** src/app/[locale]/not-found.tsx
- **Verification:** Build passes, correct font size applied
- **Committed in:** dfcd4af (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Token name correction only. Same visual output. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 2 shell is complete: Navbar, Footer, 404 page all functional
- All routes render within locale layout with full shell
- Ready for Phase 3 UI Primitives (SectionWrapper, animations, etc.)

---
*Phase: 02-shell*
*Completed: 2026-03-22*
