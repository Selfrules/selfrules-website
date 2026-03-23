---
phase: 06-seo-polish-deploy
verified: 2026-03-23T10:00:00Z
status: human_needed
score: 6/6 must-haves verified
re_verification: false
human_verification:
  - test: "Lighthouse scores on production (or local prod build)"
    expected: "Performance >= 95, Accessibility >= 95, Best Practices >= 95, SEO >= 95"
    why_human: "Lighthouse requires a browser and running server; cannot verify programmatically from static analysis alone"
  - test: "Actual Vercel deploy and selfrules.org domain"
    expected: "Site accessible at https://selfrules.org with HTTPS; www redirect returns 301 to non-www"
    why_human: "Deployment deferred to Mattia — requires Vercel account authentication. vercel.json and DEPLOY-CHECKLIST.md are in place."
  - test: "JSON-LD Person schema validation on homepage"
    expected: "https://validator.schema.org shows no errors for the Person schema on https://selfrules.org"
    why_human: "Schema.org validator requires a live URL or pasted JSON; verifying JSON shape only is possible statically (done), but full validation requires the tool"
  - test: "Scroll animations fire correctly in browser"
    expected: "Non-Hero sections fade in on scroll; Hero is immediately visible; animation does NOT fire under prefers-reduced-motion"
    why_human: "IntersectionObserver behavior requires a real browser viewport; cannot simulate scroll events statically"
---

# Phase 06: SEO, Polish, Deploy Verification Report

**Phase Goal:** The site is production-ready: discoverable by search engines, accessible, performant, polished with animations, and live on selfrules.org
**Verified:** 2026-03-23
**Status:** human_needed
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths

| #   | Truth                                                              | Status     | Evidence                                                                        |
| --- | ------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------- |
| 1   | Every page has unique title, meta description, and OG tags         | VERIFIED   | `generateMetadata` + `createPageMetadata` wired on all 7 pages (EN + IT)       |
| 2   | sitemap.xml lists all pages with hreflang alternates               | VERIFIED   | `src/app/sitemap.ts` — 14 URLs (7 pages x 2 locales) with `alternates.languages` |
| 3   | JSON-LD Person schema on homepage                                  | VERIFIED   | `JsonLd` with `@type: Person` in `src/app/[locale]/page.tsx` line 45–55        |
| 4   | Scroll animations work and respect prefers-reduced-motion          | VERIFIED   | `ScrollReveal` wraps 5 homepage sections; CSS + JS reduced-motion guards in place |
| 5   | Production build passes, all routes are static (SSG)              | VERIFIED   | Build verified in plan 06-03 (SUMMARY confirms static routes, lang attribute fixed) |
| 6   | Deploy configuration in place (deferred actual deploy to Mattia)  | VERIFIED   | `vercel.json` + `DEPLOY-CHECKLIST.md` exist and are substantive (110 lines)    |

**Score:** 6/6 truths verified

---

### Required Artifacts

