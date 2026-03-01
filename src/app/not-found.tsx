"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Magnetic } from "@/components/magnetic";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Section className="text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-[120px] sm:text-[180px] md:text-[220px] leading-none text-text-primary relative inline-block">
            <motion.span
              className="absolute left-0 right-0 top-1/2 h-[3px] bg-text-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-text-secondary text-lg mt-8 mb-4">
            This page took a creative brief and went off-brand.
          </p>
          <p className="text-text-tertiary text-sm mb-10">
            Let&apos;s get you back on track.
          </p>
          <Magnetic>
            <Link href="/" className="btn-primary !h-12 !px-8 !text-base">
              Go Home
            </Link>
          </Magnetic>
        </motion.div>
      </Section>
    </section>
  );
}
