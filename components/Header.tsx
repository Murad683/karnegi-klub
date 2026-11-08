"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./LogoMark";
import { RegisterButton } from "./Button";
import { nav } from "@/content/site";

type Mode = "top" | "hidden" | "floating";

// Apple tipli yumşaq əyri: yavaş başlayır, rahat dayanır.
const APPLE = [0.32, 0.72, 0, 1] as const;

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
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[16px] font-semibold transition-[opacity,color] duration-500 hover:opacity-60 ${ink}`}
            >
              {item.label}
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

      {menuOpen && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex flex-col bg-sky px-5 py-4" role="dialog" aria-modal="true" aria-label="Menyu">
          <div className="flex items-center justify-between">
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
          </div>
          <nav className="mt-12 flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="display py-1 text-[12.5vw] text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pb-6" onClick={() => setMenuOpen(false)}>
            <RegisterButton className="w-full">İlk dərsə yazıl</RegisterButton>
          </div>
        </div>
      )}
    </header>
  );
}
