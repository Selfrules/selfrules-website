# Phase 6: SEO, Polish & Deploy - Research

**Researched:** 2026-03-22
**Domain:** SEO metadata, accessibility, performance optimization, scroll animations, Vercel deployment
**Confidence:** HIGH

## Summary

Phase 6 is a cross-cutting phase that adds SEO metadata, accessibility features, scroll animations, performance optimization, and deployment on top of the visual foundation built in Phases 1-5. No new libraries are needed -- everything uses built-in Next.js APIs (Metadata API, sitemap.ts, robots.ts), native browser APIs (IntersectionObserver, prefers-reduced-motion), and Vercel's deployment platform.

The phase has five distinct work streams: (1) SEO metadata via generateMetadata with hreflang/OG/canonical on every page plus JSON-LD structured data, (2) accessibility features (skip-to-content, focus styles, contrast verification, semantic HTML audit), (3) scroll animations using IntersectionObserver with reduced-motion support, (4) performance verification against Lighthouse 95+ targets, and (5) Vercel deployment with domain configuration. All copy for meta titles/descriptions is already defined in microcopy.md and the UI-SPEC -- implementation is mechanical.

**Primary recommendation:** Implement in dependency order: accessibility + SEO metadata first (foundational, no visual impact), then animations (adds visual layer), then performance audit + optimization (measure what's built), then deploy (ship it).

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Animazione fade-in solo a livello di sezione. Ogni section component fa fade-in quando entra in viewport. Hero section senza animazione (gia' visibile al caricamento). Nessuno stagger su card individuali.
- **D-02:** Stile fade-up: opacita' 0->1 + translate-y 20-30px verso l'alto, ~600ms ease-out. Classico, elegante, coerente con il design editoriale.
- **D-03:** Trigger a 10-15% visibilita' -- la sezione inizia il fade-in appena il bordo superiore entra nel 85-90% inferiore della viewport. L'utente vede l'animazione senza aspettare.
- **D-04:** prefers-reduced-motion disabilita tutte le animazioni (A11Y-05). Nessun movimento, contenuto visibile immediatamente.
- **D-05:** Formato meta title: "Page -- Mattia De Luca" per tutte le inner pages. Homepage: "Mattia De Luca -- Product Manager". Versione IT: stessi titoli pagina localizzati.
- **D-06:** Un'unica OG image statica 1200x630 usata come fallback per tutte le pagine in v1. OG image dinamiche per pagina rimandate a v2 (VIS-02).
- **D-07:** Meta description copiate esattamente da microcopy.md (IT e EN). Nessuna riscrittura -- coerente con COPY-01.
- **D-08:** Person schema essenziale: name, jobTitle, url, sameAs (LinkedIn, GitHub). Presente nella homepage e/o About page.
- **D-09:** BreadcrumbList su tutte le inner pages. Struttura: Home > Page Name. Solo nel JSON-LD, nessun breadcrumb visivo nell'UI.
- **D-10:** Article schema (BlogPosting) per il blog post: headline, datePublished, author (link al Person), description.
- **D-11:** Deploy diretto su Vercel -- collegare il repo, configurare dominio selfrules.org.
- **D-12:** Nessun redirect da vecchi URL necessario.
- **D-13:** www.selfrules.org -> selfrules.org redirect configurato in Vercel (DEPL-03).

### Claude's Discretion
- OG image statica: Claude decide il design (tipografia dark su sfondo scuro, nome + tagline, coerente col design language del sito)
- Accessibility audit: Claude decide approccio e tool (axe-core, Lighthouse, manual checks) per raggiungere i target
- Performance optimization: Claude ottimizza bundle size e CWV secondo i target (PERF-01 through PERF-06)
- Smooth scroll implementation per anchor links (#contact) -- PLSH-02
- Active state nav links styling -- PLSH-03
- Layout shift prevention (CLS < 0.05) -- PLSH-04
- SEO-07 (html lang attribute) -- implementazione tecnica standard

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| SEO-01 | Meta title + description per page from source files | generateMetadata with title template pattern; copy from UI-SPEC tables |
| SEO-02 | Open Graph tags per page | openGraph in Metadata object; static OG image at public/og-image.png |
| SEO-03 | Canonical URLs per page | alternates.canonical in generateMetadata; metadataBase for URL composition |
| SEO-04 | hreflang alternate tags bidirectional + x-default | alternates.languages with 'x-default' key -- verified supported |
| SEO-05 | JSON-LD: Person schema + BreadcrumbList | Manual script tag in page components; BlogPosting for blog post |
| SEO-06 | sitemap.xml and robots.txt generated | app/sitemap.ts with alternates.languages; app/robots.ts |
| SEO-07 | Correct html lang attribute | Set via locale param in root layout; next-intl handles this |
| PERF-01 | Lighthouse Performance >= 95 | Static site + next/font + minimal JS = achievable |
| PERF-02 | Lighthouse Accessibility >= 95 | Focus styles, skip-to-content, semantic HTML, contrast |
| PERF-03 | Lighthouse Best Practices >= 95 | HTTPS, no mixed content, no deprecated APIs |
| PERF-04 | Lighthouse SEO >= 95 | All meta tags, sitemap, robots.txt, structured data |
| PERF-05 | Bundle size < 100KB first load JS | Server Components default; only 4 Client Components |
| PERF-06 | Core Web Vitals: LCP < 2.5s, CLS < 0.1 | next/font prevents CLS; static rendering ensures fast LCP |
| A11Y-01 | Skip-to-content link | Hidden link visible on focus, targets #main-content |
| A11Y-02 | Visible focus styles on all interactive elements | :focus-visible with 2px accent outline |
| A11Y-03 | WCAG AA color contrast for all text | Verified in PITFALLS.md: #8A8A8E passes AA, #5A5A5E fails |
| A11Y-04 | Semantic HTML throughout | header, nav, main, article, footer, section with aria-label |
| A11Y-05 | prefers-reduced-motion respected | CSS media query disables all animations |
| PLSH-01 | Scroll-triggered fade-in animations | IntersectionObserver, threshold 0.1, 600ms ease-out |
| PLSH-02 | Smooth scroll for anchor links | CSS scroll-behavior: smooth on html |
| PLSH-03 | Active state in nav links | Accent text color on current page link |
| PLSH-04 | No layout shift on page load (CLS < 0.05) | next/font, explicit dimensions, no dynamic injection above fold |
| DEPL-01 | Deployed on Vercel with production build | vercel --prod or git push to connected repo |
| DEPL-02 | selfrules.org domain configured with HTTPS | Vercel domain settings, automatic HTTPS |
| DEPL-03 | www -> non-www redirect | Vercel domain redirect configuration |
</phase_requirements>

## Standard Stack

### Core (all built-in -- no new dependencies)

| Technology | Version | Purpose | Why Standard |
|------------|---------|---------|--------------|
| Next.js Metadata API | built-in (16.2.x) | Meta tags, OG, hreflang, canonical | generateMetadata + metadata exports. Handles merging across nested layouts. |
| Next.js sitemap.ts | built-in | Sitemap with hreflang alternates | Convention-based file. Supports alternates.languages for multilingual sitemap. |
| Next.js robots.ts | built-in | Robots.txt generation | Convention-based. MetadataRoute.Robots type. |
| IntersectionObserver | browser API | Scroll-triggered animations | Native, zero JS overhead, supported everywhere. |
| Vercel CLI | 50.32.5 (installed) | Deployment | Native Next.js platform. Zero config. |

### No New Dependencies Required

This phase adds zero new npm packages. Everything uses:
- Built-in Next.js APIs (Metadata, sitemap.ts, robots.ts)
- Native browser APIs (IntersectionObserver, prefers-reduced-motion, scroll-behavior)
- CSS features (keyframes, media queries, :focus-visible)
- Vercel platform features (domain config, HTTPS, redirects)

## Architecture Patterns

### Pattern 1: Metadata Helper with metadataBase

**What:** Centralized helper for consistent metadata generation across all pages.
**When to use:** Every page's generateMetadata function.

```typescript
// src/lib/metadata.ts
// Source: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
import type { Metadata } from 'next';

const baseUrl = 'https://selfrules.org';

export function createPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string;
  path: string;  // e.g., '/about', '/' for homepage
  title: string;
  description: string;
}): Metadata {
  const enUrl = `${baseUrl}${path === '/' ? '' : path}`;
  const itUrl = `${baseUrl}/it${path === '/' ? '' : path}`;
  const currentUrl = locale === 'it' ? itUrl : enUrl;

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': enUrl,
        'it': itUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: 'selfrules',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      images: [{ url: `${baseUrl}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}
```

**Key insight:** Use `metadataBase` in root layout to simplify URL composition. Set `metadataBase: new URL('https://selfrules.org')` in `app/[locale]/layout.tsx` so relative paths resolve correctly.

### Pattern 2: Title Template in Layout

**What:** Next.js supports title.template in layouts to auto-append site name.
**When to use:** Root locale layout.

```typescript
// src/app/[locale]/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://selfrules.org'),
  title: {
    template: '%s — Mattia De Luca',
    default: 'Mattia De Luca — Senior Technical Product Manager | B2B SaaS . Payments',
  },
};
```

**IMPORTANT:** title.template applies to CHILD segments only, not the segment where it is defined. The homepage uses `title.absolute` or the `default` value. Inner pages just set `title: 'About'` and get "About -- Mattia De Luca" automatically.

**CAVEAT for i18n:** The title template contains the author name which is locale-independent. But meta descriptions differ per locale. Each page must use `generateMetadata` (not static `metadata`) to read the locale and return the correct localized copy. The title template approach works only if the template string is identical across locales. Since "Page -- Mattia De Luca" is the same in both IT and EN (per D-05), the template CAN be used.

### Pattern 3: Multilingual Sitemap

**What:** sitemap.ts that generates entries for all pages in both locales with hreflang.
**Source:** https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

```typescript
// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

const baseUrl = 'https://selfrules.org';

const pages = ['', '/about', '/work', '/lab', '/approach', '/blog', '/blog/why-i-prototype-in-code'];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) => [
    {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}${path}`,
          it: `${baseUrl}/it${path}`,
        },
      },
    },
    {
      url: `${baseUrl}/it${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}${path}`,
          it: `${baseUrl}/it${path}`,
        },
      },
    },
  ]);
}
```

**Key insight:** Each URL must appear as its own entry with alternates pointing to both language versions. The EN and IT versions each get their own `<url>` block.

### Pattern 4: ScrollReveal Client Component

**What:** Lightweight wrapper that applies fade-up animation via IntersectionObserver.
**Source:** 06-UI-SPEC.md animation contract

```typescript
// src/components/ui/scroll-reveal.tsx
'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.remove('animate-fade-up-initial');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('animate-fade-up-initial');
          el.classList.add('animate-fade-up');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="animate-fade-up-initial">
      {children}
    </div>
  );
}
```

**Key insight:** The CSS handles prefers-reduced-motion as a fallback, but the JS also checks it to avoid creating observers unnecessarily. Hero section does NOT use this wrapper.

### Pattern 5: JSON-LD Component

**What:** Reusable component for rendering JSON-LD structured data.

```typescript
// src/components/seo/json-ld.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

Usage for Person, BreadcrumbList, and BlogPosting schemas is documented in the UI-SPEC with exact JSON structures.

### Pattern 6: robots.ts

**Source:** https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

```typescript
// src/app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://selfrules.org/sitemap.xml',
  };
}
```

### Anti-Patterns to Avoid

- **Overwriting OG in child pages without spreading parent:** Next.js metadata merging is shallow. If a child defines `openGraph`, it replaces ALL parent OG fields. Each page's generateMetadata must include the full OG object.
- **Using static metadata export with i18n:** Pages that need localized meta descriptions MUST use `generateMetadata` function (not `export const metadata`), because the locale comes from params which is a Promise.
- **Forgetting `await params` in generateMetadata:** In Next.js 16, params is a Promise. Must `const { locale } = await params;` before using locale.
- **Putting sitemap.ts inside [locale] folder:** sitemap.ts goes in `src/app/sitemap.ts` (outside the locale segment). It generates ALL URLs for all locales.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Meta tags | Custom head manipulation | Next.js Metadata API (generateMetadata) | Handles deduplication, merging, streaming. Proven at scale. |
| Sitemap generation | Manual XML file | sitemap.ts convention | Type-safe, auto-cached, supports alternates natively. |
| Robots.txt | Static file | robots.ts convention | Programmatic, type-safe, co-located with app. |
| OG image generation | Canvas/ImageMagick at build time | Static PNG file in public/ | For v1, one static image. Dynamic OG is v2 (VIS-02). |
| Scroll animation library | Custom animation system | Single ScrollReveal component + CSS keyframes | One animation pattern. 20 lines of code total. |
| Focus management library | focus-trap-react or similar | CSS :focus-visible + native browser behavior | Only need visible focus outlines, not complex focus trapping (mobile menu already handled in Phase 2). |

## Common Pitfalls

### Pitfall 1: Metadata Shallow Merging Overwrites OG Image
**What goes wrong:** A page defines `openGraph: { title: 'About' }` in generateMetadata. This REPLACES the entire parent openGraph object, including the og:image defined in the layout.
**Why it happens:** Next.js metadata merging is shallow, not deep.
**How to avoid:** Every page's generateMetadata must return the complete openGraph object including images, or use a shared helper (createPageMetadata) that always includes the OG image.
**Warning signs:** OG debugger shows no image for inner pages.

### Pitfall 2: x-default hreflang Missing
**What goes wrong:** Without x-default, Google doesn't know which language to show users in non-targeted regions.
**Why it happens:** Developers add 'en' and 'it' but forget 'x-default'.
**How to avoid:** Include `'x-default': enUrl` in every alternates.languages object. The createPageMetadata helper handles this automatically.
**Warning signs:** Google Search Console shows hreflang issues.

### Pitfall 3: Sitemap Duplicating URLs Without Alternates
**What goes wrong:** Sitemap lists EN and IT URLs but without `<xhtml:link rel="alternate">` connecting them. Google treats them as separate unrelated pages.
**Why it happens:** Using simple URL arrays instead of the alternates.languages structure.
**How to avoid:** Every sitemap entry must include alternates.languages pointing to both language versions.

### Pitfall 4: IntersectionObserver Fires on SSR
**What goes wrong:** IntersectionObserver code runs during server-side rendering, causing "IntersectionObserver is not defined" error.
**Why it happens:** ScrollReveal is a Client Component, but the effect runs immediately.
**How to avoid:** Use useEffect (not useMemo or module-level code). useEffect only runs client-side.

### Pitfall 5: Animation Flicker on Page Load
**What goes wrong:** Sections briefly appear (opacity: 1) then snap to opacity: 0 before the IntersectionObserver kicks in.
**Why it happens:** CSS loads after initial HTML render, or the initial class isn't applied.
**How to avoid:** Apply `animate-fade-up-initial` (opacity: 0) as a className directly on the element, not via JS. The CSS class is present from the first render.

### Pitfall 6: Secondary Text Color Contrast Failure
**What goes wrong:** #8A8A8E on #0A0A0B is 4.9:1 -- passes AA for normal text (4.5:1 minimum). But #5A5A5E on #0A0A0B is only 2.4:1 -- FAILS AA.
**Why it happens:** Designers test visually, not numerically.
**How to avoid:** Use text-tertiary (#5A5A5E) ONLY for decorative or large text (18px+). All body text must use text-secondary (#8A8A8E) or text-primary (#F5F5F0).
**Warning signs:** Lighthouse accessibility score drops below 95.

### Pitfall 7: Blog Post Missing datePublished in BlogPosting Schema
**What goes wrong:** Google ignores BlogPosting schema without datePublished.
**Why it happens:** MDX frontmatter might not be connected to the JSON-LD output.
**How to avoid:** Ensure blog post page reads the date from frontmatter and passes it to the BlogPosting JSON-LD component.

## Code Examples

### generateMetadata for an Inner Page

```typescript
// Source: Next.js official docs + project UI-SPEC
// src/app/[locale]/about/page.tsx
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return createPageMetadata({
    locale,
    path: '/about',
    title: t('about.title'),       // "About" or "Chi sono"
    description: t('about.description'),
  });
}
```

### Skip-to-Content Link

```typescript
// In root locale layout, before Navbar
// Source: 06-UI-SPEC.md
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-bg-primary focus:px-4 focus:py-2 focus:font-bold focus:text-sm"
>
  {t('skipToContent')}
