# Architecture Patterns

**Domain:** Multilingual static personal site (Next.js 16 App Router + next-intl)
**Researched:** 2026-03-22
**Confidence:** HIGH

## Recommended Architecture

Statically rendered Next.js 16 site with locale-based routing, component-driven UI, and file-based content. All pages pre-built at build time via Turbopack. Zero server-side computation at runtime.

### Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| `proxy.ts` | Locale detection, redirect | next-intl routing config |
| `[locale]/layout.tsx` | Root layout: fonts, nav, footer, NextIntlClientProvider | Navbar, Footer, messages JSON |
| `[locale]/page.tsx` + subpages | Page content, metadata | Translation messages, Section components |
| `components/layout/*` | Navbar, Footer, Section wrapper | i18n (useTranslations), Link |
| `components/ui/*` | Button, Card, Tag, etc. | Props only. No global state. No i18n awareness. |
| `components/sections/*` | Homepage sections (Hero, Metrics, etc.) | Translation messages via useTranslations |
| `i18n/messages/*.json` | All translatable strings | next-intl |
| `content/blog/*.mdx` | Blog post content | @next/mdx |
| `lib/fonts.ts` | Font configuration | Root layout |
| `lib/metadata.ts` | SEO helper functions | Page metadata exports |

### Directory Structure (Next.js 16 + next-intl 4.x)

```
src/
  proxy.ts                      # Locale routing (was middleware.ts in Next.js 15)
  app/
    globals.css                  # Tailwind v4 @theme tokens, @plugin
    layout.tsx                   # Root: <html>, font variables, Umami script
    [locale]/
      layout.tsx                 # NextIntlClientProvider, Navbar, Footer
      page.tsx                   # Homepage (6 sections)
      about/page.tsx
      work/page.tsx
      lab/page.tsx
      approach/page.tsx
      blog/
        page.tsx                 # Blog listing
        [slug]/page.tsx          # Blog post (loads MDX by locale)
      not-found.tsx              # Localized 404
    sitemap.ts                   # Dynamic sitemap with hreflang
    robots.ts                    # Robots.txt generation
  components/
    layout/
      navbar.tsx                 # Fixed nav, scroll behavior (Client Component)
      mobile-menu.tsx            # Hamburger overlay (Client Component)
      footer.tsx                 # Bio, links, CV download (Server Component)
      section.tsx                # Spacing wrapper: 720px or 1080px max-width
      language-toggle.tsx        # EN/IT switcher (Client Component)
    sections/
      hero.tsx
      how-i-work.tsx
      timeline.tsx
      metrics-grid.tsx
      now-cards.tsx
      contact-section.tsx
    ui/
      button.tsx                 # Primary / secondary variants
      metric-card.tsx
      case-study-card.tsx
      project-card.tsx
      timeline-block.tsx
      tag.tsx                    # Monospace credential tag
      section-label.tsx          # Uppercase tracking-wide label
      scroll-reveal.tsx          # Fade-in on scroll (Client Component)
    seo/
      json-ld.tsx                # JSON-LD structured data renderer
  content/
    blog/
      en/
        why-i-prototype-in-code.mdx
      it/
        why-i-prototype-in-code.mdx
  i18n/
    routing.ts                   # defineRouting config
    request.ts                   # getRequestConfig (message loading)
    navigation.ts                # createNavigation (locale-aware Link, redirect)
  lib/
    blog.ts                      # MDX loading + frontmatter parsing
    metadata.ts                  # Shared generateMetadata helpers
    fonts.ts                     # Inter + JetBrains Mono via next/font
  messages/
    en.json                      # All EN strings (namespaced)
    it.json                      # All IT strings (namespaced)
```

### Data Flow

```
Request -> proxy.ts (locale detection from URL) -> [locale]/layout.tsx
  -> loads messages/{locale}.json via getRequestConfig
  -> wraps children in NextIntlClientProvider
  -> renders Navbar + page content + Footer

Page components (Server Components):
  setRequestLocale(locale) -> getTranslations('namespace') -> render with strings

Client Components (only where needed):
  Navbar (scroll listener), MobileMenu (toggle), LanguageToggle (locale switch)
  -> useTranslations() via NextIntlClientProvider context

Blog:
  /blog/[slug]/page.tsx -> load content/{locale}/{slug}.mdx -> render with prose styles

Metadata:
  Each page exports generateMetadata() -> reads translations -> returns Metadata with hreflang
```

## Patterns to Follow

### Pattern 1: Server-First Components

**What:** Default everything to Server Components. Only add `'use client'` when you need browser APIs (click handlers, state, effects).

**Client Components in this project (exhaustive list):**
- `navbar.tsx` -- scroll listener for background change
- `mobile-menu.tsx` -- toggle state, focus trap
- `language-toggle.tsx` -- locale switch interaction
- `scroll-reveal.tsx` -- IntersectionObserver

Everything else is a Server Component. All page content, all sections, footer, all cards.

### Pattern 2: Namespaced Translation JSON

**What:** Single JSON file per locale, namespaced by page/component.

```json
{
  "nav": {
    "about": "About",
    "work": "Work",
    "lab": "Lab",
    "blog": "Notes",
    "contact": "Let's talk"
  },
  "home": {
    "hero": {
      "headline": "Senior Technical Product Manager...",
      "subtitle": "B2B SaaS..."
    },
    "metrics": {
      "label": "NUMBERS, NOT WORDS"
    }
  }
}
```

