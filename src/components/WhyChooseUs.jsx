import React from 'react';
import CommonButton from '../components/CommonButton';
import { Award, ShieldCheck, Compass, Leaf } from 'lucide-react';

const WhyChooseUs = () => {
  const highlights = [
    {
      title: "Master Craftsmanship",
      description: "Our installers are artisans of their trade, specializing in complex patterns like hand-finished herringbone and custom stone marquetry.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Sustainable Sourcing",
      description: "We partner exclusively with European mills and quarries that prioritize forest regeneration and ethical extraction processes.",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Design-Led Approach",
      description: "We don't just lay floors; we provide material curation and palette direction to ensure your surfaces tell a cohesive story.",
      icon: <Compass className="w-6 h-6" />
    },
    {
      title: "End-to-End Care",
      description: "From initial concept boards to bespoke aftercare rituals, we manage every detail to ensure a seamless, turnkey experience.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-black uppercase tracking-[0.2em] text-sm font-bold">
              The Britania Standard
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif gold-text leading-tight">
              Curating Excellence <br /> Beneath Your Feet
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-gray-500 max-w-sm italic">
              "Quality is not an act, it is a habit. We treat every residence and workspace as a canvas for architectural art."
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((item, index) => (
            <div key={index} className="group border-l border-gray-100 pl-6 hover:border-[#c5a059] transition-colors duration-500">
              <div className="text-[#c5a059] mb-6 inline-block p-3 bg-stone-50 rounded-full group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1a1512] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Image/CTA Area */}
        <div className="mt-20 relative overflow-hidden rounded-sm bg-[#1a1512] p-12 text-center">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl text-white font-serif mb-6">
              Ready to redefine your space?
            </h3>
            <div className="mt-10 text-center">
            <CommonButton text="Schedule a Design Consultation" />
            </div>
          </div>
          {/* Subtle Background Pattern or Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]"></div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;