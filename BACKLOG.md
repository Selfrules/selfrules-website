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

- [x] **T-1.2.1** (2026-03-24) `[CLAUDE-AUTONOMO]` Componente `PullQuote` creato — box con bordo accent, font più grande ✅
- [x] **T-1.2.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Componente `MetricHighlight` creato — numero grande accent + contesto ✅
- [x] **T-1.2.3** (2026-03-24) `[CLAUDE-AUTONOMO]` Componente `CaseStudySummary` creato — ruolo, periodo, industry, 3 metriche, 1-line summary ✅
- [x] **T-1.2.4** (2026-03-24) `[CLAUDE-AUTONOMO]` Componenti applicati a Payments Rescue (CaseStudySummary + 2 PullQuote) ✅
- [x] **T-1.2.5** (2026-03-24) `[CLAUDE-AUTONOMO]` Componenti applicati a Cashless System e LeadsBridge ✅
- [ ] **T-1.2.6** `[INSIEME]` Aggiungere 1 visual per case study — diagramma di architettura, flow, o before/after. Mattia indica il contenuto concettuale, Claude genera il visual in SVG/code.

### US 1.3: Aggiungere contesto di trasferibilità ai case study
> Come hiring manager, dopo aver letto il case study voglio capire: "questo approccio funzionerebbe anche nella mia azienda?"

- [x] **T-1.3.1** (2026-03-24) `[CLAUDE-AUTONOMO]` Sezione "Transferable Patterns" aggiunta a tutti e 3 i case study (4 pattern ciascuno) ✅
- [x] **T-1.3.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Copy EN + IT scritto per Pattern di Payments Rescue, Cashless System e LeadsBridge ✅

### US 1.4: Risolvere il Cashless System — metriche mancanti
> Come hiring manager, "full metrics available upon production launch" mi fa pensare che il progetto non è finito.

- [x] **T-1.4.1** (2026-03-24) `[MATTIA-REQUIRED]` Framing Cashless deciso: mix strategic decision + 0-to-1 + partnership/ecosystem. Dati pilot: 5 clienti, 150+ ricariche in 14gg, 64% volume da web in 1 centro. Partnership AC: v2 in sviluppo, API ready, 173 centri overlap (53%), beta Q1. ✅
- [x] **T-1.4.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Cashless riscritto: dati pilot (5 clienti, 150+ ricariche, 64% web), partnership AC (173 centri, v2 in sviluppo), rimosso "coming soon" ✅

---

## EPIC 2: Lab & Side Projects — La prova che costruisce
**Priorità: ALTA** | **Impatto: 8/10** | **Valore hiring manager: Alto**

> CasaHunter è il progetto che trasforma "I prototype in code" da tagline a fatto. Un hiring manager tecnico che vede un side project con AI scoring, 8 scrapers, React dashboard, e Telegram bot capisce che questo PM non è solo slides.

### US 2.1: Espandere CasaHunter da card a mini-case study
> Come hiring manager, voglio vedere come Mattia applica il product thinking a un problema personale — e come usa AI in modo intelligente.

- [x] **T-2.1.1** (2026-03-24) `[CLAUDE-AUTONOMO]` Pagina `/lab/casahunter` creata con struttura completa (problema → build vs buy → three-pass scoring → risultati → SaaS decision) ✅
- [x] **T-2.1.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Copy EN + IT scritto con selfrules-voice ✅
- [x] **T-2.1.3** (2026-03-25) `[INSIEME]` Screenshot dashboard v1 catturati con Playwright (mappa, lista, statistiche) + link al prototipo SaaS Figma ✅
- [x] **T-2.1.4** (2026-03-26) `[MATTIA-REQUIRED]` Decisione: NON linkare il repo GitHub — Mattia ha deciso di tenerlo privato ✅
- [x] **T-2.1.5** (2026-03-24) `[CLAUDE-AUTONOMO]` Diagramma architetturale SVG del three-pass scoring pipeline creato e integrato nella pagina CasaHunter ✅
- [x] **T-2.1.6** (2026-03-24) `[CLAUDE-AUTONOMO]` Card Lab aggiornata con link a /lab/casahunter ✅
- [x] **T-2.1.7** (2026-03-25) `[INSIEME]` Riscrittura narrativa CasaHunter: arco personale (bisogno → build → funziona → prodotto) con 6 sezioni: origin, v1, turning point, approach, SaaS, learned ✅
- [x] **T-2.1.8** (2026-03-25) `[CLAUDE-AUTONOMO]` Sezione visiva v1 dashboard con 3 screenshot (mappa, lista, statistiche) + caption bilingue ✅
- [x] **T-2.1.9** (2026-03-25) `[CLAUDE-AUTONOMO]` Sezione SaaS prototype con link Figma design + icona Figma + Umami event tracking ✅

### US 2.2: Pulire la pagina Lab
> Come hiring manager, 2 progetti "in development" senza niente da mostrare comunicano "inizia le cose ma non le finisce".

- [x] **T-2.2.1** (2026-03-24) `[CLAUDE-AUTONOMO]` MoneyMind e OpenClaw rimossi dalla Lab page ✅
- [x] **T-2.2.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Intro Lab riscritta: "Side projects are product decisions, not coding exercises" ✅
- [x] **T-2.2.3** (2026-03-24) `[CLAUDE-AUTONOMO]` Translation keys aggiornate ✅

### US 2.3: Collegare Lab e AI capability senza posizionarsi come "AI PM"
> Come candidato, voglio che il mio uso di AI emerga come competenza aggiuntiva — una ninja belt, non il focus primario.

- [x] **T-2.3.1** (2026-03-24) `[CLAUDE-AUTONOMO]` Framework 80/20 AI evidenziato nel case study CasaHunter ✅
- [x] **T-2.3.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Badge AiBadge creato: "AI-assisted" su CasaHunter ✅ (⚠️ "Built with Claude Code" rimosso dal footer su richiesta di Mattia — rompeva il layout)

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
- [x] **T-4.1.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Post #1 "When AI Makes Sense in Product" EN + IT ✅
- [x] **T-4.1.3** (2026-03-24) `[CLAUDE-AUTONOMO]` Post #2 "Managing Payments at Scale" EN + IT ✅
- [x] **T-4.1.4** (2026-03-24) `[CLAUDE-AUTONOMO]` Post #3 "Remote PM Across 5 Countries" EN + IT ✅
- [x] **T-4.1.5** (2026-03-24) `[CLAUDE-AUTONOMO]` Post #4 "Build vs Buy Framework" EN + IT ✅
- [x] **T-4.1.6** (2026-03-24) `[CLAUDE-AUTONOMO]` Post #5 "7 Years Running a Business" EN + IT ✅
- [x] **T-4.1.7** (2026-03-24) `[CLAUDE-AUTONOMO]` Tutte le pagine implementate con routing, MDX, metadata, sitemap ✅
- [ ] **T-4.1.8** `[MATTIA-REQUIRED]` Revisione e approvazione di ogni post prima di merge

### US 4.2: Migliorare la presentazione dei blog post
> Come lettore, voglio sapere quanto tempo mi serve per leggere e di cosa parla il post prima di aprirlo.

- [x] **T-4.2.1** (2026-03-24) `[CLAUDE-AUTONOMO]` Reading time aggiunto a tutti gli 8 post ✅
- [x] **T-4.2.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Tag/categoria visibili: Product Craft, Technical PM, Payments, AI, Decision Making, Startup ✅
- [x] **T-4.2.3** (2026-03-24) `[CLAUDE-AUTONOMO]` Date distribuite: Jan-Jun 2026 ✅
- [x] **T-4.2.4** (2026-03-24) `[CLAUDE-AUTONOMO]` Year grouping nella notes listing ✅

### US 4.3: Cross-posting e distribuzione
> Come candidato, i post che vivono solo sul sito non generano traffico né social proof.

- [ ] **T-4.3.1** `[MATTIA-REQUIRED]` Cross-postare ogni post su LinkedIn come articolo o post con link al sito
- [x] **T-4.3.2** (2026-03-25) `[CLAUDE-AUTONOMO]` 8 versioni LinkedIn-optimized generate — vedi LINKEDIN-POSTS.md ✅
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

- [x] **T-6.1.1** (2026-03-24) `[CLAUDE-AUTONOMO]` About riscritta come narrativa (perché ogni transizione, cosa ha insegnato) ✅
- [x] **T-6.1.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Fix: Selfrules "chiusa" non "venduta" — corretto ✅
- [x] **T-6.1.3** (2026-03-24) `[CLAUDE-AUTONOMO]` Sezione "Cosa credo" con esempi concreti dai case study ✅
- [x] **T-6.1.4** (2026-03-24) `[CLAUDE-AUTONOMO]` Dual CTA: "Read the case studies" + "Get in touch" ✅
- [x] **T-6.1.5** (2026-03-24) `[CLAUDE-AUTONOMO]` en.json + it.json aggiornati ✅

---

## EPIC 7: Design & Visual Polish
**Priorità: MEDIA** | **Impatto: 6/10** | **Valore hiring manager: Medio**

> Il design è già sopra la media. Questi task lo portano al livello "memorabile".

### US 7.1: Aggiungere varietà visiva alla homepage
> Come visitatore, dopo la terza sezione text-only il sito diventa prevedibile. Servono break visivi.

- [x] **T-7.1.1** (2026-03-25) `[CLAUDE-AUTONOMO]` CurrentWork cards con accent top bar gradient + status badge colorato ✅
- [x] **T-7.1.2** (2026-03-25) `[CLAUDE-AUTONOMO]` Accent underline su SectionHeader + accent badge su CurrentWork ✅

### US 7.2: OG Images dinamici
> Come candidato che condivide il sito su LinkedIn, ogni pagina deve avere un'anteprima visiva specifica — non la stessa immagine generica per tutto.

- [x] **T-7.2.1** (2026-03-24) `[CLAUDE-AUTONOMO]` OG image generation implementata con next/og — 17 route dinamiche con design system ✅
- [x] **T-7.2.2** (2026-03-24) `[CLAUDE-AUTONOMO]` OG images per tutte le pagine: homepage, about, work, 3 case study, lab, casahunter, notes, 8 blog post ✅
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

- [x] **T-8.1.1** (2026-03-24) `[CLAUDE-AUTONOMO]` /dev/components già protetto con `if (process.env.NODE_ENV === 'production') notFound()` ✅
- [x] **T-8.1.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Commit count nel footer è dinamico (163 commits, aggiornato automaticamente al build) ✅
- [x] **T-8.1.3** (2026-03-24) `[CLAUDE-AUTONOMO]` text-tertiary già corretto a #7A7A7E in globals.css ✅
- [x] **T-8.1.4** (2026-03-24) `[CLAUDE-AUTONOMO]` Nessun duplicato: SectionHeader esiste solo in sections/ ✅
- [x] **T-8.1.5** (2026-03-24) `[CLAUDE-AUTONOMO]` Asset Next.js default già rimossi, public/ contiene solo og-image.png ✅
- [x] **T-8.1.6** (2026-03-25) `[CLAUDE-AUTONOMO]` Gap P0 chiusi: Notes year grouping già OK, Lab page verificata (solo CasaHunter, come da T-2.2.1) ✅

