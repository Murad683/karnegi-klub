import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ElaqeKartlari } from "@/components/elaqe/ElaqeKartlari";
import { KorporativForma } from "@/components/elaqe/KorporativForma";
import { SectionHeading } from "@/components/telim/SectionHeading";

const title = "Əlaqə | Karnegi Klub";
const description = "Karnegi Klub ilə əlaqə: telefon, WhatsApp, ünvan və şirkətiniz üçün korporativ təlim təklifi sorğusu.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/elaqe/" },
  openGraph: { title, description, url: "/elaqe/", siteName: "Karnegi Klub", locale: "az_AZ", type: "website" },
};

// LocalBusiness JSON-LD burada YOXDUR: ünvan köhnə saytdan götürülüb və hələ təsdiqlənməyib.
export default function ElaqeSehifesi() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        {/* Təlimlər səhifəsi kimi: tək açıq mavi bölmə, tünd başlıq, ağ kartlar. */}
        <section className="bg-mist px-4 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="text-center">
              <h1 className="display text-[12vw] text-ink md:text-[7vw] min-[1700px]:text-[112px]">Əlaqə</h1>
              <p className="mx-auto mt-6 max-w-md text-lg font-medium leading-relaxed text-muted">
                Sualınız var? Yazın və ya zəng edin.
              </p>
            </Reveal>
            <div className="mt-16 md:mt-20">
              <ElaqeKartlari />
            </div>

            <div className="mt-24 md:mt-32">
              <SectionHeading>Şirkətiniz üçün təklif</SectionHeading>
              <Reveal className="mx-auto mt-6 max-w-md text-center">
                <p className="text-lg font-medium leading-relaxed text-muted">
                  Komandanız üçün ayrıca proqram hazırlayaq. Qısa formanı doldurun.
                </p>
              </Reveal>
              <div className="mt-12 md:mt-16">
                <KorporativForma />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
