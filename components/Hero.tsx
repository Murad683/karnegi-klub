"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { RegisterButton } from "./Button";
import { Sticker } from "./Sticker";
import { Parallax } from "./motion/Parallax";
import { useDesktopMotion } from "./motion/useDesktopMotion";

const shapes = [
  { src: "/images/telimler/natiq.jpg", pos: "35% 20%", oval: false, distance: 36 },
  { src: "/images/telimler/stress.jpg", pos: "50% 30%", oval: true, distance: 70 },
  { src: "/images/telimler/satis.jpg", pos: "50% 20%", oval: false, distance: 48 },
  { src: "/images/telimler/ideya.jpg", pos: "55% 25%", oval: true, distance: 84 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const enabled = useDesktopMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0099ff_0%,#38aeff_38%,#bfe3ff_64%,#fdfdfe_86%)] px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32"
    >
      <motion.div style={enabled ? { y: textY, opacity: textOpacity } : undefined} className="mx-auto max-w-[1500px] text-center">
        <h1 className="display text-[19vw] text-white md:text-[8.6vw] min-[1700px]:text-[132px]">
          <span>
            Burada
            <br className="md:hidden" /> hamı
          </span>
          <br />
          <span>
            səsini
            <br className="md:hidden" /> tapır.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-md text-lg font-medium leading-relaxed text-white md:mt-10 md:text-xl">
          Natiqlik və özünüifadə təlimləri. Gəlin, birlikdə başlayaq.
        </p>
        <div className="relative mt-9 flex justify-center">
          <RegisterButton size="lg">İlk dərsə yazıl</RegisterButton>
          <Sticker
            id="hero-sticker"
            className="absolute -right-1 top-[calc(100%+8px)] w-24 md:left-[calc(50%+260px)] md:right-auto md:top-[-70px] md:w-[128px]"
          />
        </div>
      </motion.div>

      <div className="mx-auto mt-24 grid max-w-[1500px] grid-cols-2 items-end gap-3 md:mt-20 md:grid-cols-4 md:gap-6">
        {shapes.map((s, i) => (
          <Parallax
            key={s.src}
            distance={s.distance}
            className={`${s.oval ? "h-[300px] md:h-[40vh]" : "h-[230px] md:h-[32vh]"} ${i > 1 ? "hidden md:block" : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt=""
              aria-hidden="true"
              decoding="async"
              fetchPriority={i < 2 ? "high" : "auto"}
              className={`size-full object-cover ${s.oval ? "rounded-full" : "rounded-[28px]"}`}
              style={{ objectPosition: s.pos }}
            />
          </Parallax>
        ))}
      </div>
    </section>
  );
}
