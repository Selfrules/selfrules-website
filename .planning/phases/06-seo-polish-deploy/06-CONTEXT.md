# Phase 6: SEO, Polish & Deploy - Context

**Gathered:** 2026-03-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Rendere il sito production-ready: SEO metadata completo per ogni pagina (title, description, OG, canonical, hreflang, JSON-LD), accessibility audit e fix (skip-to-content, focus styles, contrast, semantic HTML, prefers-reduced-motion), performance optimization (Lighthouse 95+, bundle < 100KB, Core Web Vitals), scroll animations (fade-in on scroll con IntersectionObserver), e deploy live su selfrules.org via Vercel con HTTPS e www redirect. Non include light mode (v2 — VIS-01), OG image dinamiche per pagina (v2 — VIS-02), né case study detail pages (v2 — CONT-01).

</domain>

<decisions>
## Implementation Decisions

### Scroll Animations
- **D-01:** Animazione fade-in solo a livello di sezione. Ogni section component fa fade-in quando entra in viewport. Hero section senza animazione (già visibile al caricamento). Nessuno stagger su card individuali.
- **D-02:** Stile fade-up: opacità 0→1 + translate-y 20-30px verso l'alto, ~600ms ease-out. Classico, elegante, coerente con il design editoriale.
- **D-03:** Trigger a 10-15% visibilità — la sezione inizia il fade-in appena il bordo superiore entra nel 85-90% inferiore della viewport. L'utente vede l'animazione senza aspettare.
- **D-04:** prefers-reduced-motion disabilita tutte le animazioni (A11Y-05). Nessun movimento, contenuto visibile immediatamente.

### Meta Title & OG
- **D-05:** Formato meta title: "Page — Mattia De Luca" per tutte le inner pages. Homepage: "Mattia De Luca — Product Manager". Versione IT: stessi titoli pagina localizzati.
- **D-06:** Un'unica OG image statica 1200x630 usata come fallback per tutte le pagine in v1. OG image dinamiche per pagina rimandate a v2 (VIS-02).
- **D-07:** Meta description copiate esattamente da microcopy.md (IT e EN). Nessuna riscrittura — coerente con COPY-01.

### JSON-LD Structured Data
- **D-08:** Person schema essenziale: name, jobTitle, url, sameAs (LinkedIn, GitHub). Presente nella homepage e/o About page.
- **D-09:** BreadcrumbList su tutte le inner pages (About, Work, Lab, Approach, Blog listing, Blog post). Struttura: Home > Page Name. Solo nel JSON-LD, nessun breadcrumb visivo nell'UI.
- **D-10:** Article schema (BlogPosting) per il blog post: headline, datePublished, author (link al Person), description.

### Deploy & Domain
- **D-11:** Deploy diretto su Vercel — collegare il repo, configurare dominio selfrules.org. Il vecchio sito viene sostituito, taglio netto.
- **D-12:** Nessun redirect da vecchi URL necessario. Il vecchio sito ha struttura diversa e nessun SEO equity significativo da preservare.
- **D-13:** www.selfrules.org → selfrules.org redirect configurato in Vercel (DEPL-03).

