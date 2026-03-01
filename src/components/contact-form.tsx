"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "general",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you soon.");
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-16"
        >
          <div className="h-16 w-16 rounded-full bg-bg-inverse flex items-center justify-center text-text-inverse text-2xl mb-6">
            &#10003;
          </div>
          <h3 className="font-heading font-bold text-2xl mb-3">Message Sent</h3>
          <p className="text-text-secondary text-sm max-w-sm">
            Thanks for reaching out. We typically respond within 24 hours. In the meantime, feel free to explore our blog.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 text-text-primary text-base outline-none focus:border-text-primary transition-colors placeholder:text-text-tertiary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 text-text-primary text-base outline-none focus:border-text-primary transition-colors placeholder:text-text-tertiary"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
                Company
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 text-text-primary text-base outline-none focus:border-text-primary transition-colors placeholder:text-text-tertiary"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
                Subject
              </label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 text-text-primary text-base outline-none focus:border-text-primary transition-colors appearance-none cursor-pointer"
              >
                <option value="general">General Inquiry</option>
                <option value="demo">Book a Demo</option>
                <option value="pricing">Pricing Question</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-border pb-3 text-text-primary text-base outline-none focus:border-text-primary transition-colors resize-none placeholder:text-text-tertiary"
              placeholder="Tell us about your marketing goals..."
            />
          </div>

          <button type="submit" className="btn-primary mt-2">
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
