"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  MessageCircle,
  Search,
  Send,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FacebookStory } from "@/components/social-previews/facebook-preview";
import { InstagramReel } from "@/components/social-previews/instagram-preview";
import { TikTokVideo } from "@/components/social-previews/tiktok-preview";
import {
  BODY,
  DISPLAY,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_MUTED,
  PreviewFooter,
  ROSE_DEEP,
  SHELL,
} from "@/components/homepage/teardown-parts";
import { PhoneFrame } from "@/components/homepage/WebAppMockup";

type PlatformId =
  | "instagram"
  | "tiktok"
  | "facebook"
  | "youtube"
  | "google";

type PlatformSlide = {
  id: PlatformId;
  number: number;
  label: string;
  title: string;
  caption: string;
  publishedAt: string;
  metrics: string;
  image: string;
  username: string;
};

const SLIDES: PlatformSlide[] = [
  {
    id: "instagram",
    number: 1,
    label: "Instagram Reel",
    title: "Reel · 25 seconds",
    caption: "Family pizza · Hand-stretched · Open till 10",
    publishedAt: "Tuesday at 5:47 PM",
    metrics: "Vertical · 9:16 · burned-in captions",
    image: "/storyboard/scenes/scene-3.webp",
    username: "your.pizza.shop",
  },
  {
    id: "tiktok",
    number: 2,
    label: "TikTok",
    title: "TikTok · 25 seconds",
    caption: "POV: family pizza, hand-stretched, since 1987",
    publishedAt: "Tuesday at 5:47 PM",
    metrics: "Vertical · 9:16 · trending sound auto-matched",
    image: "/storyboard/scenes/scene-1.webp",
    username: "your.pizza.shop",
  },
  {
    id: "facebook",
    number: 3,
    label: "Facebook Story",
    title: "Story · 15 seconds",
    caption: "Tonight's pies. Open till 10.",
    publishedAt: "Tuesday at 5:47 PM",
    metrics: "Vertical · 9:16 · auto-expires after 24h",
    image: "/storyboard/scenes/scene-dough.png",
    username: "your.pizza.shop",
  },
  {
    id: "youtube",
    number: 4,
    label: "YouTube Shorts",
    title: "Short · 25 seconds",
    caption: "How we make our pizza · est. 1987",
    publishedAt: "Tuesday at 5:47 PM",
    metrics: "Vertical · 9:16 · SEO title + description auto-written",
    image: "/storyboard/scenes/scene-2.webp",
    username: "@yourpizzashop",
  },
  {
    id: "google",
    number: 5,
    label: "Google Business",
    title: "Local post · 7-day boost",
    caption: "Tonight's specials → handcrafted pies, $14",
    publishedAt: "Tuesday at 5:47 PM",
    metrics: "Square · 1:1 · auto-adds business hours + map link",
    image: "/storyboard/scenes/scene-3.webp",
    username: "Your Pizza Shop · 4.8 ★",
  },
];

const INDUSTRIES = [
  "Pizza shops",
  "Restaurants",
  "Cafés",
  "Bakeries",
  "Food trucks",
  "Coffee shops",
  "Salons",
  "Barbershops",
  "Nail studios",
  "Spa & massage",
  "Gyms",
  "Yoga studios",
  "Pilates studios",
  "Dance studios",
  "Dental practices",
  "Vet clinics",
  "Chiropractors",
  "Optometrists",
  "Plumbers",
  "Electricians",
  "Roofers",
  "HVAC",
  "Mechanics",
  "Landscapers",
  "Cleaning services",
  "Lawyers",
  "Accountants",
  "Real estate agents",
  "Insurance brokers",
  "Photographers",
  "Tutors",
  "Boutiques",
  "Florists",
  "Pet groomers",
  "Tattoo artists",
  "Bookstores",
];

function MarqueeKeys() {
  return (
    <style>{`
      @keyframes industryMarqueeRight {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-50% - 0.75rem)); }
      }
      @keyframes industryMarqueeLeft {
        from { transform: translateX(calc(-50% - 0.75rem)); }
        to { transform: translateX(0); }
      }
    `}</style>
  );
}

