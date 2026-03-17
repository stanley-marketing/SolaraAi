import { Check, X } from "lucide-react";
import { SOLARA_PLUS_CONTENT } from "./content";
import type { ComparisonValue } from "./content";

function renderValue(value: ComparisonValue) {
  if (value === "check") {
    return (
      <Check
        className="inline-block align-middle w-5 h-5"
        style={{ color: "#22c55e" }}
      />
    );
  }
  if (value === "cross") {
    return (
      <X
        className="inline-block align-middle w-5 h-5"
        style={{ color: "#d0d5dd" }}
      />
    );
  }
  return (
    <span
      className="inline-block align-middle"
      style={{ fontSize: "0.85rem", color: "#667085", fontWeight: 500 }}
    >
      {value}
    </span>
  );
}

export function SolaraPlusComparison() {
  const { headline, columns, rows } = SOLARA_PLUS_CONTENT.comparison;

  return (
    <section
      className="px-6 py-28 sm:px-10"
      style={{ background: "#f9fafb" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            color: "#111111",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            margin: "0 0 3rem",
          }}
        >
          {headline}
        </h2>

        <div className="hidden md:block">
          <table
            className="w-full"
            style={{
              borderCollapse: "separate",
              borderSpacing: 0,
              tableLayout: "fixed",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    width: "34%",
                    padding: "14px 20px",
                    textAlign: "left",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#98a2b3",
                  }}
                >
                  Feature
                </th>

                <th
                  style={{
                    width: "22%",
                    padding: "16px 20px",
                    textAlign: "center",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#344054",
                    border: "1px solid #eaecf0",
                    borderBottom: "none",
                    borderRadius: "12px 12px 0 0",
                    background: "#ffffff",
                  }}
                >
                  {columns.diy}
                </th>

                <th
                  style={{
                    width: "22%",
                    padding: "16px 20px",
                    textAlign: "center",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#344054",
                    border: "1px solid #eaecf0",
                    borderBottom: "none",
                    borderRadius: "12px 12px 0 0",
                    background: "#ffffff",
                  }}
                >
                  {columns.agency}
                </th>

                <th
                  style={{
                    width: "22%",
                    padding: "16px 20px",
                    textAlign: "center",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    background: "#040404",
                    borderRadius: "12px 12px 0 0",
                  }}
                >
                  {columns.solara}
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => {
                const isLast = i === rows.length - 1;
                return (
                  <tr key={row.feature}>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "#111111",
                        borderTop: "1px solid #eaecf0",
                      }}
                    >
                      {row.feature}
                    </td>

                    <td
                      style={{
                        padding: "16px 20px",
                        textAlign: "center",
                        background: "#ffffff",
                        borderTop: "1px solid #eaecf0",
                        borderLeft: "1px solid #eaecf0",
                        borderRight: "1px solid #eaecf0",
                        ...(isLast
                          ? {
                              borderBottom: "1px solid #eaecf0",
                              borderRadius: "0 0 12px 12px",
                            }
                          : {}),
                      }}
                    >
                      {renderValue(row.diy)}
                    </td>

                    <td
                      style={{
                        padding: "16px 20px",
                        textAlign: "center",
                        background: "#ffffff",
                        borderTop: "1px solid #eaecf0",
                        borderLeft: "1px solid #eaecf0",
                        borderRight: "1px solid #eaecf0",
                        ...(isLast
                          ? {
                              borderBottom: "1px solid #eaecf0",
                              borderRadius: "0 0 12px 12px",
                            }
                          : {}),
                      }}
                    >
                      {renderValue(row.agency)}
                    </td>

                    <td
                      style={{
                        padding: "16px 20px",
                        textAlign: "center",
                        background: "rgba(4,4,4,0.04)",
                        borderTop: "1px solid rgba(4,4,4,0.07)",
                        ...(isLast
                          ? { borderRadius: "0 0 12px 12px" }
                          : {}),
                      }}
                    >
                      {renderValue(row.solara)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {rows.map((row) => (
            <div
              key={row.feature}
              className="rounded-xl p-4"
              style={{ border: "1px solid #eaecf0", background: "#ffffff" }}
            >
              <p
                className="font-medium text-sm mb-2"
                style={{ color: "#111111" }}
              >
                {row.feature}
              </p>
              <div className="flex gap-4 text-sm">
                <span style={{ color: "#667085" }}>
                  DIY: {renderValue(row.diy)}
                </span>
                <span className="font-medium" style={{ color: "#040404" }}>
                  Solara+: {renderValue(row.solara)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
