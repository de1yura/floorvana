
import React from 'react';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/images/logo.png"
                alt="Britania Flooring & Decoration"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-base text-stone-600 font-light leading-relaxed max-w-md">
              Curating premium flooring, surface design, and decorative installations for residences and professional spaces throughout Greater London.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-6 tracking-wider uppercase">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <a 
                    href="tel:+447360095207" 
                    className="text-stone-700 hover:text-primary transition-colors text-base font-light"
                  >
                    07360 095207
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <a 
                    href="tel:02033456228" 
                    className="text-stone-700 hover:text-primary transition-colors text-base font-light"
                  >
                    020 3345 6228
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <a 
                    href="mailto:britaniaflodec@gmail.com" 
                    className="text-stone-700 hover:text-primary transition-colors text-base font-light break-words"
                  >
                    britaniaflodec@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <p className="text-stone-700 text-base font-light leading-relaxed">
                    219 Station Rd<br />
                    Harrow, HA1 2TH<br />
                    London, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-6 tracking-wider uppercase">Quick Links</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="block text-stone-600 hover:text-primary transition-colors text-base font-light text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block text-stone-600 hover:text-primary transition-colors text-base font-light text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('storefront')}
                className="block text-stone-600 hover:text-primary transition-colors text-base font-light text-left"
              >
                Visit Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-stone-600 hover:text-primary transition-colors text-base font-light text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground font-light">
            © {currentYear} Britania Flooring &amp; Decoration. All rights reserved. Crafted in London.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
