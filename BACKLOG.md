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

## EPIC 12: Clarity Rewrite — Il sito che capisce chiunque
**Priorità: CRITICA** | **Impatto: 10/10** | **Valore hiring manager: Massimo**

> **Fonte:** SITE-AUDIT-CLARITY.md (2026-03-26). Il sito attuale fallisce l'80% degli hiring manager. Il pattern CasaHunter (problema → soluzione → risultato) funziona. Il resto del sito parla a specialisti. Questa epic riscrive il sito perché chiunque — recruiter, VP of Product, TPM da un altro verticale — capisca cosa fa Mattia e perché assumerlo.
>
> **Principio guida:** Se un bambino non può spiegare cosa fa Mattia dopo aver letto la pagina, la pagina va riscritta.

### US 12.1: Homepage — Riscrivere il subtitle per outcome, non dominio (TIER 1)
> Come hiring manager non-specialist, in 5 secondi devo capire cosa fa Mattia per le aziende — non in quale dominio ha lavorato.

- [ ] **T-12.1.1** `[INSIEME]` Riscrivere l'hero subtitle: da jargon di dominio a outcome universale. Proposta audit: "I find what customers actually need — then design and ship the product that solves it." Mattia valida il tono e il messaggio.
- [ ] **T-12.1.2** `[CLAUDE-AUTONOMO]` Implementare il nuovo subtitle EN + IT in en.json / it.json
- [ ] **T-12.1.3** `[CLAUDE-AUTONOMO]` Verificare rendering su homepage, build OK

### US 12.2: Homepage — Riscrivere "Three Languages, One Product" (TIER 1)
> Come hiring manager, "The problem is never the one from the first meeting" è una frase memorabile ma non mi dice niente. Devo capire il VALORE del ruolo ibrido design/code/PM.

- [ ] **T-12.2.1** `[INSIEME]` Riscrivere i 3 pillar della sezione "Three Languages": spiegare il valore dell'ibrido con esempi concreti, non tagline clever. Ogni pillar deve rispondere a "perché questo è un vantaggio per la mia azienda?"
- [ ] **T-12.2.2** `[CLAUDE-AUTONOMO]` Implementare il nuovo copy EN + IT
- [ ] **T-12.2.3** `[CLAUDE-AUTONOMO]` Build OK, verificare che la sezione funzioni visivamente con il nuovo copy (potrebbe essere più lungo)

### US 12.3: Homepage — Riscrivere le case study preview cards (TIER 1)
> Come hiring manager, le preview devono comunicare risultato e significato — non contesto tecnico che richiede domain knowledge.

- [ ] **T-12.3.1** `[CLAUDE-AUTONOMO]` Riscrivere la preview card Payments Rescue: aprire con l'outcome ("Customer churn was accelerating because of payment failures..."), non con "Hundreds of centers across 5 countries"
- [ ] **T-12.3.2** `[CLAUDE-AUTONOMO]` Riscrivere la preview card LeadsBridge: aprire con il problema utente ("Most customers wanted to use the platform but gave up during setup..."), non con jargon SaaS
- [ ] **T-12.3.3** `[CLAUDE-AUTONOMO]` Riscrivere la preview card Cashless System: chiarire cosa significa "cashless integration" per un non-specialist
- [ ] **T-12.3.4** `[CLAUDE-AUTONOMO]` Aggiornare en.json + it.json con le nuove preview
- [ ] **T-12.3.5** `[CLAUDE-AUTONOMO]` Build OK, verificare rendering cards

### US 12.4: Homepage — Aggiungere sezione "What I Actually Do" (TIER 1)
> Come hiring manager non-specialist, dopo l'hero devo trovare UNA frase chiara che traduca le competenze di Mattia in valore per la mia azienda.

