import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { RegistrationProvider } from "@/components/registration/RegistrationProvider";

// Tək şrift: Azərbaycan hərflərinin hamısı var (Ə ə İ ı Ğ Ş Ç Ö Ü skriptlə yoxlanıb).
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0099ff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://karnegi.az"),
  title: "Karnegi Klub — natiqlik və kommunikasiya təlimləri",
  description:
    "16 ildir Bakıda natiqlik, satış, vaxt idarəetməsi və stress menecmenti təlimləri. İlk dərs pulsuzdur.",
  alternates: { canonical: "/" },
  openGraph: { siteName: "Karnegi Klub", locale: "az_AZ", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <RegistrationProvider>{children}</RegistrationProvider>
      </body>
    </html>
  );
}
