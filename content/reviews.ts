// DİQQƏT: bunlar nümunə (placeholder) mətnlərdir. Real adlara uydurma rəy bağlanmır.
// Nəcəf bəydən real rəylər gələndə əvəz olunmalıdır.
export type Review = {
  ad: string;
  pese: string;
  metn: string;
  tone: "sun" | "sky" | "mint";
  placeholder: boolean;
};

export const reviews: Review[] = [
  {
    ad: "Tələbə adı",
    pese: "Peşə",
    metn: "Burada tələbənin real rəyi olacaq: təlimə qədər və sonrakı fərq, auditoriya qarşısında necə hiss etməsi.",
    tone: "sun",
    placeholder: true,
  },
  {
    ad: "Tələbə adı",
    pese: "Peşə",
    metn: "Burada ikinci tələbənin real rəyi olacaq: ən çox nəyi öyrəndiyi və hansı dəyişikliyi gördüyü.",
    tone: "sky",
    placeholder: true,
  },
  {
    ad: "Tələbə adı",
    pese: "Peşə",
    metn: "Burada üçüncü tələbənin real rəyi olacaq: təlimi niyə tövsiyə etdiyi.",
    tone: "mint",
    placeholder: true,
  },
];
