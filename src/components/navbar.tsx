"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
        mobileOpen && "bg-bg-primary/95 backdrop-blur-xl"
      )}
    >
      <nav className="mx-auto flex max-w-[var(--content-max)] items-center justify-between px-6 md:px-8 h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-bg-inverse flex items-center justify-center">
              <span className="text-text-inverse font-heading font-bold text-sm">S</span>
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-text-primary">
              Solara
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3.5 py-2 text-[14.5px] font-medium transition-colors rounded-full",
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-bg-secondary rounded-full -z-10"
                    layoutId="navbar-active"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://app.solaraai.com"
            className="text-[14.5px] font-medium text-text-secondary hover:text-text-primary transition-colors px-3 py-2"
          >
            Log in
          </Link>
          <Link href="/contact" className="btn-primary !h-10 !px-5 !text-[14px]">
            Book a Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-5 h-[1.5px] bg-text-primary origin-center"
            animate={mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-[1.5px] bg-text-primary"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-5 h-[1.5px] bg-text-primary origin-center"
            animate={mobileOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-bg-primary/95 backdrop-blur-xl border-t border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 text-[15px] font-medium rounded-xl transition-colors",
                      pathname === link.href
                        ? "text-text-primary bg-bg-secondary"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <Link
                  href="https://app.solaraai.com"
                  className="btn-secondary text-center !h-11"
                >
                  Log in
                </Link>
                <Link href="/contact" className="btn-primary text-center !h-11">
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
