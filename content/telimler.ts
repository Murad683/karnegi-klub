// `qisa` mətnləri müvəqqətidir (placeholder) — Nəcəf bəy təsdiq etməlidir.
// `tone` — təlim blokunun yumşaq rəng sxemi (bax: components/sections/TelimBlock.tsx).
export type Tone = "sky" | "sun" | "peach" | "mint" | "mist";

export type Telim = {
  slug: string;
  ad: string;
  sekil: string;
  qisa: string;
  tone: Tone;
  placeholder: boolean;
};

export const telimler: Telim[] = [
  {
    slug: "xarizmatik-natiq",
    ad: "Xarizmatik Natiq",
    sekil: "/images/telimler/natiq.jpg",
    qisa: "Auditoriya qarşısında qorxusuz, inamlı və təsirli danışın.",
    tone: "sky",
    placeholder: true,
  },
  {
    slug: "beyin-xeritesi",
    ad: "Beyin Xəritəsi",
    sekil: "/images/telimler/beyin.jpg",
    qisa: "Fikirləri sistemləşdirin, daha tez öyrənin və yadda saxlayın.",
    tone: "sun",
    placeholder: true,
  },
  {
    slug: "time-management",
    ad: "Time Management",
    sekil: "/images/telimler/time.jpg",
    qisa: "Vaxtınızı idarə edin, vacib işlərə yer açın.",
    tone: "peach",
    placeholder: true,
  },
  {
    slug: "effektiv-satis",
    ad: "Effektiv Satış",
    sekil: "/images/telimler/satis.jpg",
    qisa: "Müştərini başa düşün və inamlı şəkildə satın.",
    tone: "mint",
    placeholder: true,
  },
  {
    slug: "stress-management",
    ad: "Stress Management",
    sekil: "/images/telimler/stress.jpg",
    qisa: "Gərginliyi idarə edin, sakit və aydın qalın.",
    tone: "mist",
    placeholder: true,
  },
  {
    slug: "ideyalar-generatoru",
    ad: "İdeyalar Generatoru",
    sekil: "/images/telimler/ideya.jpg",
    qisa: "Yaradıcı düşünməyi öyrənin, yeni ideyalar tapın.",
    tone: "sky",
    placeholder: true,
  },
];
