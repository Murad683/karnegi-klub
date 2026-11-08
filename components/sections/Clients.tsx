import { clients } from "@/content/clients";
import { Reveal } from "../motion/Reveal";

export function Clients() {
  return (
    <section className="bg-white px-4 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1500px] border-t border-ink/10 pt-12 md:pt-16">
        <Reveal>
          <p className="text-center text-sm font-bold text-muted">Bizimlə işləyənlər</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
            {clients.map((c) => (
              <li
                key={c.ad}
                className="group flex h-24 items-center justify-center rounded-3xl bg-soft p-5 md:h-28"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.ad}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-auto max-w-full object-contain opacity-60 mix-blend-multiply grayscale transition-[filter,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
