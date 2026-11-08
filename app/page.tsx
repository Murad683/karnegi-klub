import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Telimler } from "@/components/sections/Telimler";
import { NecefBey } from "@/components/sections/NecefBey";
import { Reviews } from "@/components/sections/Reviews";
import { Clients } from "@/components/sections/Clients";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Telimler />
        <NecefBey />
        <Reviews />
        <Clients />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
