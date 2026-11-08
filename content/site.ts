// Sayt üzrə ümumi məlumat. `placeholder: true` — real məlumatla əvəz olunmalıdır.
export const site = {
  name: "Karnegi Klub",
  phone: "+994 55 444-14-00",
  phoneHref: "tel:+994554441400",
  whatsappNumber: "994554441400",
  address: "Bakı ş., Murtuza Muxtarov küç. 53", // köhnə saytdan, təsdiq lazımdır
  tagline: "Natiqlik və kommunikasiya təlimləri.",
  stats: [
    { value: "16", label: "il təcrübə", placeholder: false },
    { value: "106", label: "qrup", placeholder: false },
    { value: "5000+", label: "məzun", placeholder: true },
  ],
  // URL boşdursa footer-də göstərilmir (ölü link olmasın).
  socials: [
    { name: "Instagram", href: "" },
    { name: "TikTok", href: "" },
    { name: "YouTube", href: "" },
    { name: "Facebook", href: "" },
  ],
} as const;

// Qalereya və Haqqımızda səhifələri hazır olanda real marşrutlara çevrilir.
export const nav = [
  { label: "Təlimlər", href: "#telimler" },
  { label: "Haqqımızda", href: "#necef-bey" },
  { label: "Əlaqə", href: "#elaqe" },
] as const;

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
