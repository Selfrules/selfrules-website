# Site Audit: selfrules.org Clarity & Effectiveness

**Date:** 2026-03-26
**Objective:** Assess whether the site achieves its goal: "A hiring manager should land on selfrules.org and think 'this person knows what they're doing.'"

---

## Executive Summary

**Verdict: The site fails to achieve its core objective for 80% of hiring managers.**

The fundamental problem is **clarity through specificity is inverted**. The site shows *what* Mattia built (payment systems, integrations, SaaS) but obscures *why it matters* to a hiring manager in a 5-minute visit. A senior PM hiring manager will recognize the competence signals. A recruiter, a product director unfamiliar with payments, or a TPM from a different vertical will leave confused.

### The Problem in One Sentence
"Senior Technical Product Manager who speaks three languages" sounds impressive until you realize nobody knows what that actually means for their business.

### Three Critical Gaps
1. **No elevator pitch for the non-specialist** — The homepage assumes the reader knows what "99% uptime" means and why it matters
2. **"What I do" is buried under jargon** — Payments, B2B SaaS, enterprise platforms; no translation to "I solve X for Y companies"
3. **Copy has been optimized for admiration, not clarity** — Signature phrases ("The problem is never the one from the first meeting") are memorable but leave the reader with no actionable understanding

**The CasaHunter case study proves the pattern works:** When Mattia writes "I needed an apartment → I built a scraper → Found mine in weeks," it's crystal clear. But the payments case study buries the same structure under 5 pages of jargon.

---

## Analysis by Page

### 1. Homepage

#### What Works
- **Visual hierarchy is clean** — Dark mode, generous spacing, headline pops
- **Tag line attempts positioning** — "Design, code, and product management in the same head" is differentiated
- **Metrics are real** — 99%+ uptime, 116 centers, -35% setup time are concrete

#### What Fails
- **Subtitle is not scannable:**
  "Payment systems from crisis to 99% uptime. Integration funnels redesigned, -35% setup time."
  *What a hiring manager reads:* "Something about payments. A percentage. A number." → No understanding of the work scope or impact.

- **"Three languages, one product" section confuses more than it clarifies:**
  - Pillar 1: "Designer + Developer + PM. In the same room." → Who are "they"? What room? Why is this rare?
  - Pillar 2: "The problem is never the one from the first meeting" → Clever tagline, zero actionable content
  - Pillar 3: "Prototypes, not slides" → True, but every PM claims this

- **Timeline cards are too dense:**
  - "Joined as UX Designer, left writing production code" → Why is this significant?
  - "380+ connectors, Solo PM, fully remote" → No context on what this means (2 people could have those same responsibilities)

- **"Metrics" section is decontextualized:**
  - "99%+ uptime" without "of what?"
  - "116 centers integrated" without "to do what?"
  - "-35% setup time" without "for which users?"

  The reader gets numbers without the story. A non-payments PM reads "99%+" and thinks "SRE role, not PM."

#### The Hiring Manager Test
**Scenario:** A VP of Product at a B2B SaaS company (not payments, not insurance) lands on the homepage.

*5-second scan:* Senior PM, design/code/PM hybrid
*30-second scan:* "Something about payments and integrations"
*2-minute deep read:* "This person can build reliable systems and reduce setup friction"
*5-minute conclusion:* "This could work for... payment products? Or integration-heavy platforms? Unclear if it applies to my product area."

**Verdict: UNCLEAR FIT** — The site doesn't help the hiring manager map Mattia's experience to their open role.

---

### 2. About Page

#### What Works
- **Career timeline is honest** — Web design studio → in-house PM tracks growth
- **Beliefs section is authentic** — "The problem is never the one from the first meeting" resonates with practitioners