### US 8.2: SEO optimization
> Come candidato, voglio che "Mattia De Luca product manager" su Google mostri il mio sito in prima pagina.

- [x] **T-8.2.1** (2026-03-24) `[CLAUDE-AUTONOMO]` Meta descriptions riscritte per CTR: azione + beneficio + curiosità, 150-160 chars ✅
- [x] **T-8.2.2** (2026-03-24) `[CLAUDE-AUTONOMO]` H1/H2 hierarchy verificata su tutte le pagine — tutte passano ✅
- [ ] **T-8.2.3** `[CLAUDE-AUTONOMO]` Aggiungere alt text descrittivi quando vengono aggiunti visual/immagini
- [ ] **T-8.2.4** `[MATTIA-REQUIRED]` Configurare dominio selfrules.org su Vercel + redirect da selfrules-website.vercel.app + canonical URL — ⏳ POSTICIPATO: si fa per ultimo quando MVP è pronto

### US 8.3: Performance e testing
> Come engineering manager, un sito con Lighthouse 95+ e test automatici comunica engineering rigor.

- [ ] **T-8.3.1** `[CLAUDE-AUTONOMO]` Eseguire Lighthouse audit e documentare score
- [x] **T-8.3.2** (2026-03-25) `[CLAUDE-AUTONOMO]` 19 test e2e Playwright creati: tutte le pagine, navigazione, locale IT, 404 ✅
- [ ] **T-8.3.3** `[CLAUDE-AUTONOMO]` Aggiungere test di accessibilità automatizzati (axe-core)

---

## EPIC 9: Pagina Contatto dedicata
**Priorità: BASSA-MEDIA** | **Impatto: 4/10** | **Valore hiring manager: Conversione**

> La sezione contatto nel footer funziona, ma una pagina dedicata con framing esplicito di disponibilità è migliore per recruiter.

### US 9.1: Creare pagina /contact
> Come recruiter, voglio un posto chiaro dove capire come contattare Mattia e se è disponibile.

- [x] **T-9.1.1** (2026-03-24) `[CLAUDE-AUTONOMO]` Pagina `/contact` creata: headline, email, LinkedIn, disponibilità, no form ✅
- [x] **T-9.1.2** (2026-03-24) `[CLAUDE-AUTONOMO]` Copy EN + IT con selfrules-voice ✅
- [x] **T-9.1.3** (2026-03-24) `[CLAUDE-AUTONOMO]` Link /contact aggiunto alla navigazione ✅
- [x] **T-9.1.4** (2026-03-24) `[CLAUDE-AUTONOMO]` Metadata SEO + JSON-LD BreadcrumbList ✅

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

- [x] **T-10.3.1** (2026-03-26) `[MATTIA-REQUIRED]` Configurare Umami Cloud account e aggiungere tracking script — account attivo, .env.local + Vercel env var configurati, redeploy lanciato ✅
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

## EPIC 12: Clarity Rewrite — Il sito che capisce chiunque ✅ COMPLETATA
**Priorità: CRITICA** | **Impatto: 10/10** | **Valore hiring manager: Massimo**

> **Fonte:** SITE-AUDIT-CLARITY.md (2026-03-26). Il sito attuale fallisce l'80% degli hiring manager. Il pattern CasaHunter (problema → soluzione → risultato) funziona. Il resto del sito parla a specialisti. Questa epic riscrive il sito perché chiunque — recruiter, VP of Product, TPM da un altro verticale — capisca cosa fa Mattia e perché assumerlo.
>
> **Principio guida:** Se un bambino non può spiegare cosa fa Mattia dopo aver letto la pagina, la pagina va riscritta.

### US 12.1: Homepage — Riscrivere il subtitle per outcome, non dominio (TIER 1)
> Come hiring manager non-specialist, in 5 secondi devo capire cosa fa Mattia per le aziende — non in quale dominio ha lavorato.

- [x] **T-12.1.1** (2026-03-28) `[INSIEME]` Hero subtitle riscritto CasaHunter-style: "Companies call me when a product isn't working..." ✅
- [x] **T-12.1.2** (2026-03-28) `[CLAUDE-AUTONOMO]` Implementato EN + IT in en.json / it.json ✅
- [x] **T-12.1.3** (2026-03-28) `[CLAUDE-AUTONOMO]` Rendering verificato, build OK ✅

### US 12.2: Homepage — Riscrivere "Three Languages, One Product" (TIER 1)
> Come hiring manager, "The problem is never the one from the first meeting" è una frase memorabile ma non mi dice niente. Devo capire il VALORE del ruolo ibrido design/code/PM.

- [x] **T-12.2.1** (2026-03-28) `[INSIEME]` Pillar riscritti: "Fewer handoffs", "I find the 4 problems", "When I need to validate" ✅
- [x] **T-12.2.2** (2026-03-28) `[CLAUDE-AUTONOMO]` Copy EN + IT implementato ✅
- [x] **T-12.2.3** (2026-03-28) `[CLAUDE-AUTONOMO]` Build OK, rendering verificato ✅

### US 12.3: Homepage — Riscrivere le case study preview cards (TIER 1)
> Come hiring manager, le preview devono comunicare risultato e significato — non contesto tecnico che richiede domain knowledge.

- [x] **T-12.3.1** (2026-03-28) `[CLAUDE-AUTONOMO]` Preview card Payments riscritte con outcome language ✅
- [x] **T-12.3.2** (2026-03-28) `[CLAUDE-AUTONOMO]` Preview card LeadsBridge riscritte ✅
- [x] **T-12.3.3** (2026-03-28) `[CLAUDE-AUTONOMO]` Preview card Cashless riscritte ✅
- [x] **T-12.3.4** (2026-03-28) `[CLAUDE-AUTONOMO]` en.json + it.json aggiornati ✅
- [x] **T-12.3.5** (2026-03-28) `[CLAUDE-AUTONOMO]` Build OK ✅

### US 12.4: Homepage — Aggiungere sezione "What I Actually Do" (TIER 1)
> Come hiring manager non-specialist, dopo l'hero devo trovare UNA frase chiara che traduca le competenze di Mattia in valore per la mia azienda.

- [x] **T-12.4.1** (2026-03-29) `[INSIEME]` Sezione "What I Actually Do" presente su live site come "whatIDo" section ✅
- [x] **T-12.4.2** (2026-03-29) `[CLAUDE-AUTONOMO]` Sezione implementata dopo hero ✅
- [x] **T-12.4.3** (2026-03-29) `[CLAUDE-AUTONOMO]` Copy EN + IT presente, styling coerente ✅
- [x] **T-12.4.4** (2026-03-29) `[CLAUDE-AUTONOMO]` Build OK, responsive verificato ✅

### US 12.5: Homepage — Contestualizzare le metriche per non-specialist (TIER 1)
> Come hiring manager, "99%+ uptime" senza "di cosa?" mi fa pensare SRE, non PM. Ogni metrica deve avere il contesto "di cosa" e "per chi".

- [x] **T-12.5.1** (2026-03-29) `[CLAUDE-AUTONOMO]` Metriche homepage contestualizzate con "di cosa" e "per chi" ✅
- [x] **T-12.5.2** (2026-03-29) `[CLAUDE-AUTONOMO]` en.json + it.json aggiornati ✅
- [x] **T-12.5.3** (2026-03-29) `[CLAUDE-AUTONOMO]` Card metriche responsive verificate ✅

---

## EPIC 13: Case Study Reframe — Il pattern CasaHunter ovunque ✅ COMPLETATA
**Priorità: ALTA** | **Impatto: 9/10** | **Valore hiring manager: Alto**

> **Fonte:** SITE-AUDIT-CLARITY.md, TIER 2. CasaHunter funziona perché usa "outcome language": problema (1 frase) → soluzione (1 frase) → risultato (1 frase). I case study Payments e LeadsBridge usano "technical language": 3 paragrafi di contesto aziendale prima del problema. Questa epic applica il pattern CasaHunter a tutti i case study.

### US 13.1: Payments Rescue — Riscrivere l'apertura con il pattern CasaHunter
> Come hiring manager non-payments, devo capire il problema in 1 frase, la soluzione in 1 frase, e il risultato in 1 frase — PRIMA di entrare nel dettaglio tecnico.

- [x] **T-13.1.1** (2026-03-29) `[INSIEME]` Apertura Payments Rescue riscritta con pattern CasaHunter ✅
- [x] **T-13.1.2** (2026-03-29) `[CLAUDE-AUTONOMO]` Jargon tradotto con contesto plain-English ✅
- [x] **T-13.1.3** (2026-03-29) `[CLAUDE-AUTONOMO]` "What I Learned" in alto come callout ✅
- [x] **T-13.1.4** (2026-03-29) `[CLAUDE-AUTONOMO]` en.json + it.json aggiornati ✅
- [x] **T-13.1.5** (2026-03-29) `[CLAUDE-AUTONOMO]` Build OK ✅

### US 13.2: LeadsBridge — Riscrivere l'apertura con il pattern CasaHunter
> Come mobile product director senza esperienza SaaS integration, devo capire perché "rimuovere feature" è controintuitivo e significativo.

- [x] **T-13.2.1** (2026-03-29) `[INSIEME]` Apertura LeadsBridge riscritta con pattern CasaHunter ✅
- [x] **T-13.2.2** (2026-03-29) `[CLAUDE-AUTONOMO]` Jargon tradotto con analogie comprensibili ✅
- [x] **T-13.2.3** (2026-03-29) `[CLAUDE-AUTONOMO]` "What I Learned" in alto come callout ✅
- [x] **T-13.2.4** (2026-03-29) `[CLAUDE-AUTONOMO]` en.json + it.json aggiornati ✅
- [x] **T-13.2.5** (2026-03-29) `[CLAUDE-AUTONOMO]` Build OK ✅

### US 13.3: Cashless System — Riscrivere l'apertura con il pattern CasaHunter
> Come hiring manager, "5 months, zero to live demo" non dice nulla se non so cosa significa "cashless integration" e perché è difficile.

- [x] **T-13.3.1** (2026-03-29) `[INSIEME]` Apertura Cashless riscritta con pattern CasaHunter ✅
- [x] **T-13.3.2** (2026-03-29) `[CLAUDE-AUTONOMO]` Jargon cashless/payments tradotto ✅
- [x] **T-13.3.3** (2026-03-29) `[CLAUDE-AUTONOMO]` "What I Learned" in alto ✅
- [x] **T-13.3.4** (2026-03-29) `[CLAUDE-AUTONOMO]` en.json + it.json aggiornati ✅
- [x] **T-13.3.5** (2026-03-29) `[CLAUDE-AUTONOMO]` Build OK ✅

---

## EPIC 14: Blog Clarity — Preview text e rilevanza
**Priorità: MEDIA** | **Impatto: 5/10** | **Valore hiring manager: Medio**

> **Fonte:** SITE-AUDIT-CLARITY.md, TIER 3. I titoli dei blog post sono "clever" ma non dicono al lettore perché dovrebbe leggere. Aggiungere 1 riga di contesto sotto ogni titolo.

### US 14.1: Aggiungere preview text a tutti i blog post
> Come hiring manager che scorre la pagina Notes, devo capire in 1 riga se il post è rilevante per me — senza doverlo aprire.

