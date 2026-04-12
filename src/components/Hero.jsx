import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/images/hero_image1.webp",
    "/images/hero_image2.jpg",
  ];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  }, 10000); // ✅ 5 seconds

  return () => clearInterval(interval);
}, []); // ✅ IMPORTANT: keep empty dependency

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Luxury flooring"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* DARK LUXURY OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Warm brown gradient touch */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b2b22]/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
            Luxury flooring and
            decorative surfaces for
            elevated lifestyles.
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            We craft bespoke flooring solutions, wall treatments, and material
            palettes to embody craftsmanship, hospitality, and visionary design.
          </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              
              <Button
                asChild
                className="bg-orange-500 rounded-sm hover:bg-orange-600 text-white px-8 py-4 text-sm tracking-wider uppercase"
              >
                <Link to="/contact">Book Consultation</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white rounded-sm text-white hover:bg-white hover:text-black px-8 py-4 text-sm tracking-wider uppercase"
              >
                <Link to="/gallery">View Gallery</Link>
              </Button>

            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;