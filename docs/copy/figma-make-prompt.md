# Figma Make Prompt — selfrules.org Redesign

## Come usare questo file

Figma Make funziona meglio con prompt dettagliati e specifici. Dato che il sito ha più pagine, il consiglio è procedere così:

1. **Inizia dalla Homepage** — usa il Prompt 1 per generare l'intera homepage. Questo stabilisce il design system.
2. **Itera sulla Homepage** — aggiusta colori, typography, spacing finché non sei soddisfatto.
3. **Genera le pagine interne una alla volta** — usa i Prompt 2-6, facendo riferimento alla homepage come stile di riferimento (allega il frame della homepage al prompt).
4. **Per ogni prompt successivo**, allega come riferimento il frame della homepage generato, così Figma Make mantiene coerenza visiva.

---

## Prompt 1: Homepage (one-pager con sezioni)

```
Context: Personal portfolio website for a Senior Technical Product Manager. The site is for selfrules.org — the personal site of Mattia De Luca, a PM with a cross-functional background (designer → developer → product manager). The primary audience is tech recruiters and hiring managers at SaaS companies in EU and US. Secondary audience is product peers and professionals.

The design should feel like the website of someone who builds things — not a consultant selling courses, not a corporate site. Think: a craftsperson's workshop, clean but with personality. The closest references in spirit are kevinyien.com (radical simplicity, content-first), linear.app (clean dark UI with sharp typography), and stripe.com/press (elegant information density).

Platform: Desktop (1440px wide), responsive-ready.

Visual style:
- Color scheme: Dark mode primary. Deep charcoal background (#0A0A0B or similar very dark neutral), with off-white text (#F5F5F0). One accent color — a warm amber/gold (#E8A838) used sparingly for CTAs, hover states, and key metrics. No gradients, no neon. The palette should feel sophisticated and warm, not cold-tech.
- Typography: Use a modern geometric sans-serif for headings (similar to Inter, General Sans, or Satoshi — clean, contemporary, high readability). Use a slightly warmer sans-serif or the same font at lighter weight for body text. Monospaced font (JetBrains Mono or similar) for any code snippets, tags, or technical labels — this subtly signals the technical/builder identity.
- Spacing: Generous whitespace between sections (120-160px). Content max-width 720px for text blocks (optimal reading width). Metrics grid can go wider (up to 1080px). Let the content breathe.
- Borders & shapes: No border-radius (0px corners on all elements — buttons, cards, images). Sharp edges convey precision and intentionality. Subtle 1px borders in muted colors (#1A1A1F) for cards and dividers.
- No decorative illustrations, no stock photos, no gradients, no shadows. If images are needed, use only real photos or abstract geometric shapes.
- Micro-interactions: Subtle hover states — text links shift to accent color, buttons have a slight translate-Y on hover. Nothing flashy.

Layout — The homepage is a vertical scroll with 6 distinct sections:

SECTION 1 — HERO
- Full viewport height
- Left-aligned content (not centered)
- Large headline (48-64px): a strong value proposition statement, not the name (name is already in the nav)
- Subtitle (20-24px, muted color): 2-3 lines expanding the positioning — the designer→developer→PM path as a differentiator
- Two CTA buttons side by side: primary "Let's talk" (accent color background, dark text) and secondary "See my work" (outline style, muted border)
- Below CTAs: a horizontal row of 3-4 small credential tags in monospace font (e.g., "10+ years", "B2B SaaS", "Payments", "5 countries")
- No hero image. The typography IS the hero.

SECTION 2 — APPROACH (How I work)
- Section title left-aligned, smaller (14px uppercase tracking-wide, muted color label above the actual title)
- 3-column grid with 3 approach pillars, each with:
  - A short bold title (20px)
  - 2-3 lines of description (16px, muted)
  - No icons — words are enough
- The three pillars: "Three languages" (design, code, business), "The real problem" (discovery-first), "Ship it" (prototypes over slides)

SECTION 3 — TIMELINE (Career path)
- A horizontal timeline showing 4 phases: Designer (2012-18) → Developer (2016-20) → Product Owner (2020-23) → Product Manager (2023-now)
- Each phase is a card with: role title, 1-line company/context, 1-line key takeaway
- Visual connector between phases (thin line or arrow)
- The overlap between designer and developer phases should be visually represented (overlapping cards or dual-color segment)
- Below the timeline: one connecting sentence in slightly larger text

SECTION 4 — RESULTS (Metrics)
- A 3x2 grid of metric cards
- Each card: large number in accent color (48-64px, bold), metric label below (14px, muted), one line of context (12px)
- Metrics: "-12%" (processing times), "+9%" (integration adoption), "-25%" (post-release incidents), "99%+" (uptime), "116" (centers integrated), "5/week" (new centers onboarded)
- Below the grid: a subtle link "See the case studies →"

SECTION 5 — NOW (What I'm doing)
- 2-3 horizontal cards showing current work/projects
- Each card: project name, one-line description, a tag for status (e.g., "Active", "Shipped", "Experiment")
- Cards have the subtle 1px border, no background fill — just enough to define the space
- Projects: current role at QubicaAMF (framed as payments/platform), CasaHunter (side project), one more

SECTION 6 — CONTACT
- Simple, no-frills
- A headline that invites conversation (not "Contact me")
- Email address displayed prominently (large, clickable, monospace font)
- Below: LinkedIn link and CV download link, both as text links with subtle arrow icons
- One line about availability: "Currently open to EU remote and US remote opportunities"

NAVIGATION (fixed top):
- Left: "SELFRULES" wordmark in bold monospace, all caps, letter-spaced
- Right: nav links — About, Work, Lab, Blog, Contact — in regular weight
- Rightmost: language toggle "EN / IT"
- Thin bottom border (1px, muted) separating nav from content
- On scroll: nav gets a subtle dark background tint

FOOTER:
- Minimal — one-line bio, email, LinkedIn, GitHub
- "Designed and built by Mattia De Luca" in small muted text
- No large footer blocks
```

