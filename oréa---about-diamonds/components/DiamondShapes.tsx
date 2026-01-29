import React, { useState, useRef, useEffect } from 'react';

interface ShapeProps {
  name: string;
  description: string;
  image: string;
  technicalNote: string;
}

const shapes: ShapeProps[] = [
  { 
    name: "Round", 
    description: "The timeless classic. Known for maximum brilliance and enduring elegance. The round brilliant cut is engineered for total internal reflection.", 
    technicalNote: "58 Facets • Ideal Brilliance",
    image: "" 
  },
  { 
    name: "Oval", 
    description: "Softly elongated and luminous. A refined shape that flatters the hand with graceful sparkle, offering a larger surface area than rounds.", 
    technicalNote: "Elongated Brilliance • 57 Facets",
    image: "" 
  },
  { 
    name: "Pear", 
    description: "A distinctive teardrop silhouette. Romantic, modern, and beautifully expressive. It combines the brilliance of a round with the length of a marquise.", 
    technicalNote: "Tapered Symmetry • Teardrop Cut",
    image: "" 
  },
  { 
    name: "Marquise", 
    description: "An elongated form with dramatic presence. Designed to appear larger and lengthen the finger, featuring a unique boat-shaped profile.", 
    technicalNote: "Maximum Spread • Pointed Crown",
    image: "" 
  },
  { 
    name: "Princess", 
    description: "Clean, modern brilliance in a square shape. Bold lines with a contemporary edge, known for its sharp corners and geometric fire.", 
    technicalNote: "Pyramidal Base • Square Profile",
    image: "" 
  },
  { 
    name: "Emerald", 
    description: "Step-cut and architectural. Celebrated for its clarity, depth, and quiet sophistication, creating a hall-of-mirrors effect.", 
    technicalNote: "Step Cut • Parallel Facets",
    image: "" 
  },
  { 
    name: "Radiant", 
    description: "Brilliant and dynamic. A perfect balance of sharp structure and vibrant fire, featuring cropped corners and a crushed-ice look.", 
    technicalNote: "Hybrid Cut • Cropped Corners",
    image: "" 
  },
  { 
    name: "Asscher", 
    description: "Geometric and vintage-inspired. Known for its square step-cut and timeless symmetry, reminiscent of Art Deco architecture.", 
    technicalNote: "Square Step Cut • High Crown",
    image: "" 
  },
  { 
    name: "Cushion", 
    description: "Soft corners with a classic glow. A romantic shape blending tradition and brilliance, often referred to as a pillow cut.", 
    technicalNote: "Rounded Square • Antique Appeal",
    image: "" 
  },
  { 
    name: "Heart", 
    description: "A rare symbol of devotion. Playful, sentimental, and unmistakably personal, requiring expert craftsmanship for perfect symmetry.", 
    technicalNote: "Symmetrical Cleft • Brilliant Facets",
    image: "" 
  }
];

const ShapeIcon = ({ name }: { name: string }) => {
  const strokeWidth = "0.75";
  return (
    <div className="w-full h-full flex items-center justify-center opacity-20 group-hover/item:opacity-40 transition-opacity duration-700">
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
        {name === "Round" && (
          <g>
            <circle cx="50" cy="50" r="35" />
            <path d="M50 15 L74 30 L50 85 L26 30 Z" />
            <path d="M26 30 L74 30" />
          </g>
        )}
        {name === "Oval" && (
          <g>
            <ellipse cx="50" cy="50" rx="28" ry="40" />
            <path d="M50 10 L78 35 L50 90 L22 35 Z" />
            <path d="M22 35 L78 35" />
          </g>
        )}
        {name === "Cushion" && (
          <g>
            <rect x="20" y="20" width="60" height="60" rx="15" />
            <path d="M30 20 L70 20 L80 30 L80 70 L70 80 L30 80 L20 70 L20 30 Z" />
          </g>
        )}
        {name === "Pear" && (
          <g>
            <path d="M50 10 C50 10 20 45 20 65 C20 81 33 90 50 90 C67 90 80 81 80 65 C80 45 50 10 50 10 Z" />
            <path d="M50 10 L80 65 L50 90 L20 65 Z" opacity="0.5" />
          </g>
        )}
        {name === "Princess" && (
          <g>
            <rect x="22" y="22" width="56" height="56" />
            <path d="M22 22 L78 78 M22 78 L78 22" />
          </g>
        )}
        {name === "Emerald" && (
          <g>
            <path d="M30 15 L70 15 L80 25 L80 75 L70 85 L30 85 L20 75 L20 25 Z" />
            <path d="M35 25 L65 25 L70 30 L70 70 L65 75 L35 75 L30 70 L30 30 Z" opacity="0.5" />
          </g>
        )}
        {name === "Marquise" && (
          <g>
            <path d="M50 5 C50 5 20 35 20 50 C20 65 50 95 50 95 C50 95 80 65 80 50 C80 35 50 5 50 5 Z" />
            <path d="M50 5 L80 50 L50 95 L20 50 Z" opacity="0.5" />
          </g>
        )}
        {name === "Asscher" && (
          <g>
            <path d="M35 15 L65 15 L85 35 L85 65 L65 85 L35 85 L15 65 L15 35 Z" />
            <path d="M40 30 L60 30 L70 40 L70 60 L60 70 L40 70 L30 60 L30 40 Z" opacity="0.5" />
          </g>
        )}
        {name === "Radiant" && (
          <g>
            <path d="M30 15 L70 15 L80 25 L80 75 L70 85 L30 85 L20 75 L20 25 Z" />
            <path d="M20 25 L80 75 M20 75 L80 25" opacity="0.3" />
          </g>
        )}
        {name === "Heart" && (
          <g>
            <path d="M50 30 C50 15 20 15 20 45 C20 70 50 90 50 90 C50 90 80 70 80 45 C80 15 50 15 50 30 Z" />
            <path d="M50 30 L80 45 L50 90 L20 45 Z" opacity="0.5" />
          </g>
        )}
      </svg>
    </div>
  );
};

