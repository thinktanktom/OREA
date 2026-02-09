import React from 'react';
import { KEY_DETAILS, SERVICES_LIST } from './constants';
import { Check } from 'lucide-react';

const ConciergePage: React.FC = () => {
  const handleAddToCart = () => {
    console.log('Added Concierge Service to cart');
  };

  return (
    <main className="flex flex-col md:flex-row">
      {/* Left Column: Craftsmanship Imagery (1:1 Aspect Ratio) */}
      <div className="w-full md:w-1/2 aspect-square md:h-auto md:sticky md:top-0 overflow-hidden bg-[#E8DFD3]">
        <img 
          src="https://images.unsplash.com/photo-1573408302355-4e0b7caf3ad6?auto=format&fit=crop&q=80&w=2000" 
          alt="ORÉA Craftsmanship" 
          className="w-full h-full object-cover grayscale brightness-90 hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* Right Column: Content */}
      <div className="w-full md:w-1/2 px-8 py-16 md:px-20 md:py-24 lg:px-32 flex flex-col justify-center">
        <header className="mb-12">
          <h1 className="serif-heading text-4xl lg:text-5xl font-light tracking-tight mb-4">
            ORÉA Concierge Service
          </h1>
          <p className="text-xl font-light text-[#7D6B5C] mb-6">
            $249.00 NZD
          </p>

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#0F171B] text-white py-4 px-8 uppercase tracking-[0.2em] text-[12px] font-medium hover:bg-black transition-all duration-300 mb-8 active:scale-[0.99]"
          >
            Add to Cart
          </button>
          <div className="w-full h-[1px] bg-[#E8DFD3]"></div>
        </header>

        <div className="space-y-12 max-w-xl">
          {/* Main Description */}
          <section>
            <h3 className="uppercase tracking-[0.15em] text-[10px] font-bold text-[#7D6B5C] mb-5">
              Description
            </h3>
            <div className="space-y-6 text-[15px] leading-relaxed text-[#4A3F35] font-light">
              <p>
                All ORÉA pieces are crafted in solid 14k or 18k gold — never plated, filled, or vermeil. Fine gold is made to last, while remaining naturally malleable. With everyday wear, light scratches are expected and become part of the piece's character over time.
              </p>
              <p>
                For up to three years, the ORÉA Concierge Service provides professional care for your jewellery, including polishing, repairs, and stone resetting. All return shipping and reshipment costs are fully covered.
              </p>
              <p>
                To activate the service, add it to your cart and retain your order number. When you're ready to use your coverage, email <a href="mailto:hello@orea.co.nz" className="underline underline-offset-4 decoration-[#C5B8A0] hover:text-[#4A3F35] transition-colors">hello@orea.co.nz</a> with your order number and the care required.
              </p>
              <p className="font-normal text-[14px]">
                <strong>Please note:</strong> each Concierge Service applies to one jewellery piece only. Coverage for multiple pieces requires a separate service per item. Concierge Service is non-refundable.
              </p>
            </div>
          </section>

          {/* What's Included */}
          <section>
            <h3 className="uppercase tracking-[0.15em] text-[10px] font-bold text-[#7D6B5C] mb-5">
              What's Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[14px] text-[#4A3F35]">
              {SERVICES_LIST.map((service, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#C5B8A0] rounded-full"></div>
                  {service}
                </div>
              ))}
            </div>
          </section>

          {/* Key Details Block */}
          <section className="bg-white/40 p-8 border border-[#E8DFD3] rounded-sm">
            <h3 className="uppercase tracking-[0.15em] text-[10px] font-bold text-[#7D6B5C] mb-6">
              Key Details
            </h3>
            <ul className="space-y-4">
              {KEY_DETAILS.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-[#7D6B5C] font-light leading-snug">
                  <Check size={14} className="mt-0.5 text-[#C5B8A0] flex-shrink-0" />
                  {detail.label}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="mt-24 pt-10 border-t border-[#E8DFD3] text-[10px] text-[#7D6B5C] uppercase tracking-[0.25em] text-center">
          premium care
        </footer>
      </div>
    </main>
  );
};

export default ConciergePage;
