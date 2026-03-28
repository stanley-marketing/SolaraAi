"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PhoneInput, { isValidPhoneNumber, type Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { PhoneCountrySelect } from "@/components/PhoneCountrySelect";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────
   ANIMATION HELPERS
   ────────────────────────────────────────────── */

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const BULLETS = [
  {
    bold: "Full-stack marketing",
    rest: "Ads, content, SEO, social handled end-to-end",
  },
  {
    bold: "On-brand content",
    rest: "Beautiful creatives built from your brand guidelines",
  },
  {
    bold: "Weekly optimization",
    rest: "Performance data feeds back into strategy",
  },
  {
    bold: "No long-term contracts",
    rest: "Pause or cancel anytime",
  },
];

const AVATARS = [
  "/avatars/avatar-1.jpg",
  "/avatars/avatar-2.jpg",
  "/avatars/avatar-3.jpg",
  "/avatars/avatar-4.jpg",
  "/avatars/avatar-5.jpg",
];

const LOCATION_OPTIONS = [
  { value: "", label: "Select a location" },
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Other", label: "Other" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Select your budget" },
  { value: "0-1000", label: "$0 – $1,000" },
  { value: "1000-5000", label: "$1,000 – $5,000" },
  { value: "5000-10000", label: "$5,000 – $10,000" },
  { value: "10000+", label: "$10,000+" },
];

/* ──────────────────────────────────────────────
   TYPES
   ────────────────────────────────────────────── */

interface FormData {
  fullName: string;
  email: string;
  website: string;
  phone: string;
  location: string;
  budget: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  fullName: "",
  email: "",
  website: "",
  phone: "",
  location: "",
  budget: "",
  message: "",
};

/* ──────────────────────────────────────────────
   REQUIRED INDICATOR
   ────────────────────────────────────────────── */

function RequiredDot() {
  return (
    <span className="ml-0.5 text-red-400" aria-hidden="true">
      *
    </span>
  );
}

/* ──────────────────────────────────────────────
   CONTACT HERO
   ────────────────────────────────────────────── */

