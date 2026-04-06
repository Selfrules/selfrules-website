# Architettura sito selfrules.org — Modello IC

**Stato:** Definita — 2026-03-22
**Principio:** Il sito sembra il posto dove un PM pensa ad alta voce e mostra cosa costruisce. NON sembra un funnel per consulenza, un corso, o un'academy.

---

## Struttura finale

```
selfrules.org/
├── /                   Homepage (one-pager con sezioni)
│   ├── Hero            Chi è, cosa fa, perché è diverso — 5 secondi
│   ├── Come lavoro     3 pilastri con esempi concreti
│   ├── Percorso        Timeline 4 blocchi (Designer → Dev → PO → PM)
│   ├── Numeri          Grid 6 metriche con contesto
│   ├── Cosa faccio ora 2 card (AI + CasaHunter)
│   └── Contatto        Email diretta + LinkedIn + CV
│
├── /about              Chi sono — versione lunga narrativa
│   ├── Percorso        4 paragrafi (Selfrules → FLOWING → LeadsBridge → QubicaAMF)
│   ├── Cosa credo      3 principi con esempi
│   ├── Fuori dal lavoro  2-3 righe
│   └── CTA
│
├── /work               Case study listing
│   ├── Card 1          Payments Rescue ✅
│   ├── Card 2          Cashless System (bozza, TBD metriche)
│   └── Card 3          LeadsBridge (da scrivere — TASK-CS-03)
│
├── /work/[slug]        Singolo case study
│   └── Struttura:      Contesto → Sfida → Approccio → Risultati → Lezione
│
├── /lab                Side projects
│   ├── CasaHunter      Completo, attivo
│   ├── MoneyMind       In sviluppo
│   └── OpenClaw        In ideazione
│
├── /approach           Come prendo decisioni (bozza, non prioritaria)
│   └── 5 sezioni       Ognuna ancorata a un caso reale
│
├── /blog               Note — pensieri su prodotto
│   └── Primo post      "Perché prototipo in codice" (bozza pronta)
│
└── /contact            Contatto diretto
    ├── Email           mattia@selfrules.org
    ├── LinkedIn        linkedin.com/in/selfrules
    ├── CV              Download diretto PDF
    └── Disponibilità   EU remote · US remote
```

Versione italiana sotto `/it/`, inglese come default.

---

## Stato dei contenuti (marzo 2026)

| Pagina | File | Stato | Note |
|--------|------|-------|------|
| Homepage | `homepage.md` | ✅ Pronta | IT + EN |
| About | `about-page.md` | ✅ Pronta | IT + EN |
| Work (listing) | `work-page.md` | ✅ Pronta | 2 card + 1 placeholder |
| CS: Payments Rescue | `case-studies/payments-rescue.md` | ✅ Completato | EN only |
| CS: Cashless System | `case-studies/cashless-system.md` | 🟡 Bozza | EN only, metriche TBD |
| CS: LeadsBridge | — | ❌ Da scrivere | TASK-CS-03 |
| Lab | `lab-page.md` | ✅ Pronta | IT + EN |
| Approach | `approach-page.md` | 🟡 Bozza | IT + EN, non prioritaria |
| Blog: Prototype | `blog-prototype-in-code.md` | 🟡 Bozza | IT + EN |
| Micro-copy | `microcopy.md` | ✅ Pronto | IT + EN |
| Contact | In `homepage.md` sez. 6 | ✅ Pronta | Stessa struttura per pagina dedicata |

---

## Navigazione

| Label IT | Label EN | URL | Stato |
|----------|----------|-----|-------|
| Chi sono | About | /about | ✅ |
| Lavori | Work | /work | ✅ |
| Lab | Lab | /lab | ✅ |
| Note | Notes | /blog | 🟡 1 post in bozza |
| Parliamo | Let's talk | /contact | ✅ |

---

## Validazione: sito IC vs funnel coach

| Criterio | Risultato | Note |
|----------|-----------|------|
| Nessun corso o academy | ✅ | |
| Nessuna CTA tipo "Prenota una call" | ✅ | CTA sono "Scrivimi" e "Parliamo" |
| Nessun framework con nome proprietario | ✅ | Approach non ha nome |
| Side projects come proof, non come curriculum | ✅ | Lab mostra decisioni di prodotto |
| Blog come pensiero, non come content marketing | ✅ | "Note" non "Blog" |
| Case study mostrano decisioni, non framework | ✅ | |
| Nessun funnel di vendita | ✅ | Email diretta, niente form |
| Nessuna testimonianza inventata | ✅ | |

**Riferimenti positivi confermati:** kevinyien.com, navindra.me, elezea.com
**Anti-riferimenti confermati:** melissaperri.com, producttalk.org

---

## Prossimi passi

1. **TASK-CS-03:** Scrivere case study LeadsBridge (serve recuperare materiale Austin)
2. **Implementazione:** Portare il copy nei componenti del sito
3. **Design:** Applicare neobrutalism-ui-designer ai layout
4. **/approach:** Pubblicare solo quando i case study sono tutti pronti e il pattern è maturo
5. **/blog:** Pubblicare "Perché prototipo in codice" come primo post
6. **SEO:** Implementare strategia (vedi TASK-MB-04)
