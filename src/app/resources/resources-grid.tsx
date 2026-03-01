"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tools, categories, type Category } from "@/data/tools";

export function ResourcesGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? tools
      : tools.filter((t) => t.category === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors"
          >
            {cat === activeCategory && (
              <motion.div
                className="absolute inset-0 bg-bg-inverse rounded-full"
                layoutId="resource-tab"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                cat === activeCategory ? "text-text-inverse" : "text-text-secondary"
              }`}
            >
              {cat}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((tool) => (
            <motion.a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="group block p-6 rounded-2xl border border-border bg-bg-primary hover:border-border-strong hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading font-semibold text-lg">{tool.name}</h3>
                <span className="text-xs font-medium text-text-tertiary bg-bg-secondary px-2.5 py-1 rounded-full shrink-0">
                  {tool.category}
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {tool.description}
              </p>
              <span className="text-xs font-medium text-text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Visit
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
