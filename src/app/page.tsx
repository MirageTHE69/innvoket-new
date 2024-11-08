import { Hero } from "@/components/hero";
import ServiceSection from "@/components/ServiceSection";
import { Portfolio } from "@/components/portfolio";
import { SplashScreen } from "@/components/splash-screen";

export default function Home() {
  return (
    <main>
      <SplashScreen />
      <Hero />
      <ServiceSection />
      <Portfolio />
    </main>
  );
}
