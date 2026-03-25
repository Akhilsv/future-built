import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/intro.png";

const SplashIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      const exitTimer = setTimeout(() => {
        onComplete();
      }, 500); // wait for exit animation

      return () => clearTimeout(exitTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-dark px-4"
          aria-hidden="true"
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Core Helix"
            className="h-24 sm:h-28 md:h-40 lg:h-52 w-auto max-w-[70vw] sm:max-w-[55vw] md:max-w-none brightness-0 invert object-contain"
            initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* Tagline */}
          <motion.p
            className="mt-6 md:mt-10 text-xs sm:text-sm md:text-lg tracking-[0.18em] sm:tracking-[0.24em] md:tracking-[0.3em] uppercase font-body text-gold-light/90 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Upskill · Reskill · Build
          </motion.p>

          {/* Subtle gold line */}
          <motion.div
            className="mt-5 md:mt-6 h-px bg-gold/40 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "min(260px, 65vw)" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashIntro;
