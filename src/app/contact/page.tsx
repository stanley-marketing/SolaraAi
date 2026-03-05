import { TopNav } from "@/components/LandingSections";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <TopNav />
      <section className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 pt-24 text-center">
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-ink-700">
          Contact page placeholder
        </p>
        <button
          type="button"
          className="inline-flex items-center rounded-full bg-black px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white"
        >
          Book a call
        </button>
      </section>
    </main>
  );
}
