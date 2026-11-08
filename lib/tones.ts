import type { Tone } from "@/content/telimler";

// Saytda rəng sayı az saxlanılır: fon yalnız açıq mavi (sky-soft) və ağdır.
// `Tone` sahəsi content-də qalır (gələcəkdə lazım olarsa), amma bütün təlimlər eyni tonda göstərilir.
export const tones: Record<Tone, string> = {
  sky: "bg-sky-soft",
  sun: "bg-sky-soft",
  peach: "bg-sky-soft",
  mint: "bg-sky-soft",
  mist: "bg-sky-soft",
};
