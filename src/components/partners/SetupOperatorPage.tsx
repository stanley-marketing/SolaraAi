import {
  BadgeCheck,
  Star,
  Zap,
  Crown,
  TrendingUp,
} from "lucide-react";

import { getCtaHref } from "@/lib/partners/cta-flows";
import { PartnerPageShell } from "./PartnerPageShell";
import { PartnerHero } from "./PartnerHero";
import { PartnerPitchBlock } from "./PartnerPitchBlock";
import { PartnerBenefitsGrid } from "./PartnerBenefitsGrid";
import { PartnerProcessSteps } from "./PartnerProcessSteps";
import { PartnerFinalCta } from "./PartnerFinalCta";

/* ──────────────────────────────────────────────────────────────
   SetupOperatorPage
   Route: /partners/setup-operators
   Server component — no interactivity needed.
   ────────────────────────────────────────────────────────────── */

interface SetupOperatorPageProps {
  jsonLd?: string[];
}

/* ── Tier ladder data ──────────────────────────────────────── */

interface Tier {
  name: string;
  threshold: string;
  icon: React.ReactNode;
  perks: string[];
  highlight?: boolean;
}

const TIERS: Tier[] = [
  {
    name: "Certified",
    threshold: "3 clients connected",
    icon: <BadgeCheck size={20} strokeWidth={1.5} className="text-purple-500" />,
    perks: [
      "Directory listing",
      "Solara Certified badge",
    ],
  },
  {
    name: "Pro",
    threshold: "7 clients connected",
    icon: <Star size={20} strokeWidth={1.5} className="text-purple-500" />,
    perks: [
      "Priority directory placement",
      "$1,000 cash bonus",
      "Early feature access",
    ],
  },
  {
    name: "Expert",
    threshold: "15 clients connected",
    icon: <Zap size={20} strokeWidth={1.5} className="text-purple-500" />,
    perks: [
      "$2,500 cash bonus",
      "Solara routes inbound setup requests to you",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    threshold: "25+ clients connected",
    icon: <Crown size={20} strokeWidth={1.5} className="text-purple-500" />,
    perks: [
      "$5,000 cash bonus",
      "Permanent referral commission",
      "Solara actively promotes you",
    ],
  },
];

/* ── FAQ data ──────────────────────────────────────────────── */

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What does a Setup Operator do?",
    answer:
      "A Solara Setup Operator connects a client's entire marketing stack — landing pages, email, ads, and content — into one unified system inside Solara. You're not configuring a CRM or managing tags. You're wiring a marketing nervous system that detects, adapts, and acts on its own.",
  },
  {
    question: "How do I get certified?",
    answer:
      "Certification is application-based. You apply, tell us about your background, and once accepted you connect your first 3 clients' marketing into Solara. Submit proof of the completed setups and you earn your Certified badge and directory listing. Each tier above Certified requires additional connected clients.",
  },
  {
    question: "When does Solara start sending me leads?",
    answer:
      "Inbound lead routing begins at the Expert tier (15 clients connected). At that point, Solara actively routes setup requests from businesses looking for operators directly to you. Elite operators receive the highest volume of routed leads plus active promotion from Solara.",
  },
];

/* ── Main component ────────────────────────────────────────── */

