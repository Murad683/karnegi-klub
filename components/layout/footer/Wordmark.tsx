"use client";

import { motion, useReducedMotion } from "motion/react";

const WORD = "Karnegi";
const APPLE = [0.32, 0.72, 0, 1] as const;

// Nəhəng "Karnegi" yazısı: görünəndə hərflər bir-bir yumşaqca yuxarı qalxıb açılır,
// üzərinə gələndə hər hərf yüngülcə qalxır. "Animasiyanı azalt"-da sakit qalır.
export function Wordmark() {
  const reduce = useReducedMotion();
  return (
    <p
      aria-hidden="true"
      className="display pointer-events-auto flex select-none justify-center text-[22vw] leading-[0.8] text-white/95 [transform:translateY(16%)]"
    >
      {WORD.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={reduce ? false : { opacity: 0, y: "42%" }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={reduce ? undefined : { y: "-4%" }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.1, delay: reduce ? 0 : i * 0.07, ease: APPLE }}
          className="inline-block will-change-transform"
        >
          {ch}
        </motion.span>
      ))}
    </p>
  );
}
