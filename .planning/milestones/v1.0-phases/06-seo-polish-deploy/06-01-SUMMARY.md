---
phase: 06-seo-polish-deploy
plan: 01
subsystem: seo
tags: [metadata, opengraph, hreflang, json-ld, sitemap, robots, next-metadata-api]

# Dependency graph
requires:
  - phase: 05-inner-pages
    provides: all page components and i18n message files
provides:
  - complete SEO metadata on every page (title, description, OG, Twitter, hreflang)
  - JSON-LD structured data (Person, BreadcrumbList, BlogPosting)
  - sitemap.xml with hreflang alternates for all routes
  - robots.txt with sitemap reference
  - static OG image placeholder
affects: [06-seo-polish-deploy]

# Tech tracking
tech-stack:
  added: []
  patterns: [createPageMetadata helper, JsonLd component, generateMetadata per page]

key-files:
  created:
    - src/lib/metadata.ts
    - src/components/seo/json-ld.tsx
    - src/app/sitemap.ts
    - src/app/robots.ts
    - public/og-image.png
  modified:
    - src/messages/en.json
    - src/messages/it.json
    - src/app/[locale]/layout.tsx
    - src/app/[locale]/page.tsx
    - src/app/[locale]/about/page.tsx
    - src/app/[locale]/work/page.tsx
    - src/app/[locale]/lab/page.tsx
    - src/app/[locale]/approach/page.tsx
    - src/app/[locale]/notes/page.tsx
    - src/app/[locale]/notes/why-i-prototype-in-code/page.tsx

key-decisions:
  - "createPageMetadata helper centralizes all SEO metadata generation (canonical, hreflang, OG, Twitter)"
  - "Homepage uses absolute title to bypass layout template suffix"
  - "OG image is a placeholder PNG (1200x630, brand dark bg) -- final to be exported from Figma"

patterns-established:
  - "createPageMetadata pattern: every page imports helper and calls it in generateMetadata"
  - "JsonLd component: reusable schema.org structured data injection"
  - "metadata i18n namespace: SEO copy lives in messages files alongside page copy"

requirements-completed: [SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, SEO-06, SEO-07]

# Metrics
duration: 6min
completed: 2026-03-23
---

# Phase 06 Plan 01: SEO Metadata Infrastructure Summary

**Complete SEO metadata on all pages with generateMetadata, hreflang alternates, JSON-LD (Person/BreadcrumbList/BlogPosting), sitemap.xml, and robots.txt**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-22T23:58:50Z
- **Completed:** 2026-03-23T00:04:34Z
- **Tasks:** 7
- **Files modified:** 14

## Accomplishments
- Every page has localized meta title, description, Open Graph, and Twitter Card tags
- hreflang alternates (en, it, x-default) on all pages and in sitemap.xml
- JSON-LD structured data: Person schema on homepage, BreadcrumbList on all inner pages, BlogPosting on notes post
- sitemap.xml with all 14 URLs (7 pages x 2 locales) and hreflang alternates
- robots.txt allowing all crawlers with sitemap reference

## Task Commits

Each task was committed atomically:

1. **Task 1: Create metadata helper and i18n metadata namespace** - `e14414a` (feat)
2. **Task 2: Add title template and metadataBase to root locale layout** - `23904df` (feat)
3. **Task 3: Add generateMetadata to all page files** - `059d0c0` (feat)
4. **Task 4: Create JSON-LD component and add structured data to pages** - `eb871d5` (feat)
5. **Task 5: Create sitemap.ts and robots.ts** - `71834ad` (feat)
6. **Task 6: Create static OG image** - `c524e06` (feat)
7. **Task 7: Build verification** - (verification only, no commit)

## Files Created/Modified
- `src/lib/metadata.ts` - createPageMetadata helper with canonical, hreflang, OG, Twitter card
- `src/components/seo/json-ld.tsx` - Reusable JsonLd component for schema.org data
- `src/app/sitemap.ts` - Dynamic sitemap with all routes and hreflang alternates
- `src/app/robots.ts` - Robots.txt with sitemap reference
- `public/og-image.png` - 1200x630 placeholder OG image
- `src/messages/en.json` - Added metadata namespace with EN SEO copy
- `src/messages/it.json` - Added metadata namespace with IT SEO copy
- `src/app/[locale]/layout.tsx` - Added metadataBase and title template
- `src/app/[locale]/page.tsx` - Added generateMetadata with absolute title + Person JSON-LD
- `src/app/[locale]/about/page.tsx` - Added generateMetadata + BreadcrumbList
- `src/app/[locale]/work/page.tsx` - Added generateMetadata + BreadcrumbList
- `src/app/[locale]/lab/page.tsx` - Added generateMetadata + BreadcrumbList
- `src/app/[locale]/approach/page.tsx` - Added generateMetadata + BreadcrumbList
- `src/app/[locale]/notes/page.tsx` - Added generateMetadata + BreadcrumbList
- `src/app/[locale]/notes/why-i-prototype-in-code/page.tsx` - Added generateMetadata + BreadcrumbList + BlogPosting

## Decisions Made
- Used createPageMetadata helper to centralize all SEO metadata generation rather than inline in each page
- Homepage uses `title: { absolute: ... }` to bypass the layout template suffix (full title without " -- Mattia De Luca" duplication)
- OG image is a placeholder solid-color PNG (1200x630, brand dark bg #0A0A0B) -- final version should be exported from Figma with typography

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

- `public/og-image.png` - Placeholder solid-color image. Final OG image with typography (SELFRULES wordmark, name, title) should be exported from Figma. Referenced in metadata but functional as-is.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All SEO metadata infrastructure is in place
- Build passes with all routes static
- Ready for remaining Phase 06 plans (accessibility, analytics, deploy)

## Self-Check: PASSED

All 5 created files verified. All 6 commit hashes verified.

---
*Phase: 06-seo-polish-deploy*
*Completed: 2026-03-23*
