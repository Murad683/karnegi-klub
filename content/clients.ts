// Loqolar müvəqqətidir (placeholder): 190×110 piksel, ağ fonlu, rəsmi vektor deyil.
// Yayımdan əvvəl: (1) hər müştərinin adının sayta yazılmasına Nəcəf bəydən təsdiq alın,
// (2) rəsmi, yüksək keyfiyyətli loqoları əvəz edin. "DİN" loqosunun tam adı təsdiq olunmalıdır.
// Kapital Bank və Paşa Bank görüş qeydlərində rəqibin müştəriləri kimi keçir, buraya YAZILMIR.
export type Client = { ad: string; logo: string; placeholder: boolean };

export const clients: Client[] = [
  { ad: "189 Taxi", logo: "/images/clients/189-taxi.png", placeholder: true },
  { ad: "Red Bull", logo: "/images/clients/red-bull.png", placeholder: true },
  { ad: "Toyota", logo: "/images/clients/toyota.png", placeholder: true },
  { ad: "DİN", logo: "/images/clients/din.png", placeholder: true },
  { ad: "Lexus", logo: "/images/clients/lexus.png", placeholder: true },
  { ad: "SAT Group", logo: "/images/clients/sat-group.png", placeholder: true },
];
