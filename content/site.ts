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
    { name: "Instagram", href: "https://www.instagram.com/karnegi_klub/" },
    { name: "TikTok", href: "https://www.tiktok.com/@dr.nacafallahverdiyev" }, // Nəcəf bəyin şəxsi hesabı
    { name: "YouTube", href: "https://www.youtube.com/@dr.ncfallahverdiyev6665" }, // Nəcəf bəyin kanalı
    { name: "Facebook", href: "https://www.facebook.com/KarnegiKlub" },
  ],
} as const;

// Qalereya və Haqqımızda səhifələri hazır olanda real marşrutlara çevrilir.
// `desc` — mobil menyuda linkin altında göstərilən, hara aparacağını izah edən qısa cümlə.
export const nav = [
  { label: "Təlimlər", href: "/telimler/", desc: "Altı təlim və yazılmaq" },
  { label: "Haqqımızda", href: "/haqqimizda/", desc: "Təlimçi və tarixçə" },
  { label: "Əlaqə", href: "/elaqe/", desc: "Telefon və ünvan" },
] as const;

// Xəritə: iframe yox, Google Maps axtarış linki (üçüncü tərəf yüklənməsi və cookie olmasın).
// Dəqiq koordinat gələndə iframe əlavə etmək olar.
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

export const whatsappHello = "Salam! Karnegi Klub haqqında məlumat almaq istəyirəm.";

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