const PLATFORM_LOGOS: Record<PlatformId, string> = {
  instagram: "/logos/platforms/instagram.svg",
  tiktok: "/logos/platforms/tiktok.svg",
  facebook: "/logos/platforms/facebook.png",
  youtube: "/logos/platforms/youtube.svg",
  google: "/logos/platforms/google-business.svg",
};

function PlatformLogo({
  id,
  size = 18,
  className,
}: {
  id: PlatformId;
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={PLATFORM_LOGOS[id]}
      alt=""
      aria-hidden
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        flexShrink: 0,
      }}
      draggable={false}
    />
  );
}

function YouTubeShortsPreview({ slide }: { slide: PlatformSlide }) {
  const sidebarMetrics = [
    { Icon: ThumbsUp, label: "8.4K", filled: true },
    { Icon: ThumbsDown, label: "" },
    { Icon: MessageCircle, label: "412" },
    { Icon: Send, label: "Share" },
  ];

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: "#000" }}
    >
      <img
        src={slide.image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      <div
        className="absolute z-20 flex items-center gap-1.5 px-3"
        style={{ left: 0, top: 12, color: "#fff" }}
      >
        <PlatformLogo id="youtube" size={20} />
        <span
          style={{
            fontFamily: DISPLAY,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Shorts
        </span>
      </div>

      <div
        className="absolute z-20 flex flex-col items-center"
        style={{ right: 12, bottom: 100, gap: 18, color: "#fff" }}
      >
        <div
          className="rounded-full border-2 border-white"
          style={{
            width: 32,
            height: 32,
            background: "rgba(255,255,255,0.2)",
          }}
        />
        {sidebarMetrics.map((m) => (
          <div
            key={m.label || m.Icon.displayName}
            className="flex flex-col items-center gap-0.5"
          >
            <m.Icon
              size={22}
              strokeWidth={1.8}
              fill={m.filled ? "#fff" : "none"}
            />
            {m.label && (
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: 10,
                  fontWeight: 600,
                  opacity: 0.95,
                  lineHeight: 1,
                }}
              >
                {m.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 px-4 pb-5 text-white"
        style={{
          background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
          paddingTop: 40,
          paddingRight: 80,
        }}
      >
        <p
          style={{
            fontFamily: BODY,
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {slide.username}
        </p>
        <p
          className="mt-1"
          style={{
            fontFamily: BODY,
            fontSize: 12,
            lineHeight: 1.35,
            opacity: 0.95,
          }}
        >
          {slide.caption}
        </p>
      </div>
    </div>
  );
}

function GoogleBusinessPreview({ slide }: { slide: PlatformSlide }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden bg-white"
      style={{ paddingTop: "14%" }}
    >
      <div
        className="flex items-center gap-2 border-b px-3 py-3"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <img
          src="/logos/platforms/google.svg"
          alt=""
          aria-hidden
          style={{ width: 20, height: 20, objectFit: "contain" }}
          draggable={false}
        />
        <div
          className="flex flex-1 items-center gap-2 rounded-full px-3 py-1.5"
          style={{ background: "rgba(0,0,0,0.06)" }}
        >
          <Search size={12} strokeWidth={2.4} style={{ color: INK_MUTED }} />
          <span
            style={{
              fontFamily: BODY,
              fontSize: 11,
              color: INK_MUTED,
            }}
          >
            pizza near me
          </span>
        </div>
      </div>

      <div className="relative" style={{ height: "32%" }}>
        <img
          src={slide.image}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        <div
          className="absolute z-10 flex items-center gap-1 rounded-md px-2 py-1"
          style={{
            left: 10,
            bottom: 10,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            color: "#fff",
          }}
        >
          <MapPin size={10} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: BODY,
              fontSize: 10,
              fontWeight: 600,
            }}
          >
            0.4 mi · Open
          </span>
        </div>
      </div>

      <div className="px-4 pt-4">
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: 16,
            fontWeight: 700,
            color: INK,
            letterSpacing: "-0.015em",
            lineHeight: 1.2,
          }}
        >
          Your Pizza Shop
        </p>
        <p
          className="mt-1.5 flex items-center gap-1.5"
          style={{
            fontFamily: BODY,
            fontSize: 12,
            color: INK_MUTED,
          }}
        >
          <span style={{ color: "#f59e0b", fontWeight: 700 }}>4.8 ★</span>
          <span>(1,247)</span>
          <span>·</span>
          <span>Italian · $$</span>
        </p>

        <div
          className="mt-4 rounded-lg p-3"
          style={{
            background: "rgba(66,133,244,0.06)",
            border: "1px solid rgba(66,133,244,0.18)",
          }}
        >
          <p
            className="mb-1.5 inline-flex items-center"
            style={{
              fontFamily: BODY,
              fontSize: 9,
              fontWeight: 700,
              color: "#1a73e8",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            New post · 2h ago
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: 12,
              fontWeight: 500,
              color: INK,
              lineHeight: 1.4,
            }}
          >
            {slide.caption}
          </p>
        </div>

        <div
          className="mt-4 flex gap-2"
          style={{ fontFamily: BODY, fontSize: 11 }}
        >
          <button
            type="button"
            className="flex-1 rounded-full py-2 text-white"
            style={{ background: "#1a73e8", fontWeight: 600 }}
          >
            Directions
          </button>
          <button
            type="button"
            className="flex-1 rounded-full py-2"
            style={{
              border: "1px solid rgba(0,0,0,0.18)",
              color: INK,
              fontWeight: 600,
            }}
          >
            Call
          </button>
        </div>
      </div>
    </div>
  );
}

function PlatformPreview({
  slide,
  width,
}: {
  slide: PlatformSlide;
  width: number;
}) {
  let inner: React.ReactNode;
  if (slide.id === "instagram") {
    inner = (
      <InstagramReel
        username={slide.username}
        caption={slide.caption}
        mediaUrl={slide.image}
        audioTitle="Original audio · your.pizza.shop"
      />
    );
  } else if (slide.id === "tiktok") {
    inner = (
      <TikTokVideo
        username={slide.username}
        caption={slide.caption}
        mediaUrl={slide.image}
        audioTitle="Trending · #pizzeria"
      />
    );
  } else if (slide.id === "facebook") {
    inner = (
      <FacebookStory
        username={slide.username}
        mediaUrl={slide.image}
        timestamp="2h"
        storyCount={5}
        currentStory={3}
      />
    );
  } else if (slide.id === "youtube") {
    inner = <YouTubeShortsPreview slide={slide} />;
  } else {
    inner = <GoogleBusinessPreview slide={slide} />;
  }

  return <PhoneFrame width={width}>{inner}</PhoneFrame>;
}

function MobileSlideCard({ slide }: { slide: PlatformSlide }) {
  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-3xl"
      style={{
        background: "#ffffff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        padding: 24,
        minHeight: 740,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PlatformLogo id={slide.id} size={18} />
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: INK_MUTED,
              fontWeight: 600,
            }}
          >
            {slide.label}
          </p>
        </div>
        <span
          style={{
            fontFamily: BODY,
            fontSize: "0.7rem",
            color: INK_FAINT,
            fontWeight: 600,
          }}
        >
          {slide.publishedAt}
        </span>
      </div>

      <h3
        className="mt-4"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.5rem, 5.5vw, 1.85rem)",
          fontWeight: 700,
          color: INK,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
        }}
      >
        {slide.title}
      </h3>

      <div className="relative mx-auto mt-6" style={{ width: 280 }}>
        <PlatformPreview slide={slide} width={280} />
        <span
          className="absolute -right-2 -top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full"
          style={{
            background: "#fff",
            color: INK,
            fontFamily: BODY,
            fontSize: "0.92rem",
            fontWeight: 700,
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06)",
          }}
        >
          {slide.number}
        </span>
      </div>

      <p
        className="mt-6 border-l-2 pl-4"
        style={{
          borderColor: ROSE_DEEP,
          fontFamily: BODY,
          fontSize: "0.86rem",
          color: INK,
          lineHeight: 1.5,
          fontWeight: 500,
        }}
      >
        {slide.metrics}
      </p>
    </div>
  );
}

