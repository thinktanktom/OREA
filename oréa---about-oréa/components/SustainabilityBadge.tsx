import React from 'react';

export const SustainabilityBadge: React.FC = () => {
  return (
    <section className="py-32 bg-[#F9F6F1] border-y border-[#E8DFD3]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="w-56 h-56 border border-[#4A3F35] rounded-full flex flex-col items-center justify-center p-8 text-center bg-[#F9F6F1] shadow-sm transition-transform duration-700 hover:scale-105">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4A3F35" strokeWidth="1" className="mb-4">
                    <path d="M12 2L19 21H5L12 2Z" />
                    <path d="M12 16V21" />
                 </svg>
                 <span className="text-[11px] uppercase tracking-[0.35em] font-bold leading-tight text-[#4A3F35]">
                  One Tree <br /> Per Purchase
                 </span>
              </div>
              <div className="absolute -inset-4 border border-[#D4C4A8] rounded-full opacity-30 scale-110"></div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-[10px] uppercase tracking-[0.45em] text-[#7D6B5C] font-bold">Impact Partnership</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.45em] text-[#7D6B5C] font-semibold">Thoughtful Practices</h4>
              <p className="text-xl leading-relaxed font-serif text-[#4A3F35]">
                ORÉA works exclusively with lab-grown diamonds as part of a more considered approach to fine jewellery.
              </p>
            </div>
            
            <div className="max-w-xl">
              <p className="text-xl leading-relaxed font-serif text-[#4A3F35]">
                For every purchase, we plant one tree through Trees for Survival, supporting long-term restoration across Aotearoa.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};