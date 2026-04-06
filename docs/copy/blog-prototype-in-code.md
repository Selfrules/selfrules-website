# Why I prototype in code as a PM

**URL:** /blog/why-i-prototype-in-code (EN) · /it/blog/perche-prototipo-in-codice (IT)
**Tipo:** Saggio lungo / primo post per selfrules.org
**Stato:** BOZZA v1 — 2026-03-22

---

## 🇮🇹 ITALIANO

---

### Perché prototipo in codice

La maggior parte dei PM non scrive codice. Non è un problema. Il product management non richiede di saper programmare. Ma se sai farlo, cambia il modo in cui prendi decisioni.

Non parlo di scrivere feature in produzione. Parlo di costruire la cosa minima necessaria per rispondere a una domanda prima di chiedere al team settimane di lavoro.

---

Un esempio recente. Serviva un appartamento in affitto. 8 portali, filtri inadeguati, nessuno che notificasse quando usciva qualcosa di buono. Il primo istinto da PM: mappare il problema — fonti, criteri, flusso. Il secondo istinto: aprire l'editor e costruire uno scraper.

In un weekend, un sistema funzionante che raccoglieva annunci da 8 fonti e li deduplicava. Ma il problema interessante non era lo scraping. Era lo scoring. Come capire se un annuncio è buono?

La prima versione mandava tutto a un LLM. Funzionava. Costava troppo e non migliorava la qualità sopra una certa soglia. Ristrutturazione: primo passaggio deterministico che filtra l'80% del rumore gratuitamente, secondo passaggio AI solo sul 20% che sopravvive. Terzo passaggio adattivo sui feedback.

Questa architettura non sarebbe mai uscita da un diagramma. È uscita dal codice, che ha mostrato che la prima soluzione era troppo costosa, e la seconda iterazione ha risolto il problema di costo senza sacrificare la qualità.

---

In azienda succede la stessa cosa su scala diversa.

In QubicaAMF un centro stava per cancellare l'integrazione pagamenti. Il problema: ogni transazione appariva come "uncategorized income" in Square. Nessuna attribuzione per terminale, nessun modo di chiudere i libri. La diagnosi interna era "problema del partner". Irrisolvibile.

La documentazione dell'API raccontava un'altra storia. Tracciando il data model è saltato fuori un campo esistente, `external_payment_type`, che poteva portare l'attribuzione senza cambiare niente sull'architettura di nessuna delle due parti. La spec di implementazione ha chiuso la discussione. Il centro è rimasto ed è diventato un account di riferimento.

Questo non è lavoro da ingegnere. Non si tratta di scrivere codice di produzione. Si tratta di sapere dove cercare — e quello viene da anni a leggere documentazione tecnica e scrivere codice. Quando un PM sa muoversi dentro un'API, la conversazione con l'engineering cambia. Non "dobbiamo risolvere questo problema." Ma "questo campo dell'API potrebbe risolvere il problema, ecco una spec, cosa ne pensate?"

La differenza è enorme. La prima frase apre una discussione. La seconda la chiude.

---

In LeadsBridge il flusso di configurazione dei bridge generava errori a ripetizione. Ogni errore diventava un ticket di supporto. Il team cresceva e il supporto cresceva con lui. La richiesta: costruire un chatbot.

Il funnel raccontava un'altra storia. Il problema non era il volume di ticket. Era il flusso multi-step che generava errori. La soluzione non era gestire il volume. Era eliminare la causa.

La stessa conclusione sarebbe arrivata senza saper leggere il codice? Forse. Ma avrebbe richiesto più tempo, qualcun altro avrebbe dovuto fare l'analisi, e proporre un redesign del flusso core del prodotto avrebbe avuto meno credibilità. "Ho guardato il codice e il problema è qui" fa partire la conversazione da un punto diverso rispetto a "credo che il problema potrebbe essere nel flusso."

---

C'è un rischio. Un PM che sa programmare può cadere nella trappola di voler costruire tutto. Di sentirsi indispensabile per ogni decisione tecnica. Di non delegare.

È un rischio reale. La risposta non è smettere di programmare. È sapere quando è il momento di scrivere codice e quando è il momento di scrivere un brief e dare fiducia al team.

Il prototipo serve quando bisogna validare un'idea prima di portarla in sprint. Quando la domanda è "è possibile?" e la risposta sta nei dati, non nelle opinioni. Non serve quando il team ha le competenze per esplorare il problema meglio.

---

Il punto non è che tutti i PM dovrebbero programmare. Il punto è che un percorso — designer, poi developer, poi PM — non è stato un errore di carriera. È stato un accumulo di strumenti.

