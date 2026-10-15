# Lista cose da modificare — v25 → v26

> Operativo, niente prosa. Status: 🔴 da fare · 🟡 in discussione · 🟢 deciso
> Per il "perché" vedi `00-brief-identitario-v0.md`.
> Aggiornato dopo brainstorming 2026-05-21.

## Decisioni chiave brainstorming 2026-05-21

- Tesi-frase: rimandata a post-S1 (~9 giugno)
- Direzione visiva: rimandata, da preparare 3 mood board reali
- 21Lab: sotto-sezione di `/storia`, NON pagina dedicata
- Case study tech: tutti eliminati (Payments, Cashless, LeadsBridge spariti)
- `/work` e `/lab` come pagine: **eliminate**
- Architettura finale: 5 pagine + blog (Home, Scritti, Storia, Ora, Contatti)

---

## 1 · Brand guide

| Voce | v25 | v26 proposta | Status |
|---|---|---|---|
| Nome marchio | "Selfrules" / "MFDL" | "Selfrules" mantenuto, "MFDL" rimosso | 🟡 |
| Tagline | "PM che traduce tra business/design/code" | "Apre la scatola di domini diversi. Anti-tuttologo operativo." | 🟡 |
| Logo | "MFDL" monogramma terminal | Wordmark "selfrules" in serif editoriale, no monogramma | 🟡 |
| Favicon | Glyph terminal | Iniziale "s" o simbolo astratto in palette nuova | 🔴 |
| OG image | Dark terminal screenshot | Editoriale, palette nuova, frase-firma | 🔴 |
| Manifesto | Implicito ("anti job-seeker") | Esplicito, 5 punti scritti in `00-brief-identitario-v0.md` | 🟡 |

---

## 2 · Tone of voice

| Voce | v25 | v26 proposta | Status |
|---|---|---|---|
| Skill source | `_sistema/tone-of-voice/IT.md v0.4` | Stessa skill aggiornata a v0.5 post-S1 (~9 giugno) | 🟡 |
| Autore voce | Claude redattore di copy v25 | **Mattia autore, Claude redattore** (regola S1) | 🟢 |
| Registro | Auto-promo pragmatico ("il PM che chiami quando…") | Diaristico/auto-osservativo, sobrio | 🟡 |
| Pattern AI-flag da evitare | Già documentati in `project_tone_of_voice_S1.md` | Stessa lista, applicare con disciplina | 🟢 |
| Frase-firma | "Vedo, capisco, agisco" | "Non sono lo specialista di niente…" (frase del 9 maggio) | 🟡 |
| Auto-elogi | Tollerati ("13 anni a diventare generalista") | Banditi. Self-deprecation accettato, self-promotion no | 🟡 |
| CTA tone | "Prenotiamo 15 minuti", "Inizia chat" | "Scrivimi se ha senso", "Email diretta" | 🟡 |
| Slang/colloquiale | Quasi assente | "Punto" come chiusura, "Ergo", "Vabbè" - parsimonia | 🟢 |

---

## 3 · Color palette

| Voce | v25 | v26 — opzione A "Quaderno" | v26 — opzione B "Slow tech" | v26 — opzione C "Studio" |
|---|---|---|---|---|
| Base | Dark `#0A0A0B` | Cream `#F4EFE6` | Bianco caldo `#FAF7F2` | Avorio `#F2EDE4` |
| Testo principale | `#E5E5E5` | Inchiostro blu `#1F2D52` | Nero inchiostro `#1A1A1A` | Marrone tabacco `#6B4F3A` |
| Accento primario | Amber `#E8A838` | Terracotta `#C25B3F` | Rosso mattone `#A8533A` o blu profondo `#2B4068` | Ocra `#D4A857` |
| Accento secondario | n/a | Verde oliva `#6B7A4F` | Solo neutri | Verde salvia `#8A9A7A` |
| Highlight/link | Amber | Terracotta sottolineato | Accento sottolineato | Ocra sottolineato |
| Tipo di mood | Terminal/tech | Taccuino/editoriale | WordPress di pensatore | Studio professionale |

Status: 🟡 - decidi una direzione in brainstorming.

---

## 4 · Tipografia

| Voce | v25 | v26 proposta | Status |
|---|---|---|---|
| Titoli H1-H2 | Space Grotesk | Serif editoriale: Source Serif 4, Newsreader, Fraunces, o Crimson Pro | 🟡 |
| Body | Inter | Sans morbido: Inter (riusabile), DM Sans, o Manrope | 🟡 |
| Mono | JetBrains Mono | Solo per metadati (date, tag, codice in post). Stesso JetBrains Mono ok | 🟢 |
| Scala tipografica | Tech ratio | Editoriale: H1 più grande, body più generoso (18-19px), interlinea ampia (1.6-1.7) | 🔴 |
| Numero font famiglie | 3 (sans + sans + mono) | 2 (serif + sans) o 3 (serif + sans + mono) | 🟡 |

