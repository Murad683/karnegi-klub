type Props = {
  /** Eyni səhifədə bir neçə stiker üçün unikal id. */
  id: string;
  text?: string;
  className?: string;
};

// Fırlanan isti sarı stiker: saytın imzası (bir yerdə istifadə olunur).
export function Sticker({ id, text = "İlk dərs pulsuz", className = "" }: Props) {
  const ring = `${text} · ${text} ·`;
  return (
    <div className={`aspect-square ${className}`} aria-hidden="true">
      <div className="relative size-full">
        <svg viewBox="0 0 120 120" className="sticker-spin size-full">
          <circle cx="60" cy="60" r="58" fill="#FFD84D" />
          <defs>
            <path id={id} d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
          </defs>
          <text fontFamily="var(--font-jakarta), sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.6" fill="#0B1B33">
            <textPath href={`#${id}`}>{ring}</textPath>
          </text>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <svg viewBox="0 0 40 40" className="size-[28%]">
            <path d="M6 30 L30 10 M14 10 H30 V26" fill="none" stroke="#0B1B33" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