const STEP_DURATION_MS = 6500;
const TICK_MS = 60;

function MobileSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const total = SLIDES.length;

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (TICK_MS / STEP_DURATION_MS) * 100;
        if (next >= 100) {
          setActiveIndex((curr) => (curr + 1) % total);
          return 0;
        }
        return next;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [total]);

  const goTo = (i: number) => {
    const wrapped = ((i % total) + total) % total;
    setActiveIndex(wrapped);
    setProgress(0);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-3 flex items-baseline justify-between">
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "1.06rem",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.02em",
          }}
        >
          Same shoot. Every platform.
        </p>
        <p
          style={{
            fontFamily: BODY,
            fontSize: "0.78rem",
            color: INK_FAINT,
            fontWeight: 600,
            letterSpacing: "0.04em",
          }}
        >
          {activeIndex + 1}{" "}
          <span style={{ color: INK_FAINT }}>/ {total}</span>
        </p>
      </div>

      <div
        className="mb-7 h-px w-full overflow-hidden"
        style={{ background: HAIRLINE_HEAVY }}
      >
        <div
          key={activeIndex}
          className="h-full"
          style={{
            width: `${progress}%`,
            background: INK,
            transition: "width 80ms linear",
          }}
        />
      </div>

      <div className="relative mb-7">
        <MobileSlideCard slide={SLIDES[activeIndex]} />
      </div>

      <div className="mb-6 flex justify-center gap-2.5">
        {Array.from({ length: total }).map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-colors duration-300"
              style={{
                width: 8,
                height: 8,
                background: isActive ? "#9c9c9c" : "#dcd8cd",
              }}
            />
          );
        })}
      </div>

      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full transition-colors"
          style={{
            background: "#ebe6d6",
            color: INK,
          }}
        >
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full transition-colors"
          style={{
            background: "#ebe6d6",
            color: INK,
          }}
        >
          <ArrowRight size={17} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function DesktopRow({
  slide,
  index,
}: {
  slide: PlatformSlide;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1],
        delay: index * 0.06,
      }}
      className="grid items-start gap-x-10 border-t py-10 lg:grid-cols-12"
      style={{ borderColor: HAIRLINE }}
    >
      <div className="lg:col-span-1">
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2.4rem, 4.4vw, 3.4rem)",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.045em",
            lineHeight: 0.85,
          }}
        >
          {slide.number}
        </p>
      </div>

      <div className="lg:col-span-7">
        <div className="mb-3 flex items-center gap-2">
          <PlatformLogo id={slide.id} size={16} />
          <p
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: INK_FAINT,
              fontWeight: 700,
            }}
          >
            {slide.label}
          </p>
        </div>

        <p
          className="mb-4"
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.022em",
            lineHeight: 1.25,
            maxWidth: "32ch",
          }}
        >
          {slide.title}
        </p>

        <p
          className="mb-3"
          style={{
            fontFamily: BODY,
            fontSize: 14,
            color: INK_MUTED,
            lineHeight: 1.55,
            maxWidth: "44ch",
          }}
        >
          &ldquo;{slide.caption}&rdquo;
        </p>

        <p
          style={{
            fontFamily: BODY,
            fontSize: 13,
            color: INK_FAINT,
            fontWeight: 500,
          }}
        >
          {slide.metrics} &middot; published {slide.publishedAt.toLowerCase()}
        </p>
      </div>

      <div className="flex justify-center lg:col-span-4 lg:justify-end">
        <PlatformPreview slide={slide} width={250} />
      </div>
    </motion.div>
  );
}

