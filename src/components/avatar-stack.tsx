"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AvatarStackProps {
  count?: string;
  label?: string;
  inverted?: boolean;
}

const avatars = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
  "/images/avatar-5.jpg",
];

export function AvatarStack({
  count = "500+",
  label = "marketers trust Solara",
  inverted = false,
}: AvatarStackProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-3">
        {avatars.map((src, i) => (
          <motion.div
            key={src}
            className={`relative h-10 w-10 overflow-hidden rounded-full border-2 ${
              inverted ? "border-bg-inverse" : "border-bg-primary"
            }`}
            initial={{ opacity: 0, x: -10, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Image
              src={src}
              alt={`User ${i + 1}`}
              fill
              className="object-cover"
              sizes="40px"
            />
          </motion.div>
        ))}
      </div>
      <p
        className={`text-sm font-medium ${
          inverted ? "text-text-inverse" : "text-text-primary"
        }`}
      >
        <span className="font-bold">{count}</span> {label}
      </p>
    </div>
  );
}
