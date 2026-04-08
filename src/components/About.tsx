import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamImg from "@/assets/About.jpeg";
import classroomImg from "@/assets/classroom.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 bg-muted/50"
      ref={ref}
      aria-label="About Core Hexis"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={teamImg}
              alt="Core Hexis industry training team conducting a capability development workshop"
              className="rounded-2xl shadow-elevated w-full object-contain aspect-[4/3]"
              loading="lazy"
              width={600}
              height={450}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              <span className="block">Industry Experts.</span>
              <span className="block">Real Implementation.</span>
              <span className="block">Measurable Impact.</span>
            </h2>
            <p
              className="text-muted-foreground mb-6 leading-8 font-body text-justify"
              style={{ textAlignLast: "left" }}
            >
              Core Hexis is a highest industry experienced team for training and
              capability development, committed to bridging the gap between
              education and real-world performance. We believe, skill is not
              taught — it is built through structured exposure, guided practice,
              and real industry integration.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full bg-gold mt-3 flex-shrink-0"
                  aria-hidden="true"
                />
                <div className="flex items-start flex-1 gap-2">
                  <strong className="text-foreground font-body font-semibold shrink-0">
                    Vision:
                  </strong>
                  <p className="text-muted-foreground font-body leading-7 flex-1 m-0">
                    To become a trusted capability partner for industries,
                    institutions, and emerging professionals across India and
                    beyond.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full bg-gold mt-3 flex-shrink-0"
                  aria-hidden="true"
                />
                <div className="flex items-start flex-1 gap-2">
                  <strong className="text-foreground font-body font-semibold shrink-0">
                    Mission:
                  </strong>
                  <p className="text-muted-foreground font-body leading-7 flex-1 m-0">
                    To deliver industry-aligned training that builds
                    employability and develops confident, future-ready
                    professionals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
