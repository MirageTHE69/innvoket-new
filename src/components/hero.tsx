import { fontBebasNeue } from "@/app/layout";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <div className="hero-pattern min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1
          className={cn(
            "text-4xl md:text-[120px] font-bold tracking-wide text-white mb-4 leading-tight md:leading-[1.02]",
            fontBebasNeue.className
          )}
        >
          <span className="text-[hsl(var(--primary))] text-glow">
            INNOVATIVE
          </span>{" "}
          DESIGN
          <br />
          FOR YOUR{" "}
          <span className="text-[hsl(var(--primary))] text-glow">
            BUSINESS!
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto font-normal text-base md:text-xl text-white">
          Top-tier design solutions for tech firms and emerging businesses.
          Ditch the typical aesthetic methods and embrace efficiency and
          originality. Coming soon.
        </p>

        <div className="mt-10">
          <Button
            size="lg"
            className="bg-[hsl(var(--primary))] text-black hover:bg-[hsl(var(--primary))/90] font-semibold px-8 py-6 text-lg"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
