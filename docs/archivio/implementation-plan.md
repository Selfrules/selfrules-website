# Piano di Implementazione — selfrules.org

**Stato:** Da eseguire
**Ultimo aggiornamento:** 2026-03-22
**Autore:** Piano creato per Claude Code

---

## Panoramica

Costruire da zero il sito web selfrules.org come sito statico multilingua (IT + EN), dark-mode first, con copy già scritto e design specs definite. Il sito sostituirà l'attuale versione su selfrules.org.

**Repository:** Creare nuovo repo `selfrules-website` sull'account GitHub di Mattia
**Deploy:** Vercel (collegato al repo)
**Dominio:** selfrules.org (già esistente, da reindirizzare al nuovo progetto Vercel)

---

## Obiettivo e posizionamento del sito

selfrules.org è il sito personale di Mattia De Luca, posizionato come **Modello B — identità aspirazionale**.

**Cosa è:** Il sito di un IC (individual contributor) che pensa ad alta voce. Mostra come ragiona, come prende decisioni di prodotto, cosa ha costruito e con quali risultati. Il tono è quello di un professionista affermato, non di un candidato.

**Cosa NON è:** Non è un portfolio da job seeker, non è un funnel di consulenza, non è un blog di content marketing. Non ha toni da coach, guru, o mentor.

**Obiettivo reale (non dichiarato nel sito):** Servire la job search 2026 (target luglio) indirettamente. Un hiring manager o recruiter che atterra su selfrules.org deve pensare "questo è uno che sa quello che fa", non "questo sta cercando lavoro".

**Regole Modello B:**
- Il sito parla di COSA FA e COME PENSA, mai di cosa cerca
- Nessuna frase tipo "sto cercando il prossimo ruolo" da nessuna parte
- Disponibilità e CV esistono SOLO nella sezione Contatto (homepage) e nel Footer
- Mai nell'hero, mai nelle prime sezioni, mai in evidenza
- Il soggetto è il risultato, non Mattia. Le storie aprono con il problema, non con "ho lavorato a"
- Tono IC operator: mostra il pensiero attraverso la specificità delle decisioni, non etichettando framework

**Riferimenti di tono:** kevinyien.com (come parla un PM che pensa ad alta voce), linear.app (come si presenta un prodotto serio), stripe.com/press (densità informativa senza rumore)

**Anti-riferimenti:** melissaperri.com, producttalk.org (troppo coach/guru/funnel)

---

## Fonti dati

| Risorsa | Path relativo (da questa cartella) | Contenuto |
|---------|------|-----------|
| Homepage copy | `../job-search-2026/selfrules-redesign/homepage.md` | 6 sezioni, IT + EN |
| About copy | `../job-search-2026/selfrules-redesign/about-page.md` | Percorso, Cosa credo, Fuori dal lavoro, IT + EN |
| Work copy | `../job-search-2026/selfrules-redesign/work-page.md` | Listing con 2 case study card + 1 placeholder, IT + EN |
| Lab copy | `../job-search-2026/selfrules-redesign/lab-page.md` | CasaHunter + MoneyMind, IT + EN |
| Approach copy | `../job-search-2026/selfrules-redesign/approach-page.md` | 5 sezioni, IT + EN |
| Blog copy | `../job-search-2026/selfrules-redesign/blog-prototype-in-code.md` | 1 saggio, IT + EN |
| Microcopy | `../job-search-2026/selfrules-redesign/microcopy.md` | Nav, CTA, 404, footer, cookie, IT + EN |
| Design specs | `../job-search-2026/selfrules-redesign/figma-make-prompt.md` | Colori, typography, spacing, layout per 6 pagine |

**REGOLA CRITICA:** Il copy nei file sorgente è DEFINITIVO. Copialo esattamente. Non riscrivere, non riassumere, non "migliorare". L'unica eccezione sono adattamenti tecnici (es. markdown → JSX).

