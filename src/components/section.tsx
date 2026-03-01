import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
}

export function Section({ children, className, id, narrow }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        narrow ? "max-w-[var(--content-narrow)]" : "max-w-[var(--content-max)]",
        className
      )}
    >
      {children}
    </section>
  );
}
