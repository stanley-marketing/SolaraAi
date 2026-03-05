import { TopNav } from "@/components/LandingSections";

export default function ContentPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <TopNav />
      <section className="flex min-h-screen items-center justify-center px-6 pt-24 text-center">
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-ink-700">
          Content page placeholder
        </p>
      </section>
    </main>
  );
}
