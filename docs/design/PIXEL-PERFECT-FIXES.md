# Pixel-Perfect Fix List — selfrules.org v25

**Data:** 2026-03-23
**Confronto:** Figma v25 (Document Review) vs codice attuale
**Nota:** Copy source di riferimento: `../job-search-2026/selfrules-redesign/` — ha SEMPRE precedenza sul copy del Figma (che è AI-generated).

---

## P0 — Struttura e layout critici

### FIX-01: Homepage Timeline — Aggiungere card bordate ai blocchi

**File:** `src/components/sections/Timeline.tsx`
**Problema:** I blocchi desktop sono testo nudo senza confine. Il Figma mostra ogni blocco dentro una card con border + bg-surface + padding.
**Fix:**
```tsx
// Riga ~29: avvolgere il contenuto di ogni blocco in una card
<div key={index} className="relative pt-6">
  {/* Square node rimane FUORI dalla card, sopra */}
  ...
  {/* Wrappare in card */}
  <div className="border border-default bg-surface p-6 mt-4">
    <p className="font-mono text-sm text-accent mb-2">{block.dates}</p>
    <h3 className="font-heading font-bold text-[20px] leading-[1.3] text-text-primary mb-3">
      {block.role}
    </h3>
    <div className="text-base leading-[1.6] text-text-secondary">{block.text}</div>
  </div>
</div>
```
**Nota:** Stessa cosa per il layout mobile (riga ~59+).

---

### FIX-02: Homepage CurrentWork — Layout singola colonna + badge a destra

**File:** `src/components/sections/CurrentWork.tsx`
**Problema 1:** Grid è `grid-cols-1 md:grid-cols-2` ma Figma mostra singola colonna centrata (max-width ~720px).
**Problema 2:** Status badge (dot + label) è in alto a sinistra. Figma lo mostra a DESTRA, sulla stessa riga del titolo.
**Problema 3:** Card title usa `text-[clamp(28px,3vw,36px)]` — troppo grande. Figma mostra ~20px.

**Fix riga 25:**
```tsx
// Da:
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// A:
<div className="flex flex-col gap-6 max-w-[var(--width-content)]">
```

**Fix righe 31-48 — ristrutturare layout card:**
```tsx
<div key={index} className="border border-default bg-surface p-6 transition-all duration-150 hover:border-accent hover:-translate-y-0.5">
  {/* Titolo + badge sulla stessa riga */}
  <div className="flex items-start justify-between gap-4">
    <h3 className="font-heading font-bold text-[20px] leading-[1.3] text-text-primary">
      {card.title}
    </h3>
    {card.status && card.statusLabel && (
      <div className="flex items-center gap-2 shrink-0">
        <span className={`w-2 h-2 inline-block ${statusColors[card.status] || 'bg-secondary'}`} aria-hidden="true" />
        <span className="font-mono text-[13px] text-text-secondary uppercase tracking-[0.05em]">
          {card.statusLabel}
        </span>
      </div>
    )}
  </div>
  <p className="text-base leading-[1.6] text-text-secondary mt-3">{card.text}</p>
</div>
```

---

### FIX-03: Contact — Link orizzontali + availability badge

**File:** `src/components/sections/Contact.tsx`
**Problema 1:** LinkedIn e CV links sono verticali (`flex flex-col gap-4`). Figma li mostra sulla STESSA RIGA.
**Problema 2:** Availability è testo mono plain. Figma mostra un badge con dot verde/quadrato + border.

**Fix riga 39:**
```tsx
// Da:
<div className="mt-6 flex flex-col gap-4">
// A:
<div className="mt-6 flex flex-row items-center gap-6">
```

**Fix riga 56-58 — availability badge:**
```tsx
// Da:
<p className="mt-8 font-mono text-sm uppercase tracking-[0.05em] text-text-secondary">
  {availability}
</p>
// A:
<div className="mt-8 inline-flex items-center gap-2 border border-default px-4 py-2">
  <span className="w-2 h-2 bg-[#4ADE80]" aria-hidden="true" />
  <span className="font-mono text-sm uppercase tracking-[0.05em] text-text-secondary">
    {availability}
  </span>
</div>
```

