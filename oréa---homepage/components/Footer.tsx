
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orea-dark text-orea-cream py-24 px-6 md:px-16 lg:px-24 isolate transform-gpu">
      <div className="max-w-[1800px] mx-auto relative">
        {/* Main Footer Columns - Using Grid for equal spacing on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-x-12 items-start">
          
          {/* Column 1 - SHOP */}
          <div className="flex flex-col space-y-10">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-orea-champagne font-semibold leading-none">SHOP</h4>
            <ul className="space-y-5 text-[10px] tracking-[0.2em] font-light uppercase">
              <li><a href="#rings" className="hover:text-orea-gold transition-colors duration-500">Rings</a></li>
              <li><a href="#necklaces" className="hover:text-orea-gold transition-colors duration-500">Necklaces</a></li>
              <li><a href="#earrings" className="hover:text-orea-gold transition-colors duration-500">Earrings</a></li>
              <li><a href="#bracelets" className="hover:text-orea-gold transition-colors duration-500">Bracelets</a></li>
              <li><a href="#pendants" className="hover:text-orea-gold transition-colors duration-500">Pendants</a></li>
            </ul>
          </div>

          {/* Column 2 — HELP */}
          <div className="flex flex-col space-y-10">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-orea-champagne font-semibold leading-none">HELP</h4>
            <ul className="space-y-5 text-[10px] tracking-[0.2em] font-light uppercase">
              <li><a href="#faqs" className="hover:text-orea-gold transition-colors duration-500">FAQs</a></li>
              <li><a href="#contact" className="hover:text-orea-gold transition-colors duration-500">Contact Us</a></li>
              <li><a href="#care" className="hover:text-orea-gold transition-colors duration-500">Care Guide</a></li>
              <li><a href="#shipping" className="hover:text-orea-gold transition-colors duration-500">Shipping & Delivery</a></li>
              <li><a href="#returns" className="hover:text-orea-gold transition-colors duration-500">Returns & Exchanges</a></li>
            </ul>
          </div>

          {/* Column 3 - Newsletter Section & Socials */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-5">
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-orea-champagne font-semibold leading-none">JOIN OUR COMMUNITY</h4>
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.1em] text-orea-cream font-medium leading-relaxed uppercase">
                  Receive $25 off your first order.
                </p>
                <p className="text-[10px] tracking-[0.1em] text-orea-oatmeal/70 font-light leading-relaxed uppercase">
                  Early access to new pieces, private releases, exclusive offers & more.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex border-b border-orea-champagne/20 pb-3 group focus-within:border-orea-gold transition-colors duration-700">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent text-[10px] tracking-[0.3em] outline-none flex-1 placeholder:text-orea-taupe text-orea-cream uppercase"
                />
                <button className="text-[10px] tracking-[0.4em] uppercase text-orea-champagne hover:text-orea-gold ml-4 font-semibold transition-colors duration-500">JOIN</button>
              </div>

              {/* Social Media Icons - Aligned Right under JOIN */}
              <div className="flex justify-end space-x-6 pt-1">
                <a href="#" className="text-orea-oatmeal hover:text-orea-gold transition-colors duration-500" aria-label="Instagram">
                  <Instagram size={16} strokeWidth={1.2} />
                </a>
                <a href="#" className="text-orea-oatmeal hover:text-orea-gold transition-colors duration-500" aria-label="Facebook">
                  <Facebook size={16} strokeWidth={1.2} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-10 border-t border-orea-champagne/10 flex flex-col md:flex-row justify-between items-center text-[8px] tracking-[0.4em] uppercase space-y-6 md:space-y-0">
          <p className="text-orea-oatmeal/60">© ORÉA 2026</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-orea-oatmeal/80">
            <a href="#" className="hover:text-orea-cream transition-colors uppercase">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
