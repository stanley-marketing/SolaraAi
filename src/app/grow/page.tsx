import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { SolaraPlusHero } from "@/components/grow/SolaraPlusHero";
import { SolaraPlusInsight } from "@/components/grow/SolaraPlusInsight";
import { SolaraPlusPositioning } from "@/components/grow/SolaraPlusPositioning";
import { SolaraPlusProcess } from "@/components/grow/SolaraPlusProcess";
import { SolaraPlusMockup } from "@/components/grow/SolaraPlusMockup";
import { SolaraPlusProof } from "@/components/grow/SolaraPlusProof";
import { SolaraPlusComparison } from "@/components/grow/SolaraPlusComparison";
import { SolaraPlusTrust } from "@/components/grow/SolaraPlusTrust";
import { SolaraPlusClosingCta } from "@/components/grow/SolaraPlusClosingCta";

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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Managed Marketing",
    description:
      "Done-for-you AI marketing service. We manage your paid ads, content, and campaigns end-to-end.",
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
      <SolaraPlusHero />
      <SolaraPlusInsight />
      <SolaraPlusPositioning />
      <SolaraPlusProcess />
      <SolaraPlusMockup />
      <SolaraPlusProof />
      <SolaraPlusComparison />
      <SolaraPlusTrust />
      <SolaraPlusClosingCta />
      <Footer />
    </main>
  );
}
