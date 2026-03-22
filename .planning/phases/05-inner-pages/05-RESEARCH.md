# Phase 5: Inner Pages - Research

**Researched:** 2026-03-22
**Domain:** Next.js 16 App Router inner pages with MDX blog, bilingual content (IT + EN), @tailwindcss/typography
**Confidence:** HIGH

## Summary

Phase 5 builds 6 page routes (About, Work, Lab, Approach, Blog listing, Blog post) plus one shared PageCTA component. The phase is primarily a content assembly task: it consumes Phase 3 UI primitives (Button, CaseStudyCard, ProjectCard, Tag, Section) and Phase 4 patterns (SectionHeader, Server Components, i18n namespace structure) to render pre-written bilingual copy. The most technically complex piece is the blog post, which requires @next/mdx configuration, MDX file loading per locale, and @tailwindcss/typography prose styling customized for the dark design system.

All inner pages are Server Components rendering static content. No client-side interactivity is added in this phase. The pages share a consistent structure: headline, intro, content sections, and a closing PageCTA. The copy is DEFINITIVO and must be copied verbatim from source files.

**Primary recommendation:** Structure work as: (1) i18n messages for all 6 pages, (2) PageCTA shared component, (3) prose pages first (About, Approach -- pure text), (4) card-based pages (Work, Lab), (5) MDX blog setup + blog listing + blog post last (most complex).

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Career blocks (4 experiences) as prose sections, NOT cards/TimelineBlock. Company name as bold heading, dates monospace below, narrative paragraphs. Max-width 720px.
- **D-02:** "Cosa credo" (3 principles) as sequential prose: bold titles as subtitles, paragraphs below. Same rhythm as career sections.
- **D-03:** Claude's discretion for "Fuori dal lavoro": same prose flow or visually separated (bg-surface / divider).
- **D-04:** CaseStudyCard NOT clickable in v1. No href, no hover "go to detail". Detail pages are v2 (CONT-01).
- **D-05:** Only 2 case study cards in v1: Payments Rescue + Cashless System. Card 3 (LeadsBridge) does NOT exist.
- **D-06:** CasaHunter as expanded inline section in Lab page -- all detail directly on the page, no separate page. MoneyMind as "coming soon" with one-liner.
- **D-07:** Blog listing page minimal: headline + intro, post list with date mono + clickable title + 1-line excerpt. With 1 post the page will be sparse -- and that is ok.
- **D-08:** Blog post with single slug for both languages. Structure: `src/app/[locale]/blog/why-i-prototype-in-code/` with `content.en.mdx`, `content.it.mdx`, and `page.tsx` loader.
- **D-09:** Prose styling: @tailwindcss/typography, max-width 720px, line-height 1.7-1.8.
- **D-10:** PageCTA component shared by all inner pages. Accepts text + 1-2 button props. Lighter than homepage Contact section.
- **D-11:** No "job seeker" framing anywhere. Availability and CV only in Contact section (homepage) and Footer.

