import React from 'react';

export const LabGrownIntro: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24">
      {/* Decorative Structural Element: Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E8DFD3] hidden lg:block -z-10"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: The Statement */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-serif text-[#4A3F35] leading-[1.05] tracking-tight">
              What Is a <br />
              <span className="text-[#7D6B5C]">Lab-Grown</span> <br />
              Diamond
            </h2>
          </div>
          
          <div className="max-w-md">
            <h4 className="text-[10px] uppercase tracking-[0.45em] text-[#4A3F35] font-bold mb-10 border-l-2 border-[#4A3F35] pl-6 py-1 leading-relaxed">
              Real diamonds. <br />
              Modern origins.
            </h4>
            <p className="text-[#7D6B5C] font-light text-xl leading-relaxed">
              A lab-grown diamond is chemically, physically, and optically identical to an earth-mined diamond - with the same brilliance, hardness, and fire.
            </p>
          </div>
        </div>

        {/* Right Column: The Narrative */}
        <div className="lg:col-span-6 lg:pt-32 space-y-16">
          <div className="space-y-8 max-w-lg">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-px bg-[#4A3F35]"></div>
              <span className="text-[10px] uppercase tracking-[0.45em] text-[#4A3F35] font-bold">The Distinction</span>
            </div>
            
            <p className="text-[#7D6B5C] font-light text-lg leading-loose">
              The only difference is creation — grown in a controlled environment rather than extracted through mining. A modern approach to nature’s most enduring material.
            </p>
          </div>

          <div className="relative group cursor-default">
            <div className="absolute -inset-4 border border-[#E8DFD3] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="space-y-2">
              <p className="text-[#4A3F35] font-serif text-3xl tracking-wide leading-tight">
                Same diamond. <br />
                Same beauty. <br />
                A more intentional origin.
              </p>
            </div>
            
            {/* Minimalist Graphic: "The Seed" */}
            <div className="mt-12 flex items-center space-x-4">
              <div className="w-4 h-4 border border-[#4A3F35] rotate-45 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#4A3F35]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Aesthetic Spacer */}
      <div className="mt-32 border-t border-[#E8DFD3]"></div>
    </section>
  );
};