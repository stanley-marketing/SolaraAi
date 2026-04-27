"use client";

import {
  BODY,
  Bridge,
  DISPLAY,
  Eyebrow,
  FlickeringGrid,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_MUTED,
  InvoiceCard,
  MarqueeKeyframes,
  PreviewFooter,
  ROSE_DEEP,
  SHELL,
  ScrollReveal,
  ToolsGrid,
  ToolsMarquee,
  Verdict,
} from "@/components/homepage/teardown-parts";

function NumberedMarker({ number }: { number: string }) {
  return (
    <div
      className="inline-flex h-8 w-8 items-center justify-center rounded-full"
      style={{
        background: INK,
        color: "#fff",
        fontFamily: BODY,
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
      }}
    >
      {number}
    </div>
  );
}

function ExhibitRow({
  number,
  label,
  title,
  prose,
  arithmetic,
  children,
  flip = false,
}: {
  number: string;
  label: string;
  title: string;
  prose: React.ReactNode;
  arithmetic: React.ReactNode;
  children: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <ScrollReveal margin="-15%">
      <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div className={flip ? "lg:order-2" : undefined}>
          <div className="flex items-center gap-4">
            <NumberedMarker number={number} />
            <Eyebrow color={ROSE_DEEP}>{label}</Eyebrow>
          </div>

          <h3
            className="mt-5 max-w-[460px]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.55rem, 2.8vw, 2.15rem)",
              fontWeight: 600,
              letterSpacing: "-0.028em",
              lineHeight: 1.1,
              color: INK,
            }}
          >
            {title}
          </h3>

          <p
            className="mt-4 max-w-[440px]"
            style={{
              fontFamily: BODY,
              fontSize: "0.96rem",
              lineHeight: 1.7,
              color: INK_MUTED,
            }}
          >
            {prose}
          </p>

          <div
            className="mt-6 max-w-[440px] border-l-2 pl-4"
            style={{ borderColor: ROSE_DEEP }}
          >
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                fontWeight: 600,
                letterSpacing: "-0.018em",
                lineHeight: 1.4,
                color: INK,
              }}
            >
              {arithmetic}
            </p>
          </div>
        </div>

        <div className={flip ? "lg:order-1" : undefined}>{children}</div>
      </div>
    </ScrollReveal>
  );
}

export default function SectionTwoV6Preview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <MarqueeKeyframes />

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FlickeringGrid />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 35%, transparent 15%, rgba(248,247,244,0.92) 75%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-5xl px-5 pt-24 pb-6 sm:px-8 sm:pt-28 sm:pb-8">
          <p
            className="mb-8"
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: ROSE_DEEP,
            }}
          >
            02 &middot; The teardown
          </p>

          <h2
            className="leading-[0.98] tracking-[-0.04em]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 700,
              color: INK,
              maxWidth: "20ch",
            }}
          >
            You&rsquo;ve tried both. Both make you{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: ROSE_DEEP,
              }}
            >
              the bottleneck.
            </span>
          </h2>

          <p
            className="mt-6 max-w-[60ch]"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              lineHeight: 1.6,
              color: INK_MUTED,
            }}
          >
            There&rsquo;s the agency that bills you to direct you. And the
            toolkit that promises autopilot but can&rsquo;t decide what to
            post. Here&rsquo;s what each one actually is.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 sm:pb-20">
          <div
            className="relative"
            style={{
              borderLeft: `1px solid ${HAIRLINE_HEAVY}`,
              paddingLeft: "clamp(20px, 4vw, 40px)",
            }}
          >
            <ExhibitRow
              number="01"
              label="Exhibit A &middot; The agency"
              title="$2,000/month for instructions."
              prose={
                <>
                  On-site or on Zoom, they arrive with one thing: a list of
                  things to film this week. You bring the clips. They process
                  everything later on a laptop without you &mdash; captions,
                  edits, schedule, report.
                </>
              }
              arithmetic={
                <>
                  $24,000 a year. For someone to hand you a shot list.
                </>
              }
            >
              <InvoiceCard compact staticLines />
            </ExhibitRow>

            <div
              className="my-2"
              style={{ borderTop: `1px dashed ${HAIRLINE}` }}
            />

            <ExhibitRow
              number="02"
              label="Exhibit B &middot; The toolkit"
              title="$150&ndash;600/month for auto-complete."
              flip
              prose={
                <>
                  A scheduler doesn&rsquo;t know what to schedule. A caption
                  tool doesn&rsquo;t know your customer. A trend feed
                  doesn&rsquo;t know what works for{" "}
                  <strong style={{ color: INK, fontWeight: 600 }}>
                    your
                  </strong>{" "}
                  business. Auto-complete on a blank page is still a blank
                  page.
                </>
              }
              arithmetic={
                <>
                  5 subscriptions. 3 logins. Still no posts.
                </>
              }
            >
              <ToolsGrid compact columns={2} />
            </ExhibitRow>
          </div>

          <ScrollReveal delay={0.15} margin="-10%">
            <div className="mt-12">
              <ToolsMarquee />
            </div>
          </ScrollReveal>
        </div>

        <div
          className="border-t"
          style={{ borderColor: HAIRLINE, borderTopWidth: 2 }}
        >
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <Verdict compact />
          </div>
        </div>

        <div className="border-t" style={{ borderColor: HAIRLINE }}>
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <Bridge compact />
          </div>
        </div>
      </section>

      <PreviewFooter
        label="Section 02 (v6) · The teardown — research-informed"
        description="Identity-first headline (Toast pattern: 'You've tried both. Both make you the bottleneck.') with italic-navy 'the bottleneck' accent matching the bridge section's editorial style. Two numbered exhibits in case-file structure (Exhibit A: agency, Exhibit B: toolkit) with continuous left-rule threading. Each exhibit pairs a prose block with an artifact (InvoiceCard, ToolsGrid) and a navy-bordered arithmetic moment ('$24,000 a year' / '5 subscriptions, still no posts') that translates the abstract claim into concrete pain (Owner.com pattern). ToolsMarquee runs below to widen the toolkit landscape. Verdict closes with the case-file finding (Option A: phone-holder, Option B: blank page). Bridge transitions to Solara as the third path. Canonical SHELL background with FlickeringGrid + radial mask matching the bridge section. Mobile-first: ExhibitRow grid collapses to single column at <lg, gap and padding tighten via clamp, arithmetic stays in left-bordered card on every viewport. Two italic-navy accents total."
      />
    </main>
  );
}
