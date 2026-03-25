# LinkedIn Posts — Selfrules Blog Posts

Each post below is ready to copy-paste directly into LinkedIn. All links point to https://selfrules.org/notes/[slug].

---

## 1. Why metrics lie without context

Early in my PM career, I walked into a quarterly review with "DAU up 23%." The room was happy. We moved on.

Three weeks later: the increase was a bug in session tracking that was double-counting users. Real DAU was flat. We'd spent the quarter optimizing for a metric that was lying to us.

Every metric needs three things.

The number tells you what happened. The mechanism tells you why. The counter-metric tells you what you're paying for it. Push notifications increased DAU but tripled opt-out rates. Price increases grew revenue but churn went from 3% to 7%. Without all three, you're making decisions with one eye closed.

The best dashboard I built had four numbers: acquisition, activation, retention, revenue. Each with a target, a trend line, and one sentence explaining why it was moving. That's it. I've seen teams with 30+ metrics that don't change a single decision.

When someone presents a metric, I ask three questions: "What's the mechanism?" "What's the counter-metric?" "What would you do differently if this number were 10x worse?" If they can't answer, we're tracking the wrong thing.

Full post with more detail → https://selfrules.org/notes/why-metrics-lie-without-context

#ProductManagement #Metrics #DataDriven

---

## 2. The meeting where everyone says yes

There's a specific type of meeting I've learned to dread. Everyone nods. Every idea gets a "yeah, makes sense." The whiteboard fills up. We leave feeling productive.

Then nothing happens. Or worse — everything happens, in every direction at once.

Agreement is easy. Alignment is work.

Agreement means nobody pushed back. Alignment means everyone understands why we're doing this and what we're not doing as a result. Products are built on trade-offs, not consensus. When someone says "can we also add X?" and the PM says "sure, we'll look into it," that's agreement. Alignment would be: "X is interesting, but we're betting on Y because [reason]. If Y doesn't work, X is next."

Every team has a parking lot — the place where ideas go when you don't want to say no. The problem is when the parking lot becomes the roadmap. I've seen teams with 40+ items in "future considerations," each added because someone said "we should think about this" and nobody wanted to be the person who said no. If something sits parked for two quarters and nobody pulls it back, it wasn't important. Delete it.

Before the meeting, write down the one decision you need to make. During the meeting, when someone says yes too quickly, ask "what would change your mind?" After the meeting, send one sentence: "We decided X because Y. We are explicitly not doing Z." The "explicitly not doing" part is the most important sentence.

Full post with more detail → https://selfrules.org/notes/the-meeting-where-everyone-says-yes

#ProductManagement #Leadership #Alignment

---

## 3. Why I prototype in code

Most PMs don't write code. That's fine — product management doesn't require programming skills. But if you can do it, it changes how you make decisions.

I'm not talking about writing production features. I'm talking about building the minimum thing needed to answer a question before asking the team for weeks of work.

I needed an apartment. Eight listing sites, inadequate filters, no notifications when something good came up. So I built CasaHunter over a weekend. The interesting problem wasn't the scraping. It was the scoring. How do you figure out if a listing is good?

The first version sent everything to an LLM. It worked. It cost too much and didn't improve quality. I restructured: first pass deterministic (eliminate 80%), second pass AI only on survivors (much cheaper), third pass adaptive (learns from feedback). This architecture would never have come from a diagram. It came from the code showing the first solution was too expensive.

At work the same pattern happened. A payment integration was about to fail. The API documentation revealed an existing field — external_payment_type — that could solve it without architectural changes. Reading the API revealed an existing solution nobody else had seen. When a PM can navigate technical documentation, the conversation with engineering changes. Not "we need to solve this." But "this field might work, here's a spec, what do you think?"

The risk is real: a PM who codes can fall into building everything, feeling indispensable, not delegating. The answer isn't to stop coding. It's knowing when to prototype and when to write a brief and trust the team.

Full post with more detail → https://selfrules.org/notes/why-i-prototype-in-code

#ProductManagement #Engineering #Prototyping

---

## 4. When AI makes sense in product (and when it doesn't)

Every product team is looking at AI features now. Most of them are solving the wrong problem.

The question isn't "should we add AI?" It's "Is there a judgment call happening that a rule or a query can't solve?" If the answer is no, you don't need AI. You need a filter and better UX.

