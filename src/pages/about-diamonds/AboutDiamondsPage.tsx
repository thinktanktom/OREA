import React from 'react';
import { LabGrownIntro } from './LabGrownIntro';
import { DiamondComparison } from './DiamondComparison';
import { MasteryOf4Cs } from './MasteryOf4Cs';
import { DiamondShapes } from './DiamondShapes';

const AboutDiamondsPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-section-lg pb-section-lg">
      <LabGrownIntro />
      <DiamondComparison />
      
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-section-lg">
        <MasteryOf4Cs />
        <DiamondShapes />
      </div>
    </div>
  );
};

export default AboutDiamondsPage;
