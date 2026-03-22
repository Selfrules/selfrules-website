---
phase: 05-inner-pages
plan: 03
subsystem: ui
tags: [next.js, i18n, case-study, lab, server-components]

# Dependency graph
requires:
  - phase: 03-ui-primitives
    provides: CaseStudyCard, Tag, Section, Button components
  - phase: 05-inner-pages plan 01
    provides: i18n work/lab namespaces, PageCTA component
provides:
  - Work page route with 2 CaseStudyCards
  - Lab page route with CasaHunter expanded detail and MoneyMind
affects: [06-seo-polish-deploy]

# Tech tracking
tech-stack:
  added: []
  patterns: [inline expanded project detail for Lab, non-clickable CaseStudyCards]

key-files:
  created:
    - src/app/[locale]/work/page.tsx
    - src/app/[locale]/lab/page.tsx
  modified: []

key-decisions:
  - "CaseStudyCard note rendered as separate p tag below card (component lacks note prop)"
  - "CasaHunter sub-section headings use locale conditional strings (not in i18n, structural labels)"
  - "Status dot uses data-status-dot attribute matching Phase 3 convention for border-radius override"

patterns-established:
  - "Non-clickable cards: no href, no role=link, no cursor-pointer -- informational containers only"
  - "Expanded inline project detail: sub-sections with h3 headings within a Section component"

requirements-completed: [PAGE-02, PAGE-03, COPY-01, MODB-01, MODB-02, MODB-04]

# Metrics
duration: 2min
completed: 2026-03-22
---

# Phase 5 Plan 03: Work Page and Lab Page Summary

**Work page with 2 non-clickable CaseStudyCards and Lab page with CasaHunter expanded inline detail and MoneyMind coming soon**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-22T23:44:23Z
- **Completed:** 2026-03-22T23:46:31Z
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments
- Work page with Payments Rescue and Cashless System CaseStudyCards, stacked vertically with i18n content
- Lab page with CasaHunter expanded inline (problem, what it does, product decision, stack tags, status, links)
- MoneyMind coming soon section and PageCTA on both pages
- Both routes build as static SSG pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Build Work page with 2 CaseStudyCards** - `c42c7ac` (feat)
2. **Task 2: Build Lab page with CasaHunter expanded detail and MoneyMind** - `e4a5b10` (feat)
3. **Task 3: Visual verification** - no commit (verification only, build passed)

## Files Created/Modified
- `src/app/[locale]/work/page.tsx` - Work page with headline, intro, 2 CaseStudyCards, PageCTA
- `src/app/[locale]/lab/page.tsx` - Lab page with CasaHunter expanded section, MoneyMind, PageCTA

## Decisions Made
- CaseStudyCard component from Phase 3 lacks a `note` prop -- rendered note as separate monospace paragraph below Card 2
- CasaHunter sub-section headings (The problem, What it does, The product decision) use locale conditional strings rather than i18n keys since they are structural labels
- GitHub/Dashboard links use href="#" with TODO for actual URLs as specified in plan

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] CaseStudyCard missing note prop**
- **Found during:** Task 1 (Work page)
- **Issue:** CaseStudyCard component has no `note` prop but plan calls for [DRAFT]/[BOZZA] note display
- **Fix:** Rendered note as a separate `<p>` element below the CaseStudyCard in monospace text-secondary style
- **Files modified:** src/app/[locale]/work/page.tsx
- **Verification:** Build passes, note renders correctly
- **Committed in:** c42c7ac (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Minor adaptation, no scope creep. Note renders with correct styling.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Work and Lab routes complete with static generation
- Ready for Phase 6 SEO metadata and polish

## Self-Check: PASSED

- FOUND: src/app/[locale]/work/page.tsx
- FOUND: src/app/[locale]/lab/page.tsx
- FOUND: commit c42c7ac
- FOUND: commit e4a5b10

---
*Phase: 05-inner-pages*
*Completed: 2026-03-22*