---

## FASE 0 — Setup progetto e repo

### 0.1 Creare il repository GitHub

```bash
# Dalla working directory
mkdir selfrules-website && cd selfrules-website
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

Poi:
```bash
git init
gh repo create selfrules-website --public --source=. --push
```

### 0.2 Dipendenze aggiuntive

```bash
npm install next-intl
npm install -D @tailwindcss/typography
```

### 0.3 Struttura directory

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Root layout con font, nav, footer
│   │   ├── page.tsx            # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx        # Case study listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Single case study (futuro)
│   │   ├── lab/
│   │   │   └── page.tsx
│   │   ├── approach/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx        # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Single post
│   │   └── not-found.tsx       # 404
│   ├── globals.css
│   └── layout.tsx              # Root (redirect a locale default)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx         # Wrapper sezione con spacing standard
│   ├── ui/
│   │   ├── Button.tsx          # Primary + Secondary
│   │   ├── MetricCard.tsx
│   │   ├── CaseStudyCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TimelineBlock.tsx
│   │   ├── Tag.tsx             # Monospace tag
│   │   └── LanguageToggle.tsx
│   └── sections/               # Sezioni homepage (opzionale, se serve)
│       ├── Hero.tsx
│       ├── HowIWork.tsx
│       ├── Timeline.tsx
│       ├── Metrics.tsx
│       ├── CurrentWork.tsx
│       └── Contact.tsx
├── i18n/
│   ├── request.ts              # next-intl config
│   ├── routing.ts              # Locale routing config
│   └── messages/
│       ├── it.json             # Tutte le stringhe IT
│       └── en.json             # Tutte le stringhe EN
├── lib/
│   ├── fonts.ts                # Font config (Inter, JetBrains Mono)
│   └── metadata.ts             # SEO metadata helpers
└── content/
    └── blog/
        └── prototype-in-code.mdx  # Blog post (futuro: MDX)
```

### 0.4 Configurazione i18n

File `src/i18n/routing.ts`:
```typescript
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'it'],
  defaultLocale: 'en',
  localePrefix: 'as-needed' // /it/about per IT, /about per EN
});
```

Il routing genera:
- `/` → Homepage EN
- `/it` → Homepage IT
- `/about` → About EN
- `/it/about` → About IT
- etc.

### Criteri di accettazione Fase 0
- [ ] Repo creato su GitHub e accessibile
- [ ] `npm run dev` funziona senza errori
- [ ] La struttura directory è completa
- [ ] next-intl configurato: navigare su `/it` mostra contenuto diverso da `/`
- [ ] Tailwind funzionante (un div con `bg-red-500` si vede rosso)
- [ ] TypeScript compila senza errori

---

## FASE 1 — Design System

### 1.1 Design Tokens (Tailwind v4 CSS-first)

In `globals.css` dentro un blocco `@theme { }` (NON in tailwind.config.ts — Tailwind v4 è CSS-first, vedi STACK.md):

