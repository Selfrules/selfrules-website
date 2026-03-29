# Approach — selfrules.org

**URL:** /approach (EN) · /it/approach (IT)
**Stato:** BOZZA v1 — 2026-03-22
**Nota:** Pagina non prioritaria. Il contenuto emerge dai case study e dall'About page. Da pubblicare solo quando il pattern è chiaro e maturo.

---

## 🇮🇹 ITALIANO

---

### Headline

Come prendo decisioni di prodotto.

### Intro

Nessun framework con un nome. Un modo di lavorare formato facendo il designer, poi lo sviluppatore, poi il PM. Ognuna di quelle fasi ha cambiato il modo di vedere i problemi. Quello che segue non è una metodologia. È quello che succede quando bisogna decidere cosa costruire.

---

### 1. Capire prima di toccare

La tentazione quando arrivi su un prodotto in difficoltà è agire subito. Dimostrare che stai facendo qualcosa. In QubicaAMF il sistema di pagamenti era in crisi. La prima decisione: non toccare niente per due settimane.

Non è inerzia. È il tempo per capire quali dei 44 problemi aperti stanno effettivamente costando soldi ai clienti adesso, e quali possono aspettare. La differenza tra "urgente" e "importante" non si vede il primo giorno. Si vede dopo aver parlato con il supporto, letto i ticket, e guardato i dati.

Il risultato: 44 item, 12 critici, 4 con impatto finanziario immediato. Il resto poteva aspettare. Senza quelle due settimane, il lavoro sarebbe stato su tutto contemporaneamente. Con quelle due settimane, i 4 più gravi risolti in 6 settimane.

---

### 2. Il problema è nel funnel, non dove pensi

Quasi sempre la prima diagnosi è sbagliata. Non per incompetenza. Perché chi chiede di risolvere il problema vede il sintomo, non la causa.

In QubicaAMF un centro stava per cancellare l'integrazione perché non riusciva a riconciliare i libri. Ogni transazione appariva come "uncategorized income" in Square. La diagnosi interna era "problema del partner, non risolvibile da noi." Tracciando il data model è saltato fuori un campo API esistente che risolveva tutto senza modifiche architetturali. Il centro è rimasto ed è diventato un account di riferimento.

In LeadsBridge il flusso di configurazione del bridge mapping generava errori a ripetizione. Ogni errore diventava un ticket. Il volume di supporto cresceva proporzionalmente ai nuovi utenti. Il problema non era il volume di ticket. Era il flusso multi-step che li generava. Il redesign ha tagliato il tempo di setup del **35%**.

Il pattern: prima di costruire qualcosa, verificare di star risolvendo il problema giusto. Costa meno di qualsiasi sprint.

---

### 3. Costruire per scoprire, non per consegnare

Un'idea, prima di diventare un ticket, diventa un prototipo funzionante. Non un mockup. Codice che si può toccare.

CasaHunter è nato così: serviva un appartamento, nessun portale funzionava, uno scraper scritto in un weekend. Ma la decisione di prodotto interessante non è stata costruirlo. È stata l'architettura dello scoring a 3 passaggi: il primo deterministico (gratis), il secondo con AI solo sugli annunci promettenti, il terzo adattivo sui feedback. Stessa logica applicabile a un prodotto enterprise: non mandare tutto all'AI. Filtra prima, spendi dove conta.

Prototipare in codice rivela cose che nessun documento di specifiche avrebbe detto. Vincoli tecnici che cambiano il prodotto. Edge case che cambiano la priorità. Costi che cambiano la strategia.

---

### 4. Sapere cosa non costruire

La decisione più difficile non è cosa costruire. È cosa smettere di costruire.

Nel cashless, OneCashless era il candidato ovvio. Prodotto interno, supporto organizzativo, head start. Ma la discovery ha mostrato che il prodotto non reggeva. Il business model era poco chiaro, l'architettura richiedeva lavoro non giustificabile. Parcheggiato. Deliberatamente.

Nel payments rescue, 23 dei 44 item sono stati consegnati. Gli altri 21 erano decisioni deliberate di "non ora", ognuna con una motivazione documentata. Quando il refund non era abbastanza solido prima del picco natalizio, è stato ritirato. Un giorno intero di testing piuttosto che spedire logica rotta a centinaia di centri nella loro settimana più intensa.

Il "no" documentato è un deliverable tanto quanto il codice spedito.

---

### 5. Comunicare come se non fossi nella stanza

Il lavoro migliore è inutile se nessuno lo capisce. Soprattutto in contesti remoti, multi-timezone, multi-country.

Il default: recap settimanali strutturati, memo operative per decisioni urgenti, minute dei meeting pubblicate entro ore. Quando il team di supporto doveva aiutare clienti con problemi non ancora risolti, servivano video tutorial con i workaround. Soluzioni ponte mentre i fix veri erano in pipeline.

