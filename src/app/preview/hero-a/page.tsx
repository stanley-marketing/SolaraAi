import { ChannelWhisper } from "@/components/homepage/ChannelWhisper";
import { HeroSection } from "@/components/homepage/HeroSection";
import { MessagesScriptedHeroMockup } from "@/components/homepage/MessagesMockup";

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
