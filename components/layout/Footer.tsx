import { Wordmark } from "./footer/Wordmark";
import { BackToTop } from "./footer/BackToTop";
import { nav, site } from "@/content/site";

export function Footer() {
  const socials = site.socials.filter((s) => s.href);
  const link = "transition-opacity duration-500 hover:opacity-60";
  const heading = "mb-4 text-base font-bold text-white/75";

  return (
    <footer id="elaqe" className="relative overflow-hidden bg-sky text-white">
      <div className="mx-auto max-w-[1500px] px-5 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-12 text-center md:grid-cols-[1.7fr_1fr_1fr] md:text-left">
          <div>
            <p className="text-base font-bold text-white/75">Əlaqə</p>
            <a
              href={site.phoneHref}
              className={`display mt-3 block whitespace-nowrap text-[7.6vw] md:text-[3.3vw] min-[1700px]:text-[56px] ${link}`}
            >
              {site.phone}
            </a>
            <p className="mt-4 text-lg font-medium text-white/85">{site.address}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:contents">
            <ul className="space-y-2.5 text-base font-medium">
              <li className={heading}>Səhifələr</li>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5 text-base font-medium">
              <li className={heading}>Sosial</li>
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
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-[1500px] flex-col-reverse items-center gap-5 px-5 pb-2 md:mt-24 md:flex-row md:items-end md:justify-between md:px-10 md:pb-4">
        <p className="relative z-10 text-center text-sm font-medium text-white/80 md:text-left">
          © 2026 Karnegi Klub. Bütün hüquqlar qorunur.
        </p>
        <div className="relative z-10">
          <BackToTop />
        </div>
      </div>

      <div className="-mt-[1vw]">
        <Wordmark />
      </div>
    </footer>
  );
}
