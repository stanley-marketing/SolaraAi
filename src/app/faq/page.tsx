import type { Metadata } from "next";
import { FaqContent } from "./faq-content";
import { JsonLd, createFaqSchema } from "@/components/json-ld";

const allFaqItems = [
  { question: "What is Solara AI?", answer: "Solara is an AI-powered marketing platform that acts as a complete marketing department. It combines storytelling, strategy, and research into one autonomous system that creates content, manages ads, optimizes SEO, and provides analytics — all while learning your brand voice." },
  { question: "How is Solara different from ChatGPT or other AI tools?", answer: "While ChatGPT is a general-purpose AI, Solara is purpose-built for marketing. It doesn't just generate text — it researches your audience, builds strategy, executes across platforms, and optimizes in real time." },
  { question: "Who is Solara built for?", answer: "Solara serves two core audiences: business owners who want their marketing to run like a trusted partner, and marketers who want a relentless AI wingman that handles execution so they can focus on creative strategy." },
  { question: "Is there a free trial?", answer: "Yes. We offer a 14-day free trial on all plans with full feature access. No credit card required to start." },
  { question: "Can I switch plans?", answer: "Yes, you can upgrade or downgrade at any time. Upgrades are prorated immediately. Downgrades take effect at the next billing cycle." },
  { question: "What platforms does Solara support?", answer: "Solara currently supports content creation and scheduling for Instagram, TikTok, LinkedIn, Facebook, and Twitter/X. Ad management works across Meta, Google Ads, and TikTok Ads." },
  { question: "How does the AI learn my brand voice?", answer: "During onboarding, Solara analyzes your existing content, website copy, social media posts, and brand guidelines. It builds a voice profile that captures your tone, vocabulary, and communication style." },
  { question: "Can I review content before it goes live?", answer: "Yes, always. Solara operates in 'suggest and approve' mode by default. You can also switch to full autopilot mode once you trust the system." },
  { question: "Do you offer a money-back guarantee?", answer: "Yes. We offer a 30-day money-back guarantee on all plans. If Solara isn't the right fit, we'll refund your payment — no questions asked." },
  { question: "How long does onboarding take?", answer: "Most teams are fully set up within 1-2 hours. The AI needs about 24 hours to fully analyze your existing content and build your brand voice profile." },
];

export const metadata: Metadata = {
  title: "FAQ — Solara AI | Frequently Asked Questions",
  description:
    "Find answers to common questions about Solara AI — features, pricing, onboarding, data security, platform support, and how AI learns your brand voice.",
  openGraph: {
    title: "FAQ — Solara AI | Frequently Asked Questions",
    description:
      "Everything you need to know about Solara AI. General, product, pricing, and getting started questions answered.",
    url: "https://solaraai.com/faq",
  },
  twitter: {
    card: "summary",
    title: "Solara AI FAQ",
    description: "Answers to common questions about AI-powered marketing.",
  },
  alternates: {
    canonical: "https://solaraai.com/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={createFaqSchema(allFaqItems)} />
      <FaqContent />
    </>
  );
}
