"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type CardItem = {
  id: number;
  name: React.ReactNode;
  designation: string;
  content: React.ReactNode;
};

export function CardStack({
  items,
  offset = 10,
  scaleFactor = 0.06,
}: {
  items: CardItem[];
  offset?: number;
  scaleFactor?: number;
}) {
  const [cards, setCards] = useState<CardItem[]>(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const next = [...prev];
        next.unshift(next.pop()!);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", height: 130, width: "100%" }}>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          style={{
            position: "absolute",
            width: "100%",
            zIndex: cards.length - index,
            transformOrigin: "top center",
          }}
          animate={{
            top: index * offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid #eaecf0",
              borderRadius: 12,
              padding: "14px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ color: "#0f0f0f", fontSize: "0.875rem", lineHeight: 1.6 }}>
              {card.content}
            </div>
            <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 12, marginTop: 4 }}>
              <div>{card.name}</div>
              <p style={{ fontSize: "0.72rem", color: "#9ca3af", margin: 0 }}>{card.designation}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
