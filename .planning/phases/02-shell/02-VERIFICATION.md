---
phase: 02-shell
verified: 2026-03-23T00:00:00Z
status: passed
score: 9/9 must-haves verified
re_verification: false
---

# Phase 02: Shell Verification Report

**Phase Goal:** A navigable site skeleton at all viewports -- every page shares a working navbar, footer, language toggle, mobile menu, and 404 fallback
**Verified:** 2026-03-23
**Status:** PASSED
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths (Success Criteria)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Desktop navbar shows SELFRULES wordmark, nav links, accent CTA, and language toggle | VERIFIED | `Navbar.tsx` renders SELFRULES in `font-mono font-bold uppercase tracking-[0.1em]`, `navLinks` array includes all links with `isAccent` CTA, `<LanguageToggle>` rendered in `hidden md:flex` div |
| 2 | Mobile menu opens on hamburger tap, has focus trap, closes on Escape | VERIFIED | `MobileMenu.tsx` has `useEffect` with `Escape` handler, focus-trap loop with re-query on Tab, hamburger button is `md:hidden` in `Navbar.tsx` |
| 3 | Footer displays bio tagline, email, LinkedIn, GitHub, CV download, and credit line | VERIFIED | `Footer.tsx` renders all six elements from `t()` calls; email has `mailto:mattia@selfrules.org`, LinkedIn/GitHub `target="_blank"`, CV `/cv.pdf`, credit in `text-text-tertiary` |
| 4 | /nonexistent shows localized 404 page with proper signature phrase | VERIFIED | `[...rest]/page.tsx` calls `notFound()`, `not-found.tsx` renders `t('signaturePhrase')` in `text-sm italic text-text-secondary`, back link with `&rarr;` in `text-accent` |
| 5 | Language toggle switches locale without page reload, preserving the current route | VERIFIED | `LanguageToggle.tsx` calls `router.replace({ pathname }, { locale: newLocale })` — not `push`, preserving path via next-intl routing |

**Score:** 5/5 success criteria verified

---

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/i18n/navigation.ts` | next-intl navigation exports | VERIFIED | Exports `Link`, `redirect`, `usePathname`, `useRouter` via `createNavigation(routing)` |
| `src/components/layout/Footer.tsx` | Server Component footer | VERIFIED | No `'use client'`, uses `getTranslations`, has `font-mono` email, `text-[11px]` build version, `md:flex-row` desktop layout |
| `src/messages/en.json` | English translations for shell | VERIFIED | Contains `nav`, `footer`, `notFound`, `common`, `a11y` namespaces; all values match plan spec exactly |
| `src/messages/it.json` | Italian translations for shell | VERIFIED | Contains matching namespaces; `footer.cv` = "Scarica il CV (PDF)", `notFound.signaturePhrase` contains "primo meeting" |
| `next.config.ts` | Umami proxy rewrite | VERIFIED | Has `async rewrites()` with source `/api/umami/:path*` and destination `https://cloud.umami.is/:path*`; `withNextIntl` wrapper intact |
| `src/components/layout/Navbar.tsx` | Fixed navbar with scroll behavior | VERIFIED | `'use client'`, scroll listener threshold `> 50`, `backdrop-blur-md` + `bg-[rgba(10,10,11,0.9)]` on scrolled, `bg-transparent` default |
| `src/components/layout/MobileMenu.tsx` | Full-screen overlay with focus trap | VERIFIED | `'use client'`, `translate-x-full/translate-x-0` with `duration-300`, iOS scroll lock via `body.style.position = 'fixed'`, focus trap with re-query, `role="dialog"` `aria-modal="true"` |
| `src/components/layout/LanguageToggle.tsx` | IT/EN locale switcher | VERIFIED | `'use client'`, `router.replace` (not push), `variant='desktop'|'mobile'` prop, correct active/inactive/hover color classes |
| `src/app/[locale]/not-found.tsx` | Localized 404 page | VERIFIED | `getTranslations('notFound')`, `font-heading` headline, `italic text-sm text-text-secondary` signature phrase, `text-accent` back link with arrow |
| `src/app/[locale]/[...rest]/page.tsx` | Catch-all route | VERIFIED | Calls `notFound()` from `'next/navigation'`, no `'use client'` directive |
| `.env.example` | Umami env var template | VERIFIED | Contains `NEXT_PUBLIC_UMAMI_ID=` |

