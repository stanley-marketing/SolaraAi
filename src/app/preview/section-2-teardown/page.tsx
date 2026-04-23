"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";

const INK = "#0a0a0a";
const INK_MUTED = "rgba(10,10,10,0.72)";
const INK_SOFT = "rgba(10,10,10,0.5)";
const INK_FAINT = "rgba(10,10,10,0.32)";
const SHELL = "#f8f7f4";
const ROSE = "#ec4899";
const ROSE_DEEP = "#db2777";
const HAIRLINE = "rgba(10,10,10,0.1)";
const HAIRLINE_HEAVY = "rgba(10,10,10,0.18)";

const DISPLAY = "var(--font-display)";
const BODY = "var(--font-body)";

function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(10,10,10)",
  maxOpacity = 0.2,
  className,
}: {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let squares: Float32Array;
    let cols = 0;
    let rows = 0;

    const setCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      cols = Math.floor(w / (squareSize + gridGap));
      rows = Math.floor(h / (squareSize + gridGap));
      squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }
    };

    const draw = (delta: number) => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j;
          if (Math.random() < flickerChance * delta) {
            squares[idx] = Math.random() * maxOpacity;
          }
          ctx.fillStyle = color.replace("rgb(", "rgba(").replace(")", `,${squares[idx]})`);
          ctx.fillRect(
            i * (squareSize + gridGap),
            j * (squareSize + gridGap),
            squareSize,
            squareSize,
          );
        }
      }
    };

    let last = performance.now();
    const loop = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      if (isInView) draw(Math.min(delta, 0.1));
      animationFrameId = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(container);

    setCanvas();
    const resize = () => setCanvas();
    window.addEventListener("resize", resize);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [squareSize, gridGap, flickerChance, color, maxOpacity, isInView]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0", className)}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

function WordRotate({
  words,
  interval = 2400,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(t);
  }, [interval, words.length]);

  return (
    <span className={cn("inline-block relative align-baseline", className)}>
      <span className="invisible whitespace-nowrap">
        {words.reduce((longest, w) => (w.length > longest.length ? w : longest), "")}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "-60%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "60%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.2, 0.65, 0.3, 1] }}
          className="absolute inset-0 whitespace-nowrap"
          style={{ color: ROSE_DEEP }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Marquee({
  children,
  speed = 40,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className="flex shrink-0 items-center gap-10 pr-10"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {children}
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-10 pr-10"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

function Eyebrow({
  children,
  color = INK_SOFT,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        fontFamily: BODY,
        fontSize: "0.65rem",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color,
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}

function OpeningScene() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.18}
          maxOpacity={0.09}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, transparent 20%, rgba(248,247,244,0.92) 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-32 pt-32 sm:pb-40 sm:pt-40">
        <BlurFade delay={0.1} inViewMargin="-20px">
          <div
            className="flex items-center gap-3"
            style={{
              fontFamily: BODY,
              fontSize: "0.7rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: INK_SOFT,
              fontWeight: 600,
            }}
          >
            <span className="h-px w-8 bg-current opacity-60" />
            02 &middot; The Teardown
            <span
              className="relative flex h-2 w-2"
              style={{ marginLeft: 4 }}
            >
              <span
                className="absolute inset-0 animate-ping rounded-full"
                style={{ background: ROSE, opacity: 0.6 }}
              />
              <span
                className="relative h-2 w-2 rounded-full"
                style={{ background: ROSE }}
              />
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} inViewMargin="-20px">
          <h1
            className="mt-8 leading-[0.98] tracking-[-0.04em]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 600,
              color: INK,
            }}
          >
            You&rsquo;ve looked.
            <br />
            There are only two{" "}
            <WordRotate
              words={["options.", "paths.", "dead ends.", "traps."]}
              interval={2400}
            />
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} inViewMargin="-20px">
          <p
            className="mt-10 max-w-[620px]"
            style={{
              fontFamily: BODY,
              fontSize: "1.08rem",
              lineHeight: 1.65,
              color: INK_MUTED,
            }}
          >
            You know you need to post. You&rsquo;ve priced the alternatives. What
            nobody tells you is what&rsquo;s actually inside each one when you
            open the hood.
          </p>
        </BlurFade>

        <BlurFade delay={0.65} inViewMargin="-20px">
          <div
            className="mt-16 flex items-center gap-5"
            style={{
              fontFamily: BODY,
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: INK_FAINT,
              fontWeight: 500,
            }}
          >
            <span className="flex items-center gap-2">
              <span
                className="inline-block h-px w-6"
                style={{ background: INK_FAINT }}
              />
              Scroll for the evidence
            </span>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