The pattern I use: 80% of the problem should be solvable with deterministic rules. The remaining 20% — where judgment matters — is where AI belongs.

I built CasaHunter. The naive approach: throw an LLM at every listing, ask it to score quality, rank, and notify. It cost money, was slow, and barely beat a simple rule. The real insight: apartment listings are 80% objective data (price, square meters, location, renovation needed). That's filterable. The remaining 20% (does this match your actual lifestyle?) is where an LLM adds value.

The system works like this: First pass eliminates 80% of listings with deterministic filters (price, size, location). Second pass runs AI on what survived, but now in tight context. Third pass learns from feedback. The difference between naive AI and working AI isn't the model. It's the architecture.

AI makes sense for pattern recognition on unstructured data, personalized scoring when preferences are complex, and natural language understanding where context matters. It doesn't make sense for anything a filter solves, anything SQL can answer, or anything with a clear rule.

The real cost of AI isn't the API call. It's the infrastructure around uncertainty. If you need to explain or audit a decision, deterministic rules are cheaper.

Full post with more detail → https://selfrules.org/notes/when-ai-makes-sense-in-product

#AI #ProductManagement #Architecture

---

## 5. Managing payments at scale: what PM school doesn't teach

Payments is a different domain than most product work. The usual PM instincts fail fast.

"Move fast and break things" is fine for features. Totally different when breaking things means a customer got charged twice. Or three times. Or charged for a failed transaction. The PM skills that matter in payments aren't the ones they teach in PM school.

The mindset shift: in payments, you lead with constraint, not possibility. What can we do safely? is the first question. What do we want to do? comes later.

I arrived at QubicaAMF to a payment integration in crisis: 44 open issues, centers losing transactions, the system technically functional but operationally unusable. The instinct was to fix everything fast. That's wrong in payments. You can't fix everything at once when fixing one thing might break another.

The first skill: reading API documentation like a detective. Square's docs don't tell you how transaction metadata flows through reconciliation. You have to understand the data model deeply enough to predict downstream breaks. I spent a week reading docs and found external_payment_type — one field that unlocked reconciliation without architectural changes. One PM, one week, one field. A center stayed and became a reference account.

The second skill: tracing money before touching code. "Let's add a feature to split revenue between accounts" sounds reasonable until you ask: what if the split fails mid-transaction? What if one account is full? What if a chargeback comes 60 days later? You need to trace the money path before engineering starts writing.

The hardest part: the courage to freeze features when stability is at risk. The refund feature was ready, tests passed. But it was two weeks before peak season. I pulled it. Not because the code was bad. Because if something went wrong with refunds during peak, every refund issued during those 14 days is in scope. Double refunds, lost reconciliation, chargebacks 60 days later.

In payments, you can't unring the bell. Once the money moved, it moved.

Full post with more detail → https://selfrules.org/notes/managing-payments-at-scale

#Payments #ProductManagement #FinTech

---

## 6. Remote product management across 5 countries

Remote PM is often presented as a logistics problem: how do I run meetings across timezones?

That's the wrong problem. The real problem is context.

When everyone is colocated, context is ambient. Someone walks past your desk, mentions a sales call went badly, you see the Slack thread, you remember the feature. Context lives in the air. Remove the room and the air disappears. Now context has to be deliberate.

My team was split: engineers in Italy, QA in Poland, analytics in the US. No overlap. The first instinct was better Zoom scheduling. Get better timezone overlap. That failed because it was the wrong problem.

The real issue was that information wasn't persistent. A Zoom call happens, decisions get made, nobody writes it down except in half-attended notes. The next day the other side of the world is repeating work or making contradictory decisions.

The fix was documentation. Every decision got a one-page doc: what decision, what's the context, what are the options, what did we choose and why, and most importantly: "If this assumption breaks, here's what we'll revisit."

Those documents became the source of truth. Engineers read them before starting work. QA referenced them when testing. Analysts used them to understand what metrics mattered. It sounds like bureaucracy. It's actually the opposite. Slack threads that cascade into 50 messages lose context in the middle. A one-page doc says everything at once.

Not everything should be async. When context requires back-and-forth in 5+ turns, call. When it touches multiple timezones and people would wait 8 hours for clarification, call. Everything else stays async.

The skill is knowing which conversations need real-time dialogue. The result: we had far fewer Zoom calls than a colocated team. But the calls we had mattered.

