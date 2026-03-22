---
phase: 05-inner-pages
plan: 01
subsystem: content, infra
tags: [mdx, next-mdx, tailwind-typography, i18n, next-intl, remark-gfm]

requires:
  - phase: 03-ui-primitives
    provides: Button, Section, Tag, CaseStudyCard, ProjectCard components
  - phase: 04-homepage
    provides: i18n namespace structure, SectionHeader pattern

provides:
  - MDX compilation infrastructure (@next/mdx configured with Turbopack)
  - @tailwindcss/typography plugin registered
  - mdx-components.tsx required by @next/mdx
  - PageCTA shared component for all inner pages
  - Complete bilingual i18n messages for 6 inner pages (about, work, lab, approach, notes)

affects: [05-02, 05-03, 05-04]

tech-stack:
  added: ["@next/mdx", "@mdx-js/loader", "@mdx-js/react", "@types/mdx", "@tailwindcss/typography", "remark-gfm"]
  patterns: ["MDX with Turbopack string plugins", "PageCTA component pattern", "Rich text <bold> tags in i18n JSON"]

key-files:
  created:
    - src/mdx-components.tsx
    - src/components/sections/page-cta.tsx
  modified:
    - next.config.ts
    - src/app/globals.css
    - src/messages/en.json
    - src/messages/it.json
    - package.json

key-decisions:
  - "Used next.config.ts (existing) instead of next.config.mjs (plan spec) to match project convention"
  - "Messages path src/messages/ (Phase 2 convention) not src/i18n/messages/ (plan spec)"
  - "PascalCase imports for Section.tsx and Button.tsx matching existing codebase convention"
  - "Used <bold> rich text tags for inline metrics in i18n JSON (technical adaptation of markdown bold)"

patterns-established:
  - "PageCTA: shared closing CTA component with text + primary/optional secondary buttons"
  - "Inner page i18n: namespace per page (about, work, lab, approach, notes) with nested keys"
  - "MDX Turbopack: remark plugins as string names, not imported functions"

requirements-completed: [COPY-01, COPY-02, COPY-03, MODB-01, MODB-02, MODB-03, MODB-04]

duration: 6min
completed: 2026-03-22
---

# Phase 5 Plan 1: MDX Infrastructure, PageCTA Component, and Bilingual i18n Content Summary

**@next/mdx with Turbopack + @tailwindcss/typography configured, PageCTA shared component created, complete bilingual i18n content for 6 inner pages (about, work, lab, approach, notes)**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-22T23:35:01Z
- **Completed:** 2026-03-22T23:41:18Z
- **Tasks:** 8
- **Files modified:** 7

## Accomplishments
- MDX compilation infrastructure fully configured (next.config.ts, mdx-components.tsx, remark-gfm)
- @tailwindcss/typography plugin registered via Tailwind v4 CSS-first @plugin directive
- PageCTA shared Server Component created for inner page closing CTAs
- Complete EN and IT i18n messages for all 6 inner pages, copy verbatim from source files
- Zero MODB violations: no job-seeker framing, no availability/CV in inner pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Install MDX and Typography dependencies** - `cbff912` (chore)
2. **Task 2: Configure next.config.ts for MDX with Turbopack** - `0f2fc85` (feat)
3. **Task 3: Create mdx-components.tsx** - `c90ae8a` (feat)
4. **Task 4: Register @tailwindcss/typography plugin** - `7c01816` (feat)
5. **Task 5: Create PageCTA component** - `914f5da` (feat)
6. **Task 6: Populate EN i18n messages** - `7006329` (feat)
7. **Task 7: Populate IT i18n messages** - `a483a21` (feat)
8. **Task 8: Build verification + import casing fix** - `2fb5003` (fix)

## Files Created/Modified
- `package.json` - Added 6 new dependencies for MDX and typography
- `next.config.ts` - Wrapped config with createMDX, added pageExtensions
- `src/mdx-components.tsx` - Required empty useMDXComponents export for @next/mdx
- `src/app/globals.css` - Added @plugin "@tailwindcss/typography"
- `src/components/sections/page-cta.tsx` - Shared PageCTA component with text + buttons
- `src/messages/en.json` - Added about, work, lab, approach, notes namespaces (EN)
- `src/messages/it.json` - Added about, work, lab, approach, notes namespaces (IT)

## Decisions Made
- Used `next.config.ts` instead of `next.config.mjs` to match existing project convention
- Messages stored in `src/messages/` (Phase 2 established path) not `src/i18n/messages/`
- PascalCase imports (`Section.tsx`, `Button.tsx`) matching existing codebase convention
- Rich text `<bold>` tags for inline bold metrics in i18n JSON (technical markdown-to-JSX adaptation, not a copy modification per COPY-01)
- Approach CTA text duplicated from closing.text to keep PageCTA component simple (single text prop)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed import casing in PageCTA**
- **Found during:** Task 8 (Build verification)
- **Issue:** PageCTA imported `@/components/layout/section` (lowercase) but the file is `Section.tsx` (PascalCase), causing TypeScript case-sensitivity error
- **Fix:** Changed imports to `@/components/layout/Section` and `@/components/ui/Button`
- **Files modified:** src/components/sections/page-cta.tsx
- **Verification:** npm run build passes with 0 errors
- **Committed in:** `2fb5003`

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Trivial casing fix for project convention consistency. No scope creep.

## Issues Encountered
None beyond the import casing fix documented above.

## Known Stubs
- CasaHunter links in i18n JSON use placeholder `[GitHub] . [Live dashboard]` text -- actual URLs to be filled in when CasaHunter pages/repos are ready (out of scope for this plan, documented in source copy)

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- MDX infrastructure ready for blog post creation (Plan 05-04)
- i18n messages ready for all inner page components (Plans 05-02, 05-03, 05-04)
- PageCTA component ready for use by all inner pages
- Build passes cleanly, all existing routes unaffected

## Self-Check: PASSED

All 6 created/modified files verified present. All 8 commit hashes verified in git log.

---
*Phase: 05-inner-pages*
*Completed: 2026-03-22*