- [x] **T-14.1.1** (2026-03-27) `[CLAUDE-AUTONOMO]` Riscritti tutti gli excerpt — preview specifiche e opinionated (commit 4d71bc8) ✅
- [x] **T-14.1.2** (2026-03-27) `[CLAUDE-AUTONOMO]` en.json + it.json aggiornati (IT nativo) ✅
- [x] **T-14.1.3** (2026-03-27) `[CLAUDE-AUTONOMO]` NoteCard già rendeva excerpt — nessuna modifica componente necessaria ✅
- [x] **T-14.1.4** (2026-03-27) `[CLAUDE-AUTONOMO]` Build OK ✅

---

## EPIC 15: About Page & Polish — Focus su outcome
**Priorità: BASSA-MEDIA** | **Impatto: 4/10** | **Valore hiring manager: Completamento**

> **Fonte:** SITE-AUDIT-CLARITY.md, TIER 4. L'About page descrive le aziende, non i learning. La sezione "Outside work" non serve all'obiettivo. Polish finale dopo che EPIC 12 e 13 sono completate.

### US 15.1: Riscrivere l'About per outcome, non per azienda
> Come hiring manager che ha già deciso di approfondire, ogni entry della carriera deve rispondere "Cosa hai imparato?" non "Dove hai lavorato?"

- [x] **T-15.1.1** (2026-03-27) `[INSIEME]` Riscrivere le career entry dell'About: outcome-first, contesto dopo ✅
- [x] **T-15.1.2** (2026-03-27) `[CLAUDE-AUTONOMO]` Implementare il nuovo copy EN + IT (commit 1057ff7) ✅
- [x] **T-15.1.3** (2026-03-27) `[CLAUDE-AUTONOMO]` Outside Work riformulata — versione di Mattia (commit 837379a) ✅
- [x] **T-15.1.4** (2026-03-27) `[CLAUDE-AUTONOMO]` Build OK ✅

### US 15.2: Valutare il ruolo del blog nella job search
> Come Mattia, devo decidere se il blog nella forma attuale differenzia o diluisce il messaggio del sito.

- [x] **T-15.2.1** (2026-03-27) `[INSIEME]` Blog curato: rimossi 3 post generici, mantenuti 5 differenzianti (commit 813cddd) ✅

---

## EPIC 16: Micro-copy & i18n Consistency — Il sito che non tradisce la cura
**Priorità: MEDIA** | **Impatto: 5/10** | **Valore hiring manager: Fiducia nel dettaglio**

> **Fonte:** Audit manuale del micro-copy, 2026-03-26. Un hiring manager non nota i dettagli quando funzionano. Ma nota quando non funzionano: una label in inglese su una pagina italiana, un titolo ripetuto due volte senza ragione, un bio nel footer che dice "shippo". Questi micro-errori comunicano sciatteria — l'opposto esatto di quello che il sito deve comunicare.
>
> **Criterio decisionale:** Ogni fix in questa EPIC va valutato con: "Un hiring manager se ne accorge? Se sì, lo avvicina o lo allontana dall'assunzione?" I fix sono raggruppati da quelli che fanno danno attivo a quelli che sono polish.

### AUDIT — Risultati completi

**CATEGORIA A — DANNO ATTIVO (il visitatore nota qualcosa di rotto)**

1. **Footer bio IT: "shippo"** — `it.json → footer.bio`: "Senior Technical PM. Prototipo in codice, disegno la UX, e shippo." Stesso errore già corretto nell'EPIC 12 per il resto del sito. Il footer è su OGNI pagina — un hiring manager italiano lo vede 5+ volte durante la visita. Comunicazione: questo PM non revisiona nemmeno i testi del proprio sito.

2. **CaseStudySummary: label inglesi su pagine italiane** — `CaseStudySummary.tsx` righe 27/33/39: "Role", "Period", "Industry" sono hardcoded in inglese nel componente. Screenshot conferma: la pagina /it/work/payments-rescue mostra "ROLE" e "PERIOD" in inglese. Un hiring manager italiano vede un sito mezzo tradotto.

3. **PullQuote: 6 citazioni hardcoded in inglese** — I 3 case study hanno 2 PullQuote ciascuno con testo inglese hardcoded nel JSX (non nelle traduzioni). Sulla versione /it/ queste citazioni restano in inglese nel mezzo di testo italiano. Effetto: il visitatore italiano pensa che il sito sia una traduzione automatica fatta male.

**CATEGORIA B — RUMORE VISIVO (non rotto, ma confonde)**

4. **Label e titolo identici nei SectionHeader** — Homepage: "TRE LINGUAGGI, UN PRODOTTO" (label monospace) + "Tre linguaggi, un prodotto" (titolo bold) = stessa informazione ripetuta due volte. Stessa cosa per: "IL PERCORSO" / "Il percorso", "NUMERI, NON PAROLE" / "Numeri, non parole", "COSA FACCIO ORA" / "Cosa faccio ora", "PARLIAMO" / "Parliamo". Un hiring manager non legge due volte la stessa cosa — la label dovrebbe aggiungere contesto, non ripetere. Effetto: il sito sembra avere una struttura solo decorativa.

5. **NoteLayout: ternari inline invece di traduzioni** — `NoteLayout.tsx` usa `locale === 'it' ? 'Tutte le note' : 'All notes'` (4 occorrenze). Funzionalmente corretto ma fragile e contrario al pattern next-intl usato ovunque. Non impatta l'hiring manager direttamente, ma rende il codice meno manutenibile.

6. **KeyInsight: label default inglese** — `KeyInsight.tsx` ha `label = 'KEY INSIGHT'` come default. Funziona perché il label è in inglese/universale, ma per coerenza dovrebbe passare per le traduzioni.

7. **AiBadge: label default inglese** — `AiBadge.tsx` ha `label = 'AI-assisted'` come default. Stesso pattern del KeyInsight.

