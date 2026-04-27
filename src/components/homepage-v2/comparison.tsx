"use client";

import {
  V2Section,
  V2SectionInner,
  V2HeadlineBlock,
  INK,
  INK_MUTED,
  INK_FAINT,
  ROSE_DEEP,
  HAIRLINE,
  HAIRLINE_HEAVY,
  DISPLAY,
  BODY,
} from "@/components/homepage-v2/primitives";
import { CTA_MAP, TESTIDS } from "@/app/home-v2/content";

const TOOLKIT_SUBTITLE = "Buffer, Canva, Jasper, Runway";
const AGENCY_SUBTITLE = "$2,000/mo social manager";
const SOLARA_SUBTITLE = "$99/mo";

type RowValue = {
  toolkit: string;
  agency: string;
  solara: string;
};

type TableRow = {
  label: string;
} & RowValue;

const ROWS: TableRow[] = [
  {
    label: "Cost / month",
    toolkit: "$150 – $600",
    agency: "$2,000",
    solara: "$99",
  },
  {
    label: "Decides what to post",
    toolkit: "✗",
    agency: "✓",
    solara: "✓",
  },
  {
    label: "Tells you what to film",
    toolkit: "✗",
    agency: "✓",
    solara: "✓",
  },
  {
    label: "Films it",
    toolkit: "✗",
    agency: "✗ (sometimes)",
    solara: "You do (10 min/week)",
  },
  {
    label: "Edits & captions",
    toolkit: "✗",
    agency: "✓",
    solara: "✓",
  },
  {
    label: "Schedules & publishes",
    toolkit: "✓ (separate tool)",
    agency: "✓",
    solara: "✓",
  },
  {
    label: "Reports & adjusts",
    toolkit: "✗",
    agency: "✓ (slow)",
    solara: "✓ (weekly)",
  },
  {
    label: "Time you spend per week",
    toolkit: "4 – 8 hrs/week",
    agency: "1 – 2 hrs/week (filming)",
    solara: "10 min/week",
  },
  {
    label: "Year 1 total",
    toolkit: "$1,800 – $7,200\n+ 200+ hrs",
    agency: "$24,000\n+ 75 hrs",
    solara: "$828 (annual)\n+ 9 hrs",
  },
];

function valueColor(val: string, isSolara: boolean): string {
  if (val === "✓") return isSolara ? ROSE_DEEP : INK_MUTED;
  if (val === "✗") return "rgba(10,10,10,0.28)";
  return isSolara ? ROSE_DEEP : INK_MUTED;
}

function valueFontWeight(val: string): number {
  if (val === "✓" || val === "✗") return 700;
  return 400;
}

function CellText({
  val,
  isSolara = false,
}: {
  val: string;
  isSolara?: boolean;
}) {
  const lines = val.split("\n");
  return (
    <span
      style={{
        fontFamily: BODY,
        fontSize: "0.85rem",
        fontWeight: valueFontWeight(val),
        color: valueColor(val, isSolara),
        lineHeight: 1.5,
        display: "block",
      }}
    >
      {lines.map((line, i) => (
        <span key={i} style={{ display: "block" }}>
          {line}
        </span>
      ))}
    </span>
  );
}

