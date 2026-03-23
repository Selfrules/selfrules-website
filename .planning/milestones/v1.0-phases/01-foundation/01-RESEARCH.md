# Phase 1: Foundation - Research

**Researched:** 2026-03-22
**Domain:** Next.js 16 project scaffolding with Tailwind v4, next-intl i18n, and custom fonts
**Confidence:** HIGH

## Summary

Phase 1 establishes the technical foundation for selfrules.org: a Next.js 16 App Router project with Tailwind CSS v4 design tokens, next-intl i18n routing (EN default, IT with /it prefix), and Inter + JetBrains Mono fonts via next/font. No UI components, no content pages, no layout -- just the verified technical base.

The stack is fully decided and non-negotiable. All packages are current on npm (Next.js 16.2.1, next-intl 4.8.3, Tailwind 4.2.2). The key technical risks are: using `proxy.ts` correctly (not middleware.ts), configuring Tailwind v4 CSS-first (not JS config), ensuring static rendering with `setRequestLocale` + `generateStaticParams`, and using `@theme inline` for next/font CSS variables.

**Primary recommendation:** Follow the exact proxy.ts + @theme + next/font patterns documented below. Verify static rendering with `next build` output icons (circles = static, lambdas = dynamic) as the primary success signal.

<user_constraints>

## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Public GitHub repository
- **D-02:** i18n message keys grouped by namespace (page/section). Pattern: `homepage.hero.title`, `about.intro.headline`, `nav.links.about`. Single JSON file per locale (`en.json`, `it.json`) with nested structure
- **D-04:** Placeholder pages EN/IT with minimal verifiable content: headline with visible font name, color swatches of main tokens, monospace tag -- enough to verify tokens, fonts, and i18n routing work

### Claude's Discretion
- **D-03:** Token organization approach -- Claude has flexibility on how to structure @theme, custom utilities, and CSS variables. Choose the most idiomatic approach for Tailwind v4.

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope.

</user_constraints>

<phase_requirements>

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FOUND-01 | Project bootstrapped with Next.js 16+ (App Router), TypeScript, Tailwind CSS v4 | create-next-app@latest with --typescript --tailwind --app --src-dir flags; verified Next.js 16.2.1 available |
| FOUND-02 | i18n routing with next-intl -- EN default (no prefix), IT with /it prefix (`localePrefix: 'as-needed'`) | next-intl 4.8.3 with proxy.ts pattern, defineRouting with localePrefix: 'as-needed', localeDetection: false |
| FOUND-03 | All pages statically rendered at build time | setRequestLocale(locale) in every layout/page + generateStaticParams returning all locales; verify with `next build` circle icons |
| FOUND-04 | Fonts loaded via next/font: Inter (400, 500, 600, 700) and JetBrains Mono (400, 500) | next/font/google with display: 'swap', CSS variable approach, `@theme inline` to bridge into Tailwind |
| FOUND-05 | Design tokens defined in Tailwind v4 @theme: colors, typography scale, spacing, 0px border-radius | Full @theme block in globals.css with all color, spacing, typography, and radius tokens; global CSS reset for border-radius |

</phase_requirements>

## Project Constraints (from CLAUDE.md)

- **Stack is non-negotiable:** Next.js 16.2 (App Router, Turbopack), TypeScript, Tailwind CSS v4 (CSS-first), next-intl 4.8.x, Vercel
- **Use proxy.ts, NOT middleware.ts** -- Next.js 16 breaking change
- **Tailwind v4 CSS-first:** Use `@theme` in globals.css, NO tailwind.config.ts
- **DO NOT USE:** next-mdx-remote, Contentlayer, next-seo, Framer Motion, next-themes, middleware.ts, react-helmet, @vercel/analytics, styled-components/emotion
- **0px border-radius everywhere**
- **Dark-mode first** (no light mode in v1)
- **Copy is DEFINITIVE** -- copy exactly from source files
- **Locale routing:** EN default (no prefix), IT uses /it prefix

## Standard Stack

### Core (Phase 1 scope)

| Library | Version | Purpose | Verified |
|---------|---------|---------|----------|
| next | 16.2.1 | Framework (App Router, Turbopack) | npm registry 2026-03-22 |
| react | 19.x | UI library (ships with Next.js 16) | Next.js 16 dependency |
| typescript | 5.x | Type safety (ships with create-next-app) | create-next-app default |
| tailwindcss | 4.2.2 | Utility CSS (CSS-first config) | npm registry 2026-03-22 |
| next-intl | 4.8.3 | i18n routing + translations | npm registry 2026-03-22 |
| next/font/google | built-in | Font loading (Inter, JetBrains Mono) | Next.js built-in |