---

## Prompt 2: About Page

```
Design the About page for selfrules.org, using the same design system as the homepage (reference: attached homepage frame).

Layout:
- Wide headline at top — something more specific than "About", like a positioning statement
- The career story told in 4-5 well-spaced paragraphs with generous line-height (1.7-1.8)
- Key companies/projects mentioned inline with subtle bold or accent color treatment
- A "What I believe" section with 3-4 principles, each as a short bold statement followed by 2 lines of explanation — not in cards, just well-spaced text blocks
- A brief "Outside work" section — 2-3 lines, humanizing, lighter tone
- CTA at bottom pointing to case studies or contact
- Content max-width: 720px, centered on page
- No sidebar, no image, no photo. Text-first design.
```

---

## Prompt 3: Work Page (Case Studies listing + single case study)

```
Design two frames for selfrules.org Work section, same design system as homepage:

FRAME 1 — Case Study Listing (/work)
- Page headline
- 3 case study cards stacked vertically (not grid — full width, one per row)
- Each card:
  - Left side: title (the result, not the project name — e.g., "How we reduced post-release incidents by 25%"), sector tag in monospace, one line of outcome
  - Right side: key metric in large accent-colored number
  - Subtle 1px border, no background
  - Hover state: slight border color shift to accent
- Cards are generous in height (at least 200px) with ample padding

FRAME 2 — Single Case Study (/work/[slug])
- Metadata bar at top: role, company, period, tech stack — in monospace, small, muted
- Content area (720px max-width):
  - Title (the result — large, 36-48px)
  - "Context" section header (14px uppercase label) + 2-3 paragraphs
  - "Challenge" section header + 1-2 paragraphs
  - "Approach" section header + 3-4 paragraphs
  - "Results" — metrics displayed as an inline grid (2x2 or 3x1), large numbers in accent color
  - "What I learned" section header + 1-2 paragraphs
- Sticky sidebar-style navigation showing section names (optional, only if layout allows)
- No images in this first version — focus on text and metrics
```

---

## Prompt 4: Lab Page (Build Log / Side Projects)

```
Design the Lab page for selfrules.org, same design system as homepage.

This is the "What I build" page — showcasing side projects as proof of the PM+Builder identity.

Layout:
- Headline: something like "What I build" — not "My Projects"
- 2-3 lines of intro explaining why a PM builds side projects
- Project cards in a 2-column grid (or 1-column on mobile):
  - Each card:
    - Project name (bold, 20px)
    - One-liner description (16px, muted)
    - Tech stack shown as small monospace tags (e.g., "Python", "React", "Claude API")
    - Status indicator: small colored dot + label ("Shipped", "In Progress", "Experiment") — green/amber/blue dots
    - A "What it taught me" line in slightly different style (italic or smaller, captures the PM learning)
    - Link to repo/demo as subtle text link with arrow
  - Cards have 1px border, generous padding, no background fill
- 3 projects: CasaHunter, MoneyMind, OpenClaw
```

---

## Prompt 5: Blog/Notes Page

```
Design the Blog listing page for selfrules.org, same design system.

This is a minimal blog — "thinking out loud", not content marketing.

Layout:
- Simple headline
- List of posts — no cards, just a clean list:
  - Each post entry: date (monospace, muted, small) + title (18-20px, link style) + one-line excerpt (muted)
  - Generous vertical spacing between entries (40-60px)
  - No images, no categories, no tags on the listing
- This should look like a reading list, not a magazine
- Optional: subtle year separators if posts span multiple years
- Pagination at bottom (simple "Older →" link)
```

---

## Prompt 6: Contact Page

```
Design the Contact page for selfrules.org, same design system.

Keep it simple and direct — no form.

Layout:
- Headline that invites conversation (not "Contact")
- 2-3 lines segmenting who might contact: "Looking for a PM? Want to discuss a project? Just want to talk product?"
- Email address: large (24-32px), monospace, clickable, accent color on hover
- Below: LinkedIn and CV download as clean text links with subtle icons
- Availability statement: "Currently open to EU remote and US remote PM roles"
- A note about timezone: "Based in Italy (CET). 4-6 hours overlap with US East Coast."
- Lots of whitespace. This page should feel calm and approachable.
```

---

## Note su Dark/Light mode

Il sito è pensato dark-mode first. Se vuoi aggiungere un light mode in futuro, inverti il background a #FAFAF8 (warm off-white), il testo a #1A1A1F, e mantieni l'accent color amber invariato. Il toggle può stare nel nav accanto al language switch.

## Note tecniche per l'implementazione

- Il sito sarà implementato con un framework moderno (Next.js o Astro)
- Le animazioni di scroll saranno aggiunte in fase di sviluppo, non nel design
- Il design system deve funzionare come base per componenti riutilizzabili
- Il font monospace per tag e label è un segnale visivo intenzionale: dice "questa persona sa programmare" senza doverlo dichiarare

---

## Fonti e ispirazione

La direzione di design sintetizza:
- **kevinyien.com** — radical simplicity, content-first, no decorative elements
- **linear.app** — dark UI, sharp typography, precision
- **stripe.com/press** — elegant information density, metrics presentation
- **Sam Dickie** (samdicki.es) — crisp startup-style, smooth transitions, indie maker identity
- **Elezea** (elezea.com) — text-first, optimized for reading, thought leadership through writing
- Trend 2026: via da minimalism "freddo e generico" → verso personalità autentica con constraints precise (sharp corners, monospace accents, warm accent color su dark)
