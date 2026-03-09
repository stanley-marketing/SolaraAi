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
      <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-purple-500">
        ⬇ Option 1B — Animated Beam Hub
      </p>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_1fr]">
        {/* Visual: Beam hub */}
        <BlurFade delay={0}>
          <div
            ref={containerRef}
            className="relative mx-auto flex h-[400px] w-full items-center justify-center p-6"
          >
            <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
              {/* Left column */}
              <div className="flex flex-col items-center justify-center gap-6">
                <Circle nodeRef={adsRef}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 16l4-8 4 4 5-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Circle>
                <Circle nodeRef={seoRef}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                  </svg>
                </Circle>
                <Circle nodeRef={creativeRef}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </Circle>
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
              <div className="flex flex-col items-center justify-center gap-6">
                <Circle nodeRef={cmsRef}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
                  </svg>
                </Circle>
                <Circle nodeRef={socialRef}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Circle>
                <Circle nodeRef={leadsRef}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Circle>
              </div>
            </div>

            {/* Beams: left → center */}
            <AnimatedBeam containerRef={containerRef} fromRef={adsRef} toRef={centerRef} curvature={-75} gradientStartColor="#c084fc" gradientStopColor="#f472b6" />
            <AnimatedBeam containerRef={containerRef} fromRef={seoRef} toRef={centerRef} gradientStartColor="#c084fc" gradientStopColor="#f472b6" />
            <AnimatedBeam containerRef={containerRef} fromRef={creativeRef} toRef={centerRef} curvature={75} gradientStartColor="#c084fc" gradientStopColor="#f472b6" />

            {/* Beams: center → right */}
            <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={cmsRef} curvature={75} gradientStartColor="#c084fc" gradientStopColor="#f472b6" reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={socialRef} gradientStartColor="#c084fc" gradientStopColor="#f472b6" reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={leadsRef} curvature={-75} gradientStartColor="#c084fc" gradientStopColor="#f472b6" reverse />
          </div>
        </BlurFade>

        {/* Text */}
        <div>
          <BlurFade delay={0.1}>
            <span className="inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-500">
              The New Way
            </span>
          </BlurFade>
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
