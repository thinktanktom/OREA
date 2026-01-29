import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-[#F9F6F1] pt-20 pb-20 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6 text-center space-y-12 z-10">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-[#4A3F35] leading-tight tracking-tight max-w-4xl mx-auto">
            Modern fine jewellery. <br />
            Solid precious metals. <br />
            Lab-grown diamonds only.
          </h1>
        </div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-6 mt-24">
        <div className="aspect-[21/9] bg-[#E8DFD3] border border-[#D4C4A8]/20 flex items-center justify-center overflow-hidden">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#7D6B5C] font-semibold">Hero Brand Image Slot</span>
        </div>
      </div>
    </section>
  );
};