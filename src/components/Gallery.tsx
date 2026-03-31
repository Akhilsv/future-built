import { useRef, useCallback, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
            Our Stroies
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Moments That Define Excellence
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          {/* Carousel */}
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

          {/* Navigation arrows */}
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

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "w-8 bg-gold"
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
