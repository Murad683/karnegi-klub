"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useScrollMotion } from "./useScrollMotion";

type Props = {
  children: ReactNode;
  /** Elementin görünən müddətində keçdiyi məsafə (px). Mobildə yarıya endirilir. */
  distance?: number;
  className?: string;
};

// Scroll zamanı elementi yavaş sürüşdürür.
export function Parallax({ children, distance = 60, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled, wide } = useScrollMotion();
  const d = wide ? distance : distance * 0.5;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-d / 2, d / 2]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={enabled ? { y } : undefined} className={`h-full w-full ${enabled ? "will-change-transform" : ""}`}>
        {children}
      </motion.div>
    </div>
  );
}