---

### FIX-04: About — Date in accent e ordine date→company

**File:** `src/app/[locale]/about/page.tsx`
**Problema 1:** Le date nella career timeline sono `text-text-secondary`. Figma le mostra in `text-accent`.
**Problema 2:** Ordine attuale: company(h2) → dates(p) → text. Figma mostra: dates(accent, sopra) → company(h2) → text.

**Fix righe 133-138:**
```tsx
// INVERTIRE l'ordine: prima dates, poi company
<div>
  <p className="font-mono text-[14px] uppercase tracking-[0.05em] text-accent mt-1">
    {entry.dates}
  </p>
  <h2 className="font-heading font-bold text-[20px] leading-[1.3] text-text-primary mt-2">
    {entry.company}
  </h2>
  <div className="mt-4 text-base leading-[1.6] text-text-primary whitespace-pre-line">
    {entry.text}
  </div>
</div>
```

---

### FIX-05: ProjectCard (Lab) — Badge a destra del titolo

**File:** `src/components/ui/ProjectCard.tsx`
**Problema:** Title + status badge sono tutti left-aligned in un flex. Figma mostra titolo a SINISTRA, badge a DESTRA (justify-between).

**Fix righe 43-49:**
```tsx
// Da:
<div className="flex items-center gap-2">
  <h3 className="font-heading font-bold text-xl text-text-primary">{title}</h3>
  <span className={cn('w-2 h-2 inline-block', statusColors[status])} aria-hidden="true" />
  <span className="text-[13px] text-text-secondary">{statusLabel}</span>
</div>
// A:
<div className="flex items-start justify-between gap-4">
  <h3 className="font-heading font-bold text-xl text-text-primary">{title}</h3>
  <div className="flex items-center gap-2 shrink-0">
    <span className={cn('w-2 h-2 inline-block', statusColors[status])} aria-hidden="true" />
    <span className="font-mono text-[13px] text-text-secondary uppercase tracking-[0.05em]">{statusLabel}</span>
  </div>
</div>
```

---

## P1 — Typography sizing (errore sistematico)

### FIX-06: Page headlines (h1) troppo piccoli su inner pages

**Problema:** Tutte le inner pages (About, Work, Lab, Notes, Approach) usano `text-[clamp(28px,3vw,36px)]` per l'h1. Questo è lo STESSO size dei section titles. Il Figma mostra le page headlines significativamente più grandi (~40-48px), come la Hero.

**File da modificare:**

1. `src/app/[locale]/about/page.tsx` riga 99:
```tsx
// Da:
<h1 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-text-primary">
// A:
<h1 className="font-heading font-bold text-[clamp(36px,4vw,48px)] leading-[1.1] text-text-primary">
```

2. `src/app/[locale]/work/page.tsx` riga 54:
```tsx
// Da:
<h1 className="font-heading text-[clamp(28px,3vw,36px)] font-bold leading-[1.2] text-text-primary">
// A:
<h1 className="font-heading text-[clamp(36px,4vw,48px)] font-bold leading-[1.1] text-text-primary">
```

3. `src/app/[locale]/lab/page.tsx` riga 105:
```tsx
// Stessa fix: text-[clamp(36px,4vw,48px)]
```

4. `src/app/[locale]/notes/page.tsx` riga 76:
```tsx
// Stessa fix: text-[clamp(36px,4vw,48px)]
```

5. `src/app/[locale]/approach/page.tsx` riga 60:
```tsx
// Stessa fix: text-[clamp(36px,4vw,48px)]
```

**Suggerimento:** Creare una classe CSS custom `--text-page-title: clamp(36px, 4vw, 48px)` in globals.css per centralizzare.

---

### FIX-07: Pillar/card/timeline titles troppo grandi (h3)

**Problema:** Diversi componenti usano `text-[clamp(28px,3vw,36px)]` per titoli che nel Figma sono ~20px. Questo size è riservato ai section titles (h2 in SectionHeader), non ai sub-titles.

