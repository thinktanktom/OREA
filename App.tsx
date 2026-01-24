
import React, { useState } from 'react';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import ProductTabs from './components/ProductTabs';
import ValueProps from './components/ValueProps';
import AIAssistant from './components/AIAssistant';
import RelatedProducts from './components/RelatedProducts';
import Footer from './components/Footer';
import { Product } from './types';

const DEFAULT_OREA_PRODUCT: Product = {
  id: 'orea-emerald-001',
  name: 'Classic Solitaire Ring - Emerald',
  price: 1850,
  description: 'A tailored description specific to each design, highlighting form, inspiration, setting style, and how the diamond is showcased.',
  materials: ['Solid 14k or 18k Gold', 'Platinum', 'IGI Certified Lab-Grown Diamond'],
  options: {
    metal: ['Platinum', '18k Yellow Gold', '18k White Gold', '14k Yellow Gold', '14k White Gold'],
    carat: ['1.0CT', '1.5CT', '2.0CT', '2.5CT', '3.0CT', '3+ ct'],
    size: ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  },
  images: [
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-1_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-2_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-3_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-4_1200x.jpg?v=1710924432',
  ],
  variants: [
    { id: 1001, title: 'Platinum / 1.0CT / L', option1: 'Platinum', option2: '1.0CT', option3: 'L', price: 1850, available: true },
    { id: 1002, title: 'Platinum / 1.5CT / L', option1: 'Platinum', option2: '1.5CT', option3: 'L', price: 2450, available: true },
    { id: 1003, title: 'Platinum / 2.0CT / L', option1: 'Platinum', option2: '2.0CT', option3: 'L', price: 3850, available: true },
    { id: 1006, title: '18k Yellow Gold / 1.0CT / L', option1: '18k Yellow Gold', option2: '1.0CT', option3: 'L', price: 1850, available: true },
  ]
};

interface AppProps {
  initialProduct?: Product | null;
}

const App: React.FC<AppProps> = ({ initialProduct }) => {
  const activeProduct = initialProduct || DEFAULT_OREA_PRODUCT;

  // Set initial states based on provided data or defaults
  const [selectedMetal, setSelectedMetal] = useState(activeProduct.options.metal[0] || '');
  const [selectedCarat, setSelectedCarat] = useState(activeProduct.options.carat[0] || '');
  const [selectedSize, setSelectedSize] = useState(activeProduct.options.size.includes('L') ? 'L' : activeProduct.options.size[0] || '');

  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white bg-[#fcfcf9]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-6">
            <ProductGallery images={activeProduct.images} />
          </div>

          {/* Configuration Column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-12">
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

        <section className="mt-40 border-t border-stone-100 pt-24">
          <RelatedProducts />
        </section>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