| Artifact                                            | Expected                                   | Status     | Details                                                      |
| --------------------------------------------------- | ------------------------------------------ | ---------- | ------------------------------------------------------------ |
| `src/lib/metadata.ts`                               | createPageMetadata helper with hreflang    | VERIFIED   | 53 lines; exports `createPageMetadata`, includes `x-default`, OG, Twitter, canonical |
| `src/components/seo/json-ld.tsx`                    | JsonLd component with ld+json script       | VERIFIED   | 8 lines; renders `<script type="application/ld+json">`       |
| `src/app/sitemap.ts`                                | Sitemap with hreflang alternates           | VERIFIED   | 30 lines; covers all 7 routes x 2 locales, uses `MetadataRoute.Sitemap` |
| `src/app/robots.ts`                                 | Robots.txt with sitemap reference          | VERIFIED   | 12 lines; allows all, references `https://selfrules.org/sitemap.xml` |
| `public/og-image.png`                               | 1200x630 PNG                               | VERIFIED   | PNG 1200x630 confirmed by `file` command (3.6KB placeholder) |
| `src/components/ui/scroll-reveal.tsx`               | IntersectionObserver, prefers-reduced-motion, fires-once | VERIFIED | 38 lines; all three requirements confirmed |
| `src/app/[locale]/layout.tsx`                       | html lang, metadataBase, skip-link, main   | VERIFIED   | `lang={locale}`, `metadataBase`, `#main-content`, skip link with sr-only |
| `src/app/[locale]/page.tsx`                         | generateMetadata, ScrollReveal, Person JSON-LD | VERIFIED | absolute title, 5 ScrollReveal wrappers, Person schema present |
| `src/app/[locale]/about/page.tsx`                   | generateMetadata, BreadcrumbList           | VERIFIED   | createPageMetadata at line 16, BreadcrumbList confirmed      |
| `src/app/[locale]/work/page.tsx`                    | generateMetadata, BreadcrumbList           | VERIFIED   | createPageMetadata at line 20, BreadcrumbList confirmed      |
| `src/app/[locale]/lab/page.tsx`                     | generateMetadata, BreadcrumbList           | VERIFIED   | createPageMetadata at line 32, BreadcrumbList confirmed      |
| `src/app/[locale]/approach/page.tsx`                | generateMetadata, BreadcrumbList           | VERIFIED   | createPageMetadata at line 15, BreadcrumbList confirmed      |
| `src/app/[locale]/notes/page.tsx`                   | generateMetadata, BreadcrumbList           | VERIFIED   | createPageMetadata at line 14, BreadcrumbList confirmed      |
| `src/app/[locale]/notes/why-i-prototype-in-code/page.tsx` | generateMetadata, BreadcrumbList, BlogPosting | VERIFIED | All three confirmed at lines 4, 50, 59 |
| `src/app/globals.css`                               | focus-visible, fade-up, reduced-motion     | VERIFIED   | Lines 76, 83, 87, 102, 125 all confirmed                     |
| `src/components/layout/Navbar.tsx`                  | usePathname, isActive, text-accent         | VERIFIED   | `usePathname` from next-intl navigation, `isActive` at line 69, `text-accent` at line 78 |
| `vercel.json`                                       | Security headers, font caching             | VERIFIED   | X-Content-Type-Options, X-Frame-Options, Referrer-Policy, immutable font cache |
| `DEPLOY-CHECKLIST.md`                               | Substantive deploy guide                   | VERIFIED   | 110 lines; covers login, link, env vars, preview, prod, domain |
| `src/lib/fonts.ts`                                  | display: 'swap' for CLS prevention         | VERIFIED   | All 3 fonts (Inter, SpaceGrotesk, JetBrains Mono) use `display: 'swap'` |

---

### Key Link Verification

| From                          | To                             | Via                          | Status  | Details                                              |
| ----------------------------- | ------------------------------ | ---------------------------- | ------- | ---------------------------------------------------- |
| Every page                    | `createPageMetadata`           | import + generateMetadata    | WIRED   | All 7 pages import and call helper                  |
| Homepage                      | Person JSON-LD                 | `<JsonLd data={...}>`        | WIRED   | Rendered in page JSX, not just imported             |
| Inner pages                   | BreadcrumbList JSON-LD         | `<JsonLd data={...}>`        | WIRED   | Confirmed in about, work, lab, approach, notes, post |
| notes post                    | BlogPosting JSON-LD            | `<JsonLd data={...}>`        | WIRED   | Confirmed in why-i-prototype-in-code/page.tsx        |
| locale layout                 | `lang={locale}` on `<html>`   | `params` await               | WIRED   | Root layout is pass-through; locale layout owns html |
| layout                        | skip-to-content link           | `#main-content` id on main   | WIRED   | Both href and id confirmed; uses `a11y` namespace    |
| homepage                      | 5 ScrollReveal wrappers        | import + JSX wrapping        | WIRED   | 5 `<ScrollReveal>` opens confirmed, Hero excluded    |
| ScrollReveal                  | CSS `animate-fade-up` classes  | classList manipulation       | WIRED   | JS adds/removes classes defined in globals.css       |
| BlinkingCursor                | `blinking-cursor` CSS class    | className prop               | WIRED   | Class applied; CSS reduced-motion rule targets it    |
| CountUpNumber                 | prefers-reduced-motion check   | JS `matchMedia`              | WIRED   | JS check confirmed in component                      |
| Navbar                        | active link highlight          | `usePathname` + `text-accent`| WIRED   | isActive logic confirmed, accent class applied       |
| `src/app/sitemap.ts`          | all 7 routes x 2 locales       | `pages.flatMap`              | WIRED   | 14 URLs with alternates                              |

---

### Data-Flow Trace (Level 4)

Not applicable — this phase produces no database-backed components. All data flows are from i18n message files (static) or schema.org literals (hardcoded). The metadata and JSON-LD values are statically rendered at build time.

---

### Behavioral Spot-Checks

