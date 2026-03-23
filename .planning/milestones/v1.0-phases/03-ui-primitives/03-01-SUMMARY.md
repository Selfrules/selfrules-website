---
phase: 03-ui-primitives
plan: 01
subsystem: ui
tags: [tailwind-v4, clsx, server-components, design-system]

# Dependency graph
requires:
  - phase: 02-shell
    provides: "globals.css @theme tokens, font setup (Inter, Space Grotesk, JetBrains Mono)"
provides:
  - "cn() class merging utility at src/lib/utils.ts"
  - "Tag component (monospace uppercase label, bordered/borderless variants)"
  - "Button component (polymorphic Link/button, primary/secondary variants)"
  - "Section layout wrapper (720px/1080px max-width, section-gap padding)"
  - "SectionHeader component (monospace label + Space Grotesk title)"
affects: [03-02, 04-homepage, 05-inner-pages]

# Tech tracking
tech-stack:
  added: [clsx]
  patterns: [cn-utility, server-components-only, css-custom-properties-for-layout]

key-files:
  created:
    - src/lib/utils.ts
    - src/components/ui/Tag.tsx
    - src/components/ui/Button.tsx
    - src/components/layout/Section.tsx
    - src/components/layout/SectionHeader.tsx
  modified: [package.json]

key-decisions:
  - "Used actual CSS token names (--spacing-section, --width-content, --width-wide, --spacing-page-padding) instead of plan aliases"
  - "No tailwind-merge needed -- clsx alone sufficient for this project"

patterns-established:
  - "Server Components only: no 'use client' in any UI primitive"
  - "cn() from @/lib/utils for all conditional class merging"
  - "CSS custom properties via var() for layout dimensions"
  - "Polymorphic pattern: render Link vs button based on href prop"

requirements-completed: [UICM-01, UICM-06, UICM-07]

# Metrics
duration: 1min
completed: 2026-03-22
---

# Phase 3 Plan 01: Foundational UI Components Summary

**5 leaf-level UI primitives (cn, Tag, Button, Section, SectionHeader) as Server Components with clsx, Tailwind v4 tokens, and 0px border-radius**

## Performance

- **Duration:** 1 min
- **Started:** 2026-03-22T23:03:01Z
- **Completed:** 2026-03-22T23:04:11Z
- **Tasks:** 6
- **Files modified:** 6

## Accomplishments
- Established cn() utility pattern used by all subsequent components
- Created Tag and Button as typed, variant-based primitives with CSS-only hover states
- Created Section and SectionHeader layout wrappers using CSS custom properties
- All components are Server Components (no 'use client') with 0px border-radius

## Task Commits

Each task was committed atomically:

1. **Task 1: Install clsx and create cn() utility** - `3a1c08f` (feat)
2. **Task 2: Create Tag component** - `1a54393` (feat)
3. **Task 3: Create Button component** - `8c6937e` (feat)
4. **Task 4: Create Section layout wrapper** - `fb871e2` (feat)
5. **Task 5: Create SectionHeader component** - `da63a15` (feat)
6. **Task 6: Verify all foundational components build** - no commit (verification only, tsc + build pass)

## Files Created/Modified
- `src/lib/utils.ts` - cn() class name merging utility wrapping clsx
- `src/components/ui/Tag.tsx` - Monospace uppercase label with bordered/borderless variants
- `src/components/ui/Button.tsx` - Polymorphic CTA button (Link or button) with primary/secondary variants
- `src/components/layout/Section.tsx` - Layout wrapper with section-gap, max-width, page-padding
- `src/components/layout/SectionHeader.tsx` - Label (monospace) + title (Space Grotesk) pattern
- `package.json` - Added clsx dependency

## Decisions Made
- Used actual CSS custom property names from globals.css (--spacing-section, --width-content, --width-wide, --spacing-page-padding) instead of the plan's aliases (--section-gap, --content-width, --wide-width, --page-padding) -- the plan used shorthand names that don't match the actual @theme tokens
- Chose clsx without tailwind-merge since there are no conflicting utility class scenarios in this project

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Corrected CSS token references in Section component**
- **Found during:** Task 4 (Section layout wrapper)
- **Issue:** Plan referenced --section-gap, --content-width, --wide-width, --page-padding but actual @theme tokens are --spacing-section, --width-content, --width-wide, --spacing-page-padding
- **Fix:** Used actual token names from globals.css
- **Files modified:** src/components/layout/Section.tsx
- **Verification:** npm run build passes, tokens resolve correctly
- **Committed in:** fb871e2

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Token name correction was necessary for the component to work. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All 5 foundational components ready for import by Phase 3 Plan 02 (MetricCard, CaseStudyCard, ProjectCard, VerticalTimeline, etc.)
- cn() utility pattern established for all future components
- Section and SectionHeader provide consistent layout containers

---
*Phase: 03-ui-primitives*
*Completed: 2026-03-22*
