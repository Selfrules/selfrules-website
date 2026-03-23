# Phase 2: Shell - Research

**Researched:** 2026-03-22
**Domain:** Next.js 16 App Router layout shell -- navbar, footer, mobile menu, language toggle, 404, analytics proxy
**Confidence:** HIGH

## Summary

Phase 2 builds the navigable shell that wraps all pages: fixed navbar with scroll-triggered background transition, mobile hamburger menu with full-screen overlay and focus trap, language toggle (IT/EN) preserving current path, footer with bio/links/credit, localized 404 page, and Umami analytics proxied through Next.js rewrites. All decisions are locked in CONTEXT.md with 17 decisions covering every visual and behavioral detail.

The technical implementation relies on patterns already established in Phase 1 (proxy.ts, design tokens, fonts, i18n routing). The shell introduces the first Client Components in the project: Navbar (scroll listener), MobileMenu (toggle state, focus trap, escape key), and LanguageToggle (locale switch). Footer and 404 remain Server Components.

**Primary recommendation:** Build components bottom-up (LanguageToggle -> Footer -> Navbar -> MobileMenu -> 404 -> Umami proxy), testing i18n switching and scroll behavior at each step. The localized 404 requires a catch-all route `[...rest]/page.tsx` calling `notFound()` -- this is a known next-intl pattern, not obvious from Next.js docs alone.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Mobile menu slide-in from right (~300ms transition). Full viewport, bg-primary.
- **D-02:** Menu content: only nav links + language toggle below divider. No social links, email, or footer info.
- **D-03:** Menu link size: 32-36px, generous spacing for tap targets.
- **D-04:** Hamburger left, SELFRULES center/beside, close [X] top-right.
- **D-05:** Focus trap active when menu open. Escape closes. Body scroll locked.
- **D-06:** Desktop language toggle: "IT / EN" text, active in #F5F5F0, inactive in #5A5A5E.
- **D-07:** Mobile: language toggle NOT in navbar, only inside mobile menu below divider.
- **D-08:** Language switch preserves current path (next-intl native).
- **D-09:** Footer: single row desktop (bio left, links right), credit below. 1px separator top.
- **D-10:** Footer email in JetBrains Mono with accent hover (#E8A838).
- **D-11:** Mobile footer stacks vertically.
- **D-12:** 404: full shell (navbar + footer), content centered in viewport, headline + back-to-homepage link. No decorations.
- **D-13:** 404 copy: IT "Questa pagina non esiste. Ma il resto del sito si." / EN "This page doesn't exist. But the rest of the site does."
- **D-14:** Navbar: fixed top, transparent default, bg-primary/90 + backdrop-blur on scroll. 1px bottom border #1A1A1F.
- **D-15:** Logo "SELFRULES" bold monospace all-caps letter-spaced left. Nav links right: About, Work, Lab, Notes, Let's talk (accent), IT/EN toggle.
- **D-16:** Labels IT: SELFRULES, Chi sono, Lavori, Lab, Note, Parliamo. Labels EN: SELFRULES, About, Work, Lab, Notes, Let's talk.
- **D-17:** Umami Cloud proxied through Next.js rewrites (ANLT-02).

### Claude's Discretion
- Navbar scroll threshold (px before background change)
- Hamburger-to-X animation style
- Footer responsive breakpoint
- Umami proxy path configuration
- 404 page typography sizing

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| LNAV-01 | Fixed navbar with scroll behavior (transparent -> bg-primary/90 backdrop-blur) | Scroll listener pattern with useState + useEffect in Client Component. Threshold at 50px (UI-SPEC). |
| LNAV-02 | Navbar links: Logo + nav items + CTA (accent) + IT/EN toggle | Copy from microcopy.md, namespaced in `nav` i18n namespace. Links use next-intl `Link` component. |
| LNAV-03 | Mobile hamburger with full-screen overlay, focus trap, Escape closes | Custom focus trap implementation (query focusable elements, trap Tab/Shift+Tab). No library needed for 5-6 elements. |
| LNAV-04 | Language toggle preserves current path when switching IT <-> EN | next-intl `usePathname()` + `useRouter().replace()` pattern from createNavigation. |
| LNAV-05 | Footer with bio, email, LinkedIn, GitHub, CV download, credit | Server Component. Copy from microcopy.md. Email in JetBrains Mono. |
| LNAV-06 | 404 page with bilingual copy, link to homepage | `[locale]/not-found.tsx` + catch-all `[locale]/[...rest]/page.tsx` calling `notFound()`. |
| COPY-04 | All microcopy from microcopy.md | Nav labels, footer bio/credit, 404 copy, accessibility labels -- all go into en.json/it.json. |
| ANLT-01 | Umami analytics script integrated (cookieless) | next/script component with `data-website-id` from env var. |
| ANLT-02 | Umami proxied through Next.js rewrites | `next.config.ts` async rewrites pointing `/api/umami/:path*` to `https://cloud.umami.is/:path*`. |
</phase_requirements>

## Project Constraints (from CLAUDE.md)

- **Stack locked:** Next.js 16.2, TypeScript, Tailwind CSS v4 (CSS-first @theme), next-intl 4.8.x, proxy.ts (NOT middleware.ts)
- **Copy is FINAL:** Copy from microcopy.md must be copied exactly. No rewriting, summarizing, or "improving."
- **Design constraints:** 0px border-radius everywhere, dark-mode only, palette (#0A0A0B, #F5F5F0, #E8A838)
- **Locale routing:** EN default (no prefix), IT uses /it prefix. `localePrefix: 'as-needed'`, `localeDetection: false`
- **Modello B:** Never job-seeker framing. CV/availability only in contact section and footer.
- **What NOT to use:** middleware.ts, tailwind.config.ts, next-themes, Framer Motion, styled-components, @vercel/analytics

## Standard Stack

Phase 2 does not introduce new dependencies. It uses the stack established in Phase 1:

### Core (from Phase 1)
| Library | Version | Purpose | Phase 2 Usage |
|---------|---------|---------|---------------|
| Next.js | 16.2.x | Framework | Root layout, rewrites config, not-found convention |
| next-intl | 4.8.x | i18n | useTranslations, usePathname, useRouter, createNavigation |
| Tailwind CSS | 4.x | Styling | All component styling via utility classes |
| next/font/google | built-in | Fonts | Inter (nav links, body) + JetBrains Mono (wordmark, email) |

### Phase 2 Additions
| Library | Version | Purpose | Why |
|---------|---------|---------|-----|
| next/script | built-in | Umami script loading | Optimized script loading with `strategy` prop |

No `npm install` needed for Phase 2. All dependencies come from Phase 1.

## Architecture Patterns

### Component Structure for Phase 2

```
src/
  components/
    layout/
      Navbar.tsx          # Client Component - scroll + mobile menu state
      MobileMenu.tsx      # Client Component - overlay, focus trap, animations
      LanguageToggle.tsx   # Client Component - locale switch interaction
      Footer.tsx           # Server Component - static content
  app/
    [locale]/
      layout.tsx           # Wraps children with Navbar + Footer
      not-found.tsx        # Localized 404 page
      [...rest]/
        page.tsx           # Catch-all -> notFound() for localized 404
  i18n/
    navigation.ts          # createNavigation exports (Link, useRouter, usePathname)
```

### Pattern 1: Language Toggle with next-intl Navigation

**What:** Switch locale while preserving the current page path.
**Source:** [next-intl navigation docs](https://next-intl.dev/docs/routing/navigation)

```typescript
// src/i18n/navigation.ts
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

```typescript
// src/components/layout/LanguageToggle.tsx
'use client';

import { usePathname, useRouter } from '@/i18n/navigation';

export function LanguageToggle({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    router.replace({ pathname }, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLocale('it')}
        className={locale === 'it' ? 'text-text-primary' : 'text-text-tertiary hover:text-text-secondary'}
        aria-label="Italiano"
      >
        IT
      </button>
      <span className="text-text-tertiary">/</span>
      <button
        onClick={() => switchLocale('en')}
        className={locale === 'en' ? 'text-text-primary' : 'text-text-tertiary hover:text-text-secondary'}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
```

### Pattern 2: Localized 404 with Catch-All Route

**What:** Render a localized not-found page for unknown routes.
**Source:** [next-intl error files docs](https://next-intl.dev/docs/environments/error-files)

The catch-all route is required because Next.js does not automatically render `[locale]/not-found.tsx` for unknown routes -- it falls back to the root `app/not-found.tsx`. The catch-all intercepts and triggers the localized version.

```typescript
// src/app/[locale]/[...rest]/page.tsx
import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  notFound();
}
```

```typescript
// src/app/[locale]/not-found.tsx
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFoundPage() {
  const t = useTranslations('notFound');

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-[clamp(20px,5vw,80px)]">
      <h1 className="text-[clamp(40px,5vw,64px)] font-bold leading-[1.1] text-text-primary text-center">
        {t('headline')}
      </h1>
      <Link href="/" className="mt-8 text-accent hover:text-accent-hover transition-colors">
        {t('backLink')}
      </Link>
    </div>
  );
}
```

### Pattern 3: Navbar Scroll Behavior

**What:** Fixed navbar that transitions from transparent to blurred background on scroll.
**When to use:** Any fixed header with scroll-dependent styling.

```typescript
'use client';

import { useState, useEffect } from 'react';

export function Navbar({ locale, currentPath }: { locale: string; currentPath: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const threshold = 50;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border-default transition-[background-color,backdrop-filter] duration-200 ease-out ${
        scrolled ? 'bg-primary/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {/* navbar content */}
    </header>
  );
}
```

### Pattern 4: Focus Trap for Mobile Menu

**What:** Trap keyboard focus within the mobile menu overlay.
**Why no library:** Only 5-6 focusable elements (close button, 5 nav links, language toggle). A library adds bundle weight for a trivial case.

```typescript
function useFocusTrap(containerRef: React.RefObject<HTMLElement | null>, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = container.querySelectorAll<HTMLElement>(focusableSelector);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element on open
    firstElement?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    }

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [isActive, containerRef]);
}
```

### Pattern 5: Umami Proxy via Next.js Rewrites

**What:** Proxy Umami script and API through your domain to bypass ad blockers.
**Source:** [Next.js rewrites docs](https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites), Umami documentation

```typescript
// next.config.ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/umami/:path*',
        destination: 'https://cloud.umami.is/:path*',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
```

Script tag in root layout:
```typescript
import Script from 'next/script';

// In the layout body, before closing tag
<Script
  src="/api/umami/script.js"
  data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
  strategy="afterInteractive"
/>
```

### Anti-Patterns to Avoid

- **Adding `'use client'` to Footer or 404:** These are static content. Keep them as Server Components. Use `getTranslations()` server-side, not `useTranslations()` client-side.
- **Using `router.push()` instead of `router.replace()` for locale switch:** Push adds a history entry. Users clicking back would cycle through locale changes instead of navigating backward.
- **Forgetting `setRequestLocale()` in not-found.tsx:** Without this, the 404 page opts into dynamic rendering, breaking static export.
- **Hardcoding nav links without i18n:** All labels must come from translation JSON, not hardcoded strings in components.
- **Using `<a>` tags instead of next-intl `Link`:** The next-intl `Link` component handles locale prefixing automatically. Regular `<a>` tags would break locale routing.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Locale-aware navigation | Custom pathname manipulation | next-intl `createNavigation` (Link, useRouter, usePathname) | Handles prefix stripping, locale injection, path matching automatically |
| Scroll lock on body | Manual `overflow: hidden` toggling | CSS `overflow: hidden` on `<body>` via state | Simple enough, but must also restore on unmount and handle iOS Safari quirks |
| Localized 404 routing | Custom error boundary | `[...rest]/page.tsx` + `notFound()` convention | Next.js built-in convention. Custom solutions break with streaming. |

## Common Pitfalls

### Pitfall 1: Localized 404 Not Rendering
**What goes wrong:** Visiting `/en/nonexistent` shows the root `app/not-found.tsx` (unstyled) instead of the localized `[locale]/not-found.tsx`.
**Why it happens:** Next.js only renders `[locale]/not-found.tsx` when `notFound()` is called within the `[locale]` segment. Without a catch-all route, the request never enters the locale segment.
**How to avoid:** Create `src/app/[locale]/[...rest]/page.tsx` that calls `notFound()`. This catches all unknown routes within the locale segment and triggers the correct not-found boundary.
**Warning signs:** 404 page has no navbar/footer or shows no translations.

### Pitfall 2: iOS Safari Scroll Lock Bug
**What goes wrong:** When the mobile menu is open and body has `overflow: hidden`, iOS Safari still allows scrolling behind the overlay through touch events on the menu itself.
**Why it happens:** iOS Safari has a long-standing bug where `overflow: hidden` on body does not fully prevent scroll on touch devices.
**How to avoid:** Additionally set `position: fixed` and `width: 100%` on the body, and save/restore the scroll position:
```typescript
// On open:
const scrollY = window.scrollY;
document.body.style.position = 'fixed';
document.body.style.width = '100%';
document.body.style.top = `-${scrollY}px`;

// On close:
const scrollY = document.body.style.top;
document.body.style.position = '';
document.body.style.width = '';
document.body.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);
```
**Warning signs:** Background content scrolls while mobile menu overlay is visible on iOS devices.

### Pitfall 3: Focus Trap Not Re-Querying on Content Change
**What goes wrong:** Focus trap captures focusable elements on mount, but if the menu content changes (e.g., language toggle state), the trap references stale elements.
**Why it happens:** `querySelectorAll` is called once in useEffect.
**How to avoid:** For this project, menu content is static (5 links + toggle), so this is low risk. But always query fresh on each Tab keydown if content can change.
**Warning signs:** Tab key stops working after interacting with menu elements.

### Pitfall 4: Language Toggle Causes Full Page Reload
**What goes wrong:** Instead of a client-side navigation, switching locale triggers a full page reload with flash of unstyled content.
**Why it happens:** Using native `<a>` tags or `window.location` instead of next-intl's `useRouter().replace()`.
**How to avoid:** Always use the `useRouter` from `@/i18n/navigation` (created via `createNavigation`), not from `next/navigation`.
**Warning signs:** Page flickers white during locale switch. Browser loading indicator appears.

### Pitfall 5: Umami Script Not Loading Through Proxy
**What goes wrong:** Analytics script returns 404 or is blocked.
**Why it happens:** Rewrite path mismatch between `source` in next.config.ts and `src` attribute in the Script component. Or rewrites are not applied because next-intl plugin overrides them.
**How to avoid:** Ensure the rewrite is defined INSIDE the `nextConfig` object that gets passed to `withNextIntl()`. Test by visiting `/api/umami/script.js` directly in the browser -- it should return JavaScript content.
**Warning signs:** Network tab shows 404 for the script. Umami dashboard shows no traffic.

## Code Examples

### Complete i18n Message Structure for Phase 2

```json
{
  "nav": {
    "about": "About",
    "work": "Work",
    "lab": "Lab",
    "notes": "Notes",
    "contact": "Let's talk",
    "openMenu": "Open menu",
    "closeMenu": "Close menu",
    "switchLanguage": "Switch language"
  },
  "footer": {
    "bio": "Senior Technical PM. I prototype in code, design the UX, and ship.",
    "email": "mattia@selfrules.org",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "cv": "Download CV (PDF)",
    "credit": "Designed and built by Mattia De Luca"
  },
  "notFound": {
    "headline": "This page doesn't exist. But the rest of the site does.",
    "backLink": "Back to homepage"
  },
  "a11y": {
    "skipToContent": "Skip to content"
  }
}
```

Italian version (`it.json`):
```json
{
  "nav": {
    "about": "Chi sono",
    "work": "Lavori",
    "lab": "Lab",
    "notes": "Note",
    "contact": "Parliamo",
    "openMenu": "Apri menu",
    "closeMenu": "Chiudi menu",
    "switchLanguage": "Cambia lingua"
  },
  "footer": {
    "bio": "Senior Technical PM. I prototype in code, design the UX, and ship.",
    "email": "mattia@selfrules.org",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "cv": "Scarica il CV (PDF)",
    "credit": "Designed and built by Mattia De Luca"
  },
  "notFound": {
    "headline": "Questa pagina non esiste. Ma il resto del sito si.",
    "backLink": "Torna alla homepage"
  },
  "a11y": {
    "skipToContent": "Vai al contenuto"
  }
}
```

### Root Layout Shell Integration

```typescript
// src/app/[locale]/layout.tsx
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Script from 'next/script';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-accent focus:text-primary focus:px-4 focus:py-2">
        {/* Skip to content - translated in Navbar or here */}
      </a>
      <Navbar locale={locale} />
      <main id="main" className="pt-[64px]">
        {children}
      </main>
      <Footer locale={locale} />
      {process.env.NEXT_PUBLIC_UMAMI_ID && (
        <Script
          src="/api/umami/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          strategy="afterInteractive"
        />
      )}
    </NextIntlClientProvider>
  );
}
```

### Nav Link Configuration

```typescript
// Nav links data structure used by both desktop and mobile nav
const navLinks = [
  { key: 'about', href: '/about' },
  { key: 'work', href: '/work' },
  { key: 'lab', href: '/lab' },
  { key: 'notes', href: '/blog' },   // "Notes" label, /blog route
  { key: 'contact', href: '/#contact', isAccent: true },
] as const;
```

Note: "Notes" in the nav maps to the `/blog` route (per microcopy.md). The CTA "Let's talk" / "Parliamo" links to `/#contact` (the contact section on the homepage), not a separate `/contact` page.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| middleware.ts | proxy.ts | Next.js 16 (2025) | File and function name change. Silent failure if using old name. |
| createSharedPathnamesNavigation | createNavigation | next-intl 4.x | Unified API replacing separate shared/localized path functions. |
| useMessages() in layout | useMessages() returns all messages | next-intl 4.x | Messages loaded via getRequestConfig, provided through NextIntlClientProvider. |

