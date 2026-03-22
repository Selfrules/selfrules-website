# Phase 4: Homepage - Context

**Gathered:** 2026-03-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Tutte le 6 sezioni homepage con contenuto bilingue completo (IT + EN) e il linguaggio visivo che le inner pages erediteranno. Le sezioni: Hero, Come lavoro, Il percorso, Numeri non parole, Cosa faccio ora, Parliamo. Consuma i componenti Phase 3 (Button, MetricCard, Tag, TimelineBlock, Section) e crea 6 nuovi section components. Non include inner pages (Phase 5), animazioni (Phase 6), né SEO metadata (Phase 6).

</domain>

<decisions>
## Implementation Decisions

### Hero Section
- **D-01:** Contenuto posizionato nel terzo superiore della viewport (~30% dall'alto). Non centrato verticalmente. Sensazione editoriale e sicura di sé, coerente con Modello B.
- **D-02:** Nessun scroll cue visivo (niente freccia, niente gradient fade). Il contenuto parla da solo, gli utenti sanno scrollare.

### Section Component Architecture
- **D-03:** Creare un sub-componente `SectionHeader` condiviso che renderizza label monospace uppercase + title in modo consistente. Tutte le 5 sezioni con label+title lo importano. Se lo stile della label cambia, si aggiorna in un posto solo.
- **D-04:** Section components in `src/components/sections/` — cartella dedicata. Separazione pulita, e la sezione Contact potrebbe essere riutilizzata nelle inner pages (Phase 5).
- **D-05:** Tutte le 6 section components sono Server Components (contenuto statico, nessuna interattività lato client).

### i18n Content Structure
- **D-06:** Namespace deep per elemento: `homepage.hero.headline`, `homepage.hero.subtitle`, `homepage.metrics.metric1.number`, `homepage.howIWork.pillar1.title`. Ogni testo è una chiave separata. Tracciabilità chiara verso il copy sorgente.
- **D-07:** Strutture ripetute (6 metriche, 3 pillar, 4 timeline blocks) usano chiavi numerate: `homepage.metrics.metric1`, `homepage.metrics.metric2`, ecc. Non array. next-intl le gestisce nativamente.

### Claude's Discretion
- **Section wrapper composition:** Claude decide se ogni section component usa Section wrapper internamente (self-contained) o se la page.tsx compone Section + contenuto. Valutare quale produce codice più pulito per questa specifica pagina.
- **Timeline desktop overlap:** Claude decide come rappresentare visivamente le date sovrapposte (Designer 2012-18 e Developer 2016-20). Opzioni: colonne uguali con date che parlano da sole, o larghezze proporzionali. Valutare il prototipo Figma.
- **Timeline mobile connector:** Claude decide se la timeline verticale su mobile ha una linea connettrice a sinistra o solo card stackate con spacing. Valutare coerenza con il design language.
- **Timeline closing phrase:** Claude decide se la frase di chiusura ("La costante: sono sempre stato...") è sotto la timeline separata da spacing, o parte della timeline come 5° elemento. Valutare copy source e design.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Design Contract
- `.planning/phases/04-homepage/04-UI-SPEC.md` — Contratto visivo completo: layout per sezione, tipografia (4 ruoli, 2 pesi), colore (9 token + accent reserved list), spacing, responsive breakpoints, interaction states, copy IT/EN esatto, accessibility contract. DOCUMENTO PRIMARIO per l'implementazione.

### Design Specifications
- `implementation-plan.md` — Piano operativo dettagliato con layout per pagina, codice esempio per i componenti
- `../job-search-2026/selfrules-redesign/figma-make-prompt.md` — Specifiche visive dal Figma: palette, tipografia, spacing, micro-interactions

### Copy Source (COPIARE ESATTAMENTE)
- `../job-search-2026/selfrules-redesign/homepage.md` — Copy completo homepage IT + EN. Ogni stringa va copiata verbatim.
- `../job-search-2026/selfrules-redesign/microcopy.md` — CTA labels, credential tags, nav labels, availability tag

### Stack & Technical Decisions
- `STACK.md` — Scelte tecnologiche, proxy.ts pattern, Tailwind v4 @theme. "What NOT to Use" section.
- `PITFALLS.md` — 14 pitfalls con prevenzioni.
- `ARCHITECTURE.md` — Directory structure, component boundaries, layout patterns.

### Prior Phase Context
- `.planning/phases/01-foundation/01-CONTEXT.md` — i18n namespace pattern (D-02), design tokens in @theme (D-03)
- `.planning/phases/02-shell/02-CONTEXT.md` — Navbar/Footer patterns, monospace per email, accent hover consistency
- `.planning/phases/03-ui-primitives/03-CONTEXT.md` — Component API "dumb" con props (D-01), MetricCard grid gap-[1px] (D-03), Figma prototype reference URLs

### Figma Prototype
- Figma Design: `https://www.figma.com/design/wZBnSrLsQmO83rW4grp4zX/website?node-id=0-1`
- Figma Make: `https://www.figma.com/make/dp9sdxiPi31PLOmj2RDgEe/Document-Review` — Implementazione di riferimento React

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nessun codice esistente — progetto greenfield, nessuna fase ancora eseguita.

### Established Patterns (from prior phase decisions)
- Componenti Phase 3 "dumb" con props tipizzate — la pagina traduce con next-intl e passa valori via props (Phase 3 D-01)
- MetricCard usa grid gap-[1px] pattern per effetto griglia a celle condivise (Phase 3 D-03)
- Button con varianti primary/secondary, Tag monospace uppercase (Phase 3 patterns dal Figma)
- Section wrapper con max-width configurabile: 720px default, 1080px wide (Phase 3 spec)
- i18n: un file JSON per locale, namespace nested, la pagina traduce e i componenti ricevono stringhe (Phase 1 D-02, Phase 3 D-01)

### Integration Points
- `src/app/[locale]/page.tsx` — homepage entry point, importa tutti i 6 section components
- `src/components/ui/` — componenti Phase 3 (Button, MetricCard, Tag, TimelineBlock, Section)
- `src/i18n/messages/en.json` e `it.json` — aggiungere namespace `homepage.*` con tutte le stringhe
- `src/app/[locale]/layout.tsx` — shell layout (Navbar, Footer) già wrappa il contenuto

</code_context>

<specifics>
## Specific Ideas

- Hero nel terzo superiore della viewport — la homepage deve sentirsi editoriale, non convenzionale. Il contenuto non ha bisogno di gridare, è sicuro di sé.
- La UI-SPEC è il documento primario — ogni decisione visiva (colori, spacing, tipografia, responsive) è già definita lì. I section components devono implementare esattamente quel contratto.
- SectionHeader condiviso per mantenere la consistenza del pattern label+title su 5 sezioni.
- Copy va copiato ESATTAMENTE dai file sorgente — nessuna riscrittura, nessun riassunto, nessun "miglioramento" (REQ COPY-01).

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 04-homepage*
*Context gathered: 2026-03-22*
