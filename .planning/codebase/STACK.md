# Technology Stack

**Analysis Date:** 2026-04-06

## Languages

**Primary:**
- TypeScript 5.x - All application code in `src/`, config files (`next.config.ts`, `playwright.config.ts`, `eslint.config.mjs`)

**Secondary:**
- CSS - Global styles and Tailwind theme in `src/app/globals.css`
- MDX - Blog post content in `src/app/[locale]/notes/*/content.{en,it}.mdx`

## Runtime

**Environment:**
- Node.js (no explicit version pinned; no `.nvmrc` or `engines` field in `package.json`)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 16.2.1 - App Router, SSR/SSG, routing via `src/app/`
- React 19.2.4 - UI component library
- next-intl 4.8.x - i18n (IT + EN), configured in `src/i18n/routing.ts` and `src/i18n/request.ts`

**Build/Dev:**
- @next/mdx 16.2.1 - MDX processing for blog posts, configured in `next.config.ts`
- @tailwindcss/postcss 4.x - PostCSS integration, configured in `postcss.config.mjs`
- Tailwind CSS 4.x - CSS-first config via `@theme` blocks in `src/app/globals.css` (no `tailwind.config.ts`)
- @tailwindcss/typography 0.5.x - Prose styles for MDX content
- remark-gfm 4.x - GitHub Flavored Markdown support in MDX pipeline

**Testing:**
- @playwright/test 1.58.x - E2E tests in `e2e/navigation.spec.ts`
- @axe-core/cli 4.11.x - Accessibility auditing (CLI tool, not wired into test runner)

**Video/Animation:**
- remotion 4.0.439 - Programmatic video rendering
- @remotion/bundler, @remotion/cli, @remotion/renderer 4.0.439 - Remotion toolchain
- Video compositions in `remotion/Root.tsx` (CasaHunter case study video)

## Key Dependencies

**Critical:**
- `next` 16.2.1 - Framework core; all routing, rendering, API routes depend on it
- `next-intl` 4.8.x - All pages are wrapped in locale-aware routing; breaking this breaks navigation
- `@next/mdx` 16.2.1 - Blog posts are `.mdx` files; removing this breaks the notes section
- `clsx` 2.1.1 - Used via `src/lib/utils.ts` `cn()` helper throughout components

**Infrastructure:**
- `@mdx-js/loader` 3.1.1 - Webpack/Turbopack loader for MDX files
- `@mdx-js/react` 3.1.1 - MDX React provider
- `@types/mdx` 2.0.13 - TypeScript types for MDX

## Configuration

**Environment:**
- `.env.example` documents one public var: `NEXT_PUBLIC_UMAMI_ID` (Umami analytics website ID)
- `.env.local` present (not read; contains secrets)
- Two additional secrets required at runtime for the feedback API: `NOTION_API_KEY`, `NOTION_FEEDBACK_DB_ID` (referenced in `src/app/api/feedback/route.ts`)
- Vercel deployment reads env vars from Vercel dashboard

**Build:**
- `next.config.ts` - Main Next.js config; applies next-intl and MDX plugins, adds Umami proxy rewrite, defines `pageExtensions`
- `postcss.config.mjs` - PostCSS with `@tailwindcss/postcss` plugin
- `tsconfig.json` - `strict: true`, `paths: { "@/*": ["./src/*"] }` alias
- `vercel.json` - Sets security headers, font cache headers, and a permanent redirect for `/it/home → /it`
- `eslint.config.mjs` - ESLint 9 flat config using `eslint-config-next` (core-web-vitals + typescript)

**Prebuild script:**
- Injects `src/lib/build-info.ts` with the current git commit count before each build (used as a version indicator)

## Platform Requirements

**Development:**
- `npm run dev` - Next.js dev server with Turbopack (Next 16 default)
- `npm run remotion:studio` - Remotion Studio for video composition preview

**Production:**
- Deployed to Vercel (configured via `vercel.json` and framework: `nextjs`)
- Static params generated for `en` and `it` locales via `generateStaticParams()` in `src/app/[locale]/layout.tsx`

---

*Stack analysis: 2026-04-06*
