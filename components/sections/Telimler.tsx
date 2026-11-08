"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";
import { telimler } from "@/content/telimler";
import { TelimBlock } from "./TelimBlock";
import { Reveal } from "../motion/Reveal";

export function Telimler() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });

  return (
    <section id="telimler" className="scroll-mt-16 bg-white px-4 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <h2 className="display text-[12vw] text-ink md:text-[7vw] min-[1700px]:text-[112px]">Təlimlərimiz</h2>
          <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-muted">
            Hər biri ayrı bir bacarıq. Sizə uyğun olanı seçin.
          </p>
        </Reveal>
        <ol ref={listRef} className="mt-14 md:mt-20">
          {telimler.map((t, i) => (
            <TelimBlock key={t.slug} telim={t} index={i} total={telimler.length} progress={scrollYProgress} />
          ))}
        </ol>
      </div>
    </section>
  );
}
