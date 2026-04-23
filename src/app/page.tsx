import type { Metadata } from "next";

import { TopNav } from "@/components/LandingSections";

import { ChannelWhisper } from "@/components/homepage/ChannelWhisper";
import { HeroSection } from "@/components/homepage/HeroSection";
import { MessagesScriptedHeroMockup } from "@/components/homepage/MessagesMockup";
import { NotAToolSection } from "@/components/homepage/NotAToolSection";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { BeamHubSection } from "@/components/BeamHubSection";
import { ServicesSection } from "@/components/ServicesSection";
import ComparisonSection from "@/components/homepage/ComparisonSection";

import { AdvantageSection } from "@/components/AdvantageSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { PricingSection } from "@/components/PricingSection";

import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://solaraai.com";

export const metadata: Metadata = {
  title: "Solara AI \u2014 The first autonomous social media team",
  description:
    "Strategy, scripts, editing, publishing \u2014 all through WhatsApp. 5 minutes a day replaces a $2,000/month team.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Solara AI \u2014 The first autonomous social media team",
    description:
      "Strategy, scripts, editing, publishing \u2014 all through WhatsApp. 5 minutes a day replaces a $2,000/month team.",
    url: SITE_URL,
    siteName: "Solara AI",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solara AI \u2014 The first autonomous social media team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solara AI \u2014 The first autonomous social media team",
    description:
      "Strategy, scripts, editing, publishing \u2014 all through WhatsApp. 5 minutes a day replaces a $2,000/month team.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function Home() {
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
              url: SITE_URL,
              logo: { "@type": "ImageObject", url: `${SITE_URL}/Logo.svg` },
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
              name: "Solara AI \u2014 The first autonomous social media team",
              url: SITE_URL,
              description:
                "The first autonomous social media team. Strategy, scripts, editing, publishing \u2014 all through WhatsApp. 5 minutes a day replaces a $2,000/month team.",
              isPartOf: {
                "@type": "WebSite",
                name: "Solara AI",
                url: SITE_URL,
              },
            }),
          }}
        />

        <HeroSection
          mockup={
            <div className="origin-center scale-[0.84] md:scale-100 lg:-rotate-2">
              <MessagesScriptedHeroMockup phoneWidth={320} />
            </div>
          }
          whisperLine={<ChannelWhisper />}
        />

        <NotAToolSection />

        <BeamHubSection />

        <ComparisonSection />
        <AdvantageSection />
        <CaseStudySection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