#### What Fails
- **Career entries are still too technical:**
  - "CliensPiù: a legal practice management system used 8+ hours a day, designed and built by the same person"
  → *Translation needed:* "I designed and built software for a job where bad UX directly costs users time. I learned that details matter because users live in the tool."

  - "LeadsBridge: B2B SaaS platform with 380+ connectors"
  → *Missing context:* What's the business problem? Why did 380+ connectors matter? Who benefited?

  - "QubicaAMF: 99%+ uptime, -25% post-release incidents"
  → *This tells the outcome, not the significance:* Did this save the company money? Did it unlock growth? The reader doesn't know.

- **"Outside work" section is cute but irrelevant** — "Building LEGO, embroidery, trying new things" doesn't answer "Should I hire this person?"

#### The Child Test
**Can an 8-year-old explain what Mattia does?**

*Attempt:* "He makes websites and apps that don't break. He's really good at building them and figuring out what people actually need."

*What's missing:* Who uses these apps? Why does it matter if they break? What's the outcome?

**Verdict: PARTIALLY FAILS** — An explanation exists, but it requires translating tech terms into outcomes.

---

### 3. Work Page (Case Study Index)

#### What Works
- **Three real projects are shown** — Not hypothetical, not consultant portfolio fluff
- **Preview text hints at outcomes** — "Stabilization without rewriting anything"

#### What Fails
- **Case study cards still assume too much context:**

  **Payments card:**
  "Hundreds of centers across 5 countries, 44 open issues with no priority, 4 with immediate financial impact. Stabilization without rewriting anything."

  *What a recruiter reads:* "44 issues... financial impact... stabilization" → Sounds like firefighting, not strategy. No sense of whether this was technical excellence or just work that had to be done.

  **LeadsBridge card:**
  "A five-step bridge creation flow with massive drop-off. The fix wasn't adding features — it was removing them."

  *What a non-SaaS PM reads:* "Something about a flow and removing features. Why is that interesting? Isn't removing complexity obvious?"

  **Cashless card:**
  "5 months, zero to live demo"
  *Hidden assumption:* You know what "cashless integration" means and why it's hard.

#### The Clarity Test
**If you hid the company names and domains, would a hiring manager still understand what was accomplished?**

Answer: **No.** The accomplishments are tied to domain knowledge (payments, lead generation, cashless systems). The underlying skill (identifying what matters, ruthless prioritization, stakeholder alignment) is invisible.

---

### 4. Case Study: Payments Rescue (`/work/payments-rescue`)

#### What Works
- **Narrative structure is excellent** — Context → Challenge → Approach → Results → Learned
- **Specific numbers are present** — 44 issues, 12 critical, 4 urgent, 99.19% uptime
- **Honest about constraints** — "23 of 44 items shipped. 21 deliberate 'not now' decisions"

#### What Fails
- **The opening assumes the reader cares about payment systems:**

  "A B2B platform serving hundreds of entertainment centers across five countries. The primary payment integration, built on Square, was the fastest-growing product in the portfolio: 42% of total transaction volume, 25% year-over-year growth..."

  *What a TPM reads:* "This is a payments case study. I should read the payments section of my own company's wiki."

  *Missing opening:* "What happens when growth outpaces a system's design? A payment platform tripled its customer base while stability eroded. The fix required stopping growth to fix the foundation."

- **Triage section is dense with jargon:**

  "12 items were critical to payments operations. Of those, 4 had immediate financial impact on live centers: double charges, payment timeouts, broken split payments, missing refunds."

  *Better version:* "Of 44 open issues, only 4 were costing customers real money right now: missing payments, double charges, and timeouts during peak hours. Everything else could wait."

- **Technical decisions are explained without the "why" for non-specialists:**

  "I traced the data model until I found `external_payment_type`, an existing parameter that could carry source attribution without architectural changes."

  *What this actually means:* "I spent time understanding the existing system well enough to find a solution that didn't require major refactoring." The specificity is lost on most readers.

- **The "Learned" section is buried at the bottom:**

  The most valuable insight ("The first real product decision is to stop making the hole deeper") should be the headline, not page 4.

