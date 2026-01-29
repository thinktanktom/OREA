import React from 'react';

const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 w-full flex items-center justify-center overflow-hidden bg-orea-cream">
      <div className="absolute inset-0 bg-gradient-to-b from-orea-linen/30 to-transparent"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl fade-in">
        <h1 className="font-serif text-3xl md:text-4xl mb-8 tracking-[0.25em] font-bold text-orea-espresso uppercase whitespace-nowrap">
          Begin Your ORÉA Journey
        </h1>
        <p className="font-sans text-[11px] md:text-[12px] tracking-[0.3em] text-orea-taupe leading-relaxed mx-auto mb-4 font-normal uppercase">
          Whether you are beginning something bespoke or have a simple question,
          <br className="hidden md:block" /> we are here to help.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;