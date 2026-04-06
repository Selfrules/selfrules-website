# Testing Patterns

**Analysis Date:** 2026-04-06

## Test Framework

**Runner:**
- Playwright `^1.58.2`
- Config: `playwright.config.ts` (project root)

**Assertion Library:**
- Playwright's built-in `expect` (locator-based assertions)

**Run Commands:**
```bash
npm run test:e2e          # Run all E2E tests
npx playwright test       # Run all E2E tests directly
npx playwright test --ui  # Interactive UI mode
npx playwright show-report  # View last HTML report
```

No unit test framework is present. No Jest, Vitest, or similar runner is configured.

## Test File Organization

**Location:**
- All tests in `e2e/` directory at project root
- Single spec file: `e2e/navigation.spec.ts`

**Naming:**
- Files use kebab-case with `.spec.ts` extension

**Structure:**
```
project-root/
└── e2e/
    └── navigation.spec.ts   # All navigation and page load tests
```

## Test Structure

**Suite Organization:**
```typescript
import { test, expect } from "@playwright/test";

test.describe("Navigation and Page Loading", () => {
  test("Homepage loads with h1 and key sections", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
  });
});
```

All tests live in a single `test.describe` block named `"Navigation and Page Loading"`.

**Patterns:**
- Each test navigates to a URL with `page.goto("/<path>")`
- Assertions use `await expect(locator).toBeVisible()`
- HTTP status checks via `expect(response?.status()).toBe(NNN)`
- Error-safe visibility checks: `.isVisible().catch(() => false)` with `Promise.all`

## Playwright Configuration

```typescript
// playwright.config.ts
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
```

- Only Chromium/Desktop Chrome configured — no Firefox or mobile viewports
- `reuseExistingServer: true` in dev — runs against `npm run dev` server
- CI mode: 1 worker, 2 retries, `forbidOnly`
- Traces captured on first retry only

## Mocking

**Framework:** None — tests run against the real Next.js dev server.

**No mocking is used.** Tests are fully integration-level, hitting real routes with real server-side rendering. External APIs (Notion, Umami) are not tested.

## Test Coverage Scope

**What IS tested:**
- Every main route loads with at minimum an `h1` or `h2` visible
- `nav` and `footer` presence on homepage
- Navigation links presence and clickability
- 404 returns HTTP 404 status
- Italian locale pages (`/it`, `/it/work`, `/it/contact`)
- Page title is non-empty
- Back-navigation flow (Work → Case Study → back)
- Email and LinkedIn links on Contact page
- Article links exist on Notes page
- Individual note page renders `<article>` element

**What is NOT tested:**
- Form submission (FeedbackWidget)
- Language toggle behavior
- Mobile menu open/close
- Scroll-based behaviors (navbar state, ScrollReveal animations)
- SEO/OG metadata content
- API route `POST /api/feedback` — no unit or integration tests
- Accessibility beyond basic element visibility
- Dark mode rendering
- Any unit-level logic (utility functions, rate limiting, metadata generation)

## Common Patterns

**Page load test:**
```typescript
test("Page name loads", async ({ page }) => {
  await page.goto("/route");
  const h1 = page.locator("h1");
  await expect(h1).toBeVisible();
  const content = page.locator("main");
  await expect(content).toBeVisible();
});
```

**Status code check:**
```typescript
const response = await page.goto("/nonexistent-route-that-does-not-exist");
expect(response?.status()).toBe(404);
```

**Soft multi-element check (any visible):**
```typescript
const visibleCount = (await Promise.all(
  navElements.map((el) => el.isVisible().catch(() => false))
)).filter(Boolean).length;
expect(visibleCount).toBeGreaterThan(0);
```

**Click flow test:**
```typescript
await page.goto("/work");
const firstCaseStudy = page.locator("a[href*='/work/']:first-of-type");
await firstCaseStudy.click();
const caseStudyUrl = page.url();
expect(caseStudyUrl).not.toBe(initialUrl);
await page.goBack();
await expect(page.locator("h1, h2")).toBeVisible();
```

## Coverage

**Requirements:** No coverage thresholds configured. No coverage tooling active.

**View HTML Report:**
```bash
npx playwright show-report
```

## Additional Dev Tooling

**Accessibility CLI:**
- `@axe-core/cli ^4.11.1` is in `devDependencies` but has no npm script configured
- Run manually: `npx axe http://localhost:3000`

---

*Testing analysis: 2026-04-06*
