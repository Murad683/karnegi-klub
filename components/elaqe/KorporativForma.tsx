"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsappLink } from "@/content/site";
import { telimler } from "@/content/telimler";
import { inputClass, telefonDuzgunDur } from "@/lib/forms";

type Errors = { ad?: string; sirket?: string; telefon?: string };

// Korporativ təklif sorğusu: backend yoxdur, doldurulan məlumatla WhatsApp mesajı açılır.
export function KorporativForma() {
  const [ad, setAd] = useState("");
  const [sirket, setSirket] = useState("");
  const [telefon, setTelefon] = useState("");
  const [telim, setTelim] = useState("");
  const [qeyd, setQeyd] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (ad.trim().length < 2) next.ad = "Adınızı yazın";
    if (sirket.trim().length < 2) next.sirket = "Şirkətin adını yazın";
    if (!telefonDuzgunDur(telefon)) next.telefon = "Telefon nömrəsini düzgün yazın";
    setErrors(next);
    if (next.ad || next.sirket || next.telefon) return;

    const secilen = telimler.find((t) => t.slug === telim)?.seoAd;
    const mesaj =
      `Salam! Mən ${ad.trim()}, "${sirket.trim()}" şirkətindən yazıram. Şirkətimiz üçün təlim təklifi almaq istəyirik.` +
      (secilen ? ` Maraqlandığımız təlim: ${secilen}.` : "") +
      (qeyd.trim() ? ` Qeyd: ${qeyd.trim()}.` : "") +
      ` Əlaqə nömrəsi: ${telefon.trim()}.`;
    window.open(buildWhatsappLink(mesaj), "_blank", "noopener");
  }

  const xeta = (m?: string) => m && <span className="mt-1.5 block text-sm font-semibold text-orange">{m}</span>;

  return (
    <form
      onSubmit={submit}
      noValidate
      className="mx-auto max-w-[760px] rounded-[28px] bg-white p-7 md:rounded-[32px] md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-bold text-ink">
          Adınız
          <input
            value={ad}
            onChange={(e) => setAd(e.target.value)}
            autoComplete="name"
            placeholder="Aysel Məmmədova"
            aria-invalid={!!errors.ad}
            className={inputClass}
          />
          {xeta(errors.ad)}
        </label>
        <label className="block text-sm font-bold text-ink">
          Şirkət
          <input
            value={sirket}
            onChange={(e) => setSirket(e.target.value)}
            autoComplete="organization"
            placeholder="Şirkətin adı"
            aria-invalid={!!errors.sirket}
            className={inputClass}
          />
          {xeta(errors.sirket)}
        </label>
        <label className="block text-sm font-bold text-ink">
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
          {xeta(errors.telefon)}
        </label>
        <label className="block text-sm font-bold text-ink">
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
      </div>
      <label className="mt-5 block text-sm font-bold text-ink">
        Qeyd <span className="font-medium text-muted">(istəyə görə)</span>
        <textarea
          value={qeyd}
          onChange={(e) => setQeyd(e.target.value)}
          rows={3}
          placeholder="Komandanın ölçüsü, tarix, istəkləriniz"
          className={`${inputClass} resize-none`}
        />
      </label>
      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          type="submit"
          className="w-full rounded-full bg-orange px-10 py-5 text-[17px] font-bold text-white shadow-[0_16px_36px_-14px_rgba(244,41,2,0.6)] transition-[background-color,transform] duration-500 hover:-translate-y-0.5 hover:bg-orange-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:w-auto"
        >
          Təklif istə
        </button>
        <p className="text-center text-sm font-medium text-muted">
          Mesaj WhatsApp-da açılacaq, göndərməyiniz kifayətdir.
        </p>
      </div>
    </form>
  );
}
