# Design Update v25 — Istruzioni per Claude Code

**Data:** 2026-03-22
**Versione design Figma:** v25 (verificata visivamente il 2026-03-22)
**Scopo:** Aggiornare CLAUDE.md, implementation-plan.md e i file GSD per riflettere le modifiche al design Figma (v18 → v25). Queste modifiche sono state decise dopo un'analisi critica del design rispetto ai trend 2026 del personal branding e un benchmark con siti comparabili (kevinyien.com, samdickie.me, linear.app).

---

## ⚠️ Stato verifica design v25

Tutte le 9 modifiche sotto sono state **verificate visivamente** nel prototipo Figma Make v25 (fullscreen preview, tutte e 5 le route). Ecco lo stato di ciascuna:

| # | Modifica | Stato in Figma v25 | Note per il codice |
|---|----------|-------------------|-------------------|
| 1 | Space Grotesk heading font | ✅ Applicato | Visibile su tutte le pagine: hero, section titles, card titles, page titles |
| 2 | Border-radius 0px | ✅ Applicato | Buttons, cards, tags, badges, availability badge — tutto 0px |
| 3 | Terminal hero | ✅ Applicato | `mattia@selfrules ~ $` con cursore block amber + `_` underscore dopo subtitle |
| 4 | Signature phrase | ✅ Applicato | Visibile in hero homepage sotto separator line, in corsivo |
| 5 | Build version footer | ✅ Applicato | `v1.0.0 · build 2026.03 · Next.js 16 · 47 commits` su tutte le pagine |
| 6 | Counter animation metriche | ⏳ Solo codice | Numeri mostrati a valore finale (atteso — l'animazione è code-only) |
| 7 | Timeline verticale | ✅ Applicato | Nodi quadrati (non circolari — coerente con 0px radius), overlap badge, ultimo nodo amber filled |
| 8 | Route blog → notes | ✅ Applicato | Navbar "Notes", route /notes |
| 9 | Hero 100vh | ✅ Applicato | Hero riempie viewport, nessun peek della sezione sotto |

**Dettaglio importante — nodi timeline:** Il design v25 usa nodi **quadrati** (non circolari come specificato originariamente). Questa è una scelta migliore perché coerente con l'identità 0px border-radius del sito. Implementare come quadrati (8-10px, `border-radius: 0`).

**Copy nel Figma vs file sorgente:** Il testo nel prototipo Figma è generato da Figma Make e NON corrisponde al copy definitivo. Il copy definitivo è nei file sorgente in `../job-search-2026/selfrules-redesign/`. Esempi di differenze: l'headline About in Figma dice "I translate ambiguity into shipped products" ma il copy sorgente dice "Better products happen when one person speaks all three languages." **I file sorgente hanno sempre la precedenza.**

---

## Contesto per Claude Code

Il design Figma è alla versione 25. Rispetto alla versione su cui è basato il piano attuale, ci sono **9 modifiche** che impattano il piano di implementazione, i design tokens, i componenti e le fasi. Leggile tutte prima di modificare qualsiasi file.

**Motivazione globale:** Il sito v18 era un ottimo portfolio dark mode ma non memorabile. L'obiettivo di queste modifiche è aggiungere "signature elements" — dettagli che rendano il sito riconoscibile e ricordabile, trasformandolo da "un portfolio" a "il sito di quel PM che l'ha costruito come un prodotto."

---

## Le 9 modifiche da applicare

### 1. HEADING FONT: Inter → Space Grotesk

**Cosa cambia:**
- I titoli (h1, h2, section titles, card titles, page titles, hero headlines) usano ora **Space Grotesk** (Google Font) invece di Inter
- Body text resta **Inter**
- Monospace resta **JetBrains Mono**

**Perché:** Inter per heading è il default di ogni dev portfolio nel 2026. Space Grotesk ha DNA tecnico (deriva dalla famiglia Space Mono) e crea un collegamento sottile con JetBrains Mono nei tag — il design system "ha senso" senza che il visitatore sappia perché. Differenzia il sito dalla massa Inter-only.

**Impatto sui file:**
- `CLAUDE.md` → sezione Stack: aggiungere Space Grotesk a next/font/google
- `CLAUDE.md` → sezione Constraints Design: aggiungere Space Grotesk
- `implementation-plan.md` → Fase 1:
  - Design tokens Typography: aggiungere `font-heading: Space Grotesk (Google Fonts), weights 500, 600, 700`
  - Font loading (`lib/fonts.ts`): aggiungere `Space_Grotesk` import con variable `--font-heading`
  - Scala Typography: specificare quale font per ogni livello:
    - `hero-headline`: Space Grotesk 700
    - `section-title`: Space Grotesk 600
    - `card-title`: Space Grotesk 600
    - `body`: Inter 400
    - `body-large`: Inter 400
    - `label`: JetBrains Mono 500
    - `metric-number`: Space Grotesk 700 (ERA font-mono — ora è Space Grotesk per i numeri grandi, ma le label sotto i numeri restano JetBrains Mono)
- `implementation-plan.md` → Fase 2: layout root body className aggiungere `${spaceGrotesk.variable}`
- `implementation-plan.md` → Fase 7: checklist aggiornare "Font Inter per body" → "Font Space Grotesk per heading, Inter per body, JetBrains Mono per label/tag"

### 2. BORDER-RADIUS 0px — enforcement esplicito

**Cosa cambia:** Niente di nuovo concettualmente (era già 0px), ma va enfatizzato come "signature element" nel piano.

**Impatto sui file:**
- `implementation-plan.md` → Fase 1: aggiungere nota esplicita: "Aggiungere reset globale in globals.css: `* { border-radius: 0 !important; }` per prevenire qualsiasi border-radius da librerie o browser defaults"
- `implementation-plan.md` → Fase 7: aggiungere check specifico: "Aprire DevTools, selezionare ogni tipo di elemento, verificare computed border-radius = 0"

### 3. TERMINAL HERO — nuovo elemento nell'hero homepage

**Cosa cambia:** L'hero della homepage ha ora un "terminal prompt" come firma visiva.

**Nuovo layout hero (dall'alto in basso):**
1. `mattia@selfrules ~ $` + cursore lampeggiante (monospace, piccolo, muted — #5A5A5E, con cursore in accent #E8A838)
2. Headline grande (Space Grotesk Bold, 48-64px)
3. Subtitle (Inter, muted) + cursore `_` lampeggiante in accent alla fine del testo
4. CTA buttons (invariati)
5. Credential tags monospace (invariati)
6. Linea separatore (1px, ~200px, #1A1A1F)
7. Signature phrase in corsivo (vedi punto 4 sotto)
8. Spazio vuoto fino a fine viewport (hero = 100vh)

**Impatto sui file:**
- `implementation-plan.md` → Fase 3 sezione 3.1 Hero: riscrivere il layout aggiungendo il terminal prompt e il cursore
- `implementation-plan.md` → Fase 1 componenti: aggiungere `TerminalPrompt.tsx` (monospace prompt line) e `BlinkingCursor.tsx` (client component, animazione CSS `@keyframes blink`)
- `implementation-plan.md` → Fase 5 Polish: specificare che `BlinkingCursor` rispetta `prefers-reduced-motion` (cursore statico se motion ridotto)
- **Nuovo componente `BlinkingCursor.tsx`**: Client Component ('use client'). CSS animation: `opacity 0↔1, step-end, 1s infinite`. Nessuna libreria. ~15 righe di codice.
- **Nuovo componente `TerminalPrompt.tsx`**: Server Component. Renderizza `<span className="font-mono text-sm text-tertiary">mattia@selfrules ~ $</span>` + `<BlinkingCursor type="block" />`. Il cursore "block" è un rettangolino inline, quello "underscore" è `_`.

### 4. SIGNATURE PHRASE — branding verbale ricorrente

**Cosa cambia:** Una frase ricorrente appare in più punti del sito come elemento di branding:

> "The problem is never the one from the first meeting."
> "Il problema non è mai quello del primo meeting."

**Dove appare:**
- Hero homepage: sotto i credential tags, separata da una linea 1px, in corsivo, 14-16px, #8A8A8E
- 404 page: come sottotitolo sotto il messaggio principale
- (Opzionale, fase polish) About page: come citazione evidenziata nella sezione "Cosa credo"

**Impatto sui file:**
- `implementation-plan.md` → Fase 3 sezione 3.1 Hero: aggiungere la signature phrase
- `implementation-plan.md` → Fase 2 sezione 2.4 (404 page): aggiungere la signature phrase sotto il messaggio
- I18n: aggiungere chiavi `common.signaturePhrase` in en.json e it.json

### 5. BUILD VERSION FOOTER — credibilità engineering

**Cosa cambia:** Il footer mostra una riga di "build info" in piccolo monospace sotto il credit.

**Testo:** `v1.0.0 · build 2026.03 · Next.js 16 · 47 commits`

**Stile:** JetBrains Mono, 10-11px, #5A5A5E, sotto "Designed and built by Mattia De Luca"

**Nota implementativa:** Il numero di commit può essere generato dinamicamente a build time con `git rev-list --count HEAD`, oppure hardcoded e aggiornato manualmente. Per v1, hardcoded va bene. Il mese di build può usare `new Date()` a build time.

**Impatto sui file:**
- `implementation-plan.md` → Fase 2 sezione 2.2 Footer: aggiungere la riga build version
- `implementation-plan.md` → Fase 7: aggiungere check "Build version visibile nel footer"

### 6. COUNTER ANIMATION METRICHE — delight moment

**Cosa cambia:** I numeri nella sezione Results/Impact della homepage si animano con un count-up da 0 al valore finale quando entrano in viewport.

**Specifiche:**
- IntersectionObserver per trigger (threshold 0.3)
- Durata: 800ms, easing: ease-out
- Da 0 a valore target (es. 0 → -25%, 0 → 116, 0 → 99%+)
- Ogni numero si anima indipendentemente
- `prefers-reduced-motion`: nessuna animazione, numero appare subito
- Nessuna libreria. Implementazione custom con `requestAnimationFrame`. ~30 righe.

**Impatto sui file:**
- `implementation-plan.md` → Fase 1: aggiungere `CountUpNumber.tsx` (client component)
- `implementation-plan.md` → Fase 3 sezione 3.4 Numeri: specificare che MetricCard usa CountUpNumber
- `implementation-plan.md` → Fase 5 Polish: specificare il rispetto di prefers-reduced-motion

### 7. TIMELINE VERTICALE INTERATTIVA — About page

**Cosa cambia:** La sezione Career Path nell'About ha ora una timeline verticale con linea e nodi, invece di semplici blocchi di testo.

**Nuovo layout:**
- Linea verticale (2px, #1A1A1F) a sinistra con 4 nodi **quadrati** (8-10px, border-radius: 0 — coerente con l'identità 0px radius del sito)
- L'ultimo nodo (Product Manager, 2023-now) è filled in accent (#E8A838)
- I nodi precedenti sono outlined (1px border, transparent)
- Da ogni nodo parte un connettore orizzontale (1px) verso il blocco di contenuto a destra
- L'overlap Designer/Developer (2016-2020): il segmento di linea tra i due nodi usa accent color (#E8A838) o ha un badge "↑ overlap"
- Scroll animation (opzionale, fase polish): il nodo attivo si illumina quando il blocco è in viewport

**Impatto sui file:**
- `implementation-plan.md` → Fase 1 componenti: riscrivere `TimelineBlock.tsx` → `VerticalTimeline.tsx` (container con linea) + `TimelineNode.tsx` (singolo nodo + contenuto)
- `implementation-plan.md` → Fase 4 sezione 4.1 About: riscrivere layout Career Path con la timeline verticale
- Responsive: su mobile la linea sta a sinistra con i nodi, il contenuto si espande a destra. Non serve layout orizzontale su desktop — resta verticale sempre.

### 8. ROUTE BLOG → NOTES

**Cosa cambia:** La pagina blog si chiama ora "Notes" (EN) / "Note" (IT). La route è `/notes` (non `/blog`).

**Impatto sui file:**
- `implementation-plan.md` → Fase 0 struttura directory: rinominare `blog/` → `notes/`
- `implementation-plan.md` → Fase 2 Navbar: "Notes" / "Note" invece di "Blog"
- `implementation-plan.md` → Fase 4 sezione 4.5: rinominare da "Blog listing" a "Notes listing", route `/notes`
- `CLAUDE.md` → ovunque si menzioni "blog" nella navigazione, sostituire con "notes"

### 9. HERO 100VH — enforcement

**Cosa cambia:** L'hero deve essere ESATTAMENTE 100vh. Nella versione Figma v18 era ~80%. Il contenuto deve essere verticalmente centrato e non deve essere visibile la sezione successiva al primo load.

**Impatto sui file:**
- `implementation-plan.md` → Fase 3 sezione 3.1 Hero: specificare `min-h-screen` come requisito CRITICO, con nota: "Al primo load, l'utente vede SOLO l'hero. Nessun peek della sezione Approach sotto."
- Già presente nel piano come "min-h-screen" ma va enfatizzato come requisito critico

---

## Istruzioni operative per Claude Code

### Cosa fare:

1. **Leggi questo file per intero** prima di modificare qualsiasi altro file
2. **Aggiorna `CLAUDE.md`** con le modifiche a:
   - Stack: aggiungere Space Grotesk al font stack
   - Constraints Design: aggiungere Space Grotesk, confermare 0px radius, menzionare "signature elements" (terminal hero, build version, signature phrase)
3. **Aggiorna `implementation-plan.md`** fase per fase:
   - Fase 0: route `/notes` invece di `/blog`
   - Fase 1: Space Grotesk font, TerminalPrompt.tsx, BlinkingCursor.tsx, CountUpNumber.tsx, VerticalTimeline.tsx + TimelineNode.tsx, reset globale border-radius
   - Fase 2: footer con build version, 404 con signature phrase, navbar con "Notes"
   - Fase 3: hero completo con terminal prompt + cursore + signature phrase + 100vh enforced, metriche con CountUpNumber
   - Fase 4: About con timeline verticale, route `/notes`
   - Fase 5: prefers-reduced-motion per BlinkingCursor e CountUpNumber, scroll-triggered timeline nodes
   - Fase 7: checklist aggiornata con tutti i nuovi elementi
4. **Aggiorna `Memory.md`** del progetto con un entry per questa sessione
5. **NON** creare nuovi file GSD. Aggiorna i file esistenti inline.
6. **NON** scrivere codice. Aggiorna solo la documentazione del piano.

### Cosa NON fare:

- Non riscrivere l'intero implementation-plan.md da zero — aggiorna le sezioni impattate
- Non cambiare il copy dei file sorgente
- Non modificare le decisioni di stack (Next.js 16.2, Tailwind v4, next-intl, etc.)
- Non aggiungere librerie esterne per le animazioni (tutto custom, IntersectionObserver + rAF)
- Non aggiungere light mode
- Non spostare la sezione Contact fuori dalla homepage

### Verifica finale

Dopo le modifiche, controlla che:
- [ ] `CLAUDE.md` menziona Space Grotesk nel font stack
- [ ] `CLAUDE.md` Constraints Design lista "signature elements"
- [ ] `implementation-plan.md` Fase 0 ha route `/notes` nella struttura directory
- [ ] `implementation-plan.md` Fase 1 ha Space Grotesk nei design tokens
- [ ] `implementation-plan.md` Fase 1 lista i nuovi componenti (TerminalPrompt, BlinkingCursor, CountUpNumber, VerticalTimeline, TimelineNode)
- [ ] `implementation-plan.md` Fase 2 footer ha build version
- [ ] `implementation-plan.md` Fase 3 hero ha terminal prompt + cursore + signature phrase + 100vh
- [ ] `implementation-plan.md` Fase 3 metriche usa CountUpNumber
- [ ] `implementation-plan.md` Fase 4 About ha timeline verticale
- [ ] `implementation-plan.md` Fase 4 route blog → notes
- [ ] `implementation-plan.md` Fase 5 menziona prefers-reduced-motion per tutti gli elementi animati
- [ ] `implementation-plan.md` Fase 7 checklist aggiornata

---

## Riepilogo firma visiva del sito

Dopo queste modifiche, selfrules.org ha 7 "signature elements" che lo distinguono dalla massa:

1. **Terminal prompt** `mattia@selfrules ~ $` nell'hero → "vive nel terminale"
2. **Cursore `_` lampeggiante** → elemento firma, riconoscibile
3. **Signature phrase** "The problem is never the one from the first meeting." → branding verbale
4. **Build version** `v1.0.0 · 47 commits` nel footer → "non è un template"
5. **Space Grotesk** per heading → identità tipografica distinta
6. **Timeline verticale** con nodi e overlap → la carriera come percorso visivo
7. **Counter animation** sulle metriche → momento di delight

Questi elementi, combinati con il dark-mode-only, il 0px border-radius, e l'amber accent, creano un sito che un recruiter ricorda come "il sito di quel PM che l'ha costruito come un prodotto."
