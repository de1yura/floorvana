import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import TopBar from './TopBar'; 
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [flooringOpen, setFlooringOpen] = useState(false);
  const [mobileFlooringOpen, setMobileFlooringOpen] = useState(false);
  const location = useLocation();

  const phoneNumber = '447360095207';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hello! I would like to book a free measurement for my flooring.')}`;

  // পেজ পরিবর্তন হলে মেনু অটোমেটিক বন্ধ হবে
  useEffect(() => {
    setOpen(false);
    setMobileFlooringOpen(false);
  }, [location.pathname]);

  // মেনু ওপেন থাকলে বডির স্ক্রল লক করার জন্য (ঐচ্ছিক কিন্তু ভালো)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const isActive = (path) => location.pathname === path;
  const isFlooringActive = location.pathname.startsWith("/flooring");

  const desktopLinkStyle = (path) => `
    transition-colors duration-200 font-medium text-sm tracking-wide
    ${isActive(path) ? "text-yellow-500" : "text-gray-200 hover:text-yellow-400"}
  `;

  const dropdownLinkStyle = (path) => `
    block px-5 py-2.5 text-sm transition-colors duration-150
    ${isActive(path) ? "bg-yellow-50 text-yellow-700 font-semibold" : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"}
  `;

  const mobileLinkStyle = (path, isSubMenu = false) => `
    block px-4 py-2.5 rounded-lg transition-all duration-200
    ${isSubMenu ? "text-[13px] py-1.5" : "text-sm font-medium"} 
    ${isActive(path) ? "bg-[#4a362a] text-yellow-500" : "text-gray-300 hover:bg-[#4a362a] hover:text-yellow-400"}
  `;

  return (
    // ✅ sticky ব্যবহার করা হয়েছে যাতে স্ক্রল করলে মেনু আটকে থাকে এবং লেআউট না ভাঙে
    <header className="sticky top-0 left-0 w-full z-[1000] shadow-xl">
      
      {/* ১. TopBar */}
      <TopBar />

      {/* ২. Main Navigation */}
      <nav className="bg-[#3b2b22] text-white border-b border-[#4a362a]">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Britania" className="h-8 md:h-10 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            <Link to="/" className={desktopLinkStyle("/")}>Home</Link>
            <Link to="/services" className={desktopLinkStyle("/services")}>Services</Link>

            <div
              className="relative group"
              onMouseEnter={() => setFlooringOpen(true)}
              onMouseLeave={() => setFlooringOpen(false)}
            >
              <Link to="/flooring" className={`flex items-center gap-1.5 font-medium text-sm tracking-wide ${isFlooringActive ? "text-yellow-500" : "text-gray-200 group-hover:text-yellow-400"}`}>
                Flooring
                <ChevronDown size={16} className={`transition-transform duration-200 ${flooringOpen ? "rotate-180" : ""}`} />
              </Link>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 transition-all duration-200 ${
                flooringOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}>
                <Link className={dropdownLinkStyle("/flooring/carpet")} to="/flooring/carpet">Carpet</Link>
                <Link className={dropdownLinkStyle("/flooring/laminate")} to="/flooring/laminate">Laminate</Link>
                <Link className={dropdownLinkStyle("/flooring/lvt")} to="/flooring/lvt">LVT</Link>
                <Link className={dropdownLinkStyle("/flooring/vinyl")} to="/flooring/vinyl">Vinyl</Link>
                <Link className={dropdownLinkStyle("/flooring/carpettiles")} to="/flooring/carpettiles">Carpet Tiles</Link>
                <Link className={dropdownLinkStyle("/flooring/spc")} to="/flooring/spc">SPC</Link>
                <Link className={dropdownLinkStyle("/flooring/tiles")} to="/flooring/tiles">Tiles</Link>
                <Link className={dropdownLinkStyle("/flooring/engineered-wood")} to="/flooring/engineered-wood">Wood</Link>
              </div>
            </div>

            <Link to="/gallery" className={desktopLinkStyle("/gallery")}>Projects</Link>
            <Link to="/contact" className={desktopLinkStyle("/contact")}>Contact</Link>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-bold tracking-wider shadow-md ml-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Get a Quote
            </motion.a>
          </div>

          {/* Mobile Button */}
          <div className="flex items-center gap-3 md:hidden">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#25D366] rounded-full text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                  </a>
                  <button 
                      onClick={() => setOpen(!open)} 
                      className="p-2 text-gray-200 active:scale-95 transition-transform"
                  >
                      {open ? <X size={28} /> : <Menu size={28} />}
                  </button>
          </div>
        </div>

        {/* ✅ Mobile Menu - স্ক্রলবার এবং ট্রানজিশন ঠিক করা হয়েছে */}
        <div 
          className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out bg-[#3b2b22] ${
            open ? "max-h-[85vh] opacity-100 border-t border-[#4a362a]" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            <Link to="/" className={mobileLinkStyle("/")}>Home</Link>
            <Link to="/services" className={mobileLinkStyle("/services")}>Services</Link>

            <div className="py-0.5">
              <button
                onClick={() => setMobileFlooringOpen(!mobileFlooringOpen)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isFlooringActive ? "text-yellow-500 bg-[#4a362a]" : "text-gray-300 hover:bg-[#4a362a]"
                }`}
              >
                Flooring
                <ChevronDown size={18} className={`transition-transform duration-200 ${mobileFlooringOpen ? "rotate-180" : ""}`} />
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileFlooringOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
                }`}>
                  
                <div className="ml-6 border-l border-[#5a463a] pl-2 space-y-1">
                  <Link to="/flooring/carpet" className={mobileLinkStyle("/flooring/carpet", true)}>Carpet</Link>
                  <Link to="/flooring/laminate" className={mobileLinkStyle("/flooring/laminate", true)}>Laminate</Link>
                  <Link to="/flooring/lvt" className={mobileLinkStyle("/flooring/lvt", true)}>LVT</Link>
                  <Link to="/flooring/vinyl" className={mobileLinkStyle("/flooring/vinyl", true)}>Vinyl</Link>
                  <Link to="/flooring/carpettiles" className={mobileLinkStyle("/flooring/carpettiles", true)}>Carpet Tiles</Link>
                  <Link to="/flooring/spc" className={mobileLinkStyle("/flooring/spc", true)}>SPC</Link>
                  <Link to="/flooring/tiles" className={mobileLinkStyle("/flooring/tiles", true)}>Tiles</Link>
                  <Link to="/flooring/engineered-wood" className={mobileLinkStyle("/flooring/engineered-wood", true)}>Wood</Link>
                </div>
              </div>
            </div>

            <Link to="/gallery" className={mobileLinkStyle("/gallery")}>Projects</Link>
            <Link to="/contact" className={mobileLinkStyle("/contact")}>Contact</Link>
            
            <div className="pt-4 pb-2">
              <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-3 rounded-xl flex items-center justify-center gap-3 text-sm font-bold shadow-lg"
              >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Get a Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;