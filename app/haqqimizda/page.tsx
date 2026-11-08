import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Clients } from "@/components/sections/Clients";
import { SectionHeading } from "@/components/telim/SectionHeading";
import { Yol } from "@/components/haqqimizda/Yol";
import { haqqimizda } from "@/content/haqqimizda";
import { necef } from "@/content/necef";

const title = "Haqqımızda | Karnegi Klub";
const description =
  "Karnegi Klub 2011-ci ildə Dr. Nəcəf Allahverdiyev tərəfindən təsis edilib: natiqlik, ünsiyyət və özünüifadə təlimləri. Təlimçi və tarixçə.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/haqqimizda/" },
  openGraph: { title, description, url: "/haqqimizda/", siteName: "Karnegi Klub", locale: "az_AZ", type: "website" },
};

// Person/Organization JSON-LD burada YOXDUR: məlumat köhnə saytdan götürülüb və hələ təsdiqlənməyib.
export default function HaqqimizdaSehifesi() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <section className="bg-mist px-4 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="text-center">
              <h1 className="display text-[12vw] text-ink md:text-[7vw] min-[1700px]:text-[112px]">Haqqımızda</h1>
              <p className="mx-auto mt-6 max-w-md text-lg font-medium leading-relaxed text-muted">{haqqimizda.sub}</p>
            </Reveal>

            <Reveal className="mx-auto mt-16 max-w-[720px] space-y-5 text-center md:mt-20">
              {haqqimizda.hekaye.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg font-medium leading-relaxed text-ink md:text-xl">
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="mt-24 md:mt-32">
              <Reveal className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/telimler/stress.jpg"
                  alt={necef.ad}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto size-[120px] rounded-full object-cover object-[50%_25%] shadow-[0_0_0_7px_var(--color-sun-soft)] md:size-[148px] md:shadow-[0_0_0_8px_var(--color-sun-soft)]"
                />
                <h2 className="display mt-8 text-[9vw] text-ink md:text-[4.2vw] min-[1700px]:text-[68px]">{necef.ad}</h2>
                <p className="mt-3 text-[15px] font-medium text-muted">{necef.rol}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="mx-auto mt-8 flex max-w-[860px] flex-wrap justify-center gap-2.5">
                  {haqqimizda.kredensiallar.map((k) => (
                    <li key={k} className="rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold text-ink">
                      {k}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="mt-24 md:mt-32">
              <SectionHeading>Yol xəritəsi</SectionHeading>
              <div className="mt-12 md:mt-16">
                <Yol />
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white pt-20 md:pt-28">
          <Clients />
        </div>

        <section className="bg-white px-4 pb-24 md:px-10 md:pb-32">
          <Reveal className="mx-auto flex max-w-[800px] flex-col items-center justify-center gap-5 text-center sm:flex-row sm:gap-8">
            <LinkButton href="/telimler/" size="lg">
              Təlimlərə bax
            </LinkButton>
            <Link
              href="/elaqe/"
              className="border-b-2 border-ink pb-0.5 font-bold text-ink transition-opacity duration-500 hover:opacity-60"
            >
              Bizimlə əlaqə
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
