
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border/60">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <img
                src="/britania-logomark.svg"
                alt="Britania Flooring & Decoration"
                className="h-12"
              />
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-stone-500">Britania</p>
                <p className="text-xl font-semibold text-stone-800">Flooring &amp; Decoration</p>
              </div>
            </div>
            <p className="text-base text-muted-foreground font-light"> {/* Increased p size */}
              © {currentYear} Britania Flooring &amp; Decoration. Crafted in London.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-stone-400 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-6 w-6" /> {/* Increased icon size */}
            </a>
            <a href="#" className="text-stone-400 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-6 w-6" /> {/* Increased icon size */}
            </a>
            <a href="#" className="text-stone-400 hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="h-6 w-6" /> {/* Increased icon size */}
            </a>
            <a href="#" className="text-stone-400 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" /> {/* Increased icon size */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
