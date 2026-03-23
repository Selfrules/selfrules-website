# Memory — selfrules-website

## 2026-03-22 — Creazione progetto
- Creata struttura progetto in CoworkOS/progetti/selfrules-website/
- Scritto piano di implementazione dettagliato (7 fasi, ~4 ore stimate)
- Stack scelto: Next.js 16.2 (App Router, Turbopack) + TypeScript + Tailwind CSS v4 (CSS-first) + next-intl 4.8.x
- Deploy su Vercel, repo GitHub nuovo `selfrules-website`
- Copy sorgente: 7 file in `../job-search-2026/selfrules-redesign/` — 23 fix applicati in 3 cicli di analisi critica, copy DEFINITIVO
- Design specs: da `figma-make-prompt.md` — dark mode, #0A0A0B bg, #F5F5F0 text, #E8A838 accent, 0px border-radius, Inter + JetBrains Mono
- Sito attuale: Next.js + Tailwind su Vercel (da sostituire completamente)

## 2026-03-22 — Analisi GSD e consolidamento
- Framework GSD ha generato 10 file di ricerca e pianificazione
- Copiati tutti i file GSD nella cartella progetto (erano in uploads/)
- Analisi critica: STACK.md e PITFALLS.md eccellenti, ROADMAP.md ha piani TBD (non operativo)
- FEATURES.md ridondante con REQUIREMENTS.md — demotato
- **Fix applicati:**
  - PROJECT.md: corretto Next.js 15 → 16.2 nei constraints
  - CLAUDE.md: riscritto "File di riferimento" con gerarchia chiara (ESECUZIONE / CONTENUTO / RIFERIMENTO TECNICO)
  - CLAUDE.md: aggiornato stack completo a 16.2 + proxy.ts + Tailwind v4 CSS-first
  - CLAUDE.md: rimosso GSD Workflow Enforcement (inutile, aggiunge friction)
  - REQUIREMENTS.md + implementation-plan.md: aggiunto Article a JSON-LD in SEO-05
  - implementation-plan.md: corretto "tailwind.config.ts" → "@theme in globals.css" in Fase 1
- **Gerarchia documenti stabilita:** implementation-plan.md = piano operativo, STACK.md + PITFALLS.md = riferimento tecnico, REQUIREMENTS.md = checklist verifica, ROADMAP.md = tracker fasi
- **Skill verticali:** non necessarie per l'implementazione. engineering:code-review utile solo post-build