export const DiamondShapes: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.4 
        : scrollLeft + clientWidth * 0.4;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const closeModal = () => setSelectedIndex(null);

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center mb-20 text-center space-y-8 px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-[#4A3F35] leading-tight">Diamond Shapes</h2>
        <p className="text-[#7D6B5C] font-light text-lg max-w-xl leading-relaxed">
          Each silhouette offers a unique presence. Select a shape to explore its character and brilliance.
        </p>
      </div>

      <div className="relative group px-4 md:px-0">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm border border-[#E8DFD3] text-[#4A3F35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex hover:bg-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm border border-[#E8DFD3] text-[#4A3F35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex hover:bg-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 gap-px bg-[#E8DFD3] border-y border-[#E8DFD3]"
        >
          {shapes.map((s, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[70vw] md:w-[35vw] lg:w-[20vw] snap-start bg-white transition-all duration-700 cursor-pointer overflow-hidden hover:bg-[#F9F6F1] group/item"
              onClick={() => setSelectedIndex(i)}
            >
              <div className="aspect-[4/5] relative flex flex-col items-center justify-center p-6 bg-white transition-colors duration-500 overflow-hidden">
                {s.image ? (
                  <img src={s.image} alt={s.name} className="w-full h-full object-contain grayscale opacity-60 group-hover/item:opacity-100 transition-all duration-[1500ms] group-hover/item:scale-110" />
                ) : (
                  <ShapeIcon name={s.name} />
                )}
                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center space-y-1 z-20">
                  <h3 className="text-[10px] uppercase tracking-[0.45em] font-bold text-[#4A3F35]">{s.name}</h3>
                  <div className="w-0 h-[1px] bg-[#4A3F35] transition-all duration-700 group-hover/item:w-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 transition-all duration-500">
          <div 
            className="absolute inset-0 bg-[#4A3F35]/40 backdrop-blur-md transition-opacity duration-500" 
            onClick={closeModal}
          ></div>
          
          <div className="relative bg-[#F9F6F1] w-full max-w-xl border border-[#E8DFD3] shadow-2xl overflow-hidden animate-reveal">
            <button 
              onClick={closeModal} 
              className="absolute top-6 right-6 text-[#D4C4A8] hover:text-[#4A3F35] transition-colors z-20"
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M1 1L13 13M1 13L13 1" />
              </svg>
            </button>
            
            <div className="p-10 sm:p-16 flex flex-col items-center text-center space-y-10">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.45em] font-bold text-[#7D6B5C]">Shape Character</span>
                <h4 className="text-4xl md:text-5xl font-serif text-[#4A3F35] tracking-tight">{shapes[selectedIndex].name}</h4>
              </div>
              
              <div className="space-y-8">
                <p className="text-[#7D6B5C] font-light text-lg leading-relaxed max-w-md mx-auto">
                  {shapes[selectedIndex].description}
                </p>
                
                <div className="pt-10 border-t border-[#E8DFD3] w-full">
                  <div className="space-y-3">
                    <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-[#7D6B5C]">Technical Standards</span>
                    <p className="text-xs text-[#4A3F35] font-bold tracking-[0.2em] uppercase">
                      {shapes[selectedIndex].technicalNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={closeModal}
                  className="text-[10px] uppercase tracking-[0.45em] font-bold text-[#4A3F35] border-b border-[#4A3F35] pb-1 hover:text-[#7D6B5C] hover:border-[#7D6B5C] transition-all"
                >
                  Return to gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-32 border-t border-[#E8DFD3] pt-24 text-center px-6">
        <button className="px-12 py-5 border border-[#4A3F35] text-[#4A3F35] text-[10px] uppercase tracking-[0.45em] font-bold hover:bg-[#4A3F35] hover:text-white transition-all duration-700">
          Enquire about a bespoke shape
        </button>
      </div>
    </section>
  );
};