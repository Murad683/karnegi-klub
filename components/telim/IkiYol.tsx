import { LinkButton, RegisterButton } from "../Button";
import { Reveal } from "../motion/Reveal";
import { SectionHeading } from "./SectionHeading";
import { buildWhatsappLink } from "@/content/site";
import type { HazirTelim } from "@/content/telimler";

// Açıq təlimlər (fərdi qeydiyyat) və korporativ təlimlər (şirkət üçün təklif) üçün iki ayrı yol.
export function IkiYol({ telim }: { telim: HazirTelim }) {
  const teklif = buildWhatsappLink(`Salam! Şirkətimiz üçün "${telim.seoAd}" barədə təklif almaq istəyirik.`);
  return (
    <section className="bg-mist px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading>Necə qoşulmaq istəyirsiniz?</SectionHeading>
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
          <Reveal className="h-full">
            <div className="flex h-full flex-col items-center rounded-[28px] bg-white p-8 text-center md:items-start md:rounded-[36px] md:p-12 md:text-left">
              <p className="text-sm font-bold text-ink/60">Fərdi</p>
              <h3 className="display mt-2 text-[8vw] text-ink md:text-[2.8vw] min-[1700px]:text-[44px]">Açıq qrup</h3>
              <p className="mt-4 max-w-sm text-lg font-medium leading-relaxed text-ink/80">
                Hər kəs üçün açıq qruplara qoşulun və özünüz üçün öyrənin.
              </p>
              <div className="mt-8 md:mt-auto md:pt-8">
                <RegisterButton telimSlug={telim.slug} variant="ink" size="md">
                  Yerini ayır
                </RegisterButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col items-center rounded-[28px] bg-white p-8 text-center md:items-start md:rounded-[36px] md:p-12 md:text-left">
              <p className="text-sm font-bold text-ink/60">Şirkətiniz üçün</p>
              <h3 className="display mt-2 text-[8vw] text-ink md:text-[2.8vw] min-[1700px]:text-[44px]">Korporativ</h3>
              <p className="mt-4 max-w-sm text-lg font-medium leading-relaxed text-ink/80">
                Komandanız üçün ayrıca proqram: təklifi WhatsApp ilə sorğulayın.
              </p>
              <div className="mt-8 md:mt-auto md:pt-8">
                <LinkButton href={teklif} external variant="ink" size="md">
                  Təklif istə
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