### Claude's Discretion
- About "Fuori dal lavoro": same prose flow or visually separated (D-03)
- Blog post metadata: how to handle MDX metadata for the page.tsx loader
- Approach page layout: numbered markers or plain number in title text
- Lab stack tags: Tag components inline or plain monospace text
- Blog listing empty state: copy for 0 posts

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| PAGE-01 | About page with headline, 4 career blocks, 3 principles, "Fuori dal lavoro", CTA | Prose sections at 720px, SectionHeader pattern, PageCTA component, i18n namespace `about.*` |
| PAGE-02 | Work page with headline + intro, 2 CaseStudyCards (1 with BOZZA note), CTA | CaseStudyCard consumed from Phase 3, NOT clickable (D-04), wide-width 1080px container for cards |
| PAGE-03 | Lab page with headline + intro, CasaHunter expanded detail, MoneyMind coming soon, CTA | Inline expanded section (D-06), Tag components for stack, ProjectCard not needed for CasaHunter |
| PAGE-04 | Approach page with headline + intro, 5 numbered sections, closing + CTA, 720px | Pure prose page, numbers in title text, 64px between sections |
| PAGE-05 | Blog listing with headline, post list (date + title + excerpt), empty state | Minimal listing, blog post metadata exported from MDX for title/date/excerpt |
| PAGE-06 | Blog post with title, date, prose styling (720px, line-height 1.7-1.8) | @next/mdx setup, @tailwindcss/typography with dark mode customization, locale-based MDX loading |
| COPY-01 | All copy IDENTICAL to source files | 7 source files read and catalogued, verbatim extraction into i18n messages |
| COPY-02 | Complete IT translations | All source files contain IT copy, ready for extraction |
| COPY-03 | Complete EN translations | All source files contain EN copy, ready for extraction |
| MODB-01 | No "job seeker" framing anywhere | Copy is pre-verified, implementation must preserve exact wording |
| MODB-02 | Availability and CV ONLY in Contact section and Footer | No availability/CV references in any inner page content |
| MODB-03 | Site speaks about what he does and how he thinks | All copy verified: About leads with experiences, Approach leads with decisions, Work leads with problems |
| MODB-04 | Stories lead with problem/result, not "I worked on" | Copy verified: all career blocks and case studies open with the problem/context, not personal attribution |
</phase_requirements>

## Standard Stack

### Core (already installed from prior phases)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.2.x | Framework | App Router, Turbopack, static rendering |
| next-intl | 4.8.x | i18n | Server Component native, locale routing |
| Tailwind CSS | 4.x | Styling | CSS-first config, utility classes |

### New for Phase 5

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| @next/mdx | latest | MDX compilation | Official Next.js MDX integration, Server-rendered, no client JS |
| @mdx-js/loader | latest | MDX webpack loader | Required by @next/mdx |
| @mdx-js/react | latest | MDX React provider | Required by @next/mdx for App Router |
| @types/mdx | latest | TypeScript types | MDX type definitions |
| @tailwindcss/typography | latest | Prose styling | Official Tailwind plugin for blog content |
| remark-gfm | latest | GFM support | Tables, strikethrough, task lists in MDX |

### Installation

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
npm install -D @tailwindcss/typography remark-gfm
```

**Note:** rehype-pretty-code is NOT needed for v1. The blog post has no code blocks that need syntax highlighting. The only inline code is `external_payment_type` which can use the standard prose code styling. Add rehype-pretty-code later if code-heavy posts appear.

## Architecture Patterns

### Project Structure (Phase 5 additions)

```
src/
  app/
    [locale]/
      about/page.tsx              # PAGE-01
      work/page.tsx               # PAGE-02
      lab/page.tsx                # PAGE-03
      approach/page.tsx           # PAGE-04
      blog/
        page.tsx                  # PAGE-05 (listing)
        why-i-prototype-in-code/
          page.tsx                # PAGE-06 (loader)
          content.en.mdx          # Blog post EN
          content.it.mdx          # Blog post IT
  components/
    sections/
      page-cta.tsx                # NEW: shared closing CTA
  messages/
    en.json                       # ADD: about, work, lab, approach, blog namespaces
    it.json                       # ADD: same namespaces
  mdx-components.tsx              # NEW: required by @next/mdx (project root or src/)
