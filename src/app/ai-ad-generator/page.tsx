import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { AdGenHero } from "@/components/ai-ad-generator/AdGenHero";
import { AdGenWorkflow } from "@/components/ai-ad-generator/AdGenWorkflow";
import { AdGenQuality } from "@/components/ai-ad-generator/AdGenQuality";
import { AdGenFormats } from "@/components/ai-ad-generator/AdGenFormats";
import { AdGenFaq } from "@/components/ai-ad-generator/AdGenFaq";
import { AdGenCta } from "@/components/ai-ad-generator/AdGenCta";

export const metadata: Metadata = {
  title: "AI Ad Generator for SMBs | Solara AI",
  description:
    "AI ad generator for SMBs: brief-to-launch workflow, quality controls, UGC creation, and optimization tied to leads.",
  alternates: {
    canonical: "https://solaraai.com/ai-ad-generator",
  },
  openGraph: {
    title: "AI Ad Generator for SMBs | Solara AI",
    description:
      "AI ad generator for SMBs: brief-to-launch workflow, quality controls, UGC creation, and optimization tied to leads.",
    url: "https://solaraai.com/ai-ad-generator",
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
    title: "AI Ad Generator for SMBs | Solara AI",
    description:
      "A practical AI ad generator workflow for SMB teams across Meta, Google, and short-form creative.",
    images: ["/opengraph-image.jpg"],
  },
};

const SITE_URL = "https://solaraai.com";

const faqItems = [
  {
    question: "What is an AI ad generator?",
    answer:
      "An AI ad generator is a system that creates ad copy, visuals, hooks, CTAs, and campaign variants from a structured brief. The best systems also include launch support and optimization guidance instead of stopping at creative drafts.",
  },
  {
    question: "Which channels can Solara support for ad generation?",
    answer:
      "Solara supports cross-channel ad execution, including paid social and performance campaign workflows where creative production and optimization are connected. The goal is consistent message delivery, not one-off assets.",
  },
  {
    question: "How do you control ad quality and brand safety?",
    answer:
      "Quality controls include offer and CTA alignment, claim checks, audience fit, channel-specific formatting, and approval checkpoints before launch. This protects brand consistency while preserving production speed.",
  },
  {
    question: "Can Solara generate UGC-style ad creative?",
    answer:
      "Yes. Solara supports UGC and short-form ad workflows, including multiple hooks, framing angles, and conversion-focused call-to-action variants that can be tested quickly.",
  },
  {
    question: "Who owns the ads and assets created?",
    answer:
      "You do. Your business retains ownership of campaign assets, ad copy, and performance learnings. That includes what is produced, launched, and iterated in the account.",
  },
  {
    question: "What does pricing start at?",
    answer:
      "Solara pricing starts from $69/mo. Final scope depends on ad volume, channels, and whether you need fully managed execution with ongoing optimization.",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Ad Generator for SMBs | Solara AI",
  url: `${SITE_URL}/ai-ad-generator`,
  description:
    "A practical guide to evaluating AI ad generators for SMB teams, including workflow, quality control, and optimization systems.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Ad Generator",
      item: `${SITE_URL}/ai-ad-generator`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function AiAdGeneratorPage() {
  return (
    <main className="relative min-h-screen">
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
      <AdGenHero />
      <AdGenWorkflow />
      <AdGenQuality />
      <AdGenFormats />
      <AdGenFaq />
      <AdGenCta />
      <Footer />
    </main>
  );
}