function InvoiceLine({
  label,
  amount,
  delay,
  emphasis = false,
}: {
  label: string;
  amount: string;
  delay: number;
  emphasis?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay, ease: [0.2, 0.65, 0.3, 1] }}
      className="flex items-baseline justify-between gap-4 py-2.5"
      style={{
        borderBottom: `1px dashed ${HAIRLINE}`,
        fontFamily: BODY,
        fontSize: emphasis ? "0.95rem" : "0.88rem",
        color: emphasis ? INK : INK_MUTED,
        fontWeight: emphasis ? 600 : 400,
      }}
    >
      <span>{label}</span>
      <span
        className="tabular-nums"
        style={{
          fontFeatureSettings: '"tnum" 1, "lnum" 1',
        }}
      >
        {amount}
      </span>
    </motion.div>
  );
}

function InvoiceCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: "#ffffff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.04), 0 12px 40px -10px rgba(0,0,0,0.12)",
      }}
    >
      <BorderBeam
        size={110}
        duration={9}
        colorFrom={ROSE}
        colorTo="#f97316"
        delay={0.8}
      />

      <div
        className="flex items-center justify-between px-6 pt-6"
        style={{
          fontFamily: BODY,
          fontSize: "0.6rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: INK_SOFT,
          fontWeight: 600,
        }}
      >
        <span>Invoice &sect; no. 0924</span>
        <span>Monthly retainer</span>
      </div>

      <div className="px-6 pb-2 pt-4">
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "1.35rem",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: INK,
            fontWeight: 600,
          }}
        >
          Social media manager
        </p>
        <p
          className="mt-1"
          style={{
            fontFamily: BODY,
            fontSize: "0.82rem",
            color: INK_SOFT,
          }}
        >
          On-site visits. Handheld phone. Signed 12-month contract.
        </p>
      </div>

      <div
        className="mx-6 mt-3"
        style={{ borderTop: `1px solid ${HAIRLINE_HEAVY}` }}
      />

      <div className="px-6 pb-2 pt-3">
        <InvoiceLine
          label="Stand next to you"
          amount="$500"
          delay={0.0}
        />
        <InvoiceLine
          label={'Say "a little to the left"'}
          amount="$500"
          delay={0.12}
        />
        <InvoiceLine
          label="Press record. Press stop."
          amount="$500"
          delay={0.24}
        />
        <InvoiceLine
          label="Pack clips, drive home"
          amount="$500"
          delay={0.36}
        />
        <InvoiceLine
          label="Monthly subtotal"
          amount="$2,000"
          delay={0.5}
          emphasis
        />
      </div>

      <div
        className="mx-6"
        style={{ borderTop: `1px solid ${HAIRLINE_HEAVY}` }}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="flex items-end justify-between px-6 pt-5"
      >
        <div className="flex flex-col">
          <span
            style={{
              fontFamily: BODY,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: INK_SOFT,
              fontWeight: 600,
            }}
          >
            Annual total
          </span>
          <span
            style={{
              fontFamily: BODY,
              fontSize: "0.72rem",
              color: INK_FAINT,
              marginTop: 2,
            }}
          >
            2,000 &times; 12 months
          </span>
        </div>

        <div className="relative">
          <NumberTicker
            value={24000}
            startValue={2000}
            delay={0.9}
            className="tabular-nums"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2.6rem, 5vw, 3.4rem)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              color: INK,
              fontFeatureSettings: '"tnum" 1, "lnum" 1',
              display: "inline-block",
            }}
          />
          <span
            aria-hidden
            style={{
              position: "absolute",
              left: -18,
              top: 0,
              fontFamily: DISPLAY,
              fontSize: "clamp(2.6rem, 5vw, 3.4rem)",
              fontWeight: 500,
              color: INK_SOFT,
              letterSpacing: "-0.04em",
            }}
          >
            $
          </span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="px-6 pb-6 pt-3 text-right"
        style={{
          fontFamily: BODY,
          fontSize: "0.8rem",
          fontStyle: "italic",
          color: INK_MUTED,
        }}
      >
        &mdash; a year. For a phone-holder.
      </motion.p>
    </div>
  );
}

