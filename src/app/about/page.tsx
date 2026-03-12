import type { Metadata } from "next";
import Script from "next/script";

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
    canonical: "https://www.solaraai.io/about",
  },
  openGraph: {
    title: "About Solara AI",
    description:
      "AI-powered marketing service founded in 2024. Backed by $1.2M pre-seed. We help growing businesses run smarter campaigns.",
    url: "https://www.solaraai.io/about",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Solara AI",
  url: "https://www.solaraai.io",
  foundingDate: "2024",
  description:
    "Solara AI is an AI-powered marketing service that helps growing businesses run smarter paid ads, content, and campaigns.",
  sameAs: [
    "https://www.instagram.com/solara.ai.official/",
    "https://www.facebook.com/profile.php?id=61577711271834",
    "https://www.linkedin.com/company/solaraai/?viewAsMember=true",
  ],
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <Script
        id="about-jsonld"
        type="application/ld+json"
      >
        {JSON.stringify(jsonLd)}
      </Script>
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
