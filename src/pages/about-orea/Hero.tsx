import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-orea-cream pt-section-sm pb-section-sm overflow-hidden">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-12 z-10">
        <div className="flex flex-col gap-8 max-w-content mx-auto">
          <h1 className="text-h2 font-serif text-orea-dark leading-relaxed tracking-[0.04em]">
            Modern fine jewellery. <br />
            Solid precious metals. <br />
            Lab-grown diamonds only.
          </h1>
        </div>
      </div>
      
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8 mt-section-sm">
        <div className="aspect-[21/9] bg-orea-linen border border-orea-champagne/20 flex items-center justify-center overflow-hidden">
          <span className="text-caption uppercase tracking-[0.45em] text-orea-taupe font-semibold">Hero Brand Image Slot</span>
        </div>
      </div>
    </section>
  );
};
