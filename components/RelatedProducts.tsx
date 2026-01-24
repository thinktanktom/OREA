
import React from 'react';

const RelatedProducts: React.FC = () => {
  const items = [
    { name: 'The Slim Round Band', price: 650, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&h=800&auto=format&fit=crop' },
    { name: 'Diamond Pavé Band', price: 1450, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&h=800&auto=format&fit=crop' },
    { name: 'Emerald Pendant', price: 1200, img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&h=800&auto=format&fit=crop' },
    { name: 'Classic Solitaire Studs', price: 1100, img: 'https://images.unsplash.com/photo-1635767790417-217d63991206?q=80&w=600&h=800&auto=format&fit=crop' },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h3 className="text-4xl font-light text-stone-900 serif italic">Complete the Look</h3>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">Curated Pairings for the Solitaire</p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="bg-stone-50 aspect-[3/4] overflow-hidden mb-6 relative">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>
            <div className="space-y-1 text-center lg:text-left">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-stone-800">{item.name}</h4>
              <p className="text-[13px] text-stone-500 font-light">${item.price.toLocaleString()} NZD</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
