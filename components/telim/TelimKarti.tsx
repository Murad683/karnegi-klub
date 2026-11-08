import Link from "next/link";
import { Reveal } from "../motion/Reveal";
import { telimYolu, type HazirTelim } from "@/content/telimler";
import { tones } from "@/lib/tones";

// Siyahı səhifəsinin fonu da `mist` olduğu üçün `mist` tonlu kart ağ göstərilir (fonla qarışmasın).
// Siyahı səhifəsində təlim kartı: şəkil (3:2), ad, bir cümlə və "Ətraflı" göstəricisi. Bütün kart linkdir.
export function TelimKarti({ telim, index }: { telim: HazirTelim; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <Link
        href={telimYolu(telim.slug)}
        className={`group flex h-full flex-col gap-5 rounded-[28px] p-5 text-center transition-transform duration-500 hover:-translate-y-1 md:rounded-[32px] md:p-6 ${telim.tone === "mist" ? "bg-white" : tones[telim.tone]}`}
      >
        <div className="aspect-[3/2] overflow-hidden rounded-[20px] bg-white/40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={telim.sekil}
            alt={telim.seoAd}
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-[50%_30%] transition-transform duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col items-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink md:text-[28px]">{telim.ad}</h2>
          <p className="mt-2 max-w-xs text-base font-medium leading-relaxed text-ink/75">{telim.qisa}</p>
          <span className="mt-5 inline-flex items-center gap-2 border-b-2 border-ink pb-0.5 text-[15px] font-bold text-ink md:mt-auto md:pt-5">
            Ətraflı
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" className="transition-transform duration-500 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
