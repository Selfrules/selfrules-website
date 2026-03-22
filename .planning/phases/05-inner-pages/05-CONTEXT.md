# Phase 5: Inner Pages - Context

**Gathered:** 2026-03-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Tutte le inner pages (About, Work, Lab, Approach, Blog listing + Blog post) con copy bilingue completo (IT + EN) e compliance Modello B. Consuma i componenti Phase 3 (Button, CaseStudyCard, ProjectCard, Tag, Section) e i section components Phase 4 (SectionHeader). Crea 6 nuove page routes + 1 componente PageCTA condiviso. Non include case study detail pages (v2 — CONT-01), animazioni scroll (Phase 6), né SEO metadata (Phase 6).

</domain>

<decisions>
## Implementation Decisions

### About Page: Career Blocks
- **D-01:** Career blocks (4 esperienze) come prose sections, NON come card/TimelineBlock. Company name come heading bold, date monospace sotto, poi paragrafi narrativi. Max-width 720px. Il testo respira — la pagina About scorre come un saggio editoriale, non come un elenco di card.
- **D-02:** Sezione "Cosa credo" (3 principi) come prose sequenziale: titoli bold come sottotitoli nel flusso della pagina, paragrafi sotto. Stesso ritmo delle career sections. La pagina scorre uniforme.

### About Page: Sezione Personale
- **D-03:** Claude's discretion per "Fuori dal lavoro": stesso flusso prose o separata visivamente (bg-surface / divisore). Claude valuta in base al risultato complessivo della pagina.

### Work Page: Case Study Cards
- **D-04:** CaseStudyCard NON cliccabili in v1. Nessun href, nessun hover "vai al dettaglio". Le detail pages (/work/[slug]) sono v2 (CONT-01). Il preview text nella card è sufficiente. Quando le detail pages arrivano, si aggiunge il link.
- **D-05:** Solo 2 case study card in v1: Payments Rescue + Cashless System. Card 3 (LeadsBridge) non esiste — non mostrarla. Nota [BOZZA] sulla Card 2 va preservata come nel copy sorgente.

### Lab Page: CasaHunter Detail
- **D-06:** CasaHunter come sezione espansa inline — tutto il dettaglio direttamente nella Lab page: heading, one-liner, poi tutte le sottosezioni (problema, cosa fa, decisione di prodotto, stack tags, stato). Nessuna pagina separata. MoneyMind come "Prossimamente" con one-liner.

### Blog: Struttura e i18n
- **D-07:** Blog listing page minimale: headline + intro, poi lista di post con data monospace + titolo cliccabile + excerpt 1 riga. Con 1 post la pagina sarà quasi vuota — ed è ok.
- **D-08:** Blog post con slug unico per entrambe le lingue. Struttura: `src/app/[locale]/blog/why-i-prototype-in-code/` con `content.en.mdx`, `content.it.mdx`, e `page.tsx` loader. URL: `/blog/why-i-prototype-in-code` (EN), `/it/blog/why-i-prototype-in-code` (IT). Coerente con Out of Scope "No multi-language URL slugs".
- **D-09:** Prose styling per blog post: @tailwindcss/typography, max-width 720px, line-height 1.7-1.8 come da requisito PAGE-06.

### CTA Pattern
- **D-10:** Componente PageCTA flessibile condiviso da tutte le inner pages. Accetta testo, 1-2 button props (primary + secondary opzionale). Non è la sezione Contact completa della homepage — è più leggero: frase invitante + bottoni. Ogni pagina lo usa con contenuto diverso dal copy sorgente.

### Modello B Compliance (cross-page)
- **D-11:** Verificare che nessuna inner page abbia framing "job seeker". Disponibilità e CV solo in Contact section (homepage) e Footer. Le storie dei case study e dell'About page partono dal problema/risultato, non da "I worked on" (MODB-04).

### Claude's Discretion
- **About "Fuori dal lavoro":** Claude decide se tenerla nel flusso prose o separarla visivamente (D-03).
- **Blog post metadata:** Claude decide come gestire frontmatter MDX (title, date, excerpt, locale) per il page.tsx loader.
- **Approach page layout:** 5 sezioni numerate a 720px. Claude decide se servono numbered markers visivi (circle/line) o basta il numero nel titolo come nel copy sorgente.
- **Lab stack tags:** Claude decide come presentare la lista stack di CasaHunter (Tag components inline, o semplice testo monospace).
- **Blog listing empty state:** Claude decide il copy per quando ci saranno 0 post (edge case futuro — non prioritario ma buona pratica).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Design Contract
- `.planning/phases/04-homepage/04-UI-SPEC.md` — Contratto visivo della homepage. Le inner pages ereditano il linguaggio visivo (tipografia, colori, spacing, interaction states) definito qui.

### Design Specifications
- `implementation-plan.md` — Piano operativo dettagliato con layout per pagina, codice esempio
- `../job-search-2026/selfrules-redesign/figma-make-prompt.md` — Specifiche visive complete: palette, tipografia, spacing

