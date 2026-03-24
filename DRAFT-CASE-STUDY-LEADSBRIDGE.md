# DRAFT — Case Study LeadsBridge

> Per revisione di Mattia prima dell'implementazione nel codice.
> Struttura identica a Payments Rescue e Cashless System.

---

## Metadata

- **Tag:** B2B SaaS · Integration Platform · Growth
- **Role:** Product Owner
- **Company:** B2B SaaS platform · Lead generation · 380+ integrations
- **Period:** 2020–2023

## Hero Metrics

- **-35%** setup time
- **+9%** integration adoption

---

## ENGLISH VERSION

### The context

A B2B SaaS platform connecting advertising channels to CRMs and marketing tools. Every time a lead came in from Facebook, Google, or TikTok Ads, LeadsBridge moved it to the right destination automatically — no code, no manual exports, no lost leads.

The product had **380+ integrations** and a growing customer base of marketers and agencies who depended on it daily. The core experience was the "bridge": a five-step flow where users selected their source and destination, authenticated both platforms, mapped the data fields, configured advanced options, and activated.

The problem wasn't that bridges didn't work. The problem was that too many users never finished building one.

### The challenge

The bridge creation funnel had a significant drop-off. Users entered the flow — they had intent, they had a use case — but a disproportionate number abandoned before activation. The two steepest drops were in **integration configuration** (connecting and authenticating platforms) and **field mapping** (matching source fields to destination fields).

Configuration required users to navigate OAuth flows, API keys, and platform-specific authentication patterns — each integration slightly different, each with its own failure modes. Users who made it past authentication then faced field mapping: a flexible but overwhelming screen where every source field could be manually paired with any destination field. Power users loved it. Everyone else stared at it.

The product had grown feature by feature, adding options at every step to satisfy the loudest requests. The result was a flow that technically could do anything — and practically intimidated most users before they reached the end.

### The approach

**The first step was understanding where people actually got stuck.** Not where we assumed they got stuck. I mapped the full funnel with completion rates at every step, cross-referenced with support tickets and session patterns. The data confirmed what the numbers suggested: configuration and mapping were the walls. But it also revealed something less obvious — users who completed their first bridge went on to create an average of three more. The activation barrier was the only barrier.

**Then came the counterintuitive decision: remove features.** The advanced options panel — conditional logic, custom transformations, multi-step field processing — was visible to every user on every bridge. It added cognitive load to a flow that most users needed to be simple. The proposal was to hide it entirely from the default experience and surface it only for users who explicitly needed it.

The resistance was immediate. The advanced options were a selling point in demos. Sales used them to differentiate from competitors. Support had built documentation around them. Removing them from the default view felt like removing a feature. The argument that won: **we're not removing capability, we're removing friction.** The options still exist. They just stop punishing users who don't need them.

**Field mapping got the same treatment.** Instead of presenting an empty canvas where users manually connected fields one by one, the redesigned flow proposed automatic mappings based on field names, types, and common patterns across the integration catalogue. Users could review and adjust — but the starting point was a working configuration, not a blank screen.

**This wasn't just a UI change. It required rethinking the data layer.** The auto-mapping engine needed to understand field semantics across hundreds of integrations with different naming conventions. I worked with engineering to build a matching algorithm that used field metadata, historical mapping patterns from successful bridges, and type compatibility. The technical work made the simple UI possible.

**The rollout was gradual.** We didn't flip a switch for everyone. The new flow went to new users first, while existing power users kept the original experience. We measured completion rates, time-to-first-bridge, and — critically — whether the simplified flow produced bridges that actually worked in production. They did.

### The results

| Metric | Result |
|--------|--------|
| Setup time | **-35%** across all bridge types |
| Integration adoption | **+9%** — more bridges completed, more usage of complex and niche integrations |
| First bridge completion | Measurably higher activation rate for new users |
| Bridge reliability | No increase in failed bridges post-simplification |
| Power user impact | Zero — advanced features remained accessible via explicit toggle |

### What I learned

The hardest product decisions look like you're taking something away. Removing visible options from a flow feels like regression — especially when those options exist because customers asked for them. But there's a difference between what users ask for and what users need to succeed. The data was unambiguous: most users needed a simpler path, and the minority who needed complexity could handle one extra click to find it.

The second lesson was about defaults. A blank field mapping screen and a pre-filled one lead to the same place. But the pre-filled version communicates "we understand your use case" while the blank one communicates "figure it out." The product's job is to encode knowledge, not just provide tools.

The third: working as a Product Owner under a founder who gave real autonomy was the best possible training ground. I owned the full cycle — research, design, specs, delivery, measurement — with a senior partner who challenged assumptions but didn't override decisions. That dynamic taught me more about product judgment than any framework.

---

## VERSIONE ITALIANA

### Il contesto

Una piattaforma B2B SaaS che collegava canali pubblicitari a CRM e strumenti di marketing. Ogni volta che arrivava un lead da Facebook, Google o TikTok Ads, LeadsBridge lo spostava automaticamente alla destinazione giusta — senza codice, senza export manuali, senza lead persi.

Il prodotto aveva **380+ integrazioni** e una base clienti in crescita di marketer e agenzie che dipendevano dalla piattaforma quotidianamente. L'esperienza centrale era il "bridge": un flusso in cinque step dove gli utenti selezionavano sorgente e destinazione, autenticavano entrambe le piattaforme, mappavano i campi dati, configuravano le opzioni avanzate e attivavano.

Il problema non era che i bridge non funzionassero. Il problema era che troppi utenti non arrivavano mai a completarne uno.

### La sfida

