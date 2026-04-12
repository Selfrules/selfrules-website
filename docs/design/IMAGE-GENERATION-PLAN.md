# Piano Generazione Immagini AI — selfrules.org

> Linguaggio visivo validato il 2026-04-12 dopo 4 round di iterazione.
> Nano Banana (Gemini) via Cowork. Conversation ID: `selfrules-final`.

---

## Linguaggio Visivo

**Formula:** Wireframe line illustration + terminal command + monospace metadata = signature visual.

Ogni immagine del sito segue questo schema fisso:

### Layout Grid (INVARIABILE)

```
┌─────────────────────────────────────────────────────────┐
│ # SECTION / slug-name                                   │  ← top-left, gray #8A8A8E, monospace
│                                                         │
│                                                         │
│    ┌──────────┐                                         │
│    │          │       hello@selfrules.org ~ $ cmd█      │  ← right, vertically centered, white + amber cursor
│    │  OBJECT  │                                         │
│    │ wireframe│                                         │
│    │          │                                         │
│    └──────────┘                                         │
│                                                         │
│                                                         │
│                                    YYYY · Company       │  ← bottom-right, gray #8A8A8E, monospace
└─────────────────────────────────────────────────────────┘
```

### Specifiche Tecniche

| Elemento | Valore esatto |
|----------|---------------|
| Aspect ratio | 16:9 |
| Background | #111113 (warm dark, NON pure black) |
| Outline colore | #E8A838 (amber-gold) |
| Outline stile | Thin, no fill, no shading, slight isometric |
| Prompt format | `hello@selfrules.org ~ $ [command]` |
| Cursore | Piccolo blocco quadrato #E8A838 |
| Metadata top-left | `# SEZIONE / slug` in #8A8A8E monospace |
| Metadata bottom-right | `YYYY · Company` o `vX.X.X · build YYYY.MM` in #8A8A8E |
| Spazio negativo | ≥ 70% del frame |
| Oggetto | ~25-35% frame, posizionato nel terzo sinistro |

### Regole di Coerenza

1. **Tutti gli oggetti** hanno la stessa prospettiva isometrica leggera
2. **Il prompt** è SEMPRE nella stessa posizione verticale (centro-destra)
3. **I metadata** sono SEMPRE negli stessi angoli con lo stesso stile
4. **Un solo oggetto** per immagine (max 2 se il concetto è duale, es. build vs buy)
5. **Mai fill, mai gradienti, mai 3D rendering** — solo linee outline
6. **L'oggetto racconta** la storia del contenuto — metaforico, non letterale

---

## TIER 1 — Alto Impatto (Case Study Heroes)

Queste immagini appaiono nelle pagine che un hiring manager legge per decidere se contattarti.

| # | Pagina | Oggetto wireframe | Terminal command | Metadata TL | Metadata BR |
|---|--------|-------------------|-----------------|-------------|-------------|
| 1.1 | `/work/payments-rescue` | Registratore di cassa vintage, cassetto aperto | `hello@selfrules.org ~ $ fix --payments` | `# WORK / payments-rescue` | `2023 · ActiveCampaign` |
| 1.2 | `/work/cashless-system` | Braccialetto NFC/smartwatch con segnale contactless | `hello@selfrules.org ~ $ scan --frictionless` | `# WORK / cashless-system` | `2022 · Cashless` |
| 1.3 | `/work/leadsbridge-redesign` | Interfaccia wireframe con pannelli modulari che si riorganizzano | `hello@selfrules.org ~ $ refactor --clean` | `# WORK / leadsbridge-redesign` | `2021 · LeadsBridge` |
| 1.4 | OG Image (social sharing) | Nessun oggetto — nome centrato + costellazione sparsa di punti amber | `hello@selfrules.org ~ $ whoami` | — | `v1.0.0 · build 2026.04` |

**Output:** 4 file PNG in `public/images/work/` e `public/images/og/`

---

## TIER 2 — Medio Impatto (Blog Post Heroes)

Immagini per la pagina Notes e i singoli post. Arricchiscono la navigazione e invogliano la lettura.

