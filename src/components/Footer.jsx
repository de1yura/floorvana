import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1512] text-white py-12 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: About */}
        <div className="space-y-4">
          <img src="/images/logo.png" alt="Britania" className="h-8 md:h-9 object-contain" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Curating premium flooring, surface design, and decorative installations for residences
            and professional spaces throughout Greater London.
          </p>
        </div>

        {/* Column 2: Flooring Types */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-tight">Flooring</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/flooring/carpet" className="hover:text-[#c5a059] transition">Carpet</Link></li>
            <li><Link to="/flooring/laminate" className="hover:text-[#c5a059] transition">Laminate</Link></li>
            <li><Link to="/flooring/lvt" className="hover:text-[#c5a059] transition">Luxury Vinyl Tile (LVT)</Link></li>
            <li><Link to="/flooring/vinyl" className="hover:text-[#c5a059] transition">Vinyl</Link></li>
            <li><Link to="/flooring/carpettiles" className="hover:text-[#c5a059] transition">Carpet Tiles</Link></li>
            <li><Link to="/flooring/engineered-wood" className="hover:text-[#c5a059] transition">Wood</Link></li>
            <li><Link to="/flooring/tiles" className="hover:text-[#c5a059] transition">Tiles</Link></li>
            <li><Link to="/flooring/spc" className="hover:text-[#c5a059] transition">SPC Flooring</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-tight">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/" className="hover:text-[#c5a059] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#c5a059] transition">
               Services
              </Link>
            </li>
            <li>
              <Link to="/flooring" className="hover:text-[#c5a059] transition">
                Flooring
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#c5a059] transition">
               Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#c5a059] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-tight">Contact</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#c5a059]" />
              <a href="tel:07340467317" className="hover:text-[#c5a059] transition">
                07360 095207
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#c5a059]" />
              <a href="tel:020 3345 6228" className="hover:text-[#c5a059] transition">
                020 3345 6228
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#c5a059]" />
              <a
                href="mailto:info@britaniaflooring.co.uk"
                className="hover:text-[#c5a059] transition"
              >
                info@britaniaflodec.co.uk
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-[#c5a059]" />
               <span>219 Station Rd
            Harrow, HA1 2TH <br />
            London, United Kingdom</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>© 2026 Britania Flooring & Decoration. All rights reserved. Crafted in London.</p>
      </div>
    </footer>
  );
};

export default Footer;