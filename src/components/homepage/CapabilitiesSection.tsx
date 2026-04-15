import type { LucideIcon } from "lucide-react";
import { Calendar, FileText, Video, Wand2, Send, TrendingUp } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: Calendar,
    title: "Strategy",
    description:
      "Weekly content planning built around your brand, audience, and business goal. Updated every Sunday. Delivered every Monday.",
  },
  {
    icon: FileText,
    title: "Scripts",
    description:
      "Teleprompter-ready, written in your voice, structured to hold attention and build authority in your niche. Scene-by-scene. Nothing vague.",
  },
  {
    icon: Video,
    title: "Recording direction",
    description:
      "Per-scene instructions: what to film, how to frame it, how long. Solara knows what your business can realistically provide and never asks for the impossible.",
  },
  {
    icon: Wand2,
    title: "AI production",
    description:
      "Video editing, B-roll, captions, thumbnails, sound selection. Handles full production when it can. Requests only what it genuinely needs from you.",
  },
  {
    icon: Send,
    title: "Publishing",
    description:
      "Optimal posting times for your audience, platform-specific formatting, automatic cross-posting. All scheduled after your approval.",
  },
  {
    icon: TrendingUp,
    title: "Growth loop",
    description:
      "Monthly performance review. Solara learns what works for your brand specifically — and adjusts the strategy accordingly. Compounding results over time.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      className="bg-white px-6 py-24 sm:px-10 sm:py-32"
      aria-label="Capabilities"
    >
      <div className="mx-auto max-w-5xl">
        <BlurFade delay={0}>
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.2]">
            Everything a social media manager does.
            <br />
            <span className="text-ink-700">Done by Solara.</span>
          </h2>
        </BlurFade>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <BlurFade key={cap.title} delay={0.1 + i * 0.08} className="flex">
                <MagicCard
                  className="flex-1 p-7"
                  gradientColor="rgba(0,0,0,0.04)"
                  gradientSize={240}
                >
                  <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-shell">
                    <Icon
                      size={15}
                      strokeWidth={1.5}
                      className="text-ink-900"
                    />
                  </div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-700">
                    {cap.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink-700">
                    {cap.description}
                  </p>
                </MagicCard>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