function ExhibitASection() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <BlurFade delay={0.1} inViewMargin="-80px">
          <div className="mb-16 flex items-baseline gap-6">
            <span
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.05em",
                lineHeight: 0.9,
                color: INK,
              }}
            >
              A.
            </span>
            <div className="flex flex-col">
              <Eyebrow color={ROSE_DEEP}>Exhibit A &mdash; Option 1</Eyebrow>
              <h2
                className="mt-2"
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: INK,
                }}
              >
                The $2,000/month manager.
              </h2>
            </div>
          </div>
        </BlurFade>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1">
            <BlurFade delay={0.2} inViewMargin="-80px">
              <p
                className="max-w-md"
                style={{
                  fontFamily: BODY,
                  fontSize: "1.04rem",
                  lineHeight: 1.75,
                  color: INK_MUTED,
                  marginBottom: 24,
                }}
              >
                They don&rsquo;t arrive with a movie camera. No production team.
                No studio. They show up with <strong style={{ color: INK }}>an iPhone &mdash; the same iPhone in your pocket right now</strong>.
              </p>
              <p
                className="max-w-md"
                style={{
                  fontFamily: BODY,
                  fontSize: "1.04rem",
                  lineHeight: 1.75,
                  color: INK_MUTED,
                  marginBottom: 24,
                }}
              >
                What are you paying them to do with it? Stand next to you.
                Tell you where to stand. Whether to shoot vertical or
                horizontal. Press record. Press stop. Pack up and leave.
              </p>
              <p
                className="max-w-md"
                style={{
                  fontFamily: BODY,
                  fontSize: "1.04rem",
                  lineHeight: 1.75,
                  color: INK,
                  fontWeight: 500,
                }}
              >
                Everything that requires actual thought happens later, on a
                laptop, without you.
              </p>
            </BlurFade>
          </div>

          <div className="order-1 lg:order-2">
            <BlurFade delay={0.4} inViewMargin="-80px" offset={14}>
              <InvoiceCard />
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}

type ToolFailure = {
  name: string;
  promise: string;
  reality: string;
  logo: string;
};

const TOOLS: ToolFailure[] = [
  {
    name: "Scheduler",
    promise: "Posts at the right time.",
    reality: "Doesn't decide what to schedule.",
    logo: "SCH",
  },
  {
    name: "Caption Generator",
    promise: "Writes captions for you.",
    reality: "Doesn't know who you're talking to.",
    logo: "CAP",
  },
  {
    name: "Image Generator",
    promise: "Creates on-brand visuals.",
    reality: "Produces plastic slop customers scroll past.",
    logo: "IMG",
  },
  {
    name: "AI Video Maker",
    promise: "Videos in one click.",
    reality: "Three-second scroll-past. Zero dwell time.",
    logo: "VID",
  },
];

