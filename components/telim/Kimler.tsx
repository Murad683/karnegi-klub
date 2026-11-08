import { Reveal } from "../motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const tonlar = ["bg-sky-soft", "bg-sun-soft", "bg-mint"];

export function Kimler({ items }: { items: string[] }) {
  return (
    <section className="bg-white px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeading>Bu təlim kimin üçündür?</SectionHeading>
        <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {items.map((metn, i) => (
            <li key={metn}>
              <Reveal delay={i * 0.08} className="h-full">
                <div
                  className={`flex h-full min-h-[150px] items-center justify-center rounded-[28px] p-7 text-center text-xl font-bold leading-snug tracking-tight text-ink md:min-h-[220px] md:p-9 md:text-2xl ${tonlar[i % tonlar.length]}`}
                >
                  {metn}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
