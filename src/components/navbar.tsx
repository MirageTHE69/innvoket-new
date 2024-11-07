"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "WORK", href: "/work" },
  { label: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const navWidth = useTransform(
    scrollY,
    [0, 100],
    ["100%", "min(90%, 1000px)"]
  );

  const navPosition = useTransform(scrollY, [0, 100], ["0%", "50%"]);

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.9)"]
  );

  const navBorder = useTransform(scrollY, [0, 100], ["0px", "1px"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{
        width: navWidth,
        left: isScrolled ? "50%" : "0",
        x: isScrolled ? "-50%" : "0",
        background: navBackground,
        borderWidth: navBorder,
      }}
      className={cn(
        "fixed top-6 z-50 rounded-full border-[hsl(var(--primary))]",
        "transition-all duration-300 ease-in-out backdrop-blur-md",
        isScrolled ? "top-6" : "top-0 rounded-none"
      )}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-3xl font-bold tracking-wide text-white hover:text-[hsl(var(--primary))] transition-colors duration-300"
              style={{
                fontFamily: "Bebas Neue, sans-serif",
                letterSpacing: "0.1em",
                transform: "scale(1.05)",
              }}
            >
              INNVOKET
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 font-normal text-white hover:text-[hsl(var(--primary))] relative group",
                    "transition-colors duration-200"
                  )}
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[hsl(var(--primary))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
