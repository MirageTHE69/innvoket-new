import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Bebas_Neue } from "next/font/google";

const font = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const portfolioItems = [
  {
    title: "GLOBAL CONNECT",
    description:
      "Pixel Studio, a renowned creative agency, wanted a complete overhaul of their brand identity. We delivered a vibrant new logo, a cohesive brand strategy, and an engaging website",
    image: "/global-connect.avif",
    link: "/work/global-connect",
    services: ["Web Development", "Mobile App Development"],
  },
  {
    title: "PIXEL STUDIO",
    description:
      "Pixel Studio, a renowned creative agency, wanted a complete overhaul of their brand identity. We delivered a vibrant new logo, a cohesive brand strategy, and an engaging website.",
    image: "/global-connect.avif",
    link: "/work/pixel-studio",
    services: ["Brand Identity", "Web Design", "Strategy"],
  },
  {
    title: "NOVA TECH",
    description:
      "Revolutionizing the tech industry with cutting-edge solutions and forward-thinking design implementations.",
    image: "/global-connect.avif",
    link: "/work/nova-tech",
    services: ["Tech Solutions", "UI/UX Design", "Development"],
  },
];

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
}) {
  const scrollRef = useRef<HTMLElement | null>(null); // New ref for useScroll
  const [inViewRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const y = useTransform(scrollYProgress, [0, 1, 1], [100, 0, -100]);

  return (
    <motion.div
      ref={(node) => {
        scrollRef.current = node;
        inViewRef(node); // Assign the node to inViewRef as well
      }}
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen flex sticky top-0"
    >
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black p-8 rounded-3xl overflow-hidden shadow-xl border border-gray-700 h-[560px]">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12">
              <h3
                className={cn(
                  "text-4xl md:text-5xl font-bold text-white mb-6",
                  font.className
                )}
              >
                {item.title}
              </h3>
              <p className="text-gray-400 mb-8 text-lg">{item.description}</p>
              <div className="mb-8">
                <h4
                  className={cn(
                    "text-[hsl(var(--primary))] mb-3 tracking-wide",
                    font.className
                  )}
                >
                  TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-3">
                  {item.services.map((service) => (
                    <span
                      key={service}
                      className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <button className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))/80] transition-colors text-lg">
                Check it out! <ArrowUpRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-background relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20"
      >
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[hsl(var(--primary))] text-[hsl(var(--primary))] text-sm font-medium">
          Portfolio
        </div>
        <h2
          className={cn(
            "text-4xl md:text-6xl font-bold text-white mb-6",
            font.className
          )}
        >
          BEHAVIOR SHOWS WORTH
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg px-4">
          We specialize in transforming businesses into extraordinary brands.
          We're passionate about continuing our mission. Explore our stellar
          client roster and the results-driven strategies we're implementing for
          them.
        </p>
      </motion.div>

      <div className="relative">
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
