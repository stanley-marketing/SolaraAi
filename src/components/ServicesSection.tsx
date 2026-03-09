"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

const services = [
  {
    name: "AI Ads Manager",
    desc: "Runs and optimizes ad campaigns across Google, Meta, TikTok, and more — automatically.",
    img: "/screenshots/ads.png",
  },
  {
    name: "AI Creative Manager",
    desc: "Designs and produces graphics, videos, and branded content on demand.",
    img: "/screenshots/creative.png",
  },
  {
    name: "AI SEO & AI Search",
    desc: "Optimizes your site, content, and search presence for organic growth.",
    img: "/screenshots/seo.png",
  },
  {
    name: "AI CMS Manager",
    desc: "Manages your website content, pages, and publishing schedule.",
    img: "/screenshots/cms.png",
  },
  {
    name: "AI Social Media Manager",
    desc: "Plans, creates, and posts content across all your platforms.",
    img: "/screenshots/social.png",
  },
  {
    name: "AI Leads Manager",
    desc: "Captures, qualifies, and nurtures leads from every channel.",
    img: "/screenshots/leads.png",
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-gray-100 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <BlurFade delay={0}>
          <h2
            className="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything a full marketing department does.
            <br className="hidden sm:block" />
            Without hiring one.
          </h2>
        </BlurFade>

        <BlurFade delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-500">
            Six AI-powered managers working together around the clock — each one
            an expert in their domain.
          </p>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="mt-16 grid items-start gap-10 md:grid-cols-[280px_1fr]">
            {/* Tab list */}
            <div className="flex flex-col gap-1">
              {services.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => setActive(i)}
                  className={`rounded-xl px-4 py-3.5 text-left transition-all ${
                    active === i
                      ? "bg-gray-900 text-white shadow-md"
                      : "bg-transparent text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-sm font-semibold">{s.name}</span>
                  {active === i && (
                    <p className="mt-1 text-xs leading-relaxed text-gray-300">
                      {s.desc}
                    </p>
                  )}
                </button>
              ))}
            </div>

            {/* Large preview */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img
                src={services[active].img}
                alt={services[active].name}
                className="w-full object-cover object-top"
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
