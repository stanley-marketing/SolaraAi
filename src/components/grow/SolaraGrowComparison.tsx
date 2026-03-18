import { Check, X } from "lucide-react";
import { GROW_CONTENT } from "./content";
import type { ComparisonValue } from "./content";

function renderValue(value: ComparisonValue, isGrow?: boolean) {
  if (value === "check") {
    return <Check className="inline-block align-middle" style={{ color: "#22c55e", width: isGrow ? 22 : 20, height: isGrow ? 22 : 20 }} />;
  }
  if (value === "cross") {
    return <X className="inline-block align-middle w-5 h-5" style={{ color: "#d0d5dd" }} />;
  }
  return (
    <span
      className="inline-block align-middle"
      style={{ fontSize: "0.85rem", color: isGrow ? "#111111" : "#667085", fontWeight: isGrow ? 600 : 500 }}
    >
      {value}
    </span>
  );
}

export function SolaraGrowComparison() {
  const { headline, columns, rows } = GROW_CONTENT.comparison;

  return (
    <section className="px-6 py-28 sm:px-10" style={{ background: "#fafafa" }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
            fontWeight: 400,
            color: "#111111",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            margin: "0 0 3rem",
          }}
        >
          {headline}
        </h2>

        <div className="hidden md:block overflow-hidden rounded-xl" style={{ border: "1px solid #e5e7eb", background: "#ffffff" }}>
          <table className="w-full" style={{ borderCollapse: "collapse", tableLayout: "fixed" }}>
            <thead>
              <tr style={{ background: "#fafafa" }}>
                <th style={{ width: "34%", padding: "18px 24px", textAlign: "left", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#98a2b3", borderBottom: "1px solid #e5e7eb" }}>
                  Feature
                </th>
                <th style={{ width: "22%", padding: "18px 20px", textAlign: "center", fontSize: "0.85rem", fontWeight: 600, color: "#667085", borderBottom: "1px solid #e5e7eb" }}>
                  {columns.diy}
                </th>
                <th style={{ width: "22%", padding: "18px 20px", textAlign: "center", fontSize: "0.85rem", fontWeight: 600, color: "#667085", borderBottom: "1px solid #e5e7eb" }}>
                  {columns.agency}
                </th>
                <th style={{ width: "22%", padding: "18px 20px", textAlign: "center", borderBottom: "1px solid #e5e7eb" }}>
                  <span style={{ display: "inline-block", background: "#040404", color: "#ffffff", fontSize: "0.85rem", fontWeight: 600, padding: "6px 20px", borderRadius: 999 }}>
                    {columns.solara}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const isEven = i % 2 === 0;
                return (
                  <tr
                    key={row.feature}
                    className="transition-colors duration-150 hover:!bg-[#f5f6f8]"
                    style={{ background: isEven ? "#ffffff" : "#fafbfc" }}
                  >
                    <td style={{ padding: "16px 24px", fontSize: "0.9rem", fontWeight: 500, color: "#111111" }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center" }}>
                      {renderValue(row.diy)}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center" }}>
                      {renderValue(row.agency)}
                    </td>
                    <td style={{ padding: "16px 20px", textAlign: "center" }}>
                      {renderValue(row.solara, true)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-3">
          {rows.map((row) => (
            <div
              key={row.feature}
              className="rounded-xl p-4"
              style={{ border: "1px solid #eaecf0", background: "#ffffff" }}
            >
              <p className="font-medium text-sm mb-2" style={{ color: "#111111" }}>
                {row.feature}
              </p>
              <div className="flex gap-4 text-sm">
                <span style={{ color: "#667085" }}>
                  DIY: {renderValue(row.diy)}
                </span>
                <span className="font-medium" style={{ color: "#040404" }}>
                  Grow: {renderValue(row.solara, true)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
