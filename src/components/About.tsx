import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamImg from "@/assets/team-group.jpeg";
import classroomImg from "@/assets/classroom.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/50" ref={ref} aria-label="About Core Hexis">
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
              className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/3]"
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
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Industry Experts. Real Implementation. Measurable Impact.
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed font-body">
              Core Hexis is a highest industry experienced team for training and capability development, 
              committed to bridging the gap between education and real-world performance. We believe 
              skill is not taught — it is built through structured exposure, guided practice, and 
              real industry integration.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" aria-hidden="true" />
                <p className="text-muted-foreground font-body"><strong className="text-foreground">Vision:</strong> To become a trusted capability partner for industries, institutions, and emerging professionals across India and beyond.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" aria-hidden="true" />
                <p className="text-muted-foreground font-body"><strong className="text-foreground">Mission:</strong> To deliver industry-aligned training that builds employability and develops confident, future-ready professionals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
