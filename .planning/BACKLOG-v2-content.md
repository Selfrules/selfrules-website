# Backlog v2.0 — Content Benchmark Expansion

> Basato su: `docs/drafts/pm-content-benchmark-analysis.md` (30 marzo 2026)
> Fonte: Analisi di 10+ siti PM influenti (Torres, Cagan, Lenny, Cutler, Biddle, Norton, Zhuo, Perri)
> Obiettivo: Amplificare l'impatto del sito per HM/recruiter attraverso contenuto più denso e interconnesso

---

## Legenda

- **Impatto:** 🔴 Alto / 🟠 Medio / 🟡 Basso
- **Effort:** S (< 2h) / M (2-4h) / L (4-8h) / XL (8h+)
- **Dipendenze:** [INSIEME] = richiede copy/decisione di Mattia / [SOLO] = eseguibile da Claude
- **Stato:** ⬜ TODO / 🔄 IN PROGRESS / ✅ DONE

---

## Riepilogo per impatto

| # | Epic | Impatto | Effort totale | Valore per HM |
|---|------|---------|---------------|---------------|
| EPIC 28 | Work Page Meta-Narrative | 🔴 Alto | M | Il recruiter capisce il tuo pattern in 30 secondi |
| EPIC 29 | Cross-Linking Ecosystem | 🔴 Alto | M | Ogni pagina rafforza le altre, più tempo sul sito |
| EPIC 30 | Lab Decision Logs | 🔴 Alto | M | Trasforma CasaHunter da "progetto tech" a "prova di product thinking" |
| EPIC 31 | Post Definitorio | 🔴 Alto | XL | Il tuo "How to Hire a PM" — il pezzo più linkato e cercato |
| EPIC 32 | Notes Featured + Hierarchy | 🟠 Medio | S | Guida il lettore ai contenuti migliori, non alla lista cronologica |
| EPIC 33 | Case Study Patterns Prominence | 🟠 Medio | M | I pattern diventano il tuo framework implicito |
| EPIC 34 | Blog Expansion — Bridge Posts | 🟠 Medio | XL | Post che collegano case study e principi, stile Norton |
| EPIC 35 | Lab Expansion — OpenClaw | 🟠 Medio | L | Terzo progetto = terzo angolo del PM builder |
| EPIC 36 | Approach Page Decision | 🟡 Basso | S | Pulire il sito da pagine ambigue |

---

## EPIC 28 — Work Page Meta-Narrative

> **Impatto: 🔴 Alto** | **Effort: M** | **Benchmark: Biddle (DHM collega tutto), Cagan ("Behind Every Great Product")**
>
> Il filo rosso che collega i 3 case study. Un HM che legge la pagina /work deve uscire con un'immagine chiara del tuo pattern ricorrente, non solo con 3 storie separate.

### US 28.1 — Aggiungere meta-narrative nella pagina /work listing

**Come** visitatore della pagina Work
**Voglio** capire il pattern comune tra i case study
**Così che** ho un'immagine chiara di come lavora Mattia, non solo 3 storie separate

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-28.1.1 | Scrivere paragrafo meta-narrative EN: collegamento tra i 3 case study ("In tutti e tre i casi, il problema che mi è stato presentato non era il problema reale") | S | [INSIEME] — Mattia valida tono e contenuto | ⬜ |
| T-28.1.2 | Scrivere paragrafo meta-narrative IT (nativo, non tradotto) | S | [INSIEME] — dopo T-28.1.1 | ⬜ |
| T-28.1.3 | Aggiungere chiavi i18n in en.json/it.json per meta-narrative | S | [SOLO] — dopo T-28.1.1 e T-28.1.2 | ⬜ |
| T-28.1.4 | Implementare nel layout di `/work/page.tsx` sotto l'intro, sopra le card | S | [SOLO] | ⬜ |

**Acceptance criteria:**
- Il meta-narrative è visibile tra intro e case study card
- Non è un framework con nome — è un'osservazione
- Letto in isolamento, comunica il pattern "scavare nel problema reale"

