"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";

export const INK = "#0a0a0a";
export const INK_MUTED = "rgba(10,10,10,0.72)";
export const INK_SOFT = "rgba(10,10,10,0.55)";
export const INK_FAINT = "rgba(10,10,10,0.34)";
export const SHELL = "#f8f7f4";
export const ROSE = "#1e3a8a";
export const ROSE_DEEP = "#172554";
export const HAIRLINE = "rgba(10,10,10,0.1)";
export const HAIRLINE_HEAVY = "rgba(10,10,10,0.18)";

export const DISPLAY = "var(--font-display)";
export const BODY = "var(--font-body)";

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.18,
  color = "rgb(10,10,10)",
  maxOpacity = 0.09,
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let squares: Float32Array;
    let cols = 0;
    let rows = 0;

    const setup = () => {
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
          ctx.fillStyle = color
            .replace("rgb(", "rgba(")
            .replace(")", `,${squares[idx]})`);
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
      if (visible) draw(Math.min(delta, 0.1));
      raf = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(container);

    setup();
    const resize = () => setup();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [squareSize, gridGap, flickerChance, color, maxOpacity, visible]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0", className)}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

export function WordRotate({
  words,
  interval = 2400,
  className,
  color = ROSE_DEEP,
}: {
  words: string[];
  interval?: number;
  className?: string;
  color?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(t);
  }, [interval, words.length]);

  const longest = words.reduce(
    (a, b) => (b.length > a.length ? b : a),
    "",
  );

  return (
    <span className={cn("inline-block relative align-baseline", className)}>
      <span className="invisible whitespace-nowrap">{longest}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "-55%", opacity: 0, filter: "blur(5px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "55%", opacity: 0, filter: "blur(5px)" }}
          transition={{ duration: 0.52, ease: [0.2, 0.65, 0.3, 1] }}
          className="absolute inset-0 whitespace-nowrap"
          style={{ color }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Eyebrow({
  children,
  color = INK_SOFT,
  className,
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{
        fontFamily: BODY,
        fontSize: "0.62rem",
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

export function ScrollReveal({
  children,
  delay = 0,
  offset = 16,
  duration = 0.5,
  margin = "-10%",
  once = true,
  className,
}: {
  children: ReactNode;
  delay?: number;
  offset?: number;
  duration?: number;
  margin?: string;
  once?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: margin as never }}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollWords({
  text,
  className,
  style,
  stagger = 0.06,
  margin = "-15%",
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  margin?: string;
}) {
  const words = useMemo(() => text.split(" "), [text]);
  return (
    <span className={className} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: margin as never }}
          transition={{
            duration: 0.45,
            delay: i * stagger,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="inline-block"
          style={{ marginRight: "0.28em" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export function SectionHeadline({
  eyebrow,
  rotatingWords,
  subcopy,
  compact = false,
}: {
  eyebrow: string;
  rotatingWords: string[];
  subcopy?: string;
  compact?: boolean;
}) {
  return (
    <header className="relative">
      <ScrollReveal>
        <div
          className="inline-flex items-center gap-3"
          style={{
            fontFamily: BODY,
            fontSize: "0.66rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: INK_SOFT,
            fontWeight: 600,
          }}
        >
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
          <span className="relative flex h-2 w-2">
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
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <h1
          className={cn(
            "mt-5 leading-[0.98] tracking-[-0.04em]",
            compact
              ? "text-[clamp(2.2rem,5.2vw,3.8rem)]"
              : "text-[clamp(2.6rem,6.4vw,4.6rem)]",
          )}
          style={{
            fontFamily: DISPLAY,
            fontWeight: 600,
            color: INK,
          }}
        >
          You&rsquo;ve looked. There are only two{" "}
          <WordRotate words={rotatingWords} interval={2400} />
        </h1>
      </ScrollReveal>

      {subcopy && (
        <ScrollReveal delay={0.18}>
          <p
            className="mt-5 max-w-[580px]"
            style={{
              fontFamily: BODY,
              fontSize: "1rem",
              lineHeight: 1.6,
              color: INK_MUTED,
            }}
          >
            {subcopy}
          </p>
        </ScrollReveal>
      )}
    </header>
  );
}

function InvoiceLineScroll({
  label,
  amount,
  progress,
  triggerStart,
  triggerEnd,
  emphasis = false,
  large = false,
  staticLine = false,
}: {
  label: string;
  amount: string;
  progress: MotionValue<number>;
  triggerStart: number;
  triggerEnd: number;
  emphasis?: boolean;
  large?: boolean;
  staticLine?: boolean;
}) {
  const opacity = useTransform(
    progress,
    [triggerStart, triggerEnd],
    [0, 1],
  );
  const x = useTransform(progress, [triggerStart, triggerEnd], [-12, 0]);

  const labelSize = large
    ? emphasis
      ? "1.05rem"
      : "0.98rem"
    : emphasis
      ? "0.92rem"
      : "0.84rem";
  const amountSize = large
    ? emphasis
      ? "1.08rem"
      : "1rem"
    : emphasis
      ? "0.95rem"
      : "0.86rem";

  const motionStyle = staticLine ? undefined : { opacity, x };

  return (
    <motion.div
      style={motionStyle}
      className="flex items-baseline justify-between gap-4 py-2.5"
    >
      <span
        style={{
          fontFamily: BODY,
          fontSize: labelSize,
          color: emphasis ? INK : INK_MUTED,
          fontWeight: emphasis ? 600 : 400,
          borderBottom: emphasis ? "none" : `1px dashed ${HAIRLINE}`,
          flex: "1 1 auto",
          paddingBottom: emphasis ? 0 : 2,
        }}
      >
        {label}
      </span>
      <span
        className="tabular-nums"
        style={{
          fontFamily: BODY,
          fontSize: amountSize,
          color: emphasis ? INK : INK_MUTED,
          fontWeight: emphasis ? 600 : 500,
          fontFeatureSettings: '"tnum" 1, "lnum" 1',
          borderBottom: emphasis ? "none" : `1px dashed ${HAIRLINE}`,
          paddingBottom: emphasis ? 0 : 2,
        }}
      >
        {amount}
      </span>
    </motion.div>
  );
}

export function InvoiceCard({
  compact = false,
  noBeam = false,
  large = false,
  staticLines = false,
}: {
  compact?: boolean;
  noBeam?: boolean;
  large?: boolean;
  staticLines?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 30%"],
  });

  const scrollOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const scrollY = useTransform(scrollYProgress, [0.55, 0.75], [8, 0]);
  const totalOpacity = staticLines ? 1 : scrollOpacity;
  const totalY = staticLines ? 0 : scrollY;

  const titleSize = large
    ? "1.55rem"
    : compact
      ? "1.15rem"
      : "1.25rem";
  const subtitleSize = large ? "0.92rem" : "0.75rem";
  const topStripSize = large ? "0.66rem" : "0.56rem";
  const padX = large ? "px-6" : "px-5";
  const mx = large ? "mx-6" : "mx-5";

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: "#ffffff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.04), 0 14px 40px -12px rgba(0,0,0,0.12)",
      }}
    >
      {!noBeam && (
        <BorderBeam
          size={90}
          duration={8}
          colorFrom={ROSE}
          colorTo="#f97316"
          delay={0.4}
        />
      )}

      <div
        className={cn("flex items-center justify-between pt-5", padX)}
        style={{
          fontFamily: BODY,
          fontSize: topStripSize,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: INK_SOFT,
          fontWeight: 600,
        }}
      >
        <span>Invoice &sect; no. 0924</span>
        <span>Monthly retainer</span>
      </div>

      <div className={cn("pb-2 pt-3", padX)}>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: titleSize,
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
            fontSize: subtitleSize,
            color: INK_SOFT,
            lineHeight: 1.45,
          }}
        >
          On-site visits. Handheld phone. One iPhone.
        </p>
      </div>

      <div
        className={cn("mt-2", mx)}
        style={{ borderTop: `1px solid ${HAIRLINE_HEAVY}` }}
      />

      <div className={cn("pb-2 pt-3", padX)}>
        <InvoiceLineScroll
          label="Stand next to you"
          amount="$500"
          progress={scrollYProgress}
          triggerStart={0.1}
          triggerEnd={0.2}
          large={large}
          staticLine={staticLines}
        />
        <InvoiceLineScroll
          label={'Say "a little to the left"'}
          amount="$500"
          progress={scrollYProgress}
          triggerStart={0.18}
          triggerEnd={0.28}
          large={large}
          staticLine={staticLines}
        />
        <InvoiceLineScroll
          label="Press record. Press stop."
          amount="$500"
          progress={scrollYProgress}
          triggerStart={0.26}
          triggerEnd={0.36}
          large={large}
          staticLine={staticLines}
        />
        <InvoiceLineScroll
          label="Pack clips, drive home"
          amount="$500"
          progress={scrollYProgress}
          triggerStart={0.34}
          triggerEnd={0.44}
          large={large}
          staticLine={staticLines}
        />
        <InvoiceLineScroll
          label="Monthly subtotal"
          amount="$2,000"
          progress={scrollYProgress}
          triggerStart={0.44}
          triggerEnd={0.55}
          emphasis
          large={large}
          staticLine={staticLines}
        />
      </div>

      {(() => {
        const annualLabelSize = large ? "0.7rem" : "0.58rem";
        const monthsSize = large ? "0.82rem" : "0.68rem";
        const tickerSize = large
          ? "clamp(2.8rem, 5.5vw, 4rem)"
          : compact
            ? "clamp(2rem, 4vw, 2.6rem)"
            : "clamp(2.3rem, 4.5vw, 3rem)";
        const dollarOffset = large ? -38 : compact ? -18 : -22;

        return (
          <>
            <div
              className={cn("mt-1", mx)}
              style={{ borderTop: `1px solid ${HAIRLINE_HEAVY}` }}
            />

            <motion.div
              style={{ opacity: totalOpacity, y: totalY }}
              className={cn(
                "flex items-end justify-between pt-4",
                padX,
              )}
            >
              <div className="flex flex-col">
                <span
                  style={{
                    fontFamily: BODY,
                    fontSize: annualLabelSize,
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
                    fontSize: monthsSize,
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
                  delay={0.2}
                  className="tabular-nums"
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: tickerSize,
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
                    left: dollarOffset,
                    top: 0,
                    fontFamily: DISPLAY,
                    fontSize: tickerSize,
                    fontWeight: 500,
                    color: INK_SOFT,
                    letterSpacing: "-0.04em",
                  }}
                >
                  $
                </span>
              </div>
            </motion.div>
          </>
        );
      })()}

      <motion.p
        style={{
          opacity: totalOpacity,
          fontFamily: BODY,
          fontSize: large ? "0.88rem" : "0.76rem",
          fontStyle: "italic",
          color: INK_MUTED,
        }}
        className={cn("pb-5 pt-2 text-right", padX)}
      >
        &mdash; a year. For a phone-holder.
      </motion.p>
    </div>
  );
}

export type ToolFailure = {
  name: string;
  promise: string;
  reality: string;
  logo: string;
};

export const TOOLS: ToolFailure[] = [
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
    reality: "Plastic slop customers scroll past.",
    logo: "IMG",
  },
  {
    name: "AI Video Maker",
    promise: "Videos in one click.",
    reality: "Three-second scroll-past. Zero dwell.",
    logo: "VID",
  },
];

export function ToolCard({
  tool,
  index,
  compact = false,
  large = false,
}: {
  tool: ToolFailure;
  index: number;
  compact?: boolean;
  large?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const minHeight = large
    ? "min-h-[230px]"
    : compact
      ? "min-h-[170px]"
      : "min-h-[200px]";
  const padding = large ? "p-6" : "p-5";
  const logoBox = large ? "h-11 w-11" : "h-9 w-9";
  const logoSize = large ? "0.68rem" : "0.58rem";
  const nameSize = large ? "1.4rem" : compact ? "1.08rem" : "1.2rem";
  const promiseSize = large ? "0.92rem" : "0.8rem";
  const promiseHeight = large ? "h-[54px]" : "h-[48px]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={
        inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 14, scale: 0.98 }
      }
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-full"
    >
      <MagicCard
        gradientSize={220}
        gradientColor={`rgba(30, 58, 138, ${hovered ? 0.14 : 0.07})`}
        gradientOpacity={1}
        className="h-full"
      >
        <div
          className={cn(
            "relative flex flex-col justify-between",
            padding,
            minHeight,
          )}
        >
          <div className="flex items-start justify-between">
            <div
              className={cn(
                "flex items-center justify-center rounded-md",
                logoBox,
              )}
              style={{
                background: INK,
                color: "#fff",
                fontFamily: BODY,
                fontSize: logoSize,
                fontWeight: 700,
                letterSpacing: "0.14em",
              }}
            >
              {tool.logo}
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: hovered ? 1 : 0,
                scale: hovered ? 1 : 0.7,
              }}
              transition={{ duration: 0.22 }}
              className={cn(
                "flex items-center justify-center rounded-full",
                large ? "h-6 w-6" : "h-5 w-5",
              )}
              style={{
                background: ROSE,
                color: "#fff",
                fontFamily: BODY,
                fontSize: large ? "0.9rem" : "0.75rem",
                fontWeight: 700,
                lineHeight: 1,
              }}
              aria-hidden
            >
              &times;
            </motion.span>
          </div>

          <div className="mt-3">
            <div className="relative inline-block">
              <span
                style={{
                  fontFamily: DISPLAY,
                  fontSize: nameSize,
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
                transition={{
                  duration: 0.35,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              />
            </div>

            <div
              className={cn(
                "relative mt-2 overflow-hidden",
                promiseHeight,
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                {!hovered ? (
                  <motion.p
                    key="promise"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                    style={{
                      fontFamily: BODY,
                      fontSize: promiseSize,
                      lineHeight: 1.45,
                      color: INK_SOFT,
                    }}
                  >
                    <em>Promise:</em> {tool.promise}
                  </motion.p>
                ) : (
                  <motion.p
                    key="reality"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                    style={{
                      fontFamily: BODY,
                      fontSize: promiseSize,
                      lineHeight: 1.45,
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
    </motion.div>
  );
}

export function ToolsGrid({
  compact = false,
  large = false,
  columns = 2,
}: {
  compact?: boolean;
  large?: boolean;
  columns?: 1 | 2 | 4;
}) {
  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 4
        ? "grid-cols-2 md:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={cn("grid gap-3", gridCols)}>
      {TOOLS.map((tool, i) => (
        <ToolCard
          key={tool.name}
          tool={tool}
          index={i}
          compact={compact}
          large={large}
        />
      ))}
    </div>
  );
}

export function Marquee({
  children,
  speed = 40,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className="flex shrink-0 items-center gap-8 pr-8"
        style={{
          animation: `teardown-marquee ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {children}
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-8 pr-8"
        style={{
          animation: `teardown-marquee ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export function MarqueeKeyframes() {
  return (
    <style>{`
      @keyframes teardown-marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
      }
    `}</style>
  );
}

const MARQUEE_TOOLS = [
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
  "Typefully",
  "FeedHive",
  "Sprout",
];

export function ToolsMarquee({ label = true }: { label?: boolean }) {
  return (
    <div>
      {label && (
        <div
          className="mb-4 flex items-center gap-3"
          style={{
            fontFamily: BODY,
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 600,
          }}
        >
          <span
            className="h-px flex-1"
            style={{ background: HAIRLINE }}
          />
          What your customer scrolls past in 0.3 seconds
          <span
            className="h-px flex-1"
            style={{ background: HAIRLINE }}
          />
        </div>
      )}
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
        <Marquee speed={36} className="py-3">
          {MARQUEE_TOOLS.map((t) => (
            <span
              key={t}
              className="inline-flex items-center whitespace-nowrap"
              style={{
                fontFamily: DISPLAY,
                fontSize: "1.15rem",
                fontWeight: 500,
                letterSpacing: "-0.015em",
                color: INK_SOFT,
              }}
            >
              {t}
              <span
                className="mx-4 inline-block h-[3px] w-[3px] rounded-full"
                style={{ background: INK_FAINT }}
              />
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export function PointerUnderline({
  children,
  delay = 0.2,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const id = useId();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

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
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            inView
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            duration: 0.85,
            delay,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        />
      </svg>
    </span>
  );
}

export function Verdict({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="text-center">
      <ScrollReveal>
        <div className="mb-6 inline-flex items-center gap-3">
          <span
            className="h-px w-8"
            style={{ background: HAIRLINE_HEAVY }}
          />
          <Eyebrow color={INK}>The finding</Eyebrow>
          <span
            className="h-px w-8"
            style={{ background: HAIRLINE_HEAVY }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p
          className="mb-4"
          style={{
            fontFamily: DISPLAY,
            fontSize: compact
              ? "clamp(1.25rem, 2.5vw, 1.7rem)"
              : "clamp(1.4rem, 2.8vw, 2rem)",
            fontWeight: 500,
            letterSpacing: "-0.025em",
            lineHeight: 1.25,
            color: INK,
          }}
        >
          Option A is a <PointerUnderline>phone-holder</PointerUnderline> with
          a twelve-month contract.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: compact
              ? "clamp(1.25rem, 2.5vw, 1.7rem)"
              : "clamp(1.4rem, 2.8vw, 2rem)",
            fontWeight: 500,
            letterSpacing: "-0.025em",
            lineHeight: 1.25,
            color: INK,
          }}
        >
          Option B is a <PointerUnderline delay={0.5}>blank page</PointerUnderline>{" "}
          with auto-complete.
        </p>
      </ScrollReveal>
    </div>
  );
}

export function Bridge({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 50% 100%, rgba(30,58,138,0.1), transparent 70%)",
        }}
      />

      <ScrollReveal>
        <div className="mb-6 inline-flex items-center gap-3">
          <span
            className="h-px w-10"
            style={{ background: HAIRLINE_HEAVY }}
          />
          <Eyebrow color={ROSE_DEEP}>The opening</Eyebrow>
          <span
            className="h-px w-10"
            style={{ background: HAIRLINE_HEAVY }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.12}>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: compact
              ? "clamp(1.6rem, 3.6vw, 2.6rem)"
              : "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 600,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
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
              viewport={{ once: true, margin: "-20%" }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            />
          </span>{" "}
          was built for.
        </p>
      </ScrollReveal>
    </div>
  );
}

export function PreviewFooter({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <footer
      className="border-t px-6 py-10 text-center"
      style={{ borderColor: HAIRLINE }}
    >
      <p
        style={{
          fontFamily: BODY,
          fontSize: "0.58rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 600,
        }}
      >
        {label}
      </p>
      <p
        className="mx-auto mt-2 max-w-xl"
        style={{
          fontFamily: BODY,
          fontSize: "0.76rem",
          lineHeight: 1.6,
          color: INK_SOFT,
        }}
      >
        {description}
      </p>
    </footer>
  );
}

export type SpanProps = ComponentPropsWithoutRef<"span">;