```
Colori:
  bg-primary:     #0A0A0B     (sfondo principale)
  bg-surface:     #111113     (cards, sezioni alternate)
  bg-hover:       #1A1A1F     (hover state cards)
  border-default: #1A1A1F     (bordi cards e divider)
  border-accent:  #E8A838     (hover state bordi)
  text-primary:   #F5F5F0     (testo principale)
  text-secondary: #8A8A8E     (testo muted, label)
  text-tertiary:  #5A5A5E     (testo molto muted)
  accent:         #E8A838     (CTA, metriche, hover)
  accent-hover:   #D4962F     (CTA hover, darker)

Light mode (futuro, NON implementare ora):
  bg-primary:     #FAFAF8
  text-primary:   #1A1A1F
  accent:         #E8A838     (invariato)

Typography:
  font-sans:      Inter (Google Fonts), weights 400, 500, 600, 700
  font-mono:      JetBrains Mono (Google Fonts), weights 400, 500

  Scala:
    hero-headline:   clamp(40px, 5vw, 64px), font-weight 700, line-height 1.1
    section-title:   clamp(28px, 3vw, 36px), font-weight 600, line-height 1.2
    card-title:      20px, font-weight 600, line-height 1.3
    body:            16px, font-weight 400, line-height 1.7
    body-large:      18px-20px, font-weight 400, line-height 1.6
    label:           14px, font-weight 500, uppercase, tracking-wide (0.05em), font-mono
    small:           12px-13px, font-weight 400
    metric-number:   clamp(40px, 5vw, 64px), font-weight 700, font-mono, color accent

Spacing:
  section-gap:     clamp(80px, 10vw, 160px)  (spazio tra sezioni)
  content-width:   720px  (max-width testo)
  wide-width:      1080px (max-width metriche, grid)
  page-padding:    clamp(20px, 5vw, 80px) (padding laterale)

Borders:
  border-radius:   0px OVUNQUE (buttons, cards, inputs, tutto)
  border-width:    1px
  border-color:    var(--border-default)
```

### 1.2 Font loading

In `src/lib/fonts.ts`:
```typescript
import { Inter, JetBrains_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
```

### 1.3 Componenti base

**Button.tsx** — due varianti:
- `primary`: bg accent, testo dark (#0A0A0B), hover con translate-y(-1px) + bg accent-hover
- `secondary`: bg transparent, border 1px border-default, testo text-primary, hover border accent + testo accent
- Entrambi: padding 12px 24px, font-weight 500, 0px border-radius, transition 150ms

**Tag.tsx** — label monospace:
- font-mono, 12-13px, uppercase, tracking-wide, text-secondary
- Opzionale: border 1px, padding 4px 8px

**Section.tsx** — wrapper:
- padding-top/bottom: section-gap
- max-width: content-width (default) o wide-width (prop `wide`)
- margin: 0 auto
- padding-x: page-padding

**MetricCard.tsx**:
- border 1px border-default, 0px radius
- padding: 32px
- numero grande in accent + font-mono
- label sotto in text-secondary
- contesto in small text-tertiary
- hover: border-color → accent (transition 200ms)

**CaseStudyCard.tsx**:
- layout flex: titolo e preview a sinistra, metrica chiave a destra
- border 1px, 0px radius
- padding: 40px
- hover: border accent, translate-y(-2px), transition 200ms
- tag in monospace sopra il titolo

**ProjectCard.tsx**:
- border 1px, 0px radius
- titolo bold, one-liner muted, stack come tag monospace, status dot
- hover: border accent

**TimelineBlock.tsx**:
- card con titolo ruolo, azienda/contesto, date in monospace
- connettore visivo (linea verticale o orizzontale tra i blocchi)

### Criteri di accettazione Fase 1
- [ ] Tutti i colori definiti e accessibili via Tailwind classes
- [ ] Font Inter e JetBrains Mono caricati e visibili
- [ ] Ogni componente renderizza correttamente in isolamento
- [ ] Nessun border-radius > 0 su nessun elemento
- [ ] I colori hanno contrasto sufficiente (text-primary su bg-primary = WCAG AA)
- [ ] Le hover transition funzionano (smooth, 150-200ms)
- [ ] Responsive: i componenti non si rompono sotto 375px

---

## FASE 2 — Layout e Navigazione

### 2.1 Navbar

Specs dal microcopy.md:

```
IT: SELFRULES | Chi sono | Lavori | Lab | Note | Parliamo | IT/EN
EN: SELFRULES | About | Work | Lab | Notes | Let's talk | IT/EN
```

Comportamento:
- Posizione: fixed top, z-50
- Background: trasparente inizialmente → bg-primary/90 backdrop-blur-sm on scroll
- Border bottom: 1px border-default
- Logo "SELFRULES": font-mono, bold, uppercase, tracking-wider, text-primary
- Nav links: font-sans, 14px, font-weight 400, text-secondary, hover text-primary
- Nav CTA ("Parliamo" / "Let's talk"): text accent, font-weight 500
- Language toggle: font-mono, 12px, text-secondary, hover text-primary
- Mobile: hamburger menu (icona minima, 3 linee), menu full-screen overlay dark

### 2.2 Footer

Specs dal microcopy.md:

```
IT:
  bio: "Senior Technical PM. I prototype in code, design the UX, and ship." (inglese anche in IT)
  credit: "Designed and built by Mattia De Luca"
  link: Scarica il CV (PDF)

EN:
  bio: stessa
  credit: stessa
  link: Download CV (PDF)
```

Layout:
- Padding: 40px top, 80px bottom
- border-top: 1px border-default
- max-width: wide-width
- Una riga: bio | email | LinkedIn | GitHub | CV
- Sotto: credit in text-tertiary, 12px
- Tutto centrato o left-aligned

### 2.3 Layout root (`[locale]/layout.tsx`)

```tsx
// Struttura
<html lang={locale} className="dark">
  <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-primary text-primary`}>
    <Navbar locale={locale} />
    <main className="pt-[var(--nav-height)]">
      {children}
    </main>
    <Footer locale={locale} />
  </body>
