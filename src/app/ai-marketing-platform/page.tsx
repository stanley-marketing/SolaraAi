import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { PlatformHero } from "@/components/ai-marketing-platform/PlatformHero";
import { PlatformFeatures } from "@/components/ai-marketing-platform/PlatformFeatures";
import { PlatformComparison } from "@/components/ai-marketing-platform/PlatformComparison";
import { PlatformProof } from "@/components/ai-marketing-platform/PlatformProof";
import { PlatformFaq } from "@/components/ai-marketing-platform/PlatformFaq";
import { PlatformCta } from "@/components/ai-marketing-platform/PlatformCta";

export const metadata: Metadata = {
  title: "AI Marketing Platform for Growing Businesses | Solara AI",
  description:
    "AI marketing platform for SMBs: strategy, creative, publishing, optimization, and accountable execution in one workflow.",
  alternates: {
    canonical: "https://solaraai.com/ai-marketing-platform",
  },
  openGraph: {
    title: "AI Marketing Platform for Growing Businesses | Solara AI",
    description:
      "AI marketing platform for SMBs: strategy, creative, publishing, optimization, and accountable execution in one workflow.",
    url: "https://solaraai.com/ai-marketing-platform",
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
    title: "AI Marketing Platform for Growing Businesses | Solara AI",
    description:
      "What to look for in an AI marketing platform, plus a practical checklist for SMB teams.",
    images: ["/opengraph-image.jpg"],
  },
};

const SITE_URL = "https://solaraai.com";

const faqItems = [
  {
    question: "What is an AI marketing platform?",
    answer:
      "An AI marketing platform is a system that combines strategy, creative production, campaign publishing, and optimization in one workflow. The best platforms do not stop at content generation — they help teams launch and improve live campaigns based on performance data.",
  },
  {
    question: "How is Solara different from using separate AI tools?",
    answer:
      "Most tool stacks require a team to connect planning, copy, design, channel setup, analytics, and iteration manually. Solara is execution-first: campaigns get built, launched, and optimized with managed support, so work moves from idea to results faster.",
  },
  {
    question: "How quickly can an SMB team get started?",
    answer:
      "Most teams can launch their first structured campaigns in days, not months. Setup includes goals, channel priorities, baseline messaging, and a practical reporting rhythm so optimization starts immediately.",
  },
  {
    question: "What channels can an AI marketing platform support?",
    answer:
      "A complete platform should support paid ads, organic content, landing pages, and conversion-focused follow-up. Solara supports cross-channel execution so performance can be measured as a system instead of isolated tactics.",
  },
  {
    question: "What does pricing look like for Solara?",
    answer:
      "Solara plans start from $69/mo. Final scope depends on your channel mix, execution volume, and whether you need managed support for paid campaigns, social content, and ongoing optimization.",
  },
  {
    question: "Do we keep ownership of our assets and data?",
    answer:
      "Yes. Your creative assets, ad copy, audience learnings, and campaign data remain yours. A strong platform should improve execution speed without locking your business into hidden dependencies.",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Marketing Platform for Growing Businesses | Solara AI",
  url: `${SITE_URL}/ai-marketing-platform`,
  description:
    "A practical guide to choosing an AI marketing platform for SMB teams, including architecture, requirements, and execution benchmarks.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Marketing Platform",
      item: `${SITE_URL}/ai-marketing-platform`,
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

export default function AiMarketingPlatformPage() {
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
      <PlatformHero />
      <PlatformFeatures />
      <PlatformComparison />
      <PlatformProof />
      <PlatformFaq />
      <PlatformCta />
      <Footer />
    </main>
  );
}
