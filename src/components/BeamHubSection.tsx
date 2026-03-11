"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BlurFade } from "@/components/ui/blur-fade";

function Circle({
  children,
  nodeRef,
  className = "",
}: {
  children: React.ReactNode;
  nodeRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
}) {
  return (
    <div
      ref={nodeRef}
      className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-100 bg-white p-2.5 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function BeamHubSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  const adsRef = useRef<HTMLDivElement>(null);
  const seoRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
  const cmsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const leadsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="border-t border-gray-100 px-6 py-28 sm:px-10">

      <div className="mx-auto max-w-3xl text-center">
        <BlurFade delay={0.15}>
          <h2
            className="mt-6 text-3xl leading-snug tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Right now someone needs exactly what you offer.
            <br className="hidden sm:block" />
            {" "}They just can&apos;t find you.
          </h2>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="mx-auto mt-6 max-w-xl text-xl font-medium text-gray-900">
            That used to cost a fortune.{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Now it doesn&apos;t.
            </span>
          </p>
        </BlurFade>
      </div>

      {/* Part 2: Beam hub visual + solution text */}
      <div className="mx-auto mt-20 grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_1fr]">
        {/* Visual: Beam hub */}
        <BlurFade delay={0}>
          <div
            ref={containerRef}
            className="relative mx-auto flex h-[400px] w-full items-center justify-center p-6"
          >
            <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
              {/* Left column */}
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={adsRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 16l4-8 4 4 5-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Circle>
                  <span className="text-[11px] font-medium text-gray-500">Ads</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={seoRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                    </svg>
                  </Circle>
                  <span className="text-[11px] font-medium text-gray-500">SEO</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={creativeRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </Circle>
                  <span className="text-[11px] font-medium text-gray-500">Creative</span>
                </div>
              </div>

              {/* Center: Solara logo */}
              <div className="flex flex-col items-center justify-center">
                <div
                  ref={centerRef}
                  className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-100 bg-white shadow-lg"
                >
                  <img
                    src="/solara-icon.svg"
                    alt="Solara"
                    className="h-9 w-9 rounded-full"
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={cmsRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
                    </svg>
                  </Circle>
                  <span className="text-[11px] font-medium text-gray-500">Website</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={socialRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Circle>
                  <span className="text-[11px] font-medium text-gray-500">Social</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={leadsRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Circle>
                  <span className="text-[11px] font-medium text-gray-500">Leads</span>
                </div>
              </div>
            </div>

            {/* Beams: left → center */}
            <AnimatedBeam containerRef={containerRef} fromRef={adsRef} toRef={centerRef} curvature={-75} gradientStartColor="#c084fc" gradientStopColor="#f472b6" />
            <AnimatedBeam containerRef={containerRef} fromRef={seoRef} toRef={centerRef} gradientStartColor="#c084fc" gradientStopColor="#f472b6" />
            <AnimatedBeam containerRef={containerRef} fromRef={creativeRef} toRef={centerRef} curvature={75} gradientStartColor="#c084fc" gradientStopColor="#f472b6" />

            {/* Beams: right → center (reverse gradient to animate outward) */}
            <AnimatedBeam containerRef={containerRef} fromRef={cmsRef} toRef={centerRef} curvature={-75} gradientStartColor="#c084fc" gradientStopColor="#f472b6" reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={socialRef} toRef={centerRef} gradientStartColor="#c084fc" gradientStopColor="#f472b6" reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={leadsRef} toRef={centerRef} curvature={75} gradientStartColor="#c084fc" gradientStopColor="#f472b6" reverse />
          </div>
        </BlurFade>

        {/* Text */}
        <div>
          <BlurFade delay={0.2}>
            <h2
              className="mt-6 text-3xl leading-snug tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Solara is beyond AI&nbsp;marketing.
            </h2>
          </BlurFade>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-500">
            <BlurFade delay={0.3}>
              <p>
                It&apos;s the new way to drive real growth — through the perfect
                collaboration between cutting-edge AI and human expertise.
              </p>
            </BlurFade>
            <BlurFade delay={0.4}>
              <p>
                AI gives you power, speed, and scale. Human expertise gives you
                strategy, taste, and judgment. Together they give you something
                that didn&apos;t exist before.
              </p>
            </BlurFade>
            <BlurFade delay={0.5}>
              <p>
                A full marketing operation. Running for your business. Every
                single day. At a cost that will make you ask —{" "}
                <em>are you doing charity?</em>
              </p>
            </BlurFade>
            <BlurFade delay={0.6}>
              <p className="text-xl font-semibold text-gray-900">
                We&apos;re not.
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
