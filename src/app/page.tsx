import { Hero } from "@/components/hero";
import ServiceSection from "@/components/ServiceSection";
import { Portfolio } from "@/components/portfolio";
import { SplashScreen } from "@/components/splash-screen";
import FeatureSection from "@/components/featureSection";
import TeamSection from "@/components/teamSection";

export default function Home() {
  return (
    <main>
      <SplashScreen />
      <Hero />
      <FeatureSection />
      <ServiceSection />
      <TeamSection />
      <Portfolio />
    </main>
  );
}
