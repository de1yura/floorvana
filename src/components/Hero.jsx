import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const heroImages = ["/images/hero_image1.webp", "/images/hero_image2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 150);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fdf9f4] via-[#f7efe3] to-[#f0e7da]"
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            alt="Luxury flooring and decorative surfaces"
            className="w-full h-full object-cover opacity-70 mix-blend-multiply"
            src={heroImages[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdf9f4]/80 via-[#f7efe3]/90 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="space-y-8"
        >
          {!isAtTop && (
            <p className="tracking-[0.6em] uppercase text-xs text-stone-500">
              Britania Flooring &amp; Decoration
            </p>
          )}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-stone-800 leading-tight">
            Luxury flooring and decorative surfaces for elevated lifestyles.
          </h1>
          <p className="text-lg md:text-xl text-stone-600">
            We craft bespoke flooring statements, wall treatments, and material
            palettes for refined residences, hospitality suites, and visionary
            workspaces across the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-12 text-base tracking-[0.3em] font-light rounded-full uppercase"
            >
              Book Consultation
            </Button>
            <Button
              onClick={() => scrollToSection("gallery")}
              variant="outline"
              className="h-14 px-12 text-base tracking-[0.3em] font-light rounded-full uppercase border-primary text-primary hover:bg-primary/10"
            >
              View Gallery
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
