import { WebGLShader } from "@/components/WebGLShader";
import { RotatingText } from "@/components/RotatingText";
import { TopNav } from "@/components/LandingSections";
import { HomeSections } from "@/components/HomeSections";
import Link from "next/link";

export default function Home() {
  return (
    <main className="ds-page">
      <TopNav />

      <section id="top" className="ds-hero">
        <WebGLShader />
        <h1 className="ds-hero-title relative z-10 max-w-6xl text-ink-900">
          The new era of marketing
        </h1>

        <div className="ds-hero-rotating relative z-10">
          <RotatingText />
        </div>

        <div className="ds-hero-actions relative z-10">
          <Link
            href="/contact"
            className="ds-btn-primary"
          >
            Start free trial
          </Link>
          <Link
            href="/product"
            className="ds-btn-secondary"
          >
            View demo
          </Link>
        </div>
      </section>

      <HomeSections />
    </main>
  );
}
