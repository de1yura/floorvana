import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import FlooringHero from "@/components/FlooringHero";

const SPC = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const benefits = [
    "100% waterproof and moisture-resistant core",
    "Extremely durable with rigid stone-plastic composition",
    "High resistance to dents, scratches, and impacts",
    "Stable under temperature changes with minimal expansion",
    "Easy click-lock installation system",
    "Long-lasting performance with strong wear layer protection"
  ];

  const suppliers = [
    "Victoria Carpets",
    "Furlong Flooring",
    "Headlam Group",
    "Kellars",
    "DMS",
    "Wood Innovation Ltd",
    "Amtico"
  ];

  const galleryImages = [
    "/images/spc/spc1.png",
    "/images/spc/spc2.jpeg",
  ];

  const spcSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SPC Flooring",
    "description": "Durable and waterproof SPC flooring supply and installation services in Harrow, London by Britania Flooring and Decor.",
    "serviceType": "SPC Flooring",
    "url": "https://britaniaflooring.co.uk/flooring/spc",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Britania Flooring and Decor",
      "telephone": "020 3345 6228",
      "email": "info@britaniaflodec.co.uk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "219 Station Rd",
        "addressLocality": "Harrow",
        "postalCode": "HA1 2TH",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Harrow, London"
    }
  };

  const showNext = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1 === galleryImages.length ? 0 : prev + 1));
  }, [galleryImages.length]);

  const showPrev = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") setCurrentIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, showNext, showPrev]);

  return (
    <>
      <Helmet>
        <title>SPC Flooring | Britania Flooring & Decoration</title>
        <meta
          name="description"
          content="SPC flooring supply and installation services in Harrow, London. Durable and waterproof flooring solutions by Britania Flooring and Decor."
        />
        <script type="application/ld+json">
          {JSON.stringify(spcSchema)}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen">
        <FlooringHero title="SPC Flooring" image="/images/spc/spc1.png" />

        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-serif text-[#1a1512] mb-8">Key Benefits</h2>
              <ul className="space-y-5">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 text-stone-700">
                    <CheckCircle2 className="text-[#c5a059] w-6 h-6 shrink-0" />
                    <span className="text-lg font-medium tracking-wide">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-[#1a1512] mb-6">Our Suppliers</h2>
              <div className="flex flex-wrap gap-4">
                {suppliers.map((brand, i) => (
                  <span key={i} className="px-6 py-3 bg-stone-50 border border-stone-100 rounded-lg text-stone-800 font-semibold tracking-wide">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-center text-3xl font-serif text-[#1a1512] mb-12 uppercase tracking-widest">
              Installation Showcase
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer aspect-[4/3] overflow-hidden rounded-xl shadow-md"
                  onClick={() => setCurrentIndex(index)}
                >
                  <img src={img} alt="Installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white w-8 h-8" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Improved Lightbox */}
        <AnimatePresence>
          {currentIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 md:p-12"
              onClick={() => setCurrentIndex(null)}
            >
              {/* Close Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(null); }}
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-[110] p-2 bg-black/20 rounded-full transition-colors"
              >
                <X size={32} />
              </button>

              {/* Prev Button */}
              <button 
                onClick={showPrev} 
                className="absolute left-2 md:left-6 text-white/50 hover:text-white z-[110] transition-colors"
              >
                <ChevronLeft size={48} />
              </button>

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={galleryImages[currentIndex]} 
                  className="max-w-full max-h-[80vh] md:max-h-[85vh] rounded-lg shadow-2xl object-contain pointer-events-auto" 
                  alt="Enlarged Showcase" 
                />
              </motion.div>

              {/* Next Button */}
              <button 
                onClick={showNext} 
                className="absolute right-2 md:right-6 text-white/50 hover:text-white z-[110] transition-colors"
              >
                <ChevronRight size={48} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SPC;