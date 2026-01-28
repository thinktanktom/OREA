import React from 'react';
import { LabGrownIntro } from '../components/LabGrownIntro';
import { DiamondComparison } from '../components/DiamondComparison';
import { MasteryOf4Cs } from '../components/MasteryOf4Cs';
import { DiamondShapes } from '../components/DiamondShapes';

export const AboutDiamondsPage: React.FC = () => {
  return (
    <div className="animate-reveal selection:bg-stone-200 pt-48">
      <div className="space-y-48 pb-48">
        {/* Introductory Narrative */}
        <LabGrownIntro />

        {/* Unified Comparison Section */}
        <DiamondComparison />
        
        <div className="max-w-7xl mx-auto px-6 space-y-48">
          {/* Unified Interactive 4C Mastery Component */}
          <MasteryOf4Cs />

          {/* New Diamond Shapes Gallery */}
          <DiamondShapes />
        </div>
      </div>
    </div>
  );
};