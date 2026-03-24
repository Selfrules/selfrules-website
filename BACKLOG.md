# BACKLOG — selfrules.org

> **Domanda guida:** "Sono un hiring manager. Ho ricevuto la candidatura di Mattia. Apro il sito. Mi aiuta a decidere di assumerlo? È un elemento differenziale?"
>
> Ogni task viene valutato contro questa domanda. Se non avvicina all'obiettivo, non si fa.
>
> **Ordinamento:** Impatto × Valore per l'obiettivo (alto → basso). In cima quello che muove di più l'ago.

---

## Come usare questo backlog

- **Claude legge questo file** all'inizio di ogni sessione di lavoro
- Ogni task ha un tag di esecuzione: `[CLAUDE-AUTONOMO]` o `[MATTIA-REQUIRED]` o `[INSIEME]`
- `[CLAUDE-AUTONOMO]` = Claude può eseguire senza input, Mattia revisiona il risultato
- `[MATTIA-REQUIRED]` = Serve input, contenuto, o decisione di Mattia prima di procedere
- `[INSIEME]` = Sessione collaborativa, Mattia e Claude lavorano in real-time
- Stato: `[ ]` da fare, `[~]` in corso, `[x]` completato, `[-]` cancellato/posticipato
- Quando un task è completato, aggiungere data di completamento: `[x] (2026-03-25)`

---

## EPIC 1: Case Study — Il proof point che chiude il deal
**Priorità: CRITICA** | **Impatto: 10/10** | **Valore hiring manager: Massimo**

> Un hiring manager con 5 minuti decide sulla base dei case study. 2 case study in 10+ anni è un red flag. 3-4 case study ben strutturati con visual sono il singolo elemento che più avvicina all'assunzione.

### US 1.1: Aggiungere il case study LeadsBridge/ActiveProspect
> Come hiring manager di un'azienda B2B SaaS, voglio vedere che Mattia ha esperienza in SaaS puro — non solo nel vertical bowling/entertainment.

- [x] **T-1.1.1** (2026-03-24) `[MATTIA-REQUIRED]` Raccogliere contenuto per il case study ActiveProspect/LeadsBridge ✅
- [x] **T-1.1.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Scrivere il case study completo EN + IT — draft approvato da Mattia, vedi DRAFT-CASE-STUDY-LEADSBRIDGE.md ✅
- [x] **T-1.1.3** (2026-03-24) `[CLAUDE-AUTONOMO]` Pagina `/work/leadsbridge-redesign` implementata ✅
- [x] **T-1.1.4** (2026-03-24) `[CLAUDE-AUTONOMO]` Card aggiunta in `/work` listing (3° case study) ✅
- [x] **T-1.1.5** (2026-03-24) `[CLAUDE-AUTONOMO]` Translation keys en.json + it.json aggiornate ✅
- [x] **T-1.1.6** (2026-03-24) `[CLAUDE-AUTONOMO]` Metadata SEO + JSON-LD BreadcrumbList + Article ✅
- [x] **T-1.1.7** (2026-03-24) `[CLAUDE-AUTONOMO]` Build OK, sitemap aggiornata, hreflang EN/IT ✅

### US 1.2: Rendere i case study scannable e visivamente ricchi
> Come hiring manager con poco tempo, voglio poter fare skim di un case study in 60 secondi e capire l'impatto — senza leggere wall-of-text.

- [ ] **T-1.2.1** `[CLAUDE-AUTONOMO]` Creare componente `PullQuote` per evidenziare insight chiave nei case study (box con bordo accent, font più grande)
- [ ] **T-1.2.2** `[CLAUDE-AUTONOMO]` Creare componente `MetricHighlight` per metriche inline nei case study (numero grande accent + contesto)
- [ ] **T-1.2.3** `[CLAUDE-AUTONOMO]` Creare componente `CaseStudySummary` — box in cima al case study con: ruolo, periodo, industry, 3 metriche chiave, 1-line summary. L'hiring manager legge solo questo e capisce.
- [ ] **T-1.2.4** `[CLAUDE-AUTONOMO]` Applicare i nuovi componenti al case study Payments Rescue
- [ ] **T-1.2.5** `[CLAUDE-AUTONOMO]` Applicare i nuovi componenti al case study Cashless System
- [ ] **T-1.2.6** `[INSIEME]` Aggiungere 1 visual per case study — diagramma di architettura, flow, o before/after. Mattia indica il contenuto concettuale, Claude genera il visual in SVG/code.

