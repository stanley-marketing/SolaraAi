"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ─── Chaotic marketing noise words ─── */
const noiseRow1 = [
  "SEO", "CPC", "ROAS", "funnels", "A/B testing", "retargeting", "CTR",
  "impressions", "attribution", "lookalikes", "CRM", "drip campaigns",
  "pixel tracking", "bid strategy", "CPM", "landing pages",
  "SEO", "CPC", "ROAS", "funnels", "A/B testing", "retargeting", "CTR",
  "impressions", "attribution", "lookalikes", "CRM", "drip campaigns",
];

const noiseRow2 = [
  "engagement rate", "bounce rate", "DAU", "UTM tags", "cold outreach",
  "brand lift", "conversion API", "frequency cap", "cohort analysis",
  "creative fatigue", "quality score", "audience overlap", "MQL", "pipeline",
  "engagement rate", "bounce rate", "DAU", "UTM tags", "cold outreach",
  "brand lift", "conversion API", "frequency cap", "cohort analysis",
];

const noiseRow3 = [
  "programmatic", "multitouch", "omnichannel", "micro-moments", "viewability",
  "KPI dashboard", "growth hacking", "PLG", "demand gen", "intent data",
  "social proof", "influencer ROI", "content calendar", "ABM",
  "programmatic", "multitouch", "omnichannel", "micro-moments", "viewability",
  "KPI dashboard", "growth hacking", "PLG", "demand gen", "intent data",
];

function MarqueeRow({
  words,
  direction,
  speed,
  blur,
}: {
  words: string[];
  direction: "left" | "right";
  speed: number;
  blur: number;
}) {
  const animDir = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap" style={{ filter: `blur(${blur}px)` }}>
      <div
        className={`flex shrink-0 gap-4 ${animDir}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="inline-block rounded-full border border-black/[0.04] bg-black/[0.02] px-5 py-2 text-[0.78rem] font-medium tracking-wide text-black/[0.12] font-[family-name:var(--font-body)]"
          >
            {w}
          </span>
        ))}
      </div>
      {/* Duplicate for seamless loop */}
      <div
        className={`flex shrink-0 gap-4 ${animDir}`}
        style={{
          animationDuration: `${speed}s`,
        }}
        aria-hidden
      >
        {words.map((w, i) => (
          <span
            key={`dup-${i}`}
            className="inline-block rounded-full border border-black/[0.04] bg-black/[0.02] px-5 py-2 text-[0.78rem] font-medium tracking-wide text-black/[0.12] font-[family-name:var(--font-body)]"
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

export function WhyNowSectionB() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-20% 0px -20% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [0, 0.97, 0.97, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-40 sm:py-56">
      {/* Marquee noise layers */}
      <div className="absolute inset-0 flex flex-col items-stretch justify-center gap-5 opacity-70">
        <MarqueeRow words={noiseRow1} direction="left" speed={45} blur={0} />
        <MarqueeRow words={noiseRow2} direction="right" speed={55} blur={1} />
        <MarqueeRow words={noiseRow1} direction="left" speed={38} blur={0} />
        <MarqueeRow words={noiseRow3} direction="right" speed={50} blur={2} />
        <MarqueeRow words={noiseRow2} direction="left" speed={42} blur={0} />
        <MarqueeRow words={noiseRow3} direction="right" speed={60} blur={1} />
        <MarqueeRow words={noiseRow1} direction="left" speed={48} blur={0} />
        <MarqueeRow words={noiseRow2} direction="right" speed={53} blur={2} />
        <MarqueeRow words={noiseRow3} direction="left" speed={40} blur={0} />
        <MarqueeRow words={noiseRow1} direction="right" speed={58} blur={1} />
        <MarqueeRow words={noiseRow2} direction="left" speed={44} blur={0} />
      </div>

      {/* White overlay that reveals center text */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 bg-white"
      />

      {/* Central statement that cuts through */}
      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 sm:px-10">
        <div ref={textRef} className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.1rem,2.4vw,1.45rem)] leading-[1.7] text-black/55 font-[family-name:var(--font-body)] font-light"
          >
            But marketing has also never been this fragmented&nbsp;&mdash;
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-[clamp(2rem,5.5vw,4.2rem)] leading-[1.05] tracking-[-0.025em] text-black"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            more channels, more tools,<br />
            <span className="italic">more noise</span>,
            <span className="text-black/25">&ensp;and less<br />clarity than ever before.</span>
          </motion.h2>

          {/* Decorative separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-10 h-px w-24 origin-center bg-black/[0.1]"
          />
        </div>
      </div>
    </section>
  );
}
