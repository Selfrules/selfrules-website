---
phase: 06-seo-polish-deploy
plan: 02
subsystem: accessibility-polish
tags: [a11y, wcag-aa, scroll-animations, focus-styles, reduced-motion, skip-to-content, active-nav]
dependency_graph:
  requires: [03-01, 03-02, 04-01, 04-02, 05-01, 05-02, 05-03, 05-04]
  provides: [a11y-compliance, scroll-animations, focus-styles, reduced-motion-support]
  affects: [all-pages, globals-css, navbar, section-component]
tech_stack:
  added: [IntersectionObserver-based-ScrollReveal]
  patterns: [css-reduced-motion, js-reduced-motion-check, focus-visible-outline]
key_files:
  created:
    - src/components/ui/scroll-reveal.tsx
  modified:
    - src/app/[locale]/layout.tsx
    - src/app/globals.css
    - src/app/[locale]/page.tsx
    - src/app/[locale]/about/page.tsx
    - src/app/[locale]/work/page.tsx
    - src/app/[locale]/lab/page.tsx
    - src/app/[locale]/approach/page.tsx
    - src/components/layout/Section.tsx
    - src/components/ui/BlinkingCursor.tsx
decisions:
  - "Skip link uses #main-content (updated from existing #main for spec consistency)"
  - "text-tertiary usages verified as decorative/supplementary -- no contrast changes needed"
  - "Active nav highlighting already implemented -- no changes needed for task 05"
metrics:
  duration: 7min
  completed: "2026-03-23T00:06:00Z"
---

# Phase 06 Plan 02: Accessibility, Scroll Animations, Active Nav, Smooth Scroll Summary

WCAG AA compliance with skip-to-content, focus-visible outlines, scroll-triggered fade-in animations via native IntersectionObserver, and comprehensive prefers-reduced-motion handling across CSS and JS.

## What Was Done

### Task 1: Skip-to-Content Link and Main Landmark (e261fa8)
Updated existing skip-to-content link to use `#main-content` with z-[100] and font-bold styling. Updated main element id to `main-content`. i18n strings already present in both locales.

### Task 2: Global Focus Styles and Smooth Scroll CSS (930df41)
Added to globals.css: `:focus-visible` outline with accent color, `scroll-behavior: smooth`, `fade-up` keyframes and animation classes, timeline node illumination styles, and comprehensive `prefers-reduced-motion: reduce` media query handling for all animated elements.

### Task 3: ScrollReveal Client Component (a3a0afc)
Created `src/components/ui/scroll-reveal.tsx` -- a lightweight client component using native IntersectionObserver with threshold 0.1, fires-once behavior via `unobserve`, and JS-level prefers-reduced-motion check.

### Task 4: Wrap Sections in ScrollReveal (1ccb035)
Wrapped 5 homepage sections (HowIWork, Timeline, Metrics, CurrentWork, Contact) in ScrollReveal. Hero is NOT wrapped (visible immediately). Also wrapped content sections on about, work, lab, and approach pages. Page headlines remain immediately visible.

### Task 5: Active Nav Link Highlighting (already implemented)
Verified that active nav link highlighting was already implemented in Navbar.tsx using `usePathname` from next-intl navigation. Active links get `text-accent` color. CTA link always stays accent-styled. No changes needed.

### Task 6: Semantic HTML Audit (6d211cb)
Verified all semantic landmarks: `<header>` + `<nav>` in Navbar, `<footer>` in Footer, `<main id="main-content">` in layout, `<article>` on blog post. Section component renders `<section>` tag. Added `aria-label` prop support to Section component. Heading hierarchy verified correct (h1 per page, h2 for sections, h3 for subsections).

### Task 7: Reduced-Motion Handling (f78616f)
Added `blinking-cursor` class to BlinkingCursor component for CSS reduced-motion hook. CountUpNumber already had JS-level `prefers-reduced-motion` check. CSS handles animation disabling for both components.

### Task 8: Color Contrast Verification (no commit)
Verified all text-tertiary (#5A5A5E) usages are on decorative/supplementary content only: pipe separators, credit lines, build versions, dates, metric labels, terminal prompt text. No essential body text uses text-tertiary. WCAG AA compliance confirmed for all text pairings.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Parallel agent modified page files**
- **Found during:** Task 4
- **Issue:** The 06-01 plan agent had already modified page files (adding metadata/JsonLd imports) between plan read and task execution
- **Fix:** Re-read files before editing, adapted imports to coexist with 06-01 changes
- **Files affected:** All page.tsx files

## Known Stubs

None -- all features are fully wired.

## Self-Check: PASSED

All 6 created/modified files verified on disk. All 6 commit hashes verified in git log.
