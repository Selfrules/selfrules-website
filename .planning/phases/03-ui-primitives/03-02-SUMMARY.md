---
phase: 03-ui-primitives
plan: 02
subsystem: ui
tags: [react, tailwind, components, intersection-observer, animation]

requires:
  - phase: 03-ui-primitives/01
    provides: "Button, Tag, Section, SectionHeader components + design tokens"
provides:
  - "MetricCard with gap-[1px] grid pattern"
  - "CaseStudyCard with responsive flex layout and metric display"
  - "ProjectCard with status dot exception"
  - "BlinkingCursor + TerminalPrompt for hero identity"
  - "CountUpNumber with IntersectionObserver scroll trigger"
  - "VerticalTimeline + TimelineNode for career timeline"
  - "/dev/components verification route"
affects: [04-homepage, 05-inner-pages]

tech-stack:
  added: []
  patterns:
    - "gap-[1px] grid with outline hover for MetricCard"
    - "data-status-dot attribute to override global border-radius reset"
    - "animate-blink CSS class with prefers-reduced-motion in globals.css"
    - "IntersectionObserver + requestAnimationFrame for scroll-triggered animations"

key-files:
  created:
    - src/components/ui/MetricCard.tsx
    - src/components/ui/CaseStudyCard.tsx
    - src/components/ui/ProjectCard.tsx
    - src/components/ui/BlinkingCursor.tsx
    - src/components/ui/TerminalPrompt.tsx
    - src/components/ui/CountUpNumber.tsx
    - src/components/ui/VerticalTimeline.tsx
    - src/components/ui/TimelineNode.tsx
    - src/app/[locale]/dev/components/page.tsx
  modified:
    - src/app/globals.css

key-decisions:
  - "Added blink keyframes and animate-blink class to globals.css instead of inline styles"
  - "Used data-status-dot attribute with CSS rule to override global border-radius reset for status dots"
  - "TimelineNode uses computed px offsets instead of theme() function for Tailwind v4 compatibility"

patterns-established:
  - "Client Components: only BlinkingCursor and CountUpNumber use 'use client'"
  - "Server Components compose Client Components (TerminalPrompt imports BlinkingCursor)"
  - "data attributes for CSS exceptions (data-status-dot for rounded dots)"

requirements-completed: [UICM-02, UICM-03, UICM-04, UICM-05]

duration: 4min
completed: 2026-03-22
---

# Phase 03 Plan 02: Remaining Components Summary

**8 UI components (MetricCard, CaseStudyCard, ProjectCard, BlinkingCursor, TerminalPrompt, CountUpNumber, VerticalTimeline, TimelineNode) plus /dev/components verification route completing the Phase 3 component library**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-22T23:06:00Z
- **Completed:** 2026-03-22T23:10:00Z
- **Tasks:** 10
- **Files modified:** 10

## Accomplishments
- Built all 8 remaining UI components for the design system
- Created /dev/components route for visual validation of all 12 Phase 3 components
- TypeScript and build verification pass cleanly
- Only 2 client components (BlinkingCursor, CountUpNumber) -- rest are Server Components

## Task Commits

1. **Task 1: MetricCard** - `f583ea2` (feat)
2. **Task 2: CaseStudyCard** - `3595e0e` (feat)
3. **Task 3: ProjectCard** - `bd260ac` (feat)
4. **Task 4: BlinkingCursor** - `25bb459` (feat)
5. **Task 5: TerminalPrompt** - `48e5f38` (feat)
6. **Task 6: CountUpNumber** - `3919def` (feat)
7. **Task 7: VerticalTimeline** - `9fbf123` (feat)
8. **Task 8: TimelineNode** - `0a4a47d` (feat)
9. **Task 9: /dev/components route** - `7ce3c56` (feat)
10. **Task 10: Build verification** - (no separate commit, verified all green)

## Files Created/Modified
- `src/components/ui/MetricCard.tsx` - Accent number metric card for gap-[1px] grid layout
- `src/components/ui/CaseStudyCard.tsx` - Responsive flex card with tag, title, preview, and large metric
- `src/components/ui/ProjectCard.tsx` - Side project card with status dot, tech tags, optional link
- `src/components/ui/BlinkingCursor.tsx` - Client Component: animated cursor (block/underscore variants)
- `src/components/ui/TerminalPrompt.tsx` - Terminal prompt line with blinking cursor
- `src/components/ui/CountUpNumber.tsx` - Client Component: scroll-triggered count-up animation
- `src/components/ui/VerticalTimeline.tsx` - Container with 2px vertical line for timeline nodes
- `src/components/ui/TimelineNode.tsx` - Timeline entry with square node, connector, content block
- `src/app/[locale]/dev/components/page.tsx` - Dev-only verification page showing all Phase 3 components
- `src/app/globals.css` - Added blink animation, data-status-dot border-radius exception

## Decisions Made
- Added blink keyframes to globals.css (cleaner than inline styles, centralized reduced-motion handling)
- Used data-status-dot attribute + CSS rule to override the global `border-radius: 0 !important` reset for ProjectCard status dots (only exception to 0px border-radius rule)
- TimelineNode uses computed pixel values (-33px, -41px, -23px, -31px) instead of Tailwind v4 theme() in calc, since theme() syntax differs in v4

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Global border-radius reset prevents status dot rounded-full**
- **Found during:** Task 3 (ProjectCard)
- **Issue:** globals.css has `* { border-radius: 0 !important; }` which overrides the `rounded-full` class needed for status dots
- **Fix:** Added `[data-status-dot] { border-radius: 9999px !important; }` rule to globals.css and `data-status-dot` attribute to the status dot span
- **Files modified:** src/app/globals.css, src/components/ui/ProjectCard.tsx
- **Verification:** Build passes, attribute-based override works correctly
- **Committed in:** 25bb459 (combined with BlinkingCursor commit)

**2. [Rule 3 - Blocking] BlinkingCursor animation needs centralized keyframes**
- **Found during:** Task 4 (BlinkingCursor)
- **Issue:** Inline style tags for keyframes in a React component is fragile; prefers-reduced-motion handling with broad selectors risks side effects
- **Fix:** Added @keyframes blink and .animate-blink class with prefers-reduced-motion media query to globals.css
- **Files modified:** src/app/globals.css
- **Verification:** Animation works, stops with reduced motion preference
- **Committed in:** 25bb459

---

**Total deviations:** 2 auto-fixed (2 blocking)
**Impact on plan:** Both fixes necessary for correct rendering. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All 12 Phase 3 components complete: Button, Tag, Section, SectionHeader, MetricCard, CaseStudyCard, ProjectCard, BlinkingCursor, TerminalPrompt, CountUpNumber, VerticalTimeline, TimelineNode
- /dev/components route ready for visual validation at localhost:3000/en/dev/components
- Phase 4 (Homepage) can now compose these components into page sections

## Self-Check: PASSED

- All 9 created files exist on disk
- All 9 commit hashes verified in git log
- TypeScript check: clean (0 errors)
- Build: clean (0 errors)

---
*Phase: 03-ui-primitives*
*Completed: 2026-03-22*
