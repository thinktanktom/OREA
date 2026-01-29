
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import BrandValues from './components/BrandValues';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-orea-cream selection:bg-orea-champagne selection:text-orea-dark">
      <Navbar />
      
      <main>
        {/* Editorial Hero with Brand Statement content */}
        <Hero />

        {/* 2-Column Editorial Collection Entry Points */}
        <Collections />

        {/* Featured Editorial Product Highlights */}
        <FeaturedProducts />

        {/* Minimalist Brand Value Propositions - Moved just above the footer */}
        <BrandValues />
      </main>

      <Footer />
    </div>
  );
};

export default App;
