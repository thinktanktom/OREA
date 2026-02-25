'use client';

import React from 'react';
import Hero from './Hero';
import Collections from './Collections';
import BrandValues from './BrandValues';
import FeaturedProducts from './FeaturedProducts';

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] pb-[120px] -mb-[120px]">
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
    </div>
  );
};

export default HomePage;
