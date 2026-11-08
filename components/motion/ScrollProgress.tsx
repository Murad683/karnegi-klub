"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Səhifənin yuxarısında nazik mavi scroll göstəricisi.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-primary"
    />
  );
}
