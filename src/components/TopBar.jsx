import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#001f2d] text-white py-2 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] md:text-sm">
        
        {/* Left Side - Phone 1 */}
        <div className="flex items-center gap-1.5">
          <Phone size={12} className="text-[#c5a059] md:w-3.5 md:h-3.5" />
          <a href="tel:02033456228" className="hover:text-[#c5a059] transition-colors">
            020 3345 6228
          </a>
        </div>

        {/* Right Side - Phone 2 & Email (Mobile এ ইমেইল হাইড করা হয়েছে জায়গা বাঁচাতে) */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-1.5">
            <Phone size={12} className="text-[#c5a059] md:w-3.5 md:h-3.5" />
            <a href="tel:07360095207" className="hover:text-[#c5a059] transition-colors">
              07360 095207
            </a>
          </div>
          
          {/* Email: শুধু বড় স্ক্রিনে দেখাবে */}
          <div className="hidden sm:flex items-center gap-1.5">
            <Mail size={12} className="text-[#c5a059] md:w-3.5 md:h-3.5" />
            <a href="mailto:info@britaniaflodec.co.uk" className="hover:text-[#c5a059] transition-colors lowercase">
              info@britaniaflodec.co.uk
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;