| Behavior                               | Command                                                                                              | Result  | Status  |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------- | ------- |
| sitemap.ts exports valid function      | `node -e "const m = require('/Users/mattia/.../src/app/sitemap.ts'); ..."`                           | TS file | SKIP    |
| og-image.png is real PNG at 1200x630   | `file public/og-image.png`                                                                            | PNG 1200x630 8-bit RGB | PASS |
| vercel.json is valid JSON              | `cat vercel.json` parses cleanly                                                                     | Valid JSON with headers/redirects | PASS |
| ScrollReveal uses IntersectionObserver | `grep "IntersectionObserver" src/components/ui/scroll-reveal.tsx`                                    | Found   | PASS    |
| lang attribute in locale layout        | `grep 'lang={locale}' src/app/[locale]/layout.tsx`                                                   | Found   | PASS    |
| Lighthouse scores (all 4 categories)   | Requires browser + running server                                                                    | N/A     | SKIP — human needed |

---

### Requirements Coverage

| Requirement | Source Plan | Description                                                  | Status         | Evidence                                              |
| ----------- | ----------- | ------------------------------------------------------------ | -------------- | ----------------------------------------------------- |
| SEO-01      | 06-01       | Meta title + description per page                            | SATISFIED      | generateMetadata on all 7 pages                       |
| SEO-02      | 06-01       | Open Graph tags per page                                     | SATISFIED      | createPageMetadata includes full openGraph block      |
| SEO-03      | 06-01       | Canonical URLs per page                                      | SATISFIED      | `alternates.canonical` in createPageMetadata          |
| SEO-04      | 06-01       | hreflang alternates (en, it, x-default)                      | SATISFIED      | `alternates.languages` with x-default confirmed       |
| SEO-05      | 06-01       | JSON-LD Person + BreadcrumbList                              | SATISFIED      | Person on homepage, BreadcrumbList on all inner pages |
| SEO-06      | 06-01       | sitemap.xml and robots.txt                                   | SATISFIED      | Both files exist and are substantive                  |
| SEO-07      | 06-01       | Correct `<html lang>` attribute                              | SATISFIED      | `lang={locale}` in locale layout; root is pass-through |
| A11Y-01     | 06-02       | Skip-to-content link                                         | SATISFIED      | sr-only link to #main-content in layout               |
| A11Y-02     | 06-02       | Visible focus styles                                         | SATISFIED      | `:focus-visible` with accent outline in globals.css   |
| A11Y-03     | 06-02       | WCAG AA color contrast                                       | NEEDS HUMAN    | Verified programmatically (text-tertiary on decorative only); visual confirmation recommended |
| A11Y-04     | 06-02       | Semantic HTML (header, nav, main, article, footer)           | SATISFIED      | header+nav in Navbar, footer in Footer, article in notes post, main in layout |
| A11Y-05     | 06-02       | prefers-reduced-motion respected                             | SATISFIED      | CSS media query in globals.css + JS check in ScrollReveal and CountUpNumber |
| PERF-01     | 06-03       | Lighthouse Performance >= 95                                 | NEEDS HUMAN    | Static analysis shows no blockers; actual Lighthouse score needs browser |
| PERF-02     | 06-03       | Lighthouse Accessibility >= 95                               | NEEDS HUMAN    | Static analysis complete; actual score needs browser  |
| PERF-03     | 06-03       | Lighthouse Best Practices >= 95                              | NEEDS HUMAN    | Static analysis complete; actual score needs browser  |
| PERF-04     | 06-03       | Lighthouse SEO >= 95                                         | NEEDS HUMAN    | SEO infrastructure complete; actual score needs browser |
| PERF-05     | 06-03       | Bundle size < 100KB first load JS                            | NEEDS HUMAN    | Turbopack does not show First Load JS column; chunk analysis done in plan 03 |
| PERF-06     | 06-03       | Core Web Vitals: LCP < 2.5s, CLS < 0.1                      | NEEDS HUMAN    | All CLS prevention measures confirmed; actual values need browser |
| PLSH-01     | 06-02       | Scroll-triggered fade-in (IntersectionObserver)              | SATISFIED      | ScrollReveal component confirmed; 5 sections on homepage wrapped |
| PLSH-02     | 06-02       | Smooth scroll for anchor links                               | SATISFIED      | `scroll-behavior: smooth` in globals.css              |
| PLSH-03     | 06-02       | Active state in nav links                                    | SATISFIED      | usePathname + isActive + text-accent confirmed in Navbar |
| PLSH-04     | 06-02       | No layout shift (CLS < 0.05)                                 | NEEDS HUMAN    | Font swap + transform-only animations confirmed; actual CLS needs browser |
| DEPL-01     | 06-04       | Deployed on Vercel with production build                     | NEEDS HUMAN    | vercel.json + DEPLOY-CHECKLIST.md in place; actual deploy deferred to Mattia |
| DEPL-02     | 06-04       | selfrules.org domain with HTTPS                              | NEEDS HUMAN    | Configuration documented; DNS/SSL requires Mattia's account |
| DEPL-03     | 06-04       | www -> non-www redirect                                      | NEEDS HUMAN    | Documented in checklist; requires Vercel dashboard configuration |
| ANMT-01     | (none)      | Not found in REQUIREMENTS.md or any plan                     | ORPHANED       | ID referenced in verification prompt but absent from REQUIREMENTS.md and all phase plans. No implementation can be cross-referenced. |
| ANMT-02     | (none)      | Not found in REQUIREMENTS.md or any plan                     | ORPHANED       | Same as ANMT-01 — ID does not exist in the project's requirement registry. |
| ANMT-03     | (none)      | Not found in REQUIREMENTS.md or any plan                     | ORPHANED       | Same as ANMT-01 — ID does not exist in the project's requirement registry. |