---

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `Footer.tsx` | `src/messages/en.json` | `getTranslations('footer')` | WIRED | `getTranslations({ locale, namespace: 'footer' })` call confirmed |
| `src/app/[locale]/layout.tsx` | `Footer.tsx` | `import and render <Footer>` | WIRED | `import { Footer }` + `<Footer locale={locale} />` confirmed |
| `next.config.ts` | `cloud.umami.is` | `async rewrites` | WIRED | `destination: 'https://cloud.umami.is/:path*'` confirmed |
| `Navbar.tsx` | `MobileMenu.tsx` | `renders <MobileMenu>` | WIRED | `<MobileMenu locale={locale} currentPath={pathname} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />` |
| `Navbar.tsx` | `LanguageToggle.tsx` | `renders <LanguageToggle>` | WIRED | `<LanguageToggle locale={locale} variant="desktop" />` in desktop nav div |
| `LanguageToggle.tsx` | `src/i18n/navigation.ts` | `usePathname + useRouter` | WIRED | `import { usePathname, useRouter } from '@/i18n/navigation'` |
| `src/app/[locale]/layout.tsx` | `Navbar.tsx` | `renders <Navbar>` | WIRED | `import { Navbar }` + `<Navbar locale={locale} />` — no placeholder comment remaining |
| `src/app/[locale]/[...rest]/page.tsx` | `not-found.tsx` | `notFound()` call | WIRED | `notFound()` triggers `[locale]/not-found.tsx` boundary; build confirms route pattern |
| `not-found.tsx` | `src/messages/en.json` | `getTranslations('notFound')` | WIRED | `getTranslations('notFound')` call confirmed |

---

### Data-Flow Trace (Level 4)

Not applicable for this phase — all components render localized static text from i18n messages. No dynamic data sources (no API calls, no DB queries, no user-specific data). Message files exist and contain correct values (verified via node inspection).

---

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| Build produces static output | `npm run build` | Exit 0, routes: `○ /_not-found`, `● /[locale]`, `ƒ /[locale]/[...rest]` | PASS |
| i18n message validation | `node -e "require('./src/messages/en.json')"` | All 12 message assertions pass | PASS |
| Catch-all route exists and calls notFound | `test -f src/app/[locale]/[...rest]/page.tsx` | EXISTS; contains `notFound()` | PASS |
| Navigation module exports | `grep createNavigation src/i18n/navigation.ts` | Exports Link, redirect, usePathname, useRouter | PASS |
| Umami proxy configured | `grep cloud.umami.is next.config.ts` | Rewrite rule found | PASS |

---

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|------------|-------------|--------|---------|
| LNAV-01 | 02-02 | Fixed navbar with scroll behavior | SATISFIED | `Navbar.tsx` scroll listener threshold 50px, `backdrop-blur-md` on scrolled state |
| LNAV-02 | 02-02 | Navbar links: Logo + nav links + IT/EN toggle | SATISFIED | All 5 nav links + wordmark + `<LanguageToggle>` confirmed in `Navbar.tsx` |
| LNAV-03 | 02-02 | Mobile hamburger menu with focus trap, Escape closes | SATISFIED | `MobileMenu.tsx` focus trap, Escape handler, iOS scroll lock all present |
| LNAV-04 | 02-02 | Language toggle preserves current page path | SATISFIED | `router.replace({ pathname }, { locale })` in `LanguageToggle.tsx` |
| LNAV-05 | 02-01 | Footer with bio, email, LinkedIn, GitHub, CV, credit | SATISFIED | All 6 elements rendered by `Footer.tsx` with correct classes and translations |
| LNAV-06 | 02-03 | 404 page with dedicated copy in both languages | SATISFIED | `not-found.tsx` + catch-all route; EN and IT copies verified in message files |
| COPY-04 | 02-01 | All microcopy from microcopy.md | SATISFIED | All nav, footer, notFound, common, a11y keys present in both `en.json` and `it.json`; values match spec exactly |
| ANLT-01 | 02-01 | Umami analytics script integrated | SATISFIED | Conditional `<Script src="/api/umami/script.js">` in `layout.tsx` with `NEXT_PUBLIC_UMAMI_ID` guard |
| ANLT-02 | 02-01 | Umami proxied through Next.js rewrites | SATISFIED | `next.config.ts` rewrites `/api/umami/:path*` → `https://cloud.umami.is/:path*` |

