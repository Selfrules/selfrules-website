# Gap Analysis: Codebase vs Figma v25

**Data:** 2026-03-23
**Analisi eseguita da:** Confronto visivo Figma Make v25 (prototipo fullscreen) + lettura completa di tutti i file sorgente
**Nota:** localhost:3000 non era raggiungibile durante l'analisi. I gap strutturali sono stati identificati dal codice. Gap visivi/spacing richiedono verifica con dev server attivo.

---

## Sommario

| Severità | Conteggio | Descrizione |
|----------|-----------|-------------|
| 🔴 P0 — Critico | 2 | Layout pagina completamente sbagliato |
| 🟠 P1 — Alto | 8 | Contenuti/componenti mancanti |
| 🟡 P2 — Medio | 4 | Differenze strutturali minori |
| ⚪ P3 — Basso | 3 | Copy/contenuti futuri |
| **Totale** | **17** | |

---

## 🔴 P0 — CRITICO (Layout completamente sbagliato)

### GAP-01: Lab page — Layout non corrisponde al design

**Figma v25:** 3 project card uniformi in griglia 2+1. Ogni card ha:
- Titolo + status badge colorato (SHIPPED verde, IN PROGRESS amber, EXPERIMENT blu)
- Descrizione breve
- Tech stack tags
- Sezione "What it taught me:" in bold + testo

**Codice attuale:** CasaHunter come breakdown dettagliato espanso (problema, cosa fa, decisione di prodotto, stack tags, status, links). MoneyMind come semplice "Coming soon" (solo titolo + one-liner). Nessun OpenClaw.

**File da modificare:**
- `src/app/[locale]/lab/page.tsx` — riscrivere completamente
- `src/components/ui/ProjectCard.tsx` — esiste già, va usato come base
- `src/messages/en.json` e `it.json` — aggiungere entries per OpenClaw, aggiungere "whatItTaughtMe" per tutti e 3 i progetti

**Fix:** Riscrivere la pagina Lab per usare 3 ProjectCard in griglia `grid-cols-1 md:grid-cols-2`. Ogni card usa il componente ProjectCard (che esiste già nel codebase!) con status badges. Aggiungere OpenClaw come terzo progetto.

---

### GAP-02: Notes page — Layout date/contenuti e year grouping mancante

**Figma v25:**
- Headline "Notes" + subtitle "Thinking out loud about product, engineering, and the space in between."
- Year separators ("2024", "2023") con linea orizzontale
- Layout 2 colonne: data a sinistra (es. "Oct 12"), titolo + excerpt a destra
- 5 post distribuiti su 2 anni
- Link "Older posts →" in fondo

**Codice attuale:**
- Headline "Notes" senza subtitle
- 1 solo post
- Data sopra il titolo (stacked verticalmente, non side-by-side)
- Nessun raggruppamento per anno
- Nessun "Older posts →"

**File da modificare:**
- `src/app/[locale]/notes/page.tsx` — ristrutturare layout
- `src/messages/en.json` e `it.json` — aggiungere `notes.subtitle`, struttura posts con year grouping

**Fix:** Ristrutturare il layout dei post con: (1) subtitle sotto headline, (2) raggruppamento per anno con separatore (`<year> ———`), (3) layout a 2 colonne per ogni post (data a sinistra `w-[80px]`, titolo+excerpt a destra), (4) supporto per "Older posts →" link.

---

## 🟠 P1 — ALTO (Contenuti/componenti mancanti)

### GAP-03: Lab — Progetto OpenClaw mancante

**Figma v25:** 3 progetti (CasaHunter, MoneyMind, OpenClaw). OpenClaw è un "open-source web scraper for extracting structured product data from e-commerce sites" con status EXPERIMENT e stack TypeScript, Puppeteer, Cheerio, Docker.

**Codice:** Solo 2 progetti (CasaHunter, MoneyMind).

**Fix:** Aggiungere entry OpenClaw in en.json/it.json con title, description, techStack, status "experiment", whatItTaughtMe. Nota: il copy di Figma è AI-generated — Mattia deve fornire il copy reale.

---

### GAP-04: Lab — Sezione "What it taught me" mancante su tutti i progetti

**Figma v25:** Ogni card ha una sezione "What it taught me:" in bold accent seguito da testo.

**Codice:** Nessuna sezione equivalente.

**Fix:** Aggiungere campo `whatItTaughtMe` a ogni progetto nel JSON i18n. Aggiornare ProjectCard o il layout Lab per renderizzare questa sezione.

---

### GAP-05: Lab — Status badges mancanti (stile Figma)

