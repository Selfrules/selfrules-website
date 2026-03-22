# selfrules.org

## What This Is

Sito web personale di Mattia De Luca (selfrules.org), posizionato come **Modello B — identità aspirazionale**. Il sito di un IC (individual contributor) che pensa ad alta voce: mostra come ragiona, come prende decisioni di prodotto, cosa ha costruito e con quali risultati. Sito statico multilingua (IT + EN), dark-mode first, costruito da zero per sostituire l'attuale versione su selfrules.org.

## Core Value

Un hiring manager o recruiter che atterra su selfrules.org deve pensare "questo è uno che sa quello che fa" — il sito comunica competenza attraverso specificità e risultati, mai attraverso self-promotion o richiesta di opportunità.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Sito multilingua IT + EN con routing locale-based (EN default, IT con prefisso /it)
- [ ] Homepage con 6 sezioni: Hero, Come lavoro, Percorso, Numeri, Cosa faccio ora, Contatto
- [ ] Pagina About con percorso professionale, principi, sezione personale
- [ ] Pagina Work con 2 case study card + placeholder futuro
- [ ] Pagina Lab con progetti personali (CasaHunter, MoneyMind)
- [ ] Pagina Approach con 5 sezioni su metodo di lavoro
- [ ] Blog con listing e 1 post iniziale ("Why I Prototype in Code")
- [ ] Design system dark-mode first: palette specifica, 0px border-radius ovunque, Inter + JetBrains Mono
- [ ] Navbar fixed con scroll behavior, language toggle, mobile hamburger
- [ ] Footer con bio, email, LinkedIn, GitHub, CV download
- [ ] Pagina 404 con copy dedicato
- [ ] SEO completo: meta tags, Open Graph, hreflang, JSON-LD, sitemap, robots.txt
- [ ] Performance: Lighthouse 95+ su tutte le categorie, bundle < 100KB first load
- [ ] Scroll animations (fade-in on scroll, rispetto prefers-reduced-motion)
- [ ] Accessibilità: skip-to-content, focus styles, WCAG AA contrasto
- [ ] Analytics: Umami (cookieless, nessun banner necessario)
- [ ] Copy IDENTICO ai file sorgente — nessuna riscrittura
- [ ] Modello B compliance: nessun framing job-seeker, disponibilità solo in Contatto e Footer
- [ ] Deploy su Vercel con dominio selfrules.org

### Out of Scope

- Light mode toggle — rimandato a v2, il sito è dark-mode only per ora
- CMS per blog — il post v1 è hardcoded/MDX, nessun CMS
- Case study pages singole (`/work/[slug]`) — solo card listing in v1
- Form di contatto — solo mailto e link diretti
- Mobile app — web only
- OAuth / autenticazione utente — non è un'app, è un sito statico

## Context

- **Posizionamento:** Modello B — identità aspirazionale. Il sito deve sembrare quello di un professionista affermato, non di un candidato. Obiettivo reale (non dichiarato): servire la job search 2026 (target luglio) indirettamente
- **Regole Modello B:** Il soggetto è il risultato, non Mattia. Le storie aprono con il problema. Tono IC operator: specificità delle decisioni, non etichette di framework. Mai "sto cercando il prossimo ruolo"
- **Riferimenti di tono:** kevinyien.com, linear.app, stripe.com/press — densità informativa senza rumore
- **Anti-riferimenti:** melissaperri.com, producttalk.org — troppo coach/guru/funnel
- **Copy:** Già scritto e definitivo in 7 file sotto `../job-search-2026/selfrules-redesign/`. Copiare esattamente, zero riscrittura
- **Design specs:** Definite in `../job-search-2026/selfrules-redesign/figma-make-prompt.md` — colori, typography, spacing, layout per 6 pagine
- **Dominio:** selfrules.org già esistente, da reindirizzare al nuovo progetto Vercel

## Constraints

- **Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, next-intl per i18n, Vercel per deploy — stack già deciso, non negoziabile
- **Copy:** Il copy è DEFINITIVO. Copiarlo esattamente dai file sorgente. Nessuna riscrittura, nessun riassunto, nessun "miglioramento"
- **Design:** 0px border-radius ovunque. Palette specifica (#0A0A0B, #F5F5F0, #E8A838). Inter + JetBrains Mono. Spacing generoso (80-160px tra sezioni)
- **Modello B:** Mai framing job-seeker. Disponibilità e CV solo in Contatto e Footer
- **Timeline:** Target luglio 2026 per la job search — il sito deve essere live ben prima
- **Locale routing:** EN è il default (no prefix), IT usa /it prefix (`localePrefix: 'as-needed'`)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Dark-mode only per v1 | Ridurre complessità, il design è ottimizzato per dark | — Pending |
| EN come locale default | Il target include hiring manager internazionali | — Pending |
| Blog post hardcoded (no CMS) | Un solo post in v1, non giustifica un CMS | — Pending |
| Umami per analytics | Cookieless, nessun banner necessario, privacy-first | — Pending |
| 0px border-radius ovunque | Scelta estetica deliberata, identità visiva netta | — Pending |
| next-intl per i18n | Soluzione standard per Next.js App Router multilingua | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-22 after initialization*
