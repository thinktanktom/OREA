
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OriginText } from './components/OriginText';
import { OreaStandards } from './components/OreaStandards';
import { BespokeProcess } from './components/BespokeProcess';
import { SustainabilityBadge } from './components/SustainabilityBadge';
import { LocationContact } from './components/LocationContact';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-stone-200 bg-[#FDFCFB]">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="space-y-48 pb-48 max-w-7xl mx-auto px-6">
          <OriginText />
          <OreaStandards />
          <BespokeProcess />
          <SustainabilityBadge />
          <LocationContact />
        </div>
      </main>

      {/* Footer removed per request */}
      <div className="py-20 text-center border-t border-stone-100">
         <p className="text-[8px] uppercase tracking-[0.4em] text-stone-300">© 2024 ORÉA Fine Jewellery. All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;