Full post with more detail → https://selfrules.org/notes/remote-pm-across-countries

#RemoteWork #ProductManagement #Async

---

## 7. The build vs buy decision framework

Build vs buy isn't a technical decision. It's a strategic one. And most PMs get it wrong by defaulting to a preference instead of following a framework.

I've seen great builders want to build everything. I've seen risk-averse PMs want to buy everything. Neither is right. The decision lives in the intersection of four questions, and getting the order wrong means you optimize for the wrong thing.

Question 1: What's your actual constraint? This one surprises people because the answer is usually "time," not "we don't know how to build it."

I built CasaHunter on evenings and weekends. Time wasn't a constraint. So I built. At QubicaAMF we inherited a system in crisis. Forty-four open issues, customers unhappy. Time was the binding constraint. We had no six months to evaluate vendors. We built to stabilize.

Question 2: Is this a core differentiator or commodity? At QubicaAMF, reconciliation was a differentiator. Every customer complained about it. We built. But payment processing itself? We bought. Square's payment processing is a commodity. Thousands of companies use it. We weren't going to do it better. We bought the commodity and differentiated on top.

Question 3: What's the total cost of ownership? Building in-house costs one engineer for 3 months. Buying costs €50K. Sounds like building wins. Until the engineer becomes the subject matter expert forever. They own it. When it breaks, they drop everything. When the business wants a feature, they're the only one who can do it. When they leave, knowledge walks out the door.

We discontinued OneCashless — an internal build we'd invested heavily in — and moved to Amusement Connect. OneCashless cost €150K to build, €50K annually to maintain, plus risk if the expert left. Amusement Connect: €40K setup, €60K annually, 24/7 support included. Over three years, buying cost less and had less risk.

Question 4: Can you reverse this decision in 6 months? If you buy a vendor tool and it's wrong, how hard is it to switch? If you build something and need to swap it for a vendor, you've already built to spec. You'd have to rebuild to their spec.

Full post with more detail → https://selfrules.org/notes/build-vs-buy-framework

#ProductManagement #Strategy #Decision

---

## 8. What running a business for 7 years taught me about product

Before I was a PM at other companies, I ran my own business for seven years. It wasn't a startup that was sold. I closed it in 2018.

That matters because the lessons are different. When you sell, you optimize for an exit. When you close a business, you optimize for what actually worked. The second teaches you more about product than the first.

Shipping matters more than strategy.

I spent hours explaining design thinking, atomic design principles, user research. The conversation would always end with "that sounds great, how much and when can you deliver?" By year three, I stopped selling the methodology and started selling the ship date. The business grew. Strategy matters only to the extent it enables shipping. A team with a clear vision but can't ship has beautiful strategy and zero results.

Clients know what they don't want. They don't know what they want.

A thousand times: Client says "I want a beautiful website." Me: "What does beautiful mean?" Client: "I don't know, but when I see it, I'll know." This drove me crazy until I realized they were right. They don't know what they want. But they absolutely know when they don't want something. I reversed the conversation: "Which direction feels wrong?" They'd eliminate two immediately. "Which of the remaining three feels closest?" We'd iterate from there. Discovery isn't about finding what users want. It's about finding what breaks. Then you figure out what to build.

The best marketing is visible work.

I didn't have a marketing budget. I had websites shipped and a portfolio. In 2014, I redesigned my own site, posted a case study explaining the problem, the solution, the result. Nothing fancy. Within a month, three people found the site and asked if I did work for hire. One became a €60K project. I stopped explaining why I was good and started showing the work.

Closing something is the ultimate prioritization decision.

In 2018, I closed Selfrules. The business was stable. But I'd done the same thing for six years and the craft wasn't challenging anymore. Closing was saying "given my finite time, where do I create the most value?" Not here. The answer was learning development, building at scale, understanding how teams work together. Closing taught me that sometimes the bravest PM decision isn't building new. It's admitting something isn't worth resources anymore and killing it.

Full post with more detail → https://selfrules.org/notes/seven-years-running-a-business

#ProductManagement #Entrepreneurship #Shipping

---

## Copy Notes

All posts are LinkedIn-ready. Each is 150-250 words. The hook appears in the first 2 lines (visible before "see more"). Copy the entire post and paste into LinkedIn. Links are live at publication.