- [ ] **T-12.4.1** `[INSIEME]` Scrivere la sezione "What I Actually Do": 1 frase chiara + 1 paragrafo di contesto. Proposta audit: "I investigate what customers actually need (instead of what they ask for), design the solution (so it's intuitive), and ship it (so it's reliable)." Mattia valida.
- [ ] **T-12.4.2** `[CLAUDE-AUTONOMO]` Implementare la nuova sezione nel layout homepage, posizionata subito dopo l'hero
- [ ] **T-12.4.3** `[CLAUDE-AUTONOMO]` Copy EN + IT, styling coerente con design system
- [ ] **T-12.4.4** `[CLAUDE-AUTONOMO]` Build OK, verificare posizionamento e responsive

### US 12.5: Homepage — Contestualizzare le metriche per non-specialist (TIER 1)
> Come hiring manager, "99%+ uptime" senza "di cosa?" mi fa pensare SRE, non PM. Ogni metrica deve avere il contesto "di cosa" e "per chi".

- [ ] **T-12.5.1** `[CLAUDE-AUTONOMO]` Riscrivere le 6 metriche homepage: aggiungere "di cosa?" e "perché conta?" — es. "99%+ uptime" → "99%+ uptime on payment systems serving 116 entertainment centers across 5 countries"
- [ ] **T-12.5.2** `[CLAUDE-AUTONOMO]` Aggiornare en.json + it.json
- [ ] **T-12.5.3** `[CLAUDE-AUTONOMO]` Verificare che le card metriche reggano il copy più lungo (responsive check)

---

## EPIC 13: Case Study Reframe — Il pattern CasaHunter ovunque
**Priorità: ALTA** | **Impatto: 9/10** | **Valore hiring manager: Alto**

> **Fonte:** SITE-AUDIT-CLARITY.md, TIER 2. CasaHunter funziona perché usa "outcome language": problema (1 frase) → soluzione (1 frase) → risultato (1 frase). I case study Payments e LeadsBridge usano "technical language": 3 paragrafi di contesto aziendale prima del problema. Questa epic applica il pattern CasaHunter a tutti i case study.

### US 13.1: Payments Rescue — Riscrivere l'apertura con il pattern CasaHunter
> Come hiring manager non-payments, devo capire il problema in 1 frase, la soluzione in 1 frase, e il risultato in 1 frase — PRIMA di entrare nel dettaglio tecnico.

- [ ] **T-13.1.1** `[INSIEME]` Riscrivere l'apertura Payments Rescue: 3 frasi CasaHunter-style (problema → soluzione → risultato), poi il dettaglio per chi vuole approfondire. Mattia valida il framing.
- [ ] **T-13.1.2** `[CLAUDE-AUTONOMO]` Tradurre il jargon tecnico nel case study: ogni termine di dominio (payments, split payments, square integration) deve avere una traduzione plain-English nella frase successiva
- [ ] **T-13.1.3** `[CLAUDE-AUTONOMO]` Spostare la sezione "What I Learned" in alto (callout visivo) — il takeaway più prezioso non deve essere in fondo alla pagina
- [ ] **T-13.1.4** `[CLAUDE-AUTONOMO]` Aggiornare en.json + it.json
- [ ] **T-13.1.5** `[CLAUDE-AUTONOMO]` Build OK

### US 13.2: LeadsBridge — Riscrivere l'apertura con il pattern CasaHunter
> Come mobile product director senza esperienza SaaS integration, devo capire perché "rimuovere feature" è controintuitivo e significativo.

- [ ] **T-13.2.1** `[INSIEME]` Riscrivere l'apertura LeadsBridge: 3 frasi CasaHunter-style. Mattia valida.
- [ ] **T-13.2.2** `[CLAUDE-AUTONOMO]` Tradurre jargon: "bridge creation flow", "field mapping", "connectors" → plain English con analogie comprensibili
- [ ] **T-13.2.3** `[CLAUDE-AUTONOMO]` Spostare "What I Learned" in alto come callout
- [ ] **T-13.2.4** `[CLAUDE-AUTONOMO]` Aggiornare en.json + it.json
- [ ] **T-13.2.5** `[CLAUDE-AUTONOMO]` Build OK

### US 13.3: Cashless System — Riscrivere l'apertura con il pattern CasaHunter
> Come hiring manager, "5 months, zero to live demo" non dice nulla se non so cosa significa "cashless integration" e perché è difficile.

