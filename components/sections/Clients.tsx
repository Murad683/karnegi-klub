import { clients } from "@/content/clients";
import { Reveal } from "../motion/Reveal";

export function Clients() {
  return (
    <section className="bg-white px-4 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1500px] border-t border-ink/10 pt-12 md:pt-16">
        <Reveal>
          <p className="text-sm font-bold text-muted">Bizimlə işləyənlər</p>
          <ul className="mt-6 flex flex-wrap items-baseline gap-x-10 gap-y-3 md:gap-x-16">
            {clients.map((c) => (
              <li
                key={c.ad}
                className="text-[clamp(26px,3.4vw,48px)] font-extrabold tracking-tight text-ink/25 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink"
              >
                {c.ad}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
