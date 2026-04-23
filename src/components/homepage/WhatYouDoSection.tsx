"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, MessageSquareText, Mic, Video } from "lucide-react";
import { AnimatedList } from "@/components/ui/animated-list";

const MUTED_LABEL = "#626262";
const MUTED_BODY = "#4a4a4a";
const MUTED_WHISPER = "rgba(98,98,98,0.75)";
const WA_GREEN = "#25D366";

const IOS_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

const REVEAL_BASE =
  "transition-[transform,opacity] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:!transition-none motion-reduce:!opacity-100 motion-reduce:!translate-y-0";

function useInView<T extends Element = HTMLDivElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

type AskType = "video" | "photo" | "voice" | "text";
type Channel = "sms" | "whatsapp";

type Ask = {
  id: string;
  body: string;
  time: string;
  type: AskType;
  channel: Channel;
};

const ASKS: Ask[] = [
  {
    id: "espresso",
    body: "Quick 5-sec clip — espresso pulling. Just the shot, no talking.",
    time: "Just now",
    type: "video",
    channel: "sms",
  },
  {
    id: "menu",
    body: "Voice note: 30 seconds, tell me what's on the menu today. Your own words.",
    time: "12m ago",
    type: "voice",
    channel: "whatsapp",
  },
  {
    id: "lunch",
    body: "Send a photo of today's lunch special. Just the plate on the counter.",
    time: "1h ago",
    type: "photo",
    channel: "sms",
  },
  {
    id: "greeting",
    body: "Film yourself greeting the next walk-in. \u201cHey, welcome in.\u201d That's it.",
    time: "3h ago",
    type: "video",
    channel: "whatsapp",
  },
  {
    id: "sourdough",
    body: "Quick reply: how do you describe your sourdough crust? One sentence.",
    time: "Yesterday",
    type: "text",
    channel: "sms",
  },
];

const TYPE_META: Record<
  AskType,
  { label: string; icon: typeof Camera; bg: string; fg: string }
> = {
  video: {
    label: "Video",
    icon: Video,
    bg: "rgba(244, 63, 94, 0.10)",
    fg: "#be123c",
  },
  photo: {
    label: "Photo",
    icon: Camera,
    bg: "rgba(245, 158, 11, 0.12)",
    fg: "#b45309",
  },
  voice: {
    label: "Voice",
    icon: Mic,
    bg: "rgba(16, 185, 129, 0.10)",
    fg: "#047857",
  },
  text: {
    label: "Text",
    icon: MessageSquareText,
    bg: "rgba(14, 165, 233, 0.10)",
    fg: "#0369a1",
  },
};

function WhatsAppIcon({ size = 38 }: { size?: number }) {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        background: WA_GREEN,
        boxShadow: "0 1px 2px rgba(0,0,0,0.10), 0 6px 12px -4px rgba(37, 211, 102, 0.45)",
      }}
    >
      <svg
        width={size * 0.58}
        height={size * 0.58}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.02 5.333c-5.887 0-10.676 4.789-10.676 10.676 0 1.884.494 3.728 1.432 5.353l-1.524 5.565 5.694-1.494a10.63 10.63 0 0 0 5.07 1.29h.004c5.887 0 10.676-4.79 10.676-10.677 0-2.853-1.11-5.535-3.128-7.555a10.608 10.608 0 0 0-7.548-3.158Zm0 19.528h-.003a8.847 8.847 0 0 1-4.51-1.235l-.323-.192-3.377.886.9-3.29-.21-.337a8.877 8.877 0 0 1-1.361-4.72c0-4.9 3.988-8.888 8.888-8.888 2.373 0 4.602.925 6.28 2.606a8.83 8.83 0 0 1 2.603 6.286c0 4.9-3.988 8.884-8.887 8.884Zm4.875-6.653c-.267-.134-1.581-.78-1.825-.869-.244-.089-.422-.134-.6.134-.178.267-.69.868-.846 1.047-.156.178-.311.2-.578.067-.267-.134-1.128-.416-2.148-1.325-.794-.708-1.33-1.583-1.486-1.85-.156-.267-.017-.411.117-.544.12-.12.267-.312.4-.468.134-.156.178-.267.267-.445.089-.178.045-.334-.022-.468-.067-.134-.6-1.446-.822-1.98-.217-.52-.437-.45-.6-.458l-.511-.009c-.178 0-.467.067-.711.334-.245.267-.934.912-.934 2.224 0 1.312.956 2.58 1.09 2.758.133.178 1.884 2.876 4.565 4.032.638.276 1.136.44 1.524.563.64.204 1.223.175 1.684.106.513-.077 1.581-.646 1.803-1.27.222-.623.222-1.158.156-1.27-.067-.112-.245-.178-.511-.312Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

