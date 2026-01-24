
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f9f9f7] border-t border-stone-200 pt-32 pb-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <h5 className="text-3xl font-light tracking-[0.2em]">OREA</h5>
            <p className="text-[13px] text-stone-500 font-light leading-relaxed max-w-xs">
              Handcrafting timeless artifacts for modern love. Designed and made in Auckland, New Zealand.
            </p>
          </div>
          
          <div className="space-y-6">
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Collections</h6>
            <ul className="text-[13px] space-y-3 text-stone-600 font-light">
              <li><a href="#" className="hover:text-black transition-colors">Engagement</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Wedding Bands</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Bespoke Process</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Fine Jewelry</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Concierge</h6>
            <ul className="text-[13px] space-y-3 text-stone-600 font-light">
              <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Lifetime Warranty</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Studio Visit</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Journal</h6>
            <p className="text-[13px] text-stone-600 font-light">Sign up to receive our seasonal journal on craft and design.</p>
            <div className="flex border-b border-stone-300 pb-2 group">
              <input type="email" placeholder="Email Address" className="bg-transparent text-[13px] w-full focus:outline-none placeholder:text-stone-300" />
              <button className="text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-black transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-stone-200 space-y-6 md:space-y-0">
          <p className="text-[10px] text-stone-400 uppercase tracking-widest">&copy; 2024 OREA NZ Limited. Aotearoa.</p>
          <div className="flex space-x-8 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Pinterest</a>
            <a href="#" className="hover:text-black transition-colors">T&Cs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
