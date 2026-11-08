import { VoiceBars } from "./footer/VoiceBars";
import { BackToTop } from "./footer/BackToTop";
import { nav, site } from "@/content/site";

export function Footer() {
  const socials = site.socials.filter((s) => s.href);
  const link = "transition-opacity duration-500 hover:opacity-60";

  return (
    <footer id="elaqe" className="relative overflow-hidden bg-sky text-white">
      <div className="mx-auto max-w-[1500px] px-5 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.7fr_1fr_1fr]">
          <div>
            <p className="text-base font-bold text-white/75">Əlaqə</p>
            <a href={site.phoneHref} className={`display mt-3 block text-[10vw] md:text-[4.8vw] min-[1700px]:text-[80px] ${link}`}>
              {site.phone}
            </a>
            <p className="mt-4 text-lg font-medium text-white/85">{site.address}</p>
          </div>
          <ul className="space-y-2.5 text-base font-medium">
            <li className="mb-4 text-base font-bold text-white/75">Səhifələr</li>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-2.5 text-base font-medium">
            <li className="mb-4 text-base font-bold text-white/75">Sosial</li>
            {socials.length === 0 && <li className="text-white/60">Tezliklə</li>}
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={link}>
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 md:mt-24">
          <VoiceBars />
        </div>
      </div>

      <div className="relative mt-6 flex items-end justify-between px-5 md:px-10">
        <p className="relative z-10 pb-4 text-sm font-medium text-white/80">© 2026 Karnegi Klub. Bütün hüquqlar qorunur.</p>
        <div className="relative z-10 pb-4">
          <BackToTop />
        </div>
      </div>

      <p
        aria-hidden="true"
        className="display pointer-events-none -mt-[2vw] select-none text-center text-[22vw] leading-[0.8] text-white/95 [transform:translateY(16%)]"
      >
        Karnegi
      </p>
    </footer>
  );
}
