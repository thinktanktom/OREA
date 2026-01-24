
import React from 'react';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-1 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="bg-gray-50 aspect-[3/4] overflow-hidden group">
            <img 
              src={img} 
              alt={`Product View ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