Il funnel di creazione bridge aveva un drop-off significativo. Gli utenti entravano nel flusso — avevano un'intenzione, avevano un caso d'uso — ma un numero sproporzionato abbandonava prima dell'attivazione. I due cali più ripidi erano nella **configurazione delle integrazioni** (connessione e autenticazione delle piattaforme) e nella **mappatura dei campi** (associazione dei campi sorgente con quelli di destinazione).

La configurazione richiedeva agli utenti di navigare flussi OAuth, chiavi API e pattern di autenticazione specifici per ogni piattaforma — ognuno leggermente diverso, ognuno con le proprie modalità di errore. Chi superava l'autenticazione si trovava di fronte alla mappatura: una schermata flessibile ma travolgente dove ogni campo sorgente poteva essere associato manualmente a qualsiasi campo destinazione. I power user la adoravano. Tutti gli altri restavano a fissarla.

Il prodotto era cresciuto feature dopo feature, aggiungendo opzioni a ogni step per soddisfare le richieste più insistenti. Il risultato era un flusso che tecnicamente poteva fare tutto — e in pratica intimidiva la maggior parte degli utenti prima di arrivare alla fine.

### L'approccio

**Il primo passo è stato capire dove le persone si bloccavano davvero.** Non dove pensavamo si bloccassero. Ho mappato l'intero funnel con tassi di completamento a ogni step, incrociando ticket di supporto e pattern di sessione. I dati confermavano quello che i numeri suggerivano: configurazione e mappatura erano i muri. Ma rivelavano anche qualcosa di meno ovvio — gli utenti che completavano il primo bridge ne creavano in media altri tre. La barriera all'attivazione era l'unica barriera.

**Poi è arrivata la decisione controintuitiva: togliere funzionalità.** Il pannello opzioni avanzate — logica condizionale, trasformazioni custom, elaborazione campi multi-step — era visibile a ogni utente su ogni bridge. Aggiungeva carico cognitivo a un flusso che la maggior parte degli utenti aveva bisogno fosse semplice. La proposta era nasconderlo completamente dall'esperienza di default e mostrarlo solo agli utenti che lo cercavano esplicitamente.

La resistenza è stata immediata. Le opzioni avanzate erano un punto di vendita nelle demo. Il commerciale le usava per differenziarsi dai competitor. Il supporto aveva costruito documentazione attorno ad esse. Rimuoverle dalla vista di default sembrava rimuovere una funzionalità. L'argomento che ha vinto: **non stiamo rimuovendo capacità, stiamo rimuovendo frizione.** Le opzioni esistono ancora. Semplicemente smettono di penalizzare chi non ne ha bisogno.

**La mappatura dei campi ha avuto lo stesso trattamento.** Invece di presentare un canvas vuoto dove gli utenti collegavano manualmente i campi uno a uno, il flusso ridisegnato proponeva mappature automatiche basate su nomi dei campi, tipi e pattern comuni attraverso il catalogo integrazioni. Gli utenti potevano rivedere e modificare — ma il punto di partenza era una configurazione funzionante, non uno schermo vuoto.

**Non era solo un cambiamento di UI. Richiedeva ripensare il data layer.** Il motore di auto-mapping doveva comprendere la semantica dei campi attraverso centinaia di integrazioni con convenzioni di naming diverse. Ho lavorato con l'engineering per costruire un algoritmo di matching che usava metadati dei campi, pattern storici di mappatura dai bridge riusciti e compatibilità di tipo. Il lavoro tecnico ha reso possibile l'UI semplice.

**Il rollout è stato graduale.** Non abbiamo cambiato tutto per tutti. Il nuovo flusso è andato prima ai nuovi utenti, mentre i power user esistenti mantenevano l'esperienza originale. Abbiamo misurato tassi di completamento, time-to-first-bridge e — cruciale — se il flusso semplificato produceva bridge che funzionavano davvero in produzione. Funzionavano.

### I risultati

| Metrica | Risultato |
|---------|-----------|
| Tempo di setup | **-35%** su tutti i tipi di bridge |
| Adozione integrazioni | **+9%** — più bridge completati, più utilizzo di integrazioni complesse e di nicchia |
| Completamento primo bridge | Tasso di attivazione misurabilmente più alto per i nuovi utenti |
| Affidabilità bridge | Nessun aumento di bridge falliti dopo la semplificazione |
| Impatto power user | Zero — le funzionalità avanzate restavano accessibili tramite toggle esplicito |

### Cosa ho imparato

Le decisioni di prodotto più difficili sembrano quelle in cui togli qualcosa. Rimuovere opzioni visibili da un flusso sembra un passo indietro — specialmente quando quelle opzioni esistono perché i clienti le hanno chieste. Ma c'è una differenza tra quello che gli utenti chiedono e quello di cui hanno bisogno per avere successo. I dati erano inequivocabili: la maggior parte degli utenti aveva bisogno di un percorso più semplice, e la minoranza che aveva bisogno di complessità poteva gestire un click in più per trovarla.

La seconda lezione riguardava i default. Una schermata di mappatura vuota e una pre-compilata portano allo stesso posto. Ma la versione pre-compilata comunica "capiamo il tuo caso d'uso" mentre quella vuota comunica "arrangiatevi." Il lavoro del prodotto è codificare conoscenza, non solo fornire strumenti.

La terza: lavorare come Product Owner sotto un fondatore che dava vera autonomia è stata la miglior palestra possibile. Gestivo l'intero ciclo — ricerca, design, specifiche, delivery, misurazione — con un partner senior che sfidava le assunzioni ma non sovrascriveva le decisioni. Quella dinamica mi ha insegnato più sul giudizio di prodotto di qualsiasi framework.