### NOT installed in Phase 1 (later phases)

| Library | Phase | Purpose |
|---------|-------|---------|
| @tailwindcss/typography | Phase 5 (blog) | Prose styling for MDX |
| @next/mdx | Phase 5 (blog) | Blog content |
| remark-gfm | Phase 5 (blog) | GFM tables/strikethrough |
| rehype-pretty-code | Phase 5 (blog) | Syntax highlighting |

### Installation

```bash
# Phase 1 only needs next-intl beyond what create-next-app provides
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npm install next-intl
```

## Architecture Patterns

### Project Structure (Phase 1 only)

```
src/
  proxy.ts                          # Locale routing (Next.js 16 convention)
  app/
    globals.css                     # @import "tailwindcss" + @theme tokens
    layout.tsx                      # Root <html> with font variables + dark class
    [locale]/
      layout.tsx                    # NextIntlClientProvider, setRequestLocale
      page.tsx                      # Placeholder page (verifies tokens + fonts + i18n)
  i18n/
    routing.ts                      # defineRouting config
    request.ts                      # getRequestConfig (message loading)
    navigation.ts                   # createNavigation (locale-aware Link, redirect)
  lib/
    fonts.ts                        # Inter + JetBrains Mono via next/font
  messages/
    en.json                         # EN strings (namespaced)
    it.json                         # IT strings (namespaced)
```

### Pattern 1: proxy.ts for next-intl (Next.js 16)

**What:** Next.js 16 renamed middleware.ts to proxy.ts. The exported function must be named `proxy` (or default export).
**When to use:** Always in this project -- it is the i18n routing entry point.
**Confidence:** HIGH (verified against Next.js 16 official docs + next-intl docs)

```typescript
// src/proxy.ts
// Source: https://nextjs.org/docs/app/api-reference/file-conventions/proxy
//         https://next-intl.dev/docs/routing/middleware
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export function proxy(request: Request) {
  return handleI18nRouting(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*)*)'
};
```

**Key facts:**
- File MUST be named `proxy.ts` (not middleware.ts) in Next.js 16
- Function export can be named `proxy` OR default export -- both work
- next-intl's `createMiddleware` returns a function compatible with proxy.ts
- The matcher pattern excludes API routes, internal routes, and files with extensions

### Pattern 2: i18n Routing Configuration

**What:** next-intl routing with `localePrefix: 'as-needed'` and `localeDetection: false`.
**Confidence:** HIGH (verified against next-intl docs)

```typescript
// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'it'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',  // EN: /about, IT: /it/about
  localeDetection: false       // Prevents cookie redirect loops (Pitfall #4)
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
```

```typescript
// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

### Pattern 3: Static Rendering with setRequestLocale

**What:** Every layout and page MUST call `setRequestLocale(locale)` before any `useTranslations` call, and export `generateStaticParams`.
**Why critical:** Without this, next-intl calls `headers()` which forces dynamic rendering -- the #1 performance pitfall for this project (Pitfall #2).
**Confidence:** HIGH (verified against next-intl docs)

```typescript
// src/app/[locale]/layout.tsx
import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;  // Next.js 16: params is a Promise

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
```

```typescript
// src/app/[locale]/page.tsx
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('placeholder');

  return (
    <div>
      <h1>{t('title')}</h1>
      {/* Placeholder content */}
    </div>
  );
}
```

### Pattern 4: Font Setup with @theme inline

**What:** next/font generates CSS variables at runtime. Tailwind v4 needs `@theme inline` to reference external CSS variables for utility generation.
**Why critical:** Without `inline`, Tailwind cannot resolve the font variables and `font-sans`/`font-mono` utilities will not apply the custom fonts.
**Confidence:** HIGH (verified via Tailwind v4 docs + GitHub discussion #15267)

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
  variable: '--font-jetbrains',
  display: 'swap',
});
```

```typescript
// src/app/layout.tsx (root layout)
import { inter, jetbrainsMono } from '@/lib/fonts';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    // Font variables MUST be on <html>, not <body> -- Tailwind v4 needs root-level CSS vars
    <html className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans bg-primary text-primary">
        {children}
      </body>
    </html>
  );
}
```

```css
/* In globals.css -- bridge next/font vars into Tailwind */
@theme inline {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-jetbrains);
}
```

**Critical detail:** Font variable classes (`inter.variable`, `jetbrainsMono.variable`) MUST be applied to the `<html>` element, not `<body>`. Tailwind v4's theme system needs CSS variables at the root level to generate utility classes correctly.

### Pattern 5: Tailwind v4 Design Tokens

