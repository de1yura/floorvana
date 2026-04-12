import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "Homeowner",
    content: "The Herringbone Oak installation exceeded all my expectations. The attention to detail and craftsmanship is simply unmatched in the industry.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Interior Designer",
    content: "As a designer, I'm very picky about finishes. Their LVT collection is not only beautiful but durable enough for high-traffic commercial projects.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Property Developer",
    content: "Professional, timely, and flawless execution. They transformed our entire apartment complex with premium carpets and engineered wood.",
    rating: 5
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Architect",
    content: "Their SPC flooring range offers the perfect balance of modern aesthetics and technical performance. A go-to partner for my projects.",
    rating: 5
  },
  {
    id: 5,
    name: "David Miller",
    role: "Restaurant Owner",
    content: "We needed something waterproof and stylish for our bistro. The tiled finish looks incredible and is so easy to maintain. Highly recommend!",
    rating: 5
  },
  {
    id: 6,
    name: "Sophie Laurent",
    role: "Private Client",
    content: "From the initial consultation to the final sweep, the team was professional. My new bedroom carpets feel like walking on clouds.",
    rating: 5
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
  }, []);

  const prevStep = useCallback(() => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 10000);
    return () => clearInterval(timer);
  }, [nextStep]);

  return (
    <section className="bg-[#fcfaf8] py-20 px-6 overflow-hidden relative">
      {/* Background Subtle Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-[#c5a059]/20 rounded-full mb-4 bg-white/50"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold">
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1512]">Client Stories</h2>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-full bg-white p-8 md:p-14 rounded-[2.5rem] shadow-sm text-center"
            >
              <Quote className="text-[#c5a059] w-10 h-10 mx-auto mb-8 opacity-20" />
              
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#c5a059] text-[#c5a059]" />
                ))}
              </div>

              <p className="text-lg md:text-2xl text-stone-600 italic font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                "{testimonials[index].content}"
              </p>

              <div>
                <h4 className="text-[#1a1512] font-serif text-xl tracking-wide italic">
                  {testimonials[index].name}
                </h4>
                <p className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Indicators */}
        <div className="flex flex-col items-center mt-12 gap-8">
          
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  index === i ? 'w-10 bg-[#c5a059]' : 'w-2 bg-stone-200'
                }`}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevStep}
              className="p-4 rounded-full border border-stone-100 bg-white text-stone-400 hover:text-[#c5a059] hover:border-[#c5a059] hover:shadow-lg transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextStep}
              className="p-4 rounded-full border border-stone-100 bg-white text-stone-400 hover:text-[#c5a059] hover:border-[#c5a059] hover:shadow-lg transition-all group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;