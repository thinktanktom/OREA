import React from 'react';
import { Droplet, Sun, Sparkles, ShieldCheck, RefreshCcw } from 'lucide-react';

const CareGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F1] selection:bg-[#E8DFD3]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-12 text-center border-b border-[#E8DFD3]/40">
        <div className="max-w-5xl mx-auto">
          <h1 className="serif-heading text-4xl md:text-6xl font-light tracking-[0.05em] mb-8 animate-fade-in text-[#4A3F35]">
            Jewellery Care Guide
          </h1>
          <div className="w-16 h-[1px] bg-[#C5B8A0] mx-auto mb-12"></div>
          <p className="text-[#7D6B5C] text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Your ORÉA pieces are crafted to last a lifetime. With proper care and maintenance, they will continue to shine brilliantly for generations to come.
          </p>
        </div>
      </section>

      {/* Daily Care Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.45em] text-[#7D6B5C] mb-4 font-bold">Everyday Protection</h2>
            <h3 className="serif-heading text-3xl md:text-4xl text-[#4A3F35] font-light">Daily Care</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 border border-[#E8DFD3]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-[#F9F6F1] border border-[#E8DFD3]">
                  <ShieldCheck size={24} className="text-[#4A3F35]" strokeWidth={1.2} />
                </div>
                <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-[#4A3F35]">What to Avoid</h4>
              </div>
              <ul className="space-y-4 text-[#7D6B5C] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                  <span>Remove jewellery before swimming, bathing, or exposure to chlorine and saltwater</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                  <span>Avoid contact with harsh chemicals, perfumes, hairsprays, and cleaning products</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                  <span>Take off your jewellery during physical activities and exercise</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                  <span>Store pieces separately to prevent scratching</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-[#E8DFD3]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-[#F9F6F1] border border-[#E8DFD3]">
                  <Sparkles size={24} className="text-[#4A3F35]" strokeWidth={1.2} />
                </div>
                <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-[#4A3F35]">Best Practices</h4>
              </div>
              <ul className="space-y-4 text-[#7D6B5C] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                  <span>Put your jewellery on last when getting ready (after makeup and perfume)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                  <span>Remove jewellery first when you get home</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                  <span>Store in individual soft pouches or lined jewellery boxes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                  <span>Keep pieces away from direct sunlight and extreme temperatures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Section */}
      <section className="py-24 px-6 lg:px-12 bg-white border-y border-[#E8DFD3]/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.45em] text-[#7D6B5C] mb-4 font-bold">Keep Your Pieces Sparkling</h2>
            <h3 className="serif-heading text-3xl md:text-4xl text-[#4A3F35] font-light">At-Home Cleaning</h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-[#F9F6F1] border border-[#E8DFD3]">
                  <Droplet size={24} className="text-[#4A3F35]" strokeWidth={1.2} />
                </div>
                <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-[#4A3F35]">Gentle Cleaning Method</h4>
              </div>
              <div className="pl-16 space-y-4 text-[#7D6B5C] text-sm leading-relaxed">
                <p>
                  Mix a few drops of mild, phosphate-free dish soap with warm (not hot) water in a bowl.
                </p>
                <p>
                  Soak your jewellery for 10-15 minutes, then gently brush with a soft-bristled brush (like a baby toothbrush) to remove dirt and oils.
                </p>
                <p>
                  Rinse thoroughly under warm running water (ensure the drain is closed or use a strainer).
                </p>
                <p>
                  Pat dry with a soft, lint-free cloth and allow to air dry completely before storing.
                </p>
              </div>
            </div>

            <div className="border-t border-[#E8DFD3] pt-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-[#F9F6F1] border border-[#E8DFD3]">
                  <RefreshCcw size={24} className="text-[#4A3F35]" strokeWidth={1.2} />
                </div>
                <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-[#4A3F35]">Frequency</h4>
              </div>
              <div className="pl-16 space-y-4 text-[#7D6B5C] text-sm leading-relaxed">
                <p>
                  <span className="font-medium text-[#4A3F35]">Daily wear pieces:</span> Clean every 2-4 weeks
                </p>
                <p>
                  <span className="font-medium text-[#4A3F35]">Occasional wear:</span> Clean before and after wearing
                </p>
                <p>
                  <span className="font-medium text-[#4A3F35]">Rings:</span> Clean more frequently due to regular contact with lotions and oils
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Maintenance */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.45em] text-[#7D6B5C] mb-4 font-bold">Expert Attention</h2>
            <h3 className="serif-heading text-3xl md:text-4xl text-[#4A3F35] font-light">Professional Maintenance</h3>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-10 md:p-12 border border-[#E8DFD3]">
            <p className="text-[#7D6B5C] text-sm leading-relaxed mb-8">
              We recommend having your jewellery professionally inspected and cleaned at least once per year. This allows our team to:
            </p>
            <ul className="space-y-4 text-[#7D6B5C] text-sm leading-relaxed mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                <span>Check prong settings and ensure stones are secure</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                <span>Professionally polish and restore shine</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                <span>Address any wear or damage before it becomes serious</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-[#C5B8A0] mt-2 flex-shrink-0"></div>
                <span>Provide deep ultrasonic cleaning for optimal brilliance</span>
              </li>
            </ul>
            <div className="pt-8 border-t border-[#E8DFD3]">
              <p className="text-[#4A3F35] text-sm font-medium mb-4 uppercase tracking-[0.2em]">ORÉA Concierge Service</p>
              <p className="text-[#7D6B5C] text-sm leading-relaxed mb-6">
                Consider our Concierge Service for comprehensive care including professional polishing, repairs, and stone resetting with covered shipping for up to three years.
              </p>
              <a 
                href="/concierge" 
                className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-[#4A3F35] hover:text-[#C5B8A0] transition-colors border-b border-[#4A3F35] hover:border-[#C5B8A0] pb-1"
              >
                Learn More About Concierge Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 lg:px-12 bg-[#F9F6F1] border-t border-[#E8DFD3]/40">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="serif-heading text-2xl md:text-3xl text-[#4A3F35] mb-6 font-light">Have Questions About Care?</h3>
          <p className="text-[#7D6B5C] text-sm leading-relaxed mb-8">
            Our team is here to help you care for your ORÉA pieces. Contact us with any questions or to arrange professional servicing.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-12 py-4 bg-[#4A3F35] text-[#F9F6F1] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#7D6B5C] transition-all duration-500"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareGuidePage;
