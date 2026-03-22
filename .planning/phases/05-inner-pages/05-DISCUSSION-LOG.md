# Phase 5: Inner Pages - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-22
**Phase:** 05-inner-pages
**Areas discussed:** About career blocks, Work/Lab link e dettaglio, Blog struttura e MDX, CTA pattern across pages

---

## About: Career Blocks

### Career blocks layout

| Option | Description | Selected |
|--------|-------------|----------|
| Prose sections (Recommended) | Ogni blocco carriera come sezione prose: company name heading bold, date monospace, paragrafi narrativi. Max-width 720px. | ✓ |
| Card expanded | Riusa TimelineBlock con variante expanded: card con bordo, company+date header, narrativa nel body. | |
| Tu decidi | Claude sceglie in base al design language. | |

**User's choice:** Prose sections
**Notes:** Pagina About scorre come un saggio editoriale, non un elenco di card.

### Sezione "Cosa credo" (3 principi)

| Option | Description | Selected |
|--------|-------------|----------|
| Prose sequenziale (Recommended) | Titoli bold come sottotitoli nel flusso, paragrafi sotto. Stesso ritmo career sections. | ✓ |
| 3 card/colonne | Ogni principio in card, 3 colonne desktop, stackate mobile. Simile a "Come lavoro" homepage. | |
| Tu decidi | Claude valuta in base al feeling editoriale. | |

**User's choice:** Prose sequenziale
**Notes:** La pagina scorre uniforme come un unico saggio.

### Sezione "Fuori dal lavoro"

| Option | Description | Selected |
|--------|-------------|----------|
| Stesso flusso prose | Continua nel flusso come le altre sezioni. Nessun trattamento speciale. | |
| Separata visivamente | Divisore marcato o cambio sfondo (bg-surface) per segnalare cambio di registro. | |
| Tu decidi | Claude valuta in base al risultato complessivo. | ✓ |

**User's choice:** Tu decidi
**Notes:** Claude ha discrezione sulla presentazione visiva.

---

## Work/Lab: Link e Dettaglio

### CaseStudyCard click behavior (v1)

| Option | Description | Selected |
|--------|-------------|----------|
| Nessun link (Recommended) | Card non cliccabili in v1. Nessun href, nessun hover link. Preview sufficiente. | ✓ |
| Link a "coming soon" | Card cliccabili con placeholder "Case study in arrivo". | |
| Link ad ancora inline | Click scrolla a sezione espansa sotto la card. | |

**User's choice:** Nessun link
**Notes:** Detail pages sono v2 (CONT-01). No dead link.

### Card 3 LeadsBridge

| Option | Description | Selected |
|--------|-------------|----------|
| Solo 2 card (Recommended) | Solo le 2 case study scritte. Card 3 non esiste, non mostrarla. | ✓ |
| Placeholder visibile | 3ª card "coming soon" con titolo LeadsBridge. | |
| Tu decidi | Claude valuta. | |

**User's choice:** Solo 2 card
**Notes:** In v1 mostriamo solo contenuto che esiste.

### CasaHunter detail level (Lab page)

| Option | Description | Selected |
|--------|-------------|----------|
| Sezione espansa inline (Recommended) | CasaHunter con tutte le sottosezioni direttamente nella Lab page. Nessuna pagina separata. | ✓ |
| ProjectCard + dettaglio | ProjectCard compatta intro + dettaglio completo sotto. | |
| Solo ProjectCard | Solo la card, link al repo GitHub. | |

**User's choice:** Sezione espansa inline
**Notes:** Lab page è la vetrina, il dettaglio è già lì.

---

## Blog: Struttura e MDX

### Blog listing page

| Option | Description | Selected |
|--------|-------------|----------|
| Lista minimale (Recommended) | Headline + intro, lista post (data mono + titolo + excerpt). Quasi vuota con 1 post — ed è ok. | ✓ |
| Redirect al post | Con 1 post, redirect diretto. Listing page quando 2+. | |
| Tu decidi | Claude valuta. | |

**User's choice:** Lista minimale
**Notes:** Pagina quasi vuota è accettabile.

### Blog i18n / slug strategy

| Option | Description | Selected |
|--------|-------------|----------|
| Slug unico (coerente) | Stesso slug per entrambe le lingue. 2 MDX files nella stessa cartella + page.tsx loader. | ✓ |
| 2 file MDX separati | Slug diversi per lingua. | |
| Eccezione blog | Slug diversi solo per blog, regolar pages uguali. | |

**User's choice:** Slug unico
**Notes:** Inizialmente scelto "2 file MDX separati" con slug diversi, poi corretto quando Claude ha segnalato la contraddizione con Out of Scope "No multi-language URL slugs". Scelta finale: slug unico, coerente con le regole del progetto.

---

## CTA Pattern Across Pages

### CTA component strategy

| Option | Description | Selected |
|--------|-------------|----------|
| Componente CTA flessibile (Recommended) | PageCTA che accetta testo + 1-2 button props. Leggero, non la Contact section completa. | ✓ |
| Sezione Contact riusata | Riusare Contact homepage (email + LinkedIn + CV) in fondo a ogni page. | |
| CTA inline senza componente | Markup diretto per pagina, nessun componente condiviso. | |

**User's choice:** Componente CTA flessibile
**Notes:** Ogni pagina ha contenuto CTA diverso dal copy sorgente.

---

## Claude's Discretion

- About "Fuori dal lavoro": separazione visiva o flusso prose
- Blog post MDX frontmatter structure
- Approach page numbered section markers
- Lab stack tags presentation
- Blog listing empty state copy

## Deferred Ideas

None — discussion stayed within phase scope.
