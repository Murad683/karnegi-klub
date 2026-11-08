"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

// Parallaks yalnız geniş ekranda və animasiyanı azaltma seçilməyibsə aktivdir.
export function useDesktopMotion() {
  const reduce = useReducedMotion();
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return wide && !reduce;
}
