# Phase 6: SEO, Polish & Deploy - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-22
**Phase:** 06-seo-polish-deploy
**Areas discussed:** Scroll animations, Meta title pattern, JSON-LD structured data, Deploy & domain cutover

---

## Scroll Animations

### Q1: Quali elementi devono avere il fade-in on scroll?

| Option | Description | Selected |
|--------|-------------|----------|
| Solo sezioni (Consigliato) | Ogni section component fa fade-in quando entra in viewport. Hero senza animazione. | ✓ |
| Sezioni + card singole | Sezioni + singole card (MetricCard, CaseStudyCard, TimelineBlock) con stagger. | |
| Minimal — solo below-the-fold | Solo le sezioni dopo l'Hero. Ultra-sobrio. | |

**User's choice:** Solo sezioni (Consigliato)
**Notes:** Nessuna nota aggiuntiva.

### Q2: Quale stile di fade-in per le sezioni?

| Option | Description | Selected |
|--------|-------------|----------|
| Fade-up (Consigliato) | Opacità 0→1 + translate-y 20-30px, ~600ms ease-out. | ✓ |
| Fade only | Solo opacità, nessun movimento. | |
| Tu decidi | Claude sceglie. | |

**User's choice:** Fade-up (Consigliato)
**Notes:** Nessuna nota aggiuntiva.

### Q3: Trigger threshold

| Option | Description | Selected |
|--------|-------------|----------|
| 10-15% visibile (Consigliato) | Animazione parte appena il bordo superiore entra nell'85-90% della viewport. | ✓ |
| 30% visibile | Più ritardato, effetto più drammatico. | |
| Tu decidi | Claude calibra il threshold. | |

**User's choice:** 10-15% visibile (Consigliato)
**Notes:** Nessuna nota aggiuntiva.

---

## Meta Title Pattern

### Q4: Formato meta title

| Option | Description | Selected |
|--------|-------------|----------|
| Page — Mattia De Luca (Consigliato) | Personale, professionale, coerente con Modello B. | ✓ |
| Page \| selfrules.org | Più brand-oriented, meno personale. | |
| Solo Page Title | Minimale ma meno riconoscibile. | |

**User's choice:** Page — Mattia De Luca (Consigliato)
**Notes:** Nessuna nota aggiuntiva.

### Q5: OG image strategy

| Option | Description | Selected |
|--------|-------------|----------|
| Un'unica OG image statica (Consigliato) | Una sola 1200x630 per tutte le pagine. OG dinamiche sono v2. | ✓ |
| Nessuna OG image | Solo meta title/description. | |
| Tu decidi | Claude decide. | |

**User's choice:** Un'unica OG image statica (Consigliato)
**Notes:** Nessuna nota aggiuntiva.

### Q6: Meta description source

| Option | Description | Selected |
|--------|-------------|----------|
| Da microcopy.md (Consigliato) | Copiare esattamente, coerente con COPY-01. | ✓ |
| Claude le scrive | Claude genera meta description SEO-ottimizzate. | |
| Mix | Microcopy dove c'è, Claude dove manca. | |

**User's choice:** Da microcopy.md (Consigliato)
**Notes:** Nessuna nota aggiuntiva.

---

## JSON-LD Structured Data

### Q7: Person schema scope

| Option | Description | Selected |
|--------|-------------|----------|
| Essenziale (Consigliato) | name, jobTitle, url, sameAs (LinkedIn, GitHub). | ✓ |
| Esteso | + worksFor, knowsAbout, alumniOf. | |
| Tu decidi | Claude valuta. | |

**User's choice:** Essenziale (Consigliato)
**Notes:** Nessuna nota aggiuntiva.

### Q8: BreadcrumbList scope

| Option | Description | Selected |
|--------|-------------|----------|
| Tutte le inner pages (Consigliato) | About, Work, Lab, Approach, Blog, Blog post. Solo JSON-LD, nessun breadcrumb visivo. | ✓ |
| Solo blog post | Solo dove la profondità lo giustifica. | |
| Tu decidi | Claude decide. | |

**User's choice:** Tutte le inner pages (Consigliato)
**Notes:** Nessuna nota aggiuntiva.

### Q9: Article schema per blog

| Option | Description | Selected |
|--------|-------------|----------|
| Sì, Article schema (Consigliato) | BlogPosting con headline, datePublished, author, description. | ✓ |
| No, solo Person + Breadcrumb | Impatto minimo con 1 solo post. | |
| Tu decidi | Claude valuta. | |

**User's choice:** Sì, Article schema (Consigliato)
**Notes:** Nessuna nota aggiuntiva.

---

## Deploy & Domain Cutover

### Q10: Strategia di transizione

| Option | Description | Selected |
|--------|-------------|----------|
| Deploy diretto su Vercel (Consigliato) | Colleghi il repo, configuri il dominio, il vecchio sito viene sostituito. | ✓ |
| Preview prima, poi cutover manuale | Deploy su dominio temporaneo, verifica, poi punta selfrules.org. | |
| Tu decidi | Claude suggerisce l'approccio più sicuro. | |

**User's choice:** Deploy diretto su Vercel (Consigliato)
**Notes:** Nessuna nota aggiuntiva.

### Q11: Redirect da vecchi URL

| Option | Description | Selected |
|--------|-------------|----------|
| Non servono redirect | Struttura diversa, nessun SEO equity da preservare. | ✓ |
| Servono alcuni redirect | URL con traffico/backlink da mappare. | |
| Non so, verifico dopo | Procede senza, aggiungiamo se serve. | |

**User's choice:** Non servono redirect
**Notes:** Nessuna nota aggiuntiva.

---

## Claude's Discretion

- OG image statica design
- Accessibility audit approach e tool
- Performance optimization strategy
- Smooth scroll per anchor links
- Active state nav links
- Layout shift prevention
- html lang attribute implementation

## Deferred Ideas

None — discussion stayed within phase scope.
