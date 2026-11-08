"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef } from "react";

const N = 32;
// Hər çubuğun sabit hündürlüyü (faiz, tam ədəd): 22 – 100.
// Tam ədəd olmalıdır: float fərqləri server və brauzer HTML-ni uyğunsuz edir (hydration xətası).
const base = Array.from({ length: N }, (_, i) =>
  Math.round(22 + 78 * Math.abs(Math.sin(i * 0.52) * Math.cos(i * 0.21 + 0.6))),
);

type BarProps = {
  i: number;
  pointer: MotionValue<number>;
  active: MotionValue<number>;
  width: MotionValue<number>;
  interactive: boolean;
};

function Bar({ i, pointer, active, width, interactive }: BarProps) {
  // Siçan/barmaq yaxınlaşanda yaxın çubuqlar hündürləşir (Gauss əyrisi), uzaqlar sakit qalır.
  const scale = useTransform([pointer, active, width], ([p, a, w]: number[]) => {
    const cx = ((i + 0.5) / N) * w;
    const d = (p - cx) / 110;
    return 1 + a * 0.7 * Math.exp(-d * d);
  });
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <motion.div
        style={interactive ? { scaleY: scale, height: `${base[i]}%` } : { height: `${base[i]}%` }}
        className="w-full origin-center will-change-transform"
      >
        <span
          className="voice-bar block size-full rounded-full bg-sun"
          style={{ animationDelay: `${(i % 11) * -260}ms` }}
        />
      </motion.div>
    </div>
  );
}

// "Səsini tap" konsepti: səs spektri. Boşda nəfəs alır, toxunuşa/siçana yaylı cavab verir.
export function VoiceBars() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rawPointer = useMotionValue(0);
  const rawActive = useMotionValue(0);
  const width = useMotionValue(1000);
  const pointer = useSpring(rawPointer, { stiffness: 220, damping: 28, mass: 0.6 });
  const active = useSpring(rawActive, { stiffness: 110, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => width.set(el.getBoundingClientRect().width);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  function move(e: React.PointerEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    rawPointer.set(e.clientX - r.left);
    rawActive.set(1);
  }

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerMove={reduce ? undefined : move}
      onPointerDown={reduce ? undefined : move}
      onPointerLeave={() => rawActive.set(0)}
      onPointerUp={() => rawActive.set(0)}
      onPointerCancel={() => rawActive.set(0)}
      className="flex h-24 touch-pan-y items-center gap-1.5 md:h-36 md:gap-2.5"
    >
      {Array.from({ length: N }, (_, i) => (
        <Bar key={i} i={i} pointer={pointer} active={active} width={width} interactive={!reduce} />
      ))}
    </div>
  );
}
