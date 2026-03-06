"use client";

const items = [
  { id: "01", label: "Signal Map" },
  { id: "02", label: "Creative Engine" },
  { id: "03", label: "Channel Flow" },
  { id: "04", label: "Offer Match" },
  { id: "05", label: "AI Operations" },
  { id: "06", label: "Reporting" },
];

export function SectionIndex() {
  return (
    <div className="sticky top-24 z-40 w-fit px-6 py-4">
      <nav className="flex flex-col rounded-2xl border border-line bg-white/80 px-5 py-4 shadow-[0_2px_16px_-4px_rgba(17,17,17,0.08)] backdrop-blur-md">
        <div className="divide-y divide-line">
          {items.map((item, index) => (
            <button
              key={item.id}
              className={`flex w-full items-center gap-4 py-3 text-left transition-colors duration-150 ${
                index === 0 ? "" : "hover:opacity-100"
              }`}
            >
              <span
                className={`text-[0.62rem] tabular-nums tracking-[0.16em] ${
                  index === 0 ? "text-ink-900 font-medium" : "text-ink-700/40"
                }`}
              >
                {item.id}
              </span>
              <span
                className={`text-[0.68rem] uppercase tracking-[0.16em] whitespace-nowrap ${
                  index === 0 ? "text-ink-900 font-semibold" : "text-ink-700/50"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
