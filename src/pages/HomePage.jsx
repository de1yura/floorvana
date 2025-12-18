
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServiceArea from '@/components/ServiceArea';
import Gallery from '@/components/Gallery';
import Storefront from '@/components/Storefront';
import Contact from '@/components/Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Britania Flooring & Decoration | Luxury Surfaces</title>
        <meta
          name="description"
          content="Britania Flooring & Decoration curates premium flooring, surface design, and decorative installations for residences and professional spaces throughout Greater London."
        />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossOrigin=""/>
      </Helmet>
      <Hero />
      <Services />
      <ServiceArea />
      <Gallery />
      <Storefront />
      <Contact />
    </>
  );
};

export default HomePage;
