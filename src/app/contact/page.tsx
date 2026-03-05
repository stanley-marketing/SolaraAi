import { TopNav } from "@/components/LandingSections";

export default function ContactPage() {
  return (
    <main className="ds-page">
      <TopNav />
      <section className="ds-placeholder flex-col gap-5">
        <p className="ds-placeholder-label">
          Contact page placeholder
        </p>
        <button
          type="button"
          className="ds-btn-primary"
        >
          Book a call
        </button>
      </section>
    </main>
  );
}
