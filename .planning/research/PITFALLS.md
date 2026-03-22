# Domain Pitfalls

**Domain:** Next.js 16 multilingual static portfolio site
**Researched:** 2026-03-22
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: Using middleware.ts Instead of proxy.ts (Next.js 16)

**What goes wrong:** The implementation plan references `middleware.ts`. Next.js 16 renamed this to `proxy.ts` with the exported function renamed from `middleware` to `proxy`. Using the old name causes locale routing to silently fail -- no errors, no locale detection, all requests go to default locale.

**Why it happens:** The implementation plan was written for Next.js 15. Most tutorials still reference middleware.ts.

**Consequences:** i18n routing breaks completely. No error messages to debug.

**Prevention:** Use `proxy.ts` at project root (or `src/proxy.ts`). Export function as `proxy`. Run codemod if starting from a template: `npx @next/codemod middleware-to-proxy`.

**Detection:** Test immediately: visit `/it` and verify Italian content loads.

### Pitfall 2: next-intl Opts Pages Into Dynamic Rendering

**What goes wrong:** When `useTranslations` reads locale from request headers, it calls `headers()` which forces dynamic rendering. Your "static site" silently becomes server-rendered -- no CDN edge caching, bad TTFB.

**Why it happens:** Next.js has no API to read route params at arbitrary points in the Server Component tree. next-intl works around this with headers, but `headers()` is a dynamic API.

**Consequences:** Every page hit = cold start on Vercel. Lighthouse TTFB tanks.

**Prevention:**
1. Call `setRequestLocale(locale)` in every layout and page, before any `useTranslations` call.
2. Export `generateStaticParams` returning all locales.
3. Verify with `next build` -- every route should show a circle (static), not lambda (dynamic).

**Detection:** `next build` output icons. Static = circle, dynamic = lambda.

### Pitfall 3: tailwind.config.ts with Tailwind v4

**What goes wrong:** Creating a `tailwind.config.ts` file (v3 pattern). Tailwind v4 is CSS-first. Using both creates conflicts and confusion.

**Why it happens:** The implementation plan Phase 1 references `tailwind.config.ts`. Most tutorials are for v3.

**Consequences:** Duplicate token definitions, unexpected overrides, wasted debugging time.

**Prevention:** Define all design tokens in `globals.css` using `@theme { }`. No JS config file needed. Use `@plugin` directive for plugins.

**Detection:** If `tailwind.config.ts` exists AND `@theme` block exists, you have this pitfall.

## Moderate Pitfalls

### Pitfall 4: Cookie Redirect Loop with localePrefix 'as-needed'

**What goes wrong:** next-intl middleware stores locale preference in a cookie. An Italian user who visits `/about` (EN) gets redirected to `/it/about` even if they followed an English link. Breaks shared URLs and confuses Google's crawler.

**Prevention:** Disable cookie-based locale detection:
```typescript
export default createMiddleware({
  ...routing,
  localeDetection: false
});
```
Language is determined by URL only. Users switch via the toggle.

### Pitfall 5: Font Loading CLS

**What goes wrong:** Two custom fonts = two network requests. Without proper setup, visible text reflow and CLS > 0.1.

**Prevention:**
- Use `next/font/google` (self-hosts at build time, zero runtime requests)
- `display: 'swap'` for immediate rendering
- `adjustFontFallback: true` (default) generates size-matched fallback
- Apply via CSS variables, reference in Tailwind `@theme`

### Pitfall 6: @tailwindcss/typography Not Loading in v4

**What goes wrong:** Installing the plugin but adding it to a JS config (v3 pattern) instead of CSS.

