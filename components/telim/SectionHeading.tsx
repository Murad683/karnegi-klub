import type { ReactNode } from "react";
import { Reveal } from "../motion/Reveal";

// Təlim səhifəsi bölmələrinin ortaq, mərkəzləşmiş başlığı.
export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <Reveal className="text-center">
      <h2 className="display mx-auto max-w-[900px] text-balance text-[9vw] text-ink md:text-[4.2vw] min-[1700px]:text-[68px]">
        {children}
      </h2>
    </Reveal>
  );
}
