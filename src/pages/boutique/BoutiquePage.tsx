import React, { useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import ProductTabs from './ProductTabs';
import ValueProps from './ValueProps';
import CompleteTheLook from './CompleteTheLook';
import RelatedProducts from './RelatedProducts';
import { Product } from './types';

const DEFAULT_OREA_PRODUCT: Product = {
  id: 'orea-emerald-001',
  name: 'Classic Solitaire Ring - Emerald',
  price: 1850,
  description: 'A celebration of modern love and classic architecture. The Emerald focal stone is held in a minimalist cathedral setting, meticulously engineered to allow your wedding band to sit completely flush.',
  materials: ['Solid 14k or 18k Gold', 'Platinum', 'IGI Certified Lab-Grown Diamond'],
  options: {
    metal: ['Platinum', '18k Yellow Gold', '18k White Gold', '14k Yellow Gold', '14k White Gold'],
    carat: ['1.0CT', '1.5CT', '2.0CT', '2.5CT', '3.0CT', '3+ ct'],
    size: ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '0', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  },
  images: [
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-1_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-2_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-3_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-4_1200x.jpg?v=1710924432',
  ],
  variants: [
    { id: 1001, title: 'Platinum / 1.0CT / L', option1: 'Platinum', option2: '1.0CT', option3: 'L', price: 1850, available: true },
    { id: 1002, title: '18k Yellow Gold / 1.0CT / L', option1: '18k Yellow Gold', option2: '1.0CT', option3: 'L', price: 1850, available: true },
  ]
};

const BoutiquePage: React.FC = () => {
  const [selectedMetal, setSelectedMetal] = useState(DEFAULT_OREA_PRODUCT.options.metal[0] || '');
  const [selectedCarat, setSelectedCarat] = useState(DEFAULT_OREA_PRODUCT.options.carat[0] || '');
  const [selectedSize, setSelectedSize] = useState('L');

  return (
  <div className="min-h-screen bg-orea-cream selection:bg-orea-dark selection:text-orea-cream">
    <main>
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-0">

        {/* LEFT COLUMN */}
        <div className="w-full">
          <ProductGallery images={DEFAULT_OREA_PRODUCT.images} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="px-6 py-12 lg:px-16 xl:px-24">
          <div className="lg:sticky lg:top-28 space-y-12">
            <ProductDetails
              product={DEFAULT_OREA_PRODUCT}
              selectedMetal={selectedMetal}
              setSelectedMetal={setSelectedMetal}
              selectedCarat={selectedCarat}
              setSelectedCarat={setSelectedCarat}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />

            <ProductTabs />
            <ValueProps />
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        <CompleteTheLook />
        <RelatedProducts />
      </div>
    </main>
  </div>
);

};

export default BoutiquePage;
