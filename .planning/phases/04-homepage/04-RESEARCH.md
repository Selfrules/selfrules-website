# Phase 4: Homepage - Research

**Researched:** 2026-03-22
**Domain:** Next.js 16 homepage implementation -- 6 section components, bilingual i18n, responsive layout
**Confidence:** HIGH

## Summary

Phase 4 assembles 6 section components (Hero, HowIWork, Timeline, Metrics, CurrentWork, Contact) into the homepage `page.tsx`, wiring them to bilingual copy via next-intl namespaced translations. All section components are Server Components consuming Phase 3 UI primitives (Button, MetricCard, Tag, TimelineBlock, Section). A shared SectionHeader sub-component enforces the label+title pattern across 5 of the 6 sections.

The primary complexity is not technical but structural: correctly organizing ~200 i18n keys into deeply nested namespaces, implementing 6 distinct responsive layouts (each with different breakpoints and grid behaviors), and ensuring every string matches the source copy files verbatim. The UI spec (04-UI-SPEC.md) is the authoritative design contract -- typography uses exactly 4 roles (Display, Title, Body, Label) and 2 weights (400, 700).

**Primary recommendation:** Build section components one at a time in order (Hero through Contact), populate the i18n JSON files incrementally, and verify each section against the copy source before moving to the next. Use the SectionHeader pattern for DRY label+title rendering across sections 2-6.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Hero content positioned in the upper third of the viewport (~30% from top). Not vertically centered. Editorial and confident feel, consistent with Modello B.
- **D-02:** No visual scroll cue (no arrow, no gradient fade). Content speaks for itself, users know how to scroll.
- **D-03:** Create a shared `SectionHeader` sub-component that renders monospace uppercase label + title consistently. All 5 sections with label+title import it. If the label style changes, update in one place.
- **D-04:** Section components in `src/components/sections/` -- dedicated folder. Clean separation, and the Contact section might be reusable in inner pages (Phase 5).
- **D-05:** All 6 section components are Server Components (static content, no client-side interactivity).
- **D-06:** Deep namespace per element: `homepage.hero.headline`, `homepage.hero.subtitle`, `homepage.metrics.metric1.number`, `homepage.howIWork.pillar1.title`. Every text is a separate key. Clear traceability to source copy.
- **D-07:** Repeated structures (6 metrics, 3 pillars, 4 timeline blocks) use numbered keys: `homepage.metrics.metric1`, `homepage.metrics.metric2`, etc. Not arrays. next-intl handles them natively.

### Claude's Discretion
- **Section wrapper composition:** Claude decides if each section component uses Section wrapper internally (self-contained) or if page.tsx composes Section + content. Evaluate which produces cleaner code.
- **Timeline desktop overlap:** Claude decides how to visually represent overlapping dates (Designer 2012-18 and Developer 2016-20). Options: equal columns with dates speaking for themselves, or proportional widths.
- **Timeline mobile connector:** Claude decides if vertical timeline on mobile has a connector line on the left or just stacked cards with spacing.
- **Timeline closing phrase:** Claude decides if the closing phrase ("La costante: sono sempre stato...") is below the timeline separated by spacing, or part of the timeline as 5th element.

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| HOME-01 | Hero section -- full viewport height, left-aligned, headline + subtitle + 2 CTAs + monospace tags | Hero section component with min-h-screen, upper-third positioning (D-01), Button primary/secondary from Phase 3, Tag component for credentials |
| HOME-02 | "Come lavoro" / "How I Work" -- 3 columns desktop, 1 mobile, label + 3 pillars | SectionHeader (D-03) + 3-column grid, responsive breakpoint at 1024px |
| HOME-03 | "Percorso" / "Journey" -- timeline (horizontal desktop, vertical mobile), 4 blocks + closing phrase | TimelineBlock from Phase 3, horizontal layout at >=1024px, vertical with connector at mobile |
| HOME-04 | "Numeri, non parole" / "Numbers, not words" -- 6 MetricCards responsive grid (3x2, 2x3, 1x6) | MetricCard from Phase 3 with gap-[1px] grid pattern (Phase 3 D-03), Section wide variant |
| HOME-05 | "Cosa faccio ora" / "What I'm doing now" -- 2 cards side by side desktop, stacked mobile | Custom cards with bg-surface, border, hover states, breakpoint at 768px |
| HOME-06 | "Parliamo" / "Let's talk" -- email, LinkedIn, CV, availability tag | Contact section with mailto link, Tag for availability, Section default width |
</phase_requirements>

## Standard Stack

