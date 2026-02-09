import React from 'react';

export const DiamondComparison: React.FC = () => {
  const specs = [
    { label: "Origin", lab: "Grown in a lab (HPHT or CVD)", mined: "Formed in the earth" },
    { label: "Chemical Composition", lab: "Pure carbon", mined: "Pure carbon" },
    { label: "Crystal Structure", lab: "Cubic", mined: "Cubic" },
    { label: "Hardness (Mohs)", lab: "10 / 10", mined: "10 / 10" },
    { label: "Refractive Index", lab: "2.42", mined: "2.42" },
    { label: "Dispersion (Fire)", lab: "0.044", mined: "0.044" },
    { label: "Appearance", lab: "Same sparkle and brilliance", mined: "Same sparkle and brilliance" },
    { label: "Visual Difference", lab: "Indistinguishable to the naked eye", mined: "Indistinguishable to the naked eye" },
    { label: "Grading", lab: "Certified by IGI or equivalent", mined: "Certified by GIA or equivalent" },
    { label: "Price", lab: "More accessible for comparable quality", mined: "Higher cost due to rarity and mining costs" },
    { label: "Environmental Impact", lab: "Lower land disruption", mined: "Mining impact varies" },
    { label: "ORÉA Offering", lab: "Always lab-grown", mined: "Not offered" }
  ];

  return (
    <section className="px-6 lg:px-20 overflow-hidden relative">
      {/* Table Title */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-serif text-[#4A3F35] leading-[1.1] tracking-tight">
          Lab-Grown vs Earth-Mined Diamonds
        </h2>
      </div>

      {/* Comparison Table Stage */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#4A3F35] text-[#F9F6F1] rounded-sm overflow-hidden shadow-2xl relative">
          {/* Subtle scientific grid pattern background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px'}}></div>
          
          <div className="relative z-10 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="border-b border-[#F9F6F1]/10">
                  <th className="py-10 px-10 text-[10px] uppercase tracking-[0.45em] font-bold text-[#C5B8A0] w-1/4">Property</th>
                  <th className="py-10 px-10 text-[10px] uppercase tracking-[0.45em] font-bold text-[#F9F6F1] w-[37.5%]">Lab-Grown</th>
                  <th className="py-10 px-10 text-[10px] uppercase tracking-[0.45em] font-bold text-[#F9F6F1] w-[37.5%]">Earth-Mined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F9F6F1]/5">
                {specs.map((s, i) => (
                  <tr key={i} className="transition-colors hover:bg-white/[0.02]">
                    <td className="py-8 px-10 text-[10px] font-bold text-[#D4C4A8] uppercase tracking-[0.4em]">{s.label}</td>
                    <td className="py-8 px-10 text-base md:text-lg font-serif text-[#F9F6F1]">
                      {s.lab}
                    </td>
                    <td className="py-8 px-10 text-base md:text-lg font-serif text-[#F9F6F1]">
                      {s.mined}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-12 border-t border-[#F9F6F1]/10 bg-white/[0.01] text-center space-y-4">
            <p className="text-[10px] text-[#7D6B5C] uppercase tracking-[0.4em]">
              This is a high-level comparison for general guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};