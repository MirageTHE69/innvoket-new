"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsVisible(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] via-[#212121] to-[#000000]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => setIsVisible(false)}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/logo.png"
          alt="Innvoket Logo"
          className="w-40 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-24"
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{
            scale: [1, 1.2, 1],
          }}
        />
      </motion.div>
    </motion.div>
  );
}
