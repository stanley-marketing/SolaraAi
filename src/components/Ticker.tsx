"use client";

import Image from "next/image";

const items = [
  { name: "OpenAI", src: "/company-icons/openai.svg", w: 130 },
  { name: "ElevenLabs", src: "/company-icons/elevenlabs.svg", w: 110 },
  { name: "Notion", src: "/company-icons/notion.svg", w: 90 },
  { name: "Figma", src: "/company-icons/figma.svg", w: 110 },
  { name: "Shopify", src: "/company-icons/shopify.svg", w: 100 },
  { name: "Vercel", src: "/company-icons/vercel.svg", w: 110 },
  { name: "AWS", src: "/company-icons/aws.svg", w: 70 },
  { name: "Wix", src: "/company-icons/wix.svg", w: 70 },
];

export function Ticker() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative z-10 mt-14 w-full overflow-hidden py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white/90 to-transparent" />

      <div className="flex animate-ticker items-center gap-12 sm:gap-16">
        {repeated.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex shrink-0 items-center justify-center"
            style={{ width: item.w, height: 32 }}
          >
            <img
              src={item.src}
              alt={item.name}
              style={{ width: item.w, height: 32, objectFit: "contain" }}
              className="opacity-40 grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
