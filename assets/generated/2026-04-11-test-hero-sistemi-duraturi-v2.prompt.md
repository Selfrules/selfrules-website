---
file: 2026-04-11-test-hero-sistemi-duraturi-v2.png
tool: nanobanana
model: gemini-3.1-flash-image-preview
aspect_ratio: 16:9
date: 2026-04-11
project: selfrules-website
purpose: test di validazione NanoBanana post-billing + primo hero in stile design system v25 per il concept "sistemi duraturi"
status: ✅ validato — serve come reference di stile per hero selfrules
---

## Prompt

```
Editorial hero illustration, pure black background #0A0A0B, single amber-colored #E8A838 line-drawing of a simple wooden chair in the center-left, clean minimal linework, the chair feels solid, timeless, hand-built — a metaphor for durable systems that outlast trends. To the right of the chair, small monospace white text reading "mattia@selfrules ~ $ build --forever" with a blinking block cursor after it, typewriter aesthetic. Very subtle amber grain/noise texture overlay (5% opacity) across the whole image. No other elements, no logos, no gradients, no 3D, no photographic texture. Style: terminal-editorial, Kevin Yien meets Jessica Hische, confident negative space, publication-grade. Small monospace labels in the bottom corners: "selfrules.org / v25" on the left, "fig.01 — durable systems" on the right, both in white at 40% opacity. Ratio 16:9.
```

## Parametri tecnici

- **Model**: `gemini-3.1-flash-image-preview` (flash, non pro)
- **Aspect ratio**: 16:9
- **Seed**: non impostato (random)
- **Output path**: `/Users/mattia/CoworkOS/progetti/selfrules-website/assets/generated/2026-04-11-test-hero-sistemi-duraturi-v2.png`

## Note

**Iterazione rispetto a v1**:
- v1 aveva troppi elementi (più oggetti, texture pesante) e il testo del terminal era leggibile male
- v2 ha semplificato a un unico oggetto simbolico (la sedia), terminal prompt più corto e iconico, rimosso rumore eccessivo

**Output valutato**: ✅
- Rispetta il design system v25 (dark #0A0A0B, amber #E8A838, 0px radius implicito, terminal signature)
- La sedia come metafora di "sistema duraturo" è leggibile e non didascalica
- Il prompt `mattia@selfrules ~ $ build --forever` funziona come signature visiva coerente col sito
- Le label d'angolo (`fig.01 — durable systems`) danno il tocco editorial senza essere invasive

**Promozione a template**: ✅ SÌ
- Questo prompt va usato come **reference base** per tutti gli hero di articoli/case study selfrules
- Schema riusabile:
  - Sfondo `#0A0A0B`
  - UN SOLO oggetto simbolico in line-art amber `#E8A838`
  - Terminal prompt `mattia@selfrules ~ $ <verbo-comando>` come firma
  - Etichette d'angolo bianche 40% opacity (`fig.0X — <title>` a destra, `selfrules.org / v25` a sinistra)
  - Noise overlay 5%
  - 16:9
- Il verbo del terminal cambia per ogni hero: `build`, `ship`, `refactor`, `debug`, `commit`, ecc. — così la firma è costante ma il contenuto varia

**Riproducibilità**:
- Per rigenerare con modello diverso (es. Gemini 3 Pro Image quando budget lo permette): stesso prompt, cambia `model`
- Per hero gemelli: copia questo template, cambia solo l'oggetto simbolico e il verbo del terminal
- Se il risultato visuale diverge troppo dal v25: abbassare tentativi e tornare al prompt base

## Cross-reference

- Convenzioni: `_sistema/convenzioni-visual.md`
- Design system: `progetti/selfrules-website/docs/design/DESIGN-UPDATE-v25.md`
- Item piano Q2: 1.9 (chiuso 2026-04-11)
