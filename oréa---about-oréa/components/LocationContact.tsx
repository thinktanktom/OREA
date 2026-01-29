import React from 'react';

export const LocationContact: React.FC = () => {
  return (
    <section className="text-center py-40 space-y-20 border-t border-[#E8DFD3]/30">
      <div className="space-y-8 max-w-3xl mx-auto">
        <h4 className="text-[10px] uppercase tracking-[0.45em] text-[#7D6B5C] font-semibold">Begin the Conversation</h4>
        <h2 className="text-5xl font-serif text-[#4A3F35] leading-tight">
          Whether you have a clear vision or are just beginning to explore, we are here to guide you.
        </h2>
      </div>

      <div className="flex justify-center pt-8">
        <a 
          href="/pages/contact" 
          className="px-20 py-6 border border-[#4A3F35] text-[#4A3F35] text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-[#4A3F35] hover:text-white transition-all duration-500"
        >
          Contact ORÉA →
        </a>
      </div>
    </section>
  );
};