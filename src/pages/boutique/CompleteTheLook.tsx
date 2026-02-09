
import React from 'react';

const CompleteTheLook: React.FC = () => {
  const items = [
    { name: 'Emerald Eternity Band', price: 950, img: 'https://www.orea.co.nz/cdn/shop/files/EmeraldBand_600x.jpg' },
    { name: 'Classic Gold Studs', price: 450, img: 'https://www.orea.co.nz/cdn/shop/files/GoldStuds_600x.jpg' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-light serif italic tracking-wide text-orea-dark mb-2">Complete the Look</h3>
        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-orea-taupe">Artfully curated pairings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {items.map((item, idx) => (
          <div key={idx} className="group cursor-pointer flex items-center space-x-8 bg-white p-6 border border-orea-linen/20 hover:border-orea-gold/40 transition-all">
            <div className="w-32 h-32 flex-shrink-0 bg-stone-50 overflow-hidden">
              <div className="w-full h-full bg-orea-linen/10 flex items-center justify-center text-[8px] uppercase tracking-widest text-orea-taupe/40 font-bold">Image</div>
            </div>
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-orea-dark">{item.name}</h4>
              <p className="text-[13px] text-orea-taupe font-light">${item.price} NZD</p>
              <button className="text-[9px] font-bold uppercase tracking-widest text-orea-gold border-b border-orea-gold/20 hover:border-orea-gold transition-all pt-2">Add +</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompleteTheLook;
