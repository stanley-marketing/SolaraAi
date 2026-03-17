import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solara+ Managed Marketing — Done-For-You AI Marketing Service | Solara AI",
  description:
    "Solara+ is the done-for-you AI marketing service. Our team manages your paid ads, content, and campaigns end-to-end — so you can focus on growing your business.",
  alternates: {
    canonical: "https://solaraai.com/solara-plus",
  },
  openGraph: {
    title: "Solara+ Managed Marketing",
    description:
      "Done-for-you AI marketing service. We manage your paid ads, content, and campaigns end-to-end.",
    url: "https://solaraai.com/solara-plus",
    siteName: "Solara AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solara+ Managed Marketing",
    description:
      "Done-for-you AI marketing service. We manage your paid ads, content, and campaigns end-to-end.",
  },
};

const SITE_URL = "https://solaraai.com";

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Solara+ Managed Marketing",
  url: `${SITE_URL}/solara-plus`,
  description:
    "Solara+ is the done-for-you AI marketing service. Our team manages your paid ads, content, and campaigns end-to-end.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solara+",
        item: `${SITE_URL}/solara-plus`,
      },
    ],
  },
};

export default function SolaraPlusPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <TopNav />
      {/* Solara+ sections will be imported here */}
      <Footer />
    </main>
  );
}
