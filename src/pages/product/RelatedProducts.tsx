
import React from 'react';

const RelatedProducts: React.FC = () => {
  // These items are placeholders. When integrating with Shopify, 
  // you can replace this array with data from your product recommendations API or a collection.
  const items = [
    { name: 'Product Name', price: 0, img: '' },
    { name: 'Product Name', price: 0, img: '' },
    { name: 'Product Name', price: 0, img: '' },
    { name: 'Product Name', price: 0, img: '' },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h3 className="text-4xl font-light text-orea-dark serif uppercase tracking-[0.1em]">Recommended for you</h3>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="group cursor-pointer text-center lg:text-left">
            <div className="bg-orea-linen/30 aspect-square overflow-hidden mb-6 relative border border-orea-linen/20">
              {item.img ? (
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[8px] uppercase tracking-widest text-orea-taupe/40 font-bold">
                  Insert Image
                </div>
              )}
              <div className="absolute inset-0 bg-orea-dark/0 group-hover:bg-orea-dark/5 transition-colors duration-500" />
            </div>
            <div className="space-y-1">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orea-dark">
                {item.name !== 'Product Name' ? item.name : 'Product Title'}
              </h4>
              <p className="text-[13px] text-orea-taupe font-light">
                {item.price > 0 ? `$${item.price.toLocaleString()} NZD` : '$0.00 NZD'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