**Figma v25:** Ogni card ha status badge: verde per SHIPPED, amber per IN PROGRESS, blu per EXPERIMENT. Badge posizionato in alto a destra della card, inline con il titolo.

**Codice:** Il componente ProjectCard.tsx esiste e supporta status badges, MA la pagina Lab non lo usa — usa un layout custom con dot status diverso.

**Fix:** Usare ProjectCard component (che già supporta 'active'|'shipped'|'coming-soon') nella nuova pagina Lab. Estendere con status 'experiment' e mappare ai colori Figma.

---

### GAP-06: Work page — Figma mostra 3 case study, codice ne ha solo 2

**Figma v25:** 3 card:
1. B2B SAAS / DEVTOOLS — "Reduced post-release incidents by 25%" — -25%
2. PAYMENTS / PLATFORM — "Grew integration adoption with a self-serve API portal" — +9%
3. FINTECH / ENTERPRISE — "Optimized legacy payment processing times" — -12%

**Codice:** Solo 2 case studies (Payments, Cashless).

**Nota:** Il copy di Figma è AI-generated. Ma la STRUTTURA a 3 card è il design intent. La terza card potrebbe essere il LeadsBridge case study (TASK-CS-03 pendente).

**Fix:** Predisporre la struttura per 3 card. Aggiungere terzo case study quando il contenuto è pronto. Per ora, opzione: (A) aggiungere placeholder con "Coming soon" o (B) tenere 2 card ma verificare che il layout regga visivamente con 2 invece di 3.

---

### GAP-07: Homepage "Now" section — 2 card nel codice, 3 nel Figma

**Figma v25:** 3 card verticali con status badges:
- QubicaAMF Platform (ACTIVE)
- CasaHunter (SHIPPED)
- MoneyMind (EXPERIMENT)

**Codice:** Solo 2 card generiche (testo libero, nessun status badge). Il componente CurrentWork usa card con solo title + text.

**Fix:** Ristrutturare CurrentWork per usare card con title + description + status badge (simile a ProjectCard). Aggiungere terza card. Aggiornare i18n.

---

### GAP-08: About page — Badge "↑ overlap" mancante nella timeline

**Figma v25:** Tra il nodo "Designer" (2012-2018) e "Developer" (2016-2020) c'è un badge "↑ overlap" sulla linea verticale, evidenziando il periodo di sovrapposizione.

**Codice:** Nessun badge overlap. La timeline mostra i 4 nodi in sequenza senza indicazione dell'overlap.

**Fix:** Aggiungere un elemento badge "↑ overlap" tra il primo e il secondo nodo della timeline, posizionato sulla linea verticale. Testo in accent color, font-mono, piccolo.

---

### GAP-09: About page — CTA struttura diversa

**Figma v25:** Due CTA: "Read my case studies →" (primary con freccia) + "Get in touch" (secondary).

**Codice:** Un solo CTA: "Get in touch" → mailto.

**Fix:** Aggiornare PageCTA nella about page per avere dual CTA: primary → /work, secondary → mailto. Aggiornare i18n.

---

### GAP-10: Notes page — Subtitle mancante

**Figma v25:** Sotto "Notes" c'è: "Thinking out loud about product, engineering, and the space in between."

**Codice:** Solo headline, nessun subtitle.

**Fix:** Aggiungere `notes.subtitle` in en.json/it.json. Renderizzare sotto l'h1 nella notes page.

---

## 🟡 P2 — MEDIO (Differenze strutturali minori)

### GAP-11: Work page — CTA diversa da Figma

**Figma v25:** Singola CTA: "Let's talk →" (solo testo + freccia, senza bottone secondario).

**Codice:** Dual CTA: "About me" (primary → /about) + "Get in touch" (secondary → mailto).

**Fix:** Allineare alla struttura Figma. Valutare se il dual CTA del codice è intenzionale (decisione di copy) o errore.

---

### GAP-12: Approach page — Esiste nel codice ma non nel Figma

**Figma v25 navbar:** About, Work, Lab, Notes, Let's talk. Nessun "Approach".

**Codice:** `/approach` route esiste con contenuto completo (5 sezioni), ma NON è nella navbar. La pagina è raggiungibile solo via URL diretto.

**Impatto:** Non è un errore — la pagina non è nel nav, quindi non è visibile ai visitatori normali. Ma genera una route indicizzabile da Google.

**Fix:** Decisione da prendere:
- (A) Eliminare la pagina e spostare il contenuto in un blog post /notes
- (B) Tenerla come "hidden page" linkabile dal CV o da LinkedIn
- (C) Aggiungere `noindex` meta tag

---

### GAP-13: Homepage "Now" — Card senza status badges

