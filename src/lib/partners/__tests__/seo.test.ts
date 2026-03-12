import { describe, expect, it } from "vitest";

import { getPartnerPageJsonLd, getPartnerPageMetadata } from "@/lib/partners/seo";
import { partnerPages } from "@/lib/partners/config";

const SITE_URL = "https://solaraai.com";

describe("partner pages SEO", () => {
  describe("getPartnerPageMetadata", () => {
    it("returns unique title per slug", () => {
      const titles = partnerPages.map((page) => {
        const metadata = getPartnerPageMetadata(page.slug);
        return metadata.title;
      });

      const uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).toBe(titles.length);
    });

    it("returns unique description per slug", () => {
      const descriptions = partnerPages.map((page) => {
        const metadata = getPartnerPageMetadata(page.slug);
        return metadata.description;
      });

      const uniqueDescriptions = new Set(descriptions);
      expect(uniqueDescriptions.size).toBe(descriptions.length);
    });

    it("sets robots.index and robots.follow to true", () => {
      partnerPages.forEach((page) => {
        const metadata = getPartnerPageMetadata(page.slug);
        expect(metadata.robots?.index).toBe(true);
        expect(metadata.robots?.follow).toBe(true);
      });
    });

    it("sets correct canonical URL for each slug", () => {
      partnerPages.forEach((page) => {
        const metadata = getPartnerPageMetadata(page.slug);
        const expectedCanonical = `${SITE_URL}${page.route}`;
        expect(metadata.alternates?.canonical).toBe(expectedCanonical);
      });
    });

    it("throws error for unknown slug", () => {
      expect(() => getPartnerPageMetadata("unknown-slug")).toThrow(
        "Unsupported partner page slug: unknown-slug"
      );
    });
  });

  describe("getPartnerPageJsonLd", () => {
    it("returns array of JSON strings", () => {
      partnerPages.forEach((page) => {
        const jsonLd = getPartnerPageJsonLd(page.slug);
        expect(Array.isArray(jsonLd)).toBe(true);
        jsonLd.forEach((item) => {
          expect(typeof item).toBe("string");
          // Verify it's valid JSON
          expect(() => JSON.parse(item)).not.toThrow();
        });
      });
    });

    it("includes WebPage schema for all slugs", () => {
      partnerPages.forEach((page) => {
        const jsonLd = getPartnerPageJsonLd(page.slug);
        const webPageSchema = jsonLd.find((item) => {
          const parsed = JSON.parse(item);
          return parsed["@type"] === "WebPage";
        });
        expect(webPageSchema).toBeDefined();
      });
    });

    it("includes BreadcrumbList schema for all slugs", () => {
      partnerPages.forEach((page) => {
        const jsonLd = getPartnerPageJsonLd(page.slug);
        const breadcrumbSchema = jsonLd.find((item) => {
          const parsed = JSON.parse(item);
          return parsed["@type"] === "BreadcrumbList";
        });
        expect(breadcrumbSchema).toBeDefined();
      });
    });

    it("includes FAQPage schema only when hasFaq=true and includeFaq=true", () => {
      partnerPages.forEach((page) => {
        const jsonLdWithFaq = getPartnerPageJsonLd(page.slug, { includeFaq: true });
        const faqSchema = jsonLdWithFaq.find((item) => {
          const parsed = JSON.parse(item);
          return parsed["@type"] === "FAQPage";
        });

        if (page.hasFaq) {
          expect(faqSchema).toBeDefined();
        } else {
          expect(faqSchema).toBeUndefined();
        }
      });
    });

    it("never includes FAQPage schema when includeFaq=false", () => {
      partnerPages.forEach((page) => {
        const jsonLdWithoutFaq = getPartnerPageJsonLd(page.slug, { includeFaq: false });
        const faqSchema = jsonLdWithoutFaq.find((item) => {
          const parsed = JSON.parse(item);
          return parsed["@type"] === "FAQPage";
        });
        expect(faqSchema).toBeUndefined();
      });
    });

    it("never includes FAQPage schema when includeFaq is not specified", () => {
      partnerPages.forEach((page) => {
        const jsonLd = getPartnerPageJsonLd(page.slug);
        const faqSchema = jsonLd.find((item) => {
          const parsed = JSON.parse(item);
          return parsed["@type"] === "FAQPage";
        });
        expect(faqSchema).toBeUndefined();
      });
    });

    it("does not emit LocalBusiness schema", () => {
      partnerPages.forEach((page) => {
        const jsonLd = getPartnerPageJsonLd(page.slug, { includeFaq: true });
        const localBusinessSchema = jsonLd.find((item) => {
          const parsed = JSON.parse(item);
          return parsed["@type"] === "LocalBusiness";
        });
        expect(localBusinessSchema).toBeUndefined();
      });
    });

    it("does not emit GeneralContractor schema", () => {
      partnerPages.forEach((page) => {
        const jsonLd = getPartnerPageJsonLd(page.slug, { includeFaq: true });
        const generalContractorSchema = jsonLd.find((item) => {
          const parsed = JSON.parse(item);
          return parsed["@type"] === "GeneralContractor";
        });
        expect(generalContractorSchema).toBeUndefined();
      });
    });

    it("does not emit AggregateRating schema", () => {
      partnerPages.forEach((page) => {
        const jsonLd = getPartnerPageJsonLd(page.slug, { includeFaq: true });
        const aggregateRatingSchema = jsonLd.find((item) => {
          const parsed = JSON.parse(item);
          return parsed["@type"] === "AggregateRating";
        });
        expect(aggregateRatingSchema).toBeUndefined();
      });
    });

    it("produces unique WebPage @id values for all slugs", () => {
      const webPageIds = partnerPages.map((page) => {
        const jsonLd = getPartnerPageJsonLd(page.slug);
        const webPageSchema = jsonLd.find((item) => {
          const parsed = JSON.parse(item);
          return parsed["@type"] === "WebPage";
        });
        const parsed = JSON.parse(webPageSchema!);
        return parsed.url || parsed["@id"];
      });

      const uniqueIds = new Set(webPageIds);
      expect(uniqueIds.size).toBe(webPageIds.length);
    });

    it("throws error for unknown slug", () => {
      expect(() => getPartnerPageJsonLd("unknown-slug")).toThrow(
        "Unknown partner page slug: unknown-slug"
      );
    });
  });
});
