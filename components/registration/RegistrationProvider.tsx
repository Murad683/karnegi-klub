"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { buildWhatsappLink } from "@/content/site";
import { inputClass, telefonDuzgunDur } from "@/lib/forms";
import { telimler } from "@/content/telimler";

type Ctx = { open: (telimSlug?: string) => void };
const RegistrationContext = createContext<Ctx>({ open: () => {} });

export const useRegistration = () => useContext(RegistrationContext);

type Errors = { ad?: string; telefon?: string };


export function RegistrationProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [ad, setAd] = useState("");
  const [telefon, setTelefon] = useState("");
  const [telim, setTelim] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const open = useCallback((slug?: string) => {
    setTelim(slug ?? "");
    setErrors({});
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (ad.trim().length < 2) next.ad = "Adınızı yazın";
    if (!telefonDuzgunDur(telefon)) next.telefon = "Telefon nömrəsini düzgün yazın";
    setErrors(next);
    if (next.ad || next.telefon) return;

    const secilen = telimler.find((t) => t.slug === telim)?.ad;
    const mesaj =
      `Salam! Mən ${ad.trim()}. Karnegi Klubun pulsuz ilk dərsinə yazılmaq istəyirəm.` +
      (secilen ? ` Maraqlandığım təlim: ${secilen}.` : "") +
      ` Nömrəm: ${telefon.trim()}.`;
    window.open(buildWhatsappLink(mesaj), "_blank", "noopener");
    setIsOpen(false);
  }

  return (
    <RegistrationContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        onClose={() => setIsOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setIsOpen(false);
        }}
        aria-labelledby="reg-title"
        className="reg-dialog m-auto w-[calc(100%-2rem)] max-w-md rounded-[28px] bg-white p-0 text-ink shadow-[0_40px_100px_-30px_rgba(11,27,51,0.5)] backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
      >
        <form onSubmit={submit} noValidate className="p-7 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center rounded-full bg-sun px-3.5 py-1 text-xs font-bold text-ink">
                İlk dərs pulsuzdur
              </p>
              <h2 id="reg-title" className="display mt-4 text-[44px]">
                Yerini ayır
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Bağla"
              className="-mr-2 -mt-2 grid size-11 place-items-center rounded-full bg-mist text-ink transition-colors duration-300 hover:bg-sky hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <label className="mt-7 block text-sm font-bold">
            Adınız
            <input
              value={ad}
              onChange={(e) => setAd(e.target.value)}
              autoComplete="name"
              placeholder="Aysel Məmmədova"
              aria-invalid={!!errors.ad}
              className={inputClass}
            />
            {errors.ad && <span className="mt-1.5 block text-sm font-semibold text-orange">{errors.ad}</span>}
          </label>

          <label className="mt-5 block text-sm font-bold">
            Telefon
            <input
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+994 50 123 45 67"
              aria-invalid={!!errors.telefon}
              className={inputClass}
            />
            {errors.telefon && (
              <span className="mt-1.5 block text-sm font-semibold text-orange">{errors.telefon}</span>
            )}
          </label>

          <label className="mt-5 block text-sm font-bold">
            Təlim <span className="font-medium text-muted">(istəyə görə)</span>
            <select value={telim} onChange={(e) => setTelim(e.target.value)} className={inputClass}>
              <option value="">Hələ seçməmişəm</option>
              {telimler.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.ad}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-orange px-10 py-5 text-[17px] font-bold text-white shadow-[0_16px_36px_-14px_rgba(244,41,2,0.6)] transition-colors duration-300 hover:bg-orange-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            WhatsApp ilə göndər
          </button>
          <p className="mt-4 text-center text-sm font-medium text-muted">
            Mesaj WhatsApp-da açılacaq, göndərməyiniz kifayətdir.
          </p>
        </form>
      </dialog>
    </RegistrationContext.Provider>
  );
}
