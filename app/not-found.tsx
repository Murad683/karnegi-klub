import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LinkButton } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Səhifə tapılmadı | Karnegi Klub",
  robots: { index: false },
};

// Statik exportda out/404.html kimi yaranır (nginx: error_page 404 /404.html).
export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="flex min-h-[80vh] items-center bg-mist px-4 pb-20 pt-36 md:px-10">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="text-sm font-bold text-ink/60">404</p>
            <h1 className="display mt-4 text-[13vw] text-ink md:text-[6.4vw] min-[1700px]:text-[100px]">
              Bu səhifə
              <br /> tapılmadı
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg font-medium leading-relaxed text-muted">
              Ünvan səhv yazılıb və ya səhifə köçürülüb.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
              <LinkButton href="/" size="lg">
                Ana səhifə
              </LinkButton>
              <Link
                href="/telimler/"
                className="border-b-2 border-ink pb-0.5 font-bold text-ink transition-opacity duration-500 hover:opacity-60"
              >
                Təlimlərə bax
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
