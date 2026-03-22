---
phase: 1
slug: foundation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-22
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | vitest (not needed for Phase 1 — validation via next build + manual route checks) |
| **Config file** | none — Phase 1 validates via build output and route behavior |
| **Quick run command** | `npx next build 2>&1 | grep -E "(Route|○|λ|ƒ)"` |
| **Full suite command** | `npx next build && npx next start & sleep 3 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/it` |
| **Estimated runtime** | ~15 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npx next build 2>&1 | grep -E "(Route|○|λ|ƒ)"`
- **After every plan wave:** Run full suite command
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | FOUND-01 | build | `npx next build` | ✅ | ⬜ pending |
| 01-01-02 | 01 | 1 | FOUND-02 | build+route | `next build \| grep "○"` | ✅ | ⬜ pending |
| 01-02-01 | 02 | 1 | FOUND-03 | build | `npx next build` | ✅ | ⬜ pending |
| 01-02-02 | 02 | 1 | FOUND-04 | visual | manual font check | ❌ manual | ⬜ pending |
| 01-03-01 | 03 | 1 | FOUND-05 | build+route | `curl localhost:3000 && curl localhost:3000/it` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements — Phase 1 creates the project from scratch, so `next build` is the test infrastructure.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Inter + JetBrains Mono render without layout shift | FOUND-04 | Font rendering is visual — no CLI assertion possible | 1. Open localhost:3000 in Chrome 2. DevTools > Performance > reload 3. Verify no CLS entries for fonts 4. Inspect body font-family = Inter, code elements = JetBrains Mono |

*All other behaviors have automated verification via build output.*

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
