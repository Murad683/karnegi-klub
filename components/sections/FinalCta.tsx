import { RegisterButton } from "../Button";
import { Reveal } from "../motion/Reveal";

export function FinalCta() {
  return (
    <section className="px-3 pb-3 md:px-6 md:pb-6">
      <div className="relative overflow-hidden rounded-[28px] bg-orange px-6 py-20 text-center text-white md:rounded-[44px] md:py-32">
        <Reveal>
          <h2 className="display text-[14vw] md:text-[6.6vw] min-[1700px]:text-[108px]">
            Başlamağa
            <br className="md:hidden" /> hazırsan?
          </h2>
          <p className="mx-auto mt-8 max-w-md text-lg font-medium leading-relaxed text-white/90">
            Gəlin, özünüz görün. Yerinizi ayırın, qalanını biz həll edək.
          </p>
          <div className="mt-10 flex justify-center">
            <RegisterButton variant="white" size="lg">
              İlk dərsə yazıl
            </RegisterButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
