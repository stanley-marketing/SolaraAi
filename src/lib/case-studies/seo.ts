import type { Metadata } from "next";
import type { CaseStudy } from "./types";

const SITE_URL = "https://solaraai.com";
const CASE_STUDIES_PATH = "/case-study";
const OG_IMAGE = `${SITE_URL}/opengraph-image.jpg`;
const FORBIDDEN_SCHEMA_TYPES = new Set([
  "LocalBusiness",
  "GeneralContractor",
  "AggregateRating",
]);

type AllowedPrimarySchemaType = "Article" | "WebPage";
type ForbiddenSchemaType = "LocalBusiness" | "GeneralContractor" | "AggregateRating";

export interface CaseStudyJsonLdInput
  extends Pick<CaseStudy, "slug" | "clientName" | "executiveSummary" | "faq" | "seoMeta"> {
  title?: string;
  description?: string;
  breadcrumbLabel?: string;
  datePublished: string;
  schemaType?: AllowedPrimarySchemaType | ForbiddenSchemaType;
}

type JsonLdNode = {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
};

const CASE_STUDY_METADATA: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "maison-remodeling-group": {
    title: "Maison Remodeling — 131 Leads in 27 Days | Solara AI",
    description:
      "How Solara AI helped Maison Remodeling Group go from zero digital presence to 131 tracked leads, 5 signed contracts, and $800K+ in pipeline in 90 days.",
  },
  "the-missing-piece": {
    title: "The Missing Piece — Page 1 in 24 Days | Solara AI",
    description:
      "See how Solara AI helped The Missing Piece earn page-1 Google rankings, 16,081 Instagram views, and a Perplexity AI citation in 24 days.",
  },
};

function getCanonicalPath(slug: string): string {
  return `${CASE_STUDIES_PATH}/${slug}`;
}

function getCanonicalUrl(slug: string): string {
  return `${SITE_URL}${getCanonicalPath(slug)}`;
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

function getPrimarySchemaType(caseStudy: CaseStudyJsonLdInput): AllowedPrimarySchemaType {
  const schemaType = caseStudy.schemaType ?? "Article";

  if (
    schemaType === "LocalBusiness" ||
    schemaType === "GeneralContractor" ||
    schemaType === "AggregateRating"
  ) {
    throw new Error(`Forbidden schema type emitted: ${schemaType}`);
  }

  return schemaType;
}

function getCaseStudyTitle(caseStudy: CaseStudyJsonLdInput): string {
  const seoTitle = CASE_STUDY_METADATA[caseStudy.slug]?.title;
  return seoTitle ?? caseStudy.title ?? `${caseStudy.clientName} Case Study`;
}

function getCaseStudyDescription(caseStudy: CaseStudyJsonLdInput): string {
  const description = caseStudy.description ?? caseStudy.seoMeta.description ?? caseStudy.executiveSummary;

  if (!description) {
    throw new Error(`Case study ${caseStudy.slug} is missing a description.`);
  }

  return description;
}

function getCaseStudyLabel(caseStudy: CaseStudyJsonLdInput): string {
  return caseStudy.breadcrumbLabel ?? caseStudy.clientName ?? getCaseStudyTitle(caseStudy);
}

export function getCaseStudyMetadata(slug: string): Metadata {
  const metadataEntry = CASE_STUDY_METADATA[slug];

  if (!metadataEntry) {
    throw new Error(`Unsupported case study slug: ${slug}`);
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
      type: "article",
      url: canonical,
      siteName: "Solara AI",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: metadataEntry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataEntry.title,
      description: metadataEntry.description,
      images: [OG_IMAGE],
    },
  };
}

export function getCaseStudyJsonLd(caseStudy: CaseStudyJsonLdInput): JsonLdNode[] {
  const description = getCaseStudyDescription(caseStudy);
  const primaryType = getPrimarySchemaType(caseStudy);
  const title = getCaseStudyTitle(caseStudy);
  const url = getCanonicalUrl(caseStudy.slug);
  const breadcrumbLabel = getCaseStudyLabel(caseStudy);

  const publisher = {
    "@type": "Organization",
    name: "Solara AI",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/solara-logo-black.png`,
    },
  };

  const jsonLd: JsonLdNode[] = [
    {
      "@context": "https://schema.org",
      "@type": primaryType,
      name: title,
      headline: title,
      description,
      url,
      image: OG_IMAGE,
      datePublished: caseStudy.datePublished,
      dateModified: caseStudy.datePublished,
      author: publisher,
      publisher,
      mainEntityOfPage: url,
      about: {
        "@type": "Thing",
        name: caseStudy.clientName,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case Studies",
          item: `${SITE_URL}${CASE_STUDIES_PATH}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: breadcrumbLabel,
          item: url,
        },
      ],
    },
  ];

  if (caseStudy.faq && caseStudy.faq.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: caseStudy.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  assertAllowedSchemaTypes(jsonLd);

  return jsonLd;
}
