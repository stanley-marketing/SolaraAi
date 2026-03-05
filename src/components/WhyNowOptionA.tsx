"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

type ChaosTokenData = {
  text: string;
  from: [number, number];
  to: [number, number];
  delay: number;
};

const chaosTokens: ChaosTokenData[] = [
  { text: "more channels", from: [-260, -118], to: [-130, -54], delay: 0 },
  { text: "more tools", from: [220, -128], to: [118, -62], delay: 0.02 },
  { text: "more noise", from: [-292, 18], to: [-166, 18], delay: 0.04 },
  { text: "less clarity", from: [244, 38], to: [138, 58], delay: 0.06 },
  { text: "ad dashboards", from: [-250, 148], to: [-138, 138], delay: 0.08 },
  { text: "content queue", from: [246, 138], to: [132, 130], delay: 0.1 },
];

function ChaosToken({
  token,
  progress,
}: {
  token: ChaosTokenData;
  progress: MotionValue<number>;
}) {
  const appearStart = 0.08 + token.delay;
  const settlePoint = 0.52;

  const x = useTransform(progress, [appearStart, settlePoint], [token.from[0], token.to[0]]);
  const y = useTransform(progress, [appearStart, settlePoint], [token.from[1], token.to[1]]);
  const opacity = useTransform(progress, [appearStart, appearStart + 0.1, 0.58], [0, 0.92, 0.14]);
  const blurValue = useTransform(progress, [appearStart, settlePoint], [12, 0]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.span
      style={{ x, y, opacity, filter }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-black/12 bg-white/70 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-black/60 shadow-[0_12px_35px_-25px_rgba(0,0,0,0.32)]"
    >
      {token.text}
    </motion.span>
  );
}

export function WhyNowOptionA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [0.05, 0.3, 0.9], [70, 0, -30]);
  const cardScale = useTransform(scrollYProgress, [0.05, 0.25], [0.96, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.02, 0.14], [0.5, 1]);
  const chaosLayerOpacity = useTransform(scrollYProgress, [0.08, 0.2, 0.5, 0.62], [0, 1, 1, 0]);
  const clarityOpacity = useTransform(scrollYProgress, [0.5, 0.64], [0, 1]);
  const clarityY = useTransform(scrollYProgress, [0.5, 0.64], [34, 0]);
  const emphasisOpacity = useTransform(scrollYProgress, [0.56, 0.7], [0, 1]);
  const emphasisScale = useTransform(scrollYProgress, [0.56, 0.7], [0.94, 1]);
  const dividerScale = useTransform(scrollYProgress, [0.52, 0.68], [0, 1]);

  return (
    <section ref={sectionRef} className="relative border-t border-black/10 bg-white">
      <div className="mx-auto min-h-[185vh] w-full px-6 sm:px-10">
        <div className="sticky top-0 flex min-h-screen items-center py-20">
          <motion.article
            style={{ y: cardY, scale: cardScale, opacity: cardOpacity }}
            className="relative w-full overflow-hidden rounded-[2.8rem] border border-black/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.96)_0%,rgba(248,248,248,0.88)_100%)] p-6 shadow-[0_32px_110px_-70px_rgba(0,0,0,0.5)] sm:p-10 lg:p-14"
          >
            <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_72%)]" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0)_74%)]" />

            <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
              <div className="relative z-10 flex flex-col gap-3 lg:pt-4">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-black/55">
                  Section 1 / Option A
                </span>
                <h2
                  className="text-[2.2rem] leading-[0.95] text-black"
                  style={{ fontFamily: "var(--font-display-playfair)" }}
                >
                  Why now
                </h2>
                <p className="max-w-[14rem] text-sm leading-relaxed text-black/52">
                  Fragmentation turns into clarity as the section resolves.
                </p>
              </div>

              <div className="relative min-h-[27rem] overflow-hidden rounded-[2rem] border border-black/10 bg-white/76 px-6 py-8 sm:px-10 sm:py-10">
                <motion.div style={{ opacity: chaosLayerOpacity }} className="pointer-events-none absolute inset-0">
                  {chaosTokens.map((token) => (
                    <ChaosToken key={token.text} token={token} progress={scrollYProgress} />
                  ))}
                </motion.div>

                <motion.div style={{ opacity: clarityOpacity, y: clarityY }} className="relative z-10 max-w-4xl">
                  <p className="text-[clamp(1.03rem,1.45vw,1.26rem)] leading-[1.68] tracking-[0.01em] text-black/82">
                    Marketing is more important now than ever. It turns a business into a brand and
                    makes sure people know you exist. But marketing has also never been this
                    fragmented: more channels, more tools, more noise, and less clarity than ever
                    before.
                  </p>

                  <motion.span
                    style={{ scaleX: dividerScale }}
                    className="mt-8 block h-px w-full origin-left bg-gradient-to-r from-black/30 via-black/12 to-transparent"
                  />

                  <motion.p
                    style={{
                      opacity: emphasisOpacity,
                      scale: emphasisScale,
                      fontFamily: "var(--font-display-playfair)",
                    }}
                    className="mt-7 text-[clamp(2.1rem,5.2vw,4.2rem)] leading-[0.9] text-black"
                  >
                    That era is ending.
                  </motion.p>

                  <p className="mt-6 max-w-4xl text-[clamp(1.01rem,1.3vw,1.16rem)] leading-[1.7] tracking-[0.008em] text-black/78">
                    Solara AI is the AI for marketing. Stop burying yourself in endless tasks,
                    wasting time, money, and your sanity trying to figure it out, and start
                    watching marketing actually work for you.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
