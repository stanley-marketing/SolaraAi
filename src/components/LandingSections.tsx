"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners/agencies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
        style={{ opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s ease" }}
      >
        <div
          className={`pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 whitespace-nowrap ${
            isScrolled
              ? "border border-line bg-white/82 shadow-[0_12px_35px_-28px_rgba(23,19,14,0.45)] backdrop-blur-xl lg:w-[68%]"
              : "border border-transparent bg-transparent shadow-none"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="inline-flex items-center">
            <Image src="/Logo.svg" alt="Solara AI" width={126} height={27} className="h-auto w-[126px] lg:ml-0" style={{ marginLeft: "-2px" }} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[12px] uppercase tracking-[0.18em] text-ink-900/80 transition-colors duration-300 hover:text-ink-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Book a call — desktop only */}
            <a
            href="/contact"
            className="hidden items-center rounded-[999px] bg-black px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white transition-colors duration-200 hover:bg-gray-700 lg:inline-flex"
          >
            Book a call
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span className="block h-px w-5 bg-ink-900" />
              <span className="block h-px w-5 bg-ink-900" />
              <span className="block h-px w-5 bg-ink-900" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      <div
        className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Top bar — matches nav pill padding and logo size exactly */}
        <div className="flex shrink-0 items-center justify-between border-b border-line px-8 sm:px-12" style={{ height: "87px" }}>
          <Link href="/" onClick={close} className="inline-flex items-center">
            <Image src="/Logo.svg" alt="Solara AI" width={126} height={27} className="h-auto w-[126px]" style={{ marginLeft: "-1px" }} priority />
          </Link>
          <button
            onClick={close}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center text-ink-900"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-1 flex-col overflow-y-auto px-6">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="group flex items-center justify-between border-b border-line py-7"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.3s ease ${0.1 + i * 0.07}s, transform 0.3s ease ${0.1 + i * 0.07}s`,
              }}
            >
              <span
                className="text-[0.88rem] uppercase tracking-[0.24em] text-ink-900"
              >
                {item.label}
              </span>
              <svg
                className="h-3.5 w-3.5 text-ink-700/30 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 12 12" fill="none"
              >
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
        </nav>

        {/* Footer CTAs */}
        <div
          className="shrink-0 border-t border-line px-6 py-6 flex flex-col gap-2.5"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.3s ease 0.38s, transform 0.3s ease 0.38s",
          }}
        >
          <a
            href="/contact"
            onClick={close}
            className="flex w-full items-center justify-center rounded-xl bg-ink-900 px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition-opacity duration-200 hover:opacity-85"
          >
            Book a call
          </a>
          <a
            href="/contact"
            onClick={close}
            className="flex w-full items-center justify-center rounded-xl border border-line px-6 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink-900 transition-colors duration-200 hover:border-ink-900/30"
          >
            Start free trial
          </a>
        </div>
      </div>
    </>
  );
}
