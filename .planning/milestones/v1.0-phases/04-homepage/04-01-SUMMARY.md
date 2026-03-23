---
phase: 04-homepage
plan: 01
subsystem: ui
tags: [i18n, next-intl, react, hero, section-header]

requires:
  - phase: 03-ui-primitives
    provides: Button, Tag, BlinkingCursor, TerminalPrompt components
provides:
  - Homepage i18n namespace (EN + IT) with all 6 sections
  - SectionHeader shared component for section labeling
  - Hero section component with full-viewport layout
  - page.tsx wired with Hero and i18n translations
affects: [04-02, 04-03, 05-inner-pages]

tech-stack:
  added: []
  patterns: [section-component-with-props, page-as-translation-orchestrator]

key-files:
  created:
    - src/components/sections/SectionHeader.tsx
    - src/components/sections/Hero.tsx
  modified:
    - src/messages/en.json
    - src/messages/it.json
    - src/app/[locale]/page.tsx

key-decisions:
  - "Used src/messages/ path (Phase 2 convention) instead of src/i18n/messages/"
  - "Created SectionHeader at sections/ path per plan, separate from existing layout/SectionHeader"
  - "Hero renders TerminalPrompt inline rather than importing Phase 3 TerminalPrompt component to support custom prompt text prop"

patterns-established:
  - "Section components accept translated strings as props, page.tsx orchestrates translations"
  - "SectionHeader reusable for label+title pattern across all homepage sections"

requirements-completed: [HOME-01]

duration: 4min
completed: 2026-03-22
---

# Phase 04 Plan 01: i18n Homepage Namespace + SectionHeader + Hero Section Summary

**Complete homepage i18n namespace (EN+IT, 6 sections, 100+ keys) with SectionHeader component and full-viewport Hero section wired into page.tsx**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-22T23:16:30Z
- **Completed:** 2026-03-22T23:20:44Z
- **Tasks:** 5
- **Files modified:** 5

## Accomplishments
- Full homepage i18n namespace with all 6 sections (hero, howIWork, timeline, metrics, currentWork, contact) in both EN and IT
- SectionHeader shared component (Server Component) with monospace label and Space Grotesk title
- Hero section filling 100vh with upper-third positioning, terminal prompt, headline, subtitle with blinking cursor, CTA buttons, credential tags, separator, and signature phrase
- page.tsx wired as translation orchestrator with static rendering (SSG) for both locales

## Task Commits

Each task was committed atomically:

1. **Task 1: Populate homepage i18n namespace (EN)** - `e78033d` (feat)
2. **Task 2: Populate homepage i18n namespace (IT)** - `35e31c0` (feat)
3. **Task 3: Create SectionHeader shared component** - `73e551e` (feat)
4. **Task 4: Create Hero section component** - `b31c7fc` (feat)
5. **Task 5: Wire Hero into page.tsx** - `421dc01` (feat)

## Files Created/Modified
- `src/messages/en.json` - Added homepage namespace with all 6 sections EN copy
- `src/messages/it.json` - Added homepage namespace with all 6 sections IT copy
- `src/components/sections/SectionHeader.tsx` - Shared label+title component for sections
- `src/components/sections/Hero.tsx` - Full-viewport hero with 7 visual elements
- `src/app/[locale]/page.tsx` - Replaced placeholder with Hero section + i18n

## Decisions Made
- Used `src/messages/` path consistent with Phase 2 convention (not `src/i18n/messages/` as plan referenced)
- Created new `src/components/sections/SectionHeader.tsx` per plan spec, separate from existing `src/components/layout/SectionHeader.tsx` which has different styling
- Rendered terminal prompt inline in Hero (with prop for custom text) instead of importing Phase 3 TerminalPrompt component which has hardcoded text

## Deviations from Plan

None - plan executed exactly as written. File paths adjusted to match existing project conventions (src/messages/ instead of src/i18n/messages/).

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Hero section renders at / (EN) and /it (IT) with full bilingual content
- SectionHeader component ready for remaining 5 homepage sections (plans 04-02 and 04-03)
- Build passes with static output for both locale routes

## Self-Check: PASSED

All 5 created/modified files verified on disk. All 5 task commit hashes verified in git log.

---
*Phase: 04-homepage*
*Completed: 2026-03-22*
