import { AuroraBackground } from "@/components/ui/aurora-background";

import { TopNav } from "@/components/LandingSections";

import { MobileCtaBar } from "@/components/MobileCtaBar";
import { BeamHubSection } from "@/components/BeamHubSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AgentsSection } from "@/components/AgentsSection";
import { AdvantageSection } from "@/components/AdvantageSection";
import { PricingSection } from "@/components/PricingSection";

import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-white text-ink-900">
        <TopNav />

      {/* Hero */}
      <AuroraBackground
        className="w-full px-6 pb-16 pt-44 text-center sm:px-10"
        showRadialGradient={true}
      >
        <h1
          className="relative z-10 max-w-5xl leading-[1.05] tracking-[-0.02em] text-ink-900"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
            fontFamily: "var(--font-display)", fontWeight: 300,
          }}
        >
          Looking for real marketing and real growth?
          <br className="hidden sm:block" />
          You&apos;re in the right place.
        </h1>

        <p
          className="relative z-10 mx-auto mt-8 max-w-2xl text-ink-700/70"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6 }}
        >
          We are leading the new era of AI marketing. More marketing. More growth.
          Less cost. That&apos;s not a pitch. That&apos;s the model.
        </p>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center rounded-[999px] bg-black px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white transition-colors duration-200 hover:bg-gray-700"
          >
            Sign Up
          </a>
          <a
            href="/product"
            className="inline-flex items-center rounded-[999px] border border-line bg-white/60 px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-ink-900 backdrop-blur-sm transition-colors duration-200 hover:bg-gray-100"
          >
            Contact Sales
          </a>
        </div>

        {/* Social proof */}
        <div className="relative z-10 mt-8 mb-2 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[
              'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
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
          <AdvantageSection />
          <PricingSection />


      </main>
      <Footer />
    </>
  );
}
