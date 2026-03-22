# Phase 3: UI Primitives - Research

**Researched:** 2026-03-22
**Domain:** React Server Components with Tailwind CSS v4 utility styling -- pure component library
**Confidence:** HIGH

## Summary

Phase 3 builds 8 reusable UI components (Button, Tag, Section, SectionHeader, MetricCard, CaseStudyCard, ProjectCard, TimelineBlock) plus a development verification route at `/dev/components`. All components are React Server Components -- no client-side state, no event handlers, no `'use client'`. Hover transitions are pure CSS. Components receive translated strings via props ("dumb" components), with zero coupling to next-intl.

The phase has exceptionally detailed specifications from the UI-SPEC (03-UI-SPEC.md) which defines exact props, layout contracts, typography mapping, color usage, interaction contracts, and 20 visual success criteria. The Figma Make prototype provides reference implementations. The research below focuses on technical patterns for implementing these specs correctly in Tailwind v4 + Next.js 16, and on the discretion areas where Claude must make design decisions.

**Primary recommendation:** Implement components in dependency order (Tag first, then Button, Section/SectionHeader, then cards), using the exact Tailwind classes from UI-SPEC interaction contracts. The MetricCard grid `gap-[1px]` pattern requires careful container/cell background coordination. The `/dev/components` route must use `notFound()` behind `NODE_ENV` check.

<user_constraints>

## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Components are "dumb" with typed props + optional children. Components do NOT handle i18n internally -- the page translates with next-intl and passes values via props. Maximum reusability and zero coupling with next-intl.
- **D-02:** CaseStudyCard responsive padding: p-8 (32px) on mobile, md:p-12 (48px) on desktop. Follows Figma prototype, not the fixed 40px from the original plan.
- **D-03:** MetricCard uses the grid gap-[1px] pattern from the Figma prototype: container has border + bg of the border color, cards have bg-primary. Shared-border grid cell effect (like a table), not separate cards. Grid responsive: 3 columns desktop, 2 tablet, 1 mobile.
- **D-04:** Create a /dev/components route (development only, excluded from production build) showing all components with variants, hover states, and responsive preview. Visual verification before proceeding to Phase 4.

### Claude's Discretion
- **Button component:** Single component with prop `href` (renders Link or button) vs two separate components (Button + LinkButton). Choose the most idiomatic approach for Next.js.
- **CaseStudyCard/ProjectCard API:** Fixed props with locked layout vs composable pattern with slots. Evaluate based on actual complexity needed (few use cases per card type).
- **Section wrapper:** Whether to include optional section header (label monospace + title) or keep as pure layout wrapper. Evaluate how many sections repeat the label+title pattern.
- **Font mapping:** Configure font-mono to JetBrains Mono idiomatically for Tailwind v4 + next/font. The prototype uses inline font-family everywhere -- must become a utility class.
- **TimelineBlock connector:** Whether connector lives in component, wrapper Timeline, or page layout. Decide based on usage context.
- **TimelineBlock scope:** Whether it serves only homepage timeline or also About page. Check copy of both pages.
- **TimelineBlock hover:** Whether to add hover border-accent/50 (consistent with other cards) or leave without hover. UI-SPEC decided: YES, border-accent/50 hover.
- **Mobile timeline connector:** Whether to add vertical line on mobile or stack cards without connector.
- **MetricCard number sizing:** clamp() responsive vs breakpoint-based (text-4xl / text-5xl / text-[64px]). Choose what works best with Tailwind v4.

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope.

</user_constraints>

