// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils"; // Named import
import { Button } from "./button"; // Named import
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const font = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src="/bg.jpg"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="filter brightness-125" // Increase brightness to 125%
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0" />

      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
        <motion.h1
          variants={itemVariants}
          className={cn(
            "text-4xl md:text-[120px] font-bold tracking-wide text-white mb-4 leading-tight md:leading-[1.02]",
            font.className
          )}
        >
          <motion.span
            variants={itemVariants}
            className="text-[hsl(var(--primary))] text-glow inline-block"
          >
            INNOVATIVE
          </motion.span>{" "}
          <motion.span variants={itemVariants} className="inline-block">
            DESIGN
          </motion.span>
          <br />
          <motion.span variants={itemVariants} className="inline-block">
            FOR YOUR{" "}
          </motion.span>
          <motion.span
            variants={itemVariants}
            className="text-[hsl(var(--primary))] text-glow inline-block"
          >
            BUSINESS!
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto font-normal text-base md:text-xl text-white/90"
        >
          Top-tier design solutions for tech firms and emerging businesses.
          Ditch the typical aesthetic methods and embrace efficiency and
          originality. Coming soon.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10">
          <Button
            size="lg"
            className="bg-[hsl(var(--primary))] text-black hover:bg-[hsl(var(--primary))/90] font-semibold px-8 py-6 text-lg transform transition-transform hover:scale-105"
          >
            Learn more
          </Button>
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-[1]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: ["-20%", "120%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
