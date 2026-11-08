"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import Link from "next/link";
import { RegisterButton } from "../Button";
import { Parallax } from "../motion/Parallax";
import { useScrollMotion } from "../motion/useScrollMotion";
import { hazirTelimler, telimYolu, type Telim } from "@/content/telimler";

const sehifeliSluglar = new Set(hazirTelimler.map((t) => t.slug));

type Props = {
  telim: Telim;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

// Tam enli rəngli blok. Bloklar (həm masaüstündə, həm mobildə) üst-üstə yığılır,
// yeni blok gələndə əvvəlkilər yumşaqca kiçilir.
export function TelimBlock({ telim, index, total, progress }: Props) {
  const { enabled, wide } = useScrollMotion();
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const stackOffset = index * (wide ? 18 : 12);

  return (
    <li className="sticky top-0 flex h-svh list-none items-start pt-[84px] md:h-screen md:pt-[104px]">
      <motion.div
        style={enabled ? { scale, top: stackOffset, transformOrigin: "50% 0%" } : undefined}
        className={`group relative grid w-full gap-5 overflow-hidden rounded-[28px] p-6 text-ink shadow-[0_30px_80px_-40px_rgba(11,27,51,0.28)] will-change-transform md:h-[min(70vh,600px)] md:grid-cols-[1.25fr_1fr] md:gap-8 md:rounded-[36px] md:p-12 ${index % 2 === 0 ? "bg-sky-soft" : "border border-ink/10 bg-white"}`}
      >
        <div className="flex flex-col items-center justify-between gap-4 text-center md:items-stretch md:gap-8 md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <span className="text-sm font-bold opacity-60">{String(index + 1).padStart(2, "0")}</span>
            {index === 0 && (
              <span className="rounded-full bg-sky px-3.5 py-1 text-xs font-bold text-white">Əsas təlim</span>
            )}
          </div>
          <h3 className="display text-[10.5vw] md:text-[clamp(44px,6.4vw,104px)]">
            {telim.ad.split(" ").map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </h3>
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
            <p className="max-w-sm text-base font-medium leading-relaxed text-ink/80 md:text-lg">{telim.qisa}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">
              <RegisterButton telimSlug={telim.slug} variant="ink" size="sm">
                Yerini ayır →
              </RegisterButton>
              {sehifeliSluglar.has(telim.slug) && (
                <Link
                  href={telimYolu(telim.slug)}
                  className="border-b-2 border-ink pb-0.5 text-[15px] font-bold text-ink transition-opacity duration-500 hover:opacity-60"
                >
                  Ətraflı
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Çərçivə mənbə şəklin nisbətindədir (3:2), şəkil kəsilmir. */}
        <div className="relative order-first aspect-[3/2] w-full overflow-hidden rounded-[22px] bg-white/40 md:order-none md:mx-auto md:max-w-[420px] md:self-end md:rounded-[28px] lg:max-w-[460px]">
          <Parallax distance={16} className="absolute -inset-y-2 inset-x-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={telim.sekil}
              alt={telim.ad}
              loading="lazy"
              decoding="async"
              className="size-full object-cover object-[50%_30%] transition-transform duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            />
          </Parallax>
        </div>
      </motion.div>
    </li>
  );
}