**Prevention:** In `globals.css`:
```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

### Pitfall 7: Tailwind v4 Silent Breakage from v3 Patterns

**What goes wrong:** Copying v3 code snippets that silently fail in v4:
- `bg-gradient-to-*` is now `bg-linear-to-*` (gradients render as solid colors)
- Default `border-*` color changed from `gray-200` to `currentColor`
- Default `ring-*` width changed from `3px` to `1px`

**Prevention:** Always specify border colors explicitly. Use official v4 docs only. No tailwind.config.js.

### Pitfall 8: Missing hreflang = Google Treats Languages as Duplicates

**What goes wrong:** Without bidirectional hreflang tags, Google picks one language version and de-indexes the other. Kills half your SEO for a bilingual site.

**Prevention:** Use `generateMetadata` with `alternates.languages` on every page. Include `x-default`. Generate multilingual sitemap with `<xhtml:link rel="alternate">`.

### Pitfall 9: Prose Styles Missing on Blog MDX

**What goes wrong:** MDX renders as unstyled HTML. Headings same size as body, no link colors, no list bullets.

**Prevention:** Wrap MDX output in `<div className="prose prose-invert">`. Customize prose colors to match design system in `@theme`.

### Pitfall 10: Umami Script Blocked by Ad Blockers

**What goes wrong:** `cloud.umami.is/script.js` is on blocklists. 30%+ of traffic invisible.

**Prevention:** Proxy through Next.js rewrites:
```typescript
rewrites: () => [{
  source: '/stats/:path*',
  destination: 'https://cloud.umami.is/:path*',
}]
```

## Minor Pitfalls

### Pitfall 11: Border Radius Leaking from Defaults

**What goes wrong:** Browser and Tailwind defaults add border-radius to buttons, inputs. Spec requires 0px everywhere.

**Prevention:** Global CSS reset: `*, *::before, *::after { border-radius: 0; }` or set all Tailwind radius tokens to 0 in `@theme`.

### Pitfall 12: Language Toggle Not Preserving Path

**What goes wrong:** Switching from `/it/about` goes to `/` instead of `/about`.

**Prevention:** Use next-intl's `usePathname()` + `useRouter()`. Toggle replaces only the locale segment.

### Pitfall 13: Dark Mode Accessibility Failures

**What goes wrong:** Primary text passes WCAG (#F5F5F0 on #0A0A0B = ~18:1), but secondary/muted text fails. `#5A5A5E` on `#0A0A0B` is only ~2.4:1 -- fails AA for normal text.

**Prevention:**
- text-secondary (#8A8A8E on #0A0A0B) = ~5.2:1 -- PASSES AA
- text-tertiary (#5A5A5E on #0A0A0B) = ~2.4:1 -- FAILS AA for body text, use only for decorative/large text
- Verify every color pairing with a contrast checker before implementation
- Use text-tertiary only for non-essential info (dates, decorative elements) at large sizes

### Pitfall 14: Next.js 16 params is a Promise

**What goes wrong:** Accessing `params.locale` synchronously causes TypeScript errors and runtime issues. In Next.js 15+, params is a Promise.

**Prevention:** Always `const { locale } = await params;` in async page/layout components.

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Setup | proxy.ts vs middleware.ts (#1) | Use proxy.ts from day one |
| Setup | tailwind.config.ts (#3) | CSS-only @theme, no JS config |
| Design System | Border radius leaking (#11) | Global reset |
| Design System | Font CLS (#5) | next/font with display: swap |
| Design System | Dark mode a11y (#13) | Verify all color pairings |
| Layout | Language toggle path (#12) | next-intl hooks |
| Homepage | Dynamic rendering (#2) | setRequestLocale + generateStaticParams |
| Blog | Prose styles missing (#9) | prose prose-invert |
| SEO | Missing hreflang (#8) | Metadata helper on all pages |
| Analytics | Ad blocker (#10) | Proxy through rewrites |

## Sources

- [Next.js 16 middleware deprecation](https://nextjs.org/docs/messages/middleware-to-proxy)
- [next-intl proxy.ts fix](https://www.buildwithmatija.com/blog/next-intl-nextjs-16-proxy-fix)
- [Tailwind CSS v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide)
- [next-intl static rendering docs](https://next-intl.dev/docs/getting-started/app-router)
- [next-intl routing configuration](https://next-intl.dev/docs/routing/configuration)
