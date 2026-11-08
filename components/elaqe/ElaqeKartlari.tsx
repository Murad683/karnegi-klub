import type { ReactNode } from "react";
import { Reveal } from "../motion/Reveal";
import { buildWhatsappLink, mapsUrl, site, whatsappHello } from "@/content/site";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

type Kart = { etiket: string; metn: string; ipucu: string; href: string; external: boolean; ikon: ReactNode };

const kartlar: Kart[] = [
  {
    etiket: "Zəng edin",
    metn: site.phone,
    ipucu: "Birbaşa zəng",
    href: site.phoneHref,
    external: false,
    ikon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" {...stroke} />
      </svg>
    ),
  },
  {
    etiket: "WhatsApp",
    metn: "Yazın, cavab verək",
    ipucu: "WhatsApp-da aç",
    href: buildWhatsappLink(whatsappHello),
    external: true,
    ikon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20z" {...stroke} />
        <path d="M9 9.5c.5 2.5 2.5 4.5 5 5l1.2-1.2-1.7-1-.8.6a4 4 0 0 1-1.7-1.7l.6-.8-1-1.7L9 9.5z" {...stroke} />
      </svg>
    ),
  },
  {
    etiket: "Ünvan",
    metn: site.address,
    ipucu: "Xəritədə aç",
    href: mapsUrl,
    external: true,
    ikon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" {...stroke} />
        <circle cx="12" cy="10" r="2.5" {...stroke} />
      </svg>
    ),
  },
];

// Üç əlaqə yolu: zəng, WhatsApp, ünvan (xəritə linki). Bütün kart linkdir; üçü də eyni ağ kartdır.
export function ElaqeKartlari() {
  return (
    <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
      {kartlar.map((k, i) => (
        <li key={k.etiket}>
          <Reveal delay={i * 0.08} className="h-full">
            <a
              href={k.href}
              {...(k.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex h-full flex-col items-center rounded-[28px] bg-white p-8 text-center transition-transform duration-500 hover:-translate-y-1 md:rounded-[32px] md:p-9"
            >
              <span className="grid size-12 place-items-center rounded-full bg-sky-soft text-sky">{k.ikon}</span>
              <span className="mt-6 text-sm font-bold text-muted">{k.etiket}</span>
              <span className="mt-2 text-[22px] font-extrabold leading-snug tracking-tight text-ink">{k.metn}</span>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-bold text-sky md:mt-auto md:pt-5">
                {k.ipucu}
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