### Core (already decided -- no alternatives)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.2.x | Framework | Locked decision. App Router, Turbopack, static rendering. |
| next-intl | 4.8.x | i18n | Locked. Server Component native, namespace support. |
| Tailwind CSS | 4.x | Styling | Locked. CSS-first @theme, utility classes. |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next/font/google | built-in | Font loading | Inter + JetBrains Mono, already configured in Phase 1 |

### No Additional Libraries Needed

Phase 4 requires zero new npm dependencies. Everything is composition of existing Phase 1-3 infrastructure:
- Design tokens from `globals.css` @theme
- UI primitives from `src/components/ui/`
- i18n from `src/i18n/messages/*.json`
- Layout from `src/components/layout/section.tsx`

## Architecture Patterns

### Recommended Project Structure (Phase 4 additions)

```
src/
  components/
    sections/               # NEW in Phase 4 (D-04)
      hero.tsx              # Hero section (HOME-01)
      how-i-work.tsx        # 3-pillar section (HOME-02)
      timeline.tsx          # Career timeline (HOME-03)
      metrics.tsx           # 6 MetricCards grid (HOME-04)
      current-work.tsx      # 2 "Now" cards (HOME-05)
      contact.tsx           # Contact section (HOME-06)
      section-header.tsx    # Shared label+title (D-03)
    ui/                     # FROM Phase 3 (consumed, not modified)
      button.tsx
      metric-card.tsx
      timeline-block.tsx
      tag.tsx
    layout/                 # FROM Phase 2
      section.tsx           # Spacing wrapper
  app/
    [locale]/
      page.tsx              # MODIFIED -- imports 6 section components
  i18n/
    messages/
      en.json               # MODIFIED -- add homepage.* namespace
      it.json               # MODIFIED -- add homepage.* namespace
```

### Pattern 1: SectionHeader Shared Component (D-03)

**What:** A small component that renders the monospace uppercase label + section title consistently across 5 sections (all except Hero, which has its own unique layout).

**When to use:** Every section that has a label ("COME LAVORO", "IL PERCORSO", etc.) above a title.

**Example:**
```typescript
// src/components/sections/section-header.tsx
interface SectionHeaderProps {
  label: string;
  title: string;
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm uppercase tracking-[0.05em] text-secondary mb-3">
        {label}
      </p>
      <h2 className="text-[clamp(28px,3vw,36px)] font-bold leading-[1.2] text-primary">
        {title}
      </h2>
    </div>
  );
}
```

**Source:** CONTEXT.md D-03, UI-SPEC.md Typography table

### Pattern 2: Server Component Section with Translation Props

**What:** Each section component is a Server Component that receives pre-translated strings as props. The page.tsx calls `getTranslations('homepage')` and passes strings down.

**Example:**
```typescript
// src/components/sections/metrics.tsx
import { Section } from '@/components/layout/section';
import { SectionHeader } from './section-header';
import { MetricCard } from '@/components/ui/metric-card';

interface MetricsProps {
  label: string;
  title: string;
  metrics: Array<{ number: string; context: string }>;
  linkText: string;
  linkHref: string;
}

export function Metrics({ label, title, metrics, linkText, linkHref }: MetricsProps) {
  return (
    <Section wide>
      <SectionHeader label={label} title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-default">
        {metrics.map((m, i) => (
          <MetricCard key={i} number={m.number} context={m.context} />
        ))}
      </div>
      <a href={linkHref} className="mt-8 inline-block text-secondary hover:text-accent transition-colors text-base">
        {linkText} →
      </a>
    </Section>
  );
}
```

**Source:** Phase 3 D-01 (dumb components with typed props), CONTEXT.md D-05 (Server Components)

### Pattern 3: Homepage page.tsx as Translation Orchestrator

**What:** The `page.tsx` is the single point where translations are resolved and distributed to section components.

**Example:**
```typescript
// src/app/[locale]/page.tsx
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { HowIWork } from '@/components/sections/how-i-work';
// ... other imports

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('homepage');

  return (
    <>
      <Hero
        headline={t('hero.headline')}
        subtitle={t('hero.subtitle')}
        primaryCta={t('hero.primaryCta')}
        secondaryCta={t('hero.secondaryCta')}
        tags={[t('hero.tag1'), t('hero.tag2'), t('hero.tag3'), t('hero.tag4')]}
      />
      <HowIWork
        label={t('howIWork.label')}
        title={t('howIWork.title')}
        intro={t('howIWork.intro')}
        pillars={[
          { title: t('howIWork.pillar1.title'), text: t('howIWork.pillar1.text') },
          { title: t('howIWork.pillar2.title'), text: t('howIWork.pillar2.text') },
          { title: t('howIWork.pillar3.title'), text: t('howIWork.pillar3.text') },
        ]}
      />
      {/* ... remaining sections */}
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
```

