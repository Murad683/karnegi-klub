import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RegisterButton } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { TelimKarti } from "@/components/telim/TelimKarti";
import { hazirTelimler } from "@/content/telimler";

const title = "Təlimlər | Karnegi Klub";
const description =
  "Karnegi Klubun təlimləri: natiqlik, beyin xəritəsi, vaxt idarəetməsi, satış, stress və yaradıcı düşüncə. Açıq qruplar və korporativ təlimlər.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/telimler/" },
  openGraph: { title, description, url: "/telimler/", siteName: "Karnegi Klub", locale: "az_AZ", type: "website" },
};

// Təlimlər siyahısı: menyu və footer-dəki "Təlimlər" linki buraya aparır.
export default function TelimlerSehifesi() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <section className="bg-mist px-4 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-[1300px]">
            <Reveal className="text-center">
              <h1 className="display text-[12vw] text-ink md:text-[7vw] min-[1700px]:text-[112px]">Təlimlərimiz</h1>
              <p className="mx-auto mt-6 max-w-md text-lg font-medium leading-relaxed text-muted">
                Hər biri ayrı bir bacarıq. Sizə uyğun olanı seçin.
              </p>
              <div className="mt-8">
                <RegisterButton size="lg">İlk dərsə pulsuz yazıl</RegisterButton>
              </div>
            </Reveal>
            <ul className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-20 md:gap-6 lg:grid-cols-3">
              {hazirTelimler.map((t, i) => (
                <li key={t.slug}>
                  <TelimKarti telim={t} index={i} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
