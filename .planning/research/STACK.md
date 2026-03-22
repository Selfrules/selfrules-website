# Technology Stack

**Project:** selfrules-website
**Researched:** 2026-03-22
**Overall confidence:** HIGH

## Critical Decision: Next.js 16, Not 15

The PROJECT.md specifies "Next.js 15" but `create-next-app@latest` now installs **Next.js 16.2** (released March 18, 2026). Since this is a greenfield project with zero legacy code, use Next.js 16. Reasons:

1. **Next.js 15 is already one major version behind.** Starting on 15 means an immediate upgrade debt.
2. **Turbopack is stable and default in 16.** Dev startup is ~400% faster, rendering ~50% faster.
3. **next-intl 4.x supports Next.js 16** with a trivial change (middleware.ts -> proxy.ts, function rename).
4. **The only breaking change that affects this project** is the middleware-to-proxy rename, which next-intl documents explicitly.

**Confidence: HIGH** -- Verified via official Next.js blog, next-intl docs, and multiple migration guides.

---

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js | 16.2.x | Framework | Current stable. App Router, Turbopack default, static export support. Greenfield = no reason to start on 15. |
| React | 19.x | UI library | Ships with Next.js 16. Server Components are default. |
| TypeScript | 5.x | Type safety | Ships with create-next-app. Strict mode enabled by default. |

### Styling

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Tailwind CSS | 4.x | Utility CSS | Ships with create-next-app. v4 is CSS-first config (no tailwind.config.ts needed for basics). 5x faster full builds, 100x faster incremental. |
| @tailwindcss/typography | latest (v4-compatible) | Prose styling for blog | Official first-party plugin. In v4: add via `@plugin "@tailwindcss/typography"` in CSS, not JS config. |

### Internationalization

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| next-intl | 4.8.x | i18n routing + translations | De facto standard for Next.js App Router i18n. Server Component native, supports static rendering, ICU message format. |

### Fonts

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| next/font/google | (built-in) | Font loading | Zero-layout-shift font loading. Self-hosts Google Fonts at build time. No external requests at runtime. |
| Inter | variable | Body text | Variable font = single file for all weights (400-700). Matched x-height with JetBrains Mono. |
| JetBrains Mono | variable | Code/labels/metrics | Variable font. 8 weights available. Designed for screen readability. |

### Content

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| @next/mdx | latest | Blog content | Official Next.js MDX integration. Server-rendered, no client JS shipped. Import .mdx files directly as pages. Better maintained than next-mdx-remote (which is semi-abandoned). |
| remark-gfm | latest | MDX plugin | GitHub Flavored Markdown tables, strikethrough, task lists. |
| rehype-pretty-code | latest | Syntax highlighting | Uses Shiki under the hood. Server-side rendering, zero client JS. Better than Prism for modern setups. |

### SEO

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js Metadata API | (built-in) | Meta tags, OG, hreflang | generateMetadata + metadata exports. Handles merging across nested layouts automatically. |
| Next.js sitemap.ts | (built-in) | Sitemap generation | Convention-based file in app directory. No external library needed. |
| Next.js robots.ts | (built-in) | Robots.txt | Convention-based. No external library needed. |
| JSON-LD (manual) | -- | Structured data | Render a `<script type="application/ld+json">` in page components. No library needed for Person + BreadcrumbList schemas. |

### Analytics

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Umami Cloud | latest | Privacy-first analytics | Cookieless, no consent banner needed. GDPR compliant by design. Cloud plan has a free tier (10K pageviews/month -- more than enough for a personal site). |

### Deployment

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Vercel | -- | Hosting + CI/CD | Native Next.js platform. Zero config deployment. Auto preview deploys on PRs. Free tier covers personal sites. |

---

## Stack Details and Patterns

### Tailwind CSS v4: No Config File

