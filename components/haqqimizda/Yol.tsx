"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "../motion/Reveal";
import { useScrollMotion } from "../motion/useScrollMotion";
import { haqqimizda } from "@/content/haqqimizda";

type Setir = (typeof haqqimizda.yol)[number];

// Rəng: gələcək solğun → hazırkı mavi → keçmiş soyuq boz.
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
function rengHesabla(giris: number, cixis: number) {
  const from = [11, 27, 51, 0.35];
  const sky = [0, 153, 255, 1];
  const past = [11, 27, 51, 0.55];
  const base = from.map((v, i) => lerp(v, sky[i], giris));
  const [r, g, b, a] = base.map((v, i) => lerp(v, past[i], cixis));
  return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a.toFixed(2)})`;
}

// Bir addım: nöqtə, nəhəng il, mətn. Mərkəzi xəttin üstündə; mobildə hamısı mərkəzdə, masaüstündə növbə ilə sol/sağ.
function YolSetri({ y, index, enabled, wide }: { y: Setir; index: number; enabled: boolean; wide: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress: giris } = useScroll({ target: ref, offset: ["start 85%", "start 55%"] });
  const { scrollYProgress: cixis } = useScroll({ target: ref, offset: ["start 35%", "start 8%"] });

  const sol = index % 2 === 0;
  const opacity = useTransform([giris, cixis], ([a, b]: number[]) => 0.35 + 0.65 * a - 0.3 * b);
  const olcu = useTransform(giris, [0, 1], [0.85, 1]);
  const rengi = useTransform([giris, cixis], ([a, b]: number[]) => rengHesabla(a, b));
  const yOffset = useTransform(giris, [0, 1], [wide ? 0 : 14, 0]);
  const xOffset = useTransform(giris, [0, 1], [wide ? (sol ? 24 : -24) : 0, 0]);
  const halqaOlcu = useTransform(giris, [0, 1], [0.4, 1]);
  const halqaOpacity = useTransform([giris, cixis], ([a, b]: number[]) => a * (1 - b));
  const nuqteOlcu = useTransform(giris, [0, 1], [0.6, 1]);

  const blok = sol ? "md:col-start-1 md:text-right md:items-end" : "md:col-start-3 md:text-left md:items-start";
  const anim = enabled;

  return (
    <li ref={ref} className="relative py-12 md:grid md:grid-cols-[1fr_96px_1fr] md:items-center md:py-20">
      {/* Nöqtə: mobildə addımın yuxarısında, masaüstündə ortada. Wrapper yerləşdirir, daxili element ölçü alır. */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-3 z-20 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2"
      >
        <span className="relative grid size-5 place-items-center">
          <motion.span
            style={anim ? { scale: halqaOlcu, opacity: halqaOpacity } : undefined}
            className="absolute size-10 rounded-full bg-sky/20"
          />
          <motion.span
            style={anim ? { scale: nuqteOlcu, opacity } : undefined}
            className="relative size-3.5 rounded-full bg-sky shadow-[0_0_0_5px_var(--color-mist)]"
          />
        </span>
      </span>

      {/* Mətn bloku xətti örtür (bg-mist), beləcə xətt yalnız addımların arasında görünür. */}
      <motion.div
        style={anim ? { opacity, scale: olcu, x: xOffset, y: yOffset } : undefined}
        className={`relative z-10 mx-auto mt-6 flex max-w-[340px] flex-col items-center bg-mist px-3 py-2 text-center md:row-start-1 md:mx-0 md:mt-0 md:max-w-[460px] md:bg-transparent md:px-0 md:py-0 ${blok} ${sol ? "md:ml-auto" : ""}`}
      >
        <motion.span
          style={anim ? { color: rengi } : undefined}
          className="block text-[clamp(64px,19vw,88px)] font-extrabold leading-none tracking-[-0.04em] text-sky md:text-[clamp(88px,9vw,140px)]"
        >
          {y.il}
        </motion.span>
        <p className="mt-4 text-[19px] font-medium leading-snug text-ink md:mt-5 md:text-[22px]">{y.metn}</p>
      </motion.div>
    </li>
  );
}

// Yol xəritəsi: mərkəzdə xətt scroll ilə dolur, illər bir-bir oyanır.
export function Yol() {
  const { enabled, wide } = useScrollMotion();
  const ol = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ol, offset: ["start 62%", "end 55%"] });
  const xett = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  const sonHalqa = useTransform(xett, [0.96, 1], [0, 1]);

  return (
    <Reveal className="mx-auto max-w-[1100px]">
      <ol ref={ol} className="relative">
        <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-ink/10" />
        {enabled ? (
          <motion.span
            aria-hidden="true"
            style={{ scaleY: xett }}
            className="absolute inset-y-0 left-1/2 w-px origin-top -translate-x-1/2 bg-sky"
          />
        ) : (
          <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-sky" />
        )}
        {haqqimizda.yol.map((y, i) => (
          <YolSetri key={y.il + y.metn} y={y} index={i} enabled={enabled} wide={wide} />
        ))}
        <li aria-hidden="true" className="relative h-6">
          <motion.span
            style={enabled ? { opacity: sonHalqa, scale: sonHalqa } : undefined}
            className="absolute bottom-0 left-1/2 size-4 -translate-x-1/2 rounded-full border-2 border-sky bg-mist"
          />
        </li>
      </ol>
    </Reveal>
  );
}
