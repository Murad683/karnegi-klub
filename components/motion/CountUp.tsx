"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

// "5000+" kimi dəyəri görünəndə 0-dan hədəfə yumşaqca sayır.
// Mətn birbaşa DOM-a yazılır (hər kadrda React render olmur), scroll axını kəsilmir.
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = `${target}${suffix}`;
      return;
    }
    if (!inView) {
      el.textContent = `0${suffix}`;
      return;
    }
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.32, 0.72, 0, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, target, suffix]);

  return <span ref={ref}>{value}</span>;
}