**Source:** PITFALLS.md #2 (setRequestLocale for static rendering), PITFALLS.md #14 (params is a Promise in Next.js 16)

### Pattern 4: i18n Namespace Structure (D-06, D-07)

**What:** Deep nested keys with numbered items for repeated structures.

**Example JSON structure:**
```json
{
  "homepage": {
    "hero": {
      "headline": "Senior Technical Product Manager...",
      "subtitle": "B2B SaaS...",
      "primaryCta": "Get in touch",
      "secondaryCta": "See the work",
      "tag1": "10+ years",
      "tag2": "B2B SaaS",
      "tag3": "Payments",
      "tag4": "5 countries"
    },
    "howIWork": {
      "label": "How I work",
      "title": "How I work",
      "intro": "When design says...",
      "pillar1": { "title": "Designer + Developer + PM...", "text": "4 years designing..." },
      "pillar2": { "title": "The problem is never...", "text": "An example..." },
      "pillar3": { "title": "Prototypes, not slides", "text": "A React prototype..." }
    },
    "timeline": {
      "label": "The path",
      "title": "The path",
      "block1": { "role": "Founder & Designer", "dates": "2012-2018", "text": "..." },
      "block2": { "role": "Designer & Developer", "dates": "2016-2020", "text": "..." },
      "block3": { "role": "Product Owner", "dates": "2020-2023", "text": "..." },
      "block4": { "role": "Product Manager", "dates": "2023-present", "text": "..." },
      "closingLine": "Today when I talk to a designer..."
    },
    "metrics": {
      "label": "Numbers, not words",
      "title": "Numbers, not words",
      "metric1": { "number": "99%+", "context": "Payment uptime and success rate..." },
      "metric2": { "number": "-25%", "context": "Post-release incidents..." },
      "metric3": { "number": "116", "context": "Centers integrated..." },
      "metric4": { "number": "-35%", "context": "Setup time..." },
      "metric5": { "number": "+9%", "context": "Integration adoption..." },
      "metric6": { "number": "-12%", "context": "Payment processing times..." },
      "link": "Read the full case studies"
    },
    "currentWork": {
      "label": "What I'm doing now",
      "title": "What I'm doing now",
      "card1": { "title": "Payments and platform at international scale", "text": "..." },
      "card2": { "title": "A personal problem turned product", "text": "..." }
    },
    "contact": {
      "label": "Let's talk",
      "title": "Let's talk",
      "text": "If you think my profile could work for your team...",
      "email": "mattia@selfrules.org",
      "linkedinLabel": "LinkedIn",
      "cvLabel": "Download my CV (PDF)",
      "availability": "EU remote . US remote . Italy hybrid"
    }
  }
}
```

**Source:** CONTEXT.md D-06, D-07

### Anti-Patterns to Avoid

- **Adding 'use client' to section components (D-05):** All 6 sections are static content. No click handlers, no state, no effects. They must remain Server Components. If a future hover animation needs JS, wrap only that specific interactive piece.
- **Hardcoding copy instead of using i18n keys:** Even though this is a personal site, all text MUST go through next-intl for bilingual support. No inline strings.
- **Using label/title as the same string (duplication):** The section label (uppercase monospace) and section title are often the same text (e.g., "How I work" label and "How I work" title). Store as separate keys anyway -- they serve different visual roles and could diverge.
- **Using `font-weight: 500` or `600`:** The typography contract (04-UI-SPEC.md) specifies exactly TWO weights: 400 and 700. No intermediate weights.
- **Centering hero content vertically:** D-01 explicitly positions hero content in the upper third (~30% from top), NOT vertically centered. Use `pt-[30vh]` or similar, not `items-center`.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Section spacing | Custom padding on each section | `Section` wrapper from Phase 3 | Consistent `section-gap` via clamp() |
| Label + title pattern | Duplicate JSX in each section | `SectionHeader` component (D-03) | Single source of truth for style |
| Responsive grid breakpoints | Manual media queries | Tailwind responsive prefixes (`sm:`, `lg:`) | Standard, well-tested utility approach |
| MetricCard grid borders | Individual card borders | `gap-[1px] bg-border` pattern (Phase 3 D-03) | Creates shared-cell grid effect |
| Translation resolution | Manual JSON imports | `getTranslations('homepage')` from next-intl | Handles locale resolution, type safety |

## Common Pitfalls

### Pitfall 1: Dynamic Rendering from useTranslations

