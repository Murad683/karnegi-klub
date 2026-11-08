// Qeydiyyat pəncərəsi və əlaqə formasının ortaq giriş sahəsi üslubu.
export const inputClass =
  "mt-2 w-full rounded-2xl border border-ink/10 bg-mist/60 px-4 py-3.5 text-base font-medium text-ink outline-none transition duration-300 placeholder:text-muted/60 focus:border-sky focus:bg-white focus:ring-4 focus:ring-sky/20";

export const telefonDuzgunDur = (v: string) => v.replace(/\D/g, "").length >= 9;