**File da modificare:**

1. `src/components/sections/HowIWork.tsx` riga 26:
```tsx
// Da:
<h3 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-text-primary mb-4">
// A:
<h3 className="font-heading font-bold text-[20px] leading-[1.3] text-text-primary mb-4">
```

2. `src/components/sections/Timeline.tsx` riga 38 (desktop) e riga 68 (mobile):
```tsx
// Da:
<h3 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-text-primary mb-2">
// A:
<h3 className="font-heading font-bold text-[20px] leading-[1.3] text-text-primary mb-2">
```

3. `src/components/sections/CurrentWork.tsx` riga 42:
```tsx
// Già fixato in FIX-02 sopra
```

---

### FIX-08: Homepage Timeline — Date in accent color

**File:** `src/components/sections/Timeline.tsx`
**Problema:** Le date usano `text-text-secondary`. Figma le mostra in accent color (arancione).

**Fix riga 41 (desktop) e riga 72 (mobile):**
```tsx
// Da:
<p className="font-mono text-sm text-text-secondary mb-3">
// A:
<p className="font-mono text-sm text-accent mb-3">
```

---

## P2 — Styling details

### FIX-09: MetricCard label — Aggiungere stile mono uppercase

**File:** `src/components/ui/MetricCard.tsx`
**Problema:** Il label della metrica è `text-[13px] text-text-primary` (sans-serif, mixed case). Figma mostra labels come "PROCESSING TIMES", "UPTIME" in font mono, uppercase, tracking wide.

**Fix riga 25:**
```tsx
// Da:
<p className="text-[13px] text-text-primary mt-4">{label}</p>
// A:
<p className="font-mono text-[13px] uppercase tracking-[0.05em] text-text-primary mt-4">{label}</p>
```

---

### FIX-10: CaseStudyCard metricLabel — Stile mono uppercase + freccia

**File:** `src/components/ui/CaseStudyCard.tsx`
**Problema:** metricLabel è `text-[13px] text-text-tertiary` ma nel Figma è mono uppercase con freccia →.

**Fix righe 40-42:**
```tsx
// Da:
<p className="text-[13px] text-text-tertiary mt-1">{metricLabel}</p>
// A:
<p className="font-mono text-[13px] uppercase tracking-[0.05em] text-text-tertiary mt-1">{metricLabel}</p>
```

**Nota aggiuntiva:** Work page non passa `metricLabel` alle cards. Considerare di splittare il metric in numero + label.

---

### FIX-11: Work page CaseStudyCard — Passare metricLabel separato

**File:** `src/app/[locale]/work/page.tsx`
**Problema:** Le metriche sono stringhe combinate ("99.19% success rate · -25% post-release incidents"). Il Figma mostra il numero GRANDE a destra + label piccola sotto.
**Copy source ha metriche combinate, ma il design richiede separazione.**

**Fix:** Aggiungere chiavi `metricNumber` e `metricLabel` a en.json per ogni case:
```json
"payments": {
  "metricNumber": "99%+",
  "metricLabel": "SUCCESS RATE →"
}
```
E in work/page.tsx passare entrambi:
```tsx
<CaseStudyCard
  metric={t('cases.payments.metricNumber')}
  metricLabel={t('cases.payments.metricLabel')}
  ...
/>
```

---

### FIX-12: About page — Aggiungere section labels mancanti

**File:** `src/app/[locale]/about/page.tsx`
**Problema:** La sezione career e beliefs non hanno label (come "CAREER PATH", "WHAT I BELIEVE"). Il Figma le mostra.

**Fix — aggiungere labels:**
```tsx
{/* Prima della VerticalTimeline */}
<p className="font-mono text-sm uppercase tracking-[0.05em] text-text-secondary mb-6">
  {t('career.label')}
</p>
```

```tsx
{/* Prima dei beliefs */}
<p className="font-mono text-sm uppercase tracking-[0.05em] text-text-secondary mb-6">
  {t('beliefs.label')}
</p>
```