</html>
```

### 2.4 404 page

Dal microcopy.md:
```
IT: "Questa pagina non esiste. Ma il resto del sito sì."
EN: "This page doesn't exist. But the rest of the site does."
```

Link a homepage. Stile minimo, centrato.

### Criteri di accettazione Fase 2
- [ ] Navbar visibile su tutte le pagine, fixed top
- [ ] Scroll behavior: sfondo nav cambia on scroll
- [ ] Language toggle funziona: `/it/about` ↔ `/about`
- [ ] Tutti i link nav navigano alle pagine corrette
- [ ] Footer presente su tutte le pagine con bio, email, credit
- [ ] Mobile: menu hamburger funzionante
- [ ] 404 page renderizza con il copy corretto in entrambe le lingue
- [ ] Nessun layout shift al caricamento

---

## FASE 3 — Homepage

La pagina più importante. 6 sezioni. Fonte: `homepage.md`.

### 3.1 Hero (Sezione 1)

Layout:
- Full viewport height (min-h-screen)
- Contenuto allineato a sinistra, non centrato
- Vertical centering del blocco testo

Contenuto IT:
```
Headline (hero-headline): "Senior Technical Product Manager. Design, codice, e product management nella stessa testa."
Sottotitolo (body-large, text-secondary): "B2B SaaS · Payments · Platform. 10+ anni..."
CTA primaria (Button primary): "Scrivimi →"
CTA secondaria (Button secondary): "Guarda i lavori →"
```

Contenuto EN: corrispondente da homepage.md sezione EN.

Sotto i CTA: riga di Tag monospace: `10+ anni` · `B2B SaaS` · `Payments` · `5 paesi`

**Non** c'è immagine. La tipografia è l'hero.

### 3.2 Come lavoro (Sezione 2)

Layout:
- Label sopra: "COME LAVORO" / "HOW I WORK" (label style, monospace, text-secondary, uppercase)
- 3 colonne su desktop, 1 su mobile
- Ogni pilastro: titolo (card-title) + testo (body, text-secondary)
- Max width: wide-width

I 3 pilastri da homepage.md.

### 3.3 Percorso (Sezione 3)

Layout: timeline verticale su mobile, orizzontale su desktop.
- 4 blocchi TimelineBlock connessi da una linea
- Date in monospace, text-tertiary
- Titolo ruolo in card-title
- Contesto in body, text-secondary
- Frase di chiusura dopo la timeline in body-large, text-primary

I 4 blocchi + frase di chiusura da homepage.md.

### 3.4 Numeri (Sezione 4)

Layout:
- Label: "NUMERI, NON PAROLE" / "NUMBERS, NOT WORDS"
- Grid 3x2 su desktop, 2x3 su tablet, 1 colonna su mobile
- MetricCard per ogni metrica
- Link sotto: "Leggi i case study completi →" / "Read the full case studies →"
- Max-width: wide-width

6 metriche da homepage.md.

### 3.5 Cosa faccio ora (Sezione 5)

Layout:
- Label: "COSA FACCIO ORA" / "WHAT I'M DOING NOW"
- 2 card affiancate su desktop, stacked su mobile
- Card con border 1px, titolo bold, testo body

2 card da homepage.md.

### 3.6 Contatto (Sezione 6)

Layout:
- Titolo: "Parliamo" / "Let's talk" (section-title)
- Testo invito (body-large)
- Email in font-mono, font-size 20-24px, accent on hover
- LinkedIn, CV link sotto
- Tag disponibilità in monospace

Contenuto da homepage.md sezione Contatto.

### Criteri di accettazione Fase 3
- [ ] Tutte e 6 le sezioni visibili nell'ordine corretto
- [ ] Hero occupa full viewport height con contenuto centrato verticalmente
- [ ] Metriche grid responsive (3x2 → 2x3 → 1x6)
- [ ] Timeline responsive (orizzontale → verticale)
- [ ] Tutti i numeri in accent color + font-mono
- [ ] CTA buttons funzionano (scrollano a contatto / navigano a /work)
- [ ] Copy IDENTICO al file sorgente (verificare parola per parola)
- [ ] IT e EN entrambi funzionanti con tutto il copy corretto
- [ ] Meta title e description impostati da homepage.md sezione Meta
- [ ] Nessun border-radius su nessun elemento
- [ ] Nessun testo tagliato o overflow su mobile 375px

---

## FASE 4 — Pagine interne

### 4.1 About (`/about`, `/it/about`)

Fonte: `about-page.md`

Layout:
- Headline in hero-headline, max-width content-width
- 4 blocchi percorso: nome azienda bold, testo body, metriche bold
- Sezione "Cosa credo": 3 principi, ogni uno con titolo bold + testo
- Sezione "Fuori dal lavoro": tono più leggero, 2-3 righe
- CTA finale
- Meta tags da about-page.md

### 4.2 Work (`/work`, `/it/work`)

Fonte: `work-page.md`

Layout:
- Headline + intro
- 2 CaseStudyCard (+ 1 placeholder se visibile)
- CTA di chiusura con link a About e Contatto
- Card 2 ha nota [BOZZA]

### 4.3 Lab (`/lab`, `/it/lab`)

Fonte: `lab-page.md`

Layout:
- Headline + intro
- 1 ProjectCard principale (CasaHunter) con dettaglio completo
- Sezione "Prossimamente" con MoneyMind in una riga
- CTA a Work

### 4.4 Approach (`/approach`, `/it/approach`)

Fonte: `approach-page.md`

Nota dal file: "Pagina non prioritaria." — Implementarla comunque ma come ultima pagina.

Layout:
- Headline + intro
- 5 sezioni numerate, ognuna con titolo e 2-3 paragrafi
- Chiusura + CTA
- Content-width: 720px max

### 4.5 Blog listing + post (`/blog`, `/it/blog`)

Fonte: `blog-prototype-in-code.md`

Layout listing:
- Headline semplice
- Lista post: data (monospace) + titolo (link) + excerpt
- Empty state dal microcopy: "Le note arrivano quando c'è qualcosa da dire."

Layout single post (`/blog/why-i-prototype-in-code`):
- Titolo grande (section-title)
- Data in monospace, muted
- Corpo in prose style: max-width 720px, line-height 1.7-1.8
- Sezioni separate da `<hr>` o spacing generoso
- No sidebar

Per la v1: il post è hardcoded nel componente o in un file MDX. Non serve un CMS.

### Criteri di accettazione Fase 4
- [ ] Tutte e 5 le pagine navigabili da Navbar
- [ ] Copy IDENTICO ai file sorgente per ogni pagina
- [ ] IT e EN funzionanti per ogni pagina
- [ ] Meta title + description corretti per ogni pagina (da sorgente)
- [ ] CaseStudyCard con hover state funzionante
- [ ] Blog post leggibile con prose styling
- [ ] About page "Cosa credo" visivamente distinta dal percorso
- [ ] Approach page sezioni numerate chiaramente
- [ ] Responsive su tutte le pagine (375px → 1440px)
- [ ] Nessun border-radius su nessun elemento in nessuna pagina

---

## FASE 5 — SEO, Performance, Polish

### 5.1 SEO

Per ogni pagina, da implementare:
- `<title>` e `<meta name="description">` dai file sorgente (sezione Meta)
- Open Graph tags (og:title, og:description, og:url, og:type, og:locale)
- `<link rel="canonical" href="...">`
- `<html lang="it">` o `<html lang="en">` basato su locale
- `hreflang` alternates per IT ↔ EN
- Structured data JSON-LD: Person schema per About, BreadcrumbList per navigazione, Article per blog post
- `robots.txt` e `sitemap.xml` (generati da Next.js)

### 5.2 Performance

- Lighthouse score target: 95+ su tutte le categorie
- Font: preload, display=swap (già gestito da next/font)
- Immagini: per ora nessuna, ma configurare next/image per futuro
- Bundle size: verificare con `npm run build` che JS < 100KB first load
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

### 5.3 Analytics

- Umami script (self-hosted o cloud) nel `<head>`
- Nessun cookie, nessun banner necessario (confermato dal microcopy: "Questo sito non usa cookie di tracciamento.")

### 5.4 Polish visivo

- Scroll animations: sezioni che fade-in on scroll (IntersectionObserver, no librerie esterne)
- Smooth scroll per anchor links (#contact etc.)
- Active state nei link nav (evidenzia la pagina corrente)
- Skip to content link per accessibilità
- Focus visible styles per keyboard navigation
- Prefers-reduced-motion: rispettare, disabilitare animazioni

### 5.5 Cookie banner

Dal microcopy: "Questo sito non usa cookie di tracciamento." — se serve per compliance, una riga in basso, non un popup. Ma dato che Umami è cookieless, probabilmente non serve affatto.

### Criteri di accettazione Fase 5
- [ ] Lighthouse Performance ≥ 95
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse Best Practices ≥ 95
- [ ] Lighthouse SEO ≥ 95
- [ ] Meta tags corretti su tutte le pagine (verificare con `curl -s URL | grep "<title>"`)
- [ ] hreflang tags presenti
- [ ] sitemap.xml generato e accessibile
- [ ] robots.txt presente
- [ ] Nessun CLS visibile al caricamento
- [ ] Fade-in animations funzionanti (e disabilitate con prefers-reduced-motion)
- [ ] Focus styles visibili su tutti gli elementi interattivi

---

## FASE 6 — Deploy e go-live

### 6.1 Vercel setup

```bash
# Se Vercel CLI non installato
npm i -g vercel