**What:** All design tokens defined in globals.css using `@theme` blocks. No tailwind.config.ts.
**Confidence:** HIGH (verified against Tailwind v4 docs)

```css
/* src/app/globals.css */
@import "tailwindcss";

/* Bridge next/font CSS variables into Tailwind */
@theme inline {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-jetbrains);
}

@theme {
  /* Colors */
  --color-primary: #0A0A0B;
  --color-surface: #111113;
  --color-hover: #1A1A1F;
  --color-border-default: #1A1A1F;
  --color-border-accent: #E8A838;
  --color-text-primary: #F5F5F0;
  --color-text-secondary: #8A8A8E;
  --color-text-tertiary: #5A5A5E;
  --color-accent: #E8A838;
  --color-accent-hover: #D4962F;

  /* Typography scale */
  --text-hero: clamp(40px, 5vw, 64px);
  --text-section-title: clamp(28px, 3vw, 36px);
  --text-card-title: 20px;
  --text-body: 16px;
  --text-body-lg: 18px;
  --text-label: 14px;
  --text-small: 13px;
  --text-metric: clamp(40px, 5vw, 64px);

  /* Spacing */
  --spacing-section: clamp(80px, 10vw, 160px);
  --spacing-page-padding: clamp(20px, 5vw, 80px);

  /* Widths */
  --width-content: 720px;
  --width-wide: 1080px;

  /* Border radius -- 0 everywhere */
  --radius-*: initial;
  --radius-none: 0px;
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-xl: 0px;
  --radius-2xl: 0px;
  --radius-full: 0px;
}

/* Global reset: ensure no border-radius leaks from browser defaults */
*,
*::before,
*::after {
  border-radius: 0;
}
```