```tsx
{/* Prima di "Outside work" */}
<p className="font-mono text-sm uppercase tracking-[0.05em] text-text-secondary mb-6">
  {t('outside.label')}
</p>
```

**Aggiungere a en.json:**
```json
"career": {
  "label": "CAREER PATH",
  ...
},
"beliefs": {
  "label": "WHAT I BELIEVE",
  ...
},
"outside": {
  "label": "OUTSIDE WORK",
  ...
}
```

---

### FIX-13: Contact — Email styling

**File:** `src/components/sections/Contact.tsx`
**Problema:** Email è `text-[clamp(28px,3vw,36px)]`. Il Figma mostra l'email più grande e prominente (~clamp(28px,4vw,48px)).

**Fix riga 35:**
```tsx
// Da:
className="block font-mono text-[clamp(28px,3vw,36px)] font-bold text-text-primary ..."
// A:
className="block font-mono text-[clamp(24px,3vw,36px)] text-text-primary ..."
```
**Nota:** Verificare dimensione esatta dal Figma. L'email nel Figma non è bold — è peso normale mono.

---

### FIX-14: Homepage "How I Work" — Rimuovere intro o renderlo opzionale

**File:** `src/components/sections/HowIWork.tsx`
**Problema:** L'intro paragraph tra SectionHeader e pillars esiste nel codice ma nel Figma non è visibile (i pillar iniziano subito sotto il titolo). Il source file però LO INCLUDE.

**Azione:** Mantenere l'intro (source prende precedenza) ma verificare lo spacing. Attualmente `mb-12` sotto l'intro — ridurre a `mb-8` per uniformità.

---

## P3 — Copy fixes

### FIX-15: MoneyMind statusLabel

**File:** `src/messages/en.json`
**Problema:** `statusLabel: "Coming soon"`. Source dice "In development". Figma dice "IN PROGRESS".

**Fix:**
```json
"moneymind": {
  "statusLabel": "In development",
```

**Anche in lab/page.tsx** cambiare status da `'coming-soon'` a `'active'`:
```tsx
status: 'active' as const,  // era 'coming-soon'
```
Così il dot sarà amber (come nel Figma) e non secondary gray.

---

### FIX-16: Homepage hero — Copy verifica

**File:** `src/messages/en.json`
**Attuale headline:** `"Senior Technical Product Manager. Design, code, and product management in the same head."`
**Source:** Same ✅
**Figma:** "I build products that solve real problems, from design to code to market." — AI-generated, IGNORARE.

**Attuale subtitle:** ha un punto "." tra "B2B SaaS" e "Payments" (`B2B SaaS . Payments . Platform.`).
**Source:** `B2B SaaS · Payments · Platform.` — usa middot `·` non punto `.`

**Fix:**
```json
"subtitle": "B2B SaaS · Payments · Platform. 10+ years designing interfaces..."
```

---

### FIX-17: Homepage CurrentWork — Solo 2 card per source

**File:** `src/messages/en.json`
**Problema:** Il source homepage.md ha solo 2 card nella sezione "Cosa faccio ora" (QubicaAMF + CasaHunter). L'en.json ha 3 (aggiunto MoneyMind/Experiment).

**Azione:** Il Figma mostra 3 card, e la terza (MoneyMind/Experiment) aggiunge valore. Mantenerla se allineata con la strategia. **Non è un errore critico.**

---

### FIX-18: Homepage contact — Figma vs source email

**File:** `src/messages/en.json`
**Figma:** `hello@selfrules.org`
**Source:** `mattia@selfrules.org`
**Attuale en.json:** `mattia@selfrules.org` ✅ — Corretto, source prende precedenza.

---

### FIX-19: About page — Aggiungere subtitle/intro (design enhancement)

**File:** `src/app/[locale]/about/page.tsx` + `src/messages/en.json`
**Problema:** Figma mostra un subtitle sotto il headline ("I didn't start in product management. I got here through design, code, and a lot of building. Here's how."). Source non lo include.

**Raccomandazione:** Aggiungere perché migliora il flow della pagina. Il testo del Figma è buono.

