"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

const services = [
  {
    name: "AI Ads Manager",
    tab: "Ads",
    desc: "Runs and optimizes ad campaigns across Google, Meta, TikTok, and more — automatically.",
    img: "/screenshots/ads.webp",
  },
  {
    name: "AI Creative Manager",
    tab: "Creative",
    desc: "Designs and produces graphics, videos, and branded content on demand.",
    img: "/screenshots/creative.webp",
  },
  {
    name: "AI SEO & AI Search",
    tab: "SEO & Search",
    desc: "Optimizes your site, content, and search presence for organic growth.",
    img: "/screenshots/seo.webp",
  },
  {
    name: "AI CMS Manager",
    tab: "CMS",
    desc: "Manages your website content, pages, and publishing schedule.",
    img: "/screenshots/cms.webp",
  },
  {
    name: "AI Social Media Manager",
    tab: "Social Media",
    desc: "Plans, creates, and posts content across all your platforms.",
    img: "/screenshots/social.webp",
  },
  {
    name: "AI Leads Manager",
    tab: "Leads",
    desc: "Captures, qualifies, and nurtures leads from every channel.",
    img: "/screenshots/leads.webp",
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
          {/* Horizontal tab bar */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
            {services.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === i
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                }`}
              >
                {s.tab}
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="mx-auto mt-4 text-center text-sm text-gray-500">
            {services[active].desc}
          </p>

          {/* Screenshot */}
          <div className="mt-8 rounded-2xl bg-white p-2" style={{ border: "1px solid #eaecf0" }}>
            <div className="aspect-[16/9] overflow-hidden rounded-xl bg-white">
              <img
                src={services[active].img}
                alt={services[active].name}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
