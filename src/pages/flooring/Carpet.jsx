import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'; // Updated to react-helmet-async
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import FlooringHero from "@/components/FlooringHero";

const Carpet = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const benefits = [
    "Soft and comfortable underfoot",
    "Excellent sound insulation",
    "Wide range of styles and colours",
    "Adds warmth to interiors",
  ];

  const suppliers = [
    "Cormar Carpets",
    "Victoria Carpets",
    "Westex",
    "Alternative Flooring",
  ];

  const galleryImages = [
    "/images/carpet/carpet1.jpeg",
    "/images/carpet/carpet2.jpeg",
    "/images/carpet/carpet3.jpeg",
  ];

  // Schema Data Object
  const carpetSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Carpet Flooring",
    "description": "Luxury carpet flooring supply and installation services in Harrow, London. Premium materials and expert fitting by Britania Flooring and Decor.",
    "serviceType": "Carpet Flooring",
    "url": "https://britaniaflooring.co.uk/flooring/carpet",
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

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* ✅ SEO + Schema */}
      <Helmet>
        <title>Carpet Flooring | Britania Flooring & Decoration</title>
        <meta
          name="description"
          content="Luxury carpet flooring supply and installation services in Harrow, London. Premium materials and expert fitting by Britania Flooring and Decor."
        />

        {/* ✅ Schema JSON-LD properly stringified */}
        <script type="application/ld+json">
          {JSON.stringify(carpetSchema)}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen">
        <FlooringHero title="Premium Carpet" image="/images/carpet/carpet1.jpeg" />

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

          {/* Gallery Grid */}
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

        {/* Lightbox */}
        <AnimatePresence>
          {currentIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCurrentIndex(null)}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            >
              <button className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]">
                <X size={40} />
              </button>

              <button onClick={showPrev} className="absolute left-4 md:left-10 text-white/50 hover:text-white z-[110]">
                <ChevronLeft size={48} />
              </button>

              <motion.div
                key={currentIndex}
                className="relative max-w-5xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[currentIndex]}
                  className="max-w-full max-h-[80vh] rounded-lg"
                  alt="Enlarged"
                />
              </motion.div>

              <button onClick={showNext} className="absolute right-4 md:right-10 text-white/50 hover:text-white z-[110]">
                <ChevronRight size={48} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Carpet;