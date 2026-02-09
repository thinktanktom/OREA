
import React from 'react';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  return (
    <div className="w-full">
      {/* Mobile: Smooth Horizontal Carousel */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar bg-stone-50">
        {images.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-full snap-center aspect-[4/5]">
            <img 
              src={img} 
              alt={`View ${idx + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Desktop: Editorial Vertical Stack */}
      <div className="hidden md:flex flex-col gap-1 pr-1 lg:pr-0">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="w-full bg-stone-50 overflow-hidden"
          >
            <img 
              src={img} 
              alt={`Product Editorial ${idx + 1}`} 
              className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
            />
          </div>
        ))}
      </div>
      
      {/* Mobile Indicators */}
      <div className="flex justify-center space-x-2 py-4 md:hidden">
        {images.map((_, idx) => (
          <div key={idx} className="w-1 h-1 rounded-full bg-orea-linen" />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
