import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Updated to react-helmet-async
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import FlooringHero from "@/components/FlooringHero";

const Laminate = () => { // Function name corrected to Laminate
  const [currentIndex, setCurrentIndex] = useState(null);

  const benefits = [
    "Superior comfort & durability",
    "Energy-efficient performance",
    "Easy maintenance & cleaning",
    "Modern and stylish design options",
    "Long-lasting quality materials",
    "Cost-effective solution over time"
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
    "/images/leminate/laminate1.jpeg",
    "/images/leminate/laminate2.jpeg",
    "/images/leminate/laminate3.jpeg",
  ];

  // Schema Data Object
  const laminateSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Laminate Flooring",
    "description": "Stylish, durable and affordable laminate flooring supply and installation services in Harrow, London by Britania Flooring and Decor.",
    "serviceType": "Laminate Flooring",
    "url": "https://britaniaflooring.co.uk/flooring/laminate",
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

  const showNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1 === galleryImages.length ? 0 : prev + 1));
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") setCurrentIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      {/* SEO + Schema */}
      <Helmet>
        <title>Laminate Flooring | Britania Flooring & Decoration</title>
        <meta
          name="description"
          content="Laminate flooring supply and installation services in Harrow, London. Stylish, durable and affordable flooring by Britania Flooring and Decor."
        />

        {/* ✅ Schema JSON-LD properly stringified */}
        <script type="application/ld+json">
          {JSON.stringify(laminateSchema)}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen">
        <FlooringHero title="Laminate" image="/images/leminate/laminate1.jpeg" />

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
                  <img src={img} alt="Installation" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {currentIndex !== null && (
            <motion.div
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
              onClick={() => setCurrentIndex(null)}
            >
              <img src={galleryImages[currentIndex]} className="max-h-[80vh]" alt="view" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Laminate;