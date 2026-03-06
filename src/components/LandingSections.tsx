"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Case Study", href: "/case-study" },
  { label: "Pricing", href: "/pricing" },
  { label: "Articles", href: "/articles" },
];

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div
        className={`pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border border-line bg-white/82 shadow-[0_12px_35px_-28px_rgba(23,19,14,0.45)] backdrop-blur-xl"
            : "border border-transparent bg-transparent shadow-none backdrop-blur-0"
        }`}
      >
        <Link href="/" className="inline-flex items-center">
          <Image src="/Logo.svg" alt="Solara AI" width={126} height={27} className="h-auto w-[126px]" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.74rem] uppercase tracking-[0.18em] text-ink-900/80 transition-colors duration-300 hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://calendly.com/ilay-mor-solaraai/30min?utm_source=website&utm_medium=nav_cta&utm_campaign=book-a-call&month=2026-03"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-ink-900 transition-colors duration-300 hover:bg-black hover:text-white ${
            isScrolled ? "border border-line" : "border border-black/20"
          }`}
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
