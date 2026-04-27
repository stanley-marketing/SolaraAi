import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

import { ROUTE_POLICY, LOCKED_COPY } from "./content";

const PAGE_TITLE = "SolaraAI \u2014 Your business has a director now";
const PAGE_DESCRIPTION =
  "Solara writes the brief. You film 5 scenes in 10 minutes. We cut, caption, schedule, and publish across Instagram, TikTok, Facebook, and Google Business \u2014 every week, automatically.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: ROUTE_POLICY.canonical },
  robots: { index: false, follow: false },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: ROUTE_POLICY.canonical,
    siteName: "Solara AI",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: PAGE_TITLE,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/opengraph-image.jpg"],
  },
};

export default function HomeV2() {
  return (
    <>
      <main className="relative min-h-screen bg-white text-ink-900">
        <TopNav />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Solara AI",
              url: ROUTE_POLICY.canonical,
              logo: {
                "@type": "ImageObject",
                url: `https://solaraai.com/Logo.svg`,
              },
              foundingDate: "2024",
              description:
                "The first autonomous social media team. Plans strategy, writes scripts, edits videos, and publishes for businesses through WhatsApp.",
              sameAs: [
                "https://www.instagram.com/solara.ai.official/",
                "https://www.facebook.com/profile.php?id=61577711271834",
                "https://www.linkedin.com/company/solaraai/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: PAGE_TITLE,
              url: ROUTE_POLICY.canonical,
              description: PAGE_DESCRIPTION,
              isPartOf: {
                "@type": "WebSite",
                name: "Solara AI",
                url: "https://solaraai.com",
              },
            }),
          }}
        />

        <div className="flex flex-col items-center justify-center px-6 py-24">
          <h1 className="text-4xl font-bold tracking-tight text-center">
            {LOCKED_COPY.heroHeadline}
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
