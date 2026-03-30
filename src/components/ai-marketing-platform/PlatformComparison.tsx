import { Check, X } from "lucide-react";
import { PLATFORM_CONTENT } from "./content";
import type { ComparisonValue } from "./content";

function renderValue(value: ComparisonValue, isSolara?: boolean) {
  if (value === "check") {
    return (
      <Check
        className="inline-block align-middle"
        style={{
          color: "#22c55e",
          width: isSolara ? 22 : 20,
          height: isSolara ? 22 : 20,
        }}
      />
    );
  }
  if (value === "cross") {
    return (
      <X
        className="inline-block align-middle"
        style={{ color: "#d0d5dd", width: 20, height: 20 }}
      />
    );
  }
  return (
    <span
      className="inline-block align-middle"
      style={{
        fontSize: "0.83rem",
        color: isSolara ? "#111111" : "#667085",
        fontWeight: isSolara ? 600 : 500,
      }}
    >
      {value}
    </span>
  );
}

export function PlatformComparison() {
  const { headline, columns, rows } = PLATFORM_CONTENT.comparison;

  return (
    <section className="px-6 py-28 sm:px-10" style={{ background: "#fafafa" }}>
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-900/35">
          Platform comparison
        </p>
        <h2
          className="mb-12 text-center"
          style={{
            fontFamily: "var(--font-display-playfair)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
            fontWeight: 400,
            color: "#111111",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          {headline}
        </h2>

        <div
          className="hidden overflow-hidden rounded-xl md:block"
          style={{ border: "1px solid #e5e7eb", background: "#ffffff" }}
        >
          <table
            className="w-full"
            style={{ borderCollapse: "collapse", tableLayout: "fixed" }}
          >
            <thead>
              <tr style={{ background: "#fafafa" }}>
                <th
                  style={{
                    width: "32%",
                    padding: "18px 24px",
                    textAlign: "left",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#98a2b3",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    width: "23%",
                    padding: "18px 20px",
                    textAlign: "center",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#667085",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  {columns.diy}
                </th>
                <th
                  style={{
                    width: "23%",
                    padding: "18px 20px",
                    textAlign: "center",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#667085",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  {columns.agency}
                </th>
                <th
                  style={{
                    width: "22%",
                    padding: "18px 20px",
                    textAlign: "center",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <img
                    src="/images/solara-logo-black.png"
                    alt="Solara AI"
                    style={{ height: 22, width: "auto", display: "inline-block" }}
                  />
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
                    <td
                      style={{
                        padding: "16px 24px",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "#111111",
                      }}
                    >
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

        <div className="space-y-3 md:hidden">
          {rows.map((row) => (
            <div
              key={row.feature}
              className="rounded-xl p-4"
              style={{ border: "1px solid #eaecf0", background: "#ffffff" }}
            >
              <p
                className="mb-2 text-sm font-medium"
                style={{ color: "#111111" }}
              >
                {row.feature}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span style={{ color: "#667085" }}>
                  DIY: {renderValue(row.diy)}
                </span>
                <span className="font-medium" style={{ color: "#040404" }}>
                  Solara: {renderValue(row.solara, true)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