Tailwind v4 is CSS-first. Custom design tokens go in `globals.css`, not a JS config file:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-bg-primary: #0A0A0B;
  --color-bg-surface: #111113;
  --color-bg-hover: #1A1A1F;
  --color-border-default: #1A1A1F;
  --color-border-accent: #E8A838;
  --color-text-primary: #F5F5F0;
  --color-text-secondary: #8A8A8E;
  --color-text-tertiary: #5A5A5E;
  --color-accent: #E8A838;
  --color-accent-hover: #D4962F;

  --font-sans: var(--font-inter);
  --font-mono: var(--font-jetbrains-mono);
}
```

This replaces the entire `tailwind.config.ts` for this project's needs. Tailwind v4 auto-scans the project for utility classes -- no `content` paths needed.

**Confidence: HIGH** -- Verified via Tailwind v4 official docs and upgrade guide.

### next-intl with Next.js 16: proxy.ts Pattern

The critical change: Next.js 16 renames `middleware.ts` to `proxy.ts` and the exported function from `middleware` to `proxy`:

```typescript
// src/proxy.ts (NOT middleware.ts)
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

// Next.js 16 requires the function name 'proxy'
export { default as proxy } from './proxy';

export const config = {
  matcher: ['/', '/(it|en)/:path*']
};
```

Routing config remains the same:

```typescript
// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'it'],
  defaultLocale: 'en',
  localePrefix: 'as-needed' // EN = no prefix, IT = /it
});
```

Static rendering requires `generateStaticParams` in `[locale]/layout.tsx`:

```typescript
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
```

**Confidence: HIGH** -- Verified via next-intl docs and Next.js 16 migration guide.

### next/font: Variable Font Setup

```typescript
// src/lib/fonts.ts
import { Inter, JetBrains_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});
```

Apply in root layout via className: `${inter.variable} ${jetbrainsMono.variable}`. Then reference in Tailwind v4's `@theme` block as `--font-sans: var(--font-inter)`.

**Confidence: HIGH** -- Standard pattern, verified via Vercel Academy docs.

### @next/mdx for Blog

Use `@next/mdx` (official package) instead of `next-mdx-remote`. Reasons:
- `next-mdx-remote` is poorly maintained as of 2025
- `@next/mdx` is server-rendered by default, no client JS
- MDX files can be imported directly or used as pages

For a single blog post in v1, the simplest approach is a `.mdx` file under the blog route:

```
src/app/[locale]/blog/why-i-prototype-in-code/page.mdx
```

Or for more control (metadata, i18n), keep `.mdx` as content files and import them in a page.tsx wrapper.

**Confidence: HIGH** -- Verified via official Next.js MDX guide.

### SEO: generateMetadata Pattern

```typescript
// Per-page metadata with i18n
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: `https://selfrules.org/about`,
      languages: {
        'en': '/about',
        'it': '/it/about',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      locale: locale,
      type: 'website',
    },
  };
}
```

JSON-LD as a server component (no library needed):

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mattia De Luca',
      url: 'https://selfrules.org',
      jobTitle: 'Senior Technical Product Manager',
    }),
  }}
/>
```

**Confidence: HIGH** -- Standard Next.js Metadata API, verified via official docs.

### Umami Integration

Use Umami Cloud (free tier). Add the tracking script via `next/script` in the root layout:

```typescript
import Script from 'next/script';

<Script
  src="https://cloud.umami.is/script.js"
  data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
  strategy="afterInteractive"
/>
```

**Ad blocker workaround** (optional, recommended): Proxy the script through Next.js rewrites in `next.config.ts`:

```typescript
async rewrites() {
  return [
    {
      source: '/stats/:path*',
      destination: 'https://cloud.umami.is/:path*',
    },
  ];
}
```

Then use `src="/stats/script.js"` instead. This prevents ad blockers from blocking the analytics script.

**Confidence: MEDIUM** -- Umami Cloud setup verified, proxy pattern from community guides.

### Scroll Animations: No Library

Use native `IntersectionObserver` with a custom hook. No Framer Motion, no external animation libraries. Reasons:
- One animation pattern (fade-in on scroll) does not justify a 30KB+ library
- Native IntersectionObserver is supported everywhere
- Must respect `prefers-reduced-motion`

```typescript
// Custom hook pattern
function useFadeIn() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}
```

