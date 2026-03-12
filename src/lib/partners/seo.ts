import type { Metadata } from "next";
import { SITE_URL } from "./claims-policy";
import { partnerPages } from "./config";
import type { PartnerPage } from "./types";

const FORBIDDEN_SCHEMA_TYPES = new Set([
  "LocalBusiness",
  "GeneralContractor",
  "AggregateRating",
]);

type JsonLdNode = {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
};

const PARTNER_PAGE_METADATA: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  agencies: {
    title: "Agency Partner Program | Solara AI",
    description:
      "Join Solara AI's agency partner program. White-label AI marketing automation, co-branded case studies, and partner discounts for agencies.",
  },
  "referral-program": {
    title: "SaaS Referral Program | Solara AI",
    description:
      "Earn recurring revenue through Solara AI's referral program. Up to 30% revenue share for 12 months on referred customers.",
  },
  "setup-operators": {
    title: "Marketing Systems Operator Certification | Solara AI",
    description:
      "Become a certified Solara AI setup operator. Get directory visibility, inbound leads routing, and operator certification.",
  },
  marketers: {
    title: "AI Marketing Platform for Solo Marketers | Solara AI",
    description:
      "Solara AI helps solo marketers and small teams run smarter campaigns with AI-powered automation. Get started with a free guide.",
  },
};

function getCanonicalUrl(slug: string): string {
  const page = partnerPages.find((p) => p.slug === slug);
  if (!page) {
    throw new Error(`Unknown partner page slug: ${slug}`);
  }
  return `${SITE_URL}${page.route}`;
}

function getBreadcrumbPath(slug: string): { label: string; path: string }[] {
  const page = partnerPages.find((p) => p.slug === slug);
  if (!page) {
    throw new Error(`Unknown partner page slug: ${slug}`);
  }

  // Map slugs to breadcrumb labels
  const breadcrumbLabels: Record<string, string> = {
    agencies: "Agency Partners",
    "referral-program": "Referral Program",
    "setup-operators": "Setup Operators",
    marketers: "For Marketers",
  };

  const breadcrumbs: { label: string; path: string }[] = [
    { label: "Home", path: SITE_URL },
  ];

  if (page.route.startsWith("/partners/")) {
    breadcrumbs.push({ label: "Partners", path: `${SITE_URL}/partners` });
  } else if (page.route.startsWith("/for/")) {
    // For /for/* pages, we don't add an intermediate breadcrumb
  }

  breadcrumbs.push({ label: breadcrumbLabels[slug], path: getCanonicalUrl(slug) });

  return breadcrumbs;
}

function assertAllowedSchemaTypes(value: unknown): void {
  if (Array.isArray(value)) {
    value.forEach(assertAllowedSchemaTypes);
    return;
  }

  if (!value || typeof value !== "object") {
    return;
  }

  const schemaType = (value as { "@type"?: unknown })["@type"];
  if (typeof schemaType === "string" && FORBIDDEN_SCHEMA_TYPES.has(schemaType)) {
    throw new Error(`Forbidden schema type emitted: ${schemaType}`);
  }

  if (Array.isArray(schemaType)) {
    for (const entry of schemaType) {
      if (typeof entry === "string" && FORBIDDEN_SCHEMA_TYPES.has(entry)) {
        throw new Error(`Forbidden schema type emitted: ${entry}`);
      }
    }
  }

  Object.values(value).forEach(assertAllowedSchemaTypes);
}

export function getPartnerPageMetadata(slug: string): Metadata {
  const metadataEntry = PARTNER_PAGE_METADATA[slug];

  if (!metadataEntry) {
    throw new Error(`Unsupported partner page slug: ${slug}`);
  }

  const canonical = getCanonicalUrl(slug);

  return {
    title: metadataEntry.title,
    description: metadataEntry.description,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: metadataEntry.title,
      description: metadataEntry.description,
      type: "website",
      url: canonical,
      siteName: "SolaraAI",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export function getPartnerPageJsonLd(
  slug: string,
  options?: { includeFaq?: boolean }
): string[] {
  const page = partnerPages.find((p) => p.slug === slug);
  if (!page) {
    throw new Error(`Unknown partner page slug: ${slug}`);
  }

  const metadataEntry = PARTNER_PAGE_METADATA[slug];
  if (!metadataEntry) {
    throw new Error(`Unsupported partner page slug: ${slug}`);
  }

  const url = getCanonicalUrl(slug);
  const breadcrumbs = getBreadcrumbPath(slug);

  const jsonLd: JsonLdNode[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadataEntry.title,
      headline: metadataEntry.title,
      description: metadataEntry.description,
      url,
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: crumb.path,
      })),
    },
  ];

  if (page.hasFaq && options?.includeFaq) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What is the ${page.faqAngle}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `This page covers ${page.faqAngle}. See the details below.`,
          },
        },
      ],
    });
  }

  assertAllowedSchemaTypes(jsonLd);

  return jsonLd.map((node) => JSON.stringify(node));
}
