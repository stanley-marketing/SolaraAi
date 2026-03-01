"use client";

import { StaggerContainer, StaggerItem } from "./stagger-children";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  metric: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We went from scrambling for content every week to having a 3-month pipeline running on autopilot. Our team finally has time to think strategically.",
    name: "David Chen",
    role: "CMO",
    company: "Recoverli",
    metric: "+240% content output",
    stars: 5,
  },
  {
    quote:
      "Solara cut our ad waste by nearly half in the first month. The AI spotted patterns our media buyer missed for six months.",
    name: "Rachel Torres",
    role: "Head of Growth",
    company: "Dentaluxe",
    metric: "47% less ad waste",
    stars: 5,
  },
  {
    quote:
      "The ROI calculator wasn't lying. We're saving 50+ hours a week across the marketing team. That's not an exaggeration.",
    name: "Michael Adler",
    role: "Founder",
    company: "Rose Poet",
    metric: "50+ hrs saved/week",
    stars: 5,
  },
  {
    quote:
      "Our organic traffic tripled in 4 months. The SEO engine identified keyword gaps we didn't even know existed.",
    name: "Sarah Kim",
    role: "Marketing Director",
    company: "RE/MAX Tel Aviv",
    metric: "3x organic traffic",
    stars: 5,
  },
  {
    quote:
      "I was skeptical about AI marketing, but Solara actually sounds like us. The content isn't generic — it's genuinely on-brand.",
    name: "Tom Brennan",
    role: "Brand Manager",
    company: "LEAD Ogilvy",
    metric: "67% CTR increase",
    stars: 5,
  },
  {
    quote:
      "As a solo founder, Solara is my entire marketing department. I focus on product; it handles everything else.",
    name: "Noa Levy",
    role: "CEO",
    company: "Sharon Regev Studio",
    metric: "80% conversion lift",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-text-primary"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialGrid() {
  return (
    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
      {testimonials.map((t) => (
        <StaggerItem key={t.name}>
          <div className="group h-full flex flex-col justify-between p-7 rounded-2xl border border-border bg-bg-primary hover:border-border-strong transition-all duration-300">
            <div>
              <Stars count={t.stars} />
              <p className="mt-4 text-[15px] leading-relaxed text-text-primary">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-tertiary">
                    {t.role}, {t.company}
                  </p>
                </div>
                <span className="text-xs font-medium text-text-secondary bg-bg-secondary px-3 py-1 rounded-full">
                  {t.metric}
                </span>
              </div>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
