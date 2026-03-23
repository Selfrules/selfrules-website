---
created: 2026-03-23T08:27:51.075Z
title: Align codebase to Figma v25 — 17 gap fixes
area: ui
files:
  - src/app/[locale]/lab/page.tsx
  - src/app/[locale]/notes/page.tsx
  - src/app/[locale]/work/page.tsx
  - src/app/[locale]/about/page.tsx
  - src/app/[locale]/page.tsx
  - src/app/[locale]/approach/page.tsx
  - src/app/[locale]/dev/components/page.tsx
  - src/components/sections/CurrentWork.tsx
  - src/components/ui/ProjectCard.tsx
  - src/components/layout/SectionHeader.tsx
  - src/components/sections/SectionHeader.tsx
  - src/messages/en.json
  - src/messages/it.json
---

## Problem

Il confronto visivo tra il prototipo Figma v25 e il codice attuale rivela 17 gap documentati in `GAP-ANALYSIS-v25.md`. I gap spaziano da layout completamente sbagliati (P0) a contenuti mancanti (P1) a differenze strutturali minori (P2/P3).

### P0 — Critico (2)
- **GAP-01:** Lab page layout non corrisponde — servono 3 ProjectCard in griglia, non breakdown custom
- **GAP-02:** Notes page manca year grouping, layout 2-col date/titolo, subtitle

### P1 — Alto (8)
- **GAP-03:** Progetto OpenClaw mancante nel Lab
- **GAP-04:** Sezione "What it taught me" mancante su tutti i progetti Lab
- **GAP-05:** Status badges mancanti nel Lab (SHIPPED/IN PROGRESS/EXPERIMENT)
- **GAP-06:** Work page ha solo 2 case study, Figma ne mostra 3
- **GAP-07:** Homepage "Now" ha 2 card generiche, Figma ne mostra 3 con status badges
- **GAP-08:** About timeline manca badge "↑ overlap" tra Designer e Developer
- **GAP-09:** About CTA singolo invece di dual (case studies + contact)
- **GAP-10:** Notes page subtitle mancante

### P2 — Medio (4)
- **GAP-11:** Work page CTA diversa da Figma
- **GAP-12:** /approach esiste nel codice ma non nel Figma nav — decidere destino
- **GAP-13:** Homepage Now card senza status badges (correlato a GAP-07)
- **GAP-14:** SectionHeader duplicato in due location

### P3 — Basso (3)
- **GAP-15:** Solo 1 post Notes vs 5 placeholder Figma (contenuto, non codice)
- **GAP-16:** /dev/components esposta in produzione
- **GAP-17:** Footer email differenza (copy Figma AI-generated, non un vero gap)

## Solution

Seguire il piano di fix in GAP-ANALYSIS-v25.md organizzato in 3 sprint:
1. **Sprint 1 (P0):** Riscrivere Lab page + Notes page layout (~3.5h)
2. **Sprint 2 (P1):** OpenClaw, "What it taught me", Homepage Now, About overlap/CTA, Notes subtitle (~3h)
3. **Sprint 3 (P2-P3):** Work CTA, /approach decisione, SectionHeader dedup, /dev/components protezione (~0.5h)

Effort totale stimato: ~7 ore. Riferimento completo: `GAP-ANALYSIS-v25.md`.
