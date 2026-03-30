import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { AlternativesHero } from "@/components/alternatives/AlternativesHero";
import { AlternativesGrid } from "@/components/alternatives/AlternativesGrid";
import { AlternativesFaq } from "@/components/alternatives/AlternativesFaq";
import { AlternativesCta } from "@/components/alternatives/AlternativesCta";
import { FAQ_ITEMS } from "@/components/alternatives/content";

export const metadata: Metadata = {
  title: "AI Marketing Tool Alternatives (2026) | Solara AI",
  description:
    "AI marketing tool alternatives: compare content, social, and ad creative tools by cost, workflow depth, and execution.",
  alternates: {
    canonical: "https://solaraai.com/alternatives",
  },
  openGraph: {
    title: "AI Marketing Tool Alternatives (2026) | Solara AI",
    description:
      "AI marketing tool alternatives: compare content, social, and ad creative tools by cost, workflow depth, and execution.",
    url: "https://solaraai.com/alternatives",
    siteName: "Solara AI",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "SolaraAI — The AI Era In Marketing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Tool Alternatives (2026) | Solara AI",
    description:
      "Find the best alternatives to popular AI marketing tools with an execution-first comparison framework.",
    images: ["/opengraph-image.jpg"],
  },
};

const SITE_URL = "https://solaraai.com";

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Marketing Tool Alternatives (2026) | Solara AI",
  url: `${SITE_URL}/alternatives`,
  description:
    "Alternatives hub for AI marketing tools across content, social, and ad creative categories.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Alternatives",
      item: `${SITE_URL}/alternatives`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function AlternativesHubPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            header.fixed > div {
              border-color: rgba(232,232,232,0.45) !important;
              background: rgba(255,255,255,0.82) !important;
              backdrop-filter: blur(16px) !important;
              -webkit-backdrop-filter: blur(16px) !important;
              box-shadow: 0 12px 35px -28px rgba(23,19,14,0.45) !important;
            }
          `,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <TopNav />
      <AlternativesHero />
      <AlternativesGrid />
      <AlternativesFaq />
      <AlternativesCta />
      <Footer />
    </main>
  );
}