**What goes wrong:** Forgetting `setRequestLocale(locale)` in page.tsx causes next-intl to use `headers()` which opts the page into dynamic rendering. The "static site" silently becomes server-rendered.
**Why it happens:** Easy to forget the one-liner call.
**How to avoid:** `setRequestLocale(locale)` MUST be the first call in page.tsx, before any `getTranslations`. Export `generateStaticParams` returning both locales.
**Warning signs:** `next build` output shows lambda icon instead of circle icon for the homepage route.

### Pitfall 2: Copy Mismatch with Source Files

**What goes wrong:** Subtle differences between the copy in `homepage.md` and what ends up in the i18n JSON files. Wrong punctuation, missing bold markers, abbreviated sentences.
**Why it happens:** Manual transcription errors. The copy is ~2000 words across 2 languages.
**How to avoid:** Copy each string directly from `homepage.md` and `microcopy.md`. Do not paraphrase. Do a diff check after populating JSON files.
**Warning signs:** Side-by-side comparison of rendered page vs source file reveals differences.

### Pitfall 3: Wrong Typography Weight/Size

**What goes wrong:** Using font-semibold (600) or font-medium (500) which are NOT in the typography contract. Only 400 and 700 are allowed.
**Why it happens:** Tailwind defaults and habits. `font-semibold` is more common in most codebases.
**How to avoid:** Only use `font-normal` (400) and `font-bold` (700). The UI-SPEC explicitly states "Only two weights are used across the entire page."
**Warning signs:** Visual inconsistency with the Figma prototype.

### Pitfall 4: Hero Vertical Positioning

**What goes wrong:** Vertically centering the hero content (common pattern) instead of positioning it in the upper third as specified.
**Why it happens:** `items-center` on a min-h-screen container is the standard hero pattern.
**How to avoid:** Use padding-top to push content to ~30% from top (e.g., `pt-[25vh]` or `pt-[30vh]`). Test at multiple viewport heights.
**Warning signs:** Content looks centered instead of editorially placed in the upper portion.

### Pitfall 5: MetricCard Grid Breaking the gap-[1px] Pattern

**What goes wrong:** Using standard card spacing instead of the shared-border grid effect from Phase 3.
**Why it happens:** `gap-[1px]` with `bg-border` on the container and `bg-primary` on cards is an unusual pattern.
**How to avoid:** The grid container must have `border border-default bg-border` (or the border token color as bg). Cards must have `bg-primary` to create the visual effect of shared 1px borders between cells.
**Warning signs:** Cards appear with visible gaps instead of a unified grid.

### Pitfall 6: Inline Bold Text in Pillar/Timeline Copy

**What goes wrong:** Bold numbers in copy (e.g., "**25%**", "**99%+**") are lost when stored as plain text in JSON.
**Why it happens:** JSON strings cannot contain markdown formatting.
**How to avoid:** Either: (a) split the text at bold boundaries and use separate keys for bold segments, or (b) use a simple HTML rendering approach with `dangerouslySetInnerHTML` for these specific strings, or (c) use the `rich` function from next-intl which supports `<b>` tags in translation strings. Option (c) is the cleanest -- next-intl supports `t.rich('key', { bold: (chunks) => <strong>{chunks}</strong> })`.
**Warning signs:** Numbers that should be bold and accent-colored appear as regular text.

### Pitfall 7: params as Promise (Next.js 16)

**What goes wrong:** Accessing `params.locale` synchronously causes TypeScript errors.
**Why it happens:** Next.js 15+ changed params to be a Promise.
**How to avoid:** Always `const { locale } = await params;` in async page components.
**Warning signs:** TypeScript compilation errors on params access.

## Code Examples

### Hero Upper-Third Positioning (D-01)

```typescript
// src/components/sections/hero.tsx
export function Hero({ headline, subtitle, primaryCta, secondaryCta, tags }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-start pt-[28vh] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[720px]">
        <h1 className="text-[clamp(40px,5vw,64px)] font-bold leading-[1.1] text-primary">
          {headline}
        </h1>
        <p className="mt-6 text-base leading-[1.7] text-secondary max-w-[600px]">
          {subtitle}
        </p>
        <div className="mt-8 flex gap-4">
          <Button variant="primary" href="#contact">{primaryCta}</Button>
          <Button variant="secondary" href="/work">{secondaryCta}</Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Tag key={i} label={tag} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

Source: CONTEXT.md D-01 (upper third), UI-SPEC.md Layout Contract Hero

### Rich Text for Bold Numbers in Copy

```typescript
// In page.tsx, for pillar text with bold numbers:
import { useTranslations } from 'next-intl';

