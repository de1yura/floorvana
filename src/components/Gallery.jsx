import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gallerySlides } from '@/data/gallery';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallerySlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (direction) => {
    setActiveIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % gallerySlides.length;
      }
      return (prev - 1 + gallerySlides.length) % gallerySlides.length;
    });
  };

  return (
    <section id="gallery" className="py-32 bg-[#fdf9f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl gold-text mb-4">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            A revolving glimpse into the textures, palettes, and atmospheres that define Britania&apos;s work.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-[2.25rem] bg-white shadow-[0_30px_80px_rgba(58,41,29,0.12)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={gallerySlides[activeIndex].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="h-[420px] lg:h-[520px]">
                <img
                  src={gallerySlides[activeIndex].image}
                  alt={gallerySlides[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-between bg-[#fffdf9]">
                <div>
                  <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-6">Signature installation</p>
                  <h3 className="text-4xl text-stone-800 mb-4">{gallerySlides[activeIndex].title}</h3>
                  <p className="text-lg text-stone-600 mb-6">{gallerySlides[activeIndex].description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">Palette</span>
                  <span className="text-base font-semibold text-stone-900">{gallerySlides[activeIndex].palette}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => goToSlide('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur border border-border rounded-full p-3 text-stone-700 hover:text-primary transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => goToSlide('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur border border-border rounded-full p-3 text-stone-700 hover:text-primary transition"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-fit">
            {gallerySlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-2xl border ${
                  index === activeIndex ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img src={slide.image} alt={slide.title} className="h-24 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center px-3 text-xs text-white text-center leading-snug">
                  {slide.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