All 9 requirements for Phase 2 satisfied. No orphaned requirements found.

---

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `not-found.tsx` | 10 | Uses `text-[length:--text-hero]` instead of plan-specified `text-[length:--text-display]` | Info | No functional impact — `--text-display` token was never defined in `globals.css`; `--text-hero` (identical value: `clamp(40px, 5vw, 64px)`) is the correct token to use. Deviation from plan spec only, not from design intent. |

No blockers. No stubs. No `TODO`/`FIXME` comments found in layout components.

---

### Human Verification Required

The following items cannot be verified programmatically and require manual browser testing:

#### 1. Scroll Transition Visual

**Test:** Run `npm run dev`, open `/` in browser, scroll past 50px
**Expected:** Navbar background transitions from transparent to semi-transparent dark with backdrop blur (frosted glass effect)
**Why human:** CSS `backdrop-filter: blur()` rendering and transition smoothness cannot be verified without a browser

#### 2. Mobile Menu Slide Animation

**Test:** Resize browser to below 768px, tap hamburger icon
**Expected:** Full-screen menu slides in from the right over approximately 300ms with ease-out timing
**Why human:** CSS transition animation timing and visual feel require browser rendering

#### 3. Focus Trap Behavior in Mobile Menu

**Test:** Open mobile menu, press Tab repeatedly
**Expected:** Focus cycles only between close button and nav links — never escapes the menu overlay
**Why human:** Browser focus management behavior requires interactive keyboard testing

#### 4. Language Toggle No-Reload Switch

**Test:** On `/about`, click "IT" in language toggle
**Expected:** URL changes to `/it/about`, page content updates, no full page reload (no network flash)
**Why human:** Distinguishing client-side navigation from full reload requires browser observation

#### 5. Skip-to-Content Link Visibility on Focus

**Test:** On any page, press Tab as the very first keyboard action
**Expected:** "Skip to content" link appears with accent background (`#E8A838`) and dark text, fixed top-left
**Why human:** `sr-only focus:not-sr-only` CSS behavior requires browser keyboard interaction to verify

#### 6. Footer Responsive Layout

**Test:** View footer at mobile width (<768px) and desktop width (>=768px)
**Expected:** Mobile: bio, email, links stacked vertically; Desktop: bio left, links right in a single row
**Why human:** Responsive layout requires viewport resizing

#### 7. Footer Build Version Typography

**Test:** Inspect footer "v1.0.0 · build 2026.03 · Next.js 16 · 47 commits" line
**Expected:** Renders in JetBrains Mono at 11px in tertiary color (`#5A5A5E`) below the credit line
**Why human:** Font rendering and exact pixel size require browser DevTools inspection

---

### Notes

**Token naming discrepancy (non-blocking):** The plan spec referenced `--text-display` for the 404 headline size, but `globals.css` only defines `--text-hero` (with the same `clamp(40px, 5vw, 64px)` value). The implementation correctly uses `--text-hero`. The plan note was stale — the token was finalized as `--text-hero` in Phase 1. No action needed.

**Message file location:** Messages are at `src/messages/` (not `src/i18n/messages/` as stated in plan frontmatter). This is a documentation discrepancy only — the actual path was resolved correctly in next-intl's `request.ts` configuration and the build passes.

**[...rest] route is dynamic (ƒ):** Expected — catch-all routes that call `notFound()` cannot be statically prerendered at build time since the set of invalid URLs is unbounded. All valid locale routes (`/en`, `/it`) are correctly SSG.

---

## Summary

Phase 2 goal is achieved. All 5 success criteria are verified in code. All 9 phase requirements (LNAV-01 through LNAV-06, COPY-04, ANLT-01, ANLT-02) are satisfied with implementation evidence. Build passes with exit code 0. No stubs, no placeholder comments, no missing artifacts. Seven items require human browser verification but no automated check found any gap that would block the goal.

---

_Verified: 2026-03-23_
_Verifier: Claude (gsd-verifier)_
