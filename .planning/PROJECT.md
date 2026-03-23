# selfrules.org

## What This Is

Sito web personale di Mattia De Luca (selfrules.org), posizionato come **Modello B — identità aspirazionale**. Il sito di un IC (individual contributor) che pensa ad alta voce: mostra come ragiona, come prende decisioni di prodotto, cosa ha costruito e con quali risultati. Sito statico multilingua (IT + EN), dark-mode first, costruito con Next.js 16.2 e live su selfrules.org.

## Core Value

Un hiring manager o recruiter che atterra su selfrules.org deve pensare "questo è uno che sa quello che fa" — il sito comunica competenza attraverso specificità e risultati, mai attraverso self-promotion o richiesta di opportunità.

## Current State

**v1.0 MVP shipped 2026-03-23.** Sito live con 6 pagine + 1 blog post, completo in IT + EN.

- **Stack:** Next.js 16.2, TypeScript, Tailwind v4 CSS-first, next-intl 4.8.x, @next/mdx
- **LOC:** 2,949 (TypeScript, CSS, MDX)
- **Pages:** Homepage (6 sezioni), About, Work, Lab, Approach, Notes (listing + 1 post)
- **Components:** 13+ (Button, MetricCard, CaseStudyCard, ProjectCard, Timeline, etc.)
- **SEO:** Full metadata, JSON-LD, sitemap, robots.txt, hreflang
- **Deploy:** Vercel con vercel.json + security headers

## Requirements

### Validated

- ✓ Sito multilingua IT + EN con routing locale-based — v1.0
- ✓ Homepage con 6 sezioni (Hero, Come lavoro, Percorso, Numeri, Cosa faccio ora, Contatto) — v1.0
- ✓ Pagina About con percorso professionale, principi, sezione personale — v1.0
- ✓ Pagina Work con 2 case study card — v1.0
- ✓ Pagina Lab con progetti personali (CasaHunter, MoneyMind) — v1.0
- ✓ Pagina Approach con 5 sezioni su metodo di lavoro — v1.0
- ✓ Blog con listing e 1 post ("Why I Prototype in Code") — v1.0
- ✓ Design system dark-mode first: palette, 0px border-radius, Inter + JetBrains Mono — v1.0
- ✓ Navbar fixed con scroll behavior, language toggle, mobile hamburger — v1.0
- ✓ Footer con bio, email, LinkedIn, GitHub, CV download — v1.0
- ✓ Pagina 404 con copy dedicato — v1.0
- ✓ SEO completo: meta tags, OG, hreflang, JSON-LD, sitemap, robots.txt — v1.0
- ✓ Performance: Lighthouse 95+ su tutte le categorie — v1.0
- ✓ Scroll animations con rispetto prefers-reduced-motion — v1.0
- ✓ Accessibilità: skip-to-content, focus styles, WCAG AA — v1.0
- ✓ Analytics: Umami cookieless — v1.0
- ✓ Copy identico ai file sorgente — v1.0
- ✓ Modello B compliance — v1.0
- ✓ Deploy su Vercel con dominio selfrules.org — v1.0

### Active

(Nessun requisito attivo — in attesa di definizione v1.1)

### Out of Scope

- Light mode toggle — rimandato a v2, il sito è dark-mode only per ora
- CMS per blog — il post v1 è MDX, nessun CMS
- Case study pages singole (`/work/[slug]`) — solo card listing in v1
- Form di contatto — solo mailto e link diretti
- Animated page transitions — over-engineered, 30KB+ Framer Motion
- Chat widget / Calendly embed — pattern consultant, anti-IC
- Newsletter signup — content marketing / guru energy, incompatibile con Modello B

## Context

- **Shipped v1.0** in 2 giorni (2026-03-22 → 2026-03-23) con 156 file, 34K+ insertions
- **Figma v25 alignment:** Post-build è stata fatta un'alignment pass al prototipo Figma v25 con fix pixel-perfect
- **Known tech debt:** OG image è un placeholder PNG (da esportare da Figma), deploy richiede autenticazione Vercel di Mattia
- **Post-v1 visual fixes:** 5 commit di fix post-build per allineamento Figma v25 (spacing, font weight, navbar, footer, hero)

## Constraints

- **Stack:** Next.js 16.2 (App Router), TypeScript, Tailwind CSS v4 (CSS-first), next-intl 4.8.x, Vercel — non negoziabile
- **Copy:** DEFINITIVO. Nessuna riscrittura
- **Design:** 0px border-radius ovunque. Palette (#0A0A0B, #F5F5F0, #E8A838). Inter + JetBrains Mono
- **Modello B:** Mai framing job-seeker. Disponibilità solo in Contatto e Footer
- **Locale routing:** EN default (no prefix), IT usa /it prefix

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Dark-mode only per v1 | Ridurre complessità, design ottimizzato per dark | ✓ Good |
| EN come locale default | Target include hiring manager internazionali | ✓ Good |
| Blog post hardcoded MDX (no CMS) | Un solo post in v1, non giustifica un CMS | ✓ Good |
| Umami per analytics | Cookieless, nessun banner, privacy-first | ✓ Good |
| 0px border-radius ovunque | Identità visiva netta, signature element | ✓ Good |
| next-intl per i18n | Standard per Next.js App Router multilingua | ✓ Good |
| Next.js 16.2 (non 15) | Greenfield = nessun motivo per versione vecchia, proxy.ts | ✓ Good |
| Tailwind v4 CSS-first @theme | No tailwind.config.ts, 5x faster builds | ✓ Good |
| @next/mdx (non next-mdx-remote) | next-mdx-remote poorly maintained, @next/mdx è ufficiale | ✓ Good |
| IntersectionObserver (no Framer Motion) | 30KB+ per un fade-in, overkill | ✓ Good |
| Space Grotesk per headline 404 | Signature font per pagina speciale | ✓ Good |
| Inline timeline nodes (no TimelineNode) | Rich text ReactNode support per i18n | ✓ Good — decisione Phase 5 |
| OG image placeholder | Final image da esportare da Figma | ⚠️ Revisit — serve OG definitivo |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition:**
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions

**After each milestone:**
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-23 after v1.0 milestone*
