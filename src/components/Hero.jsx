
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fdf9f4] via-[#f7efe3] to-[#f0e7da]"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt="Close up of artisanal herringbone wooden flooring with sunlight and decorative accents."
          className="w-full h-full object-cover opacity-70 mix-blend-multiply"
         src="https://images.unsplash.com/photo-1523419409543-0c1df022bddb?auto=format&fit=crop&w=1600&q=80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdf9f4]/80 via-[#f7efe3]/90 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="space-y-8"
        >
          <p className="tracking-[0.6em] uppercase text-xs text-stone-500">Britania Flooring &amp; Decoration</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-stone-800 leading-tight">
            Luxury flooring and decorative surfaces for elevated lifestyles.
          </h1>
          <p className="text-lg md:text-xl text-stone-600">
            We craft bespoke flooring statements, wall treatments, and material palettes for refined residences,
            hospitality suites, and visionary workspaces across the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('contact')}
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-12 text-base tracking-[0.3em] font-light rounded-full uppercase"
            >
              Book Consultation
            </Button>
            <Button
              onClick={() => scrollToSection('gallery')}
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