function DesktopList() {
  return (
    <div
      className="border-b"
      style={{ borderColor: HAIRLINE }}
    >
      {SLIDES.map((slide, i) => (
        <DesktopRow key={slide.id} slide={slide} index={i} />
      ))}
    </div>
  );
}

function IndustryPill({ name }: { name: string }) {
  return (
    <span
      className="inline-flex shrink-0 items-center rounded-full"
      style={{
        background: "#fff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        padding: "8px 16px",
        fontFamily: BODY,
        fontSize: "0.86rem",
        fontWeight: 500,
        color: INK,
        letterSpacing: "-0.005em",
        whiteSpace: "nowrap",
      }}
    >
      {name}
    </span>
  );
}

function IndustryMarquee() {
  const top = INDUSTRIES.slice(0, 18);
  const bottom = INDUSTRIES.slice(18);

  return (
    <div className="space-y-3 sm:space-y-4">
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className="flex items-center gap-3"
          style={{
            width: "max-content",
            animation: "industryMarqueeRight 60s linear infinite",
          }}
        >
          {[...top, ...top].map((name, i) => (
            <IndustryPill key={`top-${i}`} name={name} />
          ))}
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className="flex items-center gap-3"
          style={{
            width: "max-content",
            animation: "industryMarqueeLeft 65s linear infinite",
          }}
        >
          {[...bottom, ...bottom].map((name, i) => (
            <IndustryPill key={`bottom-${i}`} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SectionThreeShowcasePreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <MarqueeKeys />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pt-24 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
          <p
            className="mb-8"
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: ROSE_DEEP,
            }}
          >
            03 &middot; The showcase
          </p>

          <h2
            className="leading-[0.96] tracking-[-0.04em]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2.2rem, 6vw, 4.4rem)",
              fontWeight: 700,
              color: INK,
              maxWidth: "20ch",
            }}
          >
            One shoot.{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: ROSE_DEEP,
              }}
            >
              Every platform your customer uses.
            </span>
          </h2>

          <p
            className="mt-6 max-w-[58ch]"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(1rem, 1.35vw, 1.15rem)",
              lineHeight: 1.6,
              color: INK_MUTED,
            }}
          >
            The 5 scenes you film become 5 finished posts &mdash; cut for
            Instagram, TikTok, Facebook, YouTube Shorts, and Google Business.
            Same shoot. Different aspect ratios, different captions,
            different platform UIs &mdash; all auto-generated and published.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="hidden lg:block">
            <DesktopList />
          </div>

          <div className="mx-auto max-w-md lg:hidden">
            <MobileSlideshow />
          </div>
        </div>

        <div
          className="border-t"
          style={{ borderColor: HAIRLINE, borderTopWidth: 1 }}
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <p
              className="mb-8 text-center"
              style={{
                fontFamily: BODY,
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: INK_FAINT,
              }}
            >
              Solara has briefed for &mdash;
            </p>

            <IndustryMarquee />
          </div>
        </div>

        <div className="border-t" style={{ borderColor: HAIRLINE }}>
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
            <p
              className="mx-auto"
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)",
                fontWeight: 500,
                color: INK,
                lineHeight: 1.35,
                letterSpacing: "-0.022em",
                maxWidth: "32ch",
              }}
            >
              Don&rsquo;t see yours? You&rsquo;re not an edge case.
            </p>

            <p
              className="mx-auto mt-4"
              style={{
                fontFamily: BODY,
                fontSize: "clamp(0.95rem, 1.18vw, 1.05rem)",
                color: INK_MUTED,
                lineHeight: 1.6,
                maxWidth: "48ch",
              }}
            >
              Solara writes briefs for any business that talks to customers.
              Start your trial and see what we&rsquo;d write for you.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 transition-transform hover:-translate-y-0.5"
              style={{
                background: INK,
                color: "#fff",
                fontFamily: BODY,
                fontSize: "0.95rem",
                fontWeight: 600,
                letterSpacing: "-0.005em",
              }}
            >
              Start your first shoot
              <span aria-hidden>→</span>
            </a>

            <p
              className="mt-4"
              style={{
                fontFamily: BODY,
                fontSize: "0.78rem",
                color: INK_FAINT,
                letterSpacing: "0.04em",
              }}
            >
              No credit card required &middot; Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <PreviewFooter
        label="Section 03 · The showcase — output slideshow (5 platforms)"
        description="Mirrors the bridge's slide pattern but for OUTPUTS instead of inputs. 5 platform slides (Instagram Reel, TikTok, Facebook Story, YouTube Shorts, Google Business). Each slide = a phone mockup with that platform's native UI overlay (right-side action stack for Reel/TikTok/Shorts, top progress bars for Story, search-result + post card for Google Business). Same shoot footage (pizza scenes 1-4 + dough) cropped/styled per platform — visualizes 'same shoot, every platform' without text. Mobile: auto-advance carousel (6.5s/slide) with progress bar + dots + arrows, matching the bridge's mobile UX. Desktop: vertical screenplay rows (number + platform label + format + caption + mini phone) with hairline dividers. Below: industry marquee (36 industries × 2 rows scrolling opposite directions) + escape-hatch CTA ('Don't see yours? You're not an edge case.'). One italic-navy accent on 'Every platform your customer uses' in headline. Pizza shop is the illustrative example — workflow is the same for any industry."
      />
    </main>
  );
}