## Open Questions

1. **"Let's talk" / "Parliamo" link destination**
   - What we know: microcopy.md links it to `/it/contact` and `/contact`. But there is no separate contact page -- the contact section is on the homepage.
   - What's unclear: Whether to use `/#contact` (anchor on homepage) or create a standalone `/contact` route.
   - Recommendation: Use `/#contact` (scroll to contact section on homepage). This avoids creating an extra page and matches the implementation-plan.md which puts the contact section on the homepage. The planner should confirm this.

2. **Footer LinkedIn/GitHub URLs**
   - What we know: Footer must display LinkedIn and GitHub links.
   - What's unclear: The actual URLs are not in microcopy.md.
   - Recommendation: Use placeholder URLs (`https://linkedin.com/in/mattiadeluca`, `https://github.com/mattiadeluca`) and mark as needing user confirmation. Or extract from existing selfrules.org.

3. **CV PDF file**
   - What we know: Footer has "Download CV (PDF)" link.
   - What's unclear: Where the PDF is hosted. No file in the repo.
   - Recommendation: Use a placeholder href (`/cv.pdf`) and add the PDF to `public/` directory. Mark as requiring user-provided file.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual browser testing (no test framework in project) |
| Config file | none -- Phase 2 is UI shell, visual verification only |
| Quick run command | `npm run dev` + manual browser check |
| Full suite command | `npm run build` (verify static rendering, no lambda icons) |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| LNAV-01 | Navbar scroll transition | manual | Scroll page, verify backdrop-blur | N/A |
| LNAV-02 | Navbar links correct | manual | Visual inspection + click each link | N/A |
| LNAV-03 | Mobile menu focus trap | manual | Tab through menu, verify trap | N/A |
| LNAV-04 | Language toggle preserves path | manual | Switch locale on /about, verify /it/about | N/A |
| LNAV-05 | Footer content complete | manual | Visual inspection both locales | N/A |
| LNAV-06 | 404 bilingual | manual | Visit /nonexistent and /it/nonexistent | N/A |
| COPY-04 | Microcopy exact match | manual | Compare rendered text vs microcopy.md | N/A |
| ANLT-01 | Umami script loads | manual | DevTools Network tab | N/A |
| ANLT-02 | Umami proxied | manual | Check script src is `/api/umami/script.js` not cloud.umami.is | N/A |

