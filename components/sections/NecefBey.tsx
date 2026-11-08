import { Reveal } from "../motion/Reveal";
import { CountUp } from "../motion/CountUp";
import { necef } from "@/content/necef";
import { site } from "@/content/site";

const statTone = "bg-sky-soft"; // rəng sayı az olsun: üç kart da eyni tonda

// Sitatı vurğulanan hissəyə görə üç hissəyə bölür.
function Quote() {
  const i = necef.sitat.indexOf(necef.vurgu);
  if (i < 0) return <>{necef.sitat}</>;
  return (
    <>
      {necef.sitat.slice(0, i)}
      <em className="not-italic [background:linear-gradient(transparent_62%,var(--color-sun)_62%)]">{necef.vurgu}</em>
      {necef.sitat.slice(i + necef.vurgu.length)}
    </>
  );
}

// Nəcəf bey: mərkəzləşmiş sitat, kiçik dairəvi şəkil və rəqəmlər (rəqəmlər saytda yalnız burada göstərilir).
export function NecefBey() {
  return (
    <section id="necef-bey" className="scroll-mt-16 bg-white px-4 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/telimler/stress.webp"
            alt={necef.ad}
            loading="lazy"
            decoding="async"
            className="mx-auto size-[104px] rounded-full object-cover object-[50%_25%] shadow-[0_0_0_7px_var(--color-sun-soft)] md:size-[132px] md:shadow-[0_0_0_8px_var(--color-sun-soft)]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="display mx-auto mt-8 max-w-[900px] text-[clamp(28px,4.2vw,62px)] leading-[1.12] text-ink">
            “<Quote />”
          </p>
          <p className="mt-6 text-lg font-bold text-ink">{necef.ad}</p>
          <p className="mt-1 text-[15px] font-medium text-muted">{necef.rol}</p>
        </Reveal>
        <Reveal delay={0.2}>
          {/* Mobildə üç kart bir cərgədə və yığcam (sitat və şəkildən çox yer tutmasın), masaüstündə geniş. */}
          <dl className="mt-9 grid grid-cols-3 gap-2.5 text-center md:mt-20 md:gap-4 md:text-left">
            {site.stats.map((s) => (
              <div
                key={s.label}
                className={`rounded-2xl px-2 py-4 md:rounded-[32px] md:p-8 ${statTone}`}
              >
                <dd className="text-[6.4vw] font-extrabold leading-none tracking-[-0.04em] text-ink md:text-[clamp(44px,5.4vw,84px)]">
                  <CountUp value={s.value} />
                </dd>
                <dt className="mt-1.5 text-xs font-semibold text-ink/70 md:mt-3 md:text-[17px]">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