```

### Pattern 1: Inner Page Structure (Server Component)

Every inner page follows the same pattern:

```typescript
// src/app/[locale]/about/page.tsx
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/sections/section-header';
import { PageCTA } from '@/components/sections/page-cta';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <main>
      <Section>
        <h1 className="text-[clamp(28px,3vw,36px)] font-bold leading-[1.2] text-primary">
          {t('headline')}
        </h1>
        {/* Career blocks, principles, etc. */}
      </Section>
      <PageCTA
        text={t('cta.text')}
        primaryCta={{ label: t('cta.primary'), href: `mailto:...` }}
      />
    </main>
  );
}
```

**Critical:** Always `await params` (Next.js 16 -- params is a Promise, Pitfall 14). Always call `setRequestLocale(locale)` before any `getTranslations` (Pitfall 2 -- prevents dynamic rendering).

### Pattern 2: Blog Post with Locale-Based MDX Loading

The blog post uses dynamic import to load the correct locale's MDX file:

```typescript
// src/app/[locale]/blog/why-i-prototype-in-code/page.tsx
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components/layout/section';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Dynamic import based on locale
  const { default: Content, metadata } = await import(
    `./content.${locale}.mdx`
  );

  return (
    <main>
      <Section>
        <article>
          <h1 className="text-[clamp(28px,3vw,36px)] font-bold leading-[1.2] text-primary">
            {metadata.title}
          </h1>
          <time className="mt-2 block font-mono text-sm uppercase tracking-wide text-secondary">
            {metadata.date}
          </time>
          <div className="prose prose-invert mt-12 max-w-none">
            <Content />
          </div>
        </article>
      </Section>
    </main>
  );
}
```

### Pattern 3: MDX Metadata via Exports (NOT frontmatter)

@next/mdx does NOT support YAML frontmatter by default. Use JavaScript exports instead:

```mdx
// content.en.mdx
export const metadata = {
  title: 'Why I prototype in code',
  date: '2026-03-22',
  excerpt: 'A Product Manager who prototypes in code makes different decisions.',
  locale: 'en',
}

Most PMs don't write code. That's fine...
```

```mdx
// content.it.mdx
export const metadata = {
  title: 'Perche prototipo in codice',
  date: '2026-03-22',
  excerpt: 'Un Product Manager che prototipa in codice prende decisioni diverse.',
  locale: 'it',
}

La maggior parte dei PM non scrive codice...
```

This pattern is officially documented by Next.js and avoids the need for remark-frontmatter or gray-matter.

### Pattern 4: PageCTA Component

```typescript
// src/components/sections/page-cta.tsx
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';