function DesktopTable() {
  return (
    <div
      className="hidden sm:block mt-14 overflow-hidden rounded-lg"
      style={{ border: `1px solid ${HAIRLINE_HEAVY}` }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
        }}
      >
        <colgroup>
          <col style={{ width: "34%" }} />
          <col style={{ width: "22%" }} />
          <col style={{ width: "22%" }} />
          <col style={{ width: "22%" }} />
        </colgroup>

        <thead>
          <tr style={{ background: INK }}>
            <th
              scope="col"
              style={{
                padding: "18px 20px",
                textAlign: "left",
                borderRight: `1px solid rgba(255,255,255,0.08)`,
              }}
            >
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: 10,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                Feature
              </span>
            </th>
            {(
              [
                {
                  name: "THE TOOLKIT",
                  sub: TOOLKIT_SUBTITLE,
                  solara: false,
                },
                { name: "THE AGENCY", sub: AGENCY_SUBTITLE, solara: false },
                { name: "SOLARA", sub: SOLARA_SUBTITLE, solara: true },
              ] as const
            ).map((col) => (
              <th
                key={col.name}
                scope="col"
                style={{
                  padding: "18px 20px",
                  textAlign: "left",
                  borderRight: `1px solid rgba(255,255,255,0.08)`,
                  borderLeft: col.solara
                    ? `2px solid ${ROSE_DEEP}`
                    : undefined,
                  background: col.solara
                    ? "rgba(23,37,84,0.55)"
                    : undefined,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: BODY,
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: col.solara
                      ? "rgba(255,255,255,0.95)"
                      : "rgba(255,255,255,0.7)",
                  }}
                >
                  {col.name}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: BODY,
                    fontSize: 11,
                    color: col.solara
                      ? "rgba(255,255,255,0.55)"
                      : "rgba(255,255,255,0.35)",
                    marginTop: 3,
                  }}
                >
                  {col.sub}
                </span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {ROWS.map((row, i) => {
            const isLast = i === ROWS.length - 1;
            const rowBg = i % 2 === 0 ? "#ffffff" : "#faf9f7";
            return (
              <tr
                key={row.label}
                style={{
                  borderBottom: isLast ? "none" : `1px solid ${HAIRLINE}`,
                }}
              >
                <td
                  style={{
                    padding: "14px 20px",
                    background: rowBg,
                    borderRight: `1px solid ${HAIRLINE}`,
                    fontFamily: BODY,
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: INK,
                    lineHeight: 1.4,
                  }}
                >
                  {row.label}
                </td>
                <td
                  style={{
                    padding: "14px 20px",
                    background: rowBg,
                    borderRight: `1px solid ${HAIRLINE}`,
                  }}
                >
                  <CellText val={row.toolkit} />
                </td>
                <td
                  style={{
                    padding: "14px 20px",
                    background: rowBg,
                    borderRight: `1px solid ${HAIRLINE}`,
                  }}
                >
                  <CellText val={row.agency} />
                </td>
                <td
                  style={{
                    padding: "14px 20px",
                    background: "rgba(23,37,84,0.04)",
                    borderLeft: `2px solid ${ROSE_DEEP}`,
                  }}
                >
                  <CellText val={row.solara} isSolara />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function MobileCard({
  name,
  subtitle,
  values,
  highlighted,
}: {
  name: string;
  subtitle: string;
  values: string[];
  highlighted: boolean;
}) {
  return (
    <div
      style={{
        border: highlighted ? `2px solid ${ROSE_DEEP}` : `1px solid ${HAIRLINE_HEAVY}`,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "16px 18px",
          background: highlighted ? ROSE_DEEP : INK,
        }}
      >
        <p
          style={{
            fontFamily: BODY,
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: highlighted ? "#ffffff" : "rgba(255,255,255,0.75)",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: BODY,
            fontSize: 11,
            color: "rgba(255,255,255,0.45)",
            marginTop: 3,
          }}
        >
          {subtitle}
        </p>
      </div>
      <div style={{ background: highlighted ? "rgba(23,37,84,0.03)" : "#ffffff" }}>
        {ROWS.map((row, i) => {
          const val = values[i] ?? "";
          const isLast = i === ROWS.length - 1;
          return (
            <div
              key={row.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 12,
                padding: "12px 18px",
                borderBottom: isLast ? "none" : `1px solid ${HAIRLINE}`,
              }}
            >
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: INK_MUTED,
                  lineHeight: 1.4,
                  flexShrink: 0,
                  maxWidth: "52%",
                }}
              >
                {row.label}
              </span>
              <CellText val={val} isSolara={highlighted} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ComparisonV2() {
  const toolkitValues = ROWS.map((r) => r.toolkit);
  const agencyValues = ROWS.map((r) => r.agency);
  const solaraValues = ROWS.map((r) => r.solara);

  return (
    <V2Section id={TESTIDS.comparison}>
      <V2SectionInner>
        <V2HeadlineBlock
          eyebrow="06 · THE COMPARISON"
          headline="The only system that thinks, films, cuts, and publishes."
          sub="Tools give you blank pages. Agencies give you shot lists. Solara gives you posts."
        />

        <DesktopTable />

        <div className="sm:hidden mt-12 flex flex-col gap-5">
          <MobileCard
            name="SOLARA"
            subtitle={SOLARA_SUBTITLE}
            values={solaraValues}
            highlighted
          />
          <MobileCard
            name="THE TOOLKIT"
            subtitle={TOOLKIT_SUBTITLE}
            values={toolkitValues}
            highlighted={false}
          />
          <MobileCard
            name="THE AGENCY"
            subtitle={AGENCY_SUBTITLE}
            values={agencyValues}
            highlighted={false}
          />
        </div>

        <p
          className="mt-10 max-w-[60ch]"
          style={{
            fontFamily: BODY,
            fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
            lineHeight: 1.7,
            color: INK_MUTED,
          }}
        >
          Toolkits cost less in dollars and more in your time. Agencies cost
          less in your time and more in dollars. Solara costs less in both
          because it isn&rsquo;t building from scratch every week — it&rsquo;s
          running the same playbook the big brands run, scaled down for your
          business.
        </p>

        <div className="mt-10">
          <a
            href={CTA_MAP.comparison}
            className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-sm font-semibold"
            style={{
              fontFamily: BODY,
              background: INK,
              color: "#ffffff",
              textDecoration: "none",
              letterSpacing: "0.01em",
              fontSize: "0.9rem",
              transition: "opacity 150ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            Start the 10-minute setup →
          </a>
        </div>
      </V2SectionInner>
    </V2Section>
  );
}
