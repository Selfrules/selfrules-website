# Phase 1: Foundation - Context

**Gathered:** 2026-03-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Project scaffold with Next.js 16, Tailwind v4 design tokens, fonts (Inter + JetBrains Mono), and i18n routing (next-intl). The base that every other phase builds on. No UI components, no content pages, no layout — just the technical foundation verified to work.

</domain>

<decisions>
## Implementation Decisions

### GitHub Repository
- **D-01:** Public repository. Coerente con Modello B — un PM che costruisce il suo sito in pubblico è un segnale di competenza.

### i18n Message Structure
- **D-02:** Chiavi raggruppate per namespace (page/section). Pattern: `homepage.hero.title`, `about.intro.headline`, `nav.links.about`. Un singolo file JSON per locale (`en.json`, `it.json`) con struttura nested per namespace.

### Design Token Organization
- **D-03:** Claude's discretion. Approccio ottimale per Tailwind v4 CSS-first: colori, spacing e breakpoint come CSS variables in `@theme`, typography scale integrata come appropriato. Claude sceglie l'organizzazione migliore.

### Placeholder Pages
- **D-04:** Pagine EN/IT con contenuto minimo verificabile: headline con nome font visibile, campioni di colore dei token principali, tag monospace — sufficiente per verificare che tokens, fonts e i18n routing funzionano. Non un design system showcase completo, ma abbastanza per validare tutti i success criteria.

### Claude's Discretion
- Token organization approach (D-03): Claude ha flessibilità su come strutturare @theme, utilities custom, e CSS variables — scegliere l'approccio più idiomatico per Tailwind v4.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Stack & Technical Decisions
- `.planning/research/STACK.md` — Technology choices, versions, patterns (proxy.ts, @theme, next/font). Critical: defines what NOT to use.
- `.planning/research/PITFALLS.md` — 14 pitfalls with prevention strategies. Phase 1 pitfalls: #1 (proxy.ts vs middleware.ts), #3 (tailwind.config.ts), #4 (cookie redirect loop), #5 (font CLS).
- `.planning/research/ARCHITECTURE.md` — Directory structure, component boundaries, data flow diagram.

### Implementation Details
- `implementation-plan.md` §Fase 0 + §Fase 1 — Comandi di setup, directory structure, configurazione i18n, design tokens, font loading, componenti base.

### Design Specifications
- `../job-search-2026/selfrules-redesign/figma-make-prompt.md` — Color palette, typography scale, spacing values, border-radius rules.

### Copy Source (for verifying i18n works)
- `../job-search-2026/selfrules-redesign/microcopy.md` — Nav labels and basic strings to verify i18n routing.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — greenfield project, no existing code.

### Established Patterns
- None — this phase establishes the patterns all other phases follow.

### Integration Points
- `proxy.ts` will be the entry point for next-intl i18n routing (NOT middleware.ts)
- `globals.css` will contain `@theme` with all design tokens
- `src/lib/fonts.ts` will export font configurations used by root layout
- `src/i18n/` will contain routing and request configuration
- `src/i18n/messages/` will contain `en.json` and `it.json` with namespace-organized keys

</code_context>

<specifics>
## Specific Ideas

No specific requirements — standard Next.js 16 + Tailwind v4 + next-intl setup following documented patterns from STACK.md and ARCHITECTURE.md.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-03-22*
