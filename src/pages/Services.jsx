import React from 'react';
import { Helmet } from 'react-helmet-async'; // Updated to react-helmet-async
import WhyChooseUs from '../components/WhyChooseUs';
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

  // Schema Data Object
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flooring Services",
    "description": "Professional flooring services including carpet, laminate, vinyl, engineered wood, tiles and luxury flooring solutions.",
    "serviceType": "Flooring Services",
    "url": "https://britaniaflooring.co.uk/services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Britania Flooring and Decor",
      "telephone": "020 3345 6228",
      "email": "info@britaniaflooring.co.uk",
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

  return (
    <div>
      {/* ✅ SEO + Schema */}
      <Helmet>
        <title>Flooring Services | Britania Flooring & Decoration</title>
        <meta
          name="description"
          content="Professional flooring services including carpet, laminate, vinyl, engineered wood, tiles and luxury flooring solutions in Harrow, London."
        />

        {/* ✅ Schema JSON-LD properly stringified */}
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      <div className="py-20 p-6 text-center">
        <h1 className="text-3xl font-bold ">Services</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Crafted with precision, designed for timeless elegance.
        </p>
      </div>

      {/* SERVICES GRID */}
      <section className="py-20 bg-[#fefbf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl gold-text mb-4">
              whole changes date
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Every installation is choreographed with artisanship, precision, and timeless materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-3xl p-8 hover:shadow-4xl transition cursor-pointer"
              >
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl text-stone-800 mb-3 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
};

export default Services;