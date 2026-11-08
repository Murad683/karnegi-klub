"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useDesktopMotion } from "./useDesktopMotion";

type Props = {
  children: ReactNode;
  /** Elementin görünən müddətində keçdiyi məsafə (px). Mənfi — yuxarı. */
  distance?: number;
  className?: string;
};

// Scroll zamanı elementi yavaş sürüşdürür.
export function Parallax({ children, distance = 60, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useDesktopMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={enabled ? { y } : undefined} className={`h-full w-full ${enabled ? "will-change-transform" : ""}`}>
        {children}
      </motion.div>
    </div>
  );
}