- [ ] **T-13.3.1** `[INSIEME]` Riscrivere l'apertura Cashless: chiarire il problema (3 payment provider in competizione, serve una strategia prodotto unificata), la soluzione (discovery reale, non assumptions), il risultato. Mattia valida.
- [ ] **T-13.3.2** `[CLAUDE-AUTONOMO]` Tradurre jargon specifico del dominio cashless/payments
- [ ] **T-13.3.3** `[CLAUDE-AUTONOMO]` Spostare "What I Learned" in alto
- [ ] **T-13.3.4** `[CLAUDE-AUTONOMO]` Aggiornare en.json + it.json
- [ ] **T-13.3.5** `[CLAUDE-AUTONOMO]` Build OK

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

### ✅ COMPLETATI
- [x] **EPIC 12** — Clarity Rewrite Homepage (2026-03-26, commit f61fe74)
- [x] **EPIC 13** — Case Study Reframe TL;DR + KeyInsight (2026-03-26, commit 732b29b)
- [x] **EPIC 16** — Micro-copy & i18n Consistency (2026-03-27, commit e0b3981)
- [x] **EPIC 14** — Blog Clarity preview text (2026-03-27, commit 4d71bc8)
- [x] **EPIC 15** — About Page & Polish (2026-03-27, commits 837379a + 1057ff7 + 813cddd)
- [x] **Volante** — Date blog post allineate a Jan–Mar 2026 (2026-03-27, commit f951bed)

### Task aperti — ordinati per impatto sull'obiettivo

**ALTA PRIORITÀ — Copy & contenuto (avvicinano direttamente l'HM)**

`[INSIEME]`
1. **T-12.1.1**: Riscrivere hero subtitle (da jargon a outcome universale)
2. **T-12.2.1**: Riscrivere i 3 pillar "Three Languages" con esempi concreti
3. **T-12.4.1**: Scrivere sezione "What I Actually Do" per homepage
4. **T-13.1.1 / T-13.2.1 / T-13.3.1**: Riscrivere aperture 3 case study (CasaHunter-style)

`[CLAUDE-AUTONOMO]` (dopo approvazione copy INSIEME)
5. **T-12.1.2–3**: Implementare nuovo subtitle
6. **T-12.2.2–3**: Implementare nuovi pillar
7. **T-12.3.1–5**: Riscrivere preview cards case study
8. **T-12.4.2–4**: Implementare "What I Actually Do"
9. **T-12.5.1–3**: Contestualizzare metriche homepage
10. **T-13.1.2–5 / T-13.2.2–5 / T-13.3.2–5**: Tradurre jargon + spostare "Learned" in alto

**MEDIA PRIORITÀ — Visual & polish (rafforzano la credibilità)**

`[INSIEME]`
11. **T-1.2.6**: 1 visual per case study (diagramma/flow)
12. **T-5.1.1**: Storyboard interactive case study Payments (scroll-driven)

`[CLAUDE-AUTONOMO]`
13. **T-5.1.2–5**: Implementare animazioni scroll-driven
14. **T-7.3.1–2**: Visual nei blog post
15. **T-7.2.3**: Test OG images su LinkedIn/Twitter
16. **T-8.3.1**: Lighthouse audit
17. **T-8.3.3**: Test accessibilità axe-core

**BASSA PRIORITÀ — Infra & automazione (post-lancio)**

`[INSIEME]`
18. **T-4.3.3**: Cadenza editoriale blog
19. **T-5.2.1**: Decisione chatbot "Ask Mattia"
20. **T-10.2.1**: Definire scheduled tasks

`[CLAUDE-AUTONOMO]`
21. **T-10.1.1–3**: Blog publishing pipeline MDX
22. **T-10.3.2–3**: Analytics events + ottimizzazione

`[MATTIA-REQUIRED]`
23. **T-4.1.8**: Revisione 5 blog post prima di merge
24. **T-4.3.1**: Cross-postare blog su LinkedIn
25. **T-8.2.4**: Configurazione dominio selfrules.org (posticipato a MVP pronto)
