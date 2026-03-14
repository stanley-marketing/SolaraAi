"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroScreenshot() {
  return (
    <motion.div
      className="relative z-10 mx-auto mt-24 w-full max-w-7xl px-4"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Screenshot card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200/50 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.2)]">
        <Image
          src="/dashboard-hero.webp"
          alt="Solara AI Dashboard — your marketing command center"
          width={2048}
          height={1248}
          priority
          className="block h-auto w-full"
        />
      </div>

      {/* Bottom fade — peek effect */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, white 10%, transparent 100%)",
        }}
      />

      {/* Subtle rainbow glow beneath */}
      <div
        className="pointer-events-none absolute -bottom-12 left-1/2 -z-10 h-48 w-3/4 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, #f9731640, #eab30840, #22c55e40, #06b6d440, #8b5cf640, #ec489940)",
        }}
      />
    </motion.div>
  );
}
