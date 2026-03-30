import Link from "next/link";
import { ALTERNATIVES_CATEGORIES } from "./content";
import type { AlternativeCard } from "./content";

type CardProps = {
  card: AlternativeCard;
};

function AlternativeCardItem({ card }: CardProps) {
  return (
    <Link href={card.href} className="alt-card-link" style={{ display: "block", textDecoration: "none" }}>
      <div className="alt-card">
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "16px",
            background: "#f4f5f7",
          }}
        >
          <img
            src={card.image}
            alt={card.label}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            className="alt-card-img"
          />
        </div>

        <p
          style={{
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "#111111",
            letterSpacing: "-0.01em",
            lineHeight: 1.35,
            marginBottom: "6px",
          }}
        >
          {card.label}
        </p>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#667085",
            lineHeight: 1.55,
          }}
        >
          {card.description}
        </p>

        <div
          className="alt-card-arrow"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#111111",
            marginTop: "16px",
            transition: "color 0.15s, gap 0.15s",
          }}
        >
          Read more
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export function AlternativesGrid() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "72px 0 96px",
        borderTop: "1px solid #eaecf0",
      }}
    >
      <style>{`
        .alt-card {
          display: flex;
          flex-direction: column;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #eaecf0;
          transition: border-color 0.2s, box-shadow 0.2s;
          height: 100%;
        }
        .alt-card-link:hover .alt-card {
          border-color: #d0d5dd;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
        .alt-card-link:hover .alt-card-img {
          transform: scale(1.03);
        }
        .alt-card-link:hover .alt-card-arrow {
          gap: 8px;
        }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          {ALTERNATIVES_CATEGORIES.map((category) => (
            <div key={category.id}>
              <div style={{ marginBottom: "4px" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#98a2b3",
                    marginBottom: "6px",
                  }}
                >
                  {category.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#667085",
                    lineHeight: 1.55,
                    marginBottom: "24px",
                    maxWidth: "60ch",
                  }}
                >
                  {category.subtitle}
                </p>
                <div>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {category.cards.map((card) => (
                      <AlternativeCardItem key={card.href} card={card} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
