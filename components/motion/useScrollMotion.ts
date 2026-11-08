"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

// Scroll effektləri həm masaüstündə, həm mobildə işləyir (yalnız "animasiyanı azalt" seçilməyibsə).
// `wide` — geniş ekran: parallaks məsafəsi mobildə yarıya endirilir ki, kiçik ekranda yumşaq qalsın.
export function useScrollMotion() {
  const reduce = useReducedMotion();
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return { enabled: !reduce, wide };
}
