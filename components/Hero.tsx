
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center bg-[#FDFCFB] pt-32 pb-20 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6 text-center space-y-12 z-10">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight tracking-tight max-w-4xl mx-auto">
            Modern fine jewellery. <br />
            Solid precious metals. <br />
            Lab-grown diamonds only.
          </h1>
        </div>
      </div>
      
      {/* Hero Image Slot */}
      <div className="w-full max-w-6xl mx-auto px-6 mt-24">
        <div className="aspect-[21/9] bg-[#F9F8F6] border border-stone-100 flex items-center justify-center overflow-hidden">
          {/* SHOPIFY: Replace the div below with your image tag */}
          {/* {{ 'hero-about.jpg' | asset_url | img_tag: 'ORÉA Fine Jewellery' }} */}
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-300 font-bold">Hero Brand Image Slot</span>
        </div>
      </div>
    </section>
  );
};