function ToolCard({ tool, index }: { tool: ToolFailure; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <BlurFade delay={0.1 + index * 0.08} inViewMargin="-60px">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-full"
      >
        <MagicCard
          gradientSize={240}
          gradientColor={`rgba(236, 72, 153, ${hovered ? 0.18 : 0.1})`}
          gradientOpacity={1}
          className="h-full"
        >
          <div className="relative flex min-h-[220px] flex-col justify-between p-7">
            <div className="flex items-start justify-between">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{
                  background: INK,
                  color: "#fff",
                  fontFamily: BODY,
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                }}
              >
                {tool.logo}
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hovered ? 1 : 0,
                  scale: hovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.25 }}
                className="flex h-6 w-6 items-center justify-center rounded-full"
                style={{
                  background: ROSE,
                  color: "#fff",
                  fontFamily: BODY,
                  fontSize: "0.8rem",
                  fontWeight: 700,
                }}
                aria-hidden
              >
                &times;
              </motion.span>
            </div>

            <div>
              <div className="relative inline-block">
                <span
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: INK,
                  }}
                >
                  {tool.name}
                </span>
                <motion.span
                  aria-hidden
                  className="absolute inset-x-0 top-[58%] h-[2px]"
                  style={{ background: ROSE, transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hovered ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                />
              </div>

              <div className="relative mt-3 h-[60px] overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  {!hovered ? (
                    <motion.p
                      key="promise"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      className="absolute inset-0"
                      style={{
                        fontFamily: BODY,
                        fontSize: "0.88rem",
                        lineHeight: 1.55,
                        color: INK_SOFT,
                      }}
                    >
                      <em>Promise:</em> {tool.promise}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="reality"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      className="absolute inset-0"
                      style={{
                        fontFamily: BODY,
                        fontSize: "0.88rem",
                        lineHeight: 1.55,
                        color: ROSE_DEEP,
                        fontWeight: 500,
                      }}
                    >
                      <strong>Reality:</strong> {tool.reality}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </MagicCard>
      </div>
    </BlurFade>
  );
}

function ExhibitBSection() {
  const marqueeTools = [
    "Buffer",
    "Hootsuite",
    "Later",
    "SocialBee",
    "Jasper",
    "Copy.ai",
    "Canva",
    "Adobe Express",
    "Runway",
    "Pictory",
    "Synthesia",
    "FeedHive",
    "Typefully",
    "Sprout",
  ];

  return (
    <section className="relative border-t px-6 py-24 sm:py-32" style={{ borderColor: HAIRLINE }}>
      <div className="mx-auto max-w-6xl">
        <BlurFade delay={0.1} inViewMargin="-80px">
          <div className="mb-12 flex items-baseline gap-6">
            <span
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.05em",
                lineHeight: 0.9,
                color: INK,
              }}
            >
              B.
            </span>
            <div className="flex flex-col">
              <Eyebrow color={ROSE_DEEP}>Exhibit B &mdash; Option 2</Eyebrow>
              <h2
                className="mt-2"
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: INK,
                }}
              >
                The $30&ndash;150/month tool stack.
              </h2>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inViewMargin="-80px">
          <p
            className="mb-12 max-w-2xl"
            style={{
              fontFamily: BODY,
              fontSize: "1.04rem",
              lineHeight: 1.75,
              color: INK_MUTED,
            }}
          >
            None of this is marketing. Tools with auto-complete. A scheduler
            doesn&rsquo;t decide what to post. A caption tool doesn&rsquo;t
            know your audience. You end up doing all the thinking yourself.{" "}
            <strong style={{ color: INK }}>Hover each tool to see what it actually does.</strong>
          </p>
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2">
          {TOOLS.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>

        <BlurFade delay={0.55} inViewMargin="-60px">
          <div className="mt-20">
            <div
              className="mb-5 flex items-center gap-4"
              style={{
                fontFamily: BODY,
                fontSize: "0.66rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: INK_FAINT,
                fontWeight: 600,
              }}
            >
              <span className="h-px flex-1" style={{ background: HAIRLINE }} />
              What your customer scrolls past in 0.3 seconds
              <span className="h-px flex-1" style={{ background: HAIRLINE }} />
            </div>

            <div
              className="relative overflow-hidden rounded-xl"
              style={{
                background: "#fff",
                border: `1px solid ${HAIRLINE}`,
                maskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              }}
            >
              <Marquee speed={36} className="py-4">
                {marqueeTools.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center whitespace-nowrap"
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "1.35rem",
                      fontWeight: 500,
                      letterSpacing: "-0.015em",
                      color: INK_SOFT,
                    }}
                  >
                    {t}
                    <span
                      className="mx-5 inline-block h-1 w-1 rounded-full"
                      style={{ background: INK_FAINT }}
                    />
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

