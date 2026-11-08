import { RegisterButton } from "../Button";
import { Reveal } from "../motion/Reveal";

// Sadə mərkəz: blok və rəngli fon yoxdur, böyük başlıq, bir əsas düymə və bir ikinci dərəcəli link.
export function FinalCta() {
  return (
    <section className="bg-white px-4 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1500px] border-t border-ink/10 pt-20 text-center md:pt-28">
        <Reveal>
          <h2 className="display text-[14vw] text-ink md:text-[6.4vw] min-[1700px]:text-[96px]">
            Başlamağa
            <br className="md:hidden" /> hazırsan?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg font-medium leading-relaxed text-muted">
            Gəlin, özünüz görün. Yerinizi ayırın, qalanını biz həll edək.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <RegisterButton size="lg">İlk dərsə yazıl</RegisterButton>
            <a
              href="#telimler"
              className="border-b-2 border-ink pb-0.5 font-bold text-ink transition-opacity duration-500 hover:opacity-60"
            >
              Əvvəl təlimlərə bax
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
