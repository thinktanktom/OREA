
import React from 'react';

export const BespokeProcess: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-32 space-y-24">
      <div className="text-center space-y-8">
        <h4 className="text-[10px] uppercase tracking-[0.6em] text-stone-400 font-bold">A More Personal Way to Choose</h4>
        <h2 className="text-3xl font-serif text-stone-900 leading-tight">
          Choosing fine jewellery should feel considered, not transactional.
        </h2>
        <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed max-w-3xl mx-auto">
          <p>ORÉA offers a thoughtful experience from start to finish, with personalised guidance online or by appointment at our Christchurch studio.</p>
          <p>For those seeking something personal, we offer both partial and fully bespoke services.</p>
        </div>
        <div className="pt-8">
          <a 
            href="/pages/bespoke" 
            className="inline-block px-12 py-5 bg-stone-900 text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-stone-800 transition-all"
          >
            Discover Bespoke →
          </a>
        </div>
      </div>
      
      {/* Studio Image Slot */}
      <div className="w-full aspect-video bg-[#F9F8F6] border border-stone-100 flex items-center justify-center">
        {/* SHOPIFY: Replace with Studio/Workshop image */}
        <span className="text-[9px] uppercase tracking-[0.4em] text-stone-300 font-bold">Studio / Process Image Slot</span>
      </div>
    </section>
  );
};