</a>

// On main element:
<main id="main-content">
  {children}
</main>
```

### Global Focus Styles + Animation CSS

```css
/* In globals.css */
/* Source: 06-UI-SPEC.md */

/* Focus styles */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Scroll animations */
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 600ms ease-out forwards;
}

.animate-fade-up-initial {
  opacity: 0;
  transform: translateY(24px);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .animate-fade-up-initial {
    opacity: 1;
    transform: none;
  }
  .animate-fade-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

### Active Nav Link Detection

```typescript
// In navbar component (Client Component)
'use client';
import { usePathname } from 'next/navigation';

// Inside component:
const pathname = usePathname();
const isActive = (href: string) => {
  // Strip locale prefix for comparison
  const cleanPath = pathname.replace(/^\/(it)/, '') || '/';
  return cleanPath === href;
};

// In link rendering:
<Link
  href={item.href}
  className={isActive(item.href) ? 'text-accent' : 'text-secondary hover:text-primary transition-colors duration-150'}
>
  {item.label}
</Link>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| next-seo library | Next.js Metadata API | Next.js 13.2+ | No external library needed for SEO |
| middleware.ts | proxy.ts | Next.js 16.0 | File and function rename required |
| Static robots.txt file | robots.ts convention | Next.js 13.3+ | Programmatic, type-safe |
| Manual sitemap XML | sitemap.ts with alternates | Next.js 14.2+ | Native hreflang support in sitemap |
| Framer Motion for animations | Native IntersectionObserver | Always available | Zero bundle cost for simple fade-in |
| :focus with custom outline | :focus-visible | Modern browsers | Only shows outlines on keyboard nav |

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Build + dev | Yes | v25.8.1 | -- |
| npm | Package management | Yes | 11.11.0 | -- |
| Vercel CLI | Deployment | Yes | 50.32.5 | -- |
| Vercel Platform | Hosting + domain | Yes (account needed) | -- | -- |

**Missing dependencies with no fallback:** None.
**Missing dependencies with fallback:** None.

Note: Vercel account and domain ownership for selfrules.org are assumed to be available. These are external service dependencies that cannot be verified programmatically.

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Lighthouse CI + manual browser checks |
| Config file | none -- see Wave 0 |
| Quick run command | `npx next build && npx next start` then Lighthouse in DevTools |
| Full suite command | `npx @lhci/cli autorun` (if configured) or manual Lighthouse audit |

### Phase Requirements -> Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| SEO-01 | Meta title + description per page | manual | Inspect `<head>` in browser DevTools per page | -- Wave 0 |
| SEO-02 | OG tags per page | manual | Facebook OG debugger or `curl -s URL \| grep og:` | -- Wave 0 |
| SEO-03 | Canonical URLs | manual | Inspect `<link rel="canonical">` per page | -- Wave 0 |
| SEO-04 | hreflang alternates | manual | Inspect `<link rel="alternate" hreflang>` per page | -- Wave 0 |
| SEO-05 | JSON-LD structured data | manual | Google Rich Results Test or inspect script tags | -- Wave 0 |
| SEO-06 | sitemap.xml and robots.txt | smoke | `curl https://selfrules.org/sitemap.xml` and `/robots.txt` | -- Wave 0 |
| SEO-07 | html lang attribute | manual | Inspect `<html lang>` on EN and IT pages | -- Wave 0 |
| PERF-01 | Lighthouse Performance >= 95 | manual | Lighthouse in Chrome DevTools | -- Wave 0 |
| PERF-02 | Lighthouse Accessibility >= 95 | manual | Lighthouse in Chrome DevTools | -- Wave 0 |
| PERF-03 | Lighthouse Best Practices >= 95 | manual | Lighthouse in Chrome DevTools | -- Wave 0 |
| PERF-04 | Lighthouse SEO >= 95 | manual | Lighthouse in Chrome DevTools | -- Wave 0 |
| PERF-05 | Bundle size < 100KB | smoke | `npx next build` -- check output table | -- Wave 0 |
| PERF-06 | LCP < 2.5s, CLS < 0.1 | manual | Lighthouse or Web Vitals extension | -- Wave 0 |
| A11Y-01 | Skip-to-content link | manual | Tab on page load, verify link appears | -- Wave 0 |
| A11Y-02 | Visible focus styles | manual | Tab through all interactive elements | -- Wave 0 |
| A11Y-03 | WCAG AA contrast | manual | Lighthouse accessibility audit | -- Wave 0 |
| A11Y-04 | Semantic HTML | manual | Inspect DOM structure | -- Wave 0 |
| A11Y-05 | prefers-reduced-motion | manual | Toggle in DevTools, verify no animations | -- Wave 0 |
| PLSH-01 | Fade-in animations | manual | Scroll through pages, observe animations | -- Wave 0 |
| PLSH-02 | Smooth scroll | manual | Click anchor link, observe scroll behavior | -- Wave 0 |
| PLSH-03 | Active nav link | manual | Navigate pages, verify accent color on current link | -- Wave 0 |
| PLSH-04 | No layout shift | smoke | `npx next build` + Lighthouse CLS measurement | -- Wave 0 |
| DEPL-01 | Deployed on Vercel | smoke | `curl -I https://selfrules.org` returns 200 | -- Wave 0 |
| DEPL-02 | HTTPS active | smoke | `curl -I https://selfrules.org` shows HTTPS | -- Wave 0 |
| DEPL-03 | www redirect | smoke | `curl -I https://www.selfrules.org` returns 301/308 | -- Wave 0 |

### Sampling Rate
- **Per task commit:** `npx next build` (verify build succeeds, check bundle size)
- **Per wave merge:** Full Lighthouse audit on local preview
- **Phase gate:** All Lighthouse scores >= 95, all manual checks pass, site live on selfrules.org

### Wave 0 Gaps
- This phase is primarily manual verification (Lighthouse, browser inspection)
- No automated test suite needed -- the "tests" ARE the Lighthouse scores and manual checks
- Build command (`npx next build`) serves as the smoke test for bundle size (PERF-05)

## Open Questions

1. **Vercel project and domain ownership**
   - What we know: Vercel CLI is installed, user has Vercel account
   - What's unclear: Whether selfrules.org domain is already connected to an existing Vercel project (the old site)
   - Recommendation: During deploy, check existing Vercel project config first. May need to update existing project rather than create new one.

2. **OG image static file creation**
   - What we know: 1200x630 PNG, dark bg, name + tagline per UI-SPEC
   - What's unclear: How to create the PNG programmatically without a design tool
   - Recommendation: Use Next.js ImageResponse API at build time to generate the PNG, or create it manually in Figma and export to public/og-image.png. Since it's a one-time static file, manual creation is acceptable.

## Project Constraints (from CLAUDE.md)

- **Stack:** Next.js 16.2 (App Router, Turbopack), TypeScript, Tailwind CSS v4 (CSS-first), next-intl 4.8.x, Vercel
- **Routing:** proxy.ts (not middleware.ts), localePrefix: 'as-needed', localeDetection: false
- **Copy:** DEFINITIVO -- copiare esattamente dai file sorgente, nessuna riscrittura
- **Design:** 0px border-radius everywhere, palette #0A0A0B/#F5F5F0/#E8A838, Inter + JetBrains Mono
- **Modello B:** Never job-seeker framing. CV/availability only in Contact and Footer.
- **What NOT to use:** next-seo, middleware.ts, Framer Motion, next-themes, tailwind.config.ts, @vercel/analytics

## Sources

### Primary (HIGH confidence)
- [Next.js generateMetadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) -- metadataBase, alternates, openGraph, title template
- [Next.js sitemap.ts](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) -- localized sitemap with alternates.languages
- [Next.js robots.ts](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots) -- MetadataRoute.Robots type
- [x-default hreflang support](https://github.com/vercel/next.js/discussions/76729) -- confirmed supported via 'x-default' key in languages object

### Secondary (MEDIUM confidence)
- [Vercel domain configuration](https://vercel.com/docs/domains/working-with-domains) -- www redirect, HTTPS, domain settings
- [Build with Matija - hreflang in Next.js 16](https://www.buildwithmatija.com/blog/nextjs-advanced-seo-multilingual-canonical-tags)

### Tertiary (LOW confidence)
- None

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- all built-in Next.js APIs, verified against official docs v16.2.1
- Architecture: HIGH -- patterns from STACK.md and ARCHITECTURE.md, verified with official docs
- Pitfalls: HIGH -- documented in PITFALLS.md and verified against current API behavior
- SEO patterns: HIGH -- verified generateMetadata, sitemap.ts, robots.ts against official Next.js docs
- Deployment: MEDIUM -- Vercel CLI available, but domain ownership/existing project status unverified

**Research date:** 2026-03-22
**Valid until:** 2026-04-22 (stable APIs, 30-day window)
