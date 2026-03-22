---
phase: 05
slug: inner-pages
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-22
---

# Phase 05 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | vitest (if installed) or manual verification |
| **Config file** | none — Wave 0 installs if needed |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npx next lint` |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npx next lint`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 05-01-01 | 01 | 1 | PAGE-01 | build | `npm run build` | ✅ | ⬜ pending |
| 05-01-02 | 01 | 1 | COPY-01 | grep | `grep -r "exact copy string" src/` | ❌ W0 | ⬜ pending |
| 05-02-01 | 02 | 1 | PAGE-02, PAGE-03 | build | `npm run build` | ✅ | ⬜ pending |
| 05-03-01 | 03 | 2 | PAGE-04 | build | `npm run build` | ✅ | ⬜ pending |
| 05-04-01 | 04 | 2 | PAGE-05, PAGE-06 | build | `npm run build` | ✅ | ⬜ pending |
| 05-05-01 | 05 | 3 | MODB-01, MODB-02, MODB-03, MODB-04 | grep | `grep -rn "job\|hiring\|looking for" src/` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] MDX infrastructure: `mdx-components.tsx` at project root or src/
- [ ] Blog MDX plugins: `remark-gfm`, `rehype-pretty-code` configured in `next.config.ts`
- [ ] @tailwindcss/typography plugin added to CSS

*These are prerequisites for blog page rendering (PAGE-05, PAGE-06).*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Visual layout matches design specs | PAGE-01 through PAGE-06 | Layout/spacing requires visual inspection | Compare rendered pages against figma-make-prompt.md specs at 1440px and 375px |
| Bilingual content identical to source | COPY-01, COPY-02, COPY-03 | Full content comparison needs human review | Open each page in EN and IT, compare against copy source files |
| Modello B compliance | MODB-01 through MODB-04 | Tone/framing requires human judgment | Read all pages checking for job-seeker framing, verify availability only in Contact/Footer |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
