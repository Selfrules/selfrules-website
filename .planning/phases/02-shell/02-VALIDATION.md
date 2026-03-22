---
phase: 2
slug: shell
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-22
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual browser testing (no test framework in project) |
| **Config file** | none — Phase 2 is UI shell, visual verification only |
| **Quick run command** | `npm run dev` + manual browser check |
| **Full suite command** | `npm run build` (verify static rendering, no lambda icons) |
| **Estimated runtime** | ~30 seconds (build) |

---

## Sampling Rate

- **After every task commit:** Run `npm run dev` + visual check at 375px and 1440px
- **After every plan wave:** Run `npm run build` — verify all routes are static
- **Before `/gsd:verify-work`:** Full suite must be green + all 16 UI-SPEC success criteria verified manually
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | COPY-04 | manual | Visual compare vs microcopy.md | N/A | ⬜ pending |
| 02-01-02 | 01 | 1 | LNAV-04 | manual | Switch locale, verify path preserved | N/A | ⬜ pending |
| 02-02-01 | 02 | 1 | LNAV-05 | manual | Visual inspection both locales | N/A | ⬜ pending |
| 02-03-01 | 03 | 1 | LNAV-01 | manual | Scroll page, verify backdrop-blur | N/A | ⬜ pending |
| 02-03-02 | 03 | 1 | LNAV-02 | manual | Click each nav link | N/A | ⬜ pending |
| 02-03-03 | 03 | 1 | LNAV-03 | manual | Tab through menu, verify focus trap | N/A | ⬜ pending |
| 02-04-01 | 04 | 2 | LNAV-06 | manual | Visit /nonexistent and /it/nonexistent | N/A | ⬜ pending |
| 02-05-01 | 05 | 2 | ANLT-01, ANLT-02 | manual | DevTools Network tab, check proxy | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing infrastructure covers all phase requirements. No automated test framework needed for UI shell phase — all verification is visual/manual.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Navbar scroll transition | LNAV-01 | Visual CSS transition cannot be unit tested | Scroll page >50px, verify bg changes to blurred |
| Mobile menu focus trap | LNAV-03 | Requires real keyboard interaction | Open menu, Tab through all elements, verify wrap |
| Language toggle path preservation | LNAV-04 | Requires client-side navigation | Navigate to /about, switch to IT, verify /it/about |
| Footer layout responsive | LNAV-05 | Visual layout verification | Check at 375px (stacked) and 1440px (row) |
| 404 bilingual rendering | LNAV-06 | Requires navigating to unknown routes | Visit /xyz and /it/xyz, verify correct copy |
| Microcopy exact match | COPY-04 | Text comparison with source | Compare rendered text against microcopy.md line by line |
| Umami proxy working | ANLT-01, ANLT-02 | Network request verification | Check DevTools for /api/umami/script.js response |

---

## Validation Sign-Off

- [ ] All tasks have manual verify instructions
- [ ] Sampling continuity: visual check after each commit
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
