
import React from 'react';

export const OreaStandards: React.FC = () => {
  return (
    <section className="space-y-48">
      {/* Standards Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
          The ORÉA Standards
        </h2>
        <p className="text-lg md:text-xl font-serif text-stone-500 italic">
          ORÉA works within a considered framework
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-40">
        {/* Pillar 1: Metals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-900">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-stone-900 uppercase tracking-tight">Solid Precious Metals</h3>
            <div className="space-y-6 text-stone-600 leading-relaxed font-light text-lg">
              <p>
                We work only in solid 14k or 18k gold and platinum — never plated, filled, or vermeil.
              </p>
              <p className="text-stone-900 font-normal">
                Precious metals are inherently durable, repairable, and made to last.
              </p>
            </div>
          </div>
          
          {/* Metals Image Slot */}
          <div className="bg-[#F9F8F6] aspect-[4/3] flex items-center justify-center border border-stone-100">
             {/* SHOPIFY: Replace with metals texture image */}
             <span className="text-[9px] uppercase tracking-[0.4em] text-stone-300 font-bold">Solid Metals Image Slot</span>
          </div>
        </div>

        {/* Pillar 2: Diamonds */}
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Diamonds Image Slot */}
            <div className="order-2 md:order-1 bg-[#F9F8F6] aspect-[4/3] flex items-center justify-center border border-stone-100">
              {/* SHOPIFY: Replace with diamond macro image */}
              <span className="text-[9px] uppercase tracking-[0.4em] text-stone-300 font-bold">Lab Diamond Image Slot</span>
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-900">
                  <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-stone-900 uppercase tracking-tight">Certified Premium Diamonds</h3>
              <p className="text-stone-600 leading-relaxed font-light text-lg">
                ORÉA works exclusively with certified lab-grown diamonds, selected for exceptional brilliance and traceable quality. 
              </p>
              <p className="text-stone-600 leading-relaxed font-light text-lg">
                For centre stones over 1 carat, we offer only diamonds that meet our highest minimum standards, independently graded by IGI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-stone-50 p-12 border border-stone-100">
            {[
              { label: "Cut", value: "Excellent / Ideal", sub: "maximized brilliance" },
              { label: "Clarity", value: "VS and above", sub: "Eye-clean" },
              { label: "Colour", value: "D — F", sub: "Colourless" }
            ].map((spec, i) => (
              <div key={i} className="text-center space-y-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">{spec.label}</span>
                <div className="text-xl font-serif text-stone-900">{spec.value}</div>
                <div className="text-[9px] uppercase tracking-widest text-stone-400 font-medium">{spec.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillar 3 & 4: Experience & Warranty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-100 border border-stone-100">
          <div className="bg-white p-16 space-y-10 group transition-all duration-700 hover:bg-stone-50">
            <div className="w-12 h-12 border border-stone-100 rounded-full flex items-center justify-center group-hover:border-stone-900 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-stone-900">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-stone-900 uppercase tracking-tight">Guided, Never Rushed</h3>
              <p className="text-stone-500 font-light text-base leading-relaxed">
                We offer a calm, consultation-led experience — never pressure, never urgency. Whether you are choosing a signature piece or designing bespoke, you will be guided with clarity and care.
              </p>
            </div>
          </div>

          <div className="bg-white p-16 space-y-10 group transition-all duration-700 hover:bg-stone-50">
            <div className="w-12 h-12 border border-stone-100 rounded-full flex items-center justify-center group-hover:border-stone-900 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-stone-900">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-stone-900 uppercase tracking-tight">Designed to Last</h3>
              <p className="text-stone-500 font-light text-base leading-relaxed">
                ORÉA jewellery is crafted for everyday wear and long-term keeping. Engagement and wedding rings include a Lifetime Manufacturing Warranty, supporting longevity well beyond the moment of purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
