import React, { useState } from 'react';
import { Users, PencilRuler, Diamond, Package, Image as ImageIcon } from 'lucide-react';

interface StepData {
  icon: React.ElementType;
  title: string;
  body: React.ReactNode;
  timeEstimate: string;
}

const steps: StepData[] = [
  {
    icon: Users,
    title: "CONSULTATION",
    timeEstimate: "Approx. 30–60 minutes",
    body: (
      <p>Your journey begins with a one-on-one consultation, either online or in person at our studio. This relaxed session allows us to get to know you and your partner's style, understand your vision, and determine the right path forward.</p>
    )
  },
  {
    icon: PencilRuler,
    title: "DESIGN",
    timeEstimate: "Approx. 1–4 weeks",
    body: (
      <div className="space-y-4">
        <p>This is where ideas take form. We translate your vision into sketches and photorealistic 3D renders, refining proportions and settings with care.</p>
        <p>Design is a collaborative stage. We'll share ideas, invite your feedback, and fine-tune every element until the design feels resolved and considered.</p>
      </div>
    )
  },
  {
    icon: Diamond,
    title: "SELECTION",
    timeEstimate: "Approx. 3–10 days",
    body: (
      <div className="space-y-4">
        <p>Once the design is confirmed, we source a curated selection of lab-grown diamonds that align with your budget and aesthetic preferences.</p>
        <p>You'll be guided through each option with complete transparency regarding cut, colour, clarity, and certification.</p>
      </div>
    )
  },
  {
    icon: Package,
    title: "CRAFT & COMPLETION",
    timeEstimate: "Approx. 2–8 weeks",
    body: (
      <div className="space-y-4">
        <p>Your piece is crafted with precision and attention to longevity. Once completed, your jewellery is carefully finished, inspected, and prepared for collection or secure delivery.</p>
      </div>
    )
  }
];

