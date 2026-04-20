import { WhatsAppHeroMockup, WhatsAppMockup } from "@/components/homepage/WhatsAppMockup";
import {
  type ChatTurn,
  WhatsAppScriptedHeroMockup,
  WhatsAppScriptedMockup,
} from "@/components/homepage/WhatsAppMockupScripted";

const MIXED_CONTENT_SCRIPT: ChatTurn[] = [
  {
    id: "intro",
    direction: "incoming",
    content: "Morning! \u2615 Need 5 seconds today \u2014 film your espresso machine while it's running",
    time: "9:02",
  },
  {
    id: "ack",
    direction: "outgoing",
    content: "Done \uD83C\uDFA5",
    time: "9:14",
  },
  {
    id: "preview",
    direction: "incoming",
    content: "Edit's ready! \uD83C\uDFAC Approve to publish at 6 PM today?",
    time: "10:31",
    typingDurationMs: 1300,
  },
  {
    id: "approve",
    direction: "outgoing",
    content: "Send it \u2705",
    time: "10:32",
  },
  {
    id: "scheduled",
    direction: "incoming",
    content: "Scheduled. I'll have the next one ready Thursday.",
    time: "10:32",
  },
];

const LONG_OUTGOING_SCRIPT: ChatTurn[] = [
  {
    direction: "incoming",
    content: "What should we post next week?",
    time: "10:02",
  },
  {
    direction: "outgoing",
    content:
      "Let's do three posts \u2014 a behind-the-scenes of how we pull each shot, a thread on our 48-hour cold brew, and a short video of Tuesday's brunch rush. Space them Mon / Wed / Fri.",
    time: "10:03",
  },
  {
    direction: "incoming",
    content: "On it. Drafts ready tomorrow \uD83D\uDE4C",
    time: "10:03",
  },
];

export default function WhatsAppPreview() {
  return (
    <main className="min-h-screen bg-shell px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-24">
        <header className="text-center">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50">
            Hero visual preview
          </p>
          <h1
            className="text-ink-900"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            WhatsApp thread mockup
          </h1>
          <p className="mt-3 text-sm text-ink-700/60">
            Two flavors: scripted (animated, plays itself) + static (instant, fade-up).
          </p>
        </header>

        <div className="flex w-full flex-col items-center gap-6 rounded-2xl border border-line bg-white px-6 py-12 sm:px-10">
          <span className="rounded-full bg-ink-900 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white">
            Scripted &middot; animated &middot; loops
          </span>
          <p className="max-w-md text-center text-sm text-ink-700/60">
            Plays the conversation in real time. Solara types &middot; sends &middot; you typewrite into the
            input bar &middot; mic icon swaps to send &middot; bubble commits. Loops every ~2.4&thinsp;s after the
            last message.
          </p>
          <div className="flex flex-wrap items-start justify-center gap-12 pt-4">
            <div className="flex flex-col items-center gap-3">
              <span className="text-[0.6rem] uppercase tracking-[0.22em] text-ink-700/50">
                320px hero size
              </span>
              <WhatsAppScriptedHeroMockup phoneWidth={320} />
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-[0.6rem] uppercase tracking-[0.22em] text-ink-700/50">
                280px default
              </span>
              <WhatsAppScriptedHeroMockup phoneWidth={280} />
            </div>
          </div>
        </div>

        <section className="flex w-full flex-col items-center gap-6 border-t border-line pt-16">
          <span className="text-[0.65rem] uppercase tracking-[0.22em] text-ink-700/50">
            Scripted &middot; mixed content (5 messages, no loop)
          </span>
          <WhatsAppScriptedMockup
            phoneWidth={300}
            script={MIXED_CONTENT_SCRIPT}
            options={{ loop: false }}
          />
        </section>

        <section className="flex w-full flex-col items-center gap-6 border-t border-line pt-16">
          <span className="text-[0.65rem] uppercase tracking-[0.22em] text-ink-700/50">
            Scripted &middot; long outgoing (typewriter capped to 3.5s)
          </span>
          <WhatsAppScriptedMockup
            phoneWidth={300}
            script={LONG_OUTGOING_SCRIPT}
            options={{ loop: true, loopDelayMs: 3000 }}
          />
        </section>

        <section className="flex w-full flex-col items-center gap-6 border-t border-line pt-16">
          <span className="rounded-full bg-fog px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink-700">
            Static &middot; pre-rendered &middot; fade-up on mount
          </span>
          <p className="max-w-md text-center text-sm text-ink-700/60">
            Conversation already happened. Subtle stagger fade-up on mount, then sits still. Use for
            section visuals where motion would be distracting (Section 1 narrative, persona cards).
          </p>
          <div className="flex flex-wrap items-start justify-center gap-12 pt-4">
            <div className="flex flex-col items-center gap-3">
              <span className="text-[0.6rem] uppercase tracking-[0.22em] text-ink-700/50">
                320px (with post preview card)
              </span>
              <WhatsAppHeroMockup phoneWidth={320} />
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-[0.6rem] uppercase tracking-[0.22em] text-ink-700/50">
                280px (text-only custom)
              </span>
              <WhatsAppMockup
                phoneWidth={280}
                script={[
                  {
                    id: "a1",
                    direction: "incoming",
                    text: "Morning! \u2615 Your weekly content plan is ready \uD83D\uDCCB",
                    time: "9:02",
                  },
                  {
                    id: "a2",
                    direction: "incoming",
                    text: "5 posts queued for the week. Need a 5-second clip from you today \u2014 film your espresso machine running",
                    time: "9:02",
                  },
                  { id: "a3", direction: "outgoing", text: "On it \uD83D\uDC4D", time: "9:14" },
                  {
                    id: "a4",
                    direction: "incoming",
                    text: "Perfect. I'll send the edit for approval before lunch \u2728",
                    time: "9:14",
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