<phase_requirements>

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| UICM-01 | Button component with primary (accent bg, dark text) and secondary (transparent, border) variants, 0px radius, hover transitions | Interaction contract in UI-SPEC: primary gets bg-accent-hover + translate-y(-1px), secondary gets border-accent + text-accent. Server Component, renders as Link or button based on href prop. |
| UICM-02 | MetricCard with accent number (font-mono), label, context, hover border-accent transition | Grid gap-[1px] pattern (D-03), clamp(40px, 5vw, 72px) metric number, border-color 200ms transition. Container handles grid layout. |
| UICM-03 | CaseStudyCard with flex layout, tag, title, preview, key metric, hover translate-y(-2px) + border-accent | Responsive flex: row on desktop (metric right), column on mobile (metric below). Padding p-8/md:p-12 (D-02). Uses Tag component internally. |
| UICM-04 | ProjectCard with title, one-liner, tech stack tags, status dot, hover border-accent | Status dot is the ONLY exception to 0px border-radius (round indicator). Status conveyed by text label too (a11y). |
| UICM-05 | TimelineBlock with role title, company, dates (monospace), visual connector | Card-only component. Connector lives outside in page layout. bg-surface background, p-6 padding. |
| UICM-06 | Tag component (monospace, uppercase, tracking-wide, text-secondary) | JetBrains Mono, 13px, uppercase, tracking 0.05em. Optional bordered variant (default: bordered). |
| UICM-07 | Section wrapper with configurable max-width (720px default, 1080px wide), section-gap padding | Uses clamp() for responsive padding. Includes SectionHeader sub-component for label + title pattern. |

</phase_requirements>

## Project Constraints (from CLAUDE.md)

- **Stack non-negotiable:** Next.js 16.2, TypeScript, Tailwind CSS v4 (CSS-first @theme), next-intl 4.8.x
- **0px border-radius everywhere** -- global rule, no exceptions except status dots
- **No component library** (no shadcn, no Radix) -- pure Tailwind utilities
- **Copy is FINAL** -- copy from source files exactly, never rewrite
- **Design specs from figma-make-prompt.md** -- follow visual specifications
- **Components in `src/components/ui/`** for primitives, `src/components/layout/` for Section/SectionHeader
- **Server Components by default** -- no `'use client'` in Phase 3 components (pure CSS hover)
- **Inter for body text, JetBrains Mono for code/labels/metrics** via next/font/google

## Standard Stack

### Core (already installed in Phase 1)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React | 19.x | UI library | Ships with Next.js 16. Server Components are default. |
| TypeScript | 5.x | Type safety | Strict mode. All props interfaces typed. |
| Tailwind CSS | 4.x | Utility CSS | CSS-first config. All component styling via utility classes. |
| next/font/google | built-in | Font loading | Inter + JetBrains Mono already configured in Phase 1. |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next/link | built-in | Client-side navigation | Button component when `href` is provided |
| next/navigation | built-in | notFound() | Dev components page production exclusion |

### No Additional Packages Needed

Phase 3 adds ZERO new npm dependencies. Everything is built with React + Tailwind utilities already in the project from Phase 1.

## Architecture Patterns

### Component File Structure

```
src/components/
  layout/
    Section.tsx          # Section wrapper (UICM-07)
    SectionHeader.tsx    # Label + title pattern (extracted from Section)
  ui/
    Button.tsx           # UICM-01
    Tag.tsx              # UICM-06
    MetricCard.tsx       # UICM-02
    CaseStudyCard.tsx    # UICM-03
    ProjectCard.tsx      # UICM-04
    TimelineBlock.tsx    # UICM-05
src/app/[locale]/dev/
    components/page.tsx  # D-04 verification route
```

### Pattern 1: Server Component with Typed Props (All Phase 3 Components)

**What:** Every component is a plain function that returns JSX. No `'use client'`, no hooks, no state. All interactivity is CSS-only (hover, focus, transitions).

**When to use:** Always in Phase 3. None of these components need browser APIs.

**Example:**
```typescript
// Source: UI-SPEC component API contracts
interface TagProps {
  children: React.ReactNode;
  bordered?: boolean;
  className?: string;
}

export function Tag({ children, bordered = true, className }: TagProps) {
  return (
    <span
      className={cn(
        'font-mono text-[13px] uppercase tracking-[0.05em] text-secondary',
        bordered && 'px-3 py-1 bg-surface border border-default',
        className
      )}
    >
      {children}
    </span>
  );
}
```

### Pattern 2: Polymorphic Button (href decides element type)