### Claude's Discretion
- OG image statica: Claude decide il design (tipografia dark su sfondo scuro, nome + tagline, coerente col design language del sito)
- Accessibility audit: Claude decide approccio e tool (axe-core, Lighthouse, manual checks) per raggiungere i target
- Performance optimization: Claude ottimizza bundle size e CWV secondo i target (PERF-01 through PERF-06)
- Smooth scroll implementation per anchor links (#contact) — PLSH-02
- Active state nav links styling — PLSH-03
- Layout shift prevention (CLS < 0.05) — PLSH-04
- SEO-07 (html lang attribute) — implementazione tecnica standard

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Stack & Technical Decisions
- `.planning/research/STACK.md` — Technology choices, IntersectionObserver pattern (no Framer Motion), Umami integration, Next.js Metadata API, sitemap.ts/robots.ts convention, JSON-LD manual approach. "What NOT to Use" section.
- `.planning/research/PITFALLS.md` — 14 pitfalls con prevenzioni.
- `.planning/research/ARCHITECTURE.md` — Directory structure, component boundaries.

### Implementation Details
- `implementation-plan.md` — Piano operativo dettagliato, codice esempio per SEO, animations, deploy.

### Design Specifications
- `../job-search-2026/selfrules-redesign/figma-make-prompt.md` — Palette, tipografia, spacing, micro-interactions.

### Copy Source (META DESCRIPTIONS)
- `../job-search-2026/selfrules-redesign/microcopy.md` — Meta title/description per ogni pagina in IT e EN. COPIARE ESATTAMENTE.

### Prior Phase Context
- `.planning/phases/01-foundation/01-CONTEXT.md` — Design tokens in @theme (D-03), i18n namespace pattern (D-02)
- `.planning/phases/02-shell/02-CONTEXT.md` — Umami proxied via rewrites (D-17), navbar scroll behavior (D-14)
- `.planning/phases/03-ui-primitives/03-CONTEXT.md` — Component API "dumb" con props (D-01)
- `.planning/phases/04-homepage/04-CONTEXT.md` — Server Components (D-05), section components in src/components/sections/ (D-04), UI-SPEC reference
- `.planning/phases/05-inner-pages/05-CONTEXT.md` — @tailwindcss/typography (D-09), blog structure (D-08), PageCTA (D-10)

### UI Contract (inherited)
- `.planning/phases/04-homepage/04-UI-SPEC.md` — Contratto visivo completo, tipografia, colori, spacing, interaction states

### Figma Prototype
- Figma Design: `https://www.figma.com/design/wZBnSrLsQmO83rW4grp4zX/website?node-id=0-1`
- Figma Make: `https://www.figma.com/make/dp9sdxiPi31PLOmj2RDgEe/Document-Review`

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nessun codice esistente — progetto greenfield, nessuna fase ancora eseguita.

### Established Patterns (from prior phase decisions)
- IntersectionObserver nativo per animazioni — no Framer Motion (STACK.md)
- Next.js Metadata API (generateMetadata) per tutti i meta tags — no next-seo (STACK.md)
- sitemap.ts e robots.ts convention-based in app directory (STACK.md)
- JSON-LD come `<script type="application/ld+json">` manuale — no librerie (STACK.md)
- Umami Cloud cookieless, proxied via Next.js rewrites (Phase 2 D-17)
- Tutti i section components sono Server Components (Phase 4 D-05)

### Integration Points
- `src/app/[locale]/layout.tsx` — root layout dove aggiungere global metadata, JSON-LD Person, OG defaults
- `src/app/[locale]/*/page.tsx` — ogni page usa generateMetadata per title/description/OG specifici
- `src/app/sitemap.ts` — generazione sitemap con tutte le route IT + EN
- `src/app/robots.ts` — robots.txt configuration
- `src/components/sections/*.tsx` — aggiungere IntersectionObserver wrapper per fade-in
- `globals.css` — animation keyframes e utilities per fade-in, prefers-reduced-motion media query
- Vercel dashboard — domain configuration, environment variables, deploy settings

</code_context>

<specifics>
## Specific Ideas

- Animazioni sottili e editoriali — fade-up per sezione, niente effetti appariscenti. Il sito comunica attraverso tipografia e contenuto, le animazioni sono un tocco di polish, non lo show.
- Meta title pattern "Page — Mattia De Luca" rafforza il personal branding senza essere self-promotional. Coerente con Modello B.
- OG image statica per v1 — pragmatico, efficace. Le OG dinamiche sono un v2 feature (VIS-02).
- Deploy diretto, nessun redirect — il vecchio sito non ha equity da preservare. Taglio netto.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 06-seo-polish-deploy*
*Context gathered: 2026-03-22*
