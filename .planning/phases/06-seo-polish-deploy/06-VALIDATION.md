---
phase: 6
slug: seo-polish-deploy
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-22
---

# Phase 6 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | vitest (if installed) or manual CLI verification |
| **Config file** | none — primarily CLI/build-time checks |
| **Quick run command** | `npx next build 2>&1 | tail -20` |
| **Full suite command** | `npx next build && npx next start & sleep 3 && curl -s localhost:3000 | head -50` |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npx next build 2>&1 | tail -20`
- **After every plan wave:** Run full build + verify output
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 06-01-01 | 01 | 1 | SEO-01 | build | `npx next build` | ✅ | ⬜ pending |
| 06-01-02 | 01 | 1 | SEO-02 | grep | `grep -r 'hreflang' src/` | ❌ W0 | ⬜ pending |
| 06-01-03 | 01 | 1 | SEO-03 | grep | `grep -r 'openGraph' src/` | ❌ W0 | ⬜ pending |
| 06-01-04 | 01 | 1 | SEO-04 | grep | `grep -r 'canonical' src/` | ❌ W0 | ⬜ pending |
| 06-02-01 | 02 | 1 | SEO-05 | curl | `curl -s localhost:3000/sitemap.xml` | ❌ W0 | ⬜ pending |
| 06-02-02 | 02 | 1 | SEO-06 | curl | `curl -s localhost:3000/robots.txt` | ❌ W0 | ⬜ pending |
| 06-02-03 | 02 | 1 | SEO-07 | grep | `grep -r 'application/ld+json' src/` | ❌ W0 | ⬜ pending |
| 06-03-01 | 03 | 2 | A11Y-01 | grep | `grep -r 'skip-to-content\|skipnav' src/` | ❌ W0 | ⬜ pending |
| 06-03-02 | 03 | 2 | A11Y-02 | grep | `grep -r 'focus-visible' src/` | ❌ W0 | ⬜ pending |
| 06-03-03 | 03 | 2 | A11Y-03..05 | manual | Lighthouse audit | N/A | ⬜ pending |
| 06-04-01 | 04 | 2 | PLSH-01..04 | grep | `grep -r 'IntersectionObserver\|prefers-reduced-motion' src/` | ❌ W0 | ⬜ pending |
| 06-05-01 | 05 | 3 | PERF-01..06 | build | `npx next build` + bundle analysis | ❌ W0 | ⬜ pending |
| 06-06-01 | 06 | 3 | DEPL-01..03 | manual | Vercel deploy + DNS check | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Verify `next build` succeeds cleanly before any phase 6 work
- [ ] Confirm all pages render without errors in dev mode

*Existing infrastructure covers basic build validation. Phase 6 adds SEO/a11y/perf checks.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Lighthouse 95+ scores | PERF-01..06 | Requires browser runtime | Run Lighthouse in Chrome DevTools on built site |
| WCAG AA contrast | A11Y-03 | Visual verification | Use axe DevTools or Lighthouse accessibility audit |
| OG image rendering | SEO-03 | Social platform previews | Use og-image debugger tools (Twitter Card Validator, FB Sharing Debugger) |
| Vercel deploy + DNS | DEPL-01..03 | External service | Deploy via `vercel --prod`, verify DNS, check HTTPS cert |
| prefers-reduced-motion | PLSH-04 | OS-level setting | Toggle in system preferences, verify animations disabled |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
