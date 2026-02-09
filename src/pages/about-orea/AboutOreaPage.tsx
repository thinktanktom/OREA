import React from 'react';
import { Hero } from './Hero';
import { OriginText } from './OriginText';
import { OreaStandards } from './OreaStandards';
import { BespokeProcess } from './BespokeProcess';
import { SustainabilityBadge } from './SustainabilityBadge';
import { LocationContact } from './LocationContact';

const AboutOreaPage: React.FC = () => {
  return (
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
  );
};

export default AboutOreaPage;