### US 1.3: Aggiungere contesto di trasferibilità ai case study
> Come hiring manager, dopo aver letto il case study voglio capire: "questo approccio funzionerebbe anche nella mia azienda?"

- [ ] **T-1.3.1** `[CLAUDE-AUTONOMO]` Aggiungere sezione "Pattern" alla fine di ogni case study: 3-4 bullet che estraggono il principio generalizzabile (es. "Crisis → freeze growth → triage → fix → resume" per Payments Rescue)
- [ ] **T-1.3.2** `[CLAUDE-AUTONOMO]` Scrivere copy EN + IT per le sezioni Pattern di Payments Rescue e Cashless System

### US 1.4: Risolvere il Cashless System — metriche mancanti
> Come hiring manager, "full metrics available upon production launch" mi fa pensare che il progetto non è finito.

- [x] **T-1.4.1** (2026-03-24) `[MATTIA-REQUIRED]` Framing Cashless deciso: mix strategic decision + 0-to-1 + partnership/ecosystem. Dati pilot: 5 clienti, 150+ ricariche in 14gg, 64% volume da web in 1 centro. Partnership AC: v2 in sviluppo, API ready, 173 centri overlap (53%), beta Q1. ✅
- [ ] **T-1.4.2** `[CLAUDE-AUTONOMO]` Riscrivere il case study con i nuovi dati pilot + evoluzione partnership AC — eliminare "coming soon", aggiungere metriche reali e sezione partnership/ecosystem

---

## EPIC 2: Lab & Side Projects — La prova che costruisce
**Priorità: ALTA** | **Impatto: 8/10** | **Valore hiring manager: Alto**

> CasaHunter è il progetto che trasforma "I prototype in code" da tagline a fatto. Un hiring manager tecnico che vede un side project con AI scoring, 8 scrapers, React dashboard, e Telegram bot capisce che questo PM non è solo slides.

### US 2.1: Espandere CasaHunter da card a mini-case study
> Come hiring manager, voglio vedere come Mattia applica il product thinking a un problema personale — e come usa AI in modo intelligente.

- [ ] **T-2.1.1** `[CLAUDE-AUTONOMO]` Creare la pagina `/lab/casahunter` con struttura: problema personale → decisione di prodotto (build vs buy) → architettura 3-pass scoring (deterministico → AI → feedback loop) → stack + decisioni tecniche → risultati (listings analizzate, tempo risparmiato, accuracy) → decisione di trasformarlo in SaaS
- [ ] **T-2.1.2** `[CLAUDE-AUTONOMO]` Scrivere copy EN + IT, applicando selfrules-voice — tono "ecco come ragiono anche quando nessuno mi paga"
- [ ] **T-2.1.3** `[MATTIA-REQUIRED]` Fornire screenshot della dashboard React e/o del bot Telegram — ⏳ Mattia ci torna quando pronti
- [ ] **T-2.1.4** `[MATTIA-REQUIRED]` Decidere se linkare il repo GitHub — ⏳ in attesa
- [ ] **T-2.1.5** `[CLAUDE-AUTONOMO]` Creare diagramma architetturale SVG del three-pass scoring pipeline
- [ ] **T-2.1.6** `[CLAUDE-AUTONOMO]` Aggiornare la card nella pagina Lab con link alla pagina dettaglio

### US 2.2: Pulire la pagina Lab
> Come hiring manager, 2 progetti "in development" senza niente da mostrare comunicano "inizia le cose ma non le finisce".

