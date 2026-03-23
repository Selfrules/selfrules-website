# Phase 4: Homepage - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-22
**Phase:** 04-homepage
**Areas discussed:** Hero vertical positioning, Section component patterns, i18n content granularity, Timeline horizontal layout

---

## Hero vertical positioning

| Option | Description | Selected |
|--------|-------------|----------|
| Upper-third (Recommended) | Content sits ~30% from top. Leaves generous breathing space below. Feels editorial, confident. Aligns with Modello B. | ✓ |
| Vertically centered | Content centered in viewport. More conventional portfolio feel. Safe but less distinctive. | |
| Align to top with big padding | Content starts ~120-160px from top. Fills downward. More document-like, less 'hero'. | |

**User's choice:** Upper-third (Recommended)
**Notes:** None

| Option | Description | Selected |
|--------|-------------|----------|
| No scroll cue | Clean, minimal. The content speaks for itself. Users know to scroll. | ✓ |
| Subtle gradient fade at bottom | Slight darkening at bottom edge hints there's more below. | |
| You decide | Claude picks the best approach. | |

**User's choice:** No scroll cue
**Notes:** None

---

## Section component patterns

| Option | Description | Selected |
|--------|-------------|----------|
| Shared SectionHeader (Recommended) | A small component that renders label + title consistently. If styling changes, updates everywhere. | ✓ |
| Inline in each section | Each section renders its own label + title. More flexible but pattern may drift. | |
| You decide | Claude evaluates repetition and picks right abstraction level. | |

**User's choice:** Shared SectionHeader (Recommended)
**Notes:** None

| Option | Description | Selected |
|--------|-------------|----------|
| src/components/sections/ (Recommended) | Dedicated folder. Clean separation. Phase 5 may reuse Contact section. Aligns with ARCHITECTURE.md. | ✓ |
| Colocated with page | Section files next to page.tsx. Simpler but harder to share. | |

**User's choice:** src/components/sections/ (Recommended)
**Notes:** None

| Option | Description | Selected |
|--------|-------------|----------|
| Section wrapper inside each component | Each section self-contained. Page just stacks components. | |
| Page composes Section + content | Page wraps each section. More control but more verbose. | |
| You decide | Claude evaluates which approach produces cleaner code. | ✓ |

**User's choice:** You decide
**Notes:** None

---

## i18n content granularity

| Option | Description | Selected |
|--------|-------------|----------|
| Deep per element (Recommended) | homepage.hero.headline, homepage.metrics.items[0].number. Each text element is a separate key. | ✓ |
| Medium per section | homepage.hero (with sub-keys). Group by section but still structured. | |
| Flat per section | homepage.heroHeadline, homepage.heroSubtitle. No nesting. | |

**User's choice:** Deep per element (Recommended)
**Notes:** None

| Option | Description | Selected |
|--------|-------------|----------|
| Numbered keys (Recommended) | homepage.metrics.metric1.number. Explicit, easy to grep. | ✓ |
| Arrays | homepage.metrics.items[0].number. Cleaner for iteration but less intuitive. | |
| You decide | Claude picks based on next-intl 4.8 best practices. | |

**User's choice:** Numbered keys (Recommended)
**Notes:** None

---

## Timeline horizontal layout

| Option | Description | Selected |
|--------|-------------|----------|
| Equal columns, dates show overlap naturally | 4 equal-width columns, connector line. Overlapping dates speak for themselves. | |
| Proportional widths based on years | Column widths proportional to duration. Visual representation of time. | |
| You decide | Claude evaluates the Figma prototype and picks best approach. | ✓ |

**User's choice:** You decide
**Notes:** None

| Option | Description | Selected |
|--------|-------------|----------|
| Vertical line connector | Thin 1px line on left connecting cards vertically on mobile. | |
| Stacked cards, no connector | Just cards with spacing. Simpler, section title communicates timeline. | |
| You decide | Claude evaluates what works best visually. | ✓ |

**User's choice:** You decide
**Notes:** None

| Option | Description | Selected |
|--------|-------------|----------|
| Below timeline, separated by spacing | 48px gap below. Body text, max-width 720px. Feels like a conclusion. | |
| Part of timeline as 5th element | Last element in timeline row/stack, different styling. | |
| You decide | Claude picks based on copy source and design language. | ✓ |

**User's choice:** You decide
**Notes:** None

---

## Claude's Discretion

- Section wrapper composition (inside each component vs page-level)
- Timeline desktop overlap representation (equal columns vs proportional)
- Timeline mobile connector (vertical line vs stacked without)
- Timeline closing phrase placement (separated vs 5th element)

## Deferred Ideas

None — discussion stayed within phase scope.