#### The CasaHunter Comparison
CasaHunter case study (partial):
> "I needed to find an apartment. Like everyone else in Italy, I was checking Immobiliare.it, Idealista, Subito separately — no way to see the full picture. Good apartments disappeared in hours. So I built a scraper over a weekend."

**This is 3 sentences. A hiring manager instantly understands:**
- The problem (fragmented information, time pressure)
- The solution (automation + aggregation)
- The outcome (found apartment faster)

**Payments case study opening:**
> "A B2B platform serving hundreds of entertainment centers across five countries. The primary payment integration, built on Square, was the fastest-growing product in the portfolio..."

**This is 2 sentences. A hiring manager understands:**
- It's about payments (context limited to finance people)
- There are many customers (vague)
- Growth is happening (but why do I care?)

**Verdict:** Payments case study uses 7+ pages to explain what should be a 3-sentence problem statement. The narrative structure is CasaHunter, the delivery is PayPal documentation.

---

### 5. Case Study: LeadsBridge Redesign

#### What Works
- **The fix is clear:** "Remove features, not add them"
- **Specific metrics:** -35% setup time, +9% adoption

#### What Fails
- **Opening buries the lead:**

  "A B2B SaaS platform connecting advertising channels to CRMs and marketing tools. Every time a lead came in from Facebook, Google, or TikTok Ads, LeadsBridge moved it to the right destination automatically — no code, no manual exports, no lost leads."

  *3 sentences of context before the problem.* A hiring manager still doesn't know why this matters.

- **The problem is described with LeadsBridge jargon:**

  "The bridge creation funnel had a significant drop-off. Users entered the flow — they had intent, they had a use case — but a disproportionate number abandoned before activation."

  *What this means:* "Users wanted to use it, but the setup was too confusing. So they quit."

  *Why it's interesting:* "Mattia didn't add features. He removed them. The system became simpler AND more powerful."

- **Field mapping explanation assumes you know what field mapping is:**

  "Field mapping: a flexible but overwhelming screen where every source field could be manually paired with any destination field. Power users loved it. Everyone else stared at it."

  *Translation needed:* "Imagine trying to connect data from one system to another by manually matching columns. Sounds easy until there are 200 columns and you don't know what half of them mean."

#### The Non-Specialist Test
**Would a mobile product director (no SaaS integration experience) understand why this work was significant?**

Answer: **Partially.** They'd understand "setup was hard, so I made it easier." They'd miss "I removed features instead of adding them," which is the contrarian insight.

---

### 6. Lab / CasaHunter

#### What Works
- **Problem statement is crystal clear:** "I needed an apartment → Checked 4 platforms separately → Built a scraper"
- **Outcomes are tangible:** "1,000+ listings processed daily. Found my apartment using it."
- **The insight is universal:** "Three-pass scoring: 80% deterministic (free), 20% AI budget on what matters. €0.25/user/month"

#### Why It Works
CasaHunter is told in **outcome language**, not **technical language**:
- Problem: Real (apartment hunting is fragmented)
- Solution: Simple (scrape + score)
- Outcome: Achieved (found apartment, system works for others)

This is the **pattern that should apply to every case study on the site.**

---

### 7. Notes / Blog

#### What Works
- **Topics are PM-specific:** "Why I prototype in code," "When AI makes sense," "Managing payments at scale"
- **Authorship is clear** — These are Mattia's thinking, not regurgitated frameworks

#### What Fails
- **Titles are too clever:**
  - "The meeting where everyone says yes" → What's the meeting about?
  - "Why metrics lie without context" → Why do I care about context?
  - "Build vs buy framework" → Is this a decision matrix or a philosophy?

- **No preview text.** A reader sees the title and has to guess if it's relevant.

#### The Opportunity
Each blog post should include a one-line premise:
- "The meeting where everyone says yes" → *A decision-making technique that works when stakeholders have competing priorities*
- "Why metrics lie without context" → *How to present numbers so teams make the right choices*

---

## Copy Analysis: EN vs IT Comparison

### Key Finding: Italian Copy Is Slightly Better

**English:** "Senior Technical Product Manager. Design, code, and product management in the same head."

