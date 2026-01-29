
import React, { useState } from 'react';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import ProductTabs from './components/ProductTabs';
import ValueProps from './components/ValueProps';
import RelatedProducts from './components/RelatedProducts';
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

interface AppProps {
  initialProduct?: Product | null;
}

const App: React.FC<AppProps> = ({ initialProduct }) => {
  const activeProduct = initialProduct ? { ...DEFAULT_OREA_PRODUCT, ...initialProduct } : DEFAULT_OREA_PRODUCT;

  const [selectedMetal, setSelectedMetal] = useState(activeProduct.options.metal[0] || '');
  const [selectedCarat, setSelectedCarat] = useState(activeProduct.options.carat[0] || '');
  
  const [selectedSize, setSelectedSize] = useState(() => {
    if (activeProduct.options.size.includes('L')) return 'L';
    return activeProduct.options.size[0] || '';
  });

  return (
    <div className="min-h-screen flex flex-col selection:bg-orea-dark selection:text-orea-cream bg-orea-cream overflow-x-hidden max-w-full">
      <main className="flex-grow overflow-x-hidden max-w-full">
        {/* Main Product Layout: 50/50 split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-full">
          
          {/* Gallery Column: Full width of the left half, flush to screen edge */}
          <div className="w-full max-w-full overflow-hidden">
            <ProductGallery images={activeProduct.images} />
          </div>

          {/* Configuration Column: Padded for balance */}
          <div className="px-6 py-12 lg:px-16 xl:px-24 flex flex-col items-center max-w-full overflow-hidden">
            <div className="w-full max-w-xl lg:sticky lg:top-12 space-y-12">
              <ProductDetails 
                product={activeProduct}
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

        {/* Bottom Section: Centered */}
        <div className="container mx-auto px-4 lg:px-12 max-w-full overflow-hidden">
          <section className="mt-40 border-t border-orea-linen pt-24">
            <RelatedProducts />
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
