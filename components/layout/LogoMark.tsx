// Müvəqqəti loqo: rəngli halqa + yazı. Rəsmi rəngli loqo gələndə əvəz olunacaq.
export function LogoMark({ tone = "dark" }: { tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap text-[23px] font-extrabold tracking-tight ${
        tone === "light" ? "text-white" : "text-ink"
      }`}
    >
      <svg width="26" height="26" viewBox="0 0 30 30" aria-hidden="true">
        <circle cx="15" cy="15" r="11" fill="none" strokeWidth="6" stroke="var(--color-ring-red)" strokeDasharray="17.3 51.8" strokeDashoffset="0" transform="rotate(-90 15 15)" />
        <circle cx="15" cy="15" r="11" fill="none" strokeWidth="6" stroke="var(--color-ring-yellow)" strokeDasharray="17.3 51.8" strokeDashoffset="-17.3" transform="rotate(-90 15 15)" />
        <circle cx="15" cy="15" r="11" fill="none" strokeWidth="6" stroke="var(--color-ring-green)" strokeDasharray="17.3 51.8" strokeDashoffset="-34.6" transform="rotate(-90 15 15)" />
        <circle cx="15" cy="15" r="11" fill="none" strokeWidth="6" stroke="var(--color-ring-blue)" strokeDasharray="17.3 51.8" strokeDashoffset="-51.9" transform="rotate(-90 15 15)" />
      </svg>
      Karnegi
    </span>
  );
}
