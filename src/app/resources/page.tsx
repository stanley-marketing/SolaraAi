"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ResourcesGrid } from "./resources-grid";

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <Section>
          <Reveal>
            <p className="section-label mb-4">Resources</p>
            <h1 className="heading text-5xl md:text-6xl font-bold mb-6 max-w-xl">
              AI Marketing Toolkit
            </h1>
            <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
              A curated collection of the best AI marketing tools. Hand-picked by our
              team, organized by category.
            </p>
          </Reveal>
        </Section>
      </section>

      <section className="pb-[var(--section-gap)]">
        <Section>
          <Reveal delay={0.15}>
            <ResourcesGrid />
          </Reveal>
        </Section>
      </section>
    </>
  );
}