| # | Post | Oggetto wireframe | Terminal command | Metadata TL |
|---|------|-------------------|-----------------|-------------|
| 2.1 | `build-vs-buy-framework` | Martello + carrello separati da linea tratteggiata | `hello@selfrules.org ~ $ decide --build-or-buy?` | `# NOTES / build-vs-buy` |
| 2.2 | `when-ai-makes-sense-in-product` | Lampadina con filamento a circuito | `hello@selfrules.org ~ $ predict --human` | `# NOTES / ai-in-product` |
| 2.3 | `why-i-prototype-in-code` | Editor di codice wireframe con cursore lampeggiante | `hello@selfrules.org ~ $ prototype --fast` | `# NOTES / prototype-in-code` |
| 2.4 | `managing-payments-at-scale` | Bilancia con monete su un piatto e server sull'altro | `hello@selfrules.org ~ $ scale --payments` | `# NOTES / payments-at-scale` |
| 2.5 | `why-metrics-lie-without-context` | Grafico a barre con una barra che si piega/deforma | `hello@selfrules.org ~ $ measure --context` | `# NOTES / metrics-lie` |
| 2.6 | `remote-pm-across-countries` | Globo con fusi orari e linee di connessione | `hello@selfrules.org ~ $ sync --timezone` | `# NOTES / remote-pm` |
| 2.7 | `seven-years-running-a-business` | Sedia da ufficio (callback all'immagine originale) | `hello@selfrules.org ~ $ build --forever` | `# NOTES / seven-years` |
| 2.8 | `the-meeting-where-everyone-says-yes` | Tavolo riunioni con sedie vuote | `hello@selfrules.org ~ $ meeting --honest` | `# NOTES / everyone-says-yes` |

**Output:** 8 file PNG in `public/images/notes/`

---

## TIER 3 — Arricchimento (Polish e Personalità)

Nice-to-have che completano l'esperienza.

| # | Dove | Oggetto wireframe | Terminal command |
|---|------|-------------------|-----------------|
| 3.1 | 404 page | Bussola con ago che gira a vuoto | `hello@selfrules.org ~ $ cd /not-found` |
| 3.2 | About page (optional header) | Matita tecnica + righello a T | `hello@selfrules.org ~ $ whoami --verbose` |
| 3.3 | Lab page header | Provetta/beaker da laboratorio | `hello@selfrules.org ~ $ experiment --run` |
| 3.4 | Homepage "How I Work" — pillar 1 | Chiave inglese (icona piccola) | — |
| 3.5 | Homepage "How I Work" — pillar 2 | Lente d'ingrandimento (icona piccola) | — |
| 3.6 | Homepage "How I Work" — pillar 3 | Bussola/compasso (icona piccola) | — |

**Note:** 3.4-3.6 sono icone 1:1 senza prompt, solo oggetto wireframe centrato.

**Output:** 6 file PNG in `public/images/ui/`

---

## Workflow di Generazione

### Step 1 — Immagine master
Generare l'immagine 1.1 (Payments Rescue) con massima cura. Questa diventa il **riferimento stilistico** per tutte le altre.

### Step 2 — Serie TIER 1
Generare 1.2, 1.3, 1.4 usando `use_image_history: true` per mantenere coerenza con 1.1.

### Step 3 — Review checkpoint
Mattia valida TIER 1 completo prima di procedere.

### Step 4 — Serie TIER 2
Generare tutti i blog post heroes in batch, sempre con `use_image_history: true`.

### Step 5 — Review + TIER 3
Valutazione TIER 2, poi generazione TIER 3 se approvato.

### Step 6 — Integrazione nel codice
- Ottimizzare immagini (WebP, dimensioni appropriate)
- Aggiungere componenti `<Image>` nelle pagine
- Aggiornare OG meta tags
- Testare rendering responsive

---

## Nano Banana Settings

```
conversation_id: "selfrules-final"
aspect_ratio: "16:9"  (hero images)
aspect_ratio: "1:1"   (icone How I Work)
use_image_history: true  (dopo immagine master)
output_path: /public/images/{section}/{slug}.png
```

---

## Totale Immagini

| Tier | Quantità | Priorità |
|------|----------|----------|
| TIER 1 | 4 | Bloccante per launch |
| TIER 2 | 8 | Alta, pre-launch |
| TIER 3 | 6 | Nice-to-have |
| **Totale** | **18** | |
