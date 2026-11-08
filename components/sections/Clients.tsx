import { clients } from "@/content/clients";
import { Reveal } from "../motion/Reveal";

// Loqolar çoxaldıqca da ekranı dolduracaq şəkildə siyahını təkrarlayırıq (ən azı ~2600px enində).
const TILE_PX = 216;
const REPEAT = Math.max(1, Math.ceil(2600 / (clients.length * TILE_PX)));

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3 md:gap-4 md:pr-4" aria-hidden={hidden || undefined}>
      {Array.from({ length: REPEAT }).flatMap((_, r) =>
        clients.map((c) => (
          <li
            key={`${r}-${c.ad}`}
            className="flex h-24 w-[168px] shrink-0 items-center justify-center rounded-3xl bg-soft p-5 md:h-28 md:w-[200px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.logo}
              alt={hidden || r > 0 ? "" : c.ad}
              loading="lazy"
              decoding="async"
              className="h-full w-auto max-w-full object-contain mix-blend-multiply"
            />
          </li>
        )),
      )}
    </ul>
  );
}

// Müştərilər: yavaş, sonsuz karusel (loqo sayı artdıqca avtomatik uzanır). Loqolar həmişə rəngli.
export function Clients() {
  const seconds = Math.round(clients.length * REPEAT * 2.6);
  return (
    <section className="bg-white px-4 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1500px] border-t border-ink/10 pt-12 md:pt-16">
        <Reveal>
          <p className="text-center text-sm font-bold text-muted">Bizimlə işləyənlər</p>
          <div className="logo-marquee mt-8 overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)]">
            <div className="logo-track" style={{ ["--dur" as string]: `${seconds}s` }}>
              <Row />
              <Row hidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