- [ ] **T-2.2.1** `[CLAUDE-AUTONOMO]` Rimuovere MoneyMind e OpenClaw dalla pagina Lab (ripristinare quando hanno deliverable tangibili)
- [ ] **T-2.2.2** `[CLAUDE-AUTONOMO]` Riscrivere l'intro della pagina Lab — meno generica, più specifica su "i side project sono decisioni di prodotto, non esercizi tecnici"
- [ ] **T-2.2.3** `[CLAUDE-AUTONOMO]` Aggiornare translation keys en.json e it.json

### US 2.3: Collegare Lab e AI capability senza posizionarsi come "AI PM"
> Come candidato, voglio che il mio uso di AI emerga come competenza aggiuntiva — una ninja belt, non il focus primario.

- [ ] **T-2.3.1** `[CLAUDE-AUTONOMO]` Nel case study CasaHunter, evidenziare il framework decisionale "quando usare AI e quando no" (80% deterministico, 20% AI = budget optimization). Questo è product thinking applicato all'AI.
- [ ] **T-2.3.2** `[CLAUDE-AUTONOMO]` Aggiungere un tag/badge "AI-assisted" dove appropriato (CasaHunter, e eventualmente nel sito stesso come meta-reference "questo sito è stato costruito con Claude Code")

---

## EPIC 3: Homepage — I primi 30 secondi decidono tutto
**Priorità: ALTA** | **Impatto: 9/10** | **Valore hiring manager: Critico**

> Se l'hiring manager chiude il sito nei primi 30 secondi, tutto il resto è irrilevante. L'homepage deve agganciare, comunicare il valore, e portare ai case study.

### US 3.1: Riscrivere l'hero per massimo impatto in 5 secondi
> Come hiring manager, in 5 secondi devo capire: chi è, cosa fa, perché è diverso.

- [x] **T-3.1.1** (2026-03-24) `[INSIEME]` Hero subtitle deciso: "Payment systems from crisis to 99% uptime. Integration funnels redesigned, -35% setup time. B2B SaaS products, built and shipped." Headline resta invariata. ✅
- [x] **T-3.1.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Hero subtitle implementato EN + IT ✅
- [x] **T-3.1.3** (2026-03-24) `[CLAUDE-AUTONOMO]` Build OK, rendering verificato ✅

### US 3.2: Aggiungere contesto alle metriche
> Come hiring manager, numeri senza contesto sono noise. (Il blog post di Mattia dice esattamente questo — il sito non dovrebbe contraddirsi.)

- [x] **T-3.2.1** (2026-03-24) `[CLAUDE-AUTONOMO]` Contesto aggiunto a tutte le 6 metriche ✅
- [x] **T-3.2.2** (2026-03-24) `[CLAUDE-AUTONOMO]` MetricCard già supportava prop context ✅
- [x] **T-3.2.3** (2026-03-24) `[CLAUDE-AUTONOMO]` en.json + it.json aggiornati con contesto metriche ✅

### US 3.3: Rinominare e potenziare "How I Work"
> Come hiring manager, "How I Work" è il titolo più generico possibile — ogni portfolio PM lo ha.

- [x] **T-3.3.1** (2026-03-24) `[INSIEME]` Titolo sezione deciso: "Three languages, one product" — richiama il trilinguismo design/code/business, è specifico e differenziante ✅
- [x] **T-3.3.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Titolo "Three languages, one product" implementato EN + IT ✅

### US 3.4: Riscrivere "What I'm Doing Now"
> Come hiring manager, "Payments and platform at international scale [ACTIVE]" non mi dice niente di nuovo. Questa sezione dovrebbe mostrare momentum.

- [x] **T-3.4.1** (2026-03-24) `[CLAUDE-AUTONOMO]` Sezione Now riscritta: trajectory + CasaHunter + open to opportunities ✅
- [x] **T-3.4.2** (2026-03-24) `[CLAUDE-AUTONOMO]` en.json + it.json aggiornati ✅

### US 3.5: CTA specifici, non generici
> Come hiring manager, "Get in touch" non crea curiosità. "Read how I fixed a payment crisis" sì.

- [x] **T-3.5.1** (2026-03-24) `[CLAUDE-AUTONOMO]` CTA specifici: "Let's talk about your product" + "Read the case studies" ✅
- [x] **T-3.5.2** (2026-03-24) `[CLAUDE-AUTONOMO]` en.json + it.json aggiornati ✅