# Login e collegamento
vercel login
vercel link  # Collega al repo GitHub
vercel env add NEXT_PUBLIC_UMAMI_WEBSITE_ID  # Se necessario
```

### 6.2 Preview deploy

```bash
vercel  # Deploy preview
```

Verificare:
- Tutte le pagine accessibili
- i18n funzionante
- Nessun errore 500 o 404 inaspettato

### 6.3 Production deploy

```bash
vercel --prod
```

### 6.4 DNS e dominio

- Configurare selfrules.org su Vercel (o aggiornare il progetto Vercel esistente)
- Verificare HTTPS
- Redirect www → non-www (o viceversa)

### Criteri di accettazione Fase 6
- [ ] Preview deploy funzionante su URL Vercel
- [ ] Tutte le pagine accessibili su preview
- [ ] Build senza errori
- [ ] Production deploy completato
- [ ] HTTPS attivo

---

## FASE 7 — Valutazione critica finale

### Checklist di autovalutazione

Claude Code deve eseguire questa checklist COMPLETA e documentare i risultati:

**Design fidelity:**
- [ ] Colori esatti (#0A0A0B, #F5F5F0, #E8A838, #1A1A1F, #8A8A8E)
- [ ] Font Inter per body, JetBrains Mono per label/tag/metriche
- [ ] 0px border-radius ovunque (controllare OGNI elemento)
- [ ] Spacing generoso tra sezioni (80-160px)
- [ ] Content max-width 720px per testo, 1080px per grid

**Copy integrity:**
- [ ] Aprire ogni pagina e verificare che il testo corrisponda ESATTAMENTE al file sorgente
- [ ] Verificare sia IT che EN
- [ ] Metriche: numeri, contesto, attribuzione corretti
- [ ] CTA text corretti
- [ ] Meta title e description corretti

**Funzionalità:**
- [ ] Navigation funziona su tutte le pagine
- [ ] Language toggle IT ↔ EN funziona ovunque
- [ ] Links email clickabili (mailto:)
- [ ] Links LinkedIn/GitHub corretti
- [ ] CV download link funzionante
- [ ] 404 page funzionante

**Responsive:**
- [ ] 375px (iPhone SE): nessun overflow, testo leggibile
- [ ] 768px (iPad): layout adattato
- [ ] 1024px (laptop): layout completo
- [ ] 1440px (desktop): layout ottimale
- [ ] 1920px+: contenuto centrato, non si allarga all'infinito

**Modello B compliance (CRITICO):**
- [ ] Nessun framing "sto cercando lavoro" nell'hero o nelle prime sezioni
- [ ] Disponibilità solo nella sezione Contatto
- [ ] CV download solo in Contatto e Footer
- [ ] Il sito parla di COSA FA e COME PENSA, non di cosa cerca

**Performance:**
- [ ] `npm run build` senza errori
- [ ] Bundle size ragionevole (< 100KB first load JS)
- [ ] Nessun warning in console
- [ ] Nessun hydration mismatch

### Processo di fix

Se la checklist rivela problemi:
1. Documentare ogni problema trovato
2. Classificare: CRITICO / IMPORTANTE / MINORE
3. Fixare tutti i CRITICI
4. Fixare tutti gli IMPORTANTI
5. Valutare i MINORI
6. Ri-eseguire la checklist

**L'obiettivo è 100% dei check superati prima di considerare il progetto completato.**

---

## Timeline stimata

| Fase | Effort stimato | Dipendenze |
|------|---------------|------------|
| 0 — Setup | 15 min | Nessuna |
| 1 — Design System | 30 min | Fase 0 |
| 2 — Layout + Nav | 30 min | Fase 1 |
| 3 — Homepage | 45 min | Fase 2 |
| 4 — Pagine interne | 60 min | Fase 2 |
| 5 — SEO + Polish | 30 min | Fase 3+4 |
| 6 — Deploy | 15 min | Fase 5 |
| 7 — Valutazione | 20 min | Fase 6 |

**Totale stimato: ~4 ore**

---

## Nota finale

Questo piano è progettato per essere eseguito in autonomia da Claude Code. Ogni fase ha criteri di accettazione espliciti. Non passare alla fase successiva finché tutti i criteri della fase corrente non sono soddisfatti. Se qualcosa non funziona, fermarsi, diagnosticare, e fixare prima di procedere.

Il risultato atteso è un sito web funzionante, deployato, con copy identico ai file sorgente e design fedele alle specifiche. Non un prototipo, non un placeholder. Un sito finito.
