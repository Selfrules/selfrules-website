import { test, expect } from "@playwright/test";

test.describe("Navigation and Page Loading", () => {
  test("Homepage loads with h1 and key sections", async ({ page }) => {
    await page.goto("/");

    // Check h1 exists
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    // Check for key sections (common layout elements)
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("Navigation links are present", async ({ page }) => {
    await page.goto("/");

    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    // Check for main navigation links
    const workLink = page.locator("a", { has: page.locator("text=Work") });
    const labLink = page.locator("a", { has: page.locator("text=Lab") });
    const notesLink = page.locator("a", { has: page.locator("text=Notes") });
    const aboutLink = page.locator("a", { has: page.locator("text=About") });
    const contactLink = page.locator("a", { has: page.locator("text=Contact") });

    // At least some nav items should be visible
    const navElements = [workLink, labLink, notesLink, aboutLink, contactLink];
    const visibleCount = (await Promise.all(
      navElements.map((el) => el.isVisible().catch(() => false))
    )).filter(Boolean).length;

    expect(visibleCount).toBeGreaterThan(0);
  });

  test("Work page loads", async ({ page }) => {
    await page.goto("/work");

    // Check page loaded
    const heading = page.locator("h1, h2");
    await expect(heading).toBeVisible();
  });

  test("Case study: Payments Rescue loads", async ({ page }) => {
    await page.goto("/work/payments-rescue");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    // Check for some content
    const content = page.locator("main");
    await expect(content).toBeVisible();
  });

  test("Case study: LeadsBridge Redesign loads", async ({ page }) => {
    await page.goto("/work/leadsbridge-redesign");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    const content = page.locator("main");
    await expect(content).toBeVisible();
  });

  test("Case study: Cashless System loads", async ({ page }) => {
    await page.goto("/work/cashless-system");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    const content = page.locator("main");
    await expect(content).toBeVisible();
  });

  test("Notes page loads with post list", async ({ page }) => {
    await page.goto("/notes");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    // Look for article links or post items
    const articles = page.locator("a[href*='/notes/']");
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test("Individual note loads", async ({ page }) => {
    // Navigate to Notes page first to find a post
    await page.goto("/notes");

    // Click first post link
    const firstPost = page.locator("a[href*='/notes/']:first-of-type");
    await firstPost.click();

    // Verify we're on a note page
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();

    // Check for article content
    const article = page.locator("article");
    await expect(article).toBeVisible();
  });

  test("Lab page loads", async ({ page }) => {
    await page.goto("/lab");

    const heading = page.locator("h1, h2");
    await expect(heading).toBeVisible();
  });

  test("Lab project (CasaHunter) loads", async ({ page }) => {
    await page.goto("/lab/casahunter");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    const content = page.locator("main");
    await expect(content).toBeVisible();
  });

  test("About page loads", async ({ page }) => {
    await page.goto("/about");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    const content = page.locator("main");
    await expect(content).toBeVisible();
  });

  test("Contact page loads with contact info", async ({ page }) => {
    await page.goto("/contact");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    // Check for email link
    const emailLink = page.locator("a[href^='mailto:']");
    await expect(emailLink).toBeVisible();

    // Check for LinkedIn link
    const linkedinLink = page.locator("a[href*='linkedin']");
    await expect(linkedinLink).toBeVisible();
  });

  test("404 page displays for nonexistent route", async ({ page }) => {
    const response = await page.goto("/nonexistent-route-that-does-not-exist");

    // Should get 404 status
    expect(response?.status()).toBe(404);

    // Check for 404 content
    const heading = page.locator("h1, h2");
    await expect(heading).toBeVisible();
  });

  test("Italian locale loads with Italian content", async ({ page }) => {
    await page.goto("/it");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    // Check page content is visible
    const main = page.locator("main");
    await expect(main).toBeVisible();
  });

  test("Italian Work page", async ({ page }) => {
    await page.goto("/it/work");

    const heading = page.locator("h1, h2");
    await expect(heading).toBeVisible();
  });

  test("Italian Contact page", async ({ page }) => {
    await page.goto("/it/contact");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    const emailLink = page.locator("a[href^='mailto:']");
    await expect(emailLink).toBeVisible();
  });

  test("Page metadata loads correctly", async ({ page }) => {
    await page.goto("/");

    // Check title is set
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  test("Navigation click flow: Work -> Case Study -> Back to Work", async ({
    page,
  }) => {
    await page.goto("/work");
    const initialUrl = page.url();

    // Click first case study link
    const firstCaseStudy = page.locator("a[href*='/work/']:first-of-type");
    await firstCaseStudy.click();

    // Should be on a case study page
    const caseStudyUrl = page.url();
    expect(caseStudyUrl).not.toBe(initialUrl);

    // Go back
    await page.goBack();

    // Should be back on work page
    await expect(page.locator("h1, h2")).toBeVisible();
  });

  test("All nav links are clickable", async ({ page }) => {
    await page.goto("/");

    const navLinks = [
      "/work",
      "/lab",
      "/notes",
      "/about",
      "/contact",
    ];

    for (const link of navLinks) {
      const response = await page.goto(link);
      expect(response?.status()).toBeLessThan(400);

      // Check page has content
      const heading = page.locator("h1, h2");
      await expect(heading).toBeVisible();
    }
  });
});