**Why:** For ~200-300 keys, one file per locale is simpler than 14 split files. next-intl loads all messages per request anyway (and for static rendering, this happens only at build time).

### Pattern 3: Section Wrapper for Consistent Spacing

**What:** A `<Section>` component enforcing the design system's spacing rules.

```typescript
interface SectionProps {
  children: React.ReactNode;
  wide?: boolean;       // 1080px vs 720px max-width
  className?: string;
}

export function Section({ children, wide, className }: SectionProps) {
  return (
    <section className={cn(
      'py-[clamp(80px,10vw,160px)]',
      'px-[clamp(20px,5vw,80px)]',
      'mx-auto',
      wide ? 'max-w-[1080px]' : 'max-w-[720px]',
      className
    )}>
      {children}
    </section>
  );
}
```

**Why:** Prevents spacing inconsistency. Every section gets the same vertical rhythm.

### Pattern 4: Metadata Helper for i18n SEO

**What:** Shared helper generating consistent metadata with hreflang alternates.

```typescript
// lib/metadata.ts
const baseUrl = 'https://selfrules.org';

export function createPageMetadata(
  locale: string,
  path: string,
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        'en': `${baseUrl}${path}`,
        'it': `${baseUrl}/it${path}`,
        'x-default': `${baseUrl}${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${locale === 'it' ? '/it' : ''}${path}`,
      locale,
      type: 'website',
      siteName: 'selfrules',
    },
  };
}
```

**Why:** DRY. Every page needs the same hreflang + OG pattern. Centralizing prevents mistakes.

### Pattern 5: proxy.ts for next-intl (Next.js 16)

**What:** Next.js 16 renames middleware.ts to proxy.ts. The exported function must be named `proxy`.

```typescript
// src/proxy.ts
import createProxyMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createProxyMiddleware(routing);

export function proxy(request: Request) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(it|en)/:path*']
};
```

**Why:** The file and function rename is a Next.js 16 breaking change. Using the old name silently breaks locale routing.

## Anti-Patterns to Avoid

### Anti-Pattern 1: Client Components for Static Content
**What:** Adding `'use client'` to page components or content sections.
**Why bad:** Ships unnecessary JS. Breaks static rendering. Hurts performance.
**Instead:** Keep all pages as Server Components. Use `getTranslations()` server-side.

### Anti-Pattern 2: Flat Translation Keys
**What:** `t('home_hero_headline')` instead of namespaced `t('hero.headline')`.
**Why bad:** Translation files become unnavigable.
**Instead:** Use namespaces. `getTranslations('home')` then `t('hero.headline')`.

### Anti-Pattern 3: tailwind.config.ts with Tailwind v4
**What:** Creating a JS config file for design tokens.
**Why bad:** Tailwind v4 is CSS-first. JS config creates dual source of truth.
**Instead:** Define everything in `@theme { }` in globals.css.

### Anti-Pattern 4: Dynamic Imports for One Blog Post
**What:** Using `dynamic()` or lazy loading for the single blog post.
**Why bad:** Zero benefit for one page. Adds complexity.
**Instead:** Import MDX directly. Add dynamic loading when post count > 10.

### Anti-Pattern 5: middleware.ts (Next.js 15 pattern)
**What:** Using `middleware.ts` with function named `middleware`.
**Why bad:** Deprecated in Next.js 16. Silently fails -- no locale detection.
**Instead:** Use `proxy.ts` with function named `proxy`.

## Build Order (Dependencies)

```
1. Foundation (no visual output)
   - create-next-app with Next.js 16
   - proxy.ts + i18n routing + request config + navigation
   - messages/en.json + messages/it.json (Nav + Footer first)
   - fonts.ts (Inter + JetBrains Mono)
   - globals.css (@theme with full design system tokens)

2. Shell (navigable skeleton)
   - Root layout (fonts, html lang, Umami script)
   - [locale] layout (NextIntlClientProvider, metadata template)
   - Navbar + MobileMenu + LanguageToggle
   - Footer
   - Section wrapper
   - not-found.tsx

3. UI Primitives
   - Button (primary / secondary)
   - Card (1px border, 0px radius)
   - SectionLabel (uppercase, tracking-wide, monospace)
   - Tag (monospace credential)
   - MetricCard
   - ScrollReveal (IntersectionObserver)

4. Homepage (6 sections, highest priority page)

5. Inner Pages (parallel, no inter-dependencies)
   - About, Work, Lab, Approach
   - Blog listing + post + MDX setup

6. SEO + Polish
   - generateMetadata on all pages
   - JSON-LD (Person, BreadcrumbList)
   - sitemap.ts, robots.ts
   - Scroll animations, a11y audit, Lighthouse
```

**Rationale:** Foundation and Shell must come first because every page depends on i18n routing and layout. UI primitives before pages because pages compose primitives. Homepage first because it establishes the visual language. SEO last because it is additive.

## Sources

- [next-intl App Router setup](https://next-intl.dev/docs/getting-started/app-router)
- [next-intl proxy/middleware docs](https://next-intl.dev/docs/routing/middleware)
- [Next.js 16 proxy.ts convention](https://nextjs.org/docs/app/api-reference/file-conventions/proxy)
- [Tailwind CSS v4 installation for Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
