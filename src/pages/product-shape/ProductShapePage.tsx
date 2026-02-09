import React, { useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import ProductTabs from './ProductTabs';
import ValueProps from './ValueProps';
import RelatedProducts from './RelatedProducts';
import { Product } from './types';

const DEFAULT_OREA_PRODUCT: Product = {
  id: 'orea-emerald-necklace-001',
  name: 'Classic Solitaire Necklace - Emerald',
  price: 1850,
  description: 'A celebration of modern love and classic architecture. The Emerald focal stone is held in a minimalist setting, meticulously engineered to catch the light from every angle.',
  materials: ['Solid 14k or 18k Gold', 'Platinum', 'IGI Certified Lab-Grown Diamond'],
  options: {
    metal: ['Platinum', '18k Yellow Gold', '18k White Gold', '14k Yellow Gold', '14k White Gold'],
    carat: ['1.0CT'],
    size: ['45cm']
  },
  images: [
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-1_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-2_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-3_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-4_1200x.jpg?v=1710924432',
  ],
  variants: [
    { id: 1001, title: 'Platinum', option1: 'Platinum', option2: '1.0CT', option3: '45cm', price: 1850, available: true },
    { id: 1002, title: '18k Yellow Gold', option1: '18k Yellow Gold', option2: '1.0CT', option3: '45cm', price: 1850, available: true },
  ]
};

const ProductPage: React.FC = () => {
  const [selectedMetal, setSelectedMetal] = useState(DEFAULT_OREA_PRODUCT.options.metal[0] || '');

  return (
    <div className="min-h-screen flex flex-col selection:bg-orea-dark selection:text-orea-cream bg-orea-cream overflow-x-hidden max-w-full">
    <div className="flex flex-col overflow-x-hidden max-w-full">
      <main className="flex-grow overflow-x-hidden max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-full">
          
          <div className="w-full max-w-full overflow-hidden">
            <ProductGallery images={DEFAULT_OREA_PRODUCT.images} />
          </div>

          <div className="px-6 py-12 lg:px-16 xl:px-24 flex flex-col items-center max-w-full overflow-hidden">
            <div className="w-full max-w-xl lg:sticky lg:top-12 space-y-12">
              <ProductDetails 
                product={DEFAULT_OREA_PRODUCT}
                selectedMetal={selectedMetal}
                setSelectedMetal={setSelectedMetal}
              />
              
              <ProductTabs />
              
              <ValueProps />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-12 max-w-full overflow-hidden">
          <section className="mt-40 border-t border-orea-linen pt-24">
            <RelatedProducts />
          </section>
        </div>
      </main>
    </div>
    </div>
  );
};

export default ProductPage;
