import type { Metadata } from "next";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ArrowRight } from "lucide-react";

import { TopNav } from "@/components/LandingSections";

import { MobileCtaBar } from "@/components/MobileCtaBar";
import { BeamHubSection } from "@/components/BeamHubSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AgentsSection } from "@/components/AgentsSection";
import { EnterpriseAgentsStrip } from "@/components/EnterpriseAgentsStrip";
import { AdvantageSection } from "@/components/AdvantageSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { PricingSection } from "@/components/PricingSection";

import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://solaraai.com";

export const metadata: Metadata = {
  title: "Solara AI \u2014 Your AI Social Media Manager",
  description:
    "Solara is the autonomous social media manager that builds your strategy, writes your scripts, edits your videos, and publishes every week \u2014 $69/month.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Solara AI \u2014 Your AI Social Media Manager",
    description:
      "Strategy, scripts, production, publishing \u2014 managed every week by AI. Your social media manager for $69/month.",
    url: SITE_URL,
    siteName: "Solara AI",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solara AI \u2014 Your AI Social Media Manager",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solara AI \u2014 Your AI Social Media Manager",
    description:
      "Strategy, scripts, production, publishing \u2014 managed every week by AI. Your social media manager for $69/month.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-white text-ink-900">
        <TopNav />

      {/* Organisation + WebPage structured data */}
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
              "Autonomous social media manager that builds strategy, writes scripts, edits videos, and publishes every week for businesses.",
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
            name: "Solara AI \u2014 Your AI Social Media Manager",
            url: SITE_URL,
            description:
              "Autonomous social media manager: strategy, scripts, production, publishing \u2014 managed every week by AI.",
            isPartOf: {
              "@type": "WebSite",
              name: "Solara AI",
              url: SITE_URL,
            },
          }),
        }}
      />

      {/* Hero */}
      <AuroraBackground
        className="w-full flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center sm:min-h-[85vh] sm:px-10 sm:py-28"
        showRadialGradient={true}
      >
        {/* Pre-seed pill */}
        <div className="relative z-10" style={{ marginBottom: 20 }}>
          <div className="shimmer-pill"
            style={{
              position: "relative",
              overflow: "hidden",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "14px",
              fontWeight: 500,
              color: "#374151",
              borderRadius: 999,
              padding: "7px 16px",
              background: "rgba(255,255,255,0.65)",
              border: "1px solid #e5e7eb",
            }}
          >
            Backed by $1.2M in pre-seed funding
            <ArrowRight size={13} color="#9ca3af" />
          </div>
        </div>

        <h1
          className="relative z-10 max-w-[1200px] leading-[1.05] tracking-[-0.02em] text-ink-900"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
            fontFamily: "var(--font-display)", fontWeight: 300,
          }}
        >
          Meet your AI
          <br className="hidden sm:block" />
          social media manager.
        </h1>

        <p
          className="relative z-10 mx-auto mt-8 max-w-2xl text-ink-700/70"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6 }}
        >
          Strategy. Scripts. Production. Publishing.
          Every week, automatically — so your brand stays alive
          while you run your business.
        </p>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center rounded-[999px] bg-black px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white transition-colors duration-200 hover:bg-gray-700"
            >
            Sign Up
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-[999px] border border-line bg-white/60 px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-ink-900 backdrop-blur-sm transition-colors duration-200 hover:bg-gray-100"
          >
            Contact Sales
          </a>
        </div>

        <div className="relative z-10 mt-8 mb-2 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[
'/avatars/avatar-1.jpg',
'/avatars/avatar-2.jpg',
'/avatars/avatar-3.jpg',
'/avatars/avatar-4.jpg',
'/avatars/avatar-5.jpg',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">2,000+</span> businesses already growing
          </p>
        </div>
      </AuroraBackground>



          {/* Section 2 — The New Way */}
          <BeamHubSection />

          {/* Remaining placeholder sections */}
          <AgentsSection />
          <EnterpriseAgentsStrip />
          <AdvantageSection />
          <CaseStudySection />
          <PricingSection />


      </main>
      <Footer />
    </>
  );
}
