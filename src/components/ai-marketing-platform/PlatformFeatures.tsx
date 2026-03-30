"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PLATFORM_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const VIEW_ONCE = { once: true, margin: "-80px" };

export function PlatformFeatures() {
  const { layers, why } = PLATFORM_CONTENT;
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <>
      <section className="relative overflow-hidden border-y border-gray-100 bg-[#f8fafc] px-6 py-28 sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 80% 8%, rgba(16,185,129,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 45% at 20% 90%, rgba(56,96,255,0.07) 0%, transparent 75%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW_ONCE}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-14 max-w-2xl"
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40">
              {layers.badge}
            </p>
            <h2
              className="text-ink-900"
              style={{
                fontFamily: "var(--font-display-playfair)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {layers.headline}
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700/70">
              {layers.sub}
            </p>
          </motion.div>

          <div className="relative pl-0 sm:pl-7">
            <div
              aria-hidden
              className="absolute bottom-0 left-4 top-2 hidden w-px bg-gradient-to-b from-[#10b981]/10 via-[#10b981]/50 to-[#10b981]/10 sm:block"
            />
            <div className="space-y-5">
              {layers.items.map((item, i) => (
                <motion.article
                  key={item.number}
                  initial={noMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW_ONCE}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                  className="relative rounded-2xl bg-white p-6 sm:ml-8 sm:p-7"
                  style={{ border: "1px solid #eaecf0" }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(120deg, rgba(16,185,129,0.06) 0%, rgba(255,255,255,0) 40%)",
                    }}
                  />
                  <span
                    className="mb-4 inline-flex rounded-full bg-[#ecfdf3] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#047857]"
                    style={{ border: "1px solid #a7f3d0" }}
                  >
                    Layer {item.number}
                  </span>
                  <h3
                    className="relative mb-2 text-[1rem] font-semibold leading-snug text-ink-900"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="relative text-[0.9rem] leading-relaxed text-ink-700/75">
                    {item.description}
                  </p>
                  <span
                    aria-hidden
                    className="absolute left-4 top-8 hidden h-4 w-4 -translate-x-[2.625rem] rounded-full bg-white shadow-[0_0_0_5px_rgba(16,185,129,0.16)] sm:block"
                    style={{ border: "1px solid #6ee7b7" }}
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW_ONCE}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-12 max-w-xl"
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/40">
              {why.badge}
            </p>
            <h2
              className="text-ink-900"
              style={{
                fontFamily: "var(--font-display-playfair)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {why.headline}
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {why.cards.map((card, i) => (
              <motion.article
                key={card.title}
                initial={noMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW_ONCE}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="relative overflow-hidden rounded-2xl bg-[#f8fafc] p-6 sm:p-7"
                style={{ border: "1px solid #eaecf0" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
                    transform: "translate(30%, -30%)",
                  }}
                />
                <h3
                  className="mb-2 text-[1rem] font-semibold text-ink-900"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {card.title}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-ink-700/72">
                  {card.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
