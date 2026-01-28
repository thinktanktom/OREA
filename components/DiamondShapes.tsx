import React, { useState, useRef } from 'react';

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
  const strokeColor = "currentColor";
  const strokeWidth = "0.75";

  const renderPath = () => {
    switch (name) {
      case "Round":
        return (
          <g>
            <circle cx="50" cy="50" r="35" />
            <path d="M50 15 L74 30 L50 85 L26 30 Z" />
            <path d="M26 30 L74 30" />
            <path d="M35 21 L65 21" />
          </g>
        );
      case "Oval":
        return (
          <g>
            <ellipse cx="50" cy="50" rx="28" ry="40" />
            <path d="M50 10 L78 35 L50 90 L22 35 Z" />
            <path d="M22 35 L78 35" />
          </g>
        );
      case "Cushion":
        return (
          <g>
            <rect x="20" y="20" width="60" height="60" rx="15" />
            <path d="M30 20 L70 20 L80 30 L80 70 L70 80 L30 80 L20 70 L20 30 Z" />
            <path d="M20 30 L80 30 M20 70 L80 70 M30 20 L30 80 M70 20 L70 80" opacity="0.3" />
          </g>
        );
      case "Pear":
        return (
          <g>
            <path d="M50 10 C50 10 20 45 20 65 C20 81 33 90 50 90 C67 90 80 81 80 65 C80 45 50 10 50 10 Z" />
            <path d="M50 10 L80 65 L50 90 L20 65 Z" opacity="0.5" />
          </g>
        );
      case "Princess":
        return (
          <g>
            <rect x="22" y="22" width="56" height="56" />
            <path d="M22 22 L78 78 M22 78 L78 22" />
            <path d="M50 22 L50 78 M22 50 L78 50" opacity="0.3" />
          </g>
        );
      case "Emerald":
        return (
          <g>
            <path d="M30 15 L70 15 L80 25 L80 75 L70 85 L30 85 L20 75 L20 25 Z" />
            <path d="M35 25 L65 25 L70 30 L70 70 L65 75 L35 75 L30 70 L30 30 Z" opacity="0.5" />
            <path d="M20 25 L30 30 M80 25 L70 30 M20 75 L30 70 M80 75 L70 70" />
          </g>
        );
      case "Marquise":
        return (
          <g>
            <path d="M50 5 C50 5 20 35 20 50 C20 65 50 95 50 95 C50 95 80 65 80 50 C80 35 50 5 50 5 Z" />
            <path d="M50 5 L80 50 L50 95 L20 50 Z" opacity="0.5" />
            <path d="M20 50 L80 50" />
          </g>
        );
      case "Asscher":
        return (
          <g>
            <path d="M35 15 L65 15 L85 35 L85 65 L65 85 L35 85 L15 65 L15 35 Z" />
            <path d="M40 30 L60 30 L70 40 L70 60 L60 70 L40 70 L30 60 L30 40 Z" opacity="0.5" />
            <path d="M15 35 L30 40 M85 35 L70 40 M15 65 L30 60 M85 65 L70 60" />
          </g>
        );
      case "Radiant":
        return (
          <g>
            <path d="M30 15 L70 15 L80 25 L80 75 L70 85 L30 85 L20 75 L20 25 Z" />
            <path d="M20 25 L80 75 M20 75 L80 25" opacity="0.3" />
            <path d="M50 15 L50 85 M20 50 L80 50" opacity="0.3" />
          </g>
        );
      case "Heart":
        return (
          <g>
            <path d="M50 30 C50 15 20 15 20 45 C20 70 50 90 50 90 C50 90 80 70 80 45 C80 15 50 15 50 30 Z" />
            <path d="M50 30 L80 45 L50 90 L20 45 Z" opacity="0.5" />
          </g>
        );
      default:
        return <circle cx="50" cy="50" r="35" />;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}>
        {renderPath()}
      </svg>
    </div>
  );
};

export const DiamondShapes: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center mb-20 text-center space-y-8 px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">Diamond Shapes</h2>
        <p className="text-stone-500 font-light text-lg max-w-xl leading-relaxed">
          Each silhouette offers a unique presence. <br className="hidden md:block" />
          Select a shape to explore its character and brilliance.
        </p>
      </div>

      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 gap-px bg-stone-100 border-y border-stone-100"
        >
          {shapes.map((s, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[70vw] md:w-[35vw] lg:w-[20vw] snap-start bg-white transition-all duration-700 cursor-pointer overflow-hidden hover:bg-[#FBFBFA]"
              onClick={() => handleSelect(i)}
            >
              <div className="aspect-[4/5] relative flex flex-col items-center justify-center p-6 bg-white transition-colors duration-500 overflow-hidden">
                {s.image ? (
                  <img src={s.image} alt={s.name} className="w-full h-full object-contain grayscale opacity-60 hover:opacity-100 transition-all duration-[1500ms] hover:scale-110" />
                ) : (
                  <ShapeIcon name={s.name} />
                )}
                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center space-y-1 z-20">
                  <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-stone-900">{s.name}</h3>
                  <div className="w-0 h-[1px] bg-stone-900 transition-all duration-700 group-hover:w-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12 space-y-6 px-6">
        <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-medium">
          Above are the standard shapes that we typically work with.
        </p>
        <p className="text-stone-500 font-light text-base max-w-lg mx-auto leading-relaxed">
          There is no right or wrong - only the shape that reflects your vision.
        </p>
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 animate-fade-in">
          <div className="absolute inset-0 bg-stone-950/20 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-lg border border-stone-100 shadow-2xl overflow-hidden animate-reveal">
            <button onClick={closeModal} className="absolute top-6 right-6 text-stone-300 hover:text-stone-900 transition-colors z-20" aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 1L13 13M1 13L13 1" />
              </svg>
            </button>
            <div className="p-10 sm:p-16 flex flex-col items-center text-center space-y-10">
              <div className="space-y-4 relative z-10">
                <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-stone-300">Shape Character</span>
                <h4 className="text-3xl font-serif text-stone-900">{shapes[selectedIndex].name}</h4>
              </div>
              <div className="space-y-6 relative z-10">
                <p className="text-stone-600 font-light text-base leading-relaxed">{shapes[selectedIndex].description}</p>
                <div className="pt-8 border-t border-stone-100 w-full">
                  <div className="space-y-2">
                    <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-stone-400">Technical Standards</span>
                    <p className="text-[11px] text-stone-900 font-medium tracking-[0.2em] uppercase">{shapes[selectedIndex].technicalNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-48 md:mt-64 flex flex-col items-center space-y-12">
        <div className="w-px h-16 bg-stone-100"></div>
        <div className="text-center px-6">
          <div className="pt-8">
            <button className="px-12 py-5 border border-stone-900 text-stone-900 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-stone-900 hover:text-white transition-all duration-700">
              For bespoke guidance, we’re always here.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};