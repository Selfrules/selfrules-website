---
phase: 04-homepage
verified: 2026-03-23T00:00:00Z
status: gaps_found
score: 3/4 success criteria verified
re_verification: false
gaps:
  - truth: "MetricCard numbers use Space Grotesk font, animate on scroll via CountUpNumber"
    status: failed
    reason: "CountUpNumber component exists and is substantive, but is NOT used in MetricCard or Metrics.tsx. Numbers render statically. The component is only wired into the dev/components showcase page."
    artifacts:
      - path: "src/components/ui/MetricCard.tsx"
        issue: "Renders {number} as a plain string in a <p> tag. No CountUpNumber import or usage."
      - path: "src/components/sections/Metrics.tsx"
        issue: "Passes number strings directly to MetricCard with no CountUpNumber wrapping."
    missing:
      - "Import CountUpNumber in MetricCard.tsx and wrap the number <p> with it"
      - "OR import CountUpNumber in Metrics.tsx and pass a pre-animated element as the number prop"
  - truth: "Timeline connector lines and Metrics grid dividers are visually rendered with the correct border color"
    status: partial
    reason: "Two CSS class mismatches found: (1) bg-border in Timeline.tsx — no --color-border CSS variable is defined in globals.css (only --color-border-default and --color-border-accent). Tailwind v4 would not generate a bg-border utility from the current @theme block. The connector lines will be invisible. (2) bg-[var(--border-default)] in Metrics.tsx — the CSS variable is --color-border-default, not --border-default. The grid gap dividers will be transparent."
    artifacts:
      - path: "src/components/sections/Timeline.tsx"
        issue: "Lines 26 and 57 use class bg-border, but --color-border is not defined in @theme. Should be bg-border-default."
      - path: "src/components/sections/Metrics.tsx"
        issue: "Line 21 uses bg-[var(--border-default)] but the CSS variable is --color-border-default. Should be bg-[var(--color-border-default)] or bg-border-default."
    missing:
      - "Replace bg-border with bg-border-default in Timeline.tsx (lines 26 and 57)"
      - "Replace bg-[var(--border-default)] with bg-border-default in Metrics.tsx (line 21)"
human_verification:
  - test: "Visual check of Timeline connector lines"
    expected: "A 1px horizontal line connecting the 4 timeline nodes on desktop, and a 2px vertical line on mobile, both in color #1A1A1F"
    why_human: "The bg-border class may silently fail or may resolve to a default browser behavior — can't determine rendering outcome without opening the browser"
  - test: "Visual check of Metrics grid dividers"
    expected: "1px dividers between MetricCards in the 3x2 grid, color #1A1A1F (the gap-[1px] pattern)"
    why_human: "Same var() resolution issue — need browser DevTools to confirm computed style"
  - test: "CountUpNumber animation in Metrics section"
    expected: "Numbers (99%+, -25%, 116, etc.) animate from 0 upward when the section scrolls into view, respecting prefers-reduced-motion"
    why_human: "Requires browser interaction — CountUpNumber is currently not wired into Metrics"
---

# Phase 4: Homepage Verification Report

**Phase Goal:** The homepage is complete with all 6 sections, bilingual content, and the visual language that inner pages will inherit
**Verified:** 2026-03-23
**Status:** gaps_found
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths (from Success Criteria)

| # | Truth | Status | Evidence |
|---|-------|--------|---------|
| 1 | Homepage renders all 6 sections in correct order (Hero, HowIWork, Timeline, Metrics, CurrentWork, Contact) | VERIFIED | page.tsx imports and renders all 6 in the exact order specified, wrapped in `<main>` |
| 2 | Switching to /it shows Italian content throughout all sections | VERIFIED | it.json has complete homepage namespace with all 6 sections translated; both /en and /it generate as SSG routes |
| 3 | MetricCard numbers use Space Grotesk font, animate on scroll via CountUpNumber | PARTIAL | Space Grotesk confirmed (font-heading class on MetricCard number p tag), but CountUpNumber is NOT wired — numbers are static strings |
| 4 | Terminal prompt in hero shows blinking cursor with correct copy | VERIFIED | Hero.tsx uses BlinkingCursor type="block" (amber) after terminalPrompt text with aria-hidden="true"; "mattia@selfrules ~ $" is in both EN and IT JSON |

**Score:** 3/4 success criteria fully verified

---

## Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/messages/en.json` | homepage namespace with all 6 sections | VERIFIED | Complete — all 6 section keys present, 6 metrics, 3 pillars, 4 timeline blocks, 2 cards, rich `<b>` tags on 5 values |
| `src/messages/it.json` | IT translation of homepage namespace | VERIFIED | Complete — mirrors en.json structure exactly with Italian copy verbatim |
| `src/components/sections/SectionHeader.tsx` | Shared label + title component | VERIFIED | Server Component, font-heading h2, font-mono p, uppercase, tracking-[0.05em], clamp(28px,3vw,36px) |
| `src/components/sections/Hero.tsx` | 100vh hero with 7 elements | VERIFIED | min-h-screen, pt-[28vh] (upper positioning), no items-center, h1 with font-heading, BlinkingCursor both types, w-[200px] separator, italic signature phrase, aria-hidden terminal prompt |
| `src/components/sections/HowIWork.tsx` | 3-column pillar section | VERIFIED | Server Component, SectionHeader, lg:grid-cols-3 desktop layout, grid-cols-1 mobile, font-heading h3 for pillar titles, ReactNode text for rich content |
| `src/components/sections/Timeline.tsx` | Horizontal/vertical timeline | VERIFIED | Server Component, SectionHeader, horizontal desktop (hidden lg:block), vertical mobile (lg:hidden), square nodes, last node bg-accent (amber), font-mono dates, closingLine |
| `src/components/sections/Metrics.tsx` | 6 MetricCards in responsive grid | VERIFIED (structure) | Server Component, SectionHeader, lg:grid-cols-3 sm:grid-cols-2 grid, MetricCard imported and used, hover:text-accent link |
| `src/components/sections/CurrentWork.tsx` | 2 project cards | VERIFIED | Server Component, SectionHeader, md:grid-cols-2, bg-surface cards, border-default, hover:border-accent, hover:-translate-y-0.5, font-heading h3 |
| `src/components/sections/Contact.tsx` | Contact section with anchor | VERIFIED | Server Component, id="contact" on Section, mailto: link, font-mono email, hover:text-accent, target="_blank" LinkedIn, availability in mono uppercase |
| `src/app/[locale]/page.tsx` | Homepage orchestrator | VERIFIED | setRequestLocale first, getTranslations('homepage'), all 6 sections imported and rendered, t.rich() used for 7 rich text values, generateStaticParams returns en + it |

---

## Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| page.tsx | Hero.tsx | import + JSX with all 7 props | WIRED | All props mapped from t('hero.*') keys |
| page.tsx | HowIWork.tsx | import + JSX with pillars array | WIRED | t.rich() used for all 3 pillar texts |
| page.tsx | Timeline.tsx | import + JSX with blocks array | WIRED | t.rich() used for all 4 block texts |
| page.tsx | Metrics.tsx | import + JSX with metrics array | WIRED | label prop passed as empty string '' — Metrics.tsx declares label in interface but MetricCard renders it as a secondary line |
| page.tsx | CurrentWork.tsx | import + JSX with cards array | WIRED | Both cards mapped from t('currentWork.card*.{title,text}') |
| page.tsx | Contact.tsx | import + JSX with all 9 props | WIRED | All props mapped, linkedinHref and cvHref hardcoded correctly |
| Hero.tsx | #contact | Button href="#contact" | WIRED | Primary CTA button links to #contact anchor |
| Contact.tsx | #contact anchor | Section id="contact" | WIRED | Section component receives and passes id prop |
| Hero.tsx | BlinkingCursor | import + 2 usages | WIRED | block type on terminal, underscore type on subtitle |
| Metrics.tsx | MetricCard | import + map render | WIRED | All 6 metrics rendered; note: label prop passed as '' |
| CountUpNumber | MetricCard | NOT WIRED | NOT WIRED | CountUpNumber exists but not imported or used in MetricCard or Metrics |

---

## Data-Flow Trace (Level 4)

| Artifact | Data Variable | Source | Produces Real Data | Status |
|----------|---------------|--------|--------------------|--------|
| page.tsx | All section props | getTranslations('homepage') + en.json / it.json | Yes — JSON files are fully populated with real copy | FLOWING |
| Hero.tsx | headline, subtitle, tags, etc. | Props from page.tsx | Yes — string props passed directly | FLOWING |
| Metrics.tsx | metrics array | Props from page.tsx | Yes — 6 real metrics from JSON | FLOWING |
| MetricCard.tsx | number | Props from parent | Yes — real number string | STATIC (no CountUp animation) |

---

## Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| Build succeeds for / and /it routes | npx next build | Exit 0, /en and /it show as SSG (circle) | PASS |
| TypeScript compiles without errors | (part of build) | "Running TypeScript ... Finished" — no errors | PASS |
| EN i18n namespace complete | grep "homepage" src/messages/en.json | 2 matches | PASS |
| IT i18n namespace complete | grep "homepage" src/messages/it.json | 2 matches | PASS |
| All 6 sections imported in page.tsx | grep each section name | All 6 found with 2+ matches each | PASS |
| CountUpNumber wired to Metrics | grep CountUpNumber src/components/sections/Metrics.tsx | No matches | FAIL |
| CountUpNumber wired to MetricCard | grep CountUpNumber src/components/ui/MetricCard.tsx | No matches | FAIL |

---

## Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|------------|-------------|--------|---------|
| HOME-01 | 04-01-PLAN | Hero section — full viewport height, left-aligned, headline + subtitle + 2 CTAs + monospace tags | SATISFIED | Hero.tsx: min-h-screen, pt-[28vh], h1, subtitle, Button x2, Tag map |
| HOME-02 | 04-02-PLAN | How I Work section — 3 columns desktop, 1 mobile, label + 3 pillars | SATISFIED | HowIWork.tsx: lg:grid-cols-3 grid-cols-1 |
| HOME-03 | 04-02-PLAN | Journey section — timeline horizontal desktop, vertical mobile, 4 blocks + closing phrase | SATISFIED | Timeline.tsx: hidden lg:block desktop, lg:hidden mobile, closingLine rendered |
| HOME-04 | 04-02-PLAN | Numbers section — 6 MetricCards in responsive grid (3x2 to 2x3 to 1x6) | PARTIALLY SATISFIED | Grid and 6 MetricCards exist; CountUpNumber animation absent; CSS var mismatch on grid dividers |
| HOME-05 | 04-02-PLAN | Current Work section — 2 cards side by side desktop, stacked mobile | SATISFIED | CurrentWork.tsx: md:grid-cols-2 |
| HOME-06 | 04-02-PLAN | Contact section — title, invite text, email (mono, accent hover), LinkedIn, CV, availability tag | SATISFIED | Contact.tsx: all elements present with correct styling |

---

## Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `src/components/sections/Timeline.tsx` | 26, 57 | `bg-border` — no `--color-border` CSS variable defined in globals.css | Warning | Timeline connector lines (horizontal and vertical) render without background color — the visual connection between timeline nodes is invisible |
| `src/components/sections/Metrics.tsx` | 21 | `bg-[var(--border-default)]` — CSS variable `--border-default` does not exist; correct variable is `--color-border-default` | Warning | MetricCard grid dividers (1px gap) render without background color — cells appear as a seamless grid with no visible separator |
| `src/components/ui/MetricCard.tsx` | 25 | Numbers rendered as static `{number}` string — CountUpNumber not used | Blocker (per success criteria) | Metric numbers do not animate on scroll. Success criterion 3 requires CountUpNumber animation. |

---

## Human Verification Required

### 1. Timeline connector line rendering

**Test:** Open localhost:3000 in a browser. Scroll to "The path" / "Il percorso" section. On desktop (>1024px), inspect the horizontal line connecting the 4 timeline nodes. On mobile, inspect the vertical line on the left side.
**Expected:** A visible 1px (desktop) or 2px (mobile) line in dark color (#1A1A1F) connecting the nodes.
**Why human:** The `bg-border` class may silently fall back to transparent or may resolve differently in the browser — only visual inspection confirms actual rendering.

### 2. Metrics grid divider rendering

**Test:** Open localhost:3000, scroll to "Numbers, not words" / "Numeri, non parole" section. Inspect the gaps between MetricCards.
**Expected:** 1px visible lines in color #1A1A1F separating the cards in the grid (gap-[1px] pattern).
**Why human:** The `var(--border-default)` reference may silently fail — gap between cards may appear as standard whitespace rather than a dark 1px line.

### 3. CountUpNumber animation (after fix)

**Test:** After wiring CountUpNumber into MetricCard, open localhost:3000 and scroll to the Metrics section. Numbers should count up from 0 (or their absolute minimum) to their final value over ~800ms when they enter the viewport.
**Expected:** Animated count-up effect visible; on a system with prefers-reduced-motion: reduce, numbers appear immediately at their final values.
**Why human:** Animation behavior requires browser interaction to verify.

### 4. Hero anchor scroll

**Test:** Open localhost:3000, click the "Get in touch" (EN) / "Scrivimi" (IT) button in the Hero.
**Expected:** Page scrolls smoothly to the Contact section (id="contact").
**Why human:** Anchor scroll behavior requires browser interaction.

---

## Gaps Summary

Two distinct issues need remediation:

**Gap 1 — CountUpNumber not wired (Blocker):** The `CountUpNumber` component is fully implemented and correct, but it is not used in either `MetricCard.tsx` or `Metrics.tsx`. Success criterion 3 explicitly requires animate-on-scroll behavior via CountUpNumber. The fix is to import CountUpNumber in MetricCard.tsx and replace the static `{number}` render with `<CountUpNumber value={number} className="font-heading font-bold text-accent text-[clamp(40px,5vw,72px)] leading-none" />`.

**Gap 2 — CSS variable mismatches in Timeline and Metrics (Warning):** Two files reference CSS variables that do not exist in the project's `@theme` block in globals.css: `bg-border` in Timeline.tsx (should be `bg-border-default`) and `var(--border-default)` in Metrics.tsx (should be `var(--color-border-default)` or just the class `bg-border-default`). These are visual-only issues that do not break the build but likely cause invisible connector lines and invisible grid dividers.

These two gaps are independent — Gap 1 requires adding CountUpNumber wiring, Gap 2 requires correcting two class names.

---

_Verified: 2026-03-23_
_Verifier: Claude (gsd-verifier)_
