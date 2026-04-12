import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ArrowRight } from 'lucide-react';

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

const ModernGallery = () => {
  const [activeItem, setActiveItem] = useState(galleryItems[0]);

  return (
    <section className="bg-[#fefbf8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Compact */}
        <div className="text-center mb-10">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-800 font-bold mb-2">Portfolio</h2>
          <h1 className="text-3xl font-serif gold-text">Gallery of Works</h1>
        </div>

        {/* Main Display */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] bg-white shadow-lg rounded-2xl overflow-hidden border border-stone-100 mb-8">
          
          <div className="relative h-[300px] lg:h-[420px] overflow-hidden bg-stone-100">
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

          <div className="p-8 md:p-10 flex flex-col justify-center space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold italic">
                  {activeItem.category}
                </span>
                <h2 className="text-2xl font-serif text-[#1a1512]">
                  {activeItem.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {activeItem.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="pt-4 border-t border-stone-50">
              <div className="flex items-center gap-2 mb-1">
                <Palette size={14} className="text-[#c5a059]" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Palette</span>
              </div>
              <p className="text-xs font-medium text-stone-700 uppercase tracking-wider">
                {activeItem.palette.join(' • ')}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 md:gap-4 overflow-x-auto pb-4">
          {galleryItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                activeItem.id === item.id 
                  ? 'ring-2 ring-[#c5a059] scale-105 shadow-md' 
                  : 'opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
              }`}
            >
              <img src={item.thumbnail} className="w-full h-full object-cover" alt="thumb" />
            </button>
          ))}
        </div>

        {/* === VIEW MORE BUTTON ADDED HERE === */}
        <div className="text-center mt-10">
          <Link 
            to="/gallery" 
            className="group inline-flex items-center gap-3 px-8 py-3 bg-[#1a1512] text-white rounded-full transition-all hover:bg-[#c5a059] active:scale-95 shadow-lg"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em]">View More</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default ModernGallery;