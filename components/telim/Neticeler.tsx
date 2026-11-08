import { Reveal } from "../motion/Reveal";
import { SectionHeading } from "./SectionHeading";

export function Neticeler({ items }: { items: string[] }) {
  return (
    <section className="bg-white px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeading>Təlimdən sonra</SectionHeading>
        <ul className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
          {items.map((metn, i) => (
            <li key={metn}>
              <Reveal delay={i * 0.08} className="flex flex-col items-center gap-5 text-center">
                <span aria-hidden="true" className="grid size-12 place-items-center rounded-full bg-sky-soft text-sky">
                  <svg width="22" height="22" viewBox="0 0 22 22">
                    <path d="M5 11.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="max-w-xs text-xl font-bold leading-snug tracking-tight text-ink">{metn}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