**Figma v25:** Le card nella sezione "Now" hanno status badges (ACTIVE, SHIPPED, EXPERIMENT) uguali a quelli del Lab.

**Codice:** Le card CurrentWork hanno solo titolo e testo, nessun badge.

**Fix:** Incluso in GAP-07. Quando si ristruttura la sezione Now, aggiungere i badges.

---

### GAP-14: Duplicate SectionHeader component

**Codice:** SectionHeader esiste in due location:
- `src/components/sections/SectionHeader.tsx`
- `src/components/layout/SectionHeader.tsx`

**Fix:** Eliminare il duplicato, tenere solo una versione.

---

## ⚪ P3 — BASSO (Copy/contenuti futuri)

### GAP-15: Notes — Solo 1 post vs 5 nel Figma

I 5 post nel Figma sono AI-generated placeholder. Il contenuto reale ha solo 1 post. Non è un gap di implementazione ma di contenuto.

**Fix:** Nessuna modifica al codice. Il layout deve supportare N post (già lo fa). Il contenuto verrà aggiunto nel tempo.

---

### GAP-16: Dev components page esposta

`/dev/components` route esiste ed è accessibile in produzione.

**Fix:** Aggiungere `noindex` o proteggere dietro env check (solo in development).

---

### GAP-17: Footer email — Figma mostra "hello@selfrules.org" ma source dice "mattia@selfrules.org"

Per convenzione, i file sorgente hanno la precedenza → nessun fix richiesto. La differenza è dovuta al copy AI-generated di Figma Make.

---

## Piano di Fix — Ordine di esecuzione

### Sprint 1: Fix critici (P0)

| # | Task | File | Effort |
|---|------|------|--------|
| 1 | Riscrivere Lab page con 3 ProjectCard | lab/page.tsx, en.json, it.json | 2h |
| 2 | Ristrutturare Notes layout (2-col, year groups, subtitle) | notes/page.tsx, en.json, it.json | 1.5h |

### Sprint 2: Gap strutturali (P1)

| # | Task | File | Effort |
|---|------|------|--------|
| 3 | Aggiungere progetto OpenClaw (i18n + card) | en.json, it.json | 30min |
| 4 | Aggiungere "What it taught me" a tutti i lab projects | en.json, it.json, lab/page.tsx | 30min |
| 5 | Homepage "Now": ristrutturare con 3 card + status badges | CurrentWork.tsx, page.tsx, en.json, it.json | 1h |
| 6 | About: aggiungere "↑ overlap" badge in timeline | about/page.tsx | 30min |
| 7 | About: fix CTA dual (case studies + contact) | about/page.tsx, en.json, it.json | 20min |
| 8 | Notes: aggiungere subtitle | notes/page.tsx, en.json, it.json | 10min |
| 9 | Work: predisporre struttura per 3° case study | work/page.tsx, en.json, it.json | 30min |

### Sprint 3: Cleanup (P2-P3)

| # | Task | File | Effort |
|---|------|------|--------|
| 10 | Work: allineare CTA a Figma | work/page.tsx, en.json, it.json | 15min |
| 11 | Decidere destino /approach page | approach/page.tsx | 15min |
| 12 | Rimuovere SectionHeader duplicato | layout/SectionHeader.tsx | 10min |
| 13 | Proteggere /dev/components | dev/components/page.tsx | 10min |

**Effort totale stimato:** ~7 ore

---

## Cosa è OK ✅ (nessun gap)

Le seguenti aree sono correttamente implementate:
- ✅ Tutti e 9 i "signature elements" v25 (Space Grotesk, 0px radius, terminal hero, signature phrase, build version, counter animation, vertical timeline, /notes route, 100vh hero)
- ✅ Design tokens (colori, spacing, typography scale)
- ✅ Font loading (Inter, Space Grotesk, JetBrains Mono)
- ✅ Navbar struttura e active states
- ✅ Footer completo con build version
- ✅ Mobile menu con focus trap e accessibility
- ✅ Homepage hero layout (terminal prompt, cursore, tags, signature)
- ✅ Homepage "How I Work" sezione (3 pillar grid)
- ✅ Homepage Timeline (horizontal desktop, vertical mobile)
- ✅ Homepage Metrics (6 metriche con CountUpNumber)
- ✅ About page VerticalTimeline con nodi quadrati
- ✅ About page "What I believe" sezione
- ✅ About page "Outside work" sezione
- ✅ ScrollReveal animations
- ✅ Bilingual i18n (en/it)
- ✅ SEO (JSON-LD, meta tags, canonical URLs)
- ✅ Accessibility (skip link, ARIA, reduced motion)
- ✅ 404 page con signature phrase
