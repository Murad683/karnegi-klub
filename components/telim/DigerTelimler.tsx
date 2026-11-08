import Link from "next/link";
import { Reveal } from "../motion/Reveal";
import { SectionHeading } from "./SectionHeading";
import { hazirTelimler, telimYolu } from "@/content/telimler";
import { tones } from "@/lib/tones";

// Başqa təlim səhifələrinə keçidlər (həm istifadəçi, həm axtarış üçün). Səhifəsi olan başqa təlim yoxdursa bölmə görünmür.
export function DigerTelimler({ cari }: { cari: string }) {
  const digerleri = hazirTelimler.filter((t) => t.slug !== cari).slice(0, 3);
  if (digerleri.length === 0) return null;
  return (
    <section className="bg-white px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeading>Digər təlimlər</SectionHeading>
        <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {digerleri.map((t, i) => (
            <li key={t.slug}>
              <Reveal delay={i * 0.08} className="h-full">
                <Link
                  href={telimYolu(t.slug)}
                  className={`group flex h-full flex-col gap-5 rounded-[28px] p-5 text-center transition-transform duration-500 hover:-translate-y-1 ${tones[t.tone]}`}
                >
                  <div className="aspect-[3/2] overflow-hidden rounded-[20px] bg-white/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.sekil}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover object-[50%_30%] transition-transform duration-[900ms] group-hover:scale-105"
                    />
                  </div>
                  <span className="text-2xl font-extrabold tracking-tight text-ink">{t.ad}</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