---

## EPIC 4: Blog/Notes — Costruire autorità
**Priorità: ALTA** | **Impatto: 7/10** | **Valore hiring manager: Alto (cumulativo)**

> 3 post tutti dello stesso mese comunicano "ha scritto tutto in una settimana". 6-8 post distribuiti nel tempo, su temi core del positioning, costruiscono l'immagine di un pensatore attivo.

### US 4.1: Scrivere 3-5 nuovi blog post su temi strategici
> Come hiring manager, voglio vedere che Mattia ha opinioni forti e pensiero strutturato sui temi rilevanti per il mio team.

- [x] **T-4.1.1** (2026-03-24) `[INSIEME]` Lista 5 post approvata: (1) When AI Makes Sense in Product, (2) Managing Payments at Scale, (3) Remote PM Across 5 Countries, (4) Build vs Buy Decision Framework, (5) What I Learned Running a Startup for 7 Years ✅
- [ ] **T-4.1.2** `[CLAUDE-AUTONOMO]` Scrivere post #1 EN + IT, applicando selfrules-voice, struttura: problema concreto → esperienza → lezione → domanda aperta
- [ ] **T-4.1.3** `[CLAUDE-AUTONOMO]` Scrivere post #2 EN + IT
- [ ] **T-4.1.4** `[CLAUDE-AUTONOMO]` Scrivere post #3 EN + IT
- [ ] **T-4.1.5** `[CLAUDE-AUTONOMO]` Scrivere post #4 EN + IT
- [ ] **T-4.1.6** `[CLAUDE-AUTONOMO]` Scrivere post #5 EN + IT
- [ ] **T-4.1.7** `[CLAUDE-AUTONOMO]` Implementare tutte le pagine con routing, metadata, JSON-LD, hreflang
- [ ] **T-4.1.8** `[MATTIA-REQUIRED]` Revisione e approvazione di ogni post prima di merge

### US 4.2: Migliorare la presentazione dei blog post
> Come lettore, voglio sapere quanto tempo mi serve per leggere e di cosa parla il post prima di aprirlo.

- [ ] **T-4.2.1** `[CLAUDE-AUTONOMO]` Aggiungere "reading time" calcolato (parole / 200) visibile nella card e nella pagina del post
- [ ] **T-4.2.2** `[CLAUDE-AUTONOMO]` Aggiungere tag/categoria visibile (Product Craft, Technical PM, Payments, AI, Startup)
- [ ] **T-4.2.3** `[CLAUDE-AUTONOMO]` Distribuire le date dei post in modo naturale — non tutti nello stesso mese
- [ ] **T-4.2.4** `[CLAUDE-AUTONOMO]` Aggiungere year grouping nella pagina notes listing (gap P0 dal Figma v25)

### US 4.3: Cross-posting e distribuzione
> Come candidato, i post che vivono solo sul sito non generano traffico né social proof.

- [ ] **T-4.3.1** `[MATTIA-REQUIRED]` Cross-postare ogni post su LinkedIn come articolo o post con link al sito
- [ ] **T-4.3.2** `[CLAUDE-AUTONOMO]` Per ogni blog post, generare una versione LinkedIn-optimized (hook + 3 key points + CTA al sito) — Mattia copia e posta
- [ ] **T-4.3.3** `[INSIEME]` Definire cadenza editoriale: 1 post ogni 2 settimane è sufficiente per mantenere il momentum

---

## EPIC 5: Il "Momento Wow" — L'elemento che nessun altro ha
**Priorità: MEDIA-ALTA** | **Impatto: 8/10** | **Valore hiring manager: Differenziale**

> Nel 2026, "professionale" è la baseline. Serve un elemento che faccia fermare l'hiring manager e pensare "non ho mai visto un portfolio così". Questo è il differenziatore.

### US 5.1: Interactive Case Study — Payments Rescue scroll-driven
> Come hiring manager, voglio "vivere" il case study, non leggerlo. Il Payments Rescue si presta perfettamente: crisi → triage → risoluzione → risultati.

