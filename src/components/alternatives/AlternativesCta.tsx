"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AlternativesCta() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#030607",
        padding: "96px 24px",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 20% 15%, rgba(56,189,248,0.18) 0%, transparent 70%), radial-gradient(ellipse 65% 50% at 82% 85%, rgba(99,102,241,0.14) 0%, transparent 68%), linear-gradient(180deg, rgba(3,6,7,0.5) 0%, rgba(3,6,7,0.88) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "640px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.h2
          initial={noMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.08,
            color: "#ffffff",
            marginBottom: "18px",
          }}
        >
          Need help choosing the right alternative?
        </motion.h2>

        <motion.p
          initial={noMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "48ch",
            margin: "0 auto 36px",
          }}
        >
          Book a strategy call. We'll audit your current stack, identify the highest-friction
          workflow, and build a migration plan you can execute without performance loss.
        </motion.p>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
        >
          <Link
            href="/contact"
            aria-label="Book a strategy call"
            className="group inline-flex items-center gap-2 rounded-[999px] bg-white px-7 py-3.5 text-[14px] font-medium tracking-[0.5px] text-[#0f172a] transition-all duration-200 hover:bg-white/90 hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book strategy call
            <svg
              className="h-3.5 w-0 opacity-0 transition-all duration-200 group-hover:w-3.5 group-hover:opacity-100"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
