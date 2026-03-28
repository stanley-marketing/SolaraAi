import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { SolaraGrowHero } from "@/components/grow/SolaraGrowHero";
import { SolaraGrowInsight } from "@/components/grow/SolaraGrowInsight";
import { SolaraGrowPositioning } from "@/components/grow/SolaraGrowPositioning";
import { SolaraGrowProcess } from "@/components/grow/SolaraGrowProcess";
import { SolaraGrowMockup } from "@/components/grow/SolaraGrowMockup";
import { SolaraGrowProof } from "@/components/grow/SolaraGrowProof";
import { SolaraGrowComparison } from "@/components/grow/SolaraGrowComparison";
import { SolaraGrowTrust } from "@/components/grow/SolaraGrowTrust";
import { SolaraGrowClosingCta } from "@/components/grow/SolaraGrowClosingCta";

export const metadata: Metadata = {
  title: "Grow Managed Marketing — Done-For-You AI Marketing Service | Solara AI",
  description:
    "Grow is the done-for-you AI marketing service. Our team manages your paid ads, content, and campaigns end-to-end — so you can focus on growing your business.",
  alternates: {
    canonical: "https://solaraai.com/grow",
  },
  openGraph: {
    title: "Grow Managed Marketing",
    description:
      "Done-for-you AI marketing service. We manage your paid ads, content, and campaigns end-to-end.",
    url: "https://solaraai.com/grow",
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
    title: "Grow Managed Marketing",
    description:
      "Done-for-you AI marketing service. We manage your paid ads, content, and campaigns end-to-end.",
    images: ["/opengraph-image.jpg"],
  },
};

const SITE_URL = "https://solaraai.com";

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Grow Managed Marketing",
  url: `${SITE_URL}/grow`,
  description:
    "Grow is the done-for-you AI marketing service. Our team manages your paid ads, content, and campaigns end-to-end.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Grow",
        item: `${SITE_URL}/grow`,
      },
    ],
  },
};

export default function GrowPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      {/* Force nav pill to always show white background on this dark-hero page */}
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
      <TopNav />
      <SolaraGrowHero />
      <SolaraGrowInsight />
      <SolaraGrowPositioning />
      <SolaraGrowProcess />
      <SolaraGrowMockup />
      <SolaraGrowProof />
      <SolaraGrowComparison />
      <SolaraGrowTrust />
      <SolaraGrowClosingCta />
      <Footer />
    </main>
  );
}
