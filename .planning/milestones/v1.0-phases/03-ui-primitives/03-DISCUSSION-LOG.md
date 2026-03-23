# Phase 3: UI Primitives - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-22
**Phase:** 03-ui-primitives
**Areas discussed:** Component API design, TimelineBlock connector, Responsive card behavior, Component verification

---

## Component API Design

### Data flow / i18n handling

| Option | Description | Selected |
|--------|-------------|----------|
| Props tipizzate + children | Componenti dumb, pagina traduce e passa valori. Massima riusabilità. | ✓ |
| Props con chiavi i18n | Componente chiama useTranslations internamente. Più compatto ma accoppiato. | |
| You decide | Claude sceglie. | |

**User's choice:** Props tipizzate + children
**Notes:** None

### Button: unico vs separati

| Option | Description | Selected |
|--------|-------------|----------|
| Componente unico con prop 'href' | Un solo Button, renderizza Link o button in base a href. | |
| Button + LinkButton separati | Due componenti, stessi stili condivisi. | |
| You decide | Claude sceglie in base ai pattern del progetto. | ✓ |

**User's choice:** You decide

### CaseStudyCard flessibilità

| Option | Description | Selected |
|--------|-------------|----------|
| Props fisse, layout locked | Accetta sempre: tag, title, preview, metric, metricLabel, href. | |
| Composable con slot | CaseStudyCard.Content, CaseStudyCard.Metric slots. | |
| You decide | Claude sceglie in base alla complessità necessaria. | ✓ |

**User's choice:** You decide

### Section wrapper scope

| Option | Description | Selected |
|--------|-------------|----------|
| Solo layout wrapper | Max-width, padding, margin solo. Label manuale. | |
| Layout + section header opzionale | Props opzionali label + title con stile corretto. | |
| You decide | Claude sceglie. | ✓ |

**User's choice:** You decide

### Font utility class

| Option | Description | Selected |
|--------|-------------|----------|
| Utility class font-mono → JetBrains Mono | Tailwind v4 @theme mappa font-mono. | |
| You decide | Claude configura il mapping più idiomatico. | ✓ |

**User's choice:** You decide

---

## TimelineBlock Connector

### Connector location

| Option | Description | Selected |
|--------|-------------|----------|
| Nel layout della pagina | TimelineBlock è solo la card. Linea e grid nella pagina. | |
| Nel componente Timeline wrapper | Un wrapper Timeline gestisce linea e layout. | |
| You decide | Claude sceglie. | ✓ |

**User's choice:** You decide

### TimelineBlock scope (homepage vs about)

| Option | Description | Selected |
|--------|-------------|----------|
| Solo homepage timeline | Card compatta. About usa prose text. | |
| Homepage + About | Variante compact e expanded. | |
| You decide | Claude decide guardando il copy. | ✓ |

**User's choice:** You decide

### TimelineBlock hover

| Option | Description | Selected |
|--------|-------------|----------|
| Sì, hover border-accent come prototipo | Coerente con le altre card. | |
| Nessun hover | Non interattivo. | |
| You decide | Claude decide per coerenza. | ✓ |

**User's choice:** You decide

### Mobile timeline connector

| Option | Description | Selected |
|--------|-------------|----------|
| Nessun connettore su mobile | Card stackate, sequenza implicita. | |
| Linea verticale a sinistra | Timeline verticale classica. | |
| You decide | Claude decide per il feeling. | ✓ |

**User's choice:** You decide

---

## Responsive Card Behavior

### MetricCard grid pattern

| Option | Description | Selected |
|--------|-------------|----------|
| Grid gap-[1px] come nel prototipo | Effetto griglia a celle condivise. | ✓ |
| Card separate con gap normale | Ogni card ha bordo individuale. | |
| You decide | Claude sceglie. | |

**User's choice:** Grid gap-[1px] come nel prototipo

### MetricCard number sizing

| Option | Description | Selected |
|--------|-------------|----------|
| Numero responsive con clamp | clamp() per scalare ~32px-64px. | |
| Breakpoint fissi come prototipo | text-4xl / text-5xl / text-[64px]. | |
| You decide | Claude sceglie per Tailwind v4. | ✓ |

**User's choice:** You decide

### CaseStudyCard padding

| Option | Description | Selected |
|--------|-------------|----------|
| Come il prototipo: p-8 md:p-12 | 32px mobile, 48px desktop. | ✓ |
| 40px fisso come nel piano | p-10 uniforme. | |
| You decide | Claude decide. | |

**User's choice:** Come il prototipo: p-8 md:p-12

---

## Component Verification

### Verification approach

| Option | Description | Selected |
|--------|-------------|----------|
| Dev showcase page | Route /dev/components solo in development. | ✓ |
| Verifica durante Phase 4 | Nessuna pagina separata, verifica nelle pagine. | |
| You decide | Claude decide. | |

**User's choice:** Dev showcase page

---

## Claude's Discretion

- Button: unico vs separati (href-based)
- CaseStudyCard/ProjectCard: props fisse vs composable
- Section wrapper: solo layout vs con header
- Font-mono mapping in Tailwind v4
- TimelineBlock: connector location, scope, hover, mobile connector
- MetricCard number sizing approach

## Deferred Ideas

None — discussion stayed within phase scope.
