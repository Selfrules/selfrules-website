# selfrules-website — Istruzioni per Claude Code

> Questo progetto è il sito web selfrules.org.
> Leggi QUESTO file e il piano di implementazione prima di scrivere qualsiasi codice.

## Obiettivo
Costruire il sito web personale di Mattia De Luca (selfrules.org) da zero.
Il sito sostituirà il sito attuale su https://selfrules.org/it.

## File di riferimento

### ⚠️ PRIMA DI TUTTO — Design Update v25
- **`docs/design/DESIGN-UPDATE-v25.md`** — LEGGERE PER PRIMO. Contiene 9 modifiche al design (font, componenti, signature elements) verificate nel prototipo Figma v25. Applicare tutte le modifiche PRIMA di iniziare a scrivere codice.

### Piano e layout (ESECUZIONE)
- **Piano di implementazione:** `./implementation-plan.md` — il piano operativo dettagliato con layout per-page, comandi, codice esempio.
- **Design specs (originali):** `docs/copy/figma-make-prompt.md` — specifiche visive base per pagina. In caso di conflitto, DESIGN-UPDATE-v25.md ha la precedenza.

### Copy sorgente (CONTENUTO)
- **Copy del sito:** `docs/copy/` — 10 file con tutto il copy IT + EN e specifiche SEO. COPIARE ESATTAMENTE.

### GSD Research (RIFERIMENTO TECNICO)
- **STACK.md** — in `.planning/research/STACK.md`. Stack research completa, pattern di codice, "What NOT to Use".
- **PITFALLS.md** — in `.planning/research/PITFALLS.md`. 14 pitfalls con mitigazioni.
- **REQUIREMENTS.md** — in `.planning/milestones/v1.0-REQUIREMENTS.md`. 65 requisiti con ID.
- **ARCHITECTURE.md** — in `.planning/research/ARCHITECTURE.md`. Directory structure, component boundaries.
- **STATE.md** — in `.planning/STATE.md`. Tracker avanzamento progetto.
- **ROADMAP.md** — in `.planning/ROADMAP.md`. Struttura fasi.

### Documentazione aggiuntiva (in `docs/`)
- **`docs/design/`** — Design specs, gap analysis, pixel-perfect fixes
- **`docs/audits/`** — Site audit reports
- **`docs/reference/`** — Analytics events, deploy checklist, glossario IT, Remotion guide
- **`docs/drafts/`** — Bozze e documenti di lavoro
- **`docs/job-search/`** — Materiali LinkedIn, CV, analisi job search (non parte del sito)

## Stack tecnologico
- Next.js 16.2 (App Router, Turbopack) — NON 15. Usa `proxy.ts` (non middleware.ts)
- TypeScript 5.x
- Tailwind CSS v4 (CSS-first: `@theme` in globals.css, NO tailwind.config.ts)
- next-intl 4.8.x per i18n (IT + EN), `localePrefix: 'as-needed'`, `localeDetection: false`
- @next/mdx per blog (NON next-mdx-remote)
- next/font/google per Inter + JetBrains Mono
- Umami Cloud per analytics (cookieless)
- Vercel per deploy

## Regole
0. **Prima di iniziare qualsiasi lavoro, dichiara come intendi verificare il risultato**
1. Segui il piano in `implementation-plan.md` fase per fase
2. Ogni fase ha criteri di accettazione — verificali TUTTI prima di passare alla fase successiva
3. Il copy è DEFINITIVO — non modificarlo, copialo esattamente dai file sorgente
4. Il design system è definito nelle specs — rispettalo al pixel
5. Dopo ogni fase, fai una valutazione critica del tuo lavoro
6. Se qualcosa non funziona, documenta il problema e proponi una soluzione prima di andare avanti

## Posizionamento

**Modello B — identità aspirazionale.** Il sito di un IC che pensa ad alta voce: mostra come ragiona, come prende decisioni di prodotto, cosa ha costruito e con quali risultati. Mai framing job-seeker. Disponibilità e CV solo in Contatto e Footer.

**Core Value:** Un hiring manager che atterra su selfrules.org deve pensare "questo è uno che sa quello che fa" — competenza attraverso specificità e risultati, mai self-promotion.

## Riferimenti tecnici dettagliati
Per stack completo, pattern, pitfall e "What NOT to Use", leggi i file in `.planning/research/`:
- `STACK.md` — stack research, pattern di codice, alternative considerate
- `PITFALLS.md` — 14 pitfall con mitigazioni
- `ARCHITECTURE.md` — directory structure, component boundaries
- `REQUIREMENTS.md` (in `.planning/milestones/v1.0-REQUIREMENTS.md`) — 65 requisiti con ID
