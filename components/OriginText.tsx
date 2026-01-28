
import React from 'react';

export const OriginText: React.FC = () => {
  return (
    <section className="py-32 border-t border-stone-100">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.6em] text-stone-400 font-bold">Lab-Grown, Always</h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-900 leading-snug whitespace-nowrap">
            ORÉA works exclusively with certified lab-grown diamonds.
          </h2>
        </div>
        
        <div className="space-y-8 text-stone-600 font-light text-lg leading-relaxed max-w-2xl mx-auto">
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
            className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-900 border-b border-stone-900 pb-2 hover:text-stone-400 hover:border-stone-400 transition-all"
          >
            Learn more about diamonds →
          </a>
        </div>
      </div>
    </section>
  );
};