- [ ] **T-5.1.1** `[INSIEME]` Progettare lo storyboard dello scroll-driven case study. Sezioni: (1) Il problema si manifesta (grafico che scende), (2) Il triage (44 → 12 → 4, visuale), (3) La risoluzione, (4) I risultati (grafico che risale). Claude propone, Mattia valida.
- [ ] **T-5.1.2** `[CLAUDE-AUTONOMO]` Implementare le animazioni scroll-driven con IntersectionObserver nativo (no Framer Motion, coerente con lo stack)
- [ ] **T-5.1.3** `[CLAUDE-AUTONOMO]` Creare i data visualization SVG/Canvas per le transizioni (counter animati, grafici che si costruiscono)
- [ ] **T-5.1.4** `[CLAUDE-AUTONOMO]` Implementare fallback statico per `prefers-reduced-motion` e per mobile
- [ ] **T-5.1.5** `[CLAUDE-AUTONOMO]` Testing cross-browser (Chrome, Firefox, Safari) e responsive
- [ ] **T-5.1.6** `[MATTIA-REQUIRED]` Review finale: il case study interattivo comunica la storia correttamente?

### US 5.2: "Ask Mattia" AI-powered (fase 2)
> Come hiring manager curioso, voglio poter fare domande e ricevere risposte basate sull'esperienza reale di Mattia — e restare impressionato dalla capability tecnica.

- [ ] **T-5.2.1** `[INSIEME]` Decidere se implementare e come: chatbot con knowledge base del sito, powered by Claude API. Valutare costi, complessità, e se il ROI giustifica l'effort.
- [ ] **T-5.2.2** `[CLAUDE-AUTONOMO]` Se approvato: implementare il chatbot con Claude API, knowledge base dai case study + blog post + about, UI coerente con il design system
- [ ] **T-5.2.3** `[CLAUDE-AUTONOMO]` Limitare il chatbot a domande professionali — non diventa un general-purpose assistant
- [ ] **T-5.2.4** `[CLAUDE-AUTONOMO]` Aggiungere fallback "per approfondire, leggi [case study]" con link diretti

---

## EPIC 6: About Page — La storia completa per chi vuole approfondire
**Priorità: MEDIA** | **Impatto: 6/10** | **Valore hiring manager: Medio**

> L'About è per l'hiring manager che ha già deciso di approfondire. Non è la prima pagina che vede, ma è quella che solidifica l'impressione.

### US 6.1: Differenziare l'About dalla Homepage
> Come hiring manager che ha letto la homepage, non voglio rileggere le stesse cose. L'About deve andare in profondità.

- [ ] **T-6.1.1** `[CLAUDE-AUTONOMO]` Riscrivere la sezione narrativa dell'About: il percorso raccontato come storia (perché ogni transizione, cosa ha portato alla successiva), non come ripetizione della timeline homepage
- [ ] **T-6.1.2** `[CLAUDE-AUTONOMO]` Correzione critica: Selfrules NON è stata venduta — la P.IVA è stata chiusa nel 2018. Verificare e correggere qualsiasi riferimento nel sito.
- [ ] **T-6.1.3** `[CLAUDE-AUTONOMO]` Potenziare la sezione "Cosa credo" con esempi concreti da case study — non principi astratti ma "questo principio l'ho applicato quando..."
- [ ] **T-6.1.4** `[CLAUDE-AUTONOMO]` Aggiungere dual CTA in fondo: "Read the case studies" + "Get in touch" (gap P1 dal Figma v25)
- [ ] **T-6.1.5** `[CLAUDE-AUTONOMO]` Aggiornare en.json e it.json

---

## EPIC 7: Design & Visual Polish
**Priorità: MEDIA** | **Impatto: 6/10** | **Valore hiring manager: Medio**

> Il design è già sopra la media. Questi task lo portano al livello "memorabile".

### US 7.1: Aggiungere varietà visiva alla homepage
> Come visitatore, dopo la terza sezione text-only il sito diventa prevedibile. Servono break visivi.

