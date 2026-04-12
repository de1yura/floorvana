import React from 'react';
import { Helmet } from 'react-helmet-async'; // Helmet import
import Partners from '../components/Partners';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import Services from '@/components/Services';
import ServiceArea from '@/components/ServiceArea';
import Gallery from '@/components/Gallery';
import Storefront from '@/components/Storefront';
import Contact from '@/components/Contact';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  // Schema JSON Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Britania Flooring and Decor",
    "description": "Luxury flooring specialists offering carpet, wood, laminate, vinyl and tile flooring services.",
    "url": "https://britaniaflooring.co.uk/",
    "logo": "https://britaniaflooring.co.uk/images/logo.png",
    "telephone": "020 3345 6228",
    "email": "info@britaniaflooring.co.uk",
    "priceRange": "£££",
    "sameAs": [
      "https://www.tiktok.com/@britania.flooring"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "219 Station Rd",
      "addressLocality": "Harrow",
      "postalCode": "HA1 2TH",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.58419720185113,
      "longitude": -0.3325803175770335
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "10:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "10:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "10:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "10:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "10:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "11:00", "closes": "17:00" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Britania Flooring & Decoration | Luxury Surfacess</title>

        <meta
          name="description"
          content="Britania Flooring & Decoration curates premium flooring, surface design, and decorative installations for residences and professional spaces throughout Greater London."
        />

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />

        {/* ✅ Schema JSON-LD Properly Handled */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Page Components */}
      <Hero />
      <StatsSection />
      <Services /> {/* Services component add kora holo jodi thake */}
      <ServiceArea />
      <Gallery />
      <Partners />
      <Testimonials />
      <Storefront />
      <Contact />
    </>
  );
};

export default HomePage;