**What:** Single Button component that renders as `<a>` (via next/link) when `href` is provided, or `<button>` when not. This is the idiomatic Next.js approach -- avoids duplicating styling logic across two components.

**Recommendation for Claude's discretion (Button):** Use a single component with polymorphic rendering. The site has ~6-8 buttons total. A single component with conditional rendering is simpler and more maintainable than two separate components. Pattern is standard in Next.js ecosystem.

**Example:**
```typescript
import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function Button({ variant, children, href, className, ...rest }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center h-12 px-8 text-base font-normal transition-all duration-150',
    variant === 'primary' && 'bg-accent text-dark hover:bg-accent-hover hover:-translate-y-[1px]',
    variant === 'secondary' && 'bg-transparent border border-default text-primary hover:border-accent hover:text-accent',
    className
  );

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button type="button" className={classes} {...rest}>{children}</button>;
}
```

### Pattern 3: MetricCard Grid Container (gap-[1px] shared border pattern)

**What:** The MetricCard grid is NOT individual cards with margins. It is a CSS Grid where the container background bleeds through 1px gaps, creating shared borders between cells. Each cell has bg-primary to fill its area.

**This is a locked decision (D-03).** The pattern comes from the Figma prototype.

**Example:**
```typescript
// MetricGrid wrapper (used in pages, not a separate component -- but the pattern matters)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--border-default)] border border-default">
  <MetricCard number="99%+" label="Uptime" context="Payment success rate" />
  {/* ... */}
</div>

// MetricCard itself
function MetricCard({ number, label, context }: MetricCardProps) {
  return (
    <div className="bg-primary p-8 transition-[border-color] duration-200 hover:bg-primary">
      <p className="font-mono font-bold text-accent text-[clamp(40px,5vw,72px)] leading-none">{number}</p>
      <p className="text-[13px] text-primary mt-4">{label}</p>
      <p className="text-[13px] text-tertiary mt-1">{context}</p>
    </div>
  );
}
```

**Critical detail:** The hover effect on MetricCard is border-color transition. But since individual cells do not have their own border (the gap IS the border), the hover needs special handling. Two approaches:

1. **Outline approach:** Use `outline` instead of `border` on hover: `hover:outline hover:outline-1 hover:outline-accent/40 hover:-outline-offset-1`. This overlays the accent color on the cell edge without affecting grid gap layout.
2. **Box-shadow approach:** Use `hover:shadow-[inset_0_0_0_1px_var(--border-accent)]` with opacity.

**Recommendation:** Use the outline approach -- it is simpler, does not affect layout, and the accent/40 opacity maps cleanly.

### Pattern 4: CaseStudyCard Responsive Flex Layout

**What:** Flex row on desktop (content left, metric right), flex column on mobile (metric below content). Padding changes at md breakpoint per D-02.

**Example:**
```typescript
<div className="border border-default p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6
  transition-all duration-200 hover:border-accent/40 hover:-translate-y-[2px]">
  <div className="flex-1">
    <Tag>{tag}</Tag>
    <h3 className="text-xl font-bold text-primary mt-3">{title}</h3>
    <p className="text-base text-secondary mt-2">{preview}</p>
  </div>
  <div className="shrink-0 md:text-right">
    <span className="font-mono font-bold text-accent text-[clamp(40px,5vw,72px)] leading-none">{metric}</span>
    {metricLabel && <p className="text-[13px] text-tertiary mt-1">{metricLabel}</p>}
  </div>
</div>
```

### Pattern 5: Section Wrapper with Optional SectionHeader

**Recommendation for Claude's discretion (Section):** Extract SectionHeader as a separate component (as the UI-SPEC already specifies). The label + title pattern is used by at least 4 homepage sections (How I Work, Journey, Numbers, What I'm Doing Now) and multiple inner page sections. Keeping Section as a pure layout wrapper and SectionHeader as a composable child is cleaner.

