import { Hero } from "@/components/hero";
import ServiceSection from "@/components/ServiceSection";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceSection />
      <Portfolio />
    </main>
  );
}