// In the JSON file:
// "pillar1.text": "Weekly cross-functional sessions cut post-release incidents by <b>25%</b>. Less rework..."

// In the component:
const text = t.rich('howIWork.pillar1.text', {
  b: (chunks) => <strong className="font-bold text-accent">{chunks}</strong>
});
```

Source: next-intl rich text documentation

### Static Rendering Guarantee

```typescript
// src/app/[locale]/page.tsx -- CRITICAL for static rendering
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);  // MUST be first call
  const t = await getTranslations('homepage');
  // ... render sections
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
```

Source: PITFALLS.md #2, PITFALLS.md #14

### Contact Section Email Link

```typescript
// Email with mono font, accent on hover
<a
  href="mailto:mattia@selfrules.org"
  className="font-mono text-[clamp(28px,3vw,36px)] font-bold text-primary hover:text-accent transition-colors duration-150"
>
  mattia@selfrules.org
</a>
```

Source: UI-SPEC.md Contact Section spec, figma-make-prompt.md

## Project Constraints (from CLAUDE.md)

- **Stack is non-negotiable:** Next.js 16.2, Tailwind v4, next-intl 4.8.x, proxy.ts (not middleware.ts)
- **Copy is FINAL:** Copy from source files verbatim. No rewriting, no summarizing, no "improving"
- **Design:** 0px border-radius everywhere, palette (#0A0A0B, #F5F5F0, #E8A838), Inter + JetBrains Mono, generous spacing (80-160px between sections)
- **Modello B:** Never job-seeker framing. Availability and CV only in Contact section and Footer
- **Locale routing:** EN is default (no prefix), IT uses /it prefix (localePrefix: 'as-needed')
- **Typography:** Only 2 weights (400, 700). Only 4 size roles (Display, Title, Body, Label).

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None detected (greenfield project) |
| Config file | none -- see Wave 0 |
| Quick run command | `npx next build` (type-check + static generation) |
| Full suite command | `npx next build` (verifies all pages render statically) |

### Phase Requirements to Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| HOME-01 | Hero renders with headline, subtitle, 2 CTAs, tags | smoke | `npx next build` (page compiles + renders) | -- Wave 0 |
| HOME-02 | How I Work renders 3 pillars | smoke | `npx next build` | -- Wave 0 |
| HOME-03 | Timeline renders 4 blocks + closing line | smoke | `npx next build` | -- Wave 0 |
| HOME-04 | Metrics grid renders 6 MetricCards | smoke | `npx next build` | -- Wave 0 |
| HOME-05 | Current Work renders 2 cards | smoke | `npx next build` | -- Wave 0 |
| HOME-06 | Contact renders email, LinkedIn, CV, availability | smoke | `npx next build` | -- Wave 0 |
| COPY-01 | All copy matches source files | manual | Visual comparison with homepage.md | -- |

### Sampling Rate
- **Per task commit:** `npx next build` (verifies static generation succeeds)
- **Per wave merge:** `npx next build` + visual inspection at localhost:3000
- **Phase gate:** Full build green + visual comparison both locales against source copy

### Wave 0 Gaps
- No test framework installed -- for this phase, `next build` serves as the primary validation (type checking + static page generation)
- Manual visual comparison is required for copy accuracy (COPY-01) -- no automated test can verify verbatim copy match

## Sources

### Primary (HIGH confidence)
- `04-CONTEXT.md` -- All locked decisions D-01 through D-07
- `04-UI-SPEC.md` -- Complete visual contract (typography, color, spacing, layout per section)
- `homepage.md` -- Source copy IT + EN (verbatim content)
- `microcopy.md` -- CTA labels, availability tag, section-level microcopy
- `ARCHITECTURE.md` -- Directory structure, component boundaries, data flow
- `PITFALLS.md` -- 14 pitfalls with mitigations (especially #2, #14)
- `03-CONTEXT.md` -- Phase 3 component API decisions (dumb props, gap-[1px] grid)

### Secondary (MEDIUM confidence)
- `implementation-plan.md` -- Original implementation plan (some specs superseded by UI-SPEC and CONTEXT decisions)
- `figma-make-prompt.md` -- Figma design prompts (visual intent reference)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- all decisions locked, no new dependencies
- Architecture: HIGH -- component structure, file locations, and patterns are well-defined from prior phases
- Pitfalls: HIGH -- documented extensively in PITFALLS.md and prior phase contexts
- Copy accuracy: MEDIUM -- requires manual verification, largest risk area

**Research date:** 2026-03-22
**Valid until:** 2026-04-22 (stable -- no external dependency changes expected)