**Example:**
```typescript
// Section -- pure layout
export function Section({ children, wide, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-[var(--section-gap)] px-[var(--page-padding)]',
        className
      )}
    >
      <div className={cn(
        'mx-auto w-full',
        wide ? 'max-w-[var(--wide-width)]' : 'max-w-[var(--content-width)]'
      )}>
        {children}
      </div>
    </section>
  );
}

// SectionHeader -- composable
export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', className)}>
      <p className="font-mono text-[13px] uppercase tracking-[0.05em] text-secondary mb-2">{label}</p>
      <h2 className="text-xl font-bold text-primary">{title}</h2>
    </div>
  );
}
```

### Pattern 6: Dev-Only Route with notFound()

**What:** The `/dev/components` verification route must be excluded from production builds.

**Example:**
```typescript
// src/app/[locale]/dev/components/page.tsx
import { notFound } from 'next/navigation';

export default function DevComponentsPage() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  return (
    <main className="py-20 px-8 max-w-[1080px] mx-auto">
      {/* All components with sample data */}
    </main>
  );
}
```

**Important:** This page does NOT need `setRequestLocale` or `generateStaticParams` since it is dev-only and will never be statically rendered for production.

### Anti-Patterns to Avoid

- **Adding 'use client' to any Phase 3 component:** All hover/focus states are CSS-only. No JavaScript needed. Server Components ship zero JS.
- **Hardcoding i18n strings in components:** Components are "dumb" (D-01). Pages translate and pass strings as props.
- **Using tailwind.config.ts for custom values:** All tokens are in globals.css @theme from Phase 1.
- **Using border-radius on any element:** Global 0px rule. Exception: status dots only (border-radius: 50%).
- **Building MetricCard as standalone bordered cards:** Use the gap-[1px] grid pattern (D-03) for the shared-border effect.
- **Using Framer Motion or any animation library:** CSS transitions only. 150ms for buttons, 200ms for cards.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Class name merging | Manual string concatenation | `cn()` utility (clsx + twMerge) or simple clsx | Handles conditional classes, deduplication |
| Client-side navigation | `<a>` tags | `next/link` Link component | Prefetching, client-side transitions |
| Font loading | @font-face declarations | `next/font/google` (already in Phase 1) | Zero CLS, self-hosted at build time |
| Responsive fluid type | Manual media queries | `clamp()` in Tailwind arbitrary values | Single declaration, fluid between breakpoints |
| Production route exclusion | Custom build scripts | `notFound()` + `process.env.NODE_ENV` check | Built-in Next.js pattern |

**Key insight:** Phase 3 is intentionally low-dependency. Every component is a typed function with Tailwind classes. The complexity is in getting the exact visual output right (spacing, colors, hover states), not in choosing libraries.

## Discretion Recommendations

Based on research of the UI-SPEC, Figma prototype patterns, and copy sources, here are recommendations for Claude's discretion areas:

### Button: Single polymorphic component
**Recommendation:** Single `Button` component with `href` prop. When `href` is present, render as `<Link>`. When absent, render as `<button type="button">`. This is the standard Next.js pattern (shadcn does the same). The site has ~8 buttons total -- no need for two components.

### CaseStudyCard/ProjectCard API: Fixed props with locked layout
**Recommendation:** Fixed props. The site has exactly 2 case study cards and 2 project cards. Composable slots add complexity for zero benefit. Keep the API matching the UI-SPEC exactly.

### Section wrapper: Pure layout only, separate SectionHeader
**Recommendation:** Section is layout-only (padding, max-width, centering). SectionHeader is a separate component. At least 4 homepage sections and several inner page sections use the label + title pattern. Composition is cleaner than conditional props.

### Font mapping: CSS variable from @theme
**Recommendation:** Phase 1 should have set up `--font-mono` via next/font CSS variable, bridged into Tailwind @theme with `@theme inline`. Using `font-mono` utility class in Tailwind should already resolve to JetBrains Mono. Verify this works; if not, add `--font-family-mono: var(--font-mono);` in @theme.

### TimelineBlock connector: Page-level layout
**Recommendation:** Connector lives in the page layout (homepage Timeline section), NOT inside TimelineBlock. The UI-SPEC already decided this. TimelineBlock is just the card. The Timeline section in Phase 4 will handle horizontal connector (desktop) and vertical connector (mobile).