**Design token rationale (D-03 -- Claude's discretion):**
- `@theme inline` for font variables (external CSS vars from next/font)
- `@theme` for all other tokens (static values known at build time)
- Colors use `--color-*` namespace to auto-generate `bg-*`, `text-*`, `border-*` utilities
- Typography uses `--text-*` namespace to auto-generate `text-*` size utilities
- Radius tokens all set to 0px to enforce the "no border-radius" design rule
- `--radius-*: initial` clears all default Tailwind radius values first
- Global CSS reset as belt-and-suspenders for browser default border-radius

### Anti-Patterns to Avoid

- **middleware.ts:** Deprecated in Next.js 16. Silently breaks locale routing. Use proxy.ts.
- **tailwind.config.ts:** Tailwind v4 is CSS-first. Creates dual source of truth. Use @theme in globals.css.
- **Font variables on `<body>`:** Tailwind v4 needs root-level CSS vars. Apply on `<html>`.
- **Missing setRequestLocale:** Causes dynamic rendering. Must call before any useTranslations.
- **Missing generateStaticParams:** Required for static rendering of [locale] routes.
- **params without await:** Next.js 16 params is a Promise. Must `const { locale } = await params`.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| i18n routing | Custom locale detection/redirects | next-intl createMiddleware | Edge cases with locale cookies, alternates, prefix handling |
| Font loading | Manual @font-face declarations | next/font/google | Automatic self-hosting, zero CLS, size-adjusted fallbacks |
| Design tokens | Custom CSS variable system | Tailwind v4 @theme | Auto-generates utility classes from theme variables |
| Locale-aware navigation | Manual href construction | next-intl createNavigation | Handles locale prefix insertion/removal automatically |

## Common Pitfalls

### Pitfall 1: proxy.ts vs middleware.ts
**What goes wrong:** Using middleware.ts (Next.js 15 convention). Locale routing silently fails -- no errors, no locale detection.
**How to avoid:** Name the file `proxy.ts`. Export function as `proxy` (or default). Verify immediately: visit `/it` and confirm Italian content.
**Warning signs:** All pages show EN content regardless of URL locale.

### Pitfall 2: Dynamic Rendering from next-intl
**What goes wrong:** Pages render dynamically instead of statically. No CDN caching, bad TTFB.
**How to avoid:** Call `setRequestLocale(locale)` in EVERY layout and page, BEFORE any useTranslations. Export `generateStaticParams` returning all locales.
**Warning signs:** `next build` output shows lambda icons instead of circles.

### Pitfall 3: tailwind.config.ts with Tailwind v4
**What goes wrong:** Creating a JS config file. Conflicts with @theme, dual source of truth.
**How to avoid:** Define everything in globals.css @theme. Delete any tailwind.config.ts that create-next-app generates.
**Warning signs:** If both tailwind.config.ts AND @theme block exist.

### Pitfall 4: Cookie Redirect Loop
**What goes wrong:** next-intl stores locale in cookie. Italian user visiting EN URL gets redirected to /it.
**How to avoid:** Set `localeDetection: false` in routing config. Language is URL-only.
**Warning signs:** Shared links redirect to wrong locale.

### Pitfall 5: Font CLS
**What goes wrong:** Visible text reflow on page load with two custom fonts.
**How to avoid:** Use next/font/google with `display: 'swap'` (already default). Apply variable classes to `<html>`. The `adjustFontFallback: true` default generates size-matched fallbacks.
**Warning signs:** Visible font swap or CLS > 0.1 on page load.

### Pitfall 6: params is a Promise (Next.js 16)
**What goes wrong:** Accessing `params.locale` synchronously causes TypeScript errors and runtime issues.
**How to avoid:** Always `const { locale } = await params;` in async page/layout components.
**Warning signs:** TypeScript error on params access; runtime "cannot read property of Promise".

### Pitfall 7: Border Radius Leaking from Defaults
**What goes wrong:** Tailwind and browser defaults add border-radius to buttons, inputs.
**How to avoid:** Set all `--radius-*` tokens to 0px AND add global CSS reset `* { border-radius: 0; }`.
**Warning signs:** Any visible rounded corner anywhere in the UI.

## Code Examples

### next.config.ts (Phase 1 minimal)

```typescript
// next.config.ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
```

Source: next-intl docs (https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing)

### Minimal Message JSON Structure (D-02)

```json
{
  "placeholder": {
    "title": "selfrules.org",
    "fontCheck": "This text uses Inter (sans) and",
    "monoCheck": "this uses JetBrains Mono",
    "locale": "English"
  }
}
```

IT version mirrors with Italian values. Just enough for Phase 1 verification.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Next.js 16 (requires 18.18+) | Yes | 25.8.1 | -- |
| npm | Package management | Yes | 11.11.0 | -- |
| npx / create-next-app | Project scaffolding | Yes | 16.2.1 | -- |
| git | Version control | Yes | 2.39.5 | -- |
| gh CLI | GitHub repo creation (D-01) | Yes | 2.88.1 | -- |

**Missing dependencies:** None. All tools available and versions exceed minimums.

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual verification (no test framework needed for Phase 1) |
| Config file | none -- Phase 1 is infrastructure, verified by build + manual checks |
| Quick run command | `npm run build` |
| Full suite command | `npm run build && npm run dev` (verify routes manually) |

### Phase Requirements -> Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| FOUND-01 | Next.js 16 project builds | smoke | `npm run build` (exit code 0) | N/A (build command) |
| FOUND-02 | `/` shows EN, `/it` shows IT | manual | `npm run dev` then visit both URLs | N/A |
| FOUND-03 | All routes static (circle icons) | smoke | `npm run build` then check output for lambda icons | N/A |
| FOUND-04 | Fonts render correctly, no CLS | manual | `npm run dev` + browser DevTools font inspector | N/A |
| FOUND-05 | Design tokens available as Tailwind utilities | manual | Placeholder page shows correct colors/spacing | N/A |

### Sampling Rate
- **Per task commit:** `npm run build` (must succeed with zero errors)
- **Per wave merge:** `npm run build` + manual verification of both locale routes
- **Phase gate:** All 4 success criteria verified before phase complete

### Wave 0 Gaps
None -- Phase 1 does not require a test framework. Validation is via build success and manual route verification. Test infrastructure (if needed) can be added in later phases.

## Sources

### Primary (HIGH confidence)
- Next.js 16 proxy.ts docs: https://nextjs.org/docs/app/api-reference/file-conventions/proxy
- next-intl App Router setup: https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing
- next-intl middleware/proxy docs: https://next-intl.dev/docs/routing/middleware
- Tailwind CSS v4 @theme docs: https://tailwindcss.com/docs/theme
- npm registry versions verified 2026-03-22: next@16.2.1, next-intl@4.8.3, tailwindcss@4.2.2

### Secondary (MEDIUM confidence)
- Tailwind v4 + next/font @theme inline pattern: https://github.com/tailwindlabs/tailwindcss/discussions/15267
- Project PITFALLS.md (14 pitfalls with mitigations, internally researched)
- Project ARCHITECTURE.md (directory structure and component boundaries)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- all versions verified on npm registry, official docs confirmed patterns
- Architecture: HIGH -- next-intl + Next.js 16 patterns verified against current official docs
- Pitfalls: HIGH -- documented from official sources, cross-referenced with project PITFALLS.md

**Research date:** 2026-03-22
**Valid until:** 2026-04-22 (stable stack, 30-day validity)
