
import React from 'react';
import { PRODUCTS } from './constants';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="pt-16 md:pt-32 pb-24 md:pb-48 bg-white px-5 md:px-12 lg:px-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col items-center md:items-start mb-16 md:mb-24 text-center md:text-left">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-orea-dark font-light tracking-tight uppercase">ORÉA Classics</h2>
          <div className="w-12 h-[1px] bg-orea-gold/40 mt-6 md:mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-16 md:gap-y-24">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col items-center">
              {/* Product Image Container */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F9F6F1] mb-8 md:mb-10 transition-shadow duration-700 shadow-sm group-hover:shadow-xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-orea-dark/0 group-hover:bg-orea-dark/[0.03] transition-colors duration-1000"></div>
                
                {/* Quick View Overlay (Desktop only hint) */}
                <div className="hidden lg:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="bg-white/90 backdrop-blur-sm px-6 py-3 text-[8px] tracking-[0.4em] uppercase font-medium text-orea-dark border border-orea-champagne/20">
                    Quick View
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="font-sans text-[10px] tracking-[0.4em] text-orea-dark font-semibold uppercase leading-relaxed min-h-[2.5rem] flex items-center justify-center px-4">
                    {product.name}
                  </h3>
                  <div className="w-4 h-[1px] bg-orea-champagne mx-auto transition-all duration-700 group-hover:w-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 md:mt-32 text-center">
          <a 
            href="#all-pieces" 
            className="group inline-flex flex-col items-center space-y-4 text-[10px] tracking-[0.5em] uppercase text-orea-dark font-semibold transition-all duration-500"
          >
            <span>View All Pieces</span>
            <div className="w-24 h-[1px] bg-orea-dark/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-orea-dark -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
