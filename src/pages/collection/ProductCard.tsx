import React, { useState } from 'react';
import { Product } from './types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayImage = isHovered ? product.hoverImageUrl : product.imageUrl;

  return (
    <div 
      className="group cursor-pointer flex flex-col space-y-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DFD3]/40 flex items-center justify-center">
        {displayImage ? (
          <img
            src={displayImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-105"
          />
        ) : (
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#7D6B5C]/50 text-center px-4">
            Product Image
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col items-center text-center space-y-2 pb-8">
        <h3 className="text-[11px] md:text-xs font-medium uppercase tracking-[0.4em] text-[#4A3F35] leading-relaxed">
          {product.name}
        </h3>
        <p className="text-[10px] text-[#7D6B5C] font-light tracking-[0.2em]">
          ${product.price.toLocaleString('en-NZ')} NZD
        </p>
      </div>
    </div>
  );
};

export default ProductCard;