interface PageCTAProps {
  text: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function PageCTA({ text, primaryCta, secondaryCta }: PageCTAProps) {
  return (
    <Section>
      <div className="mt-[80px]">
        <p className="mb-8 text-base leading-[1.7] text-primary">{text}</p>
        <div className="flex gap-4">
          <Button variant="primary" href={primaryCta.href}>
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button variant="secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
```

### Pattern 5: @tailwindcss/typography Dark Mode Customization

For the dark design system, prose-invert provides base dark mode styling. Customize via element modifiers in the wrapper:

```css
/* globals.css */
@plugin "@tailwindcss/typography";
```

```html
<!-- Blog post wrapper -->
<div class="prose prose-invert
  prose-headings:text-[var(--color-text-primary)]
  prose-p:text-[var(--color-text-primary)]
  prose-a:text-[var(--color-text-primary)] prose-a:underline hover:prose-a:text-[var(--color-accent)]
  prose-strong:text-[var(--color-accent)] prose-strong:font-bold
  prose-code:font-mono prose-code:text-sm prose-code:bg-[var(--color-bg-surface)] prose-code:px-1.5 prose-code:py-0.5
  prose-hr:border-[var(--color-border-default)] prose-hr:my-12
  max-w-[720px] leading-[1.7]">
  <Content />
</div>
```

**Important:** `prose-strong:text-accent` applies accent color to all bold text. In this blog post, bold text IS metric numbers and emphasis -- this is correct behavior per the UI-SPEC which states bold inline metrics use accent color. However, review the actual MDX content to ensure no bold text should remain white (text-primary). The blog post uses `---` for section breaks which render as `<hr>` -- these should be styled as subtle dividers.

### Pattern 6: next.config.mjs with MDX (Turbopack compatible)

```javascript
// next.config.mjs
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Turbopack requires string plugin names
      'remark-gfm',
    ],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
```

**Turbopack compatibility note:** When using Turbopack (default in Next.js 16), remark/rehype plugins must be specified as strings, not imported functions. This is documented in the official Next.js MDX guide.

### Pattern 7: mdx-components.tsx (Required)

```typescript
// src/mdx-components.tsx (or project root)
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(): MDXComponents {
  return {};
}
```

This file is REQUIRED by @next/mdx with App Router. Without it, MDX compilation fails. It can be empty initially -- custom component overrides can be added later.

### Anti-Patterns to Avoid

- **Using remark-frontmatter for blog metadata:** Unnecessary complexity. Use MDX `export const metadata = {...}` pattern instead.
- **Creating separate blog post pages with [slug] dynamic routing:** For 1 blog post, a static route (`/blog/why-i-prototype-in-code/page.tsx`) is simpler than dynamic `[slug]/page.tsx`. No generateStaticParams needed for blog slug routing.
- **Making CaseStudyCards clickable:** D-04 explicitly forbids this. No href, no cursor-pointer, no role="link". They are informational containers.
- **Adding availability/CV to any inner page:** MODB-02 violation. Only in Contact section (homepage) and Footer.
- **Importing MDX with different slugs per locale:** D-08 locks single slug. The copy source file shows different IT URL (`/it/blog/perche-prototipo-in-codice`) but this was explicitly overridden by D-08.
- **Using prose-strong for accent on ALL pages:** The accent-on-bold pattern applies ONLY to the blog prose wrapper. For About and Approach pages, bold metrics should use inline spans with accent color, not relying on a prose wrapper.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Blog prose styling | Custom CSS for all HTML elements | @tailwindcss/typography `prose` classes | Handles 20+ HTML elements consistently, tested across browsers |
| MDX compilation | Custom markdown parser | @next/mdx + @mdx-js/loader | Official integration, Server Component compatible, zero client JS |
| Locale-aware content loading | Custom file resolution logic | Dynamic import with template literal `./content.${locale}.mdx` | Built into webpack/turbopack, statically analyzable |
| Blog metadata | YAML frontmatter + parser | MDX `export const metadata` | Native to MDX, no extra dependencies, TypeScript typed |

## Common Pitfalls

### Pitfall 1: Forgetting mdx-components.tsx
**What goes wrong:** @next/mdx silently fails or throws an obscure error without this file.
**Why it happens:** Not documented prominently. Easy to miss.
**How to avoid:** Create `mdx-components.tsx` in src/ root (or project root) with at minimum an empty `useMDXComponents()` export.
**Warning signs:** MDX files not rendering, compilation errors mentioning "useMDXComponents".

### Pitfall 2: Bold Text in Blog vs. Inner Pages
**What goes wrong:** Using prose-invert wrapper on About/Approach pages makes ALL bold text accent-colored, when only metric numbers should be accent.
**Why it happens:** Conflating blog prose styling with regular page content.
**How to avoid:** Blog post uses `prose prose-invert` wrapper. About and Approach pages render bold metrics as `<span className="font-bold text-accent">35%</span>` explicitly in JSX, not via prose classes.
**Warning signs:** Company names in About page appearing in accent color.

### Pitfall 3: Turbopack Plugin String Requirement
**What goes wrong:** Importing remark-gfm as a function and passing to withMDX options crashes Turbopack.
**Why it happens:** Turbopack cannot serialize JavaScript functions to Rust. The official docs specify using string names.
**How to avoid:** Use `remarkPlugins: ['remark-gfm']` not `remarkPlugins: [remarkGfm]`.
**Warning signs:** Build error about non-serializable plugin options.

### Pitfall 4: Dynamic Rendering from Missing setRequestLocale
**What goes wrong:** Inner pages silently become dynamic instead of static.
**Why it happens:** Forgetting `setRequestLocale(locale)` before `getTranslations()`.
**How to avoid:** Every page.tsx and layout.tsx with `await params` must call `setRequestLocale(locale)` first. Every page must export `generateStaticParams`.
**Warning signs:** `next build` shows lambda icons instead of circle icons for routes.

### Pitfall 5: Blog Post Slug Mismatch with Source Copy
**What goes wrong:** Source copy file lists IT URL as `/it/blog/perche-prototipo-in-codice` but D-08 decides single slug `why-i-prototype-in-code` for both languages.
**Why it happens:** Source file was written before the routing decision was made.
**How to avoid:** Follow D-08 (locked decision). Single slug. IT URL is `/it/blog/why-i-prototype-in-code`.
**Warning signs:** Creating separate slug routes per locale.

### Pitfall 6: Copy Verbatim Requirement (COPY-01)
**What goes wrong:** Subtly rewriting, shortening, or "improving" copy during implementation.
**Why it happens:** Natural tendency to edit while coding.
**How to avoid:** Extract copy into i18n message files FIRST as a separate task. Then reference messages in components. Never type copy inline in JSX.
**Warning signs:** Diff between source files and i18n JSON showing textual changes.

## Code Examples

### i18n Message Structure for Inner Pages

```json
{
  "about": {
    "headline": "Better products happen when one person speaks all three languages.",
    "career": {
      "selfrules": {
        "company": "Selfrules (2012-2018)",
        "dates": "2012-2018",
        "text": "A web design studio launched at 25..."
      },
      "flowing": { "company": "...", "dates": "...", "text": "..." },
      "leadsbridge": { "company": "...", "dates": "...", "text": "..." },
      "qubicamf": { "company": "...", "dates": "...", "text": "..." }
    },
    "beliefs": {
      "belief1": { "title": "...", "text": "..." },
      "belief2": { "title": "...", "text": "..." },
      "belief3": { "title": "...", "text": "..." }
    },
    "outside": { "text": "..." },
    "cta": { "text": "...", "primary": "Get in touch" }
  },
  "work": {
    "headline": "How I work, demonstrated.",
    "intro": "Two product stories...",
    "cases": {
      "payments": {
        "title": "A payment system losing transactions every day",
        "tags": "Payments . B2B SaaS . Enterprise",
        "metric": "99.19% success rate . -25% post-release incidents",
        "preview": "Hundreds of centers across 5 countries..."
      },
      "cashless": {
        "title": "...",
        "tags": "...",
        "metric": "...",
        "preview": "...",
        "note": "[DRAFT - final metrics TBD when Amusement Connect is in production]"
      }
    },
    "cta": {
      "text": "These cases tell the how...",
      "primary": "About me",
      "secondary": "Get in touch"
    }
  },
  "lab": { "..." : "..." },
  "approach": { "..." : "..." },
  "blog": {
    "headline": "Notes",
    "emptyState": "Notes come when there's something worth saying. Not for volume.",
    "posts": {
      "why-i-prototype-in-code": {
        "title": "Why I prototype in code",
        "date": "2026-03-22",
        "excerpt": "A Product Manager who prototypes in code makes different decisions."
      }
    }
  }
}
```

### Career Block Rendering (About Page)

```tsx
{/* Single career block */}
<div className="mb-12">
  <h2 className="text-xl font-bold leading-[1.3] text-primary">
    {t('career.selfrules.company')}
  </h2>
  <span className="mt-1 block font-mono text-sm uppercase tracking-wide text-secondary">
    {t('career.selfrules.dates')}
  </span>
  <p className="mt-4 text-base leading-[1.6] text-primary">
    {/* For inline bold metrics, use rich text or manual spans */}
  </p>
</div>
```

**Note on inline bold metrics:** The career and approach text contains inline bold numbers like **35%**, **99%+**, **-25%** that should render in accent color. Options:
1. Use next-intl rich text: `t.rich('career.selfrules.text', { bold: (chunks) => <strong className="font-bold text-accent">{chunks}</strong> })`
2. Split text into segments in the i18n JSON

Option 1 (rich text) is recommended -- it keeps the copy as a single string in the JSON (preserving COPY-01 verbatim requirement) and handles inline formatting declaratively.

### Blog Listing Post Entry

```tsx
<div className="space-y-12">
  {posts.map((post) => (
    <article key={post.slug}>
      <time className="block font-mono text-sm uppercase tracking-wide text-secondary">
        {post.date}
      </time>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-1 block text-xl text-primary transition-colors duration-150 hover:text-accent"
      >
        {post.title}
      </Link>
      <p className="mt-1 text-base text-secondary">
        {post.excerpt}
      </p>
    </article>
  ))}
</div>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `middleware.ts` | `proxy.ts` | Next.js 16 (2025) | Locale routing file renamed |
| `params.locale` sync | `await params` | Next.js 15+ (2024) | params is Promise in page/layout |
| `tailwind.config.ts` plugins | `@plugin` in CSS | Tailwind v4 (2025) | Typography plugin via CSS directive |
| frontmatter YAML in MDX | `export const metadata` | @next/mdx standard | No extra parser needed |
| remark plugins as imports | String names for Turbopack | Next.js 16 (2025) | Turbopack requires serializable config |

## Open Questions

1. **About page inline bold metrics with next-intl rich text**
   - What we know: next-intl supports `t.rich()` for inline formatting. The copy contains bold numbers like **35%** that should be accent-colored.
   - What's unclear: Whether the rich text markup syntax (`<bold>35%</bold>`) in the i18n JSON is considered "modifying" the copy per COPY-01. Strictly, the JSON needs markup tags that don't exist in the source markdown.
   - Recommendation: Use rich text. The tags are technical adaptation (markdown to JSX), same as converting `**` to `<strong>`. This is explicitly allowed per the implementation plan: "L'unica eccezione sono adattamenti tecnici (es. markdown -> JSX)."

2. **CasaHunter links (GitHub, Dashboard)**
   - What we know: The copy says `[GitHub] . [Dashboard live]` with placeholder links.
   - What's unclear: Actual URLs for CasaHunter GitHub repo and live dashboard.
   - Recommendation: Use placeholder `href="#"` with a TODO comment. The implementer or user can fill in actual URLs.

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Not yet configured (greenfield) |
| Config file | none -- Wave 0 must set up |
| Quick run command | `npm run build` (static build catches type errors, missing imports, rendering failures) |
| Full suite command | `npm run build && npx next-lint` |

### Phase Requirements to Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| PAGE-01 | About page renders with all sections | build + manual | `npm run build` (catches compile errors) | N/A |
| PAGE-02 | Work page renders 2 CaseStudyCards | build + manual | `npm run build` | N/A |
| PAGE-03 | Lab page renders CasaHunter expanded + MoneyMind | build + manual | `npm run build` | N/A |
| PAGE-04 | Approach page renders 5 numbered sections | build + manual | `npm run build` | N/A |
| PAGE-05 | Blog listing renders post list | build + manual | `npm run build` | N/A |
| PAGE-06 | Blog post renders MDX with prose styling | build + manual | `npm run build` | N/A |
| COPY-01 | Copy identical to source | manual diff | `diff` source files vs i18n JSON (manual) | N/A |
| MODB-01 | No job seeker framing | manual review | Grep for forbidden phrases | N/A |
| MODB-02 | Availability/CV only in Contact + Footer | manual review | Grep for "CV", "disponibil", "available" in inner page files | N/A |

### Sampling Rate
- **Per task commit:** `npm run build` -- catches TypeScript errors, missing imports, MDX compilation failures
- **Per wave merge:** Full build + visual review of all 6 pages in both locales
- **Phase gate:** `npm run build` succeeds, all 6 pages render in both locales, copy spot-check against source files

### Wave 0 Gaps
- [ ] @next/mdx configuration in next.config.mjs
- [ ] mdx-components.tsx file creation
- [ ] @tailwindcss/typography plugin registration in globals.css (`@plugin "@tailwindcss/typography"`)

## Sources

### Primary (HIGH confidence)
- [Next.js MDX Guide](https://nextjs.org/docs/app/guides/mdx) - Complete @next/mdx setup, frontmatter via exports, Turbopack string plugins, mdx-components.tsx requirement
- [Next.js 16 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16) - proxy.ts, params as Promise
- [Tailwind Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography) - prose-invert, element modifiers, CSS variable customization

### Secondary (MEDIUM confidence)
- [Tailwind CSS Typography v0.5 blog](https://tailwindcss.com/blog/tailwindcss-typography-v0-5) - prose-invert dark mode pattern, element modifier syntax

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Official Next.js docs verified for @next/mdx, @tailwindcss/typography is well-documented
- Architecture: HIGH - Patterns derived from prior phase decisions + official docs. Blog post loading pattern matches official dynamic import example.
- Pitfalls: HIGH - Turbopack string plugins, mdx-components.tsx requirement, and prose styling patterns all from official docs

**Research date:** 2026-03-22
**Valid until:** 2026-04-22 (30 days -- stable ecosystem, no breaking changes expected)
