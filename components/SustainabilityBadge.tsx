
import React from 'react';

export const SustainabilityBadge: React.FC = () => {
  return (
    <section className="py-32 bg-stone-50 border-y border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="w-56 h-56 border border-stone-900 rounded-full flex flex-col items-center justify-center p-8 text-center bg-white shadow-sm transition-transform duration-700 hover:scale-105">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-900 mb-4">
                    <path d="M12 2L19 21H5L12 2Z" />
                    <path d="M12 16V21" />
                 </svg>
                 <span className="text-[11px] uppercase tracking-[0.3em] font-bold leading-tight text-stone-900">
                  One Tree <br /> Per Purchase
                 </span>
              </div>
              <div className="absolute -inset-4 border border-stone-200 rounded-full opacity-30 scale-110"></div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">Impact Partnership</p>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.6em] text-stone-400 font-bold">Thoughtful Practices</h4>
              <p className="text-lg leading-relaxed font-serif text-stone-600">
                ORÉA works exclusively with lab-grown diamonds as part of a more considered approach to fine jewellery.
              </p>
            </div>
            
            <div className="max-w-xl">
              <p className="text-lg leading-relaxed font-serif text-stone-600">
                For every purchase, we plant one tree through Trees for Survival, supporting long-term restoration across Aotearoa.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
