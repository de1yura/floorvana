import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Toaster } from '@/components/ui/toaster';

import HomePage from '@/pages/HomePage';
import Services from '@/pages/Services';
import Flooring from '@/pages/Flooring';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';

// Sub pages
import Carpet from '@/pages/flooring/Carpet';
import Laminate from '@/pages/flooring/Laminate';
import LVT from '@/pages/flooring/LVT';
import SPC from '@/pages/flooring/SPC';
import Tiles from '@/pages/flooring/Tiles';
import EngineeredWood from '@/pages/flooring/EngineeredWood';
import Vinyl from '@/pages/flooring/Vinyl'; 
import CarpetTiles from '@/pages/flooring/CarpetTiles';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* ✅ ScrollToTop অবশ্যই Routes-এর বাইরে থাকতে হবে */}
      <ScrollToTop /> 
      
      <Navigation />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/flooring" element={<Flooring />} />

          {/* SUB PAGES */}
          <Route path="/flooring/carpet" element={<Carpet />} />
          <Route path="/flooring/laminate" element={<Laminate />} />
          <Route path="/flooring/lvt" element={<LVT />} />
          <Route path="/flooring/vinyl" element={<Vinyl />} />
          <Route path="/flooring/carpettiles" element={<CarpetTiles />} />
          <Route path="/flooring/spc" element={<SPC />} />
          <Route path="/flooring/tiles" element={<Tiles />} />
          <Route path="/flooring/engineered-wood" element={<EngineeredWood />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}

export default App;