import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { AgencyHero } from "@/components/ai-marketing-agency/AgencyHero";
import { AgencyScope } from "@/components/ai-marketing-agency/AgencyScope";
import { AgencyProof } from "@/components/ai-marketing-agency/AgencyProof";
import { AgencyComparison } from "@/components/ai-marketing-agency/AgencyComparison";
import { AgencyFaq } from "@/components/ai-marketing-agency/AgencyFaq";
import { AgencyCta } from "@/components/ai-marketing-agency/AgencyCta";

export const metadata: Metadata = {
  title: "AI Marketing Agency — Managed Marketing | Solara AI",
  description:
    "AI marketing agency for SMBs: managed execution, cross-channel coordination, and accountable optimization for growth.",
  alternates: {
    canonical: "https://solaraai.com/ai-marketing-agency",
  },
  openGraph: {
    title: "AI Marketing Agency — Managed Marketing | Solara AI",
    description:
      "AI marketing agency for SMBs: managed execution, cross-channel coordination, and accountable optimization for growth.",
    url: "https://solaraai.com/ai-marketing-agency",
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
    title: "AI Marketing Agency — Managed Marketing | Solara AI",
    description:
      "A practical guide to choosing an AI marketing agency for growth-focused SMB teams.",
    images: ["/opengraph-image.jpg"],
  },
};

const SITE_URL = "https://solaraai.com";

const faqItems = [
  {
    question: "What does an AI marketing agency do?",
    answer:
      "An AI marketing agency combines AI systems with human strategic oversight to plan, launch, and optimize campaigns. It should manage execution across paid ads, content, social, and conversion paths instead of only providing recommendations.",
  },
  {
    question: "How is an AI marketing agency different from buying tools?",
    answer:
      "Tools can increase production speed, but teams still need operators to turn assets into outcomes. An agency model adds accountable execution, decision ownership, and ongoing optimization tied to business metrics.",
  },
  {
    question: "Is Solara a software tool or a managed service?",
    answer:
      "Solara combines platform capabilities with managed execution. You get AI-powered production and campaign operations support, so your team can move faster without adding full-time marketing headcount.",
  },
  {
    question: "What is included in managed AI marketing with Solara?",
    answer:
      "Scope can include campaign strategy, ad and content production, social publishing support, testing plans, and recurring optimization sprints with clear reporting on lead and pipeline outcomes.",
  },
  {
    question: "How transparent is pricing?",
    answer:
      "Solara pricing starts from $69/mo, with scope based on channels and execution needs. The engagement model is designed to stay clear on deliverables, timelines, and ownership from the beginning.",
  },
  {
    question: "How quickly can we expect traction?",
    answer:
      "Most teams see early directional data in the first few weeks, with stronger outcome trends after iterative optimization cycles. Results depend on market, offer quality, and sales follow-through.",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Marketing Agency — Managed Marketing | Solara AI",
  url: `${SITE_URL}/ai-marketing-agency`,
  description:
    "A practical guide to choosing an AI marketing agency with managed execution and measurable accountability.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Marketing Agency",
      item: `${SITE_URL}/ai-marketing-agency`,
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

export default function AiMarketingAgencyPage() {
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
      <AgencyHero />
      <AgencyScope />
      <AgencyProof />
      <AgencyComparison />
      <AgencyFaq />
      <AgencyCta />
      <Footer />
    </main>
  );
}
