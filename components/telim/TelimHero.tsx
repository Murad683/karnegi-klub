import Link from "next/link";
import { RegisterButton } from "../Button";
import { tones } from "@/lib/tones";
import type { HazirTelim } from "@/content/telimler";

// Təlim səhifəsinin hero-su: təlimin yumşaq tonu, nəhəng ad, bir cümlə, əsas düymə, üfüqi (3:2) şəkil.
export function TelimHero({ telim }: { telim: HazirTelim }) {
  return (
    <section className={`${tones[telim.tone]} px-4 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40`}>
      <div className="mx-auto grid max-w-[1500px] items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div className="text-center md:text-left">
          <nav aria-label="Yol" className="text-sm font-semibold text-ink/60">
            <Link href="/telimler/" className="transition-opacity duration-500 hover:opacity-60">
              Təlimlər
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-ink">{telim.ad}</span>
          </nav>
          <h1 className="display mt-6 text-[11vw] text-ink md:text-[clamp(48px,6.2vw,104px)]">
            {telim.ad.split(" ").map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg font-medium leading-relaxed text-ink/80 md:mx-0 md:text-xl">
            {telim.qisa}
          </p>
          <div className="mt-9">
            <RegisterButton telimSlug={telim.slug} size="lg">
              İlk dərsə pulsuz yazıl
            </RegisterButton>
          </div>
        </div>

        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[22px] bg-white/40 md:rounded-[28px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={telim.sekil}
            alt={telim.seoAd}
            decoding="async"
            fetchPriority="high"
            className="size-full object-cover object-[50%_30%]"
          />
        </div>
      </div>
    </section>
  );
}
