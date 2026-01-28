
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FDFCFB] border-t border-stone-100 py-48 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24">
          <div className="space-y-12 max-w-xs">
            <h2 className="font-serif text-4xl tracking-[0.5em]">ORÉA</h2>
            <p className="text-stone-400 text-[10px] font-medium leading-loose uppercase tracking-[0.3em]">
              Crafted in New Zealand <br />
              Markers of enduring change.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-24 flex-grow">
            <div className="space-y-10">
              <h4 className="text-[9px] uppercase tracking-widest font-bold text-stone-300">Showcase</h4>
              <ul className="space-y-4 text-[11px] text-stone-500 font-light tracking-widest uppercase">
                <li><a href="#" className="hover:text-stone-900">Solitaires</a></li>
                <li><a href="#" className="hover:text-stone-900">Fine Rings</a></li>
                <li><a href="#" className="hover:text-stone-900">Adornments</a></li>
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-[9px] uppercase tracking-widest font-bold text-stone-300">Dialogue</h4>
              <ul className="space-y-4 text-[11px] text-stone-500 font-light tracking-widest uppercase">
                <li><a href="#" className="hover:text-stone-900">Appointment</a></li>
                <li><a href="#" className="hover:text-stone-900">Bespoke Inquiry</a></li>
                <li><a href="#" className="hover:text-stone-900">Instagram</a></li>
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-[9px] uppercase tracking-widest font-bold text-stone-300">Transparency</h4>
              <ul className="space-y-4 text-[11px] text-stone-500 font-light tracking-widest uppercase">
                <li><a href="#" className="hover:text-stone-900">The Choice</a></li>
                <li><a href="#" className="hover:text-stone-900">Metals</a></li>
                <li><a href="#" className="hover:text-stone-900">Sustainability</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-48 flex flex-col md:flex-row justify-between items-center text-[8px] uppercase tracking-[0.4em] text-stone-300 border-t border-stone-50 pt-12">
          <p>© 2024 ORÉA Fine Jewellery. All rights reserved.</p>
          <div className="text-stone-900 italic font-serif text-sm mt-6 md:mt-0 tracking-widest">
            Jewellery worth passing on.
          </div>
          <div className="flex space-x-12 mt-6 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
