import { describe, expect, it } from "vitest";
import { GET as getLlmsTxt } from "../app/llms.txt/route";
import { GET as getLlmsFullTxt } from "../app/llms-full.txt/route";

const SITE_URL = "https://solaraai.com";

describe("llms.txt", () => {
  describe("GET /llms.txt", () => {
    it("returns 200 with text/plain content type", async () => {
      const response = getLlmsTxt();
      expect(response.status).toBe(200);
      expect(response.headers.get("Content-Type")).toBe(
        "text/plain; charset=utf-8"
      );
    });

    it("returns markdown starting with # Solara AI", async () => {
      const response = getLlmsTxt();
      const text = await response.text();
      expect(text).toMatch(/^# Solara AI/);
    });

    it("includes a one-line description after the heading", async () => {
      const response = getLlmsTxt();
      const text = await response.text();
      expect(text).toContain("> AI-powered marketing platform");
    });

    it("links to all key pages", async () => {
      const response = getLlmsTxt();
      const text = await response.text();
      const requiredPages = [
        "/",
        "/pricing",
        "/about",
        "/contact",
        "/blog",
        "/partners/agencies",
        "/partners/marketers",
        "/partners/referral-program",
        "/partners/setup-operators",
      ];
      for (const page of requiredPages) {
        expect(text).toContain(`${SITE_URL}${page}`);
      }
    });

    it("links to llms-full.txt for expanded context", async () => {
      const response = getLlmsTxt();
      const text = await response.text();
      expect(text).toContain(`${SITE_URL}/llms-full.txt`);
    });

    it("includes case study links", async () => {
      const response = getLlmsTxt();
      const text = await response.text();
      expect(text).toContain("/case-study/maison-remodeling-group");
    });

    it("sets cache-control for CDN caching", async () => {
      const response = getLlmsTxt();
      const cacheControl = response.headers.get("Cache-Control");
      expect(cacheControl).toContain("public");
      expect(cacheControl).toContain("s-maxage=86400");
    });

    it("uses solaraai.com consistently (not solaraai.io)", async () => {
      const response = getLlmsTxt();
      const text = await response.text();
      expect(text).not.toContain("solaraai.io");
    });
  });

  describe("GET /llms-full.txt", () => {
    it("returns 200 with text/plain content type", async () => {
      const response = getLlmsFullTxt();
      expect(response.status).toBe(200);
      expect(response.headers.get("Content-Type")).toBe(
        "text/plain; charset=utf-8"
      );
    });

    it("returns markdown starting with # Solara AI", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      expect(text).toMatch(/^# Solara AI/);
    });

    it("includes all three pricing tiers with correct annual prices", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      expect(text).toContain("$29/month");
      expect(text).toContain("$59/month");
      expect(text).toContain("$119/month");
    });

    it("includes monthly pricing for reference", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      expect(text).toContain("$49/mo");
      expect(text).toContain("$99/mo");
      expect(text).toContain("$199/mo");
    });

    it("describes core product capabilities", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      const capabilities = [
        "Ad Campaign Management",
        "Social Media Management",
        "SEO",
        "Content Creation",
        "Analytics",
      ];
      for (const cap of capabilities) {
        expect(text).toContain(cap);
      }
    });

    it("includes target audience section", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      expect(text).toContain("Target Audience");
      expect(text).toContain("small-to-medium businesses");
      expect(text).toContain("agencies");
    });

    it("includes FAQs for AI answer extraction", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      expect(text).toContain("Frequently Asked Questions");
      expect(text).toContain("What is Solara AI?");
      expect(text).toContain("Do I need marketing experience");
    });

    it("includes partner programs section", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      expect(text).toContain("Agency Program");
      expect(text).toContain("Referral Program");
      expect(text).toContain("Setup Operator Program");
    });

    it("includes key differentiators", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      expect(text).toContain("Key Differentiators");
      expect(text).toContain("All-in-one platform");
    });

    it("includes contact and signup links", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      expect(text).toContain(`${SITE_URL}/contact`);
      expect(text).toContain("app.solaraai.com/auth/signup");
    });

    it("uses solaraai.com consistently (not solaraai.io)", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      expect(text).not.toContain("solaraai.io");
    });

    it("links to all key pages", async () => {
      const response = getLlmsFullTxt();
      const text = await response.text();
      const requiredPages = [
        "/",
        "/pricing",
        "/about",
        "/contact",
        "/blog",
        "/partners/agencies",
        "/partners/marketers",
        "/partners/referral-program",
        "/partners/setup-operators",
      ];
      for (const page of requiredPages) {
        expect(text).toContain(`${SITE_URL}${page}`);
      }
    });

    it("is substantially longer than the concise version", async () => {
      const concise = await getLlmsTxt().text();
      const full = await getLlmsFullTxt().text();
      expect(full.length).toBeGreaterThan(concise.length * 3);
    });
  });
});