---

## EPIC 29 — Cross-Linking Ecosystem

> **Impatto: 🔴 Alto** | **Effort: M** | **Benchmark: Tutti i buoni lo fanno (Norton, Torres, Biddle collegano ogni pezzo)**
>
> Ogni blog post linka al case study rilevante. Ogni case study linka ai blog correlati. Ogni progetto lab linka al blog che ne parla. Il visitatore che atterra su una pagina qualsiasi finisce per leggere 3+ pagine.

### US 29.1 — Cross-link blog → case study

**Come** lettore di un blog post
**Voglio** trovare il case study che dimostra ciò di cui il post parla
**Così che** passo dalla teoria alla prova concreta

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-29.1.1 | Mappare le relazioni: quale post linka a quale case study/lab project | S | [SOLO] | ⬜ |
| T-29.1.2 | Aggiungere "Related" section o inline link in "Why I Prototype in Code" → CasaHunter + Payments Rescue | S | [SOLO] | ⬜ |
| T-29.1.3 | Aggiungere link in "Build vs Buy Framework" → Cashless System | S | [SOLO] | ⬜ |
| T-29.1.4 | Aggiungere link in "Managing Payments at Scale" → Payments Rescue | S | [SOLO] | ⬜ |
| T-29.1.5 | Aggiungere link in "When AI Makes Sense in Product" → CasaHunter | S | [SOLO] | ⬜ |
| T-29.1.6 | Aggiungere link negli altri post dove rilevante | S | [SOLO] | ⬜ |

### US 29.2 — Cross-link case study → blog

**Come** lettore di un case study
**Voglio** trovare il blog post che approfondisce un tema emerso nel caso
**Così che** continuo a esplorare il pensiero di Mattia

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-29.2.1 | Aggiungere "Related notes" alla fine di Payments Rescue → "Managing Payments at Scale", "Why I Prototype in Code" | S | [SOLO] | ⬜ |
| T-29.2.2 | Aggiungere "Related notes" alla fine di Cashless System → "Build vs Buy Framework" | S | [SOLO] | ⬜ |
| T-29.2.3 | Aggiungere "Related notes" alla fine di LeadsBridge Redesign → post rilevante | S | [SOLO] | ⬜ |

### US 29.3 — Cross-link lab → blog/case study

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-29.3.1 | Aggiungere link CasaHunter → "Why I Prototype in Code" + "When AI Makes Sense in Product" | S | [SOLO] | ⬜ |

**Acceptance criteria:**
- Ogni blog post con un case study/lab correlato ha almeno un link esplicito
- Ogni case study ha una sezione "Related notes" alla fine
- I link sono bidirezionali (post → caso, caso → post)
- Il design è minimale (non box enormi, solo link testuali con contesto)

---

## EPIC 30 — Lab Decision Logs

> **Impatto: 🔴 Alto** | **Effort: M** | **Benchmark: Nessun PM influente lo fa — questo è un differenziatore**
>
> Ogni progetto lab mostra le 3-5 decisioni di prodotto più importanti prese durante lo sviluppo. Non l'architettura tecnica, non il codice: le decisioni. Questo è il formato che un HM legge pensando "questo sa fare product".

### US 30.1 — Decision Log per CasaHunter

**Come** hiring manager che guarda il lab
**Voglio** vedere le decisioni di prodotto, non solo la tech stack
**Così che** capisco come Mattia pensa, non solo cosa sa fare

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-30.1.1 | Identificare le 3-5 decisioni di prodotto chiave di CasaHunter (es. 3-pass scoring vs full-AI, Telegram vs dashboard web, adaptive feedback loop) | S | [INSIEME] — Mattia conferma le decisioni giuste | ⬜ |
| T-30.1.2 | Scrivere copy EN per Decision Log (formato: decisione + perché + cosa ho imparato) | M | [INSIEME] — dopo T-30.1.1 | ⬜ |
| T-30.1.3 | Scrivere copy IT (nativo) | M | [INSIEME] — dopo T-30.1.2 | ⬜ |
| T-30.1.4 | Aggiungere chiavi i18n e implementare sezione "Key Decisions" nella pagina CasaHunter | S | [SOLO] | ⬜ |
| T-30.1.5 | Design: box/card con accent border, titolo decisione bold, corpo testo, icona o label "DECISION" | S | [SOLO] | ⬜ |