**CATEGORIA C — POLISH (nessun impatto diretto sull'hiring manager)**

8. **LanguageToggle: aria-label hardcoded** — `aria-label="Italiano"` / `"English"` hardcoded. Impatta solo screen reader, non visivamente.

9. **ProjectCard: "View project →" hardcoded** — Link text non tradotto. Visibile sulla pagina Lab.

10. **KeyTakeaway MDX: "Key Takeaway" hardcoded** — Label nel componente blog MDX. Visibile solo nei blog post.

---

### STRATEGIA: Cosa fare e cosa non fare

**FARE (Cat. A) — Danno attivo, l'hiring manager nota:**
- Fix footer bio IT
- Internazionalizzare CaseStudySummary
- Spostare PullQuote text nelle traduzioni JSON

**FARE (Cat. B, solo il #4) — Alto rapporto valore/effort:**
- Differenziare le label dai titoli. La label diventa un contesto breve che aggiunge informazione, il titolo resta il titolo. Es: label "COME LAVORO" → titolo "Tre linguaggi, un prodotto". Questo trasforma un elemento decorativo in un elemento informativo.

**NON FARE ORA (Cat. B #5-7, Cat. C) — Non muove l'ago:**
- I ternari in NoteLayout funzionano. Refactoring purista, zero impatto utente.
- KeyInsight/AiBadge/KeyTakeaway label defaults: funzionano, l'utente non li vede come "sbagliati".
- Aria-label, ProjectCard: polish che non avvicina all'assunzione.

---

### US 16.1: Fix footer bio IT — eliminare "shippo"
> Come hiring manager italiano, non devo vedere un calco dall'inglese nel footer di OGNI pagina del sito.

- [x] **T-16.1.1** (2026-03-27) `[CLAUDE-AUTONOMO]` Footer bio IT riscritto: "porto in produzione" (commit e0b3981) ✅
- [x] **T-16.1.2** (2026-03-27) `[CLAUDE-AUTONOMO]` Build OK ✅

### US 16.2: Internazionalizzare CaseStudySummary — label traducibili
> Come hiring manager italiano, le label "Role", "Period", "Industry" devono essere in italiano quando il sito è in italiano.

- [x] **T-16.2.1** (2026-03-27) `[CLAUDE-AUTONOMO]` summaryLabels aggiunte a en.json + it.json ✅
- [x] **T-16.2.2** (2026-03-27) `[CLAUDE-AUTONOMO]` CaseStudySummary.tsx accetta prop labels ✅
- [x] **T-16.2.3** (2026-03-27) `[CLAUDE-AUTONOMO]` 3 case study page.tsx aggiornati con label tradotte ✅
- [x] **T-16.2.4** (2026-03-27) `[CLAUDE-AUTONOMO]` Build OK, /it/ mostra RUOLO/PERIODO/SETTORE ✅

### US 16.3: PullQuote traducibili — citazioni nella lingua della pagina
> Come hiring manager italiano, le citazioni evidenziate nei case study devono essere in italiano, non in inglese.

- [x] **T-16.3.1** (2026-03-27) `[CLAUDE-AUTONOMO]` pullQuote1/pullQuote2 aggiunti EN + IT (nativo) ✅
- [x] **T-16.3.2** (2026-03-27) `[CLAUDE-AUTONOMO]` 3 page.tsx aggiornati con t('*.pullQuote1/2') ✅
- [x] **T-16.3.3** (2026-03-27) `[CLAUDE-AUTONOMO]` Build OK, /it/ mostra citazioni in italiano ✅

### US 16.4: Label SectionHeader differenziate — aggiungere contesto, non ripetere
> Come hiring manager, ogni elemento visivo deve aggiungere informazione. Una label che ripete il titolo è rumore.

- [x] **T-16.4.1** (2026-03-27) `[INSIEME]` Label SectionHeader differenziate: HOW I WORK/CAREER/TRACK RECORD/NOW/CONTACT (commit e0b3981) ✅ Proposta originale:

| Sezione | Label attuale | Label proposta (EN) | Label proposta (IT) | Titolo (invariato) |
|---------|--------------|--------------------|--------------------|-------------------|
| howIWork | THREE LANGUAGES, ONE PRODUCT | HOW I WORK | COME LAVORO | Three languages, one product / Tre linguaggi, un prodotto |
| timeline | THE PATH | CAREER | PERCORSO | The path / Il percorso |
| metrics | NUMBERS, NOT WORDS | TRACK RECORD | RISULTATI | Numbers, not words / Numeri, non parole |
| currentWork | WHAT I'M DOING NOW | NOW | ORA | What I'm doing now / Cosa faccio ora |
| contact | LET'S TALK | CONTACT | CONTATTO | Let's talk / Parliamo |

- [x] **T-16.4.2** (2026-03-27) `[CLAUDE-AUTONOMO]` Label aggiornate in en.json + it.json ✅
- [x] **T-16.4.3** (2026-03-27) `[CLAUDE-AUTONOMO]` Build OK ✅

---

## RIEPILOGO ESECUZIONE

### ✅ EPICHE COMPLETATE
- [x] **EPIC 1** — Case Study (LeadsBridge aggiunto, visual, trasferibilità, Cashless riscritto)
- [x] **EPIC 2** — Lab & Side Projects (CasaHunter mini-case study, Lab pulito, AI badge)
- [x] **EPIC 3** — Homepage (hero, metriche, How I Work, Now, CTA)
- [x] **EPIC 6** — About Page (narrativa, Selfrules fix, beliefs, CTA)
- [x] **EPIC 9** — Pagina Contatto
- [x] **EPIC 12** — Clarity Rewrite Homepage (2026-03-26, commit f61fe74)
- [x] **EPIC 13** — Case Study Reframe TL;DR + KeyInsight (2026-03-26, commit 732b29b)
- [x] **EPIC 14** — Blog Clarity preview text (2026-03-27, commit 4d71bc8)
- [x] **EPIC 15** — About Page & Polish (2026-03-27, commits 837379a + 1057ff7 + 813cddd)
- [x] **EPIC 16** — Micro-copy & i18n Consistency (2026-03-27, commit e0b3981)
- [x] **EPIC 17** — Audit Italiano Copy nativo (2026-03-29, riscrittura 5 blog post IT + copy JSON)
- [x] **EPIC 18** — Coerenza linguistica cross-sito (2026-03-29, GLOSSARIO-IT.md + test del bambino)
- [x] **Volante** — Date blog post allineate a Jan–Mar 2026 (2026-03-27, commit f951bed)

### 🔓 EPICHE APERTE (15) — sequenza logica di implementazione

**FASE 0 — LinkedIn e candidature (CRITICO — blocca la job search)**

1. **EPIC 19: LinkedIn ↔ Sito — Allineamento e attivazione profilo** (15 task)
   Sezioni mancanti (Education, Featured), correzione incoerenze, riscrittura About/Experience, keyword audit. Prerequisito per candidarsi.

2. **EPIC 20: Riattivazione LinkedIn — Da profilo dormiente a canale attivo** (8 task)
   6 post LinkedIn dai blog del sito, cadenza editoriale, engagement strategico. 2-3 settimane prima di candidarsi.

3. **EPIC 21: CV PDF — Il documento che chiude** (6 task)
   CV base ATS-optimized, processo per versioni targettizzate, download dal sito.

4. **EPIC 22: Sito — Completamento per il lancio** (9 task)
   Social proof (testimonial dalle raccomandazioni LinkedIn), CV scaricabile su /contact, cross-link LinkedIn ↔ sito.

**FASE 1 — Contenuto (revisione post + blog)**

5. **EPIC 4: Blog/Notes — Costruire autorità** (3 task rimasti)
   T-4.1.8: Mattia revisiona i 5 post. T-4.3.1: cross-post LinkedIn. T-4.3.3: cadenza editoriale. Dipende da EPIC 17 (completata) e si integra con EPIC 20 (post LinkedIn).

**FASE 2 — Visual & wow factor**

6. **EPIC 1: Case Study — visual mancante** (1 task rimasto)
   T-1.2.6: 1 visual per case study (diagramma/flow). Indipendente dal copy.

7. **EPIC 7: Design & Visual Polish** (3 task rimasti)
   T-7.2.3: test OG images. T-7.3.1–2: visual nei blog post. Dipende parzialmente da EPIC 4.

8. **EPIC 5: Il "Momento Wow"** (10 task)
   Interactive scroll-driven case study + chatbot "Ask Mattia". Il wow factor viene dopo che il contenuto è solido.

**FASE 3 — Technical health & lancio**

9. **EPIC 8: SEO & Technical Health** (4 task rimasti)
   T-8.2.3: alt text. T-8.2.4: dominio selfrules.org. T-8.3.1: Lighthouse. T-8.3.3: axe-core. Il dominio è l'ultimo step prima del lancio.

**FASE 4 — Post-lancio**

10. **EPIC 10: Infrastruttura per evoluzione continua** (7 task rimasti)
    Blog pipeline MDX, scheduled tasks, analytics events. Niente di questo blocca il lancio.

11. **EPIC 11: Mastery ecosistema Claude** (4 task ricorrenti)
    Task continui, non hanno una "fine".

**FASE 5 — Compliance & Analytics**

12. **EPIC 25: Cookie Consent — Serve o non serve?** (4 task)
    Analisi: probabilmente NON serve un banner (solo cookie funzionali + Umami cookieless). Servono una Privacy Policy page e link nel footer.

13. **EPIC 26: Umami Analytics Audit** (9 task)
    Verificare setup, aggiungere eventi mancanti (language-switch, case-study-read, note-read), configurare dashboard per monitorare l'efficacia del sito nella job search.

---

## EPIC 17: Audit Italiano — Copy nativo, non tradotto ✅ COMPLETATA
**Priorità: ALTA** | **Impatto: 8/10** | **Valore hiring manager: Alto**
**Data audit: 2026-03-28** | **Completata: 2026-03-29**

> Un HM italiano che legge il sito deve pensare "scritto da un italiano". Un HM internazionale che legge la versione EN deve pensare "scritto da qualcuno che pensa in inglese". Se una delle due versioni suona come traduzione dell'altra, il sito perde credibilità. Test: "questo testo potrebbe essere capito sia da un hiring manager sia da un bambino?"

### Principi dell'audit
1. **Calchi sintattici** — frasi italiane che seguono l'ordine/struttura dell'inglese
2. **Anglicismi non necessari** — termini inglesi quando esiste l'equivalente italiano naturale
3. **Frasi innaturali** — nessun italiano direbbe così in una conversazione
4. **Gergo settoriale eccessivo** — termini che un bambino (o un HM non-tech) non capirebbe
5. **Registri misti** — oscillazione tra formale e informale nella stessa sezione

---

### US 17.1: Blog Post — Riscrittura nativa dei 5 post nuovi
> I 5 blog post scritti nella sessione del 24 marzo sono i più critici. La struttura segue fedelmente l'inglese, molte frasi sono calchi sintattici diretti, e il registro oscilla tra italiano naturale e "inglese pensato in italiano".

#### 17.1.1 — `build-vs-buy-framework/content.it.mdx` (GRAVITÀ: ALTA)
> Il post più problematico. Quasi ogni frase è un calco sintattico dall'inglese.

- [x] **T-17.1.1a** (2026-03-29) `[INSIEME]` Riscrivere nativamente `build-vs-buy-framework/content.it.mdx`
  **Problemi specifici:**
  - "Ho visto grandi costruttori volere costruire tutto" → calco di "I've seen great builders want to build everything"
  - "Ho visto PM avversi al rischio volere comprare tutto" → calco letterale
  - "La decisione vive all'incrocio di quattro domande" → "lives at the intersection" tradotto parola per parola
  - "sbagliare l'ordine significa ottimizzare per la cosa sbagliata" → calco di "means optimizing for the wrong thing"
  - "Questa sorprende le persone" → "This surprises people" — in italiano si direbbe "Questa di solito non se l'aspetta nessuno"
  - "Nessun vincolo di tempo. Quindi ho costruito." → segue il ritmo dell'inglese, non dell'italiano
  - "Costruire era, o il prodotto non esiste il prossimo trimestre" → frase rotta, calco di "Build it was, or the product doesn't exist next quarter"
  - "Non perché non potessimo costruire. Perché non avevamo tempo" → ritmo inglese
  - "Ogni cliente se lamentava" → grammaticalmente sbagliato, dovrebbe essere "si lamentava"
  - "abbiamo comprato. L'elaborazione dei pagamenti di Square è una merce" → "merce" per "commodity" — nessuno dice così in italiano
  - "L'algoritmo di ranking è un differenziatore" → "differenziatore" per "differentiator" — in italiano si dice "il vero punto di forza" o "ciò che fa la differenza"
  - "ingegneria dello status symbol" → incomprensibile
  - "Payments Rescue" usato come nome in italiano — va contestualizzato
  - "Costo totale di proprietà" → TCO tradotto letteralmente, non è un termine usato in italiano corrente
  - "resta accecata" → calco di "gets blinded"
  - "Sembra una vittoria chiara per la costruzione" → "clear win for building" tradotto parola per parola
  - "costo sommerso" → "sunk cost" tradotto, ma in italiano non si usa
  - "dato i nostri vincoli attuali e il nostro burn rate" → mixing inglese e italiano
  - "Manca il vincolo e risolvi un problema che non hai" → frase non ha senso in italiano

#### 17.1.2 — `remote-pm-across-countries/content.it.mdx` (GRAVITÀ: ALTA)
> Secondo post più problematico. Molte frasi sono traduzioni meccaniche con struttura inglese.

- [x] **T-17.1.2a** (2026-03-29) `[INSIEME]` Riscrivere nativamente `remote-pm-across-countries/content.it.mdx`
  **Problemi specifici:**
  - "Quel è il problema sbagliato" → typo + calco di "That's the wrong problem"
  - "Il contesto vive nell'aria. Togli la stanza e l'aria scompare." → calco poetico dall'inglese, suona artificiale in italiano
  - "il team degli USA lo vedeva alle 23 e prendeva una decisione che io non ero sveglio per vedere" → calco di "a decision I wasn't awake to see"
  - "Il primo istinto è stato risolvere questo con miglior programmazione Zoom" → "programmazione Zoom" per "Zoom scheduling" — confusione totale (programmazione = programming in italiano, non scheduling)
  - "Ottenere una migliore sovrapposizione di fusi orari" → calco di "Get better timezone overlap"
  - "Proteggere le core hours" → mixing inglese/italiano
  - "Questo ha fallito perché era il problema sbagliato" → calco di "This failed because it was the wrong problem"
  - "nessuno la scrive tranne nei call notes che due persone ascoltano per metà" → "call notes" in italiano, "ascoltano per metà" calco
  - "quale decisione abbiamo bisogno di prendere" → calco di "what decision we need to make" — in italiano: "che decisione dobbiamo prendere"
  - "L'ultima frase contava di più" → "mattered most" calco
  - "Quei documenti diventarono la fonte della verità" → "source of truth" tradotto letteralmente — in italiano non si usa
  - "Gli analisti li usavano per capire quali metriche effettivamente contavano" → "actually mattered" calco
  - "Sembra burocrazia. È in realtà l'opposto." → calco del ritmo inglese
  - "I thread Slack che cascano in 50 messaggi hanno un modo di perdere il contesto" → "have a way of losing context" calco
  - "questo ha avuto bisogno di discussione immediata" → "this needed immediate discussion" calco
  - "Lo spec di implementazione era sbagliato" → "spec" usato al maschile, anglicismo
  - "Se richiede vai-e-vieni in 5 turni o più, call" → mixing totale IT/EN
  - "compliment sandwich" → anglicismo non spiegato
  - "la stessa cosa richiede più contesto" → calco letterale
  - "Ho imparato a scrivere il feedback esplicitamente" → calco
  - "La matematica sembra cattiva" → calco di "the math looks bad"
  - "Una volta che ho iniziato a tracciare" → "Once I started tracking" calco
  - "un singolo documento di decisione ha prevenuto forse cinque ore" → "prevented maybe five hours" calco
  - "Questo è il leverage di async-first" → anglicismi non spiegati

#### 17.1.3 — `when-ai-makes-sense-in-product/content.it.mdx` (GRAVITÀ: MEDIA)
> Leggermente meglio dei primi due, ma con numerosi calchi e anglicismi.

- [x] **T-17.1.3a** (2026-03-29) `[INSIEME]` Riscrivere nativamente `when-ai-makes-sense-in-product/content.it.mdx`
  **Problemi specifici:**
  - "Ogni team di prodotto sta guardando alle feature AI adesso" → calco di "is looking at AI features right now"
  - "Hai migliaia di punti dati senza una regola chiara" → calco letterale
  - "L'LLM vede pattern che una regola umana non può esprimere" → suona artificiale
  - "La persona A si interessa della vicinanza al lavoro" → calco — in italiano: "alla persona A interessa stare vicino al lavoro"
  - "Non puoi scrivere regole per questo. Puoi imparare dal comportamento e adattare." → ritmo inglese
  - "Non è un campo dati. È un reclamo" → calco di "It's not a data field. It's a complaint"
  - "Il linguaggio naturale importa qui" → "matters here" calco
  - "ha bisogno di un `WHERE amount < 1000`" → SQL in un testo italiano, accessibile solo a tecnici
  - "usiamo l'AI per gestire gli scenari di fallimento" → calco
  - "di solito sta guardando una macchina di stato" → calco di "is usually looking at a state machine"
  - "Confrontano il 'costo di scrivere una regola' con il 'costo di usare un LLM'" → calco
  - "Le chiamate LLM si sommano" → calco di "LLM calls add up"
  - "moltiplica per latenza, cold start, overhead API, gestione degli errori" → anglicismi tecnici a raffica
  - "la 'feature AI semplice' è infrastruttura" → calco
  - "la decisione core" → mixing IT/EN

#### 17.1.4 — `managing-payments-at-scale/content.it.mdx` (GRAVITÀ: MEDIA)
- [x] **T-17.1.4a** (2026-03-29) `[INSIEME]` Riscrivere nativamente `managing-payments-at-scale/content.it.mdx`
  **Problemi:** Non letto completamente in questa sessione, ma data la coerenza stilistica con gli altri 4 post, quasi certamente ha gli stessi pattern di calchi sintattici e anglicismi. Richiede audit e riscrittura.

#### 17.1.5 — `seven-years-running-a-business/content.it.mdx` (GRAVITÀ: MEDIA)
- [x] **T-17.1.5a** (2026-03-29) `[INSIEME]` Riscrivere nativamente `seven-years-running-a-business/content.it.mdx`
  **Problemi:** Come sopra — da auditare e riscrivere nella stessa sessione degli altri.

#### 17.1.6 — `why-i-prototype-in-code/content.it.mdx` (GRAVITÀ: BASSA)
> Questo post è significativamente migliore degli altri. Molte frasi suonano native. Pochi calchi isolati.

- [x] **T-17.1.6a** (2026-03-29) `[CLAUDE-AUTONOMO]` Correggere i pochi calchi rimasti in `why-i-prototype-in-code/content.it.mdx`
  **Problemi specifici (pochi):**
  - "Parlo di costruire la cosa minima necessaria per rispondere a una domanda" → leggermente rigido ma accettabile
  - "Questo non è lavoro da ingegnere. Non si tratta di scrivere codice di produzione." → buono
  - Nel complesso: **90% nativo**, solo ritocchi minimi

#### 17.1.7 — `the-meeting-where-everyone-says-yes/content.it.mdx` (GRAVITÀ: DA VERIFICARE)
- [x] **T-17.1.7a** (2026-03-29) `[INSIEME]` Audit e riscrittura se necessaria di `the-meeting-where-everyone-says-yes/content.it.mdx`

#### 17.1.8 — `why-metrics-lie-without-context/content.it.mdx` (GRAVITÀ: DA VERIFICARE)
- [x] **T-17.1.8a** (2026-03-29) `[INSIEME]` Audit e riscrittura se necessaria di `why-metrics-lie-without-context/content.it.mdx`

---

### US 17.2: Pagina Approach — Riscrittura nativa
> La pagina `/approach` (sezioni s1–s5 in it.json, chiave `approach`) è ben scritta ma contiene calchi residui e anglicismi.

- [x] **T-17.2.1** (2026-03-29) `[INSIEME]` Riscrivere nativamente le 5 sezioni della pagina Approach in `it.json`
  **Problemi specifici:**
  - s1: "Capire prima di toccare" — buono. Ma "La tentazione quando arrivi su un prodotto in difficoltà è agire subito" → leggermente calco di "The temptation when you arrive on a struggling product..."
  - s2: "Il problema è nel funnel" → "funnel" è gergo. Un bambino non capisce. Un HM non-tech probabilmente sì, ma al limite
  - s2: "uncategorized income" in Square lasciato in inglese — corretto (è il termine dell'interfaccia), ma serve una spiegazione contestuale
  - s2: "Il redesign ha tagliato il tempo di setup del 35%" → "tagliato" per "cut" è calco; "ridotto" è più naturale
  - s3: "Costruire per scoprire, non per consegnare" — buono
  - s4: "Sapere cosa non costruire" — buono
  - s4: "Parcheggiato. Deliberatamente." — buono, ritmo funziona in italiano
  - s5: "Comunicare come se non fossi nella stanza" — buono
  - s5: "minute dei meeting" → "minute" per "minutes" è calco. In italiano: "verbali delle riunioni"
  - Closing: "Nessun framework con un nome" → "framework" è accettabile nel contesto, ma ripetuto troppo spesso nel sito

---

### US 17.3: Case Study — Calchi residui nei testi lunghi
> I case study principali (payments, leadsbridge, cashless) sono stati riscritti nella sessione del 28 marzo e sono molto meglio. Restano calchi isolati nei testi lunghi (approach, learned, patterns).

- [x] **T-17.3.1** (2026-03-29) `[CLAUDE-AUTONOMO]` Payments case study — fix calchi residui in `it.json`
  **Problemi specifici:**
  - patterns: "fixare tutto contemporaneamente" → "fixare" è anglicismo. Usare "risolvere"
  - patterns: "fai il triage spietatamente" → "triage" è accettabile, "spietatamente" è calco di "ruthlessly"
  - patterns: "Le metriche come tool di triage, non decorazione di dashboard" → "tool" anglicismo; "strumento" esiste
  - patterns: "pet fix" → anglicismo non necessario
  - learned: "La maggior parte di quello che sembrava urgente poteva in realtà aspettare" → struttura leggermente calco
  - approach: "compilati da engineering, sales e supporto senza alcun ranking" → "ranking" anglicismo; "senza un ordine di priorità"
  - approach: "hanno ottenuto un owner ciascuno" → "owner" anglicismo; "responsabile"
  - approach: "un impegno pubblico" → calco di "a published commitment"

- [x] **T-17.3.2** (2026-03-29) `[CLAUDE-AUTONOMO]` LeadsBridge case study — fix calchi residui in `it.json`
  **Problemi specifici:**
  - approach: "Non dove pensavamo si bloccassero" → buono
  - approach: "incrociando ticket di supporto e pattern di sessione" → "pattern di sessione" calco; "comportamenti nelle sessioni"
  - approach: "aggiungeva carico cognitivo" → accettabile ma tecnico
  - approach: "La resistenza è stata immediata" → calco di "The resistance was immediate"
  - approach: "non stiamo rimuovendo capacità, stiamo rimuovendo frizione" → buono (funziona come frase ad effetto)
  - patterns: "Automatizza il pain point" → anglicismo nel titolo; "Automatizza il punto dolente" o riformula
  - patterns: "Misura il funnel, non la feature" → tre anglicismi in sei parole
  - patterns: "vanity metric" → anglicismo
  - learned: "arrangiatevi" → buono, nativo

- [x] **T-17.3.3** (2026-03-29) `[CLAUDE-AUTONOMO]` Cashless case study — fix calchi residui in `it.json`
  **Problemi specifici:**
  - approach: "Poi ho ucciso l'opzione ovvia" → calco di "Then I killed the obvious option" — in italiano è troppo drammatico; "ho scartato" o "ho eliminato"
  - patterns: "Uccidi il tuo prodotto" → stesso problema
  - patterns: "Pilot prima di committerti" → "committerti" è anglicismo da "commit"
  - patterns: "La selezione del partner è lavoro di prodotto" → calco letterale
  - patterns: "Da zero a uno richiede un PM muscle diverso" → "PM muscle" incomprensibile in italiano
  - learned: "Parcheggiarlo presto ha risparmiato mesi di tempo engineering" → "tempo engineering" calco

---

### US 17.4: Homepage — Anglicismi e calchi residui
> L'homepage è stata riscritta il 28 marzo ed è in buona forma. Restano pochi problemi isolati.

- [x] **T-17.4.1** (2026-03-29) `[CLAUDE-AUTONOMO]` Fix calchi residui homepage in `it.json`
  **Problemi specifici:**
  - timeline.block1: "Selfrules Studio" → da feedback di Mattia, non era uno studio. Era lavoro freelance (siti, e-commerce, grafica, stampa). Verificare che il testo non dica "studio"
  - timeline.block2: "Entrato come UX Designer, uscito scrivendo codice in produzione" → buono
  - howIWork.intro: "l'engineering dice 'servono 3 sprint di refactoring'" → "sprint" e "refactoring" sono gergo tech. Un bambino non capisce. Un HM sì. Al limite del test
  - metrics: "Introducendo review cross-funzionali settimanali" → "review cross-funzionali" → "revisioni con tutti i team"
  - currentWork.card2: "Scoring a tre passaggi: 80% filtro deterministico, 20% budget AI" → gergo denso. "deterministico" fallisce il test del bambino

---

### US 17.5: About Page — Calchi residui
> La pagina About è in buona forma complessiva. Pochi calchi isolati.

- [x] **T-17.5.1** (2026-03-29) `[CLAUDE-AUTONOMO]` Fix calchi residui About in `it.json`
  **Problemi specifici:**
  - career.selfrules: "Uno studio di web design fondato a 25 anni a Modena" → da feedback: non era "studio", era freelance
  - career.leadsbridge: "sbloccato direttamente la crescita del revenue" → "revenue" anglicismo; "fatturato" è l'italiano
  - beliefs.belief3: "Se il PM diventa il collo di bottiglia tra chi costruisce e chi decide" → "collo di bottiglia" è corretto in italiano
  - beliefs.belief2: "React che gli utenti possono toccare" → OK per HM tech, ma un bambino non sa cos'è React
  - outside: buono, nativo, personale ✓

---

### US 17.6: Metadata & SEO — Anglicismi e calchi
> Le meta description italiane contengono anglicismi inutili.

- [x] **T-17.6.1** (2026-03-29) `[CLAUDE-AUTONOMO]` Fix metadata italiane in `it.json`
  **Problemi specifici:**
  - metadata.about: "colmare il divario tra design, engineering e business quando non si capiscono" → "colmare il divario" calco di "bridge the gap"
  - metadata.work: "Numeri e decisioni, non marketing copy" → "marketing copy" anglicismo
  - metadata.lab: "mockup o prototipi" → "mockup" anglicismo, ma accettabile nel contesto
  - metadata.approach: "ship con convinzione" → "ship" anglicismo in una meta description italiana
  - metadata.approach: "cosa funziona al limite del caos" → calco di "what works at the edge of chaos"
  - metadata.notes: "prototipar in codice" → troncatura brutta; "prototipare" almeno
  - metadata.casahunter: "eleganza tecnica < velocità di ship" → formula mista IT/EN in una meta description

---

### US 17.7: Micro-copy e navigazione
> Piccoli fix di coerenza linguistica.

- [x] **T-17.7.1** (2026-03-29) `[CLAUDE-AUTONOMO]` Fix micro-copy in `it.json`
  **Problemi specifici:**
  - footer.bio: "Prototipo in codice, disegno la UX, e porto in produzione" → "disegno la UX" mixing — "disegno l'esperienza utente" o "progetto l'interfaccia"
  - contact page intro: "Che tu abbia un ruolo specifico in mente o solo voglia scambiare idee" → calco di "Whether you have a specific role in mind or just want to exchange ideas" — in italiano: "Che sia per un ruolo specifico o per scambiare due idee"
  - hero.signaturePhrase: "Il problema non e' mai quello del primo meeting." → apostrofo dritto (') invece di è con accento. Bug tipografico

---

## EPIC 18: Coerenza linguistica cross-sito ✅ COMPLETATA
**Priorità: MEDIA** | **Impatto: 6/10** | **Valore hiring manager: Medio (percezione di cura)**
**Completata: 2026-03-29**

> Problemi sistemici che attraversano tutto il sito, non specifici di una singola pagina.

### US 18.1: Glossario di traduzione — Termini ricorrenti
> Lo stesso termine inglese viene tradotto in modi diversi in punti diversi del sito. Serve una scelta consistente.

- [x] **T-18.1.1** (2026-03-29) `[INSIEME]` Glossario IT definito e salvato in GLOSSARIO-IT.md ✅
  Definizione originale:
  | EN | Attuale IT (inconsistente) | Proposta |
  |---|---|---|
  | setup | setup / configurazione | **configurazione** (o "setup" solo se contesto molto tech) |
  | framework | framework | **schema** / **approccio** (framework solo in titoli tech) |
  | pattern | pattern | **schema** / **approccio ricorrente** |
  | feature | feature / funzionalità | **funzionalità** |
  | fix | fix / fixare / risolvere | **risolvere** / **correzione** |
  | revenue | revenue / fatturato | **fatturato** |
  | owner | owner / responsabile | **responsabile** |
  | ranking | ranking | **classifica** / **punteggio** |
  | tool | tool / strumento | **strumento** |
  | scope | scope | **ambito** / **perimetro** |
  | triage | triage | **triage** (accettato anche in IT) |
  | dashboard | dashboard | **dashboard** (accettato anche in IT) |

### US 18.2: Coerenza del registro — Formale vs Informale
> Il sito oscilla tra "tu" informale (homepage, about, CTA) e tono da paper accademico (blog post). Il registro deve essere consistente: diretto, conversazionale, mai accademico.

- [x] **T-18.2.1** (2026-03-29) `[INSIEME]` Registro allineato: regola inclusa nel GLOSSARIO-IT.md — diretto, conversazionale, benchmark = hero/beliefs/Outside Work ✅

### US 18.3: Il test del bambino — Passata finale
> Dopo tutte le riscritture, fare una passata finale su ogni pagina chiedendosi: "un tredicenne italiano capirebbe di cosa sto parlando?"

- [x] **T-18.3.1** (2026-03-29) `[INSIEME]` Passata finale "test del bambino" su tutto il sito — pagina per pagina ✅

---

## EPIC 19: LinkedIn ↔ Sito — Allineamento e attivazione profilo
**Priorità: CRITICA** | **Impatto: 10/10** | **Valore hiring manager: Massimo**
**Data analisi: 2026-03-29** | **Fonte: LINKEDIN-VS-SITO-ANALISI.md**

> **Il problema:** Il sito è lo strumento di conversione migliore, ma LinkedIn è lo strumento di scoperta — e oggi è dormiente (16 visite profilo, 5 impressioni, 0 post negli ultimi 6 mesi). Se un recruiter non trova Mattia su LinkedIn, il sito non esiste. LinkedIn e sito raccontano due persone diverse: il sito è specifico, narrativo, con proof points. LinkedIn è generico, statico, senza prove tangibili.
>
> **Obiettivo:** LinkedIn e sito devono raccontare la stessa storia. LinkedIn cattura l'attenzione → il sito convince → il CV chiude. I tre pezzi devono funzionare come un funnel.
>
> **Principio guida:** Mai duplicare. LinkedIn rimanda al sito per la profondità. Il sito rimanda a LinkedIn per la social proof. Ogni canale fa quello che sa fare meglio.

### US 19.1: Sezioni mancanti — Education e Featured
> Come recruiter, un profilo senza Education è un red flag. Un profilo senza Featured è un profilo senza prove. Queste due sezioni mancanti si riempiono in 30 minuti ma cambiano la percezione del profilo.

- [ ] **T-19.1.1** `[INSIEME]` Aggiungere sezione Education su LinkedIn — raccogliere formazione di Mattia (laurea, corsi, certificazioni significative oltre le 2 già presenti). Se il percorso è non-tradizionale, discutere come posizionarlo.
- [ ] **T-19.1.2** `[INSIEME]` Creare Featured section su LinkedIn con 3-4 item:
  1. Link a selfrules.org (homepage o /work)
  2. Case study Payments Rescue (link diretto)
  3. CasaHunter Lab (link diretto)
  4. Eventuale post LinkedIn più performante (quando disponibile)
  Per ogni item: titolo chiaro + descrizione 1-2 righe che spiega il "so what".

### US 19.2: Correggere incoerenze LinkedIn ↔ Sito
> Come hiring manager che guarda sia LinkedIn che il sito, le informazioni devono essere coerenti. Oggi non lo sono.

- [ ] **T-19.2.1** `[INSIEME]` Correggere descrizione Selfrules: da "Founded and ran a web design and development studio for 7 years" a framing freelance coerente con il sito e con la realtà (lavoro freelance su progetti web, e-commerce, grafica — non uno studio).
- [ ] **T-19.2.2** `[CLAUDE-AUTONOMO]` Audit di coerenza: confrontare ogni sezione LinkedIn con il corrispondente sul sito. Verificare che metriche, date, titoli, descrizioni matchino. Documentare le discrepanze in una checklist.
- [ ] **T-19.2.3** `[INSIEME]` Risolvere le discrepanze trovate nell'audit — decidere caso per caso se allineare LinkedIn al sito o viceversa.

### US 19.3: Riscrivere l'About LinkedIn per coerenza con il sito
> L'About LinkedIn è buono ma generico rispetto al sito. Deve usare lo stesso livello di specificità del sito senza duplicare il contenuto.

- [ ] **T-19.3.1** `[CLAUDE-AUTONOMO]` Analizzare l'About attuale vs il posizionamento del sito (homepage hero, approach, beliefs). Identificare gap e opportunità.
- [ ] **T-19.3.2** `[INSIEME]` Riscrivere l'About LinkedIn: stessa voce del sito, ma formato LinkedIn (scansionabile in 8 secondi, paragrafi brevi, CTA a selfrules.org). Seguire la struttura della skill linkedin-personal-brand.
- [ ] **T-19.3.3** `[MATTIA-REQUIRED]` Mattia aggiorna l'About su LinkedIn con il nuovo copy.

### US 19.4: Riscrivere le Experience per achievement-based coerente
> Le experience LinkedIn devono matchare il livello di specificità dei case study del sito. Oggi QubicaAMF è buona, LeadsBridge è buona, FLOWING è narrativa ma manca di metriche.

- [ ] **T-19.4.1** `[CLAUDE-AUTONOMO]` Scrivere versioni aggiornate delle 4 experience LinkedIn, coerenti con i case study del sito. Ogni bullet inizia con action verb, include metrica dove possibile.
- [ ] **T-19.4.2** `[INSIEME]` Review delle experience riscritte — Mattia valida che i numeri e i framing siano corretti e NDA-safe.
- [ ] **T-19.4.3** `[MATTIA-REQUIRED]` Mattia aggiorna le Experience su LinkedIn con il nuovo copy.

### US 19.5: Headline e keyword optimization
> La headline è buona ma il differenziatore ("I prototype in code...") viene tagliato nei risultati di ricerca LinkedIn Recruiter. Le keyword "remote" e "distributed teams" non sono nella headline né nelle skill.

- [ ] **T-19.5.1** `[CLAUDE-AUTONOMO]` Raccogliere 5-10 job posting target (EU remote + US remote, Senior PM / Technical PM) ed estrarre keyword ricorrenti.
- [ ] **T-19.5.2** `[CLAUDE-AUTONOMO]` Confrontare keyword delle JD con il profilo attuale. Identificare gap (keyword presenti nelle JD ma assenti dal profilo).
- [ ] **T-19.5.3** `[INSIEME]` Valutare se riformulare la headline per rendere il differenziatore visibile nei primi 120 caratteri. Proporre 2-3 alternative.
- [ ] **T-19.5.4** `[INSIEME]` Aggiungere skill mancanti su LinkedIn: remote work, distributed teams, async, e altre keyword emerse dall'audit JD.
- [ ] **T-19.5.5** `[MATTIA-REQUIRED]` Mattia aggiorna headline e skill su LinkedIn.

---

## EPIC 20: Riattivazione LinkedIn — Da profilo dormiente a canale attivo
**Priorità: ALTA** | **Impatto: 9/10** | **Valore hiring manager: Scoperta + credibilità**
**Data analisi: 2026-03-29** | **Fonte: LINKEDIN-VS-SITO-ANALISI.md**

> **Il problema:** 5 impressioni e 16 visite profilo in 7 giorni = profilo invisibile. L'algoritmo LinkedIn penalizza i profili senza attività recente anche nei risultati di ricerca. Candidarsi con un profilo dormiente è come mandare un CV con un buco nel CV — il recruiter si chiede "cosa faceva?".
>
> **Obiettivo:** 2-3 settimane di attività consistente prima di iniziare a candidarsi. Non per diventare un content creator, ma per mostrare che Mattia è un professionista attivo che pensa e condivide.
>
> **Principio guida:** "Proof of work, not opinion." Ogni post parte da qualcosa che Mattia ha fatto, costruito, o osservato. Mai opinione astratta. Il blog del sito è la miniera di contenuto — riadattare, non duplicare.

### US 20.1: Content plan — I primi 6 post per riattivare il profilo
> Prima di postare serve un piano. 6 post in 3 settimane (2/settimana) sono sufficienti per riattivare l'algoritmo senza sembrare spam.

- [x] **T-20.1.1** (2026-03-29) `[CLAUDE-AUTONOMO]` 6 draft post LinkedIn scritti — vedi LINKEDIN-POSTS.md. Mapping: (1) Payments at Scale → tema #3, (2) Metrics Lie → tema #2, (3) Prototype in Code → tema #1, (4) AI Makes Sense → tema #1, (5) Seven Years → tema #1, (6) CasaHunter originale → tema #1. Tutti 800-1200 char, hook concreto, domanda aperta finale. ✅
- [ ] **T-20.1.2** `[INSIEME]` Review dei 6 draft — Mattia valida tono, contenuto, e ordine di pubblicazione.
- [x] **T-20.1.3** (2026-03-29) `[INSIEME]` Calendario definito: mar-gio, 08:30-09:00 CET, 3 settimane. Vedi LINKEDIN-POSTS.md. ✅

### US 20.2: Cadenza editoriale post-attivazione
> Dopo le prime 3 settimane, serve una cadenza sostenibile che mantenga il profilo attivo senza diventare un secondo lavoro.

- [x] **T-20.2.1** (2026-03-29) `[INSIEME]` Cadenza decisa: 1 post/settimana (martedì 08:30 CET). ~1 ora/settimana. ✅
- [x] **T-20.2.2** (2026-03-29) `[CLAUDE-AUTONOMO]` Template riutilizzabile creato in LINKEDIN-POSTS.md: struttura hook → corpo → lezione → domanda → link → hashtag. ✅
- [ ] **T-20.2.3** `[INSIEME]` Dopo 3 settimane di dati: analisi engagement (impressioni, reazioni, commenti, visite profilo). Decidere cosa funziona e cosa aggiustare.

### US 20.3: Engagement strategico — Non solo postare
> Postare senza interagire è un monologo. L'algoritmo LinkedIn premia chi commenta, reagisce, e partecipa alle discussioni.

- [x] **T-20.3.1** (2026-03-29) `[INSIEME]` Lista profili creata in LINKEDIN-POSTS.md: 5 PM influencer (Shreyas Doshi, Lenny, Peter Yang, Kevin Yien, Tim Herbig) + vertical payments + rete esistente (Filippo Ferri, Christian Goss). ✅
- [ ] **T-20.3.2** `[MATTIA-REQUIRED]` Mattia dedica 15 min 2-3 volte a settimana a commentare post rilevanti nella sua rete. Non commenti generici ma contributi con prospettiva personale.

---

## EPIC 21: CV PDF — Il documento che chiude
**Priorità: ALTA** | **Impatto: 8/10** | **Valore hiring manager: Conversione finale**
**Data analisi: 2026-03-29** | **Fonte: LINKEDIN-VS-SITO-ANALISI.md**

> **Il problema:** Quando un recruiter chiede il CV, Mattia deve mandarlo a mano. Non c'è un CV scaricabile sul sito. Il CV deve essere coerente con LinkedIn e sito — stessa storia, stesso livello di specificità, stesso posizionamento.
>
> **Obiettivo:** Un CV PDF professionale, ATS-optimized, scaricabile dalla pagina Contatto del sito. Una versione base + il processo per generare versioni adattate a JD specifiche.

### US 21.1: Generare il CV base
> Come recruiter, quando chiedo il CV a Mattia voglio riceverlo in 30 secondi — non in 2 giorni.

- [x] **T-21.1.1** (2026-03-29) `[INSIEME]` Dati raccolti: no telefono, Bologna Italy, 2 pagine, diploma ITIS informatico, cert Product Compass ✅
- [x] **T-21.1.2** (2026-03-29) `[CLAUDE-AUTONOMO]` CV PDF generato: mattia-de-luca-cv.pdf — ATS-optimized, single-column, Helvetica, text-based, 2 pagine. Script: generate_cv.py ✅
- [ ] **T-21.1.3** `[INSIEME]` Review del CV — Mattia valida contenuto, formato, e tono.
- [ ] **T-21.1.4** `[CLAUDE-AUTONOMO]` Pubblicare il CV sulla pagina /contact del sito come PDF scaricabile con Umami event tracking sul download.

### US 21.2: Processo per CV targettizzati
> Come candidato, ogni candidatura seria dovrebbe avere un CV adattato alla JD specifica — non lo stesso documento generico per tutti.

- [x] **T-21.2.1** (2026-03-29) `[CLAUDE-AUTONOMO]` Processo documentato in CV-TARGETING-PROCESS.md: incolla JD → Claude analizza match → genera versione adattata → Mattia revisiona ✅
- [ ] **T-21.2.2** `[INSIEME]` Testare il processo con 2-3 JD reali. Validare che il risultato sia utilizzabile senza modifiche manuali significative.

---

## EPIC 22: Sito — Completamento per il lancio
**Priorità: ALTA** | **Impatto: 8/10** | **Valore hiring manager: Prerequisito**
**Data analisi: 2026-03-29** | **Fonte: LINKEDIN-VS-SITO-ANALISI.md**

> **Il problema:** Il sito è la destinazione finale del funnel, ma non è ancora completo. Se un recruiter USA clicca selfrules.org dall'About di LinkedIn, deve trovare un sito completo e coerente — non un work in progress. La pagina Contatto non ha CV scaricabile. I social proof (testimonial) sono assenti dal sito.
>
> **Obiettivo:** Il sito è pronto per ricevere traffico da LinkedIn e dalle candidature. Ogni pagina funziona, ogni link porta da qualche parte, il CV è scaricabile.

### US 22.1: Social proof sul sito — Le raccomandazioni LinkedIn come testimonial
> Come hiring manager, testimonial di colleghi e manager sono potenti. LinkedIn ne ha 8. Il sito ne ha 0. Questa è un'opportunità persa.

- [ ] **T-22.1.1** `[INSIEME]` Selezionare 2-3 raccomandazioni LinkedIn più impattanti (Christian Goss come manager diretto è la più forte). Decidere dove metterle: homepage? about? case study specifici?
- [ ] **T-22.1.2** `[CLAUDE-AUTONOMO]` Implementare sezione testimonial con le raccomandazioni selezionate. Design coerente col design system (PullQuote-style, nome + ruolo + relazione).
- [ ] **T-22.1.3** `[CLAUDE-AUTONOMO]` en.json + it.json con testo delle raccomandazioni (in inglese originale, con nota "traduzione" per IT se serve).
- [ ] **T-22.1.4** `[CLAUDE-AUTONOMO]` Build OK, responsive verificato.

### US 22.2: Pagina Contatto — CV scaricabile + completamento
> Come recruiter, la pagina contatto deve avere tutto ciò che mi serve per procedere: email, LinkedIn, CV PDF, disponibilità.

- [ ] **T-22.2.1** `[CLAUDE-AUTONOMO]` Aggiungere link download CV PDF alla pagina /contact (dipende da EPIC 21 T-21.1.4)
- [ ] **T-22.2.2** `[CLAUDE-AUTONOMO]` Verificare che tutti i link della pagina Contatto funzionino (email mailto, LinkedIn, CV download)
- [ ] **T-22.2.3** `[CLAUDE-AUTONOMO]` Aggiungere Umami events: click email, click LinkedIn, download CV

### US 22.3: Cross-link LinkedIn ↔ Sito
> LinkedIn e sito devono rimandarsi a vicenda in modo naturale — non come un redirect forzato, ma come un approfondimento.

- [ ] **T-22.3.1** `[CLAUDE-AUTONOMO]` Verificare che il footer del sito abbia link a LinkedIn funzionante e visibile
- [ ] **T-22.3.2** `[MATTIA-REQUIRED]` Aggiornare il campo "Website" nel profilo LinkedIn con l'URL definitivo (selfrules.org quando il dominio è configurato)
- [ ] **T-22.3.3** `[CLAUDE-AUTONOMO]` About LinkedIn CTA punta a selfrules.org (verificare dopo riscrittura About in EPIC 19)

---

## EPIC 23: Geolocalizzazione lingua — Il sito parla la tua lingua
**Priorità: MEDIA** | **Impatto: 6/10** | **Valore hiring manager: Comfort**
**Data analisi: 2026-03-29** | **Fonte: Richiesta Mattia**

> **Il problema:** Attualmente `localeDetection: false` in next-intl — il sito serve sempre EN di default (no prefix). Un utente italiano che atterra su selfrules.org vede il sito in inglese e deve cliccare manualmente IT. Un recruiter italiano potrebbe non notare il toggle lingua.
>
> **Obiettivo:** Un utente che arriva da un IP italiano (o con browser in italiano) viene servito con la versione IT. Un utente USA/UK vede EN. Nessun redirect forzato — solo un suggerimento intelligente.
>
> **Vincolo architetturale:** Next.js 16 usa `proxy.ts` (non middleware.ts). Il rilevamento va implementato lì o client-side. Valutare: geo-IP via Vercel headers (`x-vercel-ip-country`) vs `navigator.language` del browser. Vercel headers è zero-latency e non richiede JS client.

### US 23.1: Auto-detect lingua e redirect morbido
> Come utente italiano, voglio atterrare direttamente sulla versione italiana senza dover cercare il toggle lingua.

- [x] **T-23.1.1** (2026-03-29) `[INSIEME]` Strategia decisa: redirect 302 automatico. Niente banner. ✅
- [x] **T-23.1.2** (2026-03-29) `[CLAUDE-AUTONOMO]` Geo-redirect in `proxy.ts` via `x-vercel-ip-country`. Paesi: IT, SM, VA, CH → redirect a /it. Cookie `preferred-locale` blocca il redirect se l'utente ha scelto manualmente. ✅
- [x] **T-23.1.3** (2026-03-29) `[CLAUDE-AUTONOMO]` LanguageToggle setta cookie `preferred-locale` (1 anno) al click manuale. Il geo-redirect non sovrascrive mai la scelta dell'utente. ✅
- [x] **T-23.1.4** (2026-03-29) `[CLAUDE-AUTONOMO]` SEO verificato: redirect 302 (non 301), sitemap con hreflang bidirezionale invariata, Googlebot crawla da US quindi vede EN. ✅
- [x] **T-23.1.5** (2026-03-29) `[CLAUDE-AUTONOMO]` Build OK, pushato su main, deploy Vercel in corso. ✅

---

## EPIC 24: Sistema di Feedback — Il sito che ascolta
**Priorità: MEDIA-ALTA** | **Impatto: 7/10** | **Valore hiring manager: Alto (segnale di cura + differenziante)**
**Data analisi: 2026-03-29** | **Fonte: Richiesta Mattia**

> **Il problema:** Il sito è una vetrina statica. Non c'è modo per un visitatore di segnalare un errore, fare una domanda, o lasciare un feedback. Questo è un'opportunità persa: (1) i bug report migliorano il sito, (2) le domande segnalano cosa non è chiaro, (3) il feedback positivo è social proof utilizzabile, (4) il sistema stesso è un segnale di cura e product thinking.
>
> **Obiettivo:** Un widget non invasivo che permette a chiunque di lasciare feedback. I messaggi finiscono in un sistema che Mattia può consultare. Bonus: un layer AI che risponde automaticamente alle domande semplici.
>
> **Valutazione AI responder:**
> Un chatbot AI che risponde in real-time alle domande sul sito/portfolio **è un differenziante forte** per un PM che si posiziona come "builder che usa AI come strumento". Dimostra:
> - Product thinking (hai costruito qualcosa di utile, non solo un chatbot per il gusto di farlo)
> - AI fluency pratica (non teoria — implementazione concreta con RAG/context)
> - Cura dell'esperienza utente (il visitatore ottiene risposte immediate)
>
> **Rischi:** Se il chatbot risponde male, l'effetto è peggio di non averlo. Serve un fallback chiaro ("Non so rispondere, ma Mattia riceverà la tua domanda"). Va implementato DOPO che il contenuto del sito è stabile (post-launch).
>
> **Raccomandazione:** Fase 1 = feedback form semplice (pre-launch). Fase 2 = AI responder (post-launch, quando il contenuto è stabile e può servire da knowledge base).

### US 24.1: Feedback widget — Fase 1 (pre-launch)
> Come visitatore, voglio poter segnalare un errore o lasciare un commento senza dover mandare un'email.

- [x] **T-24.1.1** (2026-03-29) `[INSIEME]` UX decisa: floating button basso-destro, modale con 3 campi (tipo radio, messaggio textarea, email opzionale). ✅
- [x] **T-24.1.2** (2026-03-29) `[INSIEME]` Backend deciso: Notion database "📬 Feedback selfrules.org" nel 2026 Hub. API route `/api/feedback` → Notion API. ✅
- [x] **T-24.1.3** (2026-03-29) `[CLAUDE-AUTONOMO]` `FeedbackWidget` implementato: floating button + modale accessibile, dark-mode, 0px border-radius, keyboard nav (Escape, focus trap), click outside to close. ✅
- [x] **T-24.1.4** (2026-03-29) `[CLAUDE-AUTONOMO]` API route `/api/feedback` → Notion API con validazione, env vars `NOTION_API_KEY` + `NOTION_FEEDBACK_DB_ID`. ✅
- [x] **T-24.1.5** (2026-03-29) `[CLAUDE-AUTONOMO]` Rate limiting in-memory: max 3 feedback per IP per ora, cleanup ogni 10 min. ✅
- [x] **T-24.1.6** (2026-03-29) `[CLAUDE-AUTONOMO]` Umami events: `feedback-open` (click trigger) + `feedback-submitted` con tipo. ✅
- [x] **T-24.1.7** (2026-03-29) `[CLAUDE-AUTONOMO]` Build OK, widget accessibile (keyboard, aria-modal, aria-pressed, labels, focus management). ✅

### US 24.2: AI Responder — Fase 2 (post-launch)
> Come visitatore con una domanda specifica ("Mattia ha esperienza con payments?"), voglio una risposta immediata basata sul contenuto del sito.

- [ ] **T-24.2.1** `[INSIEME]` Decidere architettura AI: (a) Claude API con context del sito (semplice, costoso per chiamata), (b) embeddings + vector search locale (più complesso, più economico), (c) Vercel AI SDK + Claude. Decidere limiti: quante domande gratis? Token budget?
- [ ] **T-24.2.2** `[INSIEME]` Definire il "system prompt" del responder: tono, limiti ("non sono Mattia, sono un assistente del sito"), fallback per domande fuori scope.
- [ ] **T-24.2.3** `[CLAUDE-AUTONOMO]` Implementare AI responder: input domanda → chiamata API → risposta in streaming nel widget. Con indicatore "AI-generated" chiaro.
- [ ] **T-24.2.4** `[CLAUDE-AUTONOMO]` Fallback: se la confidence è bassa o la domanda è fuori scope, mostrare "Non ho una risposta sicura — la tua domanda è stata inoltrata a Mattia" e salvare come feedback.
- [ ] **T-24.2.5** `[CLAUDE-AUTONOMO]` Caching: risposte a domande frequenti cachate per ridurre costi API.
- [ ] **T-24.2.6** `[CLAUDE-AUTONOMO]` Analytics: Umami event `ai-question-asked`, `ai-response-helpful` (thumbs up/down).
- [ ] **T-24.2.7** `[INSIEME]` Review: Mattia testa il responder con 10 domande realistiche da hiring manager. Tuning del prompt e del context.

---

## EPIC 25: Cookie Consent — Serve o non serve?
**Priorità: BASSA** | **Impatto: 2/10** | **Valore hiring manager: Nessuno diretto (ma compliance)**
**Data analisi: 2026-03-29** | **Fonte: Richiesta Mattia**

> **Analisi iniziale: probabilmente NON serve un cookie banner.**
>
> **Cookie attualmente in uso sul sito:**
> 1. `NEXT_LOCALE` — settato automaticamente da next-intl quando l'utente naviga. Cookie funzionale/tecnico per il routing i18n.
> 2. `preferred-locale` — settato dal LanguageToggle al click manuale dell'utente. Cookie funzionale che previene il geo-redirect dal sovrascrivere la scelta utente.
>
> **Cookie NON in uso:**
> - Nessun cookie di analytics (Umami è cookieless by design)
> - Nessun cookie di terze parti
> - Nessun cookie di profilazione o advertising
> - Nessun cookie di sessione (il sito è statico)
>
> **Normativa applicabile:**
> - **ePrivacy Directive (Art. 5.3):** I cookie "strettamente necessari" per fornire un servizio esplicitamente richiesto dall'utente sono **esenti** dal consenso. I cookie di preferenza lingua rientrano in questa esenzione — l'utente ha cliccato il toggle, il cookie ricorda la scelta.
> - **GDPR (Art. 6.1.f):** I cookie funzionali rientrano nel "legittimo interesse" e non richiedono consenso esplicito.
> - **Garante Privacy italiano:** Conferma l'esenzione per cookie tecnici/funzionali (Provvedimento 8 maggio 2014, aggiornato 2021).
>
> **Conclusione:** Un cookie banner sarebbe **controproducente** — aggiunge frizione UX per zero motivo legale. Tuttavia, è buona pratica avere una pagina Privacy/Cookie Policy che elenca i cookie usati.
>
> **Raccomandazione:**
> - ❌ Cookie banner: NON necessario
> - ✅ Privacy Policy page: consigliata (semplice, 1 pagina, lista cookie funzionali + Umami cookieless)
> - Può essere integrata nella pagina Contact o come pagina standalone `/privacy`

### US 25.1: Valutare e documentare la policy cookie
> Come proprietario del sito, voglio essere conforme alla normativa senza aggiungere frizione inutile.

- [ ] **T-25.1.1** `[INSIEME]` Decidere se aggiungere una pagina Privacy Policy standalone o sezione nel footer. Decidere il contenuto: lista cookie tecnici, nota su Umami cookieless, contatto per richieste GDPR.
- [ ] **T-25.1.2** `[CLAUDE-AUTONOMO]` Implementare la pagina/sezione Privacy Policy EN + IT.
- [ ] **T-25.1.3** `[CLAUDE-AUTONOMO]` Link nel footer a Privacy Policy.
- [ ] **T-25.1.4** `[CLAUDE-AUTONOMO]` Build OK, rendering verificato.

---

## EPIC 26: Umami Analytics Audit — Cosa tracciamo, cosa possiamo tracciare
**Priorità: MEDIA** | **Impatto: 5/10** | **Valore hiring manager: Indiretto (informazioni per ottimizzare il sito)**
**Data analisi: 2026-03-29** | **Fonte: Richiesta Mattia**

> **Setup attuale:**
> - Umami Cloud, script caricato via proxy `/api/umami/script.js` (bypass ad-blocker)
> - Website ID configurato via `NEXT_PUBLIC_UMAMI_ID` env var
> - `strategy="afterInteractive"` — non blocca il rendering
> - Umami è cookieless: traccia pageview e eventi senza cookie, GDPR compliant by design
>
> **Eventi custom attualmente tracciati (7):**
>
> | Evento | Dove | Cosa misura |
> |--------|------|-------------|
> | `contact-email` | Contact page + Contact section homepage | Click su email |
> | `contact-linkedin` | Contact page + Footer | Click su LinkedIn |
> | `contact-cv-download` | Contact page + Contact section + Footer | Download CV |
> | `external-github` | Footer | Click su GitHub |
> | `lab-casahunter-figma` | CasaHunter page | Click su prototipo Figma |
> | `cta-primary` | Page CTA component | Click CTA primaria |
> | `cta-secondary` | Page CTA component | Click CTA secondaria |
>
> **Pageview automatici (già tracciati da Umami senza configurazione):**
> - Tutte le pagine del sito (URL, referrer, browser, OS, device, country)
> - Umami traccia automaticamente pageview su ogni navigazione
>
> **Cosa MANCA e potremmo tracciare:**
>
> | Evento proposto | Valore | Effort |
> |-----------------|--------|--------|
> | `language-switch` (con from/to) | Capire quanti utenti switchano lingua e in che direzione | Basso — 1 riga nel LanguageToggle |
> | `geo-redirect-triggered` | Quanti utenti vengono redirectati dal geo-IP | Basso — 1 evento nel proxy (ma proxy è server-side, serve approccio diverso) |
> | `case-study-read` (con slug) | Quali case study vengono letti fino in fondo (scroll depth) | Medio — IntersectionObserver su ultimo paragrafo |
> | `note-read` (con slug) | Quali blog post vengono letti fino in fondo | Medio — stesso pattern del case study |
> | `outbound-link` (con URL) | Tutti i click su link esterni (non solo footer) | Basso — Umami ha `data-umami-event` automatico su `<a>` esterni se abilitato |
> | `scroll-depth-50` / `scroll-depth-100` | Quanto dell'homepage viene visto | Medio — IntersectionObserver su sezioni chiave |
> | `time-on-page` bucketed | Tempo medio sulle pagine chiave (case study, about) | Umami lo traccia già nativamente nelle pageview |
>
> **Priorità suggerita:** `language-switch` e `case-study-read` sono i più utili per la job search — capire se gli HM leggono i case study e in che lingua.

### US 26.1: Verificare che Umami sia collegato e funzionante
> Come Mattia, voglio conferma che Umami sta raccogliendo dati correttamente.

- [ ] **T-26.1.1** `[INSIEME]` Verificare su Umami Cloud dashboard che i dati arrivano: pageview recenti, eventi custom. Se non arrivano, debuggare.
- [ ] **T-26.1.2** `[CLAUDE-AUTONOMO]` Verificare che `NEXT_PUBLIC_UMAMI_ID` sia settato nell'env Vercel e che il proxy `/api/umami/script.js` funzioni (no 404, no CORS).

### US 26.2: Aggiungere eventi analytics mancanti
> Come Mattia, voglio capire il comportamento dei visitatori per ottimizzare il sito per la job search.

- [ ] **T-26.2.1** `[CLAUDE-AUTONOMO]` Aggiungere `language-switch` event nel LanguageToggle con proprietà `from` e `to`.
- [ ] **T-26.2.2** `[CLAUDE-AUTONOMO]` Aggiungere `case-study-read` event: IntersectionObserver sull'ultima sezione di ogni case study. Proprietà: slug del case study.
- [ ] **T-26.2.3** `[CLAUDE-AUTONOMO]` Aggiungere `note-read` event: stesso pattern per i blog post.
- [ ] **T-26.2.4** `[INSIEME]` Decidere se aggiungere `scroll-depth` sulla homepage e `outbound-link` tracking globale. Valutare se il valore giustifica il codice aggiuntivo.
- [ ] **T-26.2.5** `[CLAUDE-AUTONOMO]` Build OK, verificare che gli eventi appaiano nella dashboard Umami.

### US 26.3: Dashboard e interpretazione dati
> Come Mattia, voglio poter leggere i dati Umami e capire se il sito sta funzionando per la job search.

- [ ] **T-26.3.1** `[INSIEME]` Definire le "domande chiave" a cui i dati devono rispondere: Quanti HM visitano? Leggono i case study? Scaricano il CV? Da dove arrivano?
- [ ] **T-26.3.2** `[INSIEME]` Configurare viste/filtri nella dashboard Umami per rispondere a queste domande.