export function SetupOperatorPage({ jsonLd }: SetupOperatorPageProps) {
  return (
    <PartnerPageShell jsonLd={jsonLd}>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <PartnerHero
        eyebrow="SOLARA SETUP OPERATORS"
        headline="CRMs are old news. The new operators master what actually grows a business."
        subhead="Setting up a CRM is easy — it's a spreadsheet with a logo. The next generation of operators won't organize data. They'll connect the one system that actually drives revenue: marketing."
        primaryCta={{
          label: "Become a Setup Operator",
          href: getCtaHref("setup-operators", "primary"),
        }}
        secondaryCta={{
          label: "See the Operator Directory",
          href: getCtaHref("setup-operators", "secondary"),
        }}
        useGlobe={false}
      />

      {/* ── Pitch blocks ──────────────────────────────────────── */}
      <PartnerPitchBlock
        blocks={[
          {
            headline: "There's only one thing that actually grows a business.",
            body: "Not project management. Not dashboards. Not CRM configurations. Not analytics setups. All of those organize what already exists. Marketing creates what didn't exist before — customers, pipeline, revenue. And right now, every company's marketing is fragmented across ten tools that don't talk to each other, with a human manually bridging the gaps. The operator who can connect all of that into one system that detects, adapts, and acts — that's the most valuable person in the building.",
          },
          {
            headline:
              "Businesses don't need another tool configured. They need their marketing connected.",
            body: "Every company already has someone who set up their CRM. Their project management. Their analytics. And the business is still stuck — because none of those things bring in a single customer. What they don't have is someone who can connect their landing pages to their emails to their ads to their content into one system that self-corrects when something breaks. That's what a Solara Setup Operator does. You don't configure a tool. You connect a nervous system.",
          },
          {
            headline: "Get certified now. Get the clients later.",
            body: "In 12 months, businesses will be actively looking for people who can set up connected marketing systems. Not CRM admins. Not 'marketing ops' people who just manage tags and workflows. People who can wire an entire marketing stack into one intelligent system. The operators who get certified now — who build the portfolio, earn the badge, and get listed in the directory — they'll have full pipelines while everyone else is still figuring out what this is.",
          },
        ]}
      />

      {/* ── Benefits grid ─────────────────────────────────────── */}
      <PartnerBenefitsGrid
        headline="Build a business around the skill every company is about to need."
        items={[
          {
            title: "Official directory listing",
            body: "Get listed in the Solara Operator Directory — the first place businesses look when they need someone to connect their marketing stack.",

          },
          {
            title: "Certification badges",
            body: "Earn Certified, Pro, Expert, or Elite status as you grow. Each badge signals to clients exactly where you stand in the operator ecosystem.",

          },
          {
            title: "Inbound client leads",
            body: "At the Expert tier and above, Solara routes inbound setup requests directly to you. You don't have to chase clients — they come to you.",

          },
          {
            title: "Cash bonuses",
            body: "Earn $1,000 at Pro, $2,500 at Expert, and $5,000 at Elite. Real money for real milestones — not points, not credits.",

          },
          {
            title: "Early feature access",
            body: "Pro operators and above get access to new Solara features before they're released publicly. Stay ahead of the market.",

          },
          {
            title: "Solara promotes you",
            body: "Elite operators are actively promoted by Solara — in content, in outreach, and to inbound leads. Your name becomes part of how we sell.",

          },
        ]}
      />

      {/* ── Tier ladder ───────────────────────────────────────── */}
      <TierLadder />

      {/* ── Process steps ─────────────────────────────────────── */}
      <PartnerProcessSteps
        steps={[
          {
            number: "01",
            label: "Apply",
            body: "Tell us about your background. 2 minutes.",
          },
          {
            number: "02",
            label: "Get certified",
            body: "Connect your first 3 clients' marketing into Solara. Submit proof. Earn your badge and directory listing.",
          },
          {
            number: "03",
            label: "Grow",
            body: "Every client you connect moves you up. More clients, more visibility, more leads sent your way, more money.",
          },
        ]}
      />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <PartnerFinalCta
        headline="CRM setup is commoditized. Connected marketing is the new high-value skill."
        subtext="The operators who get there first will have the clients. The rest will spend years catching up. Apply now."
        primaryCta={{
          label: "Become a Setup Operator",
          href: getCtaHref("setup-operators", "primary"),
        }}
      />
    </PartnerPageShell>
  );
}

/* ── Tier Ladder sub-component ─────────────────────────────── */

function TierLadder() {
  return (
    <section className="border-t border-gray-100 bg-[#fafafa] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section headline */}
        <h2
          className="text-ink-900"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "0.75rem",
            maxWidth: "28ch",
          }}
        >
          Four tiers. Every client moves you up.
        </h2>
        <p
          className="text-neutral-500"
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            lineHeight: 1.65,
            fontFamily: "var(--font-body)",
            maxWidth: "52ch",
            marginBottom: "3.5rem",
          }}
        >
          Certification is application-based. Once accepted, your tier is
          determined entirely by the number of clients you connect.
        </p>

        {/* Tier cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col rounded-2xl bg-white p-7 transition-shadow hover:shadow-md"
              style={{
                border: tier.highlight
                  ? "1px solid #d8b4fe"
                  : "1px solid #eaecf0",
              }}
            >
              {tier.highlight && (
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.05) 0%, transparent 70%)",
                  }}
                />
              )}

              {/* Icon + tier name */}
              <div className="relative mb-4 flex items-center gap-2.5">
                {tier.icon}
                <span
                  className="text-ink-900"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {tier.name}
                </span>
              </div>

              {/* Threshold */}
              <p
                className="relative mb-5 text-neutral-400"
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.04em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {tier.threshold}
              </p>

              {/* Perks */}
              <ul className="relative flex flex-col gap-2">
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2 text-neutral-500"
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <TrendingUp
                      size={13}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-purple-400"
                    />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ sub-component ─────────────────────────────────────── */

function FaqSection() {
  return (
    <section className="border-t border-gray-100 bg-white px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <h2
          className="text-ink-900"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "3.5rem",
          }}
        >
          Common questions
        </h2>

        <div className="flex flex-col divide-y divide-gray-100">
          {FAQS.map((faq) => (
            <div key={faq.question} className="py-8">
              <h3
                className="text-ink-900"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.3,
                  marginBottom: "0.75rem",
                }}
              >
                {faq.question}
              </h3>
              <p
                className="text-neutral-500"
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  fontFamily: "var(--font-body)",
                  maxWidth: "60ch",
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
