# Audit Completo selfrules.org — Marzo 2026

> **Domanda guida:** "Sono un hiring manager. Mattia mi ha mandato la candidatura. Apro il suo sito. Questo sito mi aiuta a decidere di assumerlo? È un elemento differenziale rispetto agli altri candidati?"
>
> **Risposta breve:** Il sito è già sopra la media dei PM sul mercato. Ma non è ancora all'altezza di quello che Mattia è capace di comunicare. Con interventi mirati — non una riscrittura — può diventare il pezzo che chiude il deal.

---

## 1. EXECUTIVE SUMMARY

### Cosa funziona bene (e non va toccato)
- **Il positioning "Designer → Developer → PM" è chiaro e credibile.** È il differenziatore reale e il sito lo comunica fin dall'hero.
- **Il design è distintivo.** Dark mode, border-radius 0px, terminal prompt, Space Grotesk + JetBrains Mono. Non è un template — si riconosce. Un hiring manager che apre 20 portfolio non confonderà questo con gli altri.
- **Lo stack tecnico è la prova vivente della tesi.** Next.js 16, Tailwind v4, i18n bilingue, MDX, deploy su Vercel. Un PM che dice "I prototype in code" e ti mostra un sito costruito con lo stack più moderno disponibile nel 2026 — è coerente.
- **I case study hanno numeri reali.** 99.19% success rate, -25% incidents, -12% processing times. Non sono generici.
- **I blog post (Notes) mostrano pensiero PM autentico.** "The Meeting Where Everyone Says Yes" e "Why Metrics Lie Without Context" sono contenuti che un hiring manager leggerebbe e penserebbe "questo ragiona come noi".

### Cosa non funziona (e costa opportunità)
- **Il sito non risponde alla domanda #1 dell'hiring manager: "Cosa può fare per la MIA azienda?"** Racconta chi è Mattia, ma non crea un ponte verso il problema del visitatore.
- **I case study sono buoni ma incompleti come strumento di vendita.** Mancano visual, manca la struttura "situazione → insight → azione → risultato" resa scannable, manca il framing di trasferibilità ("questo approccio funziona anche nel tuo contesto").
- **La pagina Lab è un'opportunità sprecata.** CasaHunter è il progetto più forte (AI + scraping + scoring a 3 passaggi) ma è descritto in 3 righe. Non c'è demo, non c'è screenshot, non c'è link al repo.
- **3 blog post non bastano per costruire autorità.** Servono almeno 6-8 per coprire i temi chiave e dare l'impressione di un pensatore attivo.
- **Non c'è nessun "momento wow".** Il sito è solido e professionale, ma nel 2026 serve qualcosa che faccia fermare il visitatore. Un elemento interattivo, un case study con scroll storytelling, un dato che si anima in modo inaspettato.
- **Il footer "v1.0.0 · 10 commits" comunica "l'ho fatto in fretta".** Un hiring manager tecnico lo nota.

---

## 2. ANALISI PER DIMENSIONE

### 2.1 Design & Visual Identity

**Voto: 7.5/10**

