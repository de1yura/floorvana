
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster'; // Ensure Toaster is imported

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <Toaster /> {/* Place Toaster here for app-wide toast notifications */}
    </div>
  );
}

export default App;