---

## 5 · Struttura sito

Dettaglio architettura in `00-brief-identitario-v0.md` sezione "Architettura informativa proposta".

**Sintesi cambiamenti** vs v25:

| Pagina v25 | Destino v26 | Status |
|---|---|---|
| `/` Home one-pager con 6 sezioni (Hero/Journey/Now/Work/Contact) | Home minimale: hero + ultimi scritti + link a /ora | 🟢 |
| `/about` Chi sono narrativo | Rinominato `/storia`, riscritto col cambiamento 21Lab come sotto-sezione | 🟢 |
| `/work` Listing case study tech | **Eliminata** | 🟢 |
| `/work/[slug]` Singolo case study | **Eliminati tutti e 3** (Payments, Cashless, LeadsBridge) | 🟢 |
| `/lab` Side projects (CasaHunter) | **Eliminata**. CasaHunter eventualmente diventa 1 post di blog | 🟢 |
| `/approach` In bozza | Eliminata | 🟢 |
| `/blog` (planned) "Note" | Diventa `/scritti` - CUORE DEL SITO | 🟢 |
| `/contact` | Mantenuto come `/contatti`, ridotto a essenziale | 🟢 |
| "Lavoriamo insieme" 3 servizi a prezzo | **Eliminata** | 🟢 |
| "Chiedi al mio AI clone" | **Eliminata** | 🟢 |
| "Chiedi anonimo" | **Eliminata** | 🟢 |

Aggiunte nuove:

| Nuova pagina | Funzione | Status |
|---|---|---|
| `/scritti` listing blog | Indice cronologico, tag/categorie | 🟢 |
| `/scritti/[slug]` post singolo | Long-form pulito, no CTA in fondo, eventuale "post correlati" | 🟢 |
| `/ora` ("now page") | Cosa sto facendo questo mese, aggiornata a mano ogni 4-6 settimane | 🟢 |
| `/scritti/rss.xml` | Feed RSS, in evidenza in footer | 🟢 |

---

## 6 · Contenuti

| Voce | v25 | v26 proposta | Status |
|---|---|---|---|
| CV scaricabile | PDF in `/mattia-de-luca-cv.pdf` | Rimosso da home, eventualmente in `/storia` come link discreto | 🟡 |
| Case study Payments | 1.500 parole, completo, PM tech framing | **Eliminato** | 🟢 |
| Case study Cashless | 🟡 Bozza, metriche TBD | **Eliminato** | 🟢 |
| Case study LeadsBridge | ❌ Da scrivere | **Non scritto, eliminato dal piano** | 🟢 |
| Sezione "Now" home | Generica "Cosa sto imparando" | Box piccolo in home con link a `/ora` (pagina dedicata) | 🟢 |
| AI chatbot ("clone") | Attivo | Eliminato | 🟢 |
| Anonymous Q&A | Attivo | Eliminato | 🟢 |
| Newsletter signup | Linkato in footer (vuoto) | 🟡 da decidere: Substack ufficiale o no | 🟡 |

---

## 7 · Blog / Scritti

| Voce | v25 | v26 proposta | Status |
|---|---|---|---|
| Status pre-lancio | 1 post in bozza ("Perché prototipo in codice") | 6-8 post pre-scritti prima del lancio | 🔴 |
| Cadenza | n/a | Settimanale giu-ago 2026, poi 2/mese | 🟡 |
| Lunghezza tipica | n/a | 800-1500 parole, long-form occasionale 2500+ | 🟡 |
| Stack tecnico blog | @next/mdx in Next.js 16 | Conferma @next/mdx o passa a markdown puro + plugin SSG? | 🟡 |
| Categorie / tag | n/a | "cambiamento", "21Lab", "operating", "lezioni vecchie", "voci-tue" | 🟡 |
| Commenti | Assenti | Restano assenti (slow-web vibe) | 🟢 |
| Reazioni / like | Assenti | Restano assenti | 🟢 |
| Cross-post Substack | n/a | Da decidere - se newsletter sì, allora sì | 🟡 |
| RSS | Pianificato | In evidenza | 🟢 |
| Comment system | n/a | No | 🟢 |
| Analytics | Umami Cloud | Mantieni Umami, no GA | 🟢 |

---

## 8 · Stack tecnico

| Voce | v25 | v26 proposta | Status |
|---|---|---|---|
| Framework | Next.js 16 (App Router) | Next.js 16 mantenuto - clean slate del codice, non dello stack | 🟢 |
| Hosting | Vercel | Vercel mantenuto | 🟢 |
| CSS | Tailwind v4 CSS-first | Mantenuto | 🟢 |
| i18n | next-intl 4.8 | Da decidere se servono entrambe le lingue | 🟡 |
| Blog engine | @next/mdx | Mantenuto o ripensato | 🟡 |
| Analytics | Umami Cloud cookieless | Mantenuto | 🟢 |
| Codebase v25 | In `/Users/.../selfrules-website` con tutta la struttura | **Da archiviare** in `/_archivio/v25-codebase/` prima di partire | 🔴 |
| Repo Git | Esistente | Branch `v26-clean-slate` o nuovo repo | 🟡 |

---

## 9 · SEO & metadata

| Voce | v25 | v26 proposta | Status |
|---|---|---|---|
| Title pattern | "Mattia De Luca - Il PM che chiami quando…" | "Mattia De Luca - selfrules.org" o "selfrules.org - Mattia De Luca" | 🟡 |
| Meta description | Keyword PM tech | Keyword cambiamento/operating partner/scritti | 🟡 |
| Schema.org Person | Configurato come "Product Manager" | Aggiornato a "Operating Partner" o "General Manager" | 🟡 |
| Sitemap | Auto-generata | Mantenuta | 🟢 |
| Robots | Aperto | Mantenuto | 🟢 |
| OG image dinamica | Sì, per ogni pagina | Mantenuta, palette nuova | 🟡 |
| LinkedIn metadata | Allineato a v25 | Da aggiornare post-lancio (allineato con LinkedIn redesign skill) | 🔴 |

---

## 10 · Cose che NON cambiano (e perché)

- **Dominio selfrules.org** - nome coerente con la storia (Selfrules agenzia 2012). Cambiarlo distrugge link equity LinkedIn/SEO/menzioni.
- **Email mattia@selfrules.org** - resta.
- **GitHub username `selfrules`** - resta.
- **Privacy policy + termini** - struttura tecnica mantenuta, contenuto da aggiornare se cambia il tracking.
- **Sito statico, no auth, no DB** - mantenuto.
- **Approccio anti-funnel** - era già giusto in v25, lo confermiamo con più radicalità in v26.

---

## 11 · Quanto lavoro è (stima grossolana)

| Lotto | Effort | Quando |
|---|---|---|
| Brief identitario finale + brand guide 1 pagina | 4-6h | Settimana 22-23 maggio |
| Direzione visiva scelta + mood board | 3-4h | Settimana 25-31 maggio |
| Copy IT delle pagine fisse (home, storia, lavoro, contatti) | 8-12h | Settimana 1-7 giugno (dopo S1) |
| Copy EN delle pagine fisse (se serve) | 4-6h | Settimana 8-14 giugno |
| 6-8 post di blog pre-scritti | 12-20h | Settimana 8-21 giugno |
| Sviluppo Next.js v26 clean slate | 20-30h | Settimana 15 giugno - 5 luglio |
| Test, polish, deploy | 4-6h | Settimana 6-12 luglio |
| Lancio | n/a | Target: 13-19 luglio 2026 |

**Totale ~60-90h spalmate su 8 settimane**. Con 200h Qubica permessi giugno-luglio dedicate parzialmente, è fattibile.

---

## 12 · Cose che possono andare male (rischi)

1. **S1 voce non sedimenta in tempo** → copy resta freddo o resta "claude-generated". Mitigation: Mattia scrive grezzo, Claude edita. Se la voce non c'è al 9 giugno, si slitta il lancio a settembre.
2. **Conflitto con Alberto su comunicazione pubblica 21Lab** → bisogna allineare prima di scrivere `/lavoro` o post di blog su 21Lab. Mitigation: una conversazione esplicita con Alberto entro fine maggio su cosa è ok dire pubblicamente.
3. **Sovra-investimento sul redesign visivo** → si finisce in palette e font invece che in scrittura. Mitigation: scegliere direzione A/B/C in brainstorming e congelare. Niente "ma forse anche…".
4. **Mancanza di feedback prima del lancio** → si lancia un sito che nessuno ha letto. Mitigation: 3-4 lettori "alpha" ricevono brief + 2 post pre-lancio (Stefano Pagani? Jacopo Romei? Alberto?).
5. **Vincolo Qubica clausola NDA / non concorrenza** → controllo formale che il sito non viola nessuna clausola di esit Qubica.
