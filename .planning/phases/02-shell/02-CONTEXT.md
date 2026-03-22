# Phase 2: Shell - Context

**Gathered:** 2026-03-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Layout wrapper navigabile a tutti i viewport: fixed navbar con scroll behavior, mobile hamburger menu full-screen, language toggle IT/EN, footer minimale, pagina 404 con copy bilingue, e integrazione Umami analytics (proxied). Ogni pagina futura condividerà questa shell. Non include componenti UI riutilizzabili (Phase 3) né contenuti delle pagine (Phase 4-5).

</domain>

<decisions>
## Implementation Decisions

### Mobile Menu
- **D-01:** Animazione slide-in da destra (~300ms transition). Il pannello occupa l'intera viewport, sfondo bg-primary.
- **D-02:** Contenuto del menu: solo navigation links + language toggle in basso, separati da un divider 1px. Nessun link social, email, o footer info nel menu.
- **D-03:** Dimensione link nel menu: grande (32-36px). Generoso spacing tra le voci per easy tap targets.
- **D-04:** Hamburger icon a sinistra, logo SELFRULES al centro o a fianco, close [X] in alto a destra.
- **D-05:** Focus trap attivo quando il menu è aperto. Escape chiude il menu. Scroll bloccato sul body.

### Language Toggle
- **D-06:** Desktop: testo separato "IT / EN" nella navbar. Lingua attiva in colore primario (#F5F5F0), lingua inattiva in muted (#5A5A5E). Click sulla inattiva per switchare.
- **D-07:** Mobile: toggle NON visibile nella navbar mobile. Vive solo dentro il mobile menu, in fondo sotto i nav link dopo il divider.
- **D-08:** Switching lingua preserva il path corrente (next-intl gestisce questo nativamente).

### Footer Layout
- **D-09:** Layout riga singola compatta (desktop): bio tagline a sinistra, link (email, LinkedIn, GitHub, CV PDF) a destra. Credit "Designed and built by Mattia De Luca" sotto, centrato o a sinistra. Separatore 1px sopra il footer.
- **D-10:** Email in stile monospace (JetBrains Mono) con hover accent (#E8A838), coerente con la sezione contatto homepage.
- **D-11:** Su mobile il footer stacka verticalmente (bio sopra, link sotto, credit in fondo).

### 404 Page
- **D-12:** Full shell (navbar + footer normali). Contenuto centrato nella viewport: headline con copy dal microcopy.md + link "→ Back to homepage". Niente illustrazioni o elementi decorativi.
- **D-13:** Copy bilingue: IT "Questa pagina non esiste. Ma il resto del sito sì." / EN "This page doesn't exist. But the rest of the site does."

### Navbar (from specs — no discussion needed)
- **D-14:** Fixed top, transparent di default, transizione a bg-primary/90 + backdrop-blur on scroll. Thin bottom border 1px muted (#1A1A1F).
- **D-15:** Logo "SELFRULES" bold monospace all-caps letter-spaced a sinistra. Nav links a destra: About, Work, Lab, Notes, Let's talk (accent), IT/EN toggle.
- **D-16:** Labels IT: SELFRULES, Chi sono, Lavori, Lab, Note, Parliamo. Labels EN: SELFRULES, About, Work, Lab, Notes, Let's talk.

### Analytics
- **D-17:** Umami Cloud script integrato, cookieless. Proxied attraverso Next.js rewrites per bypass adblocker (ANLT-02).

### Claude's Discretion
- Navbar scroll threshold (quanti px di scroll prima del background change)
- Hamburger → X animation style
- Footer responsive breakpoint
- Umami proxy path configuration
- 404 page typography sizing

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Stack & Technical Decisions
- `STACK.md` — Technology choices, proxy.ts pattern, Tailwind v4 @theme, next/font setup. Critical: "What NOT to Use" section.
- `PITFALLS.md` — 14 pitfalls. Phase 2 relevant: #1 (proxy.ts vs middleware.ts), #4 (cookie redirect loop with localeDetection).
- `ARCHITECTURE.md` — Directory structure, component boundaries, layout patterns.

### Implementation Details
- `implementation-plan.md` — Comandi, directory structure, codice esempio per layout, navbar, footer.

### Design Specifications
- `../job-search-2026/selfrules-redesign/figma-make-prompt.md` — Navigation specs (fixed top, scroll behavior, wordmark), Footer specs (minimal one-line), visual style (0px border-radius, 1px borders #1A1A1F).

### Copy Source
- `../job-search-2026/selfrules-redesign/microcopy.md` — Nav labels IT/EN, footer bio, footer credit, 404 copy, CTA labels. COPY EXACTLY.

### Prior Phase Context
- `.planning/phases/01-foundation/01-CONTEXT.md` — i18n namespace structure (D-02), design tokens already established.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None yet — greenfield project. Phase 1 (Foundation) establishes the base but hasn't been executed.

### Established Patterns (from Phase 1 decisions)
- `proxy.ts` for i18n routing (NOT middleware.ts)
- `globals.css` with `@theme` for all design tokens (colors, spacing, typography)
- `src/lib/fonts.ts` exports Inter + JetBrains Mono configurations
- `src/i18n/messages/en.json` and `it.json` with namespace-organized keys (e.g., `nav.links.about`)

### Integration Points
- Root layout (`src/app/[locale]/layout.tsx`) — shell components (Navbar, Footer) wrap all page content here
- `proxy.ts` — handles locale routing, language toggle relies on this
- Design tokens from `globals.css` — navbar colors, footer styling, mobile menu backdrop
- Font exports from `src/lib/fonts.ts` — SELFRULES wordmark uses JetBrains Mono, nav links use Inter

</code_context>

<specifics>
## Specific Ideas

- Mobile menu slide-in da destra, con link grandi (32-36px) e spacing generoso — l'obiettivo è un feeling "typographic-first", non un menu da app mobile
- Footer email in monospace con accent hover — coerente con la sezione contatto della homepage (anticipazione visiva)
- 404 page ultra-minimal: solo testo centrato, niente decorazioni — il sito parla attraverso la tipografia, non attraverso illustrazioni

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 02-shell*
*Context gathered: 2026-03-22*
