import { Reveal } from "../motion/Reveal";
import { CountUp } from "../motion/CountUp";
import { necef } from "@/content/necef";
import { site } from "@/content/site";

const statTones = ["bg-sky-soft", "bg-sun-soft", "bg-mint"];

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
    <section id="necef-bey" className="scroll-mt-16 bg-white px-4 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/telimler/stress.jpg"
            alt={necef.ad}
            loading="lazy"
            decoding="async"
            className="mx-auto size-[120px] rounded-full object-cover object-[50%_25%] shadow-[0_0_0_8px_var(--color-sun-soft)] md:size-[132px]"
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
          <dl className="mt-14 grid gap-4 text-center md:mt-20 md:grid-cols-3 md:text-left">
            {site.stats.map((s, i) => (
              <div key={s.label} className={`rounded-[32px] p-8 ${statTones[i % statTones.length]}`}>
                <dd className="text-[clamp(44px,5.4vw,84px)] font-extrabold leading-none tracking-[-0.04em] text-ink">
                  <CountUp value={s.value} />
                </dd>
                <dt className="mt-3 text-[17px] font-semibold text-ink/70">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