**Confidence: HIGH** -- Standard browser API, no verification needed.

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework version | Next.js 16.2 | Next.js 15.x | 15 is already behind. Greenfield = no reason for old version. |
| i18n | next-intl | next-translate, react-i18next | next-intl is the App Router standard. Others have worse RSC support. |
| Styling | Tailwind v4 | CSS Modules, styled-components | Tailwind is already decided. v4 is current. |
| MDX | @next/mdx | next-mdx-remote, Contentlayer | next-mdx-remote poorly maintained. Contentlayer abandoned. @next/mdx is official. |
| Typography | @tailwindcss/typography | Custom prose CSS | Official plugin, well-maintained, saves time for blog styling. |
| Animations | Native IntersectionObserver | Framer Motion, GSAP | Overkill for fade-in only. Adds 30KB+ for one animation. |
| Analytics | Umami Cloud | Plausible, Fathom | Umami is free, cookieless, self-hostable if needed later. Already decided. |
| Fonts | next/font/google | Self-hosted @font-face | next/font handles self-hosting automatically at build time. Zero config. |
| JSON-LD | Manual script tag | next-seo, schema-dts | Only 2 simple schemas (Person, BreadcrumbList). No library needed. |
| CMS | None (MDX files) | Sanity, Contentful, Notion | One blog post in v1. CMS is out of scope per requirements. |

---

## What NOT to Use

| Technology | Why Not |
|------------|---------|
| `next-mdx-remote` | Poorly maintained as of 2025. Use `@next/mdx` instead. |
| `Contentlayer` | Abandoned/unmaintained. Was popular but project is dead. |
| `next-seo` | Redundant. Next.js Metadata API does everything next-seo did, natively. |
| `tailwind.config.ts` | Tailwind v4 is CSS-first. Use `@theme` in globals.css instead. |
| `Framer Motion` | 30KB+ for one fade-in animation. Use native IntersectionObserver. |
| `next-themes` | No light mode in v1. Dark-only = just set class on html element. |
| `middleware.ts` | Deprecated in Next.js 16. Use `proxy.ts` with function named `proxy`. |
| `react-helmet` / `next-head` | Legacy patterns. Use Metadata API (generateMetadata / metadata export). |
| `@vercel/analytics` | Adds Vercel-specific tracking. Umami is the chosen analytics tool. |
| `styled-components` / `emotion` | Runtime CSS-in-JS is dead in RSC world. Tailwind is the choice. |

---

## Installation

```bash
# Create project (Next.js 16.2, TypeScript, Tailwind v4, App Router, Turbopack)
npx create-next-app@latest selfrules-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Core dependencies
npm install next-intl @next/mdx @mdx-js/loader @mdx-js/react

# MDX plugins (optional, for blog post formatting)
npm install remark-gfm rehype-pretty-code shiki

# Dev dependencies
npm install -D @tailwindcss/typography @types/mdx
```

No other dependencies needed. The stack is intentionally minimal.

---

## Version Compatibility Matrix

| Package | Version | Requires | Verified |
|---------|---------|----------|----------|
| next | 16.2.x | React 19, Node 18.18+ | YES - official blog |
| next-intl | 4.8.x | Next.js 14+ (supports 16) | YES - next-intl docs |
| @next/mdx | latest | Next.js 13+ | YES - Next.js docs |
| @tailwindcss/typography | latest | Tailwind v4 | YES - GitHub + docs |
| Umami Cloud | -- | Any (script tag) | YES - umami.is docs |

---

## Sources

- [Next.js 16 blog post](https://nextjs.org/blog/next-16) -- HIGH confidence
- [Next.js 16.2 blog post](https://nextjs.org/blog/next-16-2) -- HIGH confidence
- [Next.js Metadata API docs](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) -- HIGH confidence
- [next-intl App Router setup](https://next-intl.dev/docs/getting-started/app-router) -- HIGH confidence
- [next-intl proxy.ts fix for Next.js 16](https://www.buildwithmatija.com/blog/next-intl-nextjs-16-proxy-fix) -- MEDIUM confidence
- [Tailwind CSS v4 announcement](https://tailwindcss.com/blog/tailwindcss-v4) -- HIGH confidence
- [Tailwind v4 Next.js guide](https://tailwindcss.com/docs/guides/nextjs) -- HIGH confidence
- [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx) -- HIGH confidence
- [Umami Cloud](https://umami.is/) -- HIGH confidence
- [Vercel Academy: next/font](https://vercel.com/academy/nextjs-foundations/fonts-with-next-font) -- HIGH confidence
- [Next.js upgrade guide v16](https://nextjs.org/docs/app/guides/upgrading/version-16) -- HIGH confidence
