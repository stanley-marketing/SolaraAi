import { expect, type Page, test } from "@playwright/test";

type ViewportConfig = {
  name: string;
  width: number;
  height: number;
};

type PageExpectation = {
  route: string;
  titlePattern: RegExp;
  eyebrowPattern: RegExp;
  h1Pattern?: RegExp;
  primaryCtaLabel: string;
  faqHeadingPattern?: RegExp;
  visibleContent: RegExp[];
};

const VIEWPORTS: ViewportConfig[] = [
  { name: "desktop", width: 1280, height: 720 },
  { name: "mobile", width: 375, height: 812 },
];

const PAGE_EXPECTATIONS: PageExpectation[] = [
  {
    route: "/partners/agencies",
    titlePattern: /agency|agencies/i,
    eyebrowPattern: /agencies/i,
    primaryCtaLabel: "Get the Free Agency Guide",
    faqHeadingPattern: /frequently asked questions/i,
    visibleContent: [
      /How does Solara work for agencies\?/i,
      /How it works/i,
    ],
  },
  {
    route: "/partners/referral-program",
    titlePattern: /referral/i,
    eyebrowPattern: /referral/i,
    primaryCtaLabel: "Get Your Referral Link",
    faqHeadingPattern: /common questions/i,
    visibleContent: [
      /Tier 1/i,
      /Tier 4/i,
      /How do I get my referral link\?/i,
    ],
  },
  {
    route: "/partners/setup-operators",
    titlePattern: /setup|operator/i,
    eyebrowPattern: /setup operators/i,
    h1Pattern: /setup|operator/i,
    primaryCtaLabel: "Become a Setup Operator",
    faqHeadingPattern: /common questions/i,
    visibleContent: [
      /Four tiers\. Every client moves you up\./i,
      /Apply/i,
      /Get certified/i,
      /Grow/i,
    ],
  },
  {
    route: "/for/marketers",
    titlePattern: /marketer/i,
    eyebrowPattern: /marketers/i,
    primaryCtaLabel: "Get the Free Marketer Guide",
    faqHeadingPattern: /questions from marketers like you/i,
    visibleContent: [
      /How does Solara help solo marketers\?/i,
      /How it works/i,
    ],
  },
];

function collectRuntimeErrors(page: Page) {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  return { consoleErrors, pageErrors };
}

async function assertPartnerOrPersonaPage(
  page: Page,
  viewport: ViewportConfig,
  expectation: PageExpectation,
) {
  const { consoleErrors, pageErrors } = collectRuntimeErrors(page);

  await page.setViewportSize({ width: viewport.width, height: viewport.height });

  const response = await page.goto(expectation.route, { waitUntil: "domcontentloaded" });

  expect(response).not.toBeNull();
  expect(response?.status()).toBe(200);

  await page.waitForLoadState("networkidle");
  await expect(page).toHaveTitle(expectation.titlePattern);

  await expect(page.locator("h1").first()).toBeVisible();

  if (expectation.h1Pattern) {
    await expect(page.locator("h1").first()).toContainText(expectation.h1Pattern);
  }

  await expect(page.getByText(expectation.eyebrowPattern).first()).toBeVisible();
  await expect(
    page.getByRole("link", { name: expectation.primaryCtaLabel }).first(),
  ).toBeVisible();

  if (expectation.faqHeadingPattern) {
    await expect(page.getByRole("heading", { name: expectation.faqHeadingPattern }).first()).toBeVisible();
  }

  for (const contentPattern of expectation.visibleContent) {
    await expect(page.locator("body")).toContainText(contentPattern);
  }

  expect(consoleErrors, `Console errors on ${expectation.route} (${viewport.name})`).toEqual([]);
  expect(pageErrors, `Page errors on ${expectation.route} (${viewport.name})`).toEqual([]);
}

test.describe("Partner and persona pages @smoke", () => {
  for (const viewport of VIEWPORTS) {
    test.describe(viewport.name, () => {
      for (const expectation of PAGE_EXPECTATIONS) {
        test(`${expectation.route} renders correctly`, async ({ page }) => {
          await assertPartnerOrPersonaPage(page, viewport, expectation);
        });
      }
    });
  }
});
