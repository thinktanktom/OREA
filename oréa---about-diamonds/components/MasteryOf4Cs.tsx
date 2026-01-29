import React, { useState } from 'react';
import { DiamondModality } from '../types';

const BODY_TEXT_CLASS = "text-[#7D6B5C] font-light text-base leading-relaxed";

export const MasteryOf4Cs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DiamondModality>('Cut');

  const tabs: { label: DiamondModality }[] = [
    { label: 'Cut' },
    { label: 'Color' },
    { label: 'Clarity' },
    { label: 'Carat' }
  ];

  return (
    <section className="bg-[#F9F6F1] border-y border-[#E8DFD3] overflow-hidden py-32">
      <div className="max-w-[1600px] mx-auto px-8 mb-24">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-12 max-w-4xl">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-serif text-[#4A3F35] leading-tight tracking-tight">Mastery of the 4Cs</h2>
            </div>
            
            <div className="space-y-4 max-w-2xl mx-auto border-t border-[#E8DFD3] pt-12">
              <p className="text-[#4A3F35] font-serif text-xl md:text-2xl leading-relaxed">
                The global standard for assessing diamond quality.
              </p>
              <p className="text-[#7D6B5C] font-light text-base md:text-lg leading-relaxed">
                Understand the metrics of diamond quality that define brilliance, purity, and presence.
              </p>
              <p className="text-[#7D6B5C] font-light text-base md:text-lg leading-relaxed">
                Explore how ORÉA curates only the highest standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-center border-b border-[#E8DFD3] overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`group px-8 md:px-16 py-8 transition-all relative flex flex-col items-center space-y-2 ${
                activeTab === tab.label ? 'text-[#4A3F35]' : 'text-[#D4C4A8] hover:text-[#7D6B5C]'
              }`}
            >
              <span className="text-[10px] uppercase tracking-[0.45em] font-bold">{tab.label}</span>
              {activeTab === tab.label && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A3F35] z-10"></div>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-[1px] bg-[#E8DFD3] transition-all"></div>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-12 mt-12">
        <div className="bg-[#FDFCFB] border border-[#E8DFD3] min-h-[800px] relative shadow-sm overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #4A3F35 0.5px, transparent 0.5px)', backgroundSize: '30px 30px'}}></div>
          
          <div className="relative z-10 h-full">
            {activeTab === 'Cut' && <CutChapter />}
            {activeTab === 'Color' && <ColorChapter />}
            {activeTab === 'Clarity' && <ClarityChapter />}
            {activeTab === 'Carat' && <CaratChapter />}
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 mt-24 flex flex-col items-center space-y-6">
        <div className="text-center space-y-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#7D6B5C] font-medium">
            The ORÉA Standard applies to diamonds over 1 carat. For specific requests, please contact us.
          </p>
          <div className="w-12 h-px bg-[#E8DFD3] mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

const StandardSeal = ({ text }: { text: string }) => (
  <div className="pt-12 border-t border-[#E8DFD3] w-full max-w-sm mx-auto">
    <div className="flex flex-col space-y-3 items-center text-center">
      <span className="text-[10px] uppercase tracking-[0.45em] font-bold text-[#4A3F35]">ORÉA Standard</span>
      <p className="text-sm text-[#7D6B5C] font-light tracking-wide">{text}</p>
    </div>
  </div>
);

const CutChapter = () => (
  <div className="animate-reveal flex flex-col h-full">
    <div className="p-12 lg:p-24 flex flex-col items-center gap-16">
      <div className="w-full max-w-3xl space-y-12 text-center">
        <div className="space-y-6">
          <h3 className="text-4xl md:text-6xl font-serif text-[#4A3F35] leading-tight">The Architecture of Light</h3>
          <div className="space-y-8 max-w-lg mx-auto">
            <p className={BODY_TEXT_CLASS}>
              Cut determines how brightly a diamond sparkles. It has the greatest impact on brilliance and fire.
            </p>
          </div>
        </div>
        <StandardSeal text="Exclusively excellent/ideal cut grades" />
      </div>

      <div className="w-full max-w-6xl space-y-2">
        <div className="w-full border-b-[2px] border-[#4A3F35] flex">
          {['EXCELLENT', 'VERY GOOD', 'GOOD', 'FAIR', 'POOR'].map((label, idx) => (
            <div key={idx} className="flex-1 border-x border-[#E8DFD3] py-6 text-center">
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#4A3F35]">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8DFD3] mt-12">
          {[
            { 
              label: 'Ideal Cut', 
              type: 'ideal', 
              note: 'Optimal light performance',
              path: "M60 10 V84 H100 V10"
            },
            { 
              label: 'Shallow Cut', 
              type: 'shallow', 
              note: 'Poor light performance',
              path: "M60 10 V67 L75 95"
            },
            { 
              label: 'Deep Cut', 
              type: 'deep', 
              note: 'Poor light performance',
              path: "M65 10 V98 L115 125"
            }
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center space-y-8 bg-white p-12 group transition-colors duration-700">
              <div className="relative w-full aspect-square flex items-center justify-center">
                 <svg viewBox="0 0 160 160" className="w-full h-full fill-none">
                  <defs>
                    <marker id="arrowhead-cut-new" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 Z" fill="#C5B8A0" />
                    </marker>
                  </defs>
                  
                  <g stroke="#4A3F35" strokeWidth="0.8">
                    {item.type === 'ideal' && (
                      <g>
                        <path d="M30 45 L130 45 L115 25 L45 25 Z" />
                        <path d="M45 25 L55 45 M68 25 L80 45 M92 25 L80 45 M115 25 L105 45" opacity="0.4" />
                        <path d="M30 45 L80 110 L130 45" />
                        <path d="M30 45 L55 77 L80 110 L105 77 L130 45" opacity="0.3" />
                        <path d="M55 45 L80 110 L105 45" opacity="0.3" />
                        <path d="M80 45 L80 110" opacity="0.3" />
                      </g>
                    )}
                    {item.type === 'shallow' && (
                      <g>
                        <path d="M25 45 L135 45 L120 35 L40 35 Z" />
                        <path d="M25 45 L80 80 L135 45" />
                        <path d="M25 45 L52 62 L80 80 L108 62 L135 45" opacity="0.3" />
                        <path d="M52 45 L80 80 L108 45" opacity="0.3" />
                      </g>
                    )}
                    {item.type === 'deep' && (
                      <g>
                        <path d="M40 45 L120 45 L110 30 L50 30 Z" />
                        <path d="M40 45 L80 130 L120 45" />
                        <path d="M40 45 L60 87 L80 130 L100 87 L120 45" opacity="0.3" />
                        <path d="M60 45 L80 130 L100 45" opacity="0.3" />
                      </g>
                    )}
                  </g>

                  <g stroke="#C5B8A0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.path} markerEnd="url(#arrowhead-cut-new)" />
                  </g>
                </svg>
              </div>
              
              <div className="flex flex-col items-center space-y-2 text-center">
                <h4 className="text-[10px] font-bold text-[#4A3F35] tracking-[0.4em] uppercase">{item.label}</h4>
                <p className="text-[10px] text-[#7D6B5C] font-light tracking-wide">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ColorDiamondSVG = ({ tint }: { tint: string }) => (
  <svg viewBox="0 0 100 70" className="w-full h-full stroke-[#4A3F35] stroke-[0.8] fill-none">
    <path d="M15 25 L85 25 L75 10 L25 10 Z" fill={tint} className="transition-colors duration-1000" />
    <path d="M15 25 L50 60 L85 25 Z" fill={tint} className="transition-colors duration-1000" />
    <path d="M25 10 L30 25 L50 10 L70 25 L75 10" className="opacity-20" />
    <path d="M15 25 L50 25 L85 25" className="opacity-10" />
    <path d="M30 25 L50 60 L70 25" className="opacity-20" />
    <path d="M50 10 L50 25" className="opacity-20" />
  </svg>
);

const ColorChapter = () => {
  const colorGroups = [
    { name: "Colorless", grade: "D - F", tint: "#FFFFFF" },
    { name: "Near Colorless", grade: "G - J", tint: "#F7F6F2" },
    { name: "Faint", grade: "K - M", tint: "#EBEAD6" },
    { name: "Very Light", grade: "N - R", tint: "#E1E0B9" },
    { name: "Light", grade: "S - Z", tint: "#D6D59E" }
  ];

  return (
    <div className="animate-reveal flex flex-col h-full">
      <div className="p-12 lg:p-24 flex flex-col items-center gap-20">
        <div className="w-full max-w-3xl space-y-12 text-center">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-6xl font-serif text-[#4A3F35] leading-tight">The Absence of Tint</h3>
            <div className="space-y-8 max-w-lg mx-auto">
              <p className={BODY_TEXT_CLASS}>
                Color refers to how colorless a diamond appears.
              </p>
              <p className={BODY_TEXT_CLASS}>
                The less tint present, the more luminous the stone. The closer a stone is to being colorless, the more light it can reflect as brilliance.
              </p>
            </div>
          </div>
          <StandardSeal text="D-E-F range only - Colorless." />
        </div>

        <div className="w-full max-w-4xl bg-white p-12 border border-[#E8DFD3] shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {colorGroups.map((group, i) => (
              <div key={i} className="flex flex-col items-center space-y-8 group">
                <span className="text-[12px] font-bold tracking-[0.2em] text-[#4A3F35] uppercase">{group.grade}</span>
                <div className="w-full aspect-[4/3] max-w-[100px] transition-transform duration-700 group-hover:scale-110">
                  <ColorDiamondSVG tint={group.tint} />
                </div>
                <div className="text-center">
                  <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#7D6B5C]">{group.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#E8DFD3] via-[#D4C4A8] to-[#E8DFD3]"></div>
        </div>
      </div>
    </div>
  );
};

const ClarityChapter = () => (
  <div className="animate-reveal flex flex-col h-full">
    <div className="p-12 lg:p-24 flex flex-col items-center gap-20">
      <div className="w-full max-w-3xl space-y-12 text-center">
        <div className="space-y-6">
          <h3 className="text-4xl md:text-6xl font-serif text-[#4A3F35] leading-tight">A Flawless Lens</h3>
          <div className="space-y-8 max-w-lg mx-auto">
            <p className={BODY_TEXT_CLASS}>
              Clarity measures the purity of a diamond.
            </p>
            <p className={BODY_TEXT_CLASS}>
              Higher clarity ensures a cleaner, brighter appearance. We prioritize diamonds that look flawless to the naked eye.
            </p>
          </div>
        </div>
        <StandardSeal text="Curated selection of VS grades and above." />
      </div>

      <div className="w-full max-w-5xl space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-5 border border-[#E8DFD3] bg-white">
          {[
            { grade: 'FL - IF', line1: 'FLAWLESS', line2: 'IF', dots: 0 },
            { grade: 'VVS', line1: 'VERY VERY', line2: 'SLIGHTLY', dots: 2 },
            { grade: 'VS', line1: 'VERY', line2: 'SLIGHTLY', dots: 8 },
            { grade: 'SI', line1: 'SLIGHTLY', line2: 'INCLUDED', dots: 20 },
            { grade: 'I', line1: 'INCLUDED', line2: '', dots: 50 }
          ].map((g, i) => (
            <div key={i} className="flex flex-col border-r last:border-r-0 border-[#E8DFD3] group">
              <div className="relative aspect-square flex items-center justify-center p-6 bg-white border-b border-[#F9F6F1] overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#4A3F35] fill-none stroke-[0.8] transition-all duration-700 group-hover:scale-105">
                  <circle cx="50" cy="50" r="48" className="stroke-[#4A3F35]" strokeWidth="0.8" />
                  <path d="M50 20 L68 30 L75 50 L68 70 L50 80 L32 70 L25 50 L32 30 Z" />
                  <line x1="50" y1="2" x2="50" y2="20" />
                  <line x1="75" y1="50" x2="98" y2="50" />
                  <line x1="50" y1="80" x2="50" y2="98" />
                  <line x1="25" y1="50" x2="2" y2="50" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-16 h-16">
                    {Array.from({ length: g.dots }).map((_, idx) => (
                      <div 
                        key={idx} 
                        className="absolute bg-[#4A3F35] rounded-full" 
                        style={{ 
                          width: `${1.2 + Math.random() * 1}px`, 
                          height: `${1.2 + Math.random() * 1}px`, 
                          top: `${30 + (Math.random() * 40)}%`, 
                          left: `${30 + (Math.random() * 40)}%`, 
                          opacity: 0.6 
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="py-6 flex flex-col items-center justify-center bg-white text-center px-2">
                <span className="text-[12px] font-bold tracking-widest text-[#4A3F35] uppercase mb-2">{g.grade}</span>
                <p className="text-[8px] text-[#7D6B5C] font-bold uppercase tracking-[0.4em] leading-tight">{g.line1}</p>
                {g.line2 && <p className="text-[8px] text-[#7D6B5C] font-bold uppercase tracking-[0.4em] leading-tight">{g.line2}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CaratChapter = () => (
  <div className="animate-reveal flex flex-col h-full">
    <div className="p-12 lg:p-24 flex flex-col items-center gap-20">
      <div className="w-full max-w-3xl space-y-12 text-center">
        <div className="space-y-6">
          <h3 className="text-4xl md:text-6xl font-serif text-[#4A3F35] leading-tight">The Measure of Presence</h3>
          <div className="space-y-8 max-w-lg mx-auto">
            <p className={BODY_TEXT_CLASS}>
              Carat is the measure of a diamond’s weight.
            </p>
            <p className={BODY_TEXT_CLASS}>
              True beauty is not only in weight, but in how a diamond is seen. We focus on balance across all 4Cs to maximize visual presence.
            </p>
          </div>
        </div>
        <StandardSeal text="Balanced curation for maximum visual presence." />
      </div>

      <div className="w-full max-w-4xl bg-white border border-[#E8DFD3] p-12 lg:p-16 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 relative z-10">
          {[
            { carat: '1.0CT', baseSize: 52 },
            { carat: '1.5CT', baseSize: 62 },
            { carat: '2.0CT', baseSize: 72 },
            { carat: '2.5CT', baseSize: 82 },
            { carat: '3.0CT', baseSize: 92 }
          ].map((c, i) => (
            <div key={i} className="flex flex-col items-center group flex-1">
              <div className="flex flex-col items-center mb-10 h-32 flex justify-end">
                <div 
                  className="relative transition-all duration-1000 group-hover:scale-110"
                  style={{ width: `${c.baseSize}px`, height: `${c.baseSize}px` }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#4A3F35] stroke-[0.8]">
                    <circle cx="50" cy="50" r="48" />
                    <path d="M50 28 L65.5 34.5 L72 50 L65.5 65.5 L50 72 L34.5 65.5 L28 50 L34.5 34.5 Z" strokeWidth="0.4" className="opacity-40" />
                  </svg>
                </div>
              </div>
              <div className="text-center pt-6 border-t border-[#E8DFD3] w-full">
                <span className="text-[12px] font-bold tracking-[0.4em] text-[#4A3F35] uppercase">{c.carat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);