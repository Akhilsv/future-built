import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/intro.png";

const SplashIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 500); // wait for exit animation
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-dark"
          aria-hidden="true"
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt=""
            className="h-46 md:h-52 brightness-0 invert"
            initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* Tagline */}
          <motion.p
            className="mt-8 md:mt-10 text-base md:text-lg tracking-[0.3em] uppercase font-body text-gold-light/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Upskill · Reskill · Build
          </motion.p>

          {/* Subtle gold line */}
          <motion.div
            className="mt-6 h-px bg-gold/40 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 260 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashIntro;
