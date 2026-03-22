---
phase: 4
slug: homepage
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-22
---

# Phase 4 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | vitest (if installed) or manual verification |
| **Config file** | none — Wave 0 installs if needed |
| **Quick run command** | `npx next build` |
| **Full suite command** | `npx next build && npx next start` |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npx next build`
- **After every plan wave:** Run `npx next build && npx next start` + manual visual check
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 04-01-01 | 01 | 1 | HOME-01 | build + visual | `npx next build` | ✅ | ⬜ pending |
| 04-01-02 | 01 | 1 | HOME-02 | build + visual | `npx next build` | ✅ | ⬜ pending |
| 04-01-03 | 01 | 1 | HOME-03 | build + visual | `npx next build` | ✅ | ⬜ pending |
| 04-01-04 | 01 | 1 | HOME-04 | build + visual | `npx next build` | ✅ | ⬜ pending |
| 04-01-05 | 01 | 1 | HOME-05 | build + visual | `npx next build` | ✅ | ⬜ pending |
| 04-01-06 | 01 | 1 | HOME-06 | build + i18n check | `npx next build` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements. Build verification via `next build` confirms compilation. Visual verification is manual.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Hero fills viewport with correct layout | HOME-01 | Visual layout positioning | Open `/` and `/it`, verify hero fills viewport, headline left-aligned, 2 CTAs visible, monospace tags present |
| 3-column pillar layout on desktop | HOME-02 | Responsive visual | Open at 1280px+ width, verify 3 columns; resize to mobile, verify stacked |
| MetricCard grid responsive | HOME-03 | Grid breakpoint behavior | Check 3x2 at desktop, 2x3 at tablet, 1-col at mobile |
| Side-by-side cards + contact section | HOME-04 | Layout composition | Verify 2 cards side-by-side on desktop, stacked on mobile; contact has email, LinkedIn, CV, availability |
| Bilingual copy matches source files | HOME-05/06 | Content accuracy | Compare rendered text against source copy files word-by-word in both languages |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