### Copy Source (COPIARE ESATTAMENTE)
- `../job-search-2026/selfrules-redesign/about-page.md` — Copy completo About IT + EN
- `../job-search-2026/selfrules-redesign/work-page.md` — Copy completo Work IT + EN (solo 2 card: Payments + Cashless)
- `../job-search-2026/selfrules-redesign/lab-page.md` — Copy completo Lab IT + EN
- `../job-search-2026/selfrules-redesign/approach-page.md` — Copy completo Approach IT + EN
- `../job-search-2026/selfrules-redesign/blog-prototype-in-code.md` — Copy completo blog post IT + EN
- `../job-search-2026/selfrules-redesign/microcopy.md` — CTA labels, nav labels, meta descriptions

### Stack & Technical Decisions
- `STACK.md` — Scelte tecnologiche, @next/mdx pattern, @tailwindcss/typography, proxy.ts. "What NOT to Use" section.
- `PITFALLS.md` — 14 pitfalls con prevenzioni.
- `ARCHITECTURE.md` — Directory structure, component boundaries, layout patterns.

### Prior Phase Context
- `.planning/phases/01-foundation/01-CONTEXT.md` — i18n namespace pattern (D-02), design tokens in @theme (D-03)
- `.planning/phases/02-shell/02-CONTEXT.md` — Navbar/Footer patterns, monospace per email, accent hover consistency
- `.planning/phases/03-ui-primitives/03-CONTEXT.md` — Component API "dumb" con props (D-01), CaseStudyCard layout, ProjectCard, Tag pattern
- `.planning/phases/04-homepage/04-CONTEXT.md` — SectionHeader condiviso (D-03), section components in src/components/sections/ (D-04), Server Components (D-05), i18n deep namespace (D-06/D-07)

### Figma Prototype
- Figma Design: `https://www.figma.com/design/wZBnSrLsQmO83rW4grp4zX/website?node-id=0-1`
- Figma Make: `https://www.figma.com/make/dp9sdxiPi31PLOmj2RDgEe/Document-Review`

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nessun codice esistente — progetto greenfield, nessuna fase ancora eseguita.

### Established Patterns (from prior phase decisions)
- Componenti Phase 3 "dumb" con props tipizzate — la pagina traduce e passa valori via props (Phase 3 D-01)
- CaseStudyCard: flex layout, tag, title, preview, key metric, hover translate-y + border-accent (Phase 3)
- ProjectCard: title, one-liner, tech stack tags, status dot, hover border-accent (Phase 3)
- Tag: monospace, uppercase, tracking-wide, text-secondary (Phase 3)
- Section wrapper: max-width 720px default, 1080px wide (Phase 3)
- SectionHeader: label monospace uppercase + title (Phase 4 D-03)
- Section components in src/components/sections/ (Phase 4 D-04)
- Tutti Server Components per contenuto statico (Phase 4 D-05)
- i18n: namespace deep per elemento, un file JSON per locale (Phase 1 D-02, Phase 4 D-06/D-07)
- Button: primary (accent bg, dark text) + secondary (transparent, border) (Phase 3)

### Integration Points
- `src/app/[locale]/about/page.tsx` — About page entry
- `src/app/[locale]/work/page.tsx` — Work page entry
- `src/app/[locale]/lab/page.tsx` — Lab page entry
- `src/app/[locale]/approach/page.tsx` — Approach page entry (nota: navbar usa "Notes" EN / "Note" IT per il blog)
- `src/app/[locale]/blog/page.tsx` — Blog listing entry
- `src/app/[locale]/blog/why-i-prototype-in-code/page.tsx` — Blog post loader + content.en.mdx + content.it.mdx
- `src/components/ui/` — Button, CaseStudyCard, ProjectCard, Tag, Section (Phase 3)
- `src/components/sections/` — SectionHeader, PageCTA (nuovo)
- `src/i18n/messages/en.json` e `it.json` — aggiungere namespace per ogni inner page

</code_context>

<specifics>
## Specific Ideas

- L'About page scorre come un saggio editoriale — prose sections per i career blocks, nessuna card. Il testo respira a 720px. Stesso ritmo per i principi.
- CaseStudyCard non cliccabili in v1 — il preview nella card è sufficiente. Nessun dead link, nessun "coming soon".
- Solo 2 case study in v1 (Payments + Cashless). La terza non esiste ancora.
- CasaHunter è un mini caso studio nella Lab page — tutto il dettaglio inline, non dietro un link.
- Blog con slug unico per lingua — coerente con la decisione Out of Scope, nessuna complessità di routing extra.
- PageCTA flessibile — non la sezione Contact completa della homepage. Più leggero, adattabile al tono di ogni pagina.
- Copy va copiato ESATTAMENTE dai file sorgente — nessuna riscrittura, nessun riassunto (REQ COPY-01).

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 05-inner-pages*
*Context gathered: 2026-03-22*
