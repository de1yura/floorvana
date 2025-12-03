
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  const navItems = [{
    label: 'Home',
    id: 'hero'
  }, {
    label: 'Services',
    id: 'services'
  }, {
    label: 'Gallery',
    id: 'gallery'
  }, {
    label: 'Contact',
    id: 'contact'
  }];
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5,
    ease: 'easeOut'
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-border/70' : 'bg-transparent'}`}>
      <nav className="max-w-screen-2xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-28">
          <div className="hidden md:flex items-center space-x-10">
            {navItems.slice(0, 2).map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-sm font-medium text-black hover:text-primary transition-colors duration-300 tracking-[0.3em] uppercase">
                {item.label}
              </button>)}
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img src="/images/logo.png" alt="Britania Flooring & Decoration logo" className="h-14 w-auto drop-shadow-sm" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.slice(2).map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-sm font-medium text-black hover:text-primary transition-colors duration-300 tracking-[0.3em] uppercase">
                {item.label}
              </button>)}
          </div>

          <div className="md:hidden flex-1">
            <button className="flex items-center gap-3" onClick={() => scrollToSection('hero')}>
              <img src="/images/logo.png" alt="Britania Flooring & Decoration logo" className="h-9 w-auto" />
              <span className="text-sm font-semibold tracking-[0.2em] text-black uppercase">Britania</span>
            </button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary">
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="md:hidden bg-white/95 backdrop-blur-lg border-t border-border/70">
          <div className="px-6 pt-2 pb-6 space-y-4 text-center">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-black hover:text-primary transition-colors duration-300 font-semibold py-3 tracking-[0.4em] uppercase text-xs">
                {item.label}
              </button>)}
          </div>
        </motion.div>}
    </motion.header>;
};
export default Navigation;
