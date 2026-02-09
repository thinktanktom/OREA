
import React from 'react';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  return (
    <div className="relative w-full">
      {/* Mobile: Horizontal Carousel | Desktop: Vertical Stack with Gaps */}
      <div className="flex md:flex-col overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory no-scrollbar md:gap-4 lg:gap-6">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-full snap-center bg-stone-50 aspect-square overflow-hidden"
          >
            <img 
              src={img} 
              alt={`Product view ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
      
      {/* Scroll indicator for mobile only */}
      <div className="flex justify-center space-x-2 mt-4 md:hidden pb-6">
        {images.map((_, idx) => (
          <div key={idx} className="w-1 h-1 rounded-full bg-orea-linen" />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
