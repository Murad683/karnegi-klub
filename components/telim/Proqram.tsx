import { Reveal } from "../motion/Reveal";
import { SectionHeading } from "./SectionHeading";

export function Proqram({ items }: { items: string[] }) {
  return (
    <section className="bg-mist px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <SectionHeading>Proqram</SectionHeading>
        <ol className="mt-12 md:mt-16">
          {items.map((metn, i) => (
            <li key={metn}>
              <Reveal delay={i * 0.05}>
                <div className="flex items-baseline gap-5 border-t border-ink/15 py-5 last:border-b md:gap-8 md:py-7">
                  <span className="w-8 shrink-0 text-sm font-bold text-ink/50 md:w-10 md:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-bold leading-snug tracking-tight text-ink md:text-3xl">{metn}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
