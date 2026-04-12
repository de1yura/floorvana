import React from "react";
import { Helmet } from "react-helmet-async"; // Updated to react-helmet-async
import { Link } from "react-router-dom";

const flooringTypes = [
  {
    name: "Carpet",
    description: "Soft, warm underfoot comfort for bedrooms and living areas.",
    path: "/flooring/carpet",
    image: "/images/carpet/carpet1.jpeg",
  },
  {
    name: "Laminate",
    description: "Realistic wood-look flooring at an affordable price point.",
    path: "/flooring/laminate",
    image: "/images/leminate/laminate1.jpeg",
  },
  {
    name: "Luxury Vinyl Tile (LVT)",
    description: "Waterproof luxury with realistic stone and wood designs.",
    path: "/flooring/lvt",
    image: "/images/lvt/lvt1.jpeg",
  },
  {
    name: "Engineered Wood",
    description: "Real wood beauty with enhanced structural stability.",
    path: "/flooring/Wood",
    image: "/images/wood/wood1.jpg",
  },
  {
    name: "Tiles",
    description: "Ceramic and porcelain tiles for kitchens, bathrooms & more.",
    path: "/flooring/tiles",
    image: "/images/tiles/tiles1.png",
  },
  {
    name: "SPC",
    description: "Stone polymer composite — ultra-rigid and 100% waterproof.",
    path: "/flooring/spc",
    image: "/images/spc/spc1.png",  
  },
  {
    name: "Vinyl",
    description: "Stylish, durable flooring designed for everyday living with effortless maintenance.",
    path: "/flooring/vinyl",
    image: "/images/vinyl/vinyl1.jpeg",  
  },
  {
    name: "Carpet Tiles",
    description: "Flexible, comfortable flooring solutions that combine warmth, durability, and easy replacement.",
    path: "/flooring/carpettiles",
    image: "/images/carpet_tiles/carpet_tiles1.png",  
  },
];

const Flooring = () => {
  // Schema JSON Data
  const flooringSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flooring",
    "description": "Luxury flooring solutions including carpet, laminate, vinyl, engineered wood, tiles and more.",
    "serviceType": "Flooring Services",
    "url": "https://britaniaflooring.co.uk/flooring",
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

  return (
    <>
      <Helmet>
        <title>Flooring Services | Britania Flooring & Decoration</title>
        <meta
          name="description"
          content="Luxury flooring solutions including carpet, laminate, vinyl, engineered wood, tiles and more in Harrow, London."
        />

        {/* ✅ Schema JSON-LD properly stringified */}
        <script type="application/ld+json">
          {JSON.stringify(flooringSchema)}
        </script>
      </Helmet>

      {/* 🔽 YOUR ORIGINAL UI (UNCHANGED) */}
      <section className="bg-[#fefbf8] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-[#1a1512] mb-4">
              Surfaces with soul
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed italic">
              Every flooring we install is handpicked with craftsmanship, grandeur, and a respect for timeless materials.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flooringTypes.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="group relative h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-lg bg-[#1a1512] block"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-80"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Base Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                {/* --- NEW: Light Hover Tint Layer --- */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500 pointer-events-none" />

                {/* Content Area */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <h2 className="text-2xl font-serif text-white mb-3 transition-colors duration-300 group-hover:text-[#c5a059]">
                    {item.name}
                  </h2>
                  
                  <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#c5a059] text-[10px] uppercase tracking-[0.2em] font-bold">
                    Explore Collection
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </div>
                </div>

                {/* Animated Inner Border on Hover */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-[#c5a059]/20 rounded-xl transition-all duration-700 pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Flooring;