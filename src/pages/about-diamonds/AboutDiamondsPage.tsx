import React from 'react';
import { LabGrownIntro } from './LabGrownIntro';
import { DiamondComparison } from './DiamondComparison';
import { MasteryOf4Cs } from './MasteryOf4Cs';
import { DiamondShapes } from './DiamondShapes';

const AboutDiamondsPage: React.FC = () => {
  return (
    <div className="space-y-48 pb-48">
      {/* Introductory Narrative */}
      <LabGrownIntro />

      {/* Unified Comparison Section */}
      <DiamondComparison />
      
      <div className="max-w-7xl mx-auto px-6 space-y-48">
        {/* Unified Interactive 4C Mastery Component */}
        <MasteryOf4Cs />

        {/* Diamond Shapes Gallery */}
        <DiamondShapes />
      </div>
    </div>
  );
};

export default AboutDiamondsPage;