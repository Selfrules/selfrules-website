---
phase: 02-shell
plan: 02
subsystem: ui
tags: [navbar, mobile-menu, language-toggle, next-intl, a11y, focus-trap]

# Dependency graph
requires:
  - phase: 02-shell-01
    provides: "i18n routing, navigation exports (Link, usePathname, useRouter), globals.css tokens, Footer, root layout"
provides:
  - "Navbar component with scroll behavior and desktop/mobile responsive"
  - "MobileMenu with focus trap, scroll lock, slide animation"
  - "LanguageToggle for IT/EN locale switching via router.replace"
  - "Root layout fully wired: skip-to-content, Navbar, main, Footer, Umami"
affects: [03-ui-primitives, 04-homepage, 05-inner-pages]

# Tech tracking
tech-stack:
  added: []
  patterns: [client-component-with-use-client, ios-scroll-lock-position-fixed, focus-trap-re-query, passive-scroll-listener]

key-files:
  created:
    - src/components/layout/LanguageToggle.tsx
    - src/components/layout/MobileMenu.tsx
    - src/components/layout/Navbar.tsx
  modified:
    - src/app/[locale]/layout.tsx

key-decisions:
  - "navLinks typed as readonly array with optional isAccent to fix TypeScript strict mode with as-const tuples"

patterns-established:
  - "Client Component pattern: 'use client' directive, hooks for scroll/state, passive event listeners"
  - "iOS Safari scroll lock: position:fixed + width:100% + saved scrollY restore"
  - "Focus trap: re-query focusable elements on each Tab press to avoid stale refs"
  - "Language switching: router.replace (not push) to avoid history pollution"

requirements-completed: [LNAV-01, LNAV-02, LNAV-03, LNAV-04]

# Metrics
duration: 3min
completed: 2026-03-22
---

# Phase 02 Plan 02: Interactive Shell Components Summary

**Navbar with scroll-responsive blur, MobileMenu with focus trap and iOS scroll lock, LanguageToggle with router.replace locale switching**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-22T22:51:49Z
- **Completed:** 2026-03-22T22:54:07Z
- **Tasks:** 3
- **Files modified:** 4

## Accomplishments
- LanguageToggle switches IT/EN preserving current path via router.replace (no history pollution)
- MobileMenu slides from right with 300ms animation, focus trap, Escape close, iOS-safe scroll lock
- Navbar fixed at top with transparent-to-blur transition at 50px scroll threshold
- Root layout fully wired: skip-to-content -> Navbar -> main -> Footer -> Umami

## Task Commits

Each task was committed atomically:

1. **Task 1: Create LanguageToggle component** - `cfb77a4` (feat)
2. **Task 2: Create MobileMenu with focus trap and scroll lock** - `c18abec` (feat)
3. **Task 3: Create Navbar and wire into root layout** - `ad6410b` (feat)

## Files Created/Modified
- `src/components/layout/LanguageToggle.tsx` - IT/EN locale switcher with desktop/mobile size variants
- `src/components/layout/MobileMenu.tsx` - Full-screen mobile overlay with focus trap, scroll lock, slide animation
- `src/components/layout/Navbar.tsx` - Fixed navbar with scroll behavior, desktop nav, mobile hamburger
- `src/app/[locale]/layout.tsx` - Added Navbar import and render, removed placeholder comment

## Decisions Made
- Changed `navLinks` from `as const` tuple to explicitly typed `readonly { key: string; href: string; isAccent?: boolean }[]` to fix TypeScript error where `isAccent` property was not recognized on all tuple members

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed navLinks TypeScript type for isAccent property**
- **Found during:** Task 3 (build verification)
- **Issue:** `as const` tuple made `isAccent` only available on the last element type, causing TS2339 error
- **Fix:** Changed to explicitly typed readonly array with optional `isAccent`
- **Files modified:** src/components/layout/MobileMenu.tsx, src/components/layout/Navbar.tsx
- **Verification:** `npm run build` passes with exit code 0
- **Committed in:** ad6410b (Task 3 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Minor type annotation change for TypeScript correctness. No scope creep.

## Issues Encountered
None beyond the TypeScript type fix documented above.

## User Setup Required
None - no external service configuration required.

## Known Stubs
None - all components are fully functional with real data sources (i18n messages, next-intl routing).

## Next Phase Readiness
- Shell is complete: Navbar, Footer, MobileMenu, LanguageToggle all wired into root layout
- Build passes with static rendering for both locales
- Ready for Phase 03 (UI primitives) and Phase 04 (homepage content)

---
*Phase: 02-shell*
*Completed: 2026-03-22*

## Self-Check: PASSED