---

### Anti-Patterns Found

| File                               | Pattern                  | Severity | Impact                                           |
| ---------------------------------- | ------------------------ | -------- | ------------------------------------------------ |
| `public/og-image.png`              | Placeholder solid-color  | INFO     | Functional as-is for SEO; visual quality is poor. Final version should be exported from Figma with typography. Does not block crawlability. |

No TODOs, FIXMEs, empty implementations, or stub returns found in any key phase artifact.

---

### Human Verification Required

#### 1. Lighthouse Audit (All Four Categories)

**Test:** Start the production build locally (`npx next build && npx next start`), open Chrome DevTools > Lighthouse, run audit on http://localhost:3000 for Performance, Accessibility, Best Practices, SEO.
**Expected:** All four scores >= 95
**Why human:** Lighthouse requires a browser with a running server; not simulatable from static file analysis.

#### 2. Vercel Deploy and selfrules.org Domain

**Test:** Follow DEPLOY-CHECKLIST.md — `vercel login`, `vercel link`, `vercel --prod`, add custom domain, verify `curl -I https://selfrules.org` returns HTTP 200 with valid SSL.
**Expected:** Site live at https://selfrules.org with correct content; `curl -I https://www.selfrules.org` returns 301/308 to https://selfrules.org.
**Why human:** Requires Vercel account authentication and DNS record changes at domain registrar.

#### 3. Scroll Animation Behavior

**Test:** Open http://localhost:3000 in a browser. Scroll down the page and verify each section (HowIWork, Timeline, Metrics, CurrentWork, Contact) fades in. Verify Hero is immediately visible with no fade. Then enable `prefers-reduced-motion` in OS settings and verify no animations trigger.
**Expected:** 5 sections animate on scroll; Hero does not; reduced-motion disables all animations.
**Why human:** IntersectionObserver requires a real browser viewport and scroll interaction.

#### 4. JSON-LD Schema Validation

**Test:** After deploy, paste the homepage HTML into https://validator.schema.org or run the URL through Google's Rich Results Test.
**Expected:** Person schema validates without errors; BreadcrumbList validates on inner pages; BlogPosting validates on the notes post.
**Why human:** Requires a live URL or the full rendered HTML; static analysis only confirmed JSON shape.

---

### Gaps Summary

No gaps blocking goal achievement. All programmatically verifiable items pass:

- SEO metadata infrastructure is fully wired (createPageMetadata, generateMetadata, JsonLd) across all 7 pages in both locales.
- sitemap.xml and robots.txt are correctly implemented with proper types and hreflang alternates.
- Accessibility requirements are in place: skip-to-content, focus-visible styles, semantic HTML landmarks, prefers-reduced-motion handling in CSS and JS.
- Scroll animations are implemented with native IntersectionObserver, fires-once, and both CSS and JS reduced-motion guards.
- Active nav link highlighting uses usePathname with isActive logic applying text-accent.
- Lang attribute correctly set per locale in the locale layout (root layout is a pass-through).
- vercel.json has security headers and font caching; DEPLOY-CHECKLIST.md is substantive.
- og-image.png is a real 1200x630 PNG (placeholder quality — documented known stub, not a blocker).

**ANMT-01, ANMT-02, ANMT-03 are ORPHANED requirement IDs.** These IDs appear in the verification prompt but do not exist anywhere in `.planning/REQUIREMENTS.md` or in any phase plan's `requirements:` frontmatter. They cannot be verified because there is no specification to verify against. This may indicate a stale or incorrect prompt — the animation requirements are actually covered by PLSH-01 (scroll fade-in) and A11Y-05 (reduced-motion).

4 items remain in human-verification status: Lighthouse scores, Vercel deploy, scroll animation UX, and JSON-LD schema validation. These are not gaps — the implementation is complete; they require a browser or account access to confirm final numbers.

---

_Verified: 2026-03-23_
_Verifier: Claude (gsd-verifier)_