Non è burocrazia. È il modo in cui un team distribuito mantiene il contesto senza dover chiedere "cosa sta succedendo?" ogni lunedì mattina.

---

### Chiusura

Non c'è un nome per questo approccio. È il risultato di aver progettato interfacce, scritto codice, e gestito prodotti per 10+ anni. Ogni fase ha aggiunto un modo diverso di guardare lo stesso problema.

Se vuoi vedere come funziona nella pratica, i case study raccontano i dettagli.

**CTA:** Guarda i lavori →

---

### Meta

**Meta title:** Come lavoro — Mattia De Luca | Il processo di un PM tecnico
**Meta description:** Come un Product Manager con background in design e sviluppo prende decisioni di prodotto. Non un framework. Il processo reale.
**Keyword target:** product management approach, how I work PM, technical product manager process

---
---

## 🇬🇧 ENGLISH

---

### Headline

How I make product decisions.

### Intro

No framework with a name. A way of working that formed through being a designer, then a developer, then a PM. Each phase changed how the problems look. What follows isn't a methodology. It's what happens when there's a decision to make about what to build.

---

### 1. Understand before you touch anything

The temptation when you arrive on a struggling product is to act immediately. Prove you're doing something. At QubicaAMF the payment system was in crisis. The first decision: don't touch anything for two weeks.

That's not inertia. It's the time to figure out which of the 44 open problems are actually costing customers money right now, and which can wait. The difference between "urgent" and "important" isn't visible on day one. It becomes visible after talking to support, reading the tickets, and looking at the data.

The result: 44 items, 12 critical, 4 with immediate financial impact. The rest could wait. Without those two weeks, the work would have been on everything simultaneously. With them, the 4 most severe resolved in 6 weeks.

---

### 2. The problem is in the funnel, not where you think

Almost always, the first diagnosis is wrong. Not from incompetence. Because whoever asks you to solve the problem sees the symptom, not the cause.

At QubicaAMF a center was about to cancel the integration because they couldn't reconcile their books. Every transaction appeared as "uncategorized income" in Square. The internal diagnosis was "partner problem, not solvable on our end." Tracing the data model revealed an existing API field that solved the problem without architectural changes. The center stayed and became a reference account.

At LeadsBridge the bridge mapping configuration flow was generating errors on repeat. Every error became a ticket. Support volume grew proportionally with new users. The problem wasn't ticket volume. It was the multi-step flow generating them. The redesign cut setup time by **35%**.

The pattern: before building anything, verify you're solving the right problem. It costs less than any sprint.

---

### 3. Build to discover, not to deliver

An idea, before becoming a ticket, becomes a working prototype. Not a mockup. Code you can touch.

CasaHunter was born this way: needing an apartment, no portal that worked, a scraper written over a weekend. But the interesting product decision wasn't building it. It was the 3-pass scoring architecture: first pass deterministic (free), second pass AI only on promising listings, third pass adaptive based on feedback. Same logic applicable to an enterprise product: don't send everything to AI. Filter first, spend where it counts.

Prototyping in code reveals things no spec document would have told you. Technical constraints that change the product. Edge cases that change the priority. Costs that change the strategy.

---

### 4. Know what not to build

The hardest decision isn't what to build. It's what to stop building.

In cashless, OneCashless was the obvious candidate. Internal product, organizational support, head start. But discovery showed the product didn't hold up. The business model was unclear, the architecture required work that couldn't be justified. Parked. Deliberately.

In the payments rescue, 23 of 44 items shipped. The other 21 were deliberate "not now" decisions, each with a documented rationale. When the refund feature wasn't solid enough before the holiday peak, it was pulled back. A full testing day rather than shipping broken logic to hundreds of centers during their busiest week.

A documented "no" is a deliverable just as much as shipped code.

---

### 5. Communicate as if you're not in the room

The best work is useless if nobody understands it. Especially in remote, multi-timezone, multi-country contexts.

The default: structured weekly recaps, operational memos for urgent decisions, meeting minutes published within hours. When the support team needed to help customers with issues that weren't fixed yet, video tutorials with workarounds filled the gap. Bridge solutions while the real fixes were in the pipeline.

That's not bureaucracy. It's how a distributed team maintains context without having to ask "what's going on?" every Monday morning.

---

### Closing

There's no name for this approach. It's the result of having designed interfaces, written code, and managed products for 10+ years. Each phase added a different way of looking at the same problem.

If you want to see how it works in practice, the case studies have the details.

**CTA:** See the work →

---

### Meta

**Meta title:** How I work — Mattia De Luca | A technical PM's process
**Meta description:** How a Product Manager with a design and development background makes product decisions. Not a framework. The real process.
**Keyword target:** product management approach, how I work PM, technical product manager process