const BespokePage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative px-6 md:px-12 py-24 md:py-64 text-center overflow-hidden border-b border-[#D4C4A8]/30">
        {/* SHOPIFY HERO IMAGE PLACEHOLDER */}
        <div className="absolute inset-0 z-0 bg-[#E8DFD3]/40 flex items-center justify-center opacity-30">
           <div className="flex flex-col items-center text-[#4A3F35]/30">
              <ImageIcon size={120} strokeWidth={0.5} />
              <span className="text-[10px] uppercase tracking-[0.5em] font-medium mt-4">[ HERO BACKGROUND IMAGE ]</span>
           </div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto">
          <h2 className="text-[#7D6B5C] text-[10px] md:text-[11px] uppercase tracking-[0.45em] mb-8 animate-in fade-in duration-1000 font-medium">Collaborative, Considered, and not rushed</h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-[#4A3F35] mb-10 animate-in slide-in-from-bottom-4 duration-1000 whitespace-nowrap uppercase tracking-[0.05em] font-light">
            Bespoke Jewellery
          </h1>
          <div className="text-[#7D6B5C] text-base md:text-lg font-light tracking-wider max-w-xl mx-auto space-y-3">
            <p>At the heart of every product lies a unique story.</p>
            <p>Each item enhances your everyday life and sparks joy.</p>
          </div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT: PARTIAL VS FULLY BESPOKE */}
      <section className="flex flex-col lg:flex-row min-h-[95vh]">
        
        {/* LEFT COLUMN: Partial Bespoke */}
        <div className="relative flex-1 group overflow-hidden min-h-[650px] border-r border-[#F9F6F1]/20 bg-[#E8DFD3]">
          {/* SHOPIFY IMAGE PLACEHOLDER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#4A3F35]/10">
            <ImageIcon size={64} strokeWidth={0.5} className="mb-4" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium">[ PARTIAL BESPOKE IMAGE ]</span>
          </div>
          
          <div className="absolute inset-0 bg-[#4A3F35]/20 transition-colors duration-700 group-hover:bg-[#4A3F35]/30" />
          
          <div className="relative z-10 h-full p-10 md:p-16 lg:p-28 flex flex-col justify-center text-[#F9F6F1]">
            <h3 className="text-4xl md:text-5xl font-serif mb-12 uppercase tracking-[0.25em] font-light">Partial Bespoke</h3>
            <div className="space-y-6 max-w-lg text-sm md:text-base font-light tracking-wide leading-relaxed">
              <p>Refine an existing ORÉA design.</p>
              <p>Select your stone, metal, and setting within ORÉA's design framework.</p>
              <p className="font-medium pt-4 text-[#C5B8A0] uppercase tracking-widest text-xs">Adjustable Elements</p>
              <ul className="space-y-3 pl-2">
                <li className="flex items-center gap-4 text-sm"><div className="w-1 h-1 rounded-full bg-[#D4C4A8]" /> Diamond size or shape</li>
                <li className="flex items-center gap-4 text-sm"><div className="w-1 h-1 rounded-full bg-[#D4C4A8]" /> Metal type or color</li>
                <li className="flex items-center gap-4 text-sm"><div className="w-1 h-1 rounded-full bg-[#D4C4A8]" /> Band width or finish</li>
              </ul>
              <p className="pt-12 border-t border-[#F9F6F1]/20 text-[10px] uppercase tracking-[0.3em] opacity-90">
                Streamlined process. Shorter timeframes.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Fully Bespoke */}
        <div className="relative flex-1 group overflow-hidden min-h-[650px] bg-[#D4C4A8]">
          {/* SHOPIFY IMAGE PLACEHOLDER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#F9F6F1]/30">
            <ImageIcon size={64} strokeWidth={0.5} className="mb-4" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium">[ FULLY BESPOKE IMAGE ]</span>
          </div>
          
          <div className="absolute inset-0 bg-[#4A3F35]/30 transition-colors duration-700 group-hover:bg-[#4A3F35]/40" />
          
          <div className="relative z-10 h-full p-10 md:p-16 lg:p-28 flex flex-col justify-center text-[#F9F6F1]">
            <h3 className="text-4xl md:text-5xl font-serif mb-12 uppercase tracking-[0.25em] font-light">Fully Bespoke</h3>
            <div className="space-y-6 max-w-lg text-sm md:text-base font-light tracking-wide leading-relaxed">
              <p>Designed entirely from scratch.</p>
              <p>A guided, consultation-led process for creating a one-of-a-kind piece.</p>
              <p className="font-medium pt-4 text-[#E8DFD3] uppercase tracking-widest text-xs">Ideal For</p>
              <ul className="space-y-3 pl-2">
                <li className="flex items-center gap-4 text-sm"><div className="w-1 h-1 rounded-full bg-[#E8DFD3]" /> Engagement or milestone pieces</li>
                <li className="flex items-center gap-4 text-sm"><div className="w-1 h-1 rounded-full bg-[#E8DFD3]" /> Unique or complex designs</li>
                <li className="flex items-center gap-4 text-sm"><div className="w-1 h-1 rounded-full bg-[#E8DFD3]" /> A highly personal creation journey</li>
              </ul>
              <p className="pt-12 border-t border-[#F9F6F1]/20 text-[10px] uppercase tracking-[0.3em] opacity-90">
                Dedicated diamond sourcing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS TIMELINE */}
      <section className="bg-white py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-[#7D6B5C] text-[10px] uppercase tracking-[0.45em] mb-6 font-medium">The Bespoke Process</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-[#4A3F35] uppercase tracking-[0.1em] font-light">How it works</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8DFD3] border border-[#E8DFD3]">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                className={`relative group flex flex-col items-center text-center p-14 md:p-20 transition-all duration-700 bg-white hover:bg-[#F9F6F1] ${activeStep === index ? 'bg-[#F9F6F1]' : ''}`}
              >
                <div className={`mb-12 p-6 rounded-full border border-[#D4C4A8]/40 transition-all duration-700 ${activeStep === index ? 'bg-[#4A3F35] text-[#F9F6F1] border-[#4A3F35]' : 'text-[#4A3F35] bg-transparent'}`}>
                  <step.icon size={22} strokeWidth={1} />
                </div>
                <h4 className={`text-[10px] uppercase tracking-[0.4em] font-bold text-[#4A3F35] mb-6 transition-colors ${activeStep === index ? 'text-[#7D6B5C]' : ''}`}>
                  {step.title}
                </h4>
                <div className={`w-8 h-px bg-[#D4C4A8] mb-6 transition-all duration-700 ${activeStep === index ? 'w-16' : 'group-hover:w-16'}`} />
                <span className="text-[9px] uppercase tracking-[0.45em] text-[#9B8877] opacity-60 font-medium">
                  {activeStep === index ? 'Close' : 'Details'}
                </span>
                
                {activeStep === index && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#F9F6F1] rotate-45 border-r border-b border-[#E8DFD3] z-10" />
                )}
              </button>
            ))}
          </div>

          <div className={`mt-20 overflow-hidden transition-all duration-700 ease-in-out ${activeStep !== null ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-[#F9F6F1] p-10 md:p-20 border border-[#E8DFD3]">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
                <div className="flex-1 space-y-8 text-[#4A3F35] leading-relaxed text-base font-light tracking-wide">
                  {activeStep !== null && (
                    <div className="prose prose-stone font-sans">
                      {steps[activeStep].body}
                    </div>
                  )}
                </div>
                <div className="md:w-72 pt-4 border-t md:border-t-0 md:border-l border-[#D4C4A8]/40 md:pl-16">
                  <span className="text-[9px] uppercase tracking-[0.45em] font-bold text-[#7D6B5C] block mb-4 opacity-80">Timeline</span>
                  <p className="text-xs uppercase tracking-widest text-[#4A3F35] font-medium leading-loose">
                    {activeStep !== null && steps[activeStep].timeEstimate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="py-40 px-6 md:px-12 bg-[#F9F6F1] text-center border-t border-[#D4C4A8]/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-serif text-[#4A3F35] mb-10 uppercase tracking-[0.15em] font-light leading-tight">
            The Journey Begins <br className="hidden md:block"/> With A Conversation
          </h3>
          <p className="text-[#7D6B5C] mb-16 font-light text-lg leading-relaxed max-w-2xl mx-auto tracking-wide">
            Whether you arrive with a fully formed vision or just the earliest spark of an idea, we are here to guide you through the art of creation with care and expertise.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="group relative px-16 py-7 bg-[#4A3F35] text-[#F9F6F1] text-[10px] md:text-[11px] uppercase tracking-[0.45em] font-bold hover:bg-[#7D6B5C] transition-all duration-500 shadow-sm"
            >
              <span className="relative z-10">Book a consultation</span>
              <div className="absolute inset-0 bg-[#C5B8A0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BespokePage;
