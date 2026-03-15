"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function EnterpriseAgentsStrip() {
  return (
    <section
      className="border-y bg-[#fafafa]"
      style={{ borderColor: "#eaecf0" }}
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-shrink-0 lg:w-[34%]">
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Enterprise
            </p>
            <h2
              className="text-[2.125rem] font-semibold leading-[1.1] tracking-[-0.03em] text-gray-950 sm:text-[2.5rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              More agents,
              <br />
              more reach.
            </h2>
          </div>

          <div className="flex flex-col gap-7 lg:flex-1">
            <p className="text-[1.0625rem] leading-[1.8] text-neutral-600">
              Enterprise plans unlock four additional autonomous agents: the{" "}
              <span className="font-semibold text-gray-900">Website Agent</span>{" "}
              that rebuilds and optimizes your web presence, the{" "}
              <span className="font-semibold text-gray-900">SEO Agent</span>{" "}
              that monitors and improves your rankings around the clock, the{" "}
              <span className="font-semibold text-gray-900">AI Search Agent</span>{" "}
              that gets you cited in ChatGPT and Perplexity, and the{" "}
              <span className="font-semibold text-gray-900">Email Agent</span>{" "}
              that writes and sends campaigns on full autopilot.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-[999px] bg-gray-950 px-6 py-3 text-[14px] font-medium tracking-[1px] text-white transition-colors hover:bg-gray-800"
            >
              Contact Sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