### TimelineBlock scope: Homepage only, but reusable
**Recommendation:** Design for homepage timeline (compact: dates, role, company, description). The About page uses a different format (longer career blocks with principles). TimelineBlock is homepage-scoped but its simple API means it could be reused if needed.

### TimelineBlock hover: Yes, border-accent/50
**Recommendation:** Already decided in UI-SPEC. Add `hover:border-accent/50` with `transition-[border-color] duration-200`. Consistent with all other card types.

### Mobile timeline connector: No vertical line
**Recommendation:** Stack cards without connector on mobile. The Figma prototype does not show a vertical connector on mobile, and adding one increases complexity for a marginal visual gain. Simple vertical stack with gap.

### MetricCard number sizing: clamp()
**Recommendation:** Use `text-[clamp(40px,5vw,72px)]` (Tailwind arbitrary value). This is already specified in the UI-SPEC and works well with Tailwind v4. Fluid between mobile and desktop without breakpoint jumps.

## Common Pitfalls

### Pitfall 1: MetricCard Grid Hover Not Working

**What goes wrong:** Individual MetricCard cells in the gap-[1px] grid do not have their own borders. Using `hover:border-accent` does nothing because the "border" is actually the container background bleeding through the gap.
**Why it happens:** The shared-border pattern means cells rely on the container bg for borders, not their own border property.
**How to avoid:** Use `outline` or `box-shadow inset` for the hover effect instead of `border`. The outline approach (`hover:outline hover:outline-1 hover:outline-accent/40 hover:-outline-offset-1`) overlays on the cell edge without affecting grid layout.
**Warning signs:** Hovering on a metric card shows no visual change.

### Pitfall 2: Tailwind v4 Arbitrary Value Syntax for clamp()

**What goes wrong:** Using `text-[clamp(40px, 5vw, 72px)]` with spaces after commas. Tailwind v4 arbitrary values cannot contain spaces (they break the class parsing).
**Why it happens:** CSS clamp() normally has spaces, but Tailwind arbitrary values use space as a separator.
**How to avoid:** Remove spaces: `text-[clamp(40px,5vw,72px)]`. Or use an underscore as space: `text-[clamp(40px,_5vw,_72px)]` (Tailwind converts underscores to spaces).
**Warning signs:** The class is not applied; text renders at default size.

### Pitfall 3: Border Default Color in Tailwind v4

**What goes wrong:** Using `border` without explicit color. Tailwind v4 changed the default border color from `gray-200` to `currentColor`. In a dark theme with light text, this means borders inherit text color (light), not the intended dark border color.
**Why it happens:** Tailwind v4 breaking change from v3.
**How to avoid:** Always specify border color explicitly: `border border-default` (never just `border`).
**Warning signs:** Card borders appear white/light instead of the subtle #1A1A1F.

### Pitfall 4: text-tertiary Accessibility Concern

