import React from 'react';

export const BespokeProcess: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-32 space-y-24">
      <div className="text-center space-y-8">
        <h4 className="text-[10px] uppercase tracking-[0.45em] text-[#7D6B5C] font-semibold">A More Personal Way to Choose</h4>
        <h2 className="text-4xl font-serif text-[#4A3F35] leading-tight">
          Choosing fine jewellery should feel considered, not transactional.
        </h2>
        <div className="space-y-6 text-[#7D6B5C] font-light text-lg leading-relaxed max-w-3xl mx-auto">
          <p>ORÉA offers a thoughtful experience from start to finish, with personalised guidance online or by appointment at our Christchurch studio.</p>
          <p>For those seeking something personal, we offer both partial and fully bespoke services.</p>
        </div>
        <div className="pt-8">
          <a 
            href="/pages/bespoke" 
            className="inline-block px-12 py-5 bg-[#4A3F35] text-white text-[10px] uppercase tracking-[0.45em] font-bold hover:bg-[#7D6B5C] transition-all"
          >
            Discover Bespoke →
          </a>
        </div>
      </div>
      
      <div className="w-full aspect-video bg-[#E8DFD3] border border-[#D4C4A8]/20 flex items-center justify-center">
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#7D6B5C] font-semibold">Studio / Process Image Slot</span>
      </div>
    </section>
  );
};