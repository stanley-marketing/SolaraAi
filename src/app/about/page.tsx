import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";
import { AboutHero } from "@/components/AboutHero";
import { AboutFunding } from "@/components/AboutFunding";
import { AboutMethodology } from "@/components/AboutMethodology";
import { AboutValues } from "@/components/AboutValues";
import { AboutCta } from "@/components/AboutCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Solara AI — AI-Powered Marketing for Growing Businesses",
  description:
    "Solara AI is a 2024-founded AI marketing service backed by $1.2M in pre-seed funding. We help growing businesses run smarter paid ads, content, and campaigns — without the agency overhead.",
  alternates: {
    canonical: "https://solaraai.com/about",
  },
  openGraph: {
    title: "About Solara AI",
    description:
      "AI-powered marketing service founded in 2024. Backed by $1.2M pre-seed. We help growing businesses run smarter campaigns.",
    url: "https://solaraai.com/about",
    siteName: "Solara AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Solara AI",
    description:
      "AI-powered marketing service founded in 2024. Backed by $1.2M pre-seed.",
  },
};

const SITE_URL = "https://solaraai.com";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Solara AI",
  url: SITE_URL,
  foundingDate: "2024",
  description:
    "Solara AI is an AI-powered marketing service that helps growing businesses run smarter paid ads, content, and campaigns.",
  sameAs: [
    "https://www.instagram.com/solara.ai.official/",
    "https://www.facebook.com/profile.php?id=61577711271834",
    "https://www.linkedin.com/company/solaraai/",
  ],
  logo: { "@type": "ImageObject", url: `${SITE_URL}/Logo.svg` },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About Solara AI",
  url: `${SITE_URL}/about`,
  description:
    "Solara AI is a 2024-founded AI marketing service backed by $1.2M in pre-seed funding.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}/about`,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <TopNav />
      <AboutHero />
      <AboutFunding />
      <AboutMethodology />
      <AboutValues />
      <AboutCta />
      <Footer />
    </main>
  );
}