**What goes wrong:** Using text-tertiary (#5A5A5E on #0A0A0B) for body-sized text. This is ~3.2:1 contrast ratio -- fails WCAG AA for normal text (needs 4.5:1).
**Why it happens:** The color looks fine on a high-end display but fails the mathematical contrast check.
**How to avoid:** Use text-tertiary ONLY for supplementary/decorative text (dates, context lines). The UI-SPEC already restricts it to MetricCard context and TimelineBlock dates. Never use it for primary content. The WCAG compliance note in UI-SPEC acknowledges this is borderline but acceptable for supplementary info at 13px.
**Warning signs:** Lighthouse accessibility audit flags low contrast.

### Pitfall 5: cn() Utility Not Available

**What goes wrong:** Importing `cn` from a utility file that does not exist yet. Phase 1 may not have created a class merge utility.
**Why it happens:** Many Next.js projects use `cn()` (clsx + tailwind-merge) but it is not built into Next.js.
**How to avoid:** Check if `src/lib/utils.ts` exists from Phase 1. If not, create it with a simple implementation: `import { clsx } from 'clsx'; import { twMerge } from 'tailwind-merge'; export function cn(...inputs) { return twMerge(clsx(inputs)); }`. Or for this project's simplicity, just use `clsx` directly without tailwind-merge (no conflicting utility classes expected).
**Warning signs:** Build error on import.

### Pitfall 6: Next.js Link Component in Server Components

**What goes wrong:** Assuming `next/link` requires `'use client'` and adding the directive unnecessarily.
**Why it happens:** Link is a client component internally, but it can be imported and used inside Server Components without marking the parent as a client component. Next.js handles the boundary automatically.
**How to avoid:** Import and use `Link` in Server Components normally. Do NOT add `'use client'` to Button.tsx just because it uses Link.
**Warning signs:** Unnecessary JS shipped for button/card components.

## Code Examples

### cn() Utility Setup

```typescript
// src/lib/utils.ts
// Source: standard Next.js pattern (also used by shadcn)
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
// Note: tailwind-merge is optional. For this project with no conflicting
// utility classes, clsx alone is sufficient and lighter weight.
```

If clsx is not installed:
```bash
npm install clsx
```

### Complete Tag Component

```typescript
// src/components/ui/Tag.tsx
// Source: UI-SPEC component API + Figma prototype pattern
import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  bordered?: boolean;
  className?: string;
}

export function Tag({ children, bordered = true, className }: TagProps) {
  return (
    <span
      className={cn(
        'font-mono text-[13px] uppercase tracking-[0.05em] text-secondary inline-block',
        bordered && 'px-3 py-1 bg-surface border border-default',
        className
      )}
    >
      {children}
    </span>
  );
}
```

### Complete MetricCard with Grid Hover

```typescript
// src/components/ui/MetricCard.tsx
// Source: UI-SPEC interaction + layout contracts
import { cn } from '@/lib/utils';

interface MetricCardProps {
  number: string;
  label: string;
  context: string;
  className?: string;
}

export function MetricCard({ number, label, context, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        'bg-primary p-8',
        'outline outline-0 hover:outline-1 hover:outline-accent/40 hover:-outline-offset-1',
        'transition-all duration-200',
        className
      )}
    >
      <p className="font-mono font-bold text-accent text-[clamp(40px,5vw,72px)] leading-none">
        {number}
      </p>
      <p className="text-[13px] text-primary mt-4">{label}</p>
      <p className="text-[13px] text-tertiary mt-1">{context}</p>
    </div>
  );
}
```

### ProjectCard Status Dot

```typescript
// Source: UI-SPEC layout contract -- only exception to 0px border-radius
const dotColors = {
  active: 'bg-accent',
  shipped: 'bg-[#4ADE80]',
  'coming-soon': 'bg-secondary',
} as const;

<span className={cn('w-2 h-2 rounded-full inline-block', dotColors[status])} />
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Client Components for hover | CSS-only hover in Server Components | React 19 / Next.js 15+ | Zero JS shipped for card hover effects |
| tailwind.config.ts tokens | @theme in globals.css | Tailwind v4 (Jan 2025) | No JS config file needed |
| className string concatenation | clsx / cn() utility | Ecosystem standard | Cleaner conditional class logic |
| middleware.ts | proxy.ts | Next.js 16 (May 2025) | Function rename, file rename |
| border default = gray-200 | border default = currentColor | Tailwind v4 | Must always specify border color explicitly |

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Visual verification via /dev/components route |
| Config file | none -- dev route, not automated tests |
| Quick run command | `npm run dev` then visit `http://localhost:3000/dev/components` |
| Full suite command | Manual visual inspection of 20 criteria from UI-SPEC |

### Phase Requirements to Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| UICM-01 | Button renders 2 variants with hover | visual | Visit /dev/components, hover buttons | Wave 0: create dev route |
| UICM-02 | MetricCard grid with accent number, hover | visual | Visit /dev/components, check 6-card grid | Wave 0: create dev route |
| UICM-03 | CaseStudyCard layout + responsive + hover | visual | Resize viewport, hover card | Wave 0: create dev route |
| UICM-04 | ProjectCard with tags, status dot, hover | visual | Visit /dev/components | Wave 0: create dev route |
| UICM-05 | TimelineBlock with mono dates, role, company | visual | Visit /dev/components | Wave 0: create dev route |
| UICM-06 | Tag in mono, uppercase, tracking-wide | visual | DevTools font inspector | Wave 0: create dev route |
| UICM-07 | Section wrapper max-width + section-gap | visual | DevTools computed styles | Wave 0: create dev route |

### Sampling Rate
- **Per task commit:** `npm run dev` + visual check on /dev/components
- **Per wave merge:** Full 20-criteria checklist from UI-SPEC "Phase 3 Success Criteria (Visual)"
- **Phase gate:** All 20 visual criteria pass before `/gsd:verify-work`

### Wave 0 Gaps
- [ ] `src/app/[locale]/dev/components/page.tsx` -- verification route for all components
- [ ] `src/lib/utils.ts` -- cn() utility if not created in Phase 1
- [ ] Verify `clsx` is installed (`npm install clsx` if needed)

## Build Order Recommendation

Components should be built in this order based on dependencies:

1. **Tag** (UICM-06) -- no dependencies, used by CaseStudyCard and ProjectCard
2. **Button** (UICM-01) -- no dependencies on other Phase 3 components
3. **Section + SectionHeader** (UICM-07) -- layout wrapper, no deps on other components
4. **MetricCard** (UICM-02) -- standalone, but grid container pattern needs documentation
5. **CaseStudyCard** (UICM-03) -- depends on Tag
6. **ProjectCard** (UICM-04) -- depends on Tag
7. **TimelineBlock** (UICM-05) -- standalone
8. **/dev/components page** (D-04) -- depends on all components above

## Open Questions

1. **cn() utility existence**
   - What we know: Phase 1 creates the project foundation but may not include a class merge utility
   - What's unclear: Whether `src/lib/utils.ts` with `cn()` exists after Phase 1 execution
   - Recommendation: Plan should include a task to create it if missing (install clsx, create utils.ts)

2. **@theme token names for custom spacing**
   - What we know: Phase 1 defines tokens in @theme (section-gap, content-width, wide-width, page-padding)
   - What's unclear: Exact CSS variable names Phase 1 used (e.g., `--section-gap` vs `--spacing-section-gap`)
   - Recommendation: First task should verify Phase 1 output and reference actual variable names

3. **Tailwind v4 outline utility support**
   - What we know: The MetricCard hover needs outline-based approach for the gap-[1px] grid
   - What's unclear: Whether Tailwind v4 has `outline-accent/40` with opacity support natively
   - Recommendation: If not supported, use arbitrary value: `hover:outline-[var(--border-accent)]/40` or `hover:[outline:1px_solid_rgb(232_168_56/0.4)]`

## Sources

### Primary (HIGH confidence)
- `03-UI-SPEC.md` -- Complete component contracts, interaction specs, layout contracts, success criteria
- `03-CONTEXT.md` -- User decisions D-01 through D-04 and discretion areas
- `implementation-plan.md` Section 1.3 -- Original component specifications
- `.planning/research/ARCHITECTURE.md` -- Directory structure, component boundaries
- `.planning/research/PITFALLS.md` -- Pitfall #3 (tailwind.config.ts), #7 (v4 silent breakage), #11 (border-radius), #13 (dark mode a11y)

### Secondary (MEDIUM confidence)
- `.planning/research/STACK.md` -- Technology decisions, "What NOT to Use"
- `.planning/phases/01-foundation/01-RESEARCH.md` -- Phase 1 patterns (fonts, @theme, proxy.ts)
- Figma Make prototype reference (component patterns from CONTEXT.md code_context section)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- no new packages, everything from Phase 1
- Architecture: HIGH -- UI-SPEC provides exhaustive component contracts
- Pitfalls: HIGH -- well-understood domain (CSS, Tailwind, React Server Components)
- Discretion recommendations: MEDIUM -- based on analysis of use cases and ecosystem patterns, but Claude has final say

**Research date:** 2026-03-22
**Valid until:** 2026-04-22 (stable domain, no fast-moving dependencies)
