import React, { useState } from 'react';
import Hero from './Hero';
import Collections from './Collections';
import BrandValues from './BrandValues';
import FeaturedProducts from './FeaturedProducts';
import ShopifyPortingKit from './ShopifyPortingKit';

const HomePage: React.FC = () => {
  const [devMode, setDevMode] = useState(false);

  return (
    <div className={`${devMode ? 'pr-[400px]' : ''} transition-all duration-500`}>
      <main>
        <Hero 
          settings={{
            heading: "Diamonds. Grown. Not Mined.",
            subheading: "Exceptional pieces, made to keep.",
            button_label: "Explore the Collections",
            image: "https://placehold.co/1920x1080/F9F6F1/D4C4A8?text=HERO+IMAGE"
          }}
        />

        <Collections />

        <FeaturedProducts />

        <BrandValues />
      </main>

      {/* Porting Tool Toggle */}
      <button 
        onClick={() => setDevMode(!devMode)}
        className="fixed bottom-6 right-6 z-[100] bg-orea-dark text-orea-cream px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-bold shadow-2xl hover:bg-orea-gold transition-colors flex items-center gap-3"
      >
        <div className={`w-2 h-2 rounded-full ${devMode ? 'bg-green-400' : 'bg-orea-champagne animate-pulse'}`}></div>
        {devMode ? 'Close Shopify Kit' : 'Shopify Porting Kit'}
      </button>

      {/* Shopify Liquid Sidebar */}
      {devMode && <ShopifyPortingKit />}
    </div>
  );
};

export default HomePage;