### US 30.2 — "What it taught me as a PM" per ogni progetto lab

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-30.2.1 | Scrivere "What it taught me" EN/IT per CasaHunter (se non già presente come sezione dedicata) | S | [INSIEME] | ⬜ |
| T-30.2.2 | Scrivere "What it taught me" EN/IT per MoneyMind (quando pubblicato) | S | [INSIEME] — dipende da EPIC 35 | ⬜ |
| T-30.2.3 | Scrivere "What it taught me" EN/IT per OpenClaw (quando pubblicato) | S | [INSIEME] — dipende da EPIC 35 | ⬜ |

**Acceptance criteria:**
- CasaHunter ha una sezione "Key Decisions" con 3-5 decisioni, ognuna con: decisione, perché, lezione
- Il focus è product thinking, non implementazione tecnica
- Un HM che legge solo il Decision Log capisce l'approccio di Mattia

---

## EPIC 31 — Post Definitorio

> **Impatto: 🔴 Alto** | **Effort: XL** | **Benchmark: Norton ("How to Hire a PM"), Shreyas (LNO Framework), Biddle (DHM Model)**
>
> Il post "greatest hit" — quello che la gente citerà come "il post di Mattia su X". Deve essere lungo, ambizioso, pieno di esempi reali. Due candidati.

### US 31.1 — Opzione A: "The PM Who Codes: What Changes"

> Espansione di "Why I Prototype in Code" da 4 min a 10-12 min. Aggiunge esempi da ogni fase della carriera. Diventa il pezzo di posizionamento definitivo.

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-31.1.1 | Decidere tra Opzione A e Opzione B (o entrambe in sequenza) | S | [INSIEME] — decisione di Mattia | ⬜ |
| T-31.1.2 | Outline dettagliato con struttura e storie da includere (Selfrules → FLOWING → ActiveProspect → QubicaAMF → CasaHunter) | M | [INSIEME] | ⬜ |
| T-31.1.3 | Prima bozza EN (2000-3000 parole) | L | [INSIEME] — usa selfrules-voice skill | ⬜ |
| T-31.1.4 | Review e revisione con Mattia | M | [INSIEME] | ⬜ |
| T-31.1.5 | Versione IT (scritta nativa, non tradotta) | L | [INSIEME] | ⬜ |
| T-31.1.6 | Implementare come MDX, creare OG image, pubblicare | M | [SOLO] | ⬜ |

### US 31.2 — Opzione B: "The Problem Is Never The One From The First Meeting"

> La signature phrase diventa un post intero. 3-4 storie reali dove il problema presentato era sbagliato e come hai trovato quello vero.

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-31.2.1 | Raccogliere 3-4 storie reali (Payments, Cashless, LeadsBridge, CasaHunter?) dove il vero problema era diverso | M | [INSIEME] | ⬜ |
| T-31.2.2 | Outline con struttura narrativa | S | [INSIEME] | ⬜ |
| T-31.2.3 | Prima bozza EN (2000-3000 parole) | L | [INSIEME] | ⬜ |
| T-31.2.4 | Review e revisione con Mattia | M | [INSIEME] | ⬜ |
| T-31.2.5 | Versione IT (scritta nativa, non tradotta) | L | [INSIEME] | ⬜ |
| T-31.2.6 | Implementare come MDX, creare OG image, pubblicare | M | [SOLO] | ⬜ |

