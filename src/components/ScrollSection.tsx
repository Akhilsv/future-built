import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSection = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // As section scrolls out (progress 0→1): subtle blur, opacity drop, slight scale down
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.97]);
  const filter = useTransform(scrollYProgress, [0, 0.7, 1], [
    "blur(0px)",
    "blur(0px)",
    "blur(3px)",
  ]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ opacity, scale, filter, willChange: "opacity, transform, filter" }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollSection;