export function ContactHero() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [loadedAt] = useState(() => Date.now());
  const [detectedCountry, setDetectedCountry] = useState<Country>("US");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (data?.country_code) {
          setDetectedCountry(data.country_code as Country);
        }
      })
      .catch(() => {});
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateWebsite(url: string): boolean {
    if (!url) return true;
    return /^https?:\/\/.+\..+/.test(url);
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "email" && value && !validateEmail(value)) {
      setFieldErrors((prev) => ({ ...prev, email: "Please enter a valid email address" }));
    } else if (name === "website" && value && !validateWebsite(value)) {
      setFieldErrors((prev) => ({ ...prev, website: "Please enter a valid URL (e.g. https://company.com)" }));
    } else {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errors: Partial<Record<keyof FormData, string>> = {};
    if (!validateEmail(form.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (form.website && !validateWebsite(form.website)) {
      errors.website = "Please enter a valid URL (e.g. https://company.com)";
    }
    if (!form.phone || !isValidPhoneNumber(form.phone)) {
      errors.phone = "Please enter a valid phone number with country code";
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setSubmitting(true);
    setError("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _hp: honeypot,
          _t: loadedAt,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", {
          content_name: "Contact Form",
          content_category: "lead",
        });
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-colors duration-150 focus:border-gray-400 focus:outline-none focus:ring-0";

  const labelBase = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <section className="bg-white px-6 pt-28 pb-20 sm:px-10 sm:pt-32 sm:pb-24" style={{ fontFamily: "var(--font-blog)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ── LEFT COLUMN ── */}
          <div className="order-2 lg:order-1">
            <FadeUp delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
                Get Started
              </p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1
                className="mt-5 leading-[1.08] tracking-tight text-gray-900"
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  fontFamily: "var(--font-blog)",
                  fontWeight: 300,
                }}
              >
                Your AI marketing team
                <br className="hidden sm:block" /> starts here.
              </h1>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-gray-500">
                Get a dedicated AI-powered team to run your ads, content, SEO,
                and social — so you can focus on growing your business.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <ul className="mt-8 space-y-4">
                {BULLETS.map((item) => (
                  <li key={item.bold} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900">
                      <Check
                        size={11}
                        strokeWidth={2.5}
                        className="text-white"
                      />
                    </span>
                    <span className="text-sm leading-snug text-gray-600">
                      <span className="font-medium text-gray-800">
                        {item.bold}
                      </span>{" "}
                      — {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.26}>
              <p className="mt-9 text-sm text-gray-400">
                Prefer email?{" "}
                <a
                  href="mailto:contact@solaraai.com"
                  className="text-gray-600 underline underline-offset-2 transition-colors duration-150 hover:text-gray-900"
                >
                  contact@solaraai.com
                </a>
              </p>
            </FadeUp>

            <FadeUp delay={0.32}>
              <div className="mt-10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {AVATARS.map((src, i) => (
                    <div
                      key={src}
                      className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white"
                      style={{ zIndex: AVATARS.length - i }}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Trusted by{" "}
                  <span className="font-semibold text-gray-800">2,000+</span>{" "}
                  growing businesses
                </p>
              </div>
            </FadeUp>
          </div>

          {/* ── RIGHT COLUMN — FORM CARD ── */}
          <FadeUp delay={0.1} className="order-1 lg:order-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900"
                  >
                    <Check size={22} strokeWidth={2} className="text-white" />
                  </motion.div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Thanks! We&apos;ll be in touch shortly.
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    A member of our team will reach out within one business day.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="mb-7 text-xl font-semibold text-gray-900">
                    Tell us about yourself.
                  </h2>

                   <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div aria-hidden="true" className="absolute -left-[9999px] -top-[9999px]">
                      <input
                        type="text"
                        name="company_url"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="fullName" className={labelBase}>
                        Full Name
                        <RequiredDot />
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        aria-required="true"
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={form.fullName}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelBase}>
                        Company Email
                        <RequiredDot />
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cn(inputBase, fieldErrors.email && "border-red-300 bg-red-50")}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1.5 text-xs text-red-500">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="website" className={labelBase}>
                          Company Website{" "}
                          <span className="font-normal text-gray-400">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="website"
                          name="website"
                          type="url"
                          autoComplete="url"
                          placeholder="https://company.com"
                          value={form.website}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={cn(inputBase, fieldErrors.website && "border-red-300 bg-red-50")}
                        />
                        {fieldErrors.website && (
                          <p className="mt-1.5 text-xs text-red-500">{fieldErrors.website}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelBase}>
                          Phone Number
                          <RequiredDot />
                        </label>
                        <PhoneInput
                          id="phone"
                          international
                          countryCallingCodeEditable={false}
                          defaultCountry={detectedCountry}
                          countrySelectComponent={PhoneCountrySelect}
                          placeholder="Enter phone number"
                          value={form.phone}
                          onChange={(val) => {
                            setForm((prev) => ({ ...prev, phone: val || "" }));
                            if (fieldErrors.phone && val && isValidPhoneNumber(val)) {
                              setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                            }
                          }}
                          onBlur={() => {
                            if (form.phone && !isValidPhoneNumber(form.phone)) {
                              setFieldErrors((prev) => ({ ...prev, phone: "Please enter a valid phone number" }));
                            }
                          }}
                          className={cn(
                            "phone-input-container",
                            fieldErrors.phone && "phone-input-error"
                          )}
                        />
                        {fieldErrors.phone && (
                          <p className="mt-1.5 text-xs text-red-500">{fieldErrors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="location" className={labelBase}>
                        Where is your company located?
                        <RequiredDot />
                      </label>
                      <div className="relative">
                        <select
                          id="location"
                          name="location"
                          required
                          aria-required="true"
                          value={form.location}
                          onChange={handleChange}
                          className={cn(
                            inputBase,
                            "cursor-pointer appearance-none pr-10",
                            form.location === ""
                              ? "text-gray-400"
                              : "text-[#111]"
                          )}
                        >
                          {LOCATION_OPTIONS.map((opt) => (
                            <option
                              key={opt.value}
                              value={opt.value}
                              disabled={opt.value === ""}
                              style={{
                                color: opt.value === "" ? "#9ca3af" : "#111",
                              }}
                            >
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className={labelBase}>
                        Monthly Marketing Budget
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={cn(
                            inputBase,
                            "cursor-pointer appearance-none pr-10",
                            form.budget === ""
                              ? "text-gray-400"
                              : "text-[#111]"
                          )}
                        >
                          {BUDGET_OPTIONS.map((opt) => (
                            <option
                              key={opt.value}
                              value={opt.value}
                              disabled={opt.value === ""}
                              style={{
                                color: opt.value === "" ? "#9ca3af" : "#111",
                              }}
                            >
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelBase}>
                        How can we help you grow?
                        <RequiredDot />
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        aria-required="true"
                        rows={4}
                        placeholder="Tell us about your business, goals, and current marketing challenges..."
                        value={form.message}
                        onChange={handleChange}
                        className={cn(inputBase, "resize-none")}
                      />
                    </div>

                    {error && (
                      <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className={cn(
                        "flex w-full items-center justify-center rounded-full py-3 text-sm font-medium tracking-[1px] text-white transition-colors duration-200",
                        submitting
                          ? "cursor-not-allowed bg-gray-400"
                          : "bg-black hover:bg-gray-700 active:bg-gray-950"
                      )}
                    >
                      {submitting ? (
                        <>
                          <Loader2
                            size={16}
                            className="mr-2 animate-spin"
                            aria-hidden="true"
                          />
                          Sending…
                        </>
                      ) : (
                        "Book a Free Call"
                      )}
                    </button>

                    <p className="text-center text-xs leading-relaxed text-gray-400">
                      By submitting, you agree to our{" "}
                      <Link
                        href="/terms-of-service"
                        className="underline underline-offset-2 transition-colors duration-150 hover:text-gray-600"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        className="underline underline-offset-2 transition-colors duration-150 hover:text-gray-600"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
