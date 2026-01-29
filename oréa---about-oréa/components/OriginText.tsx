import React from 'react';

export const OriginText: React.FC = () => {
  return (
    <section className="py-32 border-t border-[#E8DFD3]">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.45em] text-[#7D6B5C] font-semibold">Lab-Grown, Always</h4>
          <h2 className="text-2xl md:text-4xl font-serif text-[#4A3F35] leading-snug">
            ORÉA works exclusively with certified lab-grown diamonds.
          </h2>
        </div>
        
        <div className="space-y-8 text-[#7D6B5C] font-light text-lg leading-relaxed max-w-2xl mx-auto">
          <p>
            They are real diamonds, identical in beauty and structure — the difference is their origin.
          </p>
          <p>
            This is not an alternative for us, but the future of responsible fine jewellery.
          </p>
        </div>

        <div className="pt-6">
          <a 
            href="/lab-grown" 
            className="text-[11px] uppercase tracking-[0.45em] font-semibold text-[#4A3F35] border-b border-[#4A3F35] pb-2 hover:text-[#C5B8A0] hover:border-[#C5B8A0] transition-all"
          >
            Learn more about diamonds →
          </a>
        </div>
      </div>
    </section>
  );
};