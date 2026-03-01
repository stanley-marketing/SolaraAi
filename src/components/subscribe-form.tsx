"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface SubscribeFormProps {
  inverted?: boolean;
  className?: string;
}

export function SubscribeForm({ inverted = false, className = "" }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    toast.success("You're in! Welcome to Solara.");
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center text-lg ${
                inverted ? "bg-bg-primary text-text-primary" : "bg-bg-inverse text-text-inverse"
              }`}
            >
              &#10003;
            </div>
            <p
              className={`text-sm font-medium ${
                inverted ? "text-text-inverse" : "text-text-primary"
              }`}
            >
              Welcome aboard! Check your inbox.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="flex gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className={`flex-1 h-12 px-4 rounded-full text-sm outline-none transition-all ${
                inverted
                  ? "bg-white/10 text-text-inverse placeholder:text-text-inverse/50 border border-white/20 focus:border-white/40"
                  : "bg-bg-secondary text-text-primary placeholder:text-text-tertiary border border-border focus:border-border-strong"
              }`}
            />
            <button
              type="submit"
              className={`h-12 px-6 rounded-full text-sm font-medium transition-all shrink-0 ${
                inverted
                  ? "bg-bg-primary text-text-primary hover:bg-bg-secondary"
                  : "bg-bg-inverse text-text-inverse hover:bg-accent-hover"
              }`}
            >
              Subscribe
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
