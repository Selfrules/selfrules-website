# Lab — selfrules.org

**URL:** /lab (EN) · /it/lab (IT)
**Stato:** BOZZA v1 — 2026-03-22

---

## 🇮🇹 ITALIANO

---

### Headline

Lo stesso modo di pensare, applicato a problemi miei.

### Intro

Ogni progetto qui è partito da un bisogno reale, non da un tutorial. Lo stesso approccio del lavoro: capire il problema, costruire il minimo necessario per validare l'idea, decidere cosa non costruire. Il codice è il mezzo. Il pensiero di prodotto è il contenuto.

---

### Progetto 1: CasaHunter

**One-liner:** Un tool che cerca casa al posto tuo, impara dai tuoi feedback, e ti avvisa su Telegram.

**Il problema:** Trovare un appartamento in affitto in provincia di Modena in 4 mesi. 8 portali diversi, nessuno con filtri decenti. Controllare tutto a mano ogni giorno non scalava.

**Cosa fa:** Scraping da 8 fonti (Immobiliare, Idealista, Subito, Casa.it, Bakeca, Wikicasa, Trovacasa, Airbnb), deduplicazione annunci, e scoring a 3 passaggi. Il primo è deterministico (gratis). Il secondo usa Claude solo sugli annunci promettenti (ottimizzazione costi). Il terzo ri-valuta sulla base dei feedback. Quando trova qualcosa di buono, notifica su Telegram.

**La decisione di prodotto:** Tre passaggi invece di uno perché mandare tutto all'AI costava troppo e non migliorava la qualità. Il passaggio deterministico filtra l'80% del rumore. L'AI lavora solo sul 20% che conta. Stessa logica applicabile a qualsiasi prodotto.

**Stack:** Python 3.11, SQLite, Claude Sonnet, React 18, Tailwind, Leaflet, Recharts, Telegram API, GitHub Actions
**Stato:** Attivo. 880+ annunci analizzati. Ho trovato casa.
**Link:** [GitHub] · [Dashboard live]

---

### Prossimamente

**MoneyMind** — Finanza personale che non chiede di compilare spreadsheet. Analisi automatica delle transazioni, pattern recognition, insight settimanali. In sviluppo.

---

### CTA

Se ti interessa come ragiono quando costruisco, i case study professionali raccontano la stessa cosa su scala diversa.

**CTA:** Guarda i lavori →

---

### Meta

**Meta title:** Lab — Mattia De Luca | Side project di un Product Manager
**Meta description:** Cosa costruisce un PM nel tempo libero. CasaHunter e altri side project partiti da problemi reali, non da tutorial.
**Keyword target:** product manager side projects, PM who codes, technical PM portfolio

---
---

## 🇬🇧 ENGLISH

---

### Headline

Same thinking, applied to my own problems.

### Intro

Every project here started from a real need, not a tutorial. Same approach as the day job: understand the problem, build the minimum to validate the idea, decide what not to build. Code is the means. Product thinking is the point.

---

### Project 1: CasaHunter

**One-liner:** A tool that apartment-hunts for you, learns from your feedback, and pings you on Telegram.

**The problem:** Finding a rental apartment in northern Italy in 4 months. 8 different listing sites, none with decent filters. Checking everything manually every day didn't scale.

**What it does:** Scrapes 8 sources (Immobiliare, Idealista, Subito, Casa.it, Bakeca, Wikicasa, Trovacasa, Airbnb), deduplicates listings, and runs them through a 3-pass scoring algorithm. First pass is deterministic (free). Second pass uses Claude only on promising listings (cost optimization). Third pass re-evaluates based on feedback. When it finds something good, it sends a Telegram notification.

**The product decision:** Three passes instead of one because sending everything to AI cost too much and didn't improve quality. The deterministic pass filters out 80% of noise. AI works only on the 20% that matters. Same logic applicable to any product at scale.

**Stack:** Python 3.11, SQLite, Claude Sonnet, React 18, Tailwind, Leaflet, Recharts, Telegram API, GitHub Actions
**Status:** Active. 880+ listings analyzed. I found the apartment.
**Link:** [GitHub] · [Live dashboard]

---

### Coming soon

**MoneyMind** — Personal finance that doesn't ask you to fill out spreadsheets. Automatic transaction analysis, pattern recognition, weekly insights. In development.

---

### CTA

If you're curious about how I think when I build, the professional case studies tell the same story at a different scale.

**CTA:** See the work →

---

### Meta

**Meta title:** Lab — Mattia De Luca | A Product Manager's side projects
**Meta description:** What a PM builds in their spare time. CasaHunter and other side projects born from real problems, not tutorials.
**Keyword target:** product manager side projects, PM who codes, technical PM portfolio
