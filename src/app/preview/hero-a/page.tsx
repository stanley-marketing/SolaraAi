import { HeroSection } from "@/components/homepage/HeroSection";
import { MessagesScriptedHeroMockup } from "@/components/homepage/MessagesMockup";

function ChannelWhisper() {
  return (
    <div
      className="flex items-center gap-3"
      aria-label="Works with iMessage and WhatsApp"
    >
      <span
        style={{
          fontSize: "0.66rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(98,98,98,0.7)",
          fontWeight: 500,
        }}
      >
        Works with
      </span>
      <span className="flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: "#007AFF",
            boxShadow: "0 0 0 3px rgba(0,122,255,0.12)",
          }}
        />
        <span
          style={{
            fontSize: "0.72rem",
            color: "#1c1c1e",
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          iMessage
        </span>
      </span>
      <span
        aria-hidden="true"
        style={{ color: "#cdcdcd", fontSize: "0.7rem" }}
      >
        +
      </span>
      <span className="flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: "#25D366",
            boxShadow: "0 0 0 3px rgba(37,211,102,0.14)",
          }}
        />
        <span
          style={{
            fontSize: "0.72rem",
            color: "#1c1c1e",
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          WhatsApp
        </span>
      </span>
    </div>
  );
}

export default function HeroAPreview() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        mockup={
          <div className="origin-center scale-[0.84] md:scale-100 lg:-rotate-2">
            <MessagesScriptedHeroMockup phoneWidth={320} />
          </div>
        }
        whisperLine={<ChannelWhisper />}
      />
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Variation A &middot; Single iMessage mockup + whisper line
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          Hero shows iMessage only (US-default). Tiny "Works with iMessage +
          WhatsApp" line below the phone plants the dual-channel seed without
          adding visual weight or competing with the CTA.
        </p>
      </div>
    </main>
  );
}
