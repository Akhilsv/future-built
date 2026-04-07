import { useRef, useCallback, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";

const images = [
  {
    src: gallery1,
    alt: "Core Hexis design thinking workshop with participants showcasing projects",
  },
  {
    src: gallery2,
    alt: "Core Hexis corporate training session in modern classroom setting",
  },
  {
    src: gallery3,
    alt: "Core Hexis industry experts delivering hands-on training program",
  },
  {
    src: gallery4,
    alt: "Core Hexis industry readiness program with engineering students",
  },
  {
    src: gallery5,
    alt: "Student presenting product design prototype at Core Hexis exhibition",
  },
  {
    src: gallery6,
    alt: "Industry expert evaluating student project at Core Hexis event",
  },
  {
    src: gallery7,
    alt: "Students participating in Core Hexis capability development program",
  },
  {
    src: gallery8,
    alt: "Industry mentors discussing innovation at Core Hexis workshop",
  },
  {
    src: gallery9,
    alt: "Core Hexis team demonstrating product prototype to industry leaders",
  },
  {
    src: gallery10,
    alt: "Industry professionals networking at Core Hexis training event",
  },
];

const stackConfig = [
  {
    zIndex: 30,
    translate: "translate(0, 0)",
    rotate: "rotate(0deg)",
    scale: 1,
    opacity: 1,
  },
  {
    zIndex: 20,
    translate: "translate(20px, 14px)",
    rotate: "rotate(3deg)",
    scale: 0.96,
    opacity: 0.7,
  },
  {
    zIndex: 10,
    translate: "translate(40px, 28px)",
    rotate: "rotate(-2.5deg)",
    scale: 0.92,
    opacity: 0.45,
  },
];

const stackConfigMobile = [
  {
    zIndex: 30,
    translate: "translate(0, 0)",
    rotate: "rotate(0deg)",
    scale: 1,
    opacity: 1,
  },
  {
    zIndex: 20,
    translate: "translate(6px, 5px)",
    rotate: "rotate(2deg)",
    scale: 0.97,
    opacity: 0.5,
  },
  {
    zIndex: 10,
    translate: "translate(12px, 10px)",
    rotate: "rotate(-1.5deg)",
    scale: 0.94,
    opacity: 0.3,
  },
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Lock body scroll when carousel is open
  useEffect(() => {
    document.body.style.overflow = "";
  }, [isOpen]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-20 bg-background"
      aria-label="Gallery"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">
            Our Stories
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Moments That Define Excellence
          </h2>
        </motion.div>

        {/* Stacked Preview */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-xl aspect-[4/3] mb-8">
              <button
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-2xl"
                aria-label="Open gallery carousel"
              >
                {images
                  .slice(0, 3)
                  .reverse()
                  .map((img, reverseIdx) => {
                    const idx = 2 - reverseIdx;
                    return (
                      <div
                        key={idx}
                        className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 ease-out group-hover:translate-y-[-6px] ${idx === 0 ? "shadow-2xl ring-1 ring-gold/10" : "shadow-xl border border-border/30"}`}
                        style={{
                          zIndex: stackConfig[idx].zIndex,
                          transform: `${stackConfig[idx].translate} ${stackConfig[idx].rotate} scale(${stackConfig[idx].scale})`,
                          opacity: stackConfig[idx].opacity,
                        }}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading={idx === 0 ? "eager" : "lazy"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  })}
                {/* Click hint */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 bg-background/90 backdrop-blur-md text-foreground text-xs font-semibold px-5 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gold/20">
                  Click to explore
                </div>
              </button>
            </div>
            {/* Caption */}
            <p className="text-center text-base md:text-lg font-serif font-extrabold text-foreground tracking-wider drop-shadow-md">
              Corporate Training Programs
            </p>
            <p className="text-center text-sm md:text-base text-gold font-serif italic mt-1 tracking-wide drop-shadow-sm">
              On Furniture Design Module @ Presidency University
            </p>
          </motion.div>
        )}

        {/* Full Carousel */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative group"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 z-20 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground transition-colors"
              aria-label="Close carousel"
            >
              <X className="w-4 h-4" />
            </button>

            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
              <div className="flex">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 first:pl-0"
                  >
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] group/card">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-navy-dark/0 group-hover/card:bg-navy-dark/20 transition-colors duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm shadow-card flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm shadow-card flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? "w-8 bg-gold" : "w-2 bg-muted-foreground/30"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