function PointerUnderline({ children }: { children: React.ReactNode }) {
  const id = useId();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <span
      ref={ref}
      className="relative inline-block whitespace-nowrap"
      style={{ color: INK }}
    >
      {children}
      <svg
        className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full"
        viewBox="0 0 100 14"
        preserveAspectRatio="none"
        aria-hidden
      >
        <title id={id}>underline</title>
        <motion.path
          d="M 2 10 Q 25 4 50 8 T 98 6"
          fill="none"
          stroke={ROSE}
          strokeWidth="2.4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            inView
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        />
      </svg>
    </span>
  );
}

function VerdictSection() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <BlurFade delay={0.1} inViewMargin="-100px">
          <div className="mb-10 inline-flex items-center gap-3">
            <span className="h-px w-10" style={{ background: HAIRLINE_HEAVY }} />
            <Eyebrow color={INK}>The finding</Eyebrow>
            <span className="h-px w-10" style={{ background: HAIRLINE_HEAVY }} />
          </div>
        </BlurFade>

        <BlurFade delay={0.25} inViewMargin="-100px">
          <p
            className="mb-8"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.5rem, 3vw, 2.3rem)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              lineHeight: 1.25,
              color: INK,
            }}
          >
            Option A is a{" "}
            <PointerUnderline>phone-holder</PointerUnderline>
            <br />
            with a twelve-month contract.
          </p>
        </BlurFade>

        <BlurFade delay={0.5} inViewMargin="-100px">
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.5rem, 3vw, 2.3rem)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              lineHeight: 1.25,
              color: INK,
            }}
          >
            Option B is a{" "}
            <PointerUnderline>blank page</PointerUnderline>
            <br />
            with auto-complete.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

function BridgeSection() {
  return (
    <section className="relative overflow-hidden border-t px-6 pb-32 pt-24" style={{ borderColor: HAIRLINE }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(236,72,153,0.12), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <BlurFade delay={0.1} inViewMargin="-80px">
          <div
            className="mx-auto mb-10 flex items-center justify-center gap-3"
          >
            <span
              className="h-px w-16"
              style={{ background: HAIRLINE_HEAVY }}
            />
            <Eyebrow color={ROSE_DEEP}>The opening</Eyebrow>
            <span
              className="h-px w-16"
              style={{ background: HAIRLINE_HEAVY }}
            />
          </div>
        </BlurFade>

        <BlurFade delay={0.25} inViewMargin="-80px">
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: INK,
            }}
          >
            That&rsquo;s the gap{" "}
            <span
              className="relative inline-block"
              style={{ color: ROSE_DEEP }}
            >
              Solara
              <motion.span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[3px]"
                style={{ background: ROSE, transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              />
            </span>{" "}
            was built for.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

export default function SectionTwoTeardownPreview() {
  const marqueeKeyframes = useMemo(
    () => `
      @keyframes marquee-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
      }
    `,
    [],
  );

  return (
    <main style={{ background: SHELL, color: INK }}>
      <style>{marqueeKeyframes}</style>

      <OpeningScene />
      <ExhibitASection />
      <ExhibitBSection />
      <VerdictSection />
      <BridgeSection />

      <footer
        className="border-t px-6 py-16 text-center"
        style={{ borderColor: HAIRLINE }}
      >
        <p
          style={{
            fontFamily: BODY,
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 600,
          }}
        >
          Section 2 &middot; The Teardown &middot; Preview
        </p>
        <p
          className="mx-auto mt-3 max-w-xl"
          style={{
            fontFamily: BODY,
            fontSize: "0.8rem",
            lineHeight: 1.65,
            color: INK_SOFT,
          }}
        >
          Flickering grid background &middot; Word rotate headline &middot;
          Animated invoice card with BorderBeam and NumberTicker counting to
          $24,000 &middot; Magic Card tool graveyard with hover strike-through
          and promise/reality swap &middot; Marquee of tool names &middot;
          Hand-drawn SVG underline on verdict key phrases &middot; Geist Sans
          throughout.
        </p>
      </footer>
    </main>
  );
}
