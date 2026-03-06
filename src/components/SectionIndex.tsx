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
    <section className="flex w-full items-center justify-center bg-white py-24 px-6">
      <div className="overflow-hidden rounded-[1.8rem] border border-black/6 bg-[linear-gradient(180deg,#040404_0%,#0b0b0b_100%)] p-5 shadow-[0_28px_60px_-44px_rgba(0,0,0,0.75)] w-full max-w-[360px]">
        <div className="mb-5 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-white/42">
          Section index
        </div>
        <div className="space-y-1">
          {items.map((item, index) => {
            const isFirst = index === 0;
            return (
              <div key={item.id}>
                <div className="border-t border-white/12 pt-3.5">
                  <div className="flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.18em]">
                    <span className={isFirst ? "text-white" : "text-white/34"}>
                      {item.id}
                    </span>
                    <span className={isFirst ? "text-white" : "text-white/58"}>
                      {item.label}
                    </span>
                  </div>
                  <div className="mt-3 h-px w-full bg-white/10">
                    <div className={`h-px bg-white ${isFirst ? "w-[38%]" : "w-0"}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
