# Phase 1: Foundation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-22
**Phase:** 01-foundation
**Areas discussed:** GitHub repo setup, i18n message structure, Token organization, Placeholder pages

---

## GitHub Repo Setup

| Option | Description | Selected |
|--------|-------------|----------|
| Public (Recommended) | Coerente con Modello B: un PM che costruisce il suo sito in pubblico è un segnale di competenza | ✓ |
| Private | Codice non visibile. Protegge decisioni di design/copy ma perde il segnale 'built by me' | |

**User's choice:** Public (Recommended)
**Notes:** Nessuna nota aggiuntiva.

---

## i18n Message Structure

| Option | Description | Selected |
|--------|-------------|----------|
| Per namespace (Recommended) | Chiavi raggruppate per pagina/sezione: homepage.hero.title, about.intro, nav.links. Più navigabile con ~200-300 chiavi totali | ✓ |
| Flat per locale | Un singolo livello: heroTitle, aboutIntro, navHome. Più semplice ma diventa caotico con molte chiavi | |
| File separati per pagina | homepage.json, about.json, etc. per ogni locale. Più modularità ma overkill per un sito statico piccolo | |

**User's choice:** Per namespace (Recommended)
**Notes:** Nessuna nota aggiuntiva.

---

## Token Organization

| Option | Description | Selected |
|--------|-------------|----------|
| CSS variables + utilities (Recommended) | Colori e spacing come CSS vars in @theme, typography scale come classi Tailwind custom | |
| Solo @theme vars | Tutto come CSS variables, riferite nei componenti con var(). Più semplice | |
| You decide | Claude sceglie l'approccio migliore per Tailwind v4 | ✓ |

**User's choice:** You decide
**Notes:** Claude ha discrezione completa sull'organizzazione dei token.

---

## Placeholder Pages

| Option | Description | Selected |
|--------|-------------|----------|
| Minimal verificabile (Recommended) | Headline con nome font, campioni di colore, tag monospace — giusto abbastanza per verificare che tokens, fonts e i18n funzionano | ✓ |
| Hello World | Testo minimo 'Hello World' / 'Ciao Mondo' — verifica solo che i18n routing funziona | |
| Design system showcase | Una pagina con tutti i token visualizzati: colori, scala tipografica, spacing. Più lavoro ma utile come reference | |

**User's choice:** Minimal verificabile (Recommended)
**Notes:** Nessuna nota aggiuntiva.

---

## Claude's Discretion

- Token organization approach — Claude sceglie come strutturare @theme, utilities custom, e CSS variables per Tailwind v4.

## Deferred Ideas

None.