- [ ] **T-7.1.1** `[CLAUDE-AUTONOMO]` Variare il layout di almeno 1 sezione homepage — ad esempio la sezione metriche con layout asimmetrico o la sezione "Now" con layout diverso dalle altre
- [ ] **T-7.1.2** `[CLAUDE-AUTONOMO]` Sperimentare con l'uso del colore accent (#E8A838) — attualmente usato solo per numeri e hover, potrebbe guidare l'occhio verso CTA e sezioni chiave

### US 7.2: OG Images dinamici
> Come candidato che condivide il sito su LinkedIn, ogni pagina deve avere un'anteprima visiva specifica — non la stessa immagine generica per tutto.

- [ ] **T-7.2.1** `[CLAUDE-AUTONOMO]` Implementare OG image generation con @vercel/og (o next/og) — titolo pagina + branding su sfondo nero
- [ ] **T-7.2.2** `[CLAUDE-AUTONOMO]` Generare OG images per: homepage, about, work, lab, notes, ogni case study, ogni blog post
- [ ] **T-7.2.3** `[CLAUDE-AUTONOMO]` Testare rendering su LinkedIn e Twitter card validator

### US 7.3: Visual nei blog post
> Come lettore, un post con almeno 1 diagramma è 10x più memorabile di un wall-of-text.

- [ ] **T-7.3.1** `[CLAUDE-AUTONOMO]` Creare almeno 1 visual per blog post esistente — diagramma, flowchart, o tabella. "Why Metrics Lie" con un esempio di dashboard, "Prototype in Code" con un before/after process diagram.
- [ ] **T-7.3.2** `[CLAUDE-AUTONOMO]` Definire lo stile visivo dei diagrammi (coerente con design system: dark bg, accent color, JetBrains Mono per label)

---

## EPIC 8: SEO & Technical Health
**Priorità: MEDIA** | **Impatto: 5/10** | **Valore hiring manager: Indiretto**

> SEO non convince un hiring manager direttamente, ma fa arrivare il traffico giusto. Technical health comunica professionalità a un engineering manager.

### US 8.1: Fix problemi tecnici
> Come visitatore tecnico, dettagli rotti comunicano disattenzione.

