# selfrules-website — Istruzioni per Claude Code

> Questo progetto è il sito web selfrules.org.
> Leggi QUESTO file e il piano di implementazione prima di scrivere qualsiasi codice.

## Obiettivo
Costruire il sito web personale di Mattia De Luca (selfrules.org) da zero.
Il sito sostituirà il sito attuale su https://selfrules.org/it.

## File di riferimento

### ⚠️ PRIMA DI TUTTO — Design Update v25
- **`docs/design/DESIGN-UPDATE-v25.md`** — LEGGERE PER PRIMO. Contiene 9 modifiche al design (font, componenti, signature elements) verificate nel prototipo Figma v25. Applicare tutte le modifiche PRIMA di iniziare a scrivere codice.

### Piano e layout (ESECUZIONE)
- **Piano di implementazione:** `./implementation-plan.md` — il piano operativo dettagliato con layout per-page, comandi, codice esempio.
- **Design specs (originali):** `docs/copy/figma-make-prompt.md` — specifiche visive base per pagina. In caso di conflitto, DESIGN-UPDATE-v25.md ha la precedenza.

### Copy sorgente (CONTENUTO)
- **Copy del sito:** `docs/copy/` — 10 file con tutto il copy IT + EN e specifiche SEO. COPIARE ESATTAMENTE.

### GSD Research (RIFERIMENTO TECNICO)
- **STACK.md** — in `.planning/research/STACK.md`. Stack research completa, pattern di codice, "What NOT to Use".
- **PITFALLS.md** — in `.planning/research/PITFALLS.md`. 14 pitfalls con mitigazioni.
- **REQUIREMENTS.md** — in `.planning/milestones/v1.0-REQUIREMENTS.md`. 65 requisiti con ID.
- **ARCHITECTURE.md** — in `.planning/research/ARCHITECTURE.md`. Directory structure, component boundaries.
- **STATE.md** — in `.planning/STATE.md`. Tracker avanzamento progetto.
- **ROADMAP.md** — in `.planning/ROADMAP.md`. Struttura fasi.

### Documentazione aggiuntiva (in `docs/`)
- **`docs/design/`** — Design specs, gap analysis, pixel-perfect fixes
- **`docs/audits/`** — Site audit reports
- **`docs/reference/`** — Analytics events, deploy checklist, glossario IT, Remotion guide
- **`docs/drafts/`** — Bozze e documenti di lavoro
- **`docs/job-search/`** — Materiali LinkedIn, CV, analisi job search (non parte del sito)

## Stack tecnologico
- Next.js 16.2 (App Router, Turbopack) — NON 15. Usa `proxy.ts` (non middleware.ts)
- TypeScript 5.x
- Tailwind CSS v4 (CSS-first: `@theme` in globals.css, NO tailwind.config.ts)
- next-intl 4.8.x per i18n (IT + EN), `localePrefix: 'as-needed'`, `localeDetection: false`
- @next/mdx per blog (NON next-mdx-remote)
- next/font/google per Inter + JetBrains Mono
- Umami Cloud per analytics (cookieless)
- Vercel per deploy

## Regole
1. Segui il piano in `implementation-plan.md` fase per fase
2. Ogni fase ha criteri di accettazione — verificali TUTTI prima di passare alla fase successiva
3. Il copy è DEFINITIVO — non modificarlo, copialo esattamente dai file sorgente
4. Il design system è definito nelle specs — rispettalo al pixel
5. Dopo ogni fase, fai una valutazione critica del tuo lavoro
6. Se qualcosa non funziona, documenta il problema e proponi una soluzione prima di andare avanti

<!-- GSD:project-start source:PROJECT.md -->
## Project

**selfrules.org**

Sito web personale di Mattia De Luca (selfrules.org), posizionato come **Modello B — identità aspirazionale**. Il sito di un IC (individual contributor) che pensa ad alta voce: mostra come ragiona, come prende decisioni di prodotto, cosa ha costruito e con quali risultati. Sito statico multilingua (IT + EN), dark-mode first, costruito da zero per sostituire l'attuale versione su selfrules.org.

**Core Value:** Un hiring manager o recruiter che atterra su selfrules.org deve pensare "questo è uno che sa quello che fa" — il sito comunica competenza attraverso specificità e risultati, mai attraverso self-promotion o richiesta di opportunità.

### Constraints

- **Stack:** Next.js 16.2 (App Router, Turbopack), TypeScript, Tailwind CSS v4 (CSS-first), next-intl 4.8.x per i18n, Vercel per deploy — stack già deciso, non negoziabile. Usa proxy.ts (non middleware.ts)
- **Copy:** Il copy è DEFINITIVO. Copiarlo esattamente dai file sorgente. Nessuna riscrittura, nessun riassunto, nessun "miglioramento"
- **Design:** 0px border-radius ovunque. Palette specifica (#0A0A0B, #F5F5F0, #E8A838). Inter + JetBrains Mono. Spacing generoso (80-160px tra sezioni)
- **Modello B:** Mai framing job-seeker. Disponibilità e CV solo in Contatto e Footer
- **Timeline:** Target luglio 2026 per la job search — il sito deve essere live ben prima
- **Locale routing:** EN è il default (no prefix), IT usa /it prefix (`localePrefix: 'as-needed'`)
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Critical Decision: Next.js 16, Not 15
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
| JSON-LD (manual) | -- | Structured data | Render a `<script type="application/ld+json">` in page components. No library needed for Person + BreadcrumbList + Article schemas. |
### Analytics
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Umami Cloud | latest | Privacy-first analytics | Cookieless, no consent banner needed. GDPR compliant by design. Cloud plan has a free tier (10K pageviews/month -- more than enough for a personal site). |
### Deployment
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Vercel | -- | Hosting + CI/CD | Native Next.js platform. Zero config deployment. Auto preview deploys on PRs. Free tier covers personal sites. |
## Stack Details and Patterns
### Tailwind CSS v4: No Config File
### next-intl with Next.js 16: proxy.ts Pattern
### next/font: Variable Font Setup
### @next/mdx for Blog
- `next-mdx-remote` is poorly maintained as of 2025
- `@next/mdx` is server-rendered by default, no client JS
- MDX files can be imported directly or used as pages
### SEO: generateMetadata Pattern
### Umami Integration
### Scroll Animations: No Library
- One animation pattern (fade-in on scroll) does not justify a 30KB+ library
- Native IntersectionObserver is supported everywhere
- Must respect `prefers-reduced-motion`
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
## Installation
# Create project (Next.js 16.2, TypeScript, Tailwind v4, App Router, Turbopack)
# Core dependencies
# MDX plugins (optional, for blog post formatting)
# Dev dependencies
## Version Compatibility Matrix
| Package | Version | Requires | Verified |
|---------|---------|----------|----------|
| next | 16.2.x | React 19, Node 18.18+ | YES - official blog |
| next-intl | 4.8.x | Next.js 14+ (supports 16) | YES - next-intl docs |
| @next/mdx | latest | Next.js 13+ | YES - Next.js docs |
| @tailwindcss/typography | latest | Tailwind v4 | YES - GitHub + docs |
| Umami Cloud | -- | Any (script tag) | YES - umami.is docs |
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
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD workflow enforcement e developer profile rimossi: non necessari per questo progetto che ha già un piano operativo dettagliato in implementation-plan.md -->
