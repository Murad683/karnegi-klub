// DİQQƏT: `qisa`, `kimler`, `proqram`, `neticeler` mətnləri nümunədir (placeholder), Nəcəf bəy təsdiq etməlidir.
// Qiymət, müddət və qrafik buraya YAZILMIR (real məlumat gələndə əlavə olunacaq).
// `tone` — təlim blokunun yumşaq rəng sxemi (bax: lib/tones.ts).
// `seoAd` — köhnə saytdakı axtarış adı (səhifənin <title>-ı və mətni üçün).
// `kimler`, `proqram`, `neticeler` doldurulmuş təlimlər üçün /telimler/[slug] səhifəsi yaranır.
export type Tone = "sky" | "sun" | "peach" | "mint" | "mist";

export type Telim = {
  slug: string;
  ad: string;
  seoAd: string;
  sekil: string;
  qisa: string;
  tone: Tone;
  placeholder: boolean;
  kimler?: string[];
  proqram?: string[];
  neticeler?: string[];
};

export const telimler: Telim[] = [
  {
    slug: "xarizmatik-natiq",
    ad: "Xarizmatik Natiq",
    seoAd: "Xarizmatik Natiq təlimi",
    sekil: "/images/telimler/natiq.webp",
    qisa: "Auditoriya qarşısında qorxusuz, inamlı və təsirli danışın.",
    tone: "sky",
    placeholder: true,
    kimler: [
      "Auditoriya qarşısında danışmağa çəkinənlər",
      "Təqdimat və çıxış bacarığını gücləndirmək istəyənlər",
      "Rəhbərlik və komanda ilə ünsiyyəti yaxşılaşdırmaq istəyənlər",
    ],
    proqram: [
      "Çıxış qorxusunu anlamaq və idarə etmək",
      "Səs, nitq və tempin düzgün istifadəsi",
      "Bədən dili və göz təması",
      "Hekayə ilə təsir etmək",
      "Canlı məşq və geribildirim",
    ],
    neticeler: [
      "Auditoriya qarşısında özünüzü rahat hiss edirsiniz",
      "Fikrinizi aydın və inamla çatdırırsınız",
      "Çıxışa hazırlıq üçün öz üsulunuz olur",
    ],
  },
  {
    slug: "beyin-xeritesi",
    ad: "Beyin Xəritəsi",
    seoAd: "Mind Map (Beyin xəritəsi) treninqi",
    sekil: "/images/telimler/beyin.webp",
    qisa: "Fikirləri sistemləşdirin, daha tez öyrənin və yadda saxlayın.",
    tone: "sun",
    placeholder: true,
    kimler: [
      "Çoxlu məlumatı sistemləşdirmək istəyənlər",
      "Daha tez öyrənmək və yadda saxlamaq istəyənlər",
      "Plan və təqdimatlarını görüntülü qurmaq istəyənlər",
    ],
    proqram: [
      "Beyin xəritəsi nədir və necə işləyir",
      "Əsas fikri və budaqları müəyyən etmək",
      "Rəng, simvol və təsvirdən istifadə",
      "Dərs və iş mövzularını xəritəyə köçürmək",
      "Praktiki məşq və nümunələr",
    ],
    neticeler: [
      "Məlumatı aydın və yığcam şəkildə qurursunuz",
      "Daha tez öyrənir və daha yaxşı xatırlayırsınız",
      "Plan və fikirlərinizi görünən edirsiniz",
    ],
  },
  {
    slug: "time-management",
    ad: "Time Management",
    seoAd: "Time Management treninqi",
    sekil: "/images/telimler/time.webp",
    qisa: "Vaxtınızı idarə edin, vacib işlərə yer açın.",
    tone: "peach",
    placeholder: true,
    kimler: [
      "İşləri vaxtında çatdırmaqda çətinlik çəkənlər",
      "Prioritetləri düzgün seçmək istəyənlər",
      "İş və şəxsi həyat arasında balans axtaranlar",
    ],
    proqram: [
      "Vaxtın necə itdiyini görmək",
      "Prioritetləşdirmə üsulları",
      "Gündəlik və həftəlik planlama",
      "Diqqəti yayındıran amillərlə mübarizə",
      "Öz sistemini qurmaq",
    ],
    neticeler: [
      "Günün planını aydın qurursunuz",
      "Vacib işlərə daha çox vaxt ayırırsınız",
      "Gərginliyi azaldır, nəzarət hissini artırırsınız",
    ],
  },
  {
    slug: "effektiv-satis",
    ad: "Effektiv Satış",
    seoAd: "Effektiv Satış təlimi",
    sekil: "/images/telimler/satis.webp",
    qisa: "Müştərini başa düşün və inamlı şəkildə satın.",
    tone: "mint",
    placeholder: true,
    kimler: [
      "Satış və müştəri ilə işləyən mütəxəssislər",
      "Öz biznesini satmaq istəyən sahibkarlar",
      "Danışıqlarda inamını artırmaq istəyənlər",
    ],
    proqram: [
      "Müştərini və onun ehtiyacını anlamaq",
      "Sual vermək və dinləmək",
      "Təklifi inamla təqdim etmək",
      "Etirazlarla işləmək",
      "Canlı rol oyunları və geribildirim",
    ],
    neticeler: [
      "Müştərinin ehtiyacını daha aydın görürsünüz",
      "Təklifinizi inamla və təsirli təqdim edirsiniz",
      "Etirazlara sakit və hazırlıqlı cavab verirsiniz",
    ],
  },
  {
    slug: "stress-management",
    ad: "Stress Management",
    seoAd: "Stressin idarə edilməsi treninqi",
    sekil: "/images/telimler/stress.webp",
    qisa: "Gərginliyi idarə edin, sakit və aydın qalın.",
    tone: "mist",
    placeholder: true,
    kimler: [
      "Gərginlik və yorğunluq hiss edənlər",
      "İş təzyiqi altında sakit qalmaq istəyənlər",
      "Emosiyalarını daha yaxşı idarə etmək istəyənlər",
    ],
    proqram: [
      "Stressin necə yarandığını anlamaq",
      "Bədən və nəfəs üzərində işləmək",
      "Düşüncə və reaksiyaları idarə etmək",
      "Gündəlik rahatlama vərdişləri",
      "Çətin vəziyyətlər üçün şəxsi plan",
    ],
    neticeler: [
      "Gərginliyi tez fərq edir və idarə edirsiniz",
      "Çətin anlarda sakit və aydın qalırsınız",
      "Gündəlik həyatda daha rahat hiss edirsiniz",
    ],
  },
  {
    slug: "ideyalar-generatoru",
    ad: "İdeyalar Generatoru",
    seoAd: "İdeyalar Generatoru treninqi",
    sekil: "/images/telimler/ideya.webp",
    qisa: "Yaradıcı düşünməyi öyrənin, yeni ideyalar tapın.",
    tone: "sky",
    placeholder: true,
    kimler: [
      "Yeni ideyalara ehtiyacı olan komandalar və fərdlər",
      "Yaradıcı düşüncəsini inkişaf etdirmək istəyənlər",
      "Problemlərə fərqli yanaşmaq istəyənlər",
    ],
    proqram: [
      "Yaradıcı düşüncənin maneələri",
      "İdeya yaratma üsulları",
      "Qrupla beyin həmləsi",
      "İdeyanı yoxlamaq və seçmək",
      "Praktiki tapşırıqlar",
    ],
    neticeler: [
      "İstədiyiniz zaman yeni ideya yarada bilirsiniz",
      "Problemlərə fərqli bucaqdan baxırsınız",
      "İdeyanı real plana çevirmək üçün addımlarınız olur",
    ],
  },
];

export type HazirTelim = Telim & { kimler: string[]; proqram: string[]; neticeler: string[] };

// Səhifəsi olan təlimlər (məzmunu doldurulanlar).
export const hazirTelimler = telimler.filter(
  (t): t is HazirTelim => Boolean(t.kimler && t.proqram && t.neticeler),
);

export const telimYolu = (slug: string) => `/telimler/${slug}/`;
