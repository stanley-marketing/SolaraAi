"use client";

import { type ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WhatsAppScriptedHeroMockup } from "@/components/homepage/WhatsAppMockupScripted";

const AVATAR_SRCS = [
  "/avatars/avatar-1.jpg",
  "/avatars/avatar-2.jpg",
  "/avatars/avatar-3.jpg",
  "/avatars/avatar-4.jpg",
  "/avatars/avatar-5.jpg",
];

function PreSeedPill() {
  return (
    <div className="mb-5">
      <div
        className="shimmer-pill"
        style={{
          position: "relative",
          overflow: "hidden",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: "14px",
          fontWeight: 500,
          color: "#374151",
          borderRadius: 999,
          padding: "7px 16px",
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(8px)",
          border: "1px solid #e5e7eb",
        }}
      >
        Backed by $1.2M in pre-seed funding
        <ArrowRight size={13} color="#9ca3af" />
      </div>
    </div>
  );
}

function AvatarPile() {
  return (
    <div className="mt-7 flex items-center gap-3">
      <div className="flex -space-x-2">
        {AVATAR_SRCS.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className="h-9 w-9 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
      <p className="text-sm">
        <span className="font-semibold text-ink-900">2,000+</span>
        <span className="text-ink-700/60"> businesses already growing</span>
      </p>
    </div>
  );
}

function ScanUrlForm() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed || !trimmed.includes(".")) {
      setError("Please enter a website URL.");
      return;
    }
    router.push(`/contact?url=${encodeURIComponent(trimmed)}&source=scan`);
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
    if (error) setError(null);
  }

  return (
    <div className="mt-9 w-full max-w-[520px]">
      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50">
        Start free
      </p>
      <label htmlFor="hero-url" className="sr-only">
        Your website URL
      </label>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex items-center rounded-full border border-line bg-white p-1.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)]"
      >
        <input
          id="hero-url"
          type="url"
          value={url}
          onChange={handleChange}
          placeholder="your-business.com"
          autoComplete="url"
          inputMode="url"
          aria-label="Your website URL"
          aria-describedby={error ? "hero-url-error" : undefined}
          aria-invalid={error ? true : undefined}
          className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-ink-900 outline-none placeholder:text-ink-700/40"
          style={{ fontFamily: "var(--font-body)" }}
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium tracking-[0.02em] text-white transition-colors hover:bg-gray-700"
        >
          <span className="hidden sm:inline">Scan my website</span>
          <span className="sm:hidden">Scan</span>
          <ArrowRight size={16} />
        </button>
      </form>
      {error && (
        <p id="hero-url-error" role="alert" className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function HeroSection() {
  return (
    <AuroraBackground
      className="w-full lg:min-h-[88vh] pt-28 pb-16 sm:py-28 lg:py-32 px-6 sm:px-10"
      showRadialGradient={true}
    >
      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-[55fr_45fr] lg:gap-12 xl:gap-16 lg:items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <PreSeedPill />

            <h1
              className="max-w-[650px] leading-[1.05] tracking-[-0.02em] text-ink-900"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontFamily: "var(--font-display)",
                fontWeight: 300,
              }}
            >
              You didn&apos;t build this business to be a secret.
            </h1>

            <p
              className="mt-6 max-w-[540px] text-ink-700/70"
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                lineHeight: 1.6,
              }}
            >
              Solara is the first autonomous social media team. Strategy,
              scripts, editing, publishing — all through WhatsApp. 5 minutes a
              day replaces a $2,000/month team.
            </p>

            <ScanUrlForm />

            <p className="mt-3 text-xs text-ink-700/50">
              No credit card. No dashboard to learn. Just your URL.
            </p>

            <AvatarPile />
          </div>

          <div className="mt-14 flex items-center justify-center lg:mt-0">
            <div className="origin-center scale-[0.84] md:scale-100 lg:-rotate-2">
              <WhatsAppScriptedHeroMockup phoneWidth={320} />
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