### Sampling Rate
- **Per task commit:** `npm run dev` + visual check at mobile (375px) and desktop (1440px)
- **Per wave merge:** `npm run build` -- verify all routes are static (circle icon, not lambda)
- **Phase gate:** All 16 success criteria from UI-SPEC verified manually

### Wave 0 Gaps
None -- no automated test infrastructure needed for UI shell phase. All verification is visual/manual.

## Sources

### Primary (HIGH confidence)
- [next-intl navigation docs](https://next-intl.dev/docs/routing/navigation) -- createNavigation, useRouter, usePathname, locale switching pattern
- [next-intl error files docs](https://next-intl.dev/docs/environments/error-files) -- localized not-found.tsx pattern with catch-all route
- [next-intl routing setup](https://next-intl.dev/docs/routing/setup) -- proxy.ts note for Next.js 16, static rendering with setRequestLocale
- [Next.js rewrites docs](https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites) -- Umami proxy rewrite configuration

### Secondary (MEDIUM confidence)
- [Next.js not-found convention](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) -- confirms not-found.tsx file convention
- [Umami integration guides](https://stasdeep.com/articles/umami-analytics) -- proxy pattern via rewrites for ad blocker bypass

### Tertiary (LOW confidence)
- Focus trap implementation patterns from community articles -- verified against WCAG 2.1 requirements but not from a single authoritative source

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- all libraries from Phase 1, no new dependencies
- Architecture: HIGH -- patterns verified against official next-intl docs and Next.js conventions
- Pitfalls: HIGH -- localized 404 catch-all is well-documented, iOS scroll lock is a known issue, focus trap is standard a11y pattern

**Research date:** 2026-03-22
**Valid until:** 2026-04-22 (stable stack, no fast-moving dependencies)
