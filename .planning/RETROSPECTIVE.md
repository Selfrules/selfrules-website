# Project Retrospective

*A living document updated after each milestone. Lessons feed forward into future planning.*

## Milestone: v1.0 — MVP

**Shipped:** 2026-03-23
**Phases:** 6 | **Plans:** 17 | **Tasks:** 87

### What Was Built
- Full bilingual personal site (IT/EN) from scratch — 6 pages + 1 blog post
- 13+ component library with design system (dark-mode, 0px radius, accent palette)
- Complete SEO infrastructure (metadata, JSON-LD, sitemap, hreflang)
- Production-ready Vercel config with security headers

### What Worked
- **Phase-based execution:** 6 fasi sequenziali con dipendenze chiare — zero rework strutturale
- **CSS-first Tailwind v4:** @theme inline ha eliminato la necessità di tailwind.config.ts, build velocissimi
- **Server Components by default:** la maggior parte dei componenti sono RSC, client JS minimale
- **Copy-first approach:** avere il copy definitivo prima del build ha eliminato iterazioni di contenuto
- **next-intl proxy.ts:** la migrazione da middleware.ts a proxy.ts per Next.js 16 ha funzionato senza problemi

### What Was Inefficient
- **FOUND-01→05 mai spuntati:** i requisiti Phase 1 sono rimasti "Pending" nella traceability nonostante la fase fosse completa — mancava un check automatico
- **Post-build Figma alignment:** 5 commit di fix dopo il build completo per allineare al prototipo Figma v25 — un visual checkpoint intermedio avrebbe ridotto il rework
- **OG image placeholder:** l'OG image richiede export da Figma, non è stato incluso nel flusso di build

### Patterns Established
- `createPageMetadata()` helper per SEO centralizzato su tutte le pagine
- `ScrollReveal` client component per animazioni fade-in con IntersectionObserver
- MDX metadata via `export const` pattern (non frontmatter YAML)
- `data-status-dot` attribute per override selettivi del global border-radius reset
- `src/messages/` path per i18n JSON (non `src/i18n/messages/`)

### Key Lessons
1. **Visual checkpoint a metà build** — fare una pass Figma dopo Phase 4 (Homepage) avrebbe catturato i gap prima di completare le inner pages
2. **Requirement tracking automatico** — il traceability table va aggiornato durante l'esecuzione, non solo alla fine
3. **Copy definitivo = velocità** — avere 7 file di copy pronti ha permesso di completare il sito in 2 giorni senza nessuna iterazione di contenuto

### Cost Observations
- Model mix: prevalentemente Opus per pianificazione, Sonnet per esecuzione
- Timeline: ~52 min di esecuzione effettiva su 2 giorni
- Notable: il rapporto pianificazione/esecuzione è stato efficiente — piani dettagliati hanno minimizzato le deviazioni

---

## Cross-Milestone Trends

### Process Evolution

| Milestone | Phases | Plans | Key Change |
|-----------|--------|-------|------------|
| v1.0 | 6 | 17 | First milestone — established all patterns |

### Top Lessons (Verified Across Milestones)

1. Copy-first approach elimina iterazioni — validato in v1.0, da verificare in milestone future
2. Visual checkpoints a fasi intermedie riducono il rework post-build
