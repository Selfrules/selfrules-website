---
phase: 3
slug: ui-primitives
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-22
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Visual verification via /dev/components route |
| **Config file** | none — dev route, not automated tests |
| **Quick run command** | `npm run dev` then visit `http://localhost:3000/dev/components` |
| **Full suite command** | Manual visual inspection of 20 criteria from UI-SPEC |
| **Estimated runtime** | ~30 seconds (visual check) |

---

## Sampling Rate

- **After every task commit:** Run `npm run dev` + visual check on /dev/components
- **After every plan wave:** Full 20-criteria checklist from UI-SPEC "Phase 3 Success Criteria (Visual)"
- **Before `/gsd:verify-work`:** All 20 visual criteria pass
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 03-01-01 | 01 | 1 | UICM-06 | visual | Visit /dev/components, inspect Tag | ❌ W0 | ⬜ pending |
| 03-01-02 | 01 | 1 | UICM-01 | visual | Visit /dev/components, hover buttons | ❌ W0 | ⬜ pending |
| 03-01-03 | 01 | 1 | UICM-07 | visual | DevTools computed max-width + padding | ❌ W0 | ⬜ pending |
| 03-02-01 | 02 | 2 | UICM-02 | visual | Visit /dev/components, check 6-card grid | ❌ W0 | ⬜ pending |
| 03-02-02 | 02 | 2 | UICM-03 | visual | Resize viewport, hover card | ❌ W0 | ⬜ pending |
| 03-02-03 | 02 | 2 | UICM-04 | visual | Visit /dev/components, hover project card | ❌ W0 | ⬜ pending |
| 03-02-04 | 02 | 2 | UICM-05 | visual | Visit /dev/components, check timeline | ❌ W0 | ⬜ pending |
| 03-03-01 | 03 | 3 | D-04 | visual | Visit /dev/components, full page | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `src/app/[locale]/dev/components/page.tsx` — verification route for all components
- [ ] `src/lib/utils.ts` — cn() utility if not created in Phase 1
- [ ] Verify `clsx` is installed (`npm install clsx` if needed)

*Wave 0 creates the /dev/components route as a visual test harness.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Button hover transitions | UICM-01 | CSS transition visual quality | Hover both variants, verify smooth 200ms transition |
| MetricCard grid gap pattern | UICM-02 | Shared-border visual effect | Check 1px borders between cells render without doubling |
| CaseStudyCard responsive padding | UICM-03 | Viewport-dependent layout | Resize from 375px to 1440px, verify p-8→md:p-12 |
| Card hover translate-y | UICM-03, UICM-04 | Animation visual quality | Hover cards, verify -2px lift + border-accent |
| Section max-width centering | UICM-07 | Layout visual check | Check 720px/1080px variants are centered |

*All Phase 3 behaviors are visual — no automated test framework applies.*

---

## Validation Sign-Off

- [ ] All tasks have visual verify via /dev/components route
- [ ] Sampling continuity: every task verified on dev route after commit
- [ ] Wave 0 covers /dev/components route creation
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
