
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Collections: React.FC = () => {
  // SHOPIFY CONFIG: These values can be mapped to Shopify Collection handles and Metafields
  const collectionData = [
    {
      title: 'RINGS',
      description: 'For the lasting moments.',
      link: '#rings', // LINK PLACEHOLDER: /collections/rings
      image: 'https://placehold.co/1200x1600/F9F6F1/D4C4A8?text=EDITORIAL+RINGS' // IMAGE PLACEHOLDER
    },
    {
      title: 'FINE JEWELLERY',
      description: 'For every day.',
      link: '#fine-jewellery', // LINK PLACEHOLDER: /collections/fine-jewellery
      image: 'https://placehold.co/1200x1600/F9F6F1/D4C4A8?text=FINE+JEWELLERY' // IMAGE PLACEHOLDER
    },
    {
      title: 'BESPOKE',
      description: 'A private consultation experience.',
      link: '#bespoke', // LINK PLACEHOLDER: /pages/bespoke
      image: 'https://placehold.co/1200x1600/F9F6F1/D4C4A8?text=BESPOKE+PROCESS' // IMAGE PLACEHOLDER
    }
  ];

  return (
    <section id="collections" className="pt-24 md:pt-72 pb-20 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 space-y-24 md:space-y-64">
        {collectionData.map((item, index) => (
          <div 
            key={item.title} 
            className={`flex flex-col md:flex-row gap-8 md:gap-24 items-center md:items-end ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Container */}
            <div className="w-full md:w-3/5 lg:w-[55%] group">
              <a 
                href={item.link} 
                className="relative block w-full aspect-[3/4] overflow-hidden bg-[#F9F6F1] shadow-sm"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[5%] transition-transform duration-[3s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-orea-dark/0 group-hover:bg-orea-dark/[0.02] transition-colors duration-1000"></div>
              </a>
            </div>

            {/* Content Area */}
            <div className="w-full md:w-2/5 lg:w-[45%] pb-4">
              
              {item.title === 'FINE JEWELLERY' ? (
                /* 
                   SPECIAL ALIGNMENT: FINE JEWELLERY 
                   Text is centered on mobile, right-aligned on desktop.
                   The CTA aligns exactly to the right edge of the typography block.
                */
                <div className="flex flex-col items-center md:items-end w-full space-y-6 md:space-y-10">
                  <div className="space-y-4 text-center md:text-right">
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-orea-dark font-light tracking-tight uppercase leading-none transition-colors duration-700 hover:text-orea-gold">
                      {item.title}
                    </h3>
                    <p className="text-[11px] md:text-[12px] text-orea-taupe font-medium tracking-[0.2em] uppercase leading-none mt-4">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* CTA: Aligned to the same right edge as the typography block above */}
                  <div className="flex justify-center md:justify-end w-full pt-2 md:pt-4">
                    <a 
                      href={item.link} 
                      className="group/btn inline-flex items-center space-x-6 text-[9px] tracking-[0.45em] uppercase text-orea-dark transition-all duration-500 hover:text-orea-gold"
                    >
                      <span className="font-semibold border-b border-orea-dark/10 pb-1 group-hover/btn:border-orea-gold">Explore</span>
                      <ArrowRight size={14} strokeWidth={1.5} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                    </a>
                  </div>
                </div>
              ) : (
                /* 
                   STANDARD ALIGNMENT: RINGS & BESPOKE 
                   Left-aligned content for balanced alternating layout.
                */
                <div className={`space-y-6 md:space-y-10 text-center md:text-left`}>
                  <div className="space-y-4">
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-orea-dark font-light tracking-tight uppercase leading-none transition-colors duration-700 hover:text-orea-gold">
                      {item.title}
                    </h3>
                    <p className="text-[11px] md:text-[12px] text-orea-taupe font-medium tracking-[0.2em] uppercase max-w-xs md:max-w-sm leading-relaxed mx-auto md:mx-0">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a 
                      href={item.link} 
                      className="group/btn inline-flex items-center space-x-6 text-[9px] tracking-[0.45em] uppercase text-orea-dark transition-all duration-500 hover:text-orea-gold"
                    >
                      <span className="font-semibold border-b border-orea-dark/10 pb-1 group-hover/btn:border-orea-gold">Explore</span>
                      <ArrowRight size={14} strokeWidth={1.5} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