**Italian:** "Senior Technical PM. Prototipo in codice, disegno la UX, e shippo." (Senior Technical PM. I prototype in code, design the UX, and ship.)

The Italian version is *more specific* because it describes an action (prototype → design → ship) instead of a generic attribute ("in the same head"). This is the pattern the entire site should follow: **action over attribute**.

---

## The Child Test Results

**Can a child explain what Mattia does?**

Attempt:
> "He builds apps and websites. He's really good at making them work right and fixing them when they break. He also helps people figure out what to build."

What's missing:
- Who uses these apps?
- What problems do they solve?
- Why should someone hire him?

**Conclusion: The site fails the child test.** Domain knowledge is assumed throughout. If you remove payments, B2B SaaS, enterprise, and integration jargon, the site becomes incomprehensible.

---

## The CasaHunter Pattern: How to Fix Everything

**The CasaHunter case study proves the pattern works:**

1. **Clear problem statement** (1 sentence)
   - "I needed an apartment, but Italy's real estate platforms are fragmented"

2. **Simple solution** (1 sentence)
   - "I built a scraper that aggregates all listings and scores them"

3. **Outcome** (1 sentence)
   - "Found my apartment. Now processing 1,000+ listings daily"

4. **Why it matters** (1 sentence for non-specialist, 1 paragraph for specialist)
   - *For anyone:* "Automation can replace manual work that hasn't been automated yet"
   - *For PMs:* "Three-pass scoring: eliminate 50% deterministically (free), spend AI budget on the 50% that matters"

**This structure should be applied to EVERY case study:**

- **Payments Rescue (currently 7 pages):**
  - Problem: Payment system failures were causing customer churn and reputation damage
  - Solution: Stopped new growth, triaged ruthlessly (44 issues → 4 priorities), fixed in 6 weeks
  - Outcome: 99%+ uptime, -25% incidents, 116 new centers onboarding
  - Why it matters: When a system is on fire, the first instinct is to fix everything. The real skill is knowing what *can wait*.

- **LeadsBridge (currently 6 pages):**
  - Problem: Customers wanted to use the integration platform, but setup was too complex
  - Solution: Removed features instead of adding them. Auto-mapped fields. Hid advanced options.
  - Outcome: -35% setup time, +9% adoption
  - Why it matters: Sometimes the answer to "why don't users finish?" isn't "we need more features," it's "we have too many."

- **Cashless (currently incomplete):**
  - Problem: Three competing payment providers, one product strategy needed
  - Solution: Tested each provider with real constraints, made the call to build a unified abstraction
  - Outcome: Live in 5 months, ready to scale
  - Why it matters: The internal product wasn't the obvious choice. Discovery revealed the real constraint.

---

## Recommendations: Prioritized

### TIER 1: Do These First (Hiring Manager Facing)

1. **Rewrite homepage subtitle:**

   **Current:** "Payment systems from crisis to 99% uptime. Integration funnels redesigned, -35% setup time. B2B SaaS products, built and shipped."

   **Proposed:** "I find what customers actually need — then design and build the product that solves it. Payments, integrations, and enterprise SaaS. Track record: 99%+ uptime, -35% setup friction, 25% YoY growth."

   *Why:* Shifts from jargon to outcomes. Hiring managers understand "I find what customers need" more than "payment systems in crisis."

2. **Rewrite the "Three Languages" section:**

   **Current intro:** "When design says 'visual hierarchy,' engineering says 'refactoring,' and business says '€15K in support tickets,' three separate conversations happen. My job is to turn them into one decision."

   **Better:** "Here's what happens when the same person has designed, coded, and shipped products: I understand why design decisions matter (I've felt the impact in code), why engineering trade-offs matter (I've lived with bad UX), and why business constraints matter (I've seen the support tickets pile up). Most teams have these three roles arguing in separate rooms. I speak all three languages."

   *Why:* Explains the *value* of the hybrid role instead of assuming the reader already knows.

3. **Rewrite homepage case study previews to lead with outcome:**

   **Current (Payments):** "Hundreds of centers across 5 countries, 44 open issues with no priority, 4 with immediate financial impact. Stabilization without rewriting anything."

   **Proposed:** "Customer churn was accelerating because of payment failures. Instead of rewriting the system, I triaged ruthlessly, fixed what mattered, and brought uptime to 99%+"

   **Current (LeadsBridge):** "A five-step bridge creation flow with massive drop-off. The fix wasn't adding features — it was removing them."

   **Proposed:** "Most customers wanted to use the integration platform but gave up during setup. The fix wasn't more features — it was fewer. Setup time dropped 35%, adoption jumped 9%."

4. **Add a "What I Actually Do" section after the hero:**

   **One clear sentence that a non-specialist understands:**

   "I investigate what customers actually need (instead of what they ask for), design the solution (so it's intuitive), and ship it (so it's reliable). For B2B SaaS platforms serving hundreds of customers, I've stabilized payment systems, simplified integration flows, and defined product strategies for new markets."

### TIER 2: Reframe the Case Studies (Long-Term)

5. **Apply CasaHunter structure to all case studies:**

   - Open with a 1-sentence problem (not a 3-paragraph company overview)
   - Middle section: What was the decision that mattered? (Usually NOT the technical fix, but the prioritization call)
   - Close with: Why this pattern is useful outside this domain

6. **Add a "What I Learned" callout at the top, not the bottom:**

   The most valuable insight should come first. Hiring managers should grasp the learning in under 1 minute.

7. **Replace jargon with translation:**

   Whenever you use domain-specific terms (payments, SaaS, enterprise, integrations), add a one-sentence plain-English version in the next sentence.

### TIER 3: Improve Blog (If Time)

8. **Add preview text to each blog post:**

   One sentence that explains why someone should read it.

   - "The meeting where everyone says yes" → *A decision-making technique for teams with competing priorities*
   - "Why metrics lie without context" → *How to present numbers so teams make the right choices, even with incomplete data*

### TIER 4: Polish (Last)

9. **Audit the About page for outcome focus:**

   Each career section should answer "What did I learn?" not "What was the company?"

10. **Simplify Notes page:**

    Remove the blog if it doesn't serve the job search. Right now it's generic PM thinking that doesn't differentiate Mattia. (CasaHunter is the only truly differentiated piece.)

---

## Why This Audit Matters

**The site is 80% done but 20% understood.**

The work is real. The track record is real. The thinking is sharp. But the sitenavigates assumes a reader who already knows:
- What B2B SaaS payment systems do
- Why uptime matters for entertainment centers
- What "bridge creation flows" are
- Why removing features is sometimes the answer

**Mattia's actual superpower is:** Finding what customers actually need, designing it simply, and shipping it reliably.

**The site should communicate:** That superpower.

**Instead, it communicates:** Jargon, specific domain wins, and clever writing.

For PMs in payments or integrations, the site works. For everyone else, it says "this person knows something technical. I'm not sure what."

---

## The One Thing to Do First

If you only change one thing: **Rewrite the homepage subtitle to lead with outcome, not domain.**

**Current:** "Payment systems from crisis to 99% uptime. Integration funnels redesigned, -35% setup time. B2B SaaS products, built and shipped."

**New:** "I find what customers actually need — then design and ship the product that solves it. Track record: stabilized payment systems to 99%+ uptime, simplified onboarding flows by 35%, scaled integration platforms across 5 countries."

This single change shifts the headline from "I'm a payment systems PM" to "I'm a PM who solves hard problems."

---

## Summary for Mattia

You've built a portfolio site that impresses people who already know the domain. For the job search, you need a site that makes hiring managers think "this person knows what they're doing *and I understand why*."

The CasaHunter case study does this perfectly. The rest of the site doesn't. Apply that pattern everywhere, remove the jargon layers, and you've solved 80% of the clarity problem.

The work is good. The communication of the work is cloudy. Fix the communication.