function MessagesIcon({ size = 38 }: { size?: number }) {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        background: "linear-gradient(180deg, #5BF675 0%, #0CBD2A 100%)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.10), 0 6px 12px -4px rgba(12, 189, 42, 0.45)",
      }}
    >
      <svg
        width={size * 0.64}
        height={size * 0.64}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 14 C 18.5 14, 8.5 22.5, 8.5 32 C 8.5 37.5, 11.5 42.3, 16 45.5 C 15 48.5, 12.8 51.5, 10.5 53 C 14.5 53, 20.5 51.3, 25 48.5 C 27.3 49.3, 29.6 49.5, 32 49.5 C 45.5 49.5, 55.5 41, 55.5 32 C 55.5 22.5, 45.5 14, 32 14 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
}

const CHANNEL_META: Record<Channel, { label: string; Icon: (props: { size?: number }) => React.ReactElement }> = {
  sms: { label: "Messages", Icon: MessagesIcon },
  whatsapp: { label: "WhatsApp", Icon: WhatsAppIcon },
};

function NotificationCard({ ask }: { ask: Ask }) {
  const meta = TYPE_META[ask.type];
  const Icon = meta.icon;
  const channel = CHANNEL_META[ask.channel];
  const ChannelIcon = channel.Icon;

  return (
    <figure
      className="group relative w-full max-w-[420px] cursor-default overflow-hidden rounded-2xl bg-white p-4 transition-transform duration-200 ease-out hover:scale-[1.02]"
      style={{
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.05), 0 18px 40px -16px rgba(0,0,0,0.16)",
        fontFamily: IOS_FONT,
      }}
    >
      <div className="flex items-start gap-3">
        <ChannelIcon size={40} />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span
              className="truncate"
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.01em",
                color: "#1c1c1e",
              }}
            >
              Solara
            </span>
            <span
              aria-hidden="true"
              style={{ color: "#c7c7cc", fontSize: "0.78rem" }}
            >
              ·
            </span>
            <span
              className="truncate"
              style={{
                fontSize: "0.74rem",
                color: "#8a8a8e",
                fontWeight: 500,
              }}
            >
              {channel.label}
            </span>
            <span className="ml-auto shrink-0 tabular-nums"
              style={{
                fontSize: "0.7rem",
                color: "#8a8a8e",
                fontWeight: 500,
              }}
            >
              {ask.time}
            </span>
          </div>

          <p
            className="mt-1.5"
            style={{
              fontSize: "0.93rem",
              color: "#1c1c1e",
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            {ask.body}
          </p>

          <div className="mt-2.5 flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5"
              style={{
                background: meta.bg,
                color: meta.fg,
                fontSize: "0.66rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              <Icon size={11} strokeWidth={2.5} />
              {meta.label}
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                color: MUTED_WHISPER,
                fontWeight: 500,
              }}
            >
              · less than 60 seconds of your day
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
}

function NotificationFeed() {
  // Repeated 6x so AnimatedList has ~40s of material before the cycle exhausts.
  const feed = Array.from({ length: 6 }, () => ASKS).flat();

  return (
    <div
      className="relative mx-auto flex h-[480px] w-full max-w-[460px] flex-col overflow-hidden px-2"
      aria-hidden="true"
    >
      <AnimatedList delay={1700}>
        {feed.map((ask, i) => (
          <NotificationCard
            key={`${ask.id}-${i}`}
            ask={{ ...ask, id: `${ask.id}-${i}` }}
          />
        ))}
      </AnimatedList>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0) 100%)",
        }}
      />
    </div>
  );
}