**Acceptance criteria:**
- Post di 10+ minuti di lettura
- Almeno 3 storie reali dalla carriera di Mattia
- Il tono è Norton: "questo è come ha funzionato per me", non "ecco il framework definitivo"
- Il post è linkato dalla homepage, dalla pagina About, e dai case study rilevanti
- SEO: keyword target definita, meta description ottimizzata

---

## EPIC 32 — Notes Featured + Hierarchy

> **Impatto: 🟠 Medio** | **Effort: S** | **Benchmark: Norton (popular posts in evidenza), Cutler (numbered series)**
>
> Con 8+ post, la lista cronologica non basta. Il visitatore deve vedere i "greatest hits" prima.

### US 32.1 — Featured posts nella pagina Notes

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-32.1.1 | Definire quali post sono "featured" (candidati: "Why I Prototype in Code", il post definitorio quando esiste) | S | [INSIEME] | ⬜ |
| T-32.1.2 | Aggiungere campo `featured: true` nei frontmatter MDX | S | [SOLO] | ⬜ |
| T-32.1.3 | Implementare sezione "Start here" o "Featured" sopra la lista cronologica in `/notes/page.tsx` | S | [SOLO] | ⬜ |
| T-32.1.4 | Design: card più grande per featured, badge "START HERE" o "RECOMMENDED" | S | [SOLO] | ⬜ |

**Acceptance criteria:**
- 1-3 post featured sono visivamente separati dalla lista cronologica
- Il design è coerente con il sistema esistente (no nuovi pattern)

---

## EPIC 33 — Case Study Patterns Prominence

> **Impatto: 🟠 Medio** | **Effort: M** | **Benchmark: Biddle (ogni framework è prominente), Torres (OST è ovunque)**
>
> I pattern alla fine dei case study sono già lì ma non abbastanza visibili. Devono diventare il tuo framework implicito.

### US 33.1 — Redesign sezione "Patterns" nei case study

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-33.1.1 | Design: box/card con accent border per la sezione Patterns (distinto dal body text) | S | [SOLO] | ⬜ |
| T-33.1.2 | Implementare nuovo styling per Patterns in Payments Rescue | S | [SOLO] | ⬜ |
| T-33.1.3 | Implementare in Cashless System | S | [SOLO] | ⬜ |
| T-33.1.4 | Implementare in LeadsBridge Redesign | S | [SOLO] | ⬜ |

### US 33.2 — Pattern summary nella pagina /work listing

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-33.2.1 | Valutare se aggiungere un "Recurring patterns" summary nella listing (i pattern che emergono da tutti e 3 i casi) | S | [INSIEME] — rischio di essere ridondante con EPIC 28 | ⬜ |

**Acceptance criteria:**
- Le sezioni Patterns sono visivamente distinte (box accent, non plain text)
- Un lettore che scorre veloce nota i pattern anche senza leggere tutto il case study

---

## EPIC 34 — Blog Expansion: Bridge Posts

> **Impatto: 🟠 Medio** | **Effort: XL** | **Benchmark: Biddle (Netflix → principio), Norton (Google → lezione), Cutler (team reale → insight)**
>
> Post che collegano case study e principi. Il formato "practitioner perspective" — parto da un'esperienza reale, ne estraggo una lezione trasferibile.

### US 34.1 — "How I Killed a Product (And Why It Was the Right Call)"

> Dal Cashless case study. Formato raro e potente — quasi nessun PM scrive di cosa ha fermato.

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-34.1.1 | Outline con Mattia: la storia del prodotto ucciso, il contesto, la decisione, il perché | M | [INSIEME] | ⬜ |
| T-34.1.2 | Prima bozza EN (1500-2000 parole) | L | [INSIEME] | ⬜ |
| T-34.1.3 | Versione IT (nativa) | L | [INSIEME] | ⬜ |
| T-34.1.4 | Implementare MDX, OG image, cross-link a Cashless case study | M | [SOLO] | ⬜ |

### US 34.2 — "What 880 Apartment Listings Taught Me About AI Product Decisions"

