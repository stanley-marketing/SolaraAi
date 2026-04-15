"use client";

import { Check, X, User, Bot, Building2 } from "lucide-react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const FEATURES = [
  "Builds content strategy weekly",
  "Writes scripts in your voice",
  "Directs what to film, scene by scene",
  "Edits videos with B-roll and captions",
  "Publishes at optimal times",
  "Learns and improves every month",
  "Works via WhatsApp",
];

const COLUMNS = [
  { name: "Solara", highlight: true, icon: null },
  { name: "Freelancer", highlight: false, icon: User },
  { name: "AI Tool", highlight: false, icon: Bot },
  { name: "Agency", highlight: false, icon: Building2 },
];

const GRID: boolean[][] = [
  [true, false, false, false],
  [true, false, false, false],
  [true, false, false, false],
  [true, true, false, true],
  [true, false, false, true],
  [true, false, false, false],
  [true, false, false, false],
];

export function AgentsSection() {
  return (
    <section className="px-6 py-28 sm:px-10" style={{ background: "#fafafa" }}>
      <div className="mx-auto max-w-4xl text-center">
        <BlurFade delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Comparison
          </span>
          <h2
            className="mt-4 text-3xl leading-snug tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not all solutions are created equal.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-500">
            They create individual pieces and call it a presence.
            Solara actually manages your social media.
          </p>
        </BlurFade>

        <BlurFade delay={0.25}>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="pb-4 pr-4 text-sm font-normal text-gray-400" />
                  {COLUMNS.map((col) => {
                    const Icon = col.icon;
                    return (
                      <th key={col.name} className="pb-4 align-bottom text-center" style={{ minWidth: 100 }}>
                        {col.highlight && (
                          <span className="mb-3 inline-block rounded-full bg-ink-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                            Best for Business
                          </span>
                        )}
                        <div className="flex h-7 items-center justify-center">
                          {col.highlight ? (
                            <Image src="/solara-icon.svg" alt="Solara" width={26} height={26} className="rounded-full" />
                          ) : (
                            Icon && <Icon size={22} className="text-gray-400" />
                          )}
                        </div>
                        <div className={`mt-1.5 text-sm font-semibold ${col.highlight ? "text-gray-900" : "text-gray-500"}`}>
                          {col.name}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((feature, rowIdx) => (
                  <tr key={feature} className="border-t border-gray-200">
                    <td className="py-4 pr-4 text-left text-[15px] text-gray-700">{feature}</td>
                    {GRID[rowIdx].map((has, colIdx) => {
                      const isHighlight = COLUMNS[colIdx].highlight;
                      const isFirst = rowIdx === 0;
                      const isLast = rowIdx === FEATURES.length - 1;
                      return (
                        <td
                          key={COLUMNS[colIdx].name}
                          className="py-4 text-center"
                          style={{
                            background: isHighlight ? "#ffffff" : undefined,
                            borderLeft: isHighlight ? "1px solid #e3e3e3" : undefined,
                            borderRight: isHighlight ? "1px solid #e3e3e3" : undefined,
                            borderTop: isHighlight && isFirst ? "1px solid #e3e3e3" : undefined,
                            borderBottom: isHighlight && isLast ? "1px solid #e3e3e3" : undefined,
                            borderTopLeftRadius: isHighlight && isFirst ? "12px" : undefined,
                            borderTopRightRadius: isHighlight && isFirst ? "12px" : undefined,
                            borderBottomLeftRadius: isHighlight && isLast ? "12px" : undefined,
                            borderBottomRightRadius: isHighlight && isLast ? "12px" : undefined,
                          }}
                        >
                          {has ? (
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
                              <Check size={14} className="text-emerald-500" />
                            </span>
                          ) : (
                            <X size={14} className="mx-auto text-gray-300" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <p className="mx-auto mt-10 max-w-2xl text-lg font-medium leading-relaxed text-gray-900">
            What makes brands grow is not one good post. It&apos;s the brain
            behind a consistent, strategic, on-brand social presence &mdash;
            running week after week without falling apart.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-[999px] bg-black px-8 py-3.5 text-[14px] font-medium tracking-[1px] text-white transition-colors duration-200 hover:bg-gray-700"
            >
              Start free trial
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
