# Phase 3: UI Primitives - Context

**Gathered:** 2026-03-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Libreria di componenti riutilizzabili che le pagine compongono: Button, MetricCard, CaseStudyCard, ProjectCard, TimelineBlock, Tag, Section wrapper. Ogni componente funziona in isolamento con styling corretto, hover states e comportamento responsive. Non include contenuti delle pagine (Phase 4-5) né layout shell (Phase 2).

</domain>

<decisions>
## Implementation Decisions

### Component API Design
- **D-01:** Componenti "dumb" con props tipizzate + children opzionali. I componenti NON gestiscono i18n internamente — la pagina traduce con next-intl e passa i valori via props. Massima riusabilità e zero accoppiamento con next-intl.
- **D-02:** CaseStudyCard padding responsivo: p-8 (32px) su mobile, md:p-12 (48px) su desktop. Segue il prototipo Figma, non il valore fisso 40px del piano originale.

### MetricCard Grid Layout
- **D-03:** MetricCard usa il pattern grid gap-[1px] dal prototipo Figma: il container ha border + bg del colore bordo, le card hanno bg-primary. Effetto griglia a celle condivise (tipo tabella), non card separate. Grid responsive: 3 colonne desktop, 2 tablet, 1 mobile.

### Component Verification
- **D-04:** Creare una route /dev/components (solo development, esclusa dal build di produzione) che mostra tutti i componenti con varianti, hover states, e responsive preview. Verifica visiva prima di procedere a Phase 4.

### Claude's Discretion
- **Button component:** Claude decide se un componente unico con prop `href` (renderizza Link o button) o due componenti separati (Button + LinkButton). Scegliere l'approccio più idiomatico per Next.js.
- **CaseStudyCard/ProjectCard API:** Claude decide se props fisse con layout locked o pattern composable con slots. Valutare in base alla complessità effettiva necessaria (il sito ha pochi use case per ogni card type).
- **Section wrapper:** Claude decide se il componente include section header opzionale (label monospace + title) o è solo layout wrapper. Valutare quante sezioni ripetono lo stesso pattern label+title.
- **Font mapping:** Claude configura il mapping font-mono → JetBrains Mono nel modo più idiomatico per Tailwind v4 + next/font. Il prototipo usa `font-['JetBrains_Mono',monospace]` inline ovunque — nel nostro progetto deve essere una utility class.
- **TimelineBlock connector:** Claude decide se il connettore visivo (linea orizzontale desktop, eventuale verticale mobile) vive nel componente, in un wrapper Timeline, o nel layout della pagina. Decidere in base a come il componente verrà usato.
- **TimelineBlock scope:** Claude decide se TimelineBlock serve solo per la homepage timeline (card compatta: date, ruolo, azienda, descrizione) o anche per l'About page. Guardare il copy delle due pagine per decidere.
- **TimelineBlock hover:** Claude decide se aggiungere hover border-accent/50 come nel prototipo Figma (coerente con le altre card) o lasciare senza hover (non interattivo).
- **Mobile timeline connector:** Claude decide se aggiungere una linea verticale a sinistra su mobile o lasciare card stackate senza connettore (come nel prototipo).
- **MetricCard number sizing:** Claude decide tra clamp() responsive o breakpoint fissi (text-4xl / text-5xl / text-[64px]) per il numero grande. Scegliere l'approccio che funziona meglio con Tailwind v4.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Design Specifications
- `implementation-plan.md` §1.3 "Componenti base" — Specifiche dettagliate per ogni componente: Button (2 varianti, padding, hover), Tag (monospace, uppercase), Section (section-gap, max-width), MetricCard (border, padding, accent number), CaseStudyCard (flex layout, tag, hover), ProjectCard (titolo, one-liner, status dot), TimelineBlock (card + connettore)
- `../job-search-2026/selfrules-redesign/figma-make-prompt.md` — Specifiche visive complete: palette, tipografia, spacing, border-radius 0px

### Figma Prototype Reference
- Figma Design: `https://www.figma.com/design/wZBnSrLsQmO83rW4grp4zX/website?node-id=0-1` — Design file del sito
- Figma Make: `https://www.figma.com/make/dp9sdxiPi31PLOmj2RDgEe/Document-Review` — Prototipo funzionante con codice React. Contiene l'implementazione di riferimento per tutti i componenti (inline nelle pagine Home.tsx, Work.tsx, Lab.tsx)

### Stack & Technical Decisions
- `STACK.md` — Technology choices, Tailwind v4 @theme pattern, next/font setup. "What NOT to Use" section.
- `PITFALLS.md` — 14 pitfalls con prevenzioni.
- `ARCHITECTURE.md` — Directory structure (src/components/ui/ per i primitives), component boundaries.

### Prior Phase Context
- `.planning/phases/01-foundation/01-CONTEXT.md` — Design tokens in @theme (D-03), i18n namespace pattern (D-02), font setup (Inter + JetBrains Mono)
- `.planning/phases/02-shell/02-CONTEXT.md` — Navbar/Footer patterns, monospace per email/dati, accent hover consistency

### Copy Source (per verificare i componenti con dati reali)
- `../job-search-2026/selfrules-redesign/homepage.md` — Dati per MetricCard, TimelineBlock, CTA buttons
- `../job-search-2026/selfrules-redesign/work-page.md` — Dati per CaseStudyCard
- `../job-search-2026/selfrules-redesign/lab-page.md` — Dati per ProjectCard

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nessun componente esistente — progetto greenfield. Phase 1 e 2 non ancora eseguite.

### Established Patterns (from Figma Make prototype)
- **Button pattern:** `inline-flex items-center justify-center h-12 px-8 font-medium transition-transform hover:-translate-y-1 rounded-none` (primary: bg-accent text-dark, secondary: border + transparent bg)
- **Card hover pattern:** `hover:border-[#E8A838]/40 transition-colors` — bordo accent con opacità al hover, usato su tutti i tipi di card
- **Tag pattern:** `px-3 py-1 text-xs font-mono uppercase tracking-widest text-secondary bg-surface border border-default`
- **Section label pattern:** `text-sm font-mono tracking-wider text-secondary mb-2 uppercase` sopra il section title
- **MetricCard grid:** `grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-border border border-default` con card bg-primary

### Integration Points
- Design tokens da `globals.css` @theme (Phase 1) — tutti i colori, spacing, border-radius
- Font exports da `src/lib/fonts.ts` — Inter + JetBrains Mono class names
- Shell layout da `src/app/[locale]/layout.tsx` (Phase 2) — i componenti vivono dentro il layout shell
- i18n messages da `src/i18n/messages/` — le pagine traducono e passano stringhe ai componenti via props

</code_context>

<specifics>
## Specific Ideas

- Il prototipo Figma Make è la reference implementation principale — i componenti nel sito finale devono produrre lo stesso risultato visivo
- MetricCard con effetto "griglia a celle" (gap-[1px]) è un elemento visivo distintivo — non usare card separate
- CaseStudyCard nel prototipo ha il metric number grande (56-72px) accent a destra con arrow icon — questo layout asimmetrico è intenzionale e d'impatto
- Il prototipo usa colori con opacità (text-black/60, border-black/10 in light mode) — nel nostro dark-mode-only project tradurre a text-secondary, border-default etc.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 03-ui-primitives*
*Context gathered: 2026-03-22*