> CasaHunter come case study di product thinking, non di codice.

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-34.2.1 | Outline: quando l'AI è la soluzione giusta e quando è overkill, lezioni dal 3-pass system | M | [INSIEME] | ⬜ |
| T-34.2.2 | Prima bozza EN (1500-2000 parole) | L | [INSIEME] | ⬜ |
| T-34.2.3 | Versione IT (nativa) | L | [INSIEME] | ⬜ |
| T-34.2.4 | Implementare MDX, OG image, cross-link a CasaHunter lab | M | [SOLO] | ⬜ |

### US 34.3 — "Running Product Across 5 Countries When You're the Only PM"

> Espansione di "Remote PM Across Countries". Targeted per HM EU che cercano PM per team distribuiti.

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-34.3.1 | Outline con Mattia: storie concrete, timezone challenges, decision-making distribuito | M | [INSIEME] | ⬜ |
| T-34.3.2 | Prima bozza EN (1500-2000 parole) | L | [INSIEME] | ⬜ |
| T-34.3.3 | Versione IT (nativa) | L | [INSIEME] | ⬜ |
| T-34.3.4 | Implementare MDX, OG image | M | [SOLO] | ⬜ |

**Acceptance criteria per ogni post:**
- 7+ minuti di lettura
- Almeno 2 storie reali dalla carriera
- Tono Norton: "questo è come ha funzionato per me"
- Cross-link al case study/lab correlato
- SEO: keyword target definita

---

## EPIC 35 — Lab Expansion: OpenClaw + MoneyMind

> **Impatto: 🟠 Medio** | **Effort: L** | **Benchmark: Quasi nessun PM ha un lab — questo è un differenziatore unico**
>
> Tre progetti = tre angoli dello stesso PM builder: AI product (CasaHunter), personal finance (MoneyMind), infra/tooling (OpenClaw).

### US 35.1 — OpenClaw come terzo progetto lab

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-35.1.1 | Definire con Mattia: one-liner, status, stack, 3-5 decisioni di prodotto | M | [INSIEME] | ⬜ |
| T-35.1.2 | Scrivere copy EN completo (description + what it taught me + decision log) | M | [INSIEME] | ⬜ |
| T-35.1.3 | Scrivere copy IT (nativo) | M | [INSIEME] | ⬜ |
| T-35.1.4 | Aggiungere chiavi i18n, implementare ProjectCard, aggiornare lab page | S | [SOLO] | ⬜ |
| T-35.1.5 | Link a GitHub repo (se pubblico) | S | [SOLO] | ⬜ |

### US 35.2 — MoneyMind completamento

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-35.2.1 | Quando pronto: stessa struttura di OpenClaw | M | [INSIEME] — blocked fino a quando MoneyMind è abbastanza maturo | ⬜ |

**Acceptance criteria:**
- Lab page mostra 3 progetti in griglia
- Ogni progetto ha: nome, one-liner, stack, status badge, "what it taught me", decision log
- Il focus è product thinking per progetto, non showcase tecnico

---

## EPIC 36 — Approach Page Decision

> **Impatto: 🟡 Basso** | **Effort: S** | **Benchmark: Nessun PM influente ha una pagina /approach separata — l'approccio emerge dai case study**
>
> Decidere il destino di /approach: eliminare, nascondere, o convertire.

### US 36.1 — Decidere e implementare

| # | Task | Effort | Dipendenza | Stato |
|---|------|--------|------------|-------|
| T-36.1.1 | Decisione: (A) Eliminare /approach e redirect a /work, (B) noindex + togliere dal nav, (C) convertire in blog post | S | [INSIEME] | ⬜ |
| T-36.1.2 | Implementare la decisione | S | [SOLO] | ⬜ |

**Raccomandazione dal benchmark:** Opzione A o B. Il tuo approccio emerge dai case study, dal lab, e dal meta-narrative della pagina /work. Una pagina separata rischia il framing "funnel coach" (anti-pattern Melissa Perri).