Un problema di prodotto visto da tre angolazioni contemporaneamente: come appare all'utente, come funziona sotto il cofano, e cosa significa per il business. Non perché lo dice un framework. Perché quei tre lavori li ho fatti.

A volte la soluzione è nel design. A volte è nel codice. A volte è nel dire "no" a qualcosa che tutti vogliono. La capacità di prototipare non è la risposta a tutto. Ma è uno strumento in più nel momento in cui serve. E quando serve, fa la differenza tra indovinare e sapere.

---

### Meta

**Meta title:** Perché prototipo in codice — Mattia De Luca
**Meta description:** Un Product Manager che prototipa in codice prende decisioni diverse. Non perché sia necessario. Perché cambia quello che vedi.
**Keyword target:** product manager who codes, technical PM prototype, PM coding skills

---
---

## 🇬🇧 ENGLISH

---

### Why I prototype in code

Most PMs don't write code. That's fine. Product management doesn't require programming skills. But if you can do it, it changes how you make decisions.

I'm not talking about writing production features. I'm talking about building the minimum thing needed to answer a question before asking the team for weeks of work.

---

A recent example. I needed an apartment. 8 listing sites, inadequate filters, none that would send a notification when something good came up. First PM instinct: map the problem — sources, criteria, flow. Second instinct: open the editor and build a scraper.

One weekend later, a working system collecting listings from 8 sources and deduplicating them. But the interesting problem wasn't the scraping. It was the scoring. How do you figure out if a listing is good?

The first version sent everything to an LLM. It worked. It cost too much and didn't improve quality above a certain threshold. Restructured: first pass deterministic, filtering out 80% of noise for free. Second pass AI only on the 20% that survived. Third pass adaptive based on feedback.

This architecture would never have come from a diagram. It came from the code showing that the first solution was too expensive, and the second iteration solving the cost problem without sacrificing quality.

---

At work the same thing happens at a different scale.

At QubicaAMF a center was about to cancel the payment integration. The problem: every transaction appeared as "uncategorized income" in Square. No per-terminal attribution, no way to close the books. The internal diagnosis was "partner problem." Unsolvable.

The API documentation told a different story. Tracing the data model revealed an existing field, `external_payment_type`, that could carry source attribution without architectural changes on either side. The implementation spec closed the discussion. The center stayed and became a reference account.

This isn't engineering work. It's not about writing production code. It's about knowing where to look — and that comes from years of reading technical documentation and writing code. When a PM can navigate an API, the conversation with engineering changes. Not "we need to solve this problem." But "this API field might solve it, here's a spec, what do you think?"

The difference is enormous. The first sentence opens a discussion. The second closes it.

---

At LeadsBridge the bridge configuration flow was generating errors on repeat. Every error became a support ticket. The team was growing and support was growing with it. The ask: build a chatbot.

The funnel told a different story. The problem wasn't ticket volume. It was the multi-step flow generating errors. The solution wasn't managing volume. It was eliminating the cause.

Would the same conclusion have been reached without being able to read the code? Maybe. But it would have taken longer, someone else would have had to do the analysis, and proposing a redesign of the product's core flow would have carried less credibility. "I looked at the code and the problem is here" starts a conversation from a different point than "I think the problem might be in the flow."

---

There's a risk. A PM who can code can fall into the trap of wanting to build everything. Of feeling indispensable for every technical decision. Of not delegating.

It's a real risk. The answer isn't to stop coding. It's knowing when it's time to write code and when it's time to write a brief and trust the team.

The prototype serves when an idea needs validation before sprint. When the question is "is this possible?" and the answer lives in data, not opinions. It doesn't serve when the team has the skills to explore the problem better.

---

The point isn't that all PMs should code. The point is that a path — designer, then developer, then PM — wasn't a career mistake. It was an accumulation of tools.

A product problem seen from three angles at once: how it looks to the user, how it works under the hood, and what it means for the business. Not because a framework says so. Because all three jobs have been done.

Sometimes the solution is in the design. Sometimes it's in the code. Sometimes it's in saying "no" to something everyone wants. The ability to prototype isn't the answer to everything. But it's one more tool at the moment you need it. And when you need it, it makes the difference between guessing and knowing.

---

### Meta

**Meta title:** Why I prototype in code — Mattia De Luca
**Meta description:** A Product Manager who prototypes in code makes different decisions. Not because it's required. Because it changes what you see.
**Keyword target:** product manager who codes, technical PM prototype, PM coding skills
