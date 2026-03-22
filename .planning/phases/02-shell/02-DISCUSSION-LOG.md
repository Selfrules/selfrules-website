# Phase 2: Shell - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-22
**Phase:** 02-shell
**Areas discussed:** Mobile menu, Language toggle, Footer layout, 404 page style

---

## Mobile Menu

### Animazione apertura

| Option | Description | Selected |
|--------|-------------|----------|
| Slide da destra | Pannello scorre da destra ~300ms. Pattern familiare, layer sopra contenuto. | ✓ |
| Fade-in overlay | Overlay appare con fade ~200ms. Tutto centrato verticalmente. | |
| Instant (no animation) | Nessuna transizione. Minimal, brutale, coerente con 0px radius. | |

**User's choice:** Slide da destra
**Notes:** Nessuna nota aggiuntiva.

### Contenuto del menu

| Option | Description | Selected |
|--------|-------------|----------|
| Solo nav + lingua | Link navigazione + language toggle in basso. Pulito, fa una cosa sola. | ✓ |
| Nav + lingua + contatti | Aggiunge email e LinkedIn in fondo al menu. | |

**User's choice:** Solo nav + lingua
**Notes:** Nessuna nota aggiuntiva.

### Dimensione link

| Option | Description | Selected |
|--------|-------------|----------|
| Grande (32-36px) | Link grandi, generoso spacing. Easy tap targets, typographic-first. | ✓ |
| Medio (24-28px) | Più compatto, simile a nav desktop con più spacing. | |
| You decide | Claude sceglie la dimensione migliore. | |

**User's choice:** Grande (32-36px)
**Notes:** Nessuna nota aggiuntiva.

---

## Language Toggle

### Stile desktop

| Option | Description | Selected |
|--------|-------------|----------|
| Testo separato: IT / EN | Due label separate da slash. Attiva bianca, inattiva muted. | ✓ |
| Segmento pill | Contenitore con bordo 1px. Attiva bg accent, inattiva trasparente. | |
| Dropdown | Solo lingua corrente visibile, click apre dropdown. | |

**User's choice:** Testo separato: IT / EN
**Notes:** Nessuna nota aggiuntiva.

### Posizione mobile

| Option | Description | Selected |
|--------|-------------|----------|
| Dentro il mobile menu | In fondo al menu slide-in, sotto i nav link. | ✓ |
| Sempre visibile in navbar | Resta nella navbar mobile accanto all'hamburger. | |

**User's choice:** Dentro il mobile menu
**Notes:** Nessuna nota aggiuntiva.

---

## Footer Layout

### Struttura

| Option | Description | Selected |
|--------|-------------|----------|
| Riga singola compatta | Tutto su una riga desktop: bio sx, link dx, credit sotto. Separatore 1px. | ✓ |
| Due colonne | Colonna sx bio+credit, colonna dx link. Più strutturato. | |
| Stacked centrato | Tutto centrato e impilato. Più simmetrico. | |

**User's choice:** Riga singola compatta
**Notes:** Nessuna nota aggiuntiva.

### Stile email

| Option | Description | Selected |
|--------|-------------|----------|
| Monospace + accent hover | JetBrains Mono, hover #E8A838. Coerente con sezione contatto. | ✓ |
| Stile normale | Inter, stesso font del footer. Più uniforme. | |
| You decide | Claude sceglie. | |

**User's choice:** Monospace + accent hover
**Notes:** Nessuna nota aggiuntiva.

---

## 404 Page Style

### Layout

| Option | Description | Selected |
|--------|-------------|----------|
| Full shell, testo centrato | Navbar+footer normali. Copy centrato nella viewport. Minimal. | ✓ |
| Full shell, left-aligned | Come sopra ma testo allineato a sinistra. Più coerente con hero. | |
| Minimal (no shell) | Solo logo + messaggio. Più drammatico, perde navigazione. | |

**User's choice:** Full shell, testo centrato
**Notes:** Nessuna nota aggiuntiva.

---

## Claude's Discretion

- Navbar scroll threshold (px)
- Hamburger → X animation style
- Footer responsive breakpoint
- Umami proxy path
- 404 typography sizing

## Deferred Ideas

None — discussion stayed within phase scope.
