import React from 'react';
import { Hero } from './components/Hero';
import { OriginText } from './components/OriginText';
import { OreaStandards } from './components/OreaStandards';
import { BespokeProcess } from './components/BespokeProcess';
import { SustainabilityBadge } from './components/SustainabilityBadge';
import { LocationContact } from './components/LocationContact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#E8DFD3] bg-[#F9F6F1]">
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
    </div>
  );
};

export default App;