# Coding Conventions

**Analysis Date:** 2026-04-06

## Naming Patterns

**Files:**
- React components: PascalCase (e.g., `Navbar.tsx`, `FeedbackWidget.tsx`, `ScrollReveal.tsx`)
- Exception: some `ui/` files use kebab-case (e.g., `scroll-reveal.tsx`, `page-cta.tsx`)
- Utility/lib files: camelCase (e.g., `utils.ts`, `metadata.ts`, `build-info.ts`)
- Route files follow Next.js conventions: `page.tsx`, `layout.tsx`, `route.ts`, `opengraph-image.tsx`
- MDX content files: `content.en.mdx` / `content.it.mdx` (locale suffix pattern)
- i18n files: camelCase (`routing.ts`, `request.ts`, `navigation.ts`)

**Functions/Components:**
- Named exports preferred for all components and utilities — no default exports for components
- Default exports only for Next.js page/layout files (required by framework)
- Component names match their file names exactly
- Helper functions: camelCase verb phrases (e.g., `createPageMetadata`, `isRateLimited`, `markdownBold`, `getAdjacentPosts`)

**Variables:**
- camelCase throughout
- Typed string unions via `type` aliases: `type FeedbackType = 'feedback' | 'bug' | 'domanda'`
- Status state uses string unions: `'idle' | 'sending' | 'success' | 'error'`
- Constants: camelCase for module-level (`const baseUrl`, `const navLinks`, `const RATE_LIMIT` for true constants)

**Types/Interfaces:**
- Props types: inline `interface XxxProps { ... }` co-located above the component
- Page prop type: `type Props = { params: Promise<{ locale: string }> }` reused across pages
- Use `interface` for props, `type` for unions and aliases
- `as const` on readonly data arrays: `const navLinks: readonly { ... }[] = [...]`

## Code Style

**Formatting:**
- Single quotes for imports and string literals (observed throughout)
- Trailing commas in multiline objects/arrays
- 2-space indentation
- No explicit formatter config file found (no `.prettierrc`) — style enforced through ESLint

**Linting:**
- ESLint 9 with flat config: `eslint.config.mjs`
- Uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- One documented suppression: `// eslint-disable-next-line @typescript-eslint/no-explicit-any` in `src/components/ui/FeedbackWidget.tsx` for Umami's `window` access

**TypeScript:**
- `strict: true` in `tsconfig.json` — all strict checks enabled
- `noEmit: true`, `isolatedModules: true`
- Path alias: `@/*` maps to `src/*` — always use `@/` for internal imports

## Import Organization

**Order (observed pattern):**
1. `next/*` and framework imports (`type Metadata`, `Script`, etc.)
2. `next-intl` imports (server or client variants)
3. Internal `@/i18n/*` imports
4. Internal `@/lib/*` imports
5. Internal `@/components/*` imports (layout → sections → ui → seo order)

**Path Aliases:**
- Always use `@/` for all internal imports — never relative paths like `../../`
- Exception: `./MobileMenu`, `./LanguageToggle` within the same directory (relative sibling imports are acceptable)

**Client vs Server split:**
- Server components: no directive needed (default)
- Client components: `'use client'` at top of file, before all imports
- Server-side next-intl: import from `'next-intl/server'` (`setRequestLocale`, `getTranslations`, `getMessages`)
- Client-side next-intl: import from `'next-intl'` (`useTranslations`)

## Error Handling

**API Routes:**
- Try/catch blocks wrapping all external calls (Notion API, JSON parsing)
- Return `NextResponse.json({ error: '...' }, { status: NNN })` for all error cases
- Specific HTTP status codes: 400 (validation), 429 (rate limit), 500 (config), 502 (upstream)
- Log errors with `console.error(label, detail)` before returning error responses
- Catch-all for JSON parse: `.catch(() => ({}))`

**Client Components:**
- Async operations wrapped in try/catch
- Error state stored as `status: 'error'` + `errorMsg: string`
- Error display via `role="alert"` element in JSX
- `err instanceof Error ? err.message : 'Unknown error'` pattern for error extraction

**Next.js Pages:**
- Locale validation via `hasLocale(routing.locales, locale)` → `notFound()` call
- No explicit error boundaries — relies on Next.js default error handling

## Logging

**Framework:** `console.error` only (no logging library)

**Patterns:**
- Log only in API routes / server-side code
- Always log before returning error responses: `console.error('Context label:', details)`
- Client components suppress errors silently for non-critical paths (Umami tracking: `try { ... } catch { /* noop */ }`)

## Comments

**When to Comment:**
- CLS fixes and browser quirks: detailed inline comments explaining why (see layout font-face comment in `src/app/[locale]/layout.tsx`)
- Design requirement IDs referenced inline: `// Scroll listener: 50px threshold (D-14, LNAV-01)`
- Accessibility intent: `// Skip to content -- sr-only, visible on keyboard focus (A11Y-01)`
- Rate limit strategy: `// In-memory rate limiting (resets on server restart — fine for a personal site)`
- Section labels in JSX: `{/* Header */}`, `{/* Body */}`, `{/* Type selector */}`

**JSDoc/TSDoc:**
- Not used — function signatures with TypeScript types are self-documenting

## Function Design

**Size:** Functions stay focused and short. Page components are larger but structured with clear JSX section comments.

**Parameters:** Destructured from props object inline in function signature. Never positional arguments for React components.

**Return Values:**
- Utility functions return typed values with explicit return type annotations where helpful
- Components return JSX directly — no intermediate variables for JSX fragments
- Multiple return paths in API routes: early returns for each error case

## Module Design

**Exports:**
- Named exports only for components and utilities
- Default exports only where required by Next.js (`page.tsx`, `layout.tsx`, `route.ts`)
- Re-export barrel file used for MDX components: `src/components/mdx/index.ts`

**Barrel Files:**
- Used sparingly — only `src/components/mdx/index.ts` found
- No barrel file for `ui/`, `sections/`, or `layout/` — import each component directly

## i18n Patterns

- All user-visible strings come from translation files via `t('key')` or `t.rich('key', richComponents)`
- `t.raw('key')` used to retrieve typed arrays from messages (e.g., `t.raw('posts.tags') as string[]`)
- `richBold` pattern: inline `{ b: (chunks) => <strong className="...">chunks</strong> }` passed to `t.rich()`
- `setRequestLocale(locale)` called at the top of every server page component
- `locale` always sourced from `await params` (Next.js 15+ async params pattern)

## Styling Conventions

- Tailwind CSS v4 (CSS-first, no `tailwind.config.ts`) — theme tokens defined in `globals.css` as CSS custom properties
- Use CSS variable tokens (`text-text-primary`, `bg-surface`, `border-border-default`, `text-accent`) over hardcoded colors when available
- Hardcoded hex values allowed for one-off values not in the design token set (e.g., `text-[#f5f5f0]`, `text-[rgba(255,255,255,0.6)]`)
- `cn()` utility from `src/lib/utils.ts` (wraps `clsx`) used when class names are conditional
- `clamp()` used for responsive typography: `text-[clamp(40px,5vw,64px)]`
- Accessibility: `sr-only`, `focus:not-sr-only`, `aria-hidden="true"`, `aria-label`, `role="dialog"`, `aria-modal`, `aria-pressed` patterns consistently applied

---

*Convention analysis: 2026-04-06*
