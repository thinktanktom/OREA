
import React from 'react';

interface HeroSettings {
  heading: string;
  subheading: string;
  button_label: string;
  image: string;
}

const Hero: React.FC<{ settings: HeroSettings }> = ({ settings }) => {
  return (
    <section className="relative h-[90vh] sm:h-screen w-full flex items-end justify-center overflow-hidden bg-orea-linen pb-10 md:pb-14">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={settings.image} 
          alt="ORÉA Fine Jewellery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-orea-dark/[0.02]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-orea-cream/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto space-y-8 fade-in">
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-orea-dark leading-snug font-light tracking-[0.2em] sm:tracking-[0.25em] uppercase px-2">
            {settings.heading}
          </h1>
          
          <div className="w-12 h-[1px] bg-orea-dark/20 my-6 md:my-8"></div>
          
          <p className="text-[10px] md:text-[11px] tracking-[0.4em] sm:tracking-[0.5em] uppercase text-orea-taupe font-medium opacity-90">
            {settings.subheading}
          </p>
        </div>
        
        <div className="pt-2">
          <button className="group relative overflow-hidden px-10 md:px-12 py-4 border border-orea-dark/30 text-orea-dark text-[9px] tracking-[0.4em] uppercase transition-all duration-700 hover:text-orea-cream hover:border-orea-dark">
            <span className="relative z-10 font-medium">{settings.button_label}</span>
            <div className="absolute inset-0 bg-orea-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-orea-dark/10"></div>
    </section>
  );
};

export default Hero;