export function WhatYouDoSection() {
  const { ref: headingRef, visible: headingVisible } =
    useInView<HTMLDivElement>(0.25);
  const { ref: anchorRef, visible: anchorVisible } =
    useInView<HTMLDivElement>(0.4);
  const { ref: outroRef, visible: outroVisible } =
    useInView<HTMLDivElement>(0.4);

  return (
    <section
      aria-label="What you actually do \u2014 5 minutes a day"
      className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/3 -z-0 h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(254, 243, 199, 0.55) 0%, rgba(254, 243, 199, 0.18) 40%, transparent 72%)",
          filter: "blur(8px)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_460px] lg:items-center lg:gap-20">
        <div>
          <div
            ref={headingRef}
            className={`${REVEAL_BASE}`}
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <h2
              className="max-w-[620px] leading-[1.05] tracking-[-0.02em] text-ink-900"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 600,
              }}
            >
              5 minutes a day. That&rsquo;s your whole job.
            </h2>

            <div className="mt-8 grid max-w-[560px] gap-5 sm:mt-10">
              <p
                style={{
                  fontSize: "clamp(1rem, 1.15vw, 1.08rem)",
                  lineHeight: 1.65,
                  color: MUTED_BODY,
                }}
              >
                Solara handles the entire operation. Strategy, scripts,
                editing, publishing, analytics &mdash; all of it. The one
                thing it can&rsquo;t do is physically hold a camera.{" "}
                <span style={{ color: "#1c1c1e", fontWeight: 500 }}>
                  That&rsquo;s the only gap.
                </span>
              </p>
              <p
                style={{
                  fontSize: "clamp(1rem, 1.15vw, 1.08rem)",
                  lineHeight: 1.65,
                  color: MUTED_BODY,
                }}
              >
                In every real social media operation, the owner is the one
                who shows up. The chef stands by the oven. The trainer is in
                the gym. Not because they&rsquo;re influencers &mdash;
                because they ARE the brand.
              </p>
            </div>
          </div>

          <div
            ref={anchorRef}
            className={`${REVEAL_BASE} mt-12 max-w-[560px] sm:mt-16`}
            style={{
              opacity: anchorVisible ? 1 : 0,
              transform: anchorVisible ? "translateY(0)" : "translateY(12px)",
            }}
          >
            <p
              className="text-ink-900"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 1.8vw, 1.55rem)",
                fontWeight: 500,
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}
            >
              A{" "}
              <span style={{ color: "#1c1c1e", fontWeight: 600 }}>
                $2,000/month
              </span>{" "}
              social media manager would text you the exact same things.{" "}
              <span
                style={{
                  background: "#111111",
                  color: "#fafafa",
                  padding: "0 8px",
                  borderRadius: 3,
                  fontWeight: 600,
                }}
              >
                Solara does it for $69
              </span>
              .
            </p>
          </div>

          <div
            ref={outroRef}
            className={`${REVEAL_BASE} mt-8 max-w-[560px]`}
            style={{
              opacity: outroVisible ? 1 : 0,
              transform: outroVisible ? "translateY(0)" : "translateY(12px)",
              transitionDelay: outroVisible ? "120ms" : "0ms",
            }}
          >
            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: 1.65,
                color: MUTED_BODY,
              }}
            >
              Even with a human social media manager, you&rsquo;d spend at
              least 20 minutes a day on communication, approvals, and
              back-and-forth. With Solara it&rsquo;s 5 minutes &mdash; and
              you get more output, because Solara never sleeps.
            </p>
          </div>
        </div>

        <div className="relative">
          <p
            className="mb-5 hidden lg:block"
            style={{
              fontSize: "0.66rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase" as const,
              color: MUTED_LABEL,
            }}
          >
            Your phone, this week
          </p>
          <NotificationFeed />
        </div>
      </div>
    </section>
  );
}