- [ ] **T-8.1.1** `[CLAUDE-AUTONOMO]` Rimuovere /dev/components dal build di produzione (o proteggerlo con condizione NODE_ENV)
- [ ] **T-8.1.2** `[CLAUDE-AUTONOMO]` Rimuovere o rendere dinamico il conteggio commit dal footer — "10 commits" comunica "fatto in fretta"
- [ ] **T-8.1.3** `[CLAUDE-AUTONOMO]` Fix contrast ratio text-tertiary (#5A5A5E → almeno #7A7A7E per WCAG AA compliance)
- [ ] **T-8.1.4** `[CLAUDE-AUTONOMO]` Consolidare SectionHeader duplicato (esiste in layout/ e sections/)
- [ ] **T-8.1.5** `[CLAUDE-AUTONOMO]` Rimuovere asset Next.js default non usati (file.svg, globe.svg, next.svg, vercel.svg, window.svg)
- [ ] **T-8.1.6** `[CLAUDE-AUTONOMO]` Chiudere i gap P0 dal GAP-ANALYSIS-v25: Lab page layout + Notes year grouping

### US 8.2: SEO optimization
> Come candidato, voglio che "Mattia De Luca product manager" su Google mostri il mio sito in prima pagina.

- [ ] **T-8.2.1** `[CLAUDE-AUTONOMO]` Riscrivere meta descriptions per CTR: azione + beneficio + curiosità
- [ ] **T-8.2.2** `[CLAUDE-AUTONOMO]` Verificare e ottimizzare H1/H2 hierarchy su tutte le pagine per keyword target
- [ ] **T-8.2.3** `[CLAUDE-AUTONOMO]` Aggiungere alt text descrittivi quando vengono aggiunti visual/immagini
- [ ] **T-8.2.4** `[MATTIA-REQUIRED]` Configurare dominio selfrules.org su Vercel + redirect da selfrules-website.vercel.app + canonical URL

### US 8.3: Performance e testing
> Come engineering manager, un sito con Lighthouse 95+ e test automatici comunica engineering rigor.

- [ ] **T-8.3.1** `[CLAUDE-AUTONOMO]` Eseguire Lighthouse audit e documentare score
- [ ] **T-8.3.2** `[CLAUDE-AUTONOMO]` Aggiungere test e2e basilari con Playwright per le pagine principali (homepage, work, case study, lab, notes)
- [ ] **T-8.3.3** `[CLAUDE-AUTONOMO]` Aggiungere test di accessibilità automatizzati (axe-core)

---

## EPIC 9: Pagina Contatto dedicata
**Priorità: BASSA-MEDIA** | **Impatto: 4/10** | **Valore hiring manager: Conversione**

> La sezione contatto nel footer funziona, ma una pagina dedicata con framing esplicito di disponibilità è migliore per recruiter.

### US 9.1: Creare pagina /contact
> Come recruiter, voglio un posto chiaro dove capire come contattare Mattia e se è disponibile.

- [ ] **T-9.1.1** `[CLAUDE-AUTONOMO]` Creare pagina `/contact` con: headline invitante, email diretta, LinkedIn, CV download, disponibilità esplicita ("open to EU/US remote opportunities"), senza form
- [ ] **T-9.1.2** `[CLAUDE-AUTONOMO]` Copy EN + IT, applicando selfrules-voice
- [ ] **T-9.1.3** `[CLAUDE-AUTONOMO]` Aggiungere alla navigazione
- [ ] **T-9.1.4** `[CLAUDE-AUTONOMO]` Metadata SEO + JSON-LD

---

## EPIC 10: Infrastruttura per evoluzione continua
**Priorità: BASSA** | **Impatto: 3/10** | **Valore hiring manager: Indiretto**

> Questi task non impattano direttamente l'hiring manager, ma abilitano il miglioramento continuo.

### US 10.1: Blog publishing pipeline
> Come Mattia, voglio poter pubblicare un nuovo post senza toccare il codice del sito.

- [ ] **T-10.1.1** `[CLAUDE-AUTONOMO]` Migrare blog post da pagine TSX hardcoded a file .mdx separati con frontmatter (title, date, tags, description, readingTime)
- [ ] **T-10.1.2** `[CLAUDE-AUTONOMO]` Creare utility per generare automaticamente la pagina da un file .mdx
- [ ] **T-10.1.3** `[CLAUDE-AUTONOMO]` Documentare il processo di pubblicazione in CONTRIBUTING.md

### US 10.2: Scheduled tasks per miglioramento continuo
> Come Mattia, voglio che Claude lavori in autonomia su task ricorrenti.

- [ ] **T-10.2.1** `[INSIEME]` Definire i task schedulabili: draft settimanale blog post, aggiornamento sezione Now mensile, audit SEO mensile, check broken links
- [ ] **T-10.2.2** `[CLAUDE-AUTONOMO]` Configurare scheduled tasks in Cowork per i task approvati

### US 10.3: Analytics e feedback loop
> Come candidato, voglio sapere come i visitatori interagiscono con il sito per ottimizzarlo.

- [ ] **T-10.3.1** `[MATTIA-REQUIRED]` Configurare Umami Cloud account e aggiungere tracking script
- [ ] **T-10.3.2** `[CLAUDE-AUTONOMO]` Definire gli eventi da tracciare: CTA clicks, case study views, CV downloads, time on page
- [ ] **T-10.3.3** `[INSIEME]` Dopo 2 settimane di dati: analisi e ottimizzazione basata su dati reali

---

## EPIC 11: Mastery dell'ecosistema Claude (ricorrente)
**Priorità: TRASVERSALE** | **Impatto: Moltiplicatore su tutto il resto**

> Claude (Cowork + Claude Code) evolve continuamente. Restare aggiornati su nuove funzionalità, pattern, e best practice è un moltiplicatore: ogni miglioramento nel workflow si applica a tutti i task del backlog.

### US 11.1: Aggiornamento continuo su funzionalità ecosistema Claude
> Come team Mattia+Claude, vogliamo usare sempre le funzionalità più efficaci per ogni task.

- [ ] **T-11.1.1** `[CLAUDE-AUTONOMO]` (RICORRENTE — ogni sessione) All'inizio di ogni sessione, verificare se ci sono nuove funzionalità rilevanti nell'ecosistema Claude (Cowork, Claude Code, nuovi MCP, nuove skill, scheduled tasks, plugin). Se sì, valutare se applicabili al progetto e salvare in memoria.
- [ ] **T-11.1.2** `[CLAUDE-AUTONOMO]` (RICORRENTE) Ottimizzare l'uso di skill, agent, e tool disponibili per ogni task — scegliere sempre lo strumento migliore per il lavoro (Cowork per task collaborativi e visual, Claude Code per coding puro, scheduled tasks per automazioni, MCP per integrazioni)
- [ ] **T-11.1.3** `[CLAUDE-AUTONOMO]` (RICORRENTE) Quando si scopre un pattern efficace o una best practice, salvarla in Supermemory con tag "claude-workflow" per riutilizzarla nelle sessioni future
- [ ] **T-11.1.4** `[CLAUDE-AUTONOMO]` (RICORRENTE) Monitorare la documentazione di Claude Code e Cowork per nuove release, breaking changes, o funzionalità che possono accelerare il lavoro sul sito

### US 11.2: Decisione Cowork vs Claude Code per ogni task
> Come Mattia, voglio che Claude scelga automaticamente il tool giusto per ogni attività.

**Linea guida operativa (da aggiornare man mano che impariamo):**

| Tipo di task | Tool consigliato | Perché |
|---|---|---|
| Scrittura copy, blog post, revisione testo | **Cowork** | Collaborazione real-time, Mattia vede e commenta |
| Coding: componenti, pagine, fix tecnici | **Claude Code** | Accesso diretto al codebase, test, build |
| Task schedulabili (draft, audit, check) | **Cowork Scheduled Tasks** | Automazione senza intervento |
| Ricerca, analisi, decisioni strategiche | **Cowork** | Conversazione + accesso a MCP (Notion, memoria) |
| Design review, visual feedback | **Cowork + Chrome** | Screenshot, visual comparison |
| Quick fix, hotfix, deploy | **Claude Code** | Velocità, nessun overhead |

---

## RIEPILOGO ESECUZIONE

### Task che Claude può iniziare SUBITO (autonomamente):
1. T-8.1.1 → T-8.1.6: Fix tecnici (30 min totali)
2. T-3.2.1 → T-3.2.3: Contesto metriche homepage (1h)
3. T-3.4.1 → T-3.4.2: Riscrittura sezione Now (30 min)
4. T-3.5.1 → T-3.5.2: CTA specifici (30 min)
5. T-2.2.1 → T-2.2.3: Pulizia Lab page (30 min)
6. T-1.2.1 → T-1.2.3: Nuovi componenti case study (1h)
7. T-6.1.1 → T-6.1.5: Riscrittura About (1h)
8. T-4.2.1 → T-4.2.4: Reading time, tag, year grouping (1h)

### Task che richiedono INPUT di Mattia prima di procedere:
1. **T-1.1.1**: Contenuto case study ActiveProspect/LeadsBridge — bullet point grezzi
2. **T-1.4.1**: Framing Cashless System — metriche pilot o decisione strategica
3. **T-2.1.3**: Screenshot CasaHunter dashboard/bot
4. **T-2.1.4**: Decisione repo GitHub pubblico/privato
5. **T-5.1.1**: Approvazione concept interactive case study
6. **T-8.2.4**: Configurazione dominio selfrules.org

### Task da fare INSIEME (sessione collaborativa):
1. **T-3.1.1**: Hero subtitle — Claude propone varianti, Mattia sceglie
2. **T-3.3.1**: Titolo "How I Work" — Claude propone, Mattia sceglie
3. **T-4.1.1**: Lista blog post — Claude propone, Mattia approva/modifica
4. **T-1.2.6**: Visual case study — Mattia indica contenuto, Claude genera
5. **T-5.2.1**: Decisione "Ask Mattia" chatbot — valutazione ROI insieme
