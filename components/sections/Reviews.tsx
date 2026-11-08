import { reviews } from "@/content/reviews";
import { Reveal } from "../motion/Reveal";

// Rəng sayı az olsun deyə bütün rəy kartları eyni açıq mavi tondadır.
const tone = "bg-sky-soft";

export function Reviews() {
  return (
    <section id="reyler" className="bg-white px-4 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="text-center">
          <h2 className="display text-[12vw] text-ink md:text-[6.2vw] min-[1700px]:text-[100px]">
            Tələbələr
            <br className="md:hidden" /> nə deyir
          </h2>
        </Reveal>

        <ul className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {reviews.map((r, i) => (
            <li key={i} className="w-[84%] shrink-0 snap-center md:w-auto">
              <Reveal delay={i * 0.1} className="h-full">
                <figure
                  className={`flex h-full min-h-[340px] flex-col justify-between rounded-[28px] p-7 text-center text-ink md:min-h-[420px] md:text-left md:rounded-[36px] md:p-10 ${tone}`}
                >
                  <span aria-hidden="true" className="display block text-[110px] leading-[0.6] opacity-25 md:text-[140px]">
                    “
                  </span>
                  <blockquote className="mt-6 text-xl font-semibold leading-snug md:text-2xl">{r.metn}</blockquote>
                  <figcaption className="mt-10">
                    <span className="block text-base font-bold">{r.ad}</span>
                    <span className="block text-sm font-medium text-ink/60">{r.pese}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