**Punti di forza:**
- Palette coerente (#0A0A0B, #F5F5F0, #E8A838) — il warm amber come accent funziona
- Border-radius 0px ovunque è una scelta consapevole che comunica "precision engineering"
- Typography hierarchy è chiara: Space Grotesk per headings, Inter per body, JetBrains Mono per labels/code
- Il terminal prompt nell'hero è un signature element memorabile
- Spacing generoso, non soffoca

**Problemi:**
- **Nessuna immagine in tutto il sito.** Zero. Nessuno screenshot di prodotto, nessun diagramma di architettura, nessuna foto. Solo testo. Per un PM che dice "prototypes, not slides" — dov'è il visual del prototipo?
- **Le card (case study, progetti, metriche) sono tutte identiche.** Stesso layout, stesso ritmo. Il sito diventa prevedibile dopo la terza sezione.
- **La homepage è lunga ma monotona.** 6 sezioni stacked verticalmente, tutte text-based, stesso pattern. Manca varietà visiva.
- **Il counter animation sulle metriche è l'unico elemento dinamico.** Nel 2026, con tool come Framer, Webflow, e portfolio PM con micro-interazioni ovunque, questo è il minimo.
- **Il color accent (#E8A838) è usato solo per numeri e hover.** Potrebbe fare molto di più per guidare l'occhio.

**Raccomandazioni:**
1. Aggiungere almeno 1 visual per case study (screenshot prodotto, flow diagram, o before/after)
2. Variare il layout delle sezioni homepage (es. una sezione con layout asimmetrico, una con visual)
3. Aggiungere un elemento interattivo "hero" che dimostri capacità tecnica (es. un mini-tool, un data viz)
4. Considerare un OG image personalizzato per ogni pagina (attualmente 1 solo og-image.png per tutto)

### 2.2 Copy & Messaging

**Voto: 7/10**

**Punti di forza:**
- Il tono è quello giusto: diretto, specifico, senza corporate-speak
- La headline "Design, code, and product management in the same head" è chiara
- La frase signature "The problem is never the one from the first meeting" è memorabile
- I numeri sono presenti e specifici (99.19%, non "99%+")
- Il copy dei blog post è eccellente — potrebbe essere pubblicato su un blog PM affermato

**Problemi:**
- **L'hero subtitle è troppo lungo e troppo denso.** "B2B SaaS · Payments · Platform. 10+ years designing interfaces, writing production code, and managing products. The advantage: when design, engineering, and business don't understand each other, no translator needed." — Sono 3 messaggi in uno. Un hiring manager che fa skim non li processa tutti.
- **"How I Work" è il titolo meno interessante possibile.** Ogni PM ha una sezione "come lavoro". Non differenzia.
- **Il copy dell'About page ripete troppo della homepage.** Se un hiring manager legge entrambe, nota la ridondanza. L'About dovrebbe andare più in profondità, non ripetere.
- **I CTA sono generici.** "Get in touch" e "See the work" sono le CTA di default di ogni portfolio. Non creano urgenza o curiosità.
- **La sezione "Numbers, Not Words" elenca metriche senza narrazione.** Numeri senza contesto sono esattamente quello che il blog post "Why Metrics Lie Without Context" critica. C'è un'ironia involontaria.
- **"What I'm Doing Now" è debole.** "Payments and platform at international scale [ACTIVE]" non dice niente di nuovo. Questa sezione dovrebbe mostrare momentum e direzione futura.
- **Il framing "Let's talk" per il contatto è passivo.** "Let's talk" implica parità. Un hiring manager non vuole "parlare" — vuole capire se questo candidato risolve il suo problema.

**Raccomandazioni:**
1. Riscrivere l'hero subtitle in 2 righe max, una proposta di valore chiara
2. Rinominare "How I Work" in qualcosa di specifico (es. "Three languages, one product" o "What 10 years of building taught me")
3. Aggiungere una micro-narrazione a ogni metrica (1 frase di contesto)
4. Riscrivere la sezione "Now" per mostrare traiettoria e ambizione, non solo stato attuale
5. Differenziare il copy About dalla Homepage — l'About è per chi vuole la storia completa
6. Sostituire i CTA generici con CTA specifici per audience (es. "Read how I fixed a payment crisis" vs "See the work")

### 2.3 Case Study

**Voto: 7/10**

**Punti di forza:**
- **Payments Rescue è un case study forte.** Problema reale, approccio strutturato (triage, prioritizzazione, scope discipline), numeri verificabili. Un hiring manager Payments lo legge e capisce che Mattia ha gestito complessità reale.
- **La struttura Context → Challenge → Approach → Results → Learnings è corretta.**
- **I "What I Learned" sono autentici**, non frasi fatte. "Verify that someone actually read the API documentation" è il tipo di insight che fa annuire un engineering manager.
- **Il Cashless System mostra capacità strategica**: kill a product, partner evaluation, co-development. È un case study da Senior PM.

**Problemi:**
- **Solo 2 case study.** Per un PM con 10+ anni di esperienza, 2 sono pochi. Un hiring manager che vuole capire la breadth non ha abbastanza materiale.
- **Manca il case study LeadsBridge.** Il -35% setup time è menzionato ovunque ma non ha una pagina dedicata. È il caso B2B SaaS più puro — e molte aziende target sono SaaS.
- **Nessun visual in nessun case study.** Nessun diagramma di flusso, nessuno screenshot, nessun before/after. Per un PM che dice "prototypes, not slides" — lo show-don't-tell manca.
- **Il Cashless case study non ha metriche finali.** "Full metrics available upon production launch" comunica "non è ancora finito". Un hiring manager potrebbe leggere "non ha ancora delivery end-to-end".
- **Manca la "trasferibilità".** I case study raccontano cosa è successo in QubicaAMF, ma non aiutano l'hiring manager a pensare "questo approccio funzionerebbe anche da noi". Manca il ponte.
- **I case study non sono scannable.** Wall of text. Un hiring manager senior ha 3-5 minuti per pagina. Servono callout, pull quotes, metriche in evidenza.

**Raccomandazioni:**
1. Aggiungere il case study LeadsBridge (core flow redesign, -35% setup time) — è il caso SaaS puro che manca
2. Aggiungere almeno 1 visual per case study (flow diagram, architecture sketch, screenshot)
3. Rendere i case study scannable: pull quotes per i key insights, metriche in evidenza con box accent
4. Aggiungere una sezione "Pattern" o "When to use this approach" alla fine di ogni case study per la trasferibilità
5. Per il Cashless: se non ci sono metriche finali, framarlo come "strategic product decision" piuttosto che "delivery case"

### 2.4 Lab / Side Projects

**Voto: 5.5/10**

**Punti di forza:**
- CasaHunter è un progetto genuinamente interessante che dimostra AI product thinking (3-pass scoring, budget optimization, feedback loop)
- La linea "Same thinking, applied to my own problems" è un buon frame
- Il tech stack è impressionante e coerente con il positioning tecnico

**Problemi:**
- **CasaHunter è descritto in 3 righe.** È il progetto più forte del portfolio e viene trattato come un side note. Il "three-pass scoring" è un pattern architetturale brillante — merita una pagina intera.
- **Nessun link a demo, repo, o screenshot.** Un hiring manager tecnico vorrebbe vedere il codice o almeno l'interfaccia.
- **MoneyMind è "in development" senza niente da mostrare.** Se non c'è niente di tangibile, non metterlo. Comunica "inizio le cose ma non le finisco".
- **OpenClaw è "experiment" con zero contesto.** Stessa cosa — se è solo un'idea, non è un proof point.
- **La pagina non ha personalità.** È una lista. Dovrebbe essere un mini-portfolio di product thinking applicato a problemi personali.

**Raccomandazioni:**
1. Espandere CasaHunter in un mini-case study (problema → approccio → architettura → risultati: 880+ listings analizzate, tempo risparmiato, accuracy dello scoring)
2. Aggiungere link a GitHub repo e/o screenshot dell'interfaccia
3. Rimuovere MoneyMind e OpenClaw fino a quando non hanno qualcosa di tangibile da mostrare
4. Considerare di aggiungere CasaHunter come "Case Study #3" nella pagina Work — è più forte di molti case study professionali

### 2.5 Notes (Blog)

**Voto: 7.5/10**

**Punti di forza:**
- I 3 post sono di alta qualità. Contenuto originale, opinioni forti supportate da esempi, struttura chiara.
- "Why I Prototype in Code" è il post manifesto perfetto — collega il positioning del sito alla pratica quotidiana
- "The Meeting Where Everyone Says Yes" è relatable per qualsiasi PM/EM — un buon contenuto virale
- La voce è consistente con il resto del sito

**Problemi:**
- **3 post non costruiscono autorità.** Sembrano "ho scritto 3 post per riempire la sezione". Servono almeno 6-8 per sembrare un pensatore attivo.
- **Tutti e 3 i post sono dello stesso mese (marzo 2026).** Comunica "ha scritto tutto in una settimana". Se fossero distribuiti nel tempo sembrerebbe più organico.
- **Mancano post su temi chiave del positioning.** Non c'è un post su Payments, nessuno su Platform/Integration, nessuno su remote/cross-country team management. Sono gap evidenti per i ruoli target.
- **Nessun post ha visual.** Nemmeno un diagramma ASCII. Un post su "Why Metrics Lie" con un esempio di dashboard sarebbe 10x più efficace.
- **Non c'è social proof.** Nessuna condivisione, nessun commento, nessuna nota "pubblicato anche su [X]". I post vivono in isolamento.

**Raccomandazioni:**
1. Scrivere almeno 3-5 post aggiuntivi su: payments complexity, platform thinking, remote team leadership, AI-assisted workflows, decision frameworks
2. Distribuire le date di pubblicazione in modo più naturale (retrodatare è ok per i post originali, poi pubblicare settimanalmente)
3. Cross-postare su LinkedIn/Medium per generare traffico e social proof
4. Aggiungere almeno 1 visual per post (diagramma, screenshot, tabella)
5. Aggiungere "reading time" visibile e tag/categoria

### 2.6 SEO & Technical

**Voto: 8/10**

**Punti di forza:**
- generateMetadata() su tutte le pagine con hreflang alternates
- JSON-LD strutturato (Person, BreadcrumbList, Article)
- Sitemap + robots.txt generati dinamicamente
- i18n completo EN/IT con next-intl 4.8.x
- Static rendering su Vercel CDN — performance eccellente
- Zero third-party bloat (no Framer Motion, no analytics pesanti)
- Cookieless analytics con Umami — no consent banner

**Problemi:**
- **Un solo OG image per tutto il sito.** Ogni pagina dovrebbe avere un OG image specifico per massimizzare CTR quando condiviso su LinkedIn/social.
- **Le meta description non sono ottimizzate per CTR.** Sono descrittive ma non compelling.
- **Non c'è un canonical domain impostato.** selfrules-website.vercel.app vs selfrules.org — quando il dominio finale sarà live, serve redirect + canonical.
- **/dev/components è esposto in produzione.** Pagina di development accessibile pubblicamente.
- **Il text-tertiary (#5A5A5E) fallisce WCAG AA.** Contrast ratio ~2.4:1, insufficiente anche per testo decorativo di grandi dimensioni.

**Raccomandazioni:**
1. Generare OG images dinamici per ogni pagina (Next.js ha @vercel/og built-in)
2. Riscrivere meta descriptions per CTR (azione + beneficio + curiosità)
3. Rimuovere /dev/components dal build di produzione
4. Fix contrast ratio su text-tertiary o limitarne l'uso a elementi puramente decorativi
5. Configurare canonical URL su selfrules.org prima del go-live

### 2.7 Architettura & Codice

**Voto: 8.5/10**

**Punti di forza:**
- Stack moderno e coerente (Next.js 16.2, React 19, Tailwind v4 CSS-first)
- 30 componenti ben organizzati in 5 categorie
- Design tokens in CSS custom properties — maintainability eccellente
- Accessibilità curata (focus-visible, skip-to-content, prefers-reduced-motion, focus trap)
- i18n con 250+ keys per lingua, namespace-based

**Problemi:**
- **SectionHeader duplicato** in due location (layout/ e sections/)
- **No testing** — nessun test unitario o e2e visibile
- **Blog post hardcoded** come pagine TSX, non come file MDX separati — meno maintainable per pubblicazione frequente
- **Build info "10 commits"** — è un dettaglio che un hiring manager tecnico nota e interpreta negativamente

**Raccomandazioni:**
1. Consolidare SectionHeader in una sola location
2. Migrare blog post a file .mdx separati per facilitare la pubblicazione frequente
3. Rimuovere o rendere dinamico il conteggio commit dal footer
4. Aggiungere almeno test e2e basilari (Playwright) per le pagine principali — dimostra engineering rigor

---

## 3. PROSPETTIVA HIRING MANAGER

### Il viaggio di un hiring manager

**Momento 1: Apre il sito (0-5 secondi)**
Il design colpisce. Dark mode, terminal prompt, 0px borders — non è il solito portfolio. ✅ Primo impatto positivo.

**Momento 2: Legge l'hero (5-15 secondi)**
"Senior Technical Product Manager. Design, code, and product management in the same head." — Chiaro chi è. Ma il subtitle è troppo lungo, perde attenzione. ⚠️ Messaggio diluito.

**Momento 3: Scrolla "How I Work" (15-30 secondi)**
Tre pillar. Numeri specifici. "Payment system in crisis, 44 open problems" — incuriosisce. Ma è tutto testo, non c'è niente che lo porti a cliccare. ⚠️ Momentum perso.

**Momento 4: Timeline (30-60 secondi)**
Il percorso Designer → Developer → Product Manager è la parte più convincente. Capisce il "perché è diverso". ✅ Differenziatore comunicato.

**Momento 5: Metriche (60-90 secondi)**
Numeri in evidenza. Ma senza contesto i numeri sono noise (ironia: è esattamente quello che il blog post critica). ⚠️ Occasione mancata.

**Momento 6: Decide se approfondire o chiudere**
Se è arrivato qui, probabilmente clicca su un case study. Se non è arrivato — il sito non ha fatto abbastanza nei primi 30 secondi per trattenerlo. ❌ Manca un hook forte nella prima viewport.

### Cosa direbbe un hiring manager dopo aver navigato il sito

**Positivo:**
- "Ok, questo non è il PM tipico. Ha costruito cose davvero."
- "Il case study payments è serio — capisce la complessità operativa."
- "Il blog mostra che pensa in modo strutturato. I post non sono fuffa."
- "Il fatto che abbia costruito il sito da zero con Next.js 16 è coerente con il positioning."

**Negativo:**
- "Solo 2 case study in 10+ anni? Dov'è il resto?"
- "Nessuno screenshot, nessun visual. Mi aspettavo di vedere del product work."
- "I side project sono elencati ma non posso toccare niente. Dov'è la demo?"
- "3 blog post tutti nello stesso mese... ha iniziato ieri?"
- "Il sito è solido ma non mi ha sorpreso. Non c'è quel momento in cui dico 'wow, questo è diverso'."

### Confronto con il mercato 2026

Nel 2026, il mercato PM è saturo. I candidati forti hanno:
- Portfolio con case study dettagliati e visual
- Blog attivi con cadenza regolare
- Side project con demo live e repo pubblici
- Contenuto su LinkedIn/Medium/Substack con social proof
- Almeno un "signature piece" (un framework, un tool, un talk)

Mattia ha le fondamenta per tutto questo. Il sito deve solo esprimerle meglio.

---

## 4. IL "MOMENTO WOW" CHE MANCA

Questo è il gap più critico. Il sito è professionale ma non memorabile. Nel 2026 "professionale" è la baseline — serve qualcosa che faccia dire all'hiring manager "non ho mai visto un portfolio così".

### Opzioni concrete per il "wow factor":

**Opzione A: Interactive Case Study**
Trasformare il Payments Rescue in uno scroll-driven storytelling. Il visitatore scrolla e vede: il problema che si manifesta (animazione grafico che scende), il triage (44 → 12 → 4, visualmente), la risoluzione (grafico che risale). Nessun testo wall-of-text — il case study si "vive".

**Opzione B: CasaHunter Live Demo**
Embeddare una versione semplificata di CasaHunter nel Lab. Il visitatore inserisce criteri → vede il three-pass scoring in azione → capisce il product thinking. È la prova vivente che "I prototype in code" non è solo una tagline.

**Opzione C: Decision Framework Interattivo**
Un tool nel sito: "How I'd approach your product problem". Il visitatore seleziona: tipo di problema (growth, crisis, 0-to-1), contesto (startup, scale-up, enterprise), constraint (timeline, team size). Il sito genera un mini-framework di approccio basato sui case study reali. È product thinking reso tangibile.

**Opzione D: AI-powered "Ask Mattia"**
Un chatbot che risponde con il knowledge base del sito. "Come gestiresti una payment crisis?" → risposta basata sul case study reale. Dimostra AI capability senza posizionarsi come "AI PM". Un hiring manager lo prova per curiosità e finisce per leggere tutto.

**Raccomandazione:** Opzione A (Interactive Case Study) come primo investimento — è il più alto ROI tra effort e impatto. Opzione D come secondo investimento — è il differenziatore nel 2026.

---

## 5. COERENZA NARRATIVA (Sito ↔ LinkedIn ↔ Job Tracker)

### LinkedIn ↔ Sito
- **Headline LinkedIn:** "Senior Technical Product Manager | B2B SaaS · Payments · Platform | I prototype in code, design the UX, and ship"
- **Hero sito:** "Senior Technical Product Manager. Design, code, and product management in the same head."
- **Valutazione:** Coerenti ma non identici. La versione LinkedIn è più "tagline", il sito più "statement". ✅ Ok — canali diversi, toni diversi.

### Job Tracker ↔ Sito
- Il tracker Notion mostra target su Fintech/Payments, B2B SaaS, AI/ML Products, Platform/Integration
- Il sito copre bene Payments e Platform, ma **AI/ML è quasi assente**. Se le aziende target includono AI products, il sito non supporta quel positioning.
- **Manca un case study o post che mostri AI product thinking** (CasaHunter lo fa ma non è framato così)

### Raccomandazione
- Reframare CasaHunter come "AI Product Thinking" case study — il three-pass scoring è un pattern di AI product design
- Scrivere un blog post su "When (and when not) to use AI in product" basato sull'esperienza CasaHunter
- Aggiungere nella sezione "Now" qualcosa su AI exploration senza posizionarsi come "AI PM"

---

## 6. ROADMAP DI MIGLIORAMENTO QUOTIDIANO

### Settimana 1: Quick Wins (Impatto alto, effort basso)
- [ ] **Giorno 1-2:** Riscrivere hero subtitle (2 righe max, proposta di valore chiara)
- [ ] **Giorno 2-3:** Aggiungere micro-contesto a ogni metrica nella sezione "Numbers, Not Words"
- [ ] **Giorno 3-4:** Rimuovere /dev/components da produzione, rimuovere conteggio commit dal footer
- [ ] **Giorno 4-5:** Fix contrast ratio text-tertiary (#5A5A5E → almeno #7A7A7E per AA compliance)
- [ ] **Giorno 5:** Rimuovere MoneyMind e OpenClaw dal Lab (fino a quando non hanno deliverable)

### Settimana 2: Content Expansion
- [ ] **Giorno 1-3:** Scrivere e pubblicare case study LeadsBridge (core flow redesign, -35% setup time)
- [ ] **Giorno 3-5:** Espandere CasaHunter da card a mini-case study con architettura 3-pass scoring
- [ ] **Giorno 5:** Creare OG images specifici per ogni pagina principale

### Settimana 3: Blog Authority
- [ ] **Giorno 1-2:** Scrivere post "When AI Makes Sense in Product (And When It Doesn't)" — basato su CasaHunter
- [ ] **Giorno 3-4:** Scrivere post "Managing Payments at Scale: What PM School Doesn't Teach"
- [ ] **Giorno 5:** Scrivere post "Remote Product Management Across 5 Countries"
- [ ] **Cross-post** tutti i post su LinkedIn

### Settimana 4: Visual & Scanability
- [ ] **Giorno 1-3:** Aggiungere almeno 1 visual per case study (flow diagram, architecture sketch)
- [ ] **Giorno 3-4:** Rendere case study scannable (pull quotes, metriche in box accent, sezioni collapsible)
- [ ] **Giorno 5:** Aggiungere reading time e tag ai blog post

### Settimana 5-6: Il Momento Wow
- [ ] Progettare e implementare l'Interactive Case Study (Payments Rescue scroll-driven)
- [ ] Oppure: implementare il Decision Framework interattivo
- [ ] Testing cross-browser e mobile

### Settimana 7-8: Polish & Go-Live
- [ ] Migrazione su dominio selfrules.org con redirect e canonical
- [ ] Performance audit (Lighthouse 95+)
- [ ] Accessibility audit finale
- [ ] Testing bilingue completo EN/IT
- [ ] Cross-post blog su LinkedIn, setup cadenza settimanale

### Ongoing (post go-live, automatizzabile)
- [ ] 1 blog post/settimana (Claude Code può draftare, Mattia rivede e pubblica)
- [ ] Aggiornamento sezione "Now" mensile
- [ ] Nuovi case study quando disponibili (es. risultati Cashless pilot)
- [ ] A/B test CTA e hero copy basato su analytics Umami
- [ ] Monitoring performance e Core Web Vitals

---

## 7. PRIORITÀ ASSOLUTE (Se hai tempo per 3 cose sole)

1. **Aggiungi il case study LeadsBridge.** 2 case study in 10 anni è il red flag più grande. 3 cambia la percezione.

2. **Espandi CasaHunter come AI product thinking showcase.** È il progetto che collega "PM tecnico" con "sa usare AI in modo intelligente" — senza posizionarsi come "AI PM". Demo o screenshot obbligatori.

3. **Crea il "momento wow" interattivo.** Un solo elemento — ma che faccia dire all'hiring manager "questo è diverso da tutti gli altri portfolio che ho visto oggi".

---

## 8. NOTA FINALE

Mattia, il sito è già meglio dell'80% dei portfolio PM che un hiring manager vede. Il design è riconoscibile, il positioning è chiaro, i case study hanno sostanza. Non è un sito da buttare — è un sito da affilare.

Il gap non è nella qualità di base. Il gap è tra "questo è un buon portfolio" e "questo è il portfolio che mi ha convinto ad assumere questa persona". Quel gap si chiude con: più profondità nei case study, più visual, più contenuto blog, e un elemento che sorprenda.

Il fatto che tu stia costruendo il sito da zero con Next.js 16 è già un differenziatore. Ora fallo parlare più forte.
