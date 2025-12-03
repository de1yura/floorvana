
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Palette, Building2, Feather, Ruler } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Layers,
      title: 'Bespoke Wood Flooring',
      description: 'Hand-finished herringbone, chevron, and plank layouts sourced from sustainable European mills.',
    },
    {
      icon: Sparkles,
      title: 'Stone & Tile Surfaces',
      description: 'Marble, terrazzo, and artisan tile compositions for foyers, washrooms, and gallery walkways.',
    },
    {
      icon: Palette,
      title: 'Material & Palette Design',
      description: 'Concept boards, sample curation, and styling direction for cohesive decorative storytelling.',
    },
    {
      icon: Building2,
      title: 'Commercial Fit-Outs',
      description: 'Turnkey flooring packages for offices, hospitality, and retail with minimal disruption.',
    },
    {
      icon: Feather,
      title: 'Soft Surface Dressing',
      description: 'Luxury carpet insets, area rugs, and acoustic layering that warm and define each space.',
    },
    {
      icon: Ruler,
      title: 'Aftercare & Restoration',
      description: 'Maintenance rituals and resurfacing programs to keep finishes immaculate over time.',
    },
  ];

  return (
    <section id="services" className="py-32 bg-[#fefbf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl gold-text mb-4">Surfaces with soul</h2> {/* Increased h2 size */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light"> {/* Increased p size */}
            Every installation is choreographed with artisanship, precision, and a respect for timeless materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group bg-card border border-transparent hover:border-border rounded-3xl p-8 transition-all duration-300 shadow-[0_20px_60px_rgba(175,155,130,0.12)] hover:shadow-[0_30px_80px_rgba(175,155,130,0.2)] cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="h-12 w-12 text-primary mb-6 transition-colors duration-300 group-hover:text-primary/80" />
              </motion.div>
              <h3 className="text-3xl text-stone-800 mb-3 transition-colors duration-300 group-hover:text-primary">{service.title}</h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
