"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedList({
  className,
  children,
  delay = 1200,
  loop = true,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  loop?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    const shouldContinue = loop || index < childrenArray.length - 1;
    if (!shouldContinue) return;
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % childrenArray.length);
    }, delay);
    return () => clearTimeout(timeout);
  }, [index, delay, childrenArray.length, loop]);

  const visible = useMemo(() => childrenArray.slice(0, index + 1).reverse(), [index, childrenArray]);

  return (
    <div className={cn("flex flex-col-reverse items-center gap-2", className)}>
      <AnimatePresence>
        {visible.map((item) => (
          <AnimatedListItem key={(item as React.ReactElement).key}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, originY: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 40 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