---

## Backlog completo ordinato per impatto

| Priorità | Epic | Titolo | Impatto | Effort | Dep. Mattia |
|----------|------|--------|---------|--------|-------------|
| **P0** | EPIC 27 | Reframe da candidato a esperto | 🔴 | L | [INSIEME] |
| **P1** | EPIC 28 | Work page meta-narrative | 🔴 | M | [INSIEME] |
| **P1** | EPIC 29 | Cross-linking ecosystem | 🔴 | M | [SOLO] ✅ |
| **P1** | EPIC 30 | Lab decision logs | 🔴 | M | [INSIEME] |
| **P2** | EPIC 31 | Post definitorio | 🔴 | XL | [INSIEME] |
| **P2** | EPIC 32 | Notes featured + hierarchy | 🟠 | S | [INSIEME] lieve |
| **P2** | EPIC 33 | Case study patterns prominence | 🟠 | M | [SOLO] ✅ |
| **P3** | EPIC 34 | Blog expansion — bridge posts | 🟠 | XL | [INSIEME] |
| **P3** | EPIC 35 | Lab expansion — OpenClaw | 🟠 | L | [INSIEME] |
| **P4** | EPIC 36 | Approach page decision | 🟡 | S | [INSIEME] |

### EPICs pre-esistenti ancora aperti (per riferimento)

| Priorità | Epic | Titolo | Note |
|----------|------|--------|------|
| **P0** | EPIC 27 | Reframe — da candidato a esperto | UNICO launch blocker |
| **P3** | EPIC 4 | Blog review | Blocked: Mattia vuole AI image gen prima |
| **P3** | EPIC 20 | LinkedIn posts | Dipende da EPIC 27 |
| **P4** | EPIC 22 | Site polish (scope ridotto) | CV + domain già fatto |
| **P4** | EPIC 1, 5, 7 | Visual & wow | Post-launch |
| **P4** | EPIC 8 | Lighthouse + axe-core | Post-launch |
| **P5** | EPIC 10, 11, 25, 26 | Post-launch vari | Post-launch |

### Sequenza raccomandata di esecuzione

```
EPIC 27 (reframe) ← UNICO BLOCKER PER LAUNCH
    ↓
EPIC 29 (cross-linking) ← eseguibile [SOLO], quick win
EPIC 33 (patterns prominence) ← eseguibile [SOLO], quick win
    ↓
EPIC 28 (meta-narrative) ← richiede 1 sessione con Mattia
EPIC 30 (decision logs) ← richiede 1 sessione con Mattia
EPIC 32 (notes featured) ← 30 min decisione + 1h implementazione
    ↓
EPIC 31 (post definitorio) ← progetto lungo, da far crescere
EPIC 36 (approach page) ← 5 min decisione
    ↓
EPIC 34 (bridge posts) ← quando c'è qualcosa da dire, non per cadenza
EPIC 35 (OpenClaw) ← quando il progetto è maturo
```

---

## Note operative

### Cosa NON è in questo backlog (e perché)

Basato sull'analisi benchmark, questi elementi sono stati **esplicitamente esclusi**:

1. **Newsletter** — Non sei un content creator, sei un IC. Volume forzato = qualità bassa.
2. **Framework con nome proprio** — Deve emergere da 5+ anni di pratica, non inventato. Se emerge dai case study, lo riconoscerai.
3. **Podcast** — Alto effort, basso ROI per convincere HM. I tuoi blog post scritti hanno più impatto per pagina.
4. **Corsi / academy** — Anti-pattern "funnel coach" (Perri, Torres). Non è il tuo modello.
5. **Guest post** — Scrivi per il tuo sito, non per aggregatori. LinkedIn è il canale di distribuzione.
6. **Quarto case study (nuovo)** — I 3 attuali sono sufficienti. Meglio renderli più densi che aggiungerne uno debole.
7. **Nuove pagine del sito** — La struttura Home/About/Work/Lab/Notes/Contact è completa.
