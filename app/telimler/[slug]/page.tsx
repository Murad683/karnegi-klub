import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { TelimHero } from "@/components/telim/TelimHero";
import { Kimler } from "@/components/telim/Kimler";
import { Proqram } from "@/components/telim/Proqram";
import { Neticeler } from "@/components/telim/Neticeler";
import { IkiYol } from "@/components/telim/IkiYol";
import { DigerTelimler } from "@/components/telim/DigerTelimler";
import { hazirTelimler, telimYolu } from "@/content/telimler";

// Statik export: yalnız generateStaticParams-da olan səhifələr mövcuddur.
export const dynamicParams = false;

export function generateStaticParams() {
  return hazirTelimler.map((t) => ({ slug: t.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const telim = hazirTelimler.find((t) => t.slug === slug);
  if (!telim) return {};
  const title = `${telim.seoAd} | Karnegi Klub`;
  const description = `${telim.qisa} Karnegi Klub, Bakı. İlk dərs pulsuzdur.`;
  return {
    title,
    description,
    alternates: { canonical: telimYolu(slug) },
    openGraph: { title, description, url: telimYolu(slug), siteName: "Karnegi Klub", locale: "az_AZ", type: "website" },
  };
}

export default async function TelimSehifesi({ params }: Props) {
  const { slug } = await params;
  const telim = hazirTelimler.find((t) => t.slug === slug);
  if (!telim) notFound();

  // Qiymət, reytinq və müddət YOXDUR: real məlumat olmadan uydurulmur.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: telim.seoAd,
    description: telim.qisa,
    provider: { "@type": "Organization", name: "Karnegi Klub", sameAs: "https://karnegi.az" },
  };

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <TelimHero telim={telim} />
        <Kimler items={telim.kimler} />
        <Proqram items={telim.proqram} />
        <Neticeler items={telim.neticeler} />
        <IkiYol telim={telim} />
        <DigerTelimler cari={telim.slug} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