**Fix in en.json:**
```json
"about": {
  "headline": "Better products happen when one person speaks all three languages.",
  "subtitle": "I didn't start in product management. I got here through design, code, and a lot of building. Here's how.",
  ...
}
```

**Fix in about/page.tsx dopo l'h1:**
```tsx
<p className="mt-4 text-base leading-[1.7] text-text-secondary">
  {t('subtitle')}
</p>
```

---

### FIX-20: About CTA — Verifica labels

**File:** `src/messages/en.json`
**Source dice:**
- CTA testo: "If your product needs someone who gets their hands in it..."
- CTA: "Get in touch →" (unica)

**en.json attuale:**
- primary: "Read my case studies" → /work ✅
- secondary: "Get in touch" → mailto ✅

**Figma mostra:** "Read my case studies →" + "Get in touch" ✅

Tutto allineato. ✅ Nessun fix necessario.

---

## P2-BIS — Spacing e dettagli minori

### FIX-21: Homepage Metrics — Separare label e context più chiaramente

**File:** `src/components/ui/MetricCard.tsx`
**Problema:** Il Figma mostra solo il label (uppercase mono) e il context sotto come riga secondaria. Il codice attuale mostra entrambi ma il label non è uppercase mono (fixato in FIX-09). Verificare anche che il context sia separato visivamente con `mt-2` non `mt-1`.

---

### FIX-22: Footer — Verificare build version string

**File:** `src/messages/en.json`
**Attuale:** `"buildVersion": "v1.0.0 · build {buildMonth} · Next.js 16 · {commitCount} commits"`
**Figma:** `v1.0.0 · build 2026.03 · Next.js 16 · 47 commits`
**Azione:** Verificare che le variabili `{buildMonth}` e `{commitCount}` siano correttamente interpolate nel footer component.

---

### FIX-23: Approach page — Sezione titles

**File:** `src/app/[locale]/approach/page.tsx`
**Problema:** I titoli delle 5 sezioni usano `text-[20px]` ✅ — corretto. Ma l'h1 è `text-[clamp(28px,3vw,36px)]` — va portato a `text-[clamp(36px,4vw,48px)]` come le altre inner pages (FIX-06).

---

## Riepilogo priorità

| # | Fix | Priorità | Impatto visivo |
|---|-----|----------|----------------|
| 01 | Timeline cards bordate | P0 | Alto — struttura completamente diversa |
| 02 | CurrentWork layout 1-col + badge destra | P0 | Alto — layout sbagliato |
| 03 | Contact links orizzontali + badge | P0 | Alto — layout sbagliato |
| 04 | About date accent + ordine | P0 | Alto — ordine info sbagliato |
| 05 | ProjectCard badge destra | P0 | Medio — consistenza con Figma |
| 06 | Page headlines troppo piccoli | P1 | Alto — gerarchia tipografica rotta |
| 07 | Pillar/timeline/card titles troppo grandi | P1 | Alto — gerarchia tipografica rotta |
| 08 | Timeline date accent color | P1 | Medio — color token sbagliato |
| 09 | MetricCard label mono uppercase | P2 | Medio — stile inconsistente |
| 10 | CaseStudyCard metricLabel stile | P2 | Basso |
| 11 | Work metric split num+label | P2 | Medio |
| 12 | About section labels | P2 | Medio — manca contesto visivo |
| 13 | Contact email styling | P2 | Basso |
| 14 | HowIWork intro spacing | P2 | Basso |
| 15 | MoneyMind statusLabel | P3 | Basso — copy fix |
| 16 | Hero subtitle middot | P3 | Minimo — carattere separatore |
| 17 | CurrentWork 2 vs 3 cards | P3 | Nessuno — decisione strategica |
| 18 | Email domain | P3 | Nessuno — già corretto |
| 19 | About subtitle | P3 | Medio — UX enhancement |
| 20 | About CTA labels | P3 | Nessuno — già corretto |
| 21 | MetricCard spacing | P2 | Basso |
| 22 | Footer build version | P2 | Basso |
| 23 | Approach h1 size | P1 | Medio |
