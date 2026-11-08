"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./LogoMark";
import { RegisterButton } from "./Button";
import { nav, site } from "@/content/site";

type Mode = "top" | "hidden" | "floating";

// Apple tipli yumşaq əyri: yavaş başlayır, rahat dayanır.
const APPLE = [0.32, 0.72, 0, 1] as const;

// Mobil menyu hamburger düyməsinin olduğu küncdən dairə kimi açılır və geri yığılır.
const ORIGIN = "calc(100% - 40px) 36px";
const CLOSED = `circle(0px at ${ORIGIN})`;
const OPEN = `circle(1500px at ${ORIGIN})`;

export function Header() {
  const [mode, setMode] = useState<Mode>("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const acc = useRef(0);

  // Aşağı scroll → gizlən, yuxarı scroll → üzən şüşə lövhə, ən yuxarıda → şəffaf.
  // Kiçik titrəmələr menyunu oynatmasın deyə hərəkət yığılıb 14px-dən keçəndə qərar verilir.
  useMotionValueEvent(scrollY, "change", (y) => {
    const d = y - lastY.current;
    lastY.current = y;
    if (y < 40) {
      acc.current = 0;
      setMode("top");
      return;
    }
    if (Math.sign(d) !== Math.sign(acc.current)) acc.current = 0;
    acc.current += d;
    if (acc.current > 14) setMode("hidden");
    else if (acc.current < -14) setMode("floating");
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const floating = mode !== "top";
  const hidden = mode === "hidden" && !menuOpen;
  const ink = floating ? "text-ink" : "text-white";

  const item = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 44 },
          animate: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: APPLE } },
          exit: { opacity: 0, y: 16, transition: { duration: 0.25, ease: APPLE } },
        };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3">
      <motion.div
        initial={false}
        animate={{
          y: hidden ? -110 : 0,
          opacity: hidden ? 0 : 1,
          maxWidth: floating ? 1120 : 1500,
          marginTop: floating ? 12 : 0,
          borderRadius: floating ? 999 : 0,
          backgroundColor: floating ? "rgba(255,255,255,0.66)" : "rgba(255,255,255,0)",
          borderColor: floating ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0)",
          boxShadow: floating ? "0 10px 40px -12px rgba(11,27,51,0.28)" : "0 10px 40px -12px rgba(11,27,51,0)",
          backdropFilter: floating ? "blur(22px) saturate(1.6)" : "blur(0px) saturate(1)",
        }}
        transition={reduce ? { duration: 0 } : { duration: 0.7, ease: APPLE }}
        className="pointer-events-auto mx-auto flex w-full items-center justify-between gap-4 border px-4 py-3 md:px-8"
        style={{ WebkitBackdropFilter: "inherit" }}
      >
        <a href="#" aria-label="Karnegi Klub — ana səhifə">
          <LogoMark tone={floating ? "dark" : "light"} />
        </a>

        <nav aria-label="Əsas menyu" className="hidden items-center gap-9 md:flex">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className={`text-[16px] font-semibold transition-[opacity,color] duration-500 hover:opacity-60 ${ink}`}
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden sm:block">
            <RegisterButton variant={floating ? "orange" : "white"} size="sm">
              Yerini ayır
            </RegisterButton>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Menyunu aç"
            aria-expanded={menuOpen}
            className={`grid size-11 place-items-center transition-colors duration-500 md:hidden ${ink}`}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
              <path d="M3 8h20M3 18h20" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menyu"
            initial={reduce ? { opacity: 0 } : { clipPath: CLOSED }}
            animate={reduce ? { opacity: 1 } : { clipPath: OPEN }}
            exit={reduce ? { opacity: 0 } : { clipPath: CLOSED, transition: { duration: 0.6, ease: APPLE } }}
            transition={{ duration: reduce ? 0 : 0.9, ease: APPLE }}
            className="pointer-events-auto fixed inset-0 z-50 flex flex-col bg-sky px-5 py-4"
          >
            <motion.div className="flex items-center justify-between" {...item(0.15)}>
              <LogoMark tone="light" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Menyunu bağla"
                className="grid size-11 place-items-center text-white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
            <nav className="mt-9 flex flex-col">
              {nav.map((i, idx) => (
                <motion.a
                  key={i.href}
                  href={i.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center gap-4 border-t border-white/40 py-5 last:border-b active:opacity-70"
                  {...item(0.22 + idx * 0.08)}
                >
                  <span className="flex-1">
                    <span className="display block text-[clamp(26px,8.2vw,34px)] text-white">{i.label}</span>
                    <span className="mt-1 block text-[14px] font-semibold text-white/85">{i.desc}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-ink transition-transform duration-500 group-active:translate-x-0.5"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18">
                      <path d="M3 9h12M10 4l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div className="mt-6 text-[14px] font-semibold leading-relaxed text-white/90" {...item(0.46)}>
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              {site.address}
            </motion.div>
            <motion.div className="mt-auto pb-6" onClick={() => setMenuOpen(false)} {...item(0.54)}>
              <RegisterButton className="w-full">İlk dərsə yazıl</RegisterButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
