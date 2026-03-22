---
phase: 5
plan: 2
subsystem: inner-pages
tags: [about, approach, prose, timeline, i18n]
dependency_graph:
  requires: [05-01]
  provides: [about-page, approach-page]
  affects: [navigation, seo]
tech_stack:
  added: []
  patterns: [rich-text-bold, vertical-timeline-inline, prose-sections]
key_files:
  created:
    - src/app/[locale]/about/page.tsx
    - src/app/[locale]/approach/page.tsx
  modified: []
decisions:
  - Used inline timeline nodes instead of TimelineNode component to support ReactNode rich text content
  - Option B for "Outside work" section — 1px border-t divider for subtle visual separation
  - Approach PageCTA links to /work with locale-aware path
metrics:
  duration: 3min
  completed: 2026-03-22
---

# Phase 5 Plan 2: About Page and Approach Page Summary

About and Approach pages built as Server Components with VerticalTimeline career path (4 nodes, last active), 3 belief principles as prose, and 5 numbered approach sections with rich text bold metrics in accent color.

## What Was Built

### About Page (`/about`, `/it/about`)
- **Headline:** Space Grotesk 700, clamp(28-36px)
- **Career Path:** VerticalTimeline container with 4 inline career entries (Selfrules, FLOWING, LeadsBridge, QubicaAMF). Last node filled accent square. Each node has company name (20px Space Grotesk), dates (14px mono), multi-paragraph prose with rich text `<bold>` tags rendering in accent color
- **What I Believe:** 3 principles as sequential prose (not cards, per D-02), 48px between items
- **Outside Work:** Subtle 1px border-t divider above (D-03, Option B)
- **PageCTA:** "Get in touch" / "Scrivimi" linking to mailto:mattia@selfrules.org

### Approach Page (`/approach`, `/it/approach`)
- **Headline + Intro:** Title + secondary text intro paragraph
- **5 Numbered Sections:** Each with h2 subtitle (20px Space Grotesk), multi-paragraph prose body. Numbers in title text (not separate markers). Bold metrics (35%) in accent color via t.rich()
- **Closing Text:** Final paragraph before CTA
- **PageCTA:** "See the work" / "Guarda i lavori" linking to /work

## Commits

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 05-02-01 | About page with VerticalTimeline | 8dabbe1 | src/app/[locale]/about/page.tsx |
| 05-02-02 | Approach page with 5 sections | 6b3fe3f | src/app/[locale]/approach/page.tsx |
| 05-02-03 | Visual verification | (no changes) | verification only |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Inline timeline nodes instead of TimelineNode component**
- **Found during:** Task 1
- **Issue:** TimelineNode component accepts `description?: string` but About page needs multi-paragraph ReactNode content with rich text bold tags
- **Fix:** Used VerticalTimeline container with custom inline nodes matching TimelineNode visual style (same square nodes, connector lines, positioning) but supporting ReactNode content
- **Files modified:** src/app/[locale]/about/page.tsx

## Known Stubs

None. All content is wired to i18n translations from Plan 05-01.

## Self-Check: PASSED
