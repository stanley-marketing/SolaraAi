"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";

const faqSections = [
  {
    title: "General",
    items: [
      {
        question: "What is Solara AI?",
        answer:
          "Solara is an AI-powered marketing platform that acts as a complete marketing department. It combines storytelling, strategy, and research into one autonomous system that creates content, manages ads, optimizes SEO, and provides analytics — all while learning your brand voice.",
      },
      {
        question: "How is Solara different from ChatGPT or other AI tools?",
        answer:
          "While ChatGPT is a general-purpose AI, Solara is purpose-built for marketing. It doesn't just generate text — it researches your audience, builds strategy, executes across platforms, and optimizes in real time. It's the difference between a tool and a teammate.",
      },
      {
        question: "Who is Solara built for?",
        answer:
          "Solara serves two core audiences: business owners who want their marketing to run like a trusted partner (without the mental load), and marketers who want a relentless AI wingman that handles execution so they can focus on creative strategy.",
      },
      {
        question: "Do I need marketing experience to use Solara?",
        answer:
          "Not at all. Solara is designed to work for anyone — from solo founders with zero marketing background to experienced CMOs managing complex campaigns. The AI handles the complexity; you provide the direction.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Absolutely. We use enterprise-grade encryption, SOC 2 compliant infrastructure, and never share your data with third parties. Your brand data, audience insights, and campaign information are yours alone.",
      },
    ],
  },
  {
    title: "Product",
    items: [
      {
        question: "What platforms does Solara support?",
        answer:
          "Solara currently supports content creation and scheduling for Instagram, TikTok, LinkedIn, Facebook, and Twitter/X. Ad management works across Meta (Facebook/Instagram), Google Ads, and TikTok Ads. We're continuously adding new platform integrations.",
      },
      {
        question: "How does the AI learn my brand voice?",
        answer:
          "During onboarding, Solara analyzes your existing content, website copy, social media posts, and brand guidelines. It builds a voice profile that captures your tone, vocabulary, and communication style. The more content it processes, the more accurate it becomes.",
      },
      {
        question: "Can I review content before it goes live?",
        answer:
          "Yes, always. Solara operates in 'suggest and approve' mode by default. You'll see all content, ads, and campaigns in a review queue before anything goes live. You can also switch to full autopilot mode once you trust the system.",
      },
      {
        question: "How does autonomous ad optimization work?",
        answer:
          "Solara continuously monitors your ad performance across platforms. It automatically shifts budget to top-performing creatives, pauses underperformers, tests new variations, and refines audience targeting — all in real time, 24/7.",
      },
      {
        question: "What kind of content can Solara create?",
        answer:
          "Blog posts, social media posts, email newsletters, ad copy, video scripts, carousel designs, landing page copy, SEO-optimized articles, and more. It can also repurpose one piece of content into 12+ formats across platforms.",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    items: [
      {
        question: "Is there a free trial?",
        answer:
          "Yes. We offer a 14-day free trial on all plans with full feature access. No credit card required to start.",
      },
      {
        question: "Can I switch plans?",
        answer:
          "Yes, you can upgrade or downgrade at any time. Upgrades are prorated immediately. Downgrades take effect at the next billing cycle.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for annual enterprise plans.",
      },
      {
        question: "Do you offer a money-back guarantee?",
        answer:
          "Yes. We offer a 30-day money-back guarantee on all plans. If Solara isn't the right fit, we'll refund your payment — no questions asked.",
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        question: "How long does onboarding take?",
        answer:
          "Most teams are fully set up within 1-2 hours. The AI needs about 24 hours to fully analyze your existing content and build your brand voice profile. You can start creating content immediately while the analysis runs.",
      },
      {
        question: "Do I need to connect all my platforms at once?",
        answer:
          "No. You can start with one platform and add more over time. Many teams begin with content creation and SEO, then add ad management once they're comfortable.",
      },
      {
        question: "What support is available?",
        answer:
          "Starter plans get email support. Pro plans get priority support with live chat. Premium and Agency plans get a dedicated account manager and custom onboarding.",
      },
      {
        question: "Can I import my existing content and campaigns?",
        answer:
          "Yes. Solara can import your existing content from major platforms, analyze your current ad campaigns, and use everything as training data to better understand your brand and audience.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <Section narrow>
          <Reveal>
            <p className="section-label mb-4">Support</p>
            <h1 className="heading text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
              Everything you need to know about Solara. Can&apos;t find what you&apos;re
              looking for? <Link href="/contact" className="text-text-primary underline underline-offset-4 hover:text-text-secondary transition-colors">Get in touch</Link>.
            </p>
          </Reveal>
        </Section>
      </section>

      {faqSections.map((section, i) => (
        <section
          key={section.title}
          className={`pb-16 ${i < faqSections.length - 1 ? "" : "pb-[var(--section-gap)]"}`}
        >
          <Section narrow>
            <Reveal>
              <h2 className="heading text-2xl font-bold mb-6 pb-4 border-b border-border">
                {section.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Faq items={section.items} />
            </Reveal>
          </Section>
        </section>
      ))}
    </>
  );
}
