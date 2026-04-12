import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "Headlam Group",
  "Furlong Flooring",
  "Victoria Carpets",
  "Kellars",
  "DMS",
  "UK Flooring Direct"
];

const Partners = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-stone-100">
    <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] text-gray-800 font-bold mb-4">
          Trusted Suppliers
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif gold-text">
          Our Industry Partners
        </h3>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed italic">
          We work exclusively with Britain's leading manufacturers to ensure every surface meets the highest standards of durability and design.
        </p>
      </div>

      {/* Infinity Carousel Container */}
      <div className="relative flex overflow-hidden bg-stone-50/50 py-10 border-y border-stone-100">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"], 
          }}
          transition={{
            ease: "linear",
            duration: 45, // স্পিড কমানোর জন্য duration বাড়িয়ে ৪৫ করা হয়েছে
            repeat: Infinity,
          }}
        >
          {/* First set */}
          {partners.map((name, index) => (
            <div key={`first-${index}`} className="flex items-center px-8 md:px-12">
              <span className="text-lg md:text-2xl font-serif text-black-400 hover:text-[#c5a059] transition-colors duration-300 uppercase tracking-[0.2em] cursor-default font-medium">
                {name}
              </span>
              {/* ছোট একটি গোল্ডেন সেপারেটর */}
              <div className="ml-8 md:ml-12 w-1.5 h-1.5 rounded-full bg-[#c5a059]/40" />
            </div>
          ))}

          {/* Second set for infinite loop */}
          {partners.map((name, index) => (
            <div key={`second-${index}`} className="flex items-center px-8 md:px-12">
              <span className="text-lg md:text-2xl font-serif text-stone-400 hover:text-[#c5a059] transition-colors duration-300 uppercase tracking-[0.2em] cursor-default font-medium">
                {name}
              </span>
              <div className="ml-8 md:ml-12 w-1.5 h-1.5 rounded-full bg-[#c5a059]/40" />
            </div>
          ))}
        </motion.div>
        
        {/* Left & Right Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

    </section>
  );
};

export default Partners;