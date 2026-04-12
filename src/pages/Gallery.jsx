import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'; // Updated to react-helmet-async
import { motion, AnimatePresence } from 'framer-motion';
import GalleryPop from '../components/GalleryPop';
import { Palette } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    category: "Signature Installation",
    title: "Light Oak Herringbone",
    description: "Hand-finished European Oak laid in a classic herringbone pattern, bringing timeless foundations to interiors.",
    palette: ["Honey Oak", "Warm Grey", "Natural Grain"],
    largeImage: "/images/gallery1.png",
    thumbnail: "/images/gallery1.png"
  },
  {
    id: 2,
    category: "Soft Dressing",
    title: "Plush Velvet Saxony",
    description: "Deep-pile luxury carpet inset, providing acoustic layering and warmth for a calming master suite.",
    palette: ["Deep Slate", "Misty Blue", "Soft Touch"],
    largeImage: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1000&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Artisan Pattern",
    title: "Custom Versailles Panels",
    description: "Intricate wood parquet panels that recreate historical French palace flooring in a modern context.",
    palette: ["Aged Walnut", "Ebony Stain", "Distressed"],
    largeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Surface Design",
    title: "Calacatta Gold Marble",
    description: "Large-format Italian porcelain surfaces with dramatic gold veining for elegant washrooms.",
    palette: ["Bright White", "Gold Vein", "Polished"],
    largeImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "Textural Laying",
    title: "Dark Chevron Parquet",
    description: "Dynamically laid chevron planks that create a sense of direction and depth in gallery walkways.",
    palette: ["Dark Mocha", "Cool Ash", "Structured"],
    largeImage: "/images/gallery1.png",
    thumbnail: "/images/gallery1.png"
  },
  {
    id: 6,
    category: "Modern Minimal",
    title: "Structured Wide Planks",
    description: "Clean, ultra-wide engineered wood planks for modern architectural minimalism.",
    palette: ["Raw Oak", "Bleached", "Matte"],
    largeImage: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1000&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=200&auto=format&fit=crop"
  }
];

const Gallery = () => {
  const [activeItem, setActiveItem] = useState(galleryItems[0]);

  // Schema Data Object
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Gallery",
    "description": "Explore recent flooring projects and gallery images from Britania Flooring and Decor.",
    "url": "https://britaniaflooring.co.uk/gallery",
    "about": "Flooring projects and interior flooring installations",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Britania Flooring and Decor",
      "url": "https://britaniaflooring.co.uk"
    }
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Britania Flooring & Decoration</title>
        <meta
          name="description"
          content="Explore recent flooring projects and gallery images from Britania Flooring and Decor."
        />

        {/* ✅ Schema JSON-LD properly stringified */}
        <script type="application/ld+json">
          {JSON.stringify(gallerySchema)}
        </script>
      </Helmet>

      {/* 🔽 YOUR ORIGINAL UI (UNCHANGED) */}
      <section className="bg-[#fefbf8] py-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-800 font-bold mb-2">Our Portfolio</h2>
            <h1 className="text-4xl font-serif text-[#1a1512]">Gallery of Works</h1>
          </div>

          {/* Main Display Box */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] bg-white shadow-lg rounded-2xl overflow-hidden border border-stone-100 mb-8">
            
            <div className="relative h-[300px] lg:h-[450px] overflow-hidden bg-stone-100">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeItem.id}
                  src={activeItem.largeImage} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <span className="text-[11px] uppercase tracking-widest text-[#c5a059] font-bold italic">
                    {activeItem.category}
                  </span>
                  <h2 className="text-3xl font-serif text-[#1a1512]">
                    {activeItem.title}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {activeItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="pt-6 border-t border-stone-100">
                <div className="flex items-center gap-2 mb-2">
                  <Palette size={16} className="text-[#c5a059]" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Materials Palette</span>
                </div>
                <p className="text-sm font-medium text-stone-700 uppercase tracking-wider">
                  {activeItem.palette.join(' • ')}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails Navigation */}
          <div className="flex justify-center gap-3 md:gap-4 overflow-x-auto pb-6">
            {galleryItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeItem.id === item.id 
                    ? 'ring-2 ring-[#c5a059] scale-105 shadow-md' 
                    : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
                }`}
              >
                <img src={item.thumbnail} className="w-full h-full object-cover" alt="thumb" />
              </button>
            ))}
          </div>

          <GalleryPop />
        </div>
      </section>
    </>
  );
};

export default Gallery;