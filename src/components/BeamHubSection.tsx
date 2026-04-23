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
      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-100 bg-white p-2.5 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function BeamHubSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  const strategyRef = useRef<HTMLDivElement>(null);
  const scriptsRef = useRef<HTMLDivElement>(null);
  const productionRef = useRef<HTMLDivElement>(null);
  const publishingRef = useRef<HTMLDivElement>(null);
  const smsRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const growthRef = useRef<HTMLDivElement>(null);

  return (
    <section className="px-6 py-28 sm:px-10">

      <div className="mx-auto max-w-3xl text-center">
        <BlurFade delay={0.15}>
          <h2
            className="mt-6 text-3xl leading-snug tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A good business with dead social media
            <br className="hidden sm:block" />
            {" "}loses before the conversation even starts.
          </h2>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="mx-auto mt-6 max-w-xl text-xl font-medium text-gray-900">
            Social silence isn&apos;t neutral.{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              It&apos;s a signal.
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
            className="relative mx-auto flex h-[400px] w-full items-center justify-center overflow-hidden p-6"
          >
            <div className="relative z-10 flex h-full w-full scale-[0.8] flex-row items-stretch justify-between gap-10 sm:scale-100">
              {/* Left column */}
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={strategyRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </Circle>
                  <span className="text-xs font-medium text-gray-500">Strategy</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={scriptsRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" />
                      <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" />
                    </svg>
                  </Circle>
                  <span className="text-xs font-medium text-gray-500">Scripts</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={productionRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 14l4-4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="14" r="2" />
                      <path d="M4 6h16v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Circle>
                  <span className="text-xs font-medium text-gray-500">Production</span>
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
                  <Circle nodeRef={publishingRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" strokeLinecap="round" strokeLinejoin="round" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Circle>
                  <span className="text-xs font-medium text-gray-500">Publishing</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={smsRef}>
                    <img src="/icons/sms-logo.svg" alt="" className="h-7 w-7" aria-hidden="true" />
                  </Circle>
                  <span className="text-xs font-medium text-gray-500">Text</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={whatsappRef}>
                    <img src="/icons/whatsapp-icon.svg" alt="" className="h-7 w-7" aria-hidden="true" />
                  </Circle>
                  <span className="text-xs font-medium text-gray-500">WhatsApp</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Circle nodeRef={growthRef}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="17 6 23 6 23 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Circle>
                  <span className="text-xs font-medium text-gray-500">Growth Loop</span>
                </div>
              </div>
            </div>

            {/* Beams: left → center */}
            <AnimatedBeam containerRef={containerRef} fromRef={strategyRef} toRef={centerRef} curvature={-75} gradientStartColor="#c084fc" gradientStopColor="#f472b6" />
            <AnimatedBeam containerRef={containerRef} fromRef={scriptsRef} toRef={centerRef} gradientStartColor="#c084fc" gradientStopColor="#f472b6" />
            <AnimatedBeam containerRef={containerRef} fromRef={productionRef} toRef={centerRef} curvature={75} gradientStartColor="#c084fc" gradientStopColor="#f472b6" />

            <AnimatedBeam containerRef={containerRef} fromRef={publishingRef} toRef={centerRef} curvature={-90} gradientStartColor="#c084fc" gradientStopColor="#f472b6" reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={smsRef} toRef={centerRef} curvature={-30} gradientStartColor="#c084fc" gradientStopColor="#f472b6" reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={whatsappRef} toRef={centerRef} curvature={30} gradientStartColor="#c084fc" gradientStopColor="#f472b6" reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={growthRef} toRef={centerRef} curvature={90} gradientStartColor="#c084fc" gradientStopColor="#f472b6" reverse />
          </div>
        </BlurFade>

        {/* Text */}
        <div>
          <BlurFade delay={0.2}>
            <h3
              className="mt-6 text-3xl leading-snug tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Solara is not a content tool. It&apos;s your social media&nbsp;manager.
            </h3>
          </BlurFade>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-500">
            <BlurFade delay={0.3}>
              <p>
                Solara reads your business from your website, understands
                your brand and market, and builds a content strategy
                around your goals.
              </p>
            </BlurFade>
            <BlurFade delay={0.4}>
              <p>
                Every week it decides what to create, writes the scripts,
                tells you what to film, handles the editing, and publishes.
                You approve with one tap via text or WhatsApp.
              </p>
            </BlurFade>
            <BlurFade delay={0.5}>
              <p>
                Over time, it builds a performance model specific to your
                brand — and gets measurably better every month.
              </p>
            </BlurFade>
            <BlurFade delay={0.6}>
              <p className="text-xl font-semibold text-gray-900">
                This is what it feels like to have a real social media manager. For $69 a month.
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
