# Strategia SEO — selfrules.org

**Stato:** BOZZA v1 — 2026-03-22
**Principio:** Content-driven SEO. Il sito è un portfolio professionale, non un blog ad alto volume. La SEO serve a farsi trovare da recruiter e hiring manager, non a generare traffico organico di massa.

---

## Obiettivo SEO

Farsi trovare da chi cerca:
1. Un PM con background tecnico (ricerca diretta)
2. Case study di prodotto nel dominio payments/platform (ricerca per argomento)
3. Side project di PM che costruiscono (ricerca per identità professionale)

NON è un obiettivo: posizionarsi su keyword generiche come "product management" o "come diventare PM".

---

## Keyword strategy per pagina

### Homepage
| Keyword | Tipo | Volume stimato | Difficoltà |
|---------|------|---------------|------------|
| technical product manager | Primaria | Medio | Media |
| product manager payments | Primaria | Basso | Bassa |
| senior PM B2B SaaS | Secondaria | Basso | Bassa |
| product manager portfolio | Long-tail | Basso | Bassa |

**Meta title:** Mattia De Luca — Senior Technical Product Manager | B2B SaaS · Payments
**H1:** Senior Technical Product Manager. Design, codice, e product management nella stessa testa.

### About
| Keyword | Tipo | Volume stimato | Difficoltà |
|---------|------|---------------|------------|
| product manager background tecnico | Primaria | Basso | Bassa |
| PM designer developer | Primaria | Basso | Bassa |
| cross-functional product manager | Secondaria | Basso | Bassa |

**Meta title:** Chi è Mattia De Luca — Product Manager con background in design e sviluppo

### Work (case study listing)
| Keyword | Tipo | Volume stimato | Difficoltà |
|---------|------|---------------|------------|
| product manager case study | Primaria | Medio | Media |
| PM portfolio | Secondaria | Basso | Bassa |
| payment system case study | Long-tail | Basso | Bassa |

### Case study individuali
Ogni case study ha la sua keyword basata sul problema risolto, non sul nome azienda.

| Case study | Keyword target |
|-----------|---------------|
| Payments Rescue | payment system rescue, payment uptime case study |
| Cashless System | cashless integration strategy, cashless product management |
| LeadsBridge (futuro) | SaaS integration redesign, bridge mapping UX |

### Lab
| Keyword | Tipo | Volume stimato | Difficoltà |
|---------|------|---------------|------------|
| product manager side projects | Primaria | Basso | Bassa |
| PM who codes | Primaria | Basso | Bassa |
| technical PM portfolio | Secondaria | Basso | Bassa |

### Approach
| Keyword | Tipo | Volume stimato | Difficoltà |
|---------|------|---------------|------------|
| product management approach | Primaria | Medio | Alta |
| how I work PM | Long-tail | Basso | Bassa |
| technical product manager process | Secondaria | Basso | Bassa |

### Blog
| Keyword (primo post) | Tipo | Volume stimato | Difficoltà |
|---------|------|---------------|------------|
| product manager who codes | Primaria | Basso | Bassa |
| PM prototype in code | Long-tail | Basso | Bassa |
| technical PM coding skills | Secondaria | Basso | Bassa |

---

## Markup tecnico

### Schema.org
```json
// Homepage — Person
{
  "@type": "Person",
  "name": "Mattia De Luca",
  "jobTitle": "Senior Technical Product Manager",
  "url": "https://selfrules.org",
  "sameAs": [
    "https://linkedin.com/in/selfrules",
    "https://github.com/selfrules"
  ]
}

// Blog post — Article
{
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Person", "name": "Mattia De Luca" },
  "datePublished": "..."
}

// Tutte le pagine interne — BreadcrumbList
{
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

### Open Graph
Ogni pagina ha: `og:title`, `og:description`, `og:image` personalizzati.
Immagine OG: branded (logo + headline su sfondo scuro, stile neo-brutalist).

### Specifiche tecniche
- Sitemap XML generata automaticamente
- robots.txt standard
- Canonical URL su ogni pagina
- hreflang per IT/EN (`<link rel="alternate" hreflang="it" href="...">`)
- Pagine veloci: target < 1s LCP, nessun JS blocking
- Mobile-first: tutto il layout responsive
- Alt text su tutte le immagini (se presenti)

---

## Strategia contenuti per SEO

### Cosa funziona per un portfolio PM
1. **Case study con keyword problema-specifiche** — chi cerca "payment system rescue" è un hiring manager o PM con lo stesso problema. Traffico basso ma ad altissima conversione.
2. **Lab/side projects come keyword proof** — "PM who codes" e "product manager side projects" sono nicchie con poca competizione. I side project sono la prova.
3. **Blog post lunghi e specifici** — un saggio come "Why I prototype in code" attira traffico long-tail e backlink da chi condivide il punto di vista.

### Cosa NON fare
- **No keyword stuffing** — il contenuto è già scritto nella voce giusta. Non aggiungere keyword artificiali.
- **No blog ad alto volume** — 1 post di qualità al mese batte 4 post mediocri a settimana.
- **No guest posting aggressivo** — il sito è un portfolio, non un blog aziendale.
- **No contenuti "How to" generici** — "5 cose che ogni PM dovrebbe sapere" è off-brand e off-strategy.

### Distribuzione
- Ogni case study e blog post va condiviso su LinkedIn (cross-posting con link)
- LinkedIn è il canale primario di distribuzione, non la SEO organica
- La SEO serve a chi ti cerca dopo averti trovato su LinkedIn (il "secondo click")

---

## Priorità implementazione

| Azione | Priorità | Quando |
|--------|----------|--------|
| Meta title + description su ogni pagina | Alta | Con il lancio |
| Schema.org Person sulla homepage | Alta | Con il lancio |
| hreflang IT/EN | Alta | Con il lancio |
| Open Graph su ogni pagina | Media | Con il lancio |
| Sitemap XML | Media | Con il lancio |
| Schema.org Article sui blog post | Bassa | Quando il blog è attivo |
| Monitoraggio Search Console | Media | Post-lancio |
| Keyword tracking (3-5 keyword core) | Bassa | Post-lancio, mensile |

---

## Note

- Il sito è un portfolio personale. Il traffico organico sarà basso per natura. L'obiettivo non è volume ma pertinenza: le persone giuste devono trovarti quando ti cercano.
- La distribuzione primaria è LinkedIn. La SEO è il "secondo click": quando un recruiter vede il tuo post su LinkedIn e poi cerca "Mattia De Luca product manager", il sito deve essere il primo risultato.
- Le keyword sono tutte a basso volume e bassa competizione. È intenzionale. Meglio essere primi su "product manager payments case study" che invisibili su "product management".
