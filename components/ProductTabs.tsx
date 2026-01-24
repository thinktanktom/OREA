
import React, { useState } from 'react';

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'details', label: 'Product Details' },
    { id: 'shipping', label: 'Shipping & Timing' },
    { id: 'warranty', label: 'Warranty & Service' },
  ];

  const handleConciergeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const event = new CustomEvent('orea-open-concierge', { 
      detail: { message: "I'm interested in learning more about the ORÉA Concierge Service for extended care. Could you provide some details?" } 
    });
    window.dispatchEvent(event);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <p className="text-[14px] leading-relaxed text-stone-600 font-light italic serif max-w-2xl">
            A tailored description specific to each design, highlighting form, inspiration, setting style, and how the diamond is showcased. The Emerald focal stone is celebrated for its clarity and understated elegance, held in a setting meticulously crafted to allow a wedding band to sit completely flush.
          </p>
        );
      case 'details':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-[13px] font-light">
              <div className="space-y-1">
                <p className="font-bold text-black uppercase tracking-widest text-[9px]">Diamond Shape</p>
                <p>Emerald Cut</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-black uppercase tracking-widest text-[9px]">Setting</p>
                <p>Minimalist Solitaire, Flush-Stacking Ready</p>
              </div>
            </div>
            <div className="pt-8 border-t border-stone-100 text-center">
              <p className="text-[11px] text-stone-400 italic serif max-w-xs mx-auto">
                Prices reflect current gold market conditions and may adjust over time.
              </p>
            </div>
          </div>
        );
      case 'shipping':
        return (
          <div className="space-y-6 text-[13px] font-light text-stone-600 leading-relaxed max-w-2xl">
            <p>
              Our pieces are made to order and typically take between 2-8 weeks to produce, depending on the design.
            </p>
            <p>
              We also offer a curated selection available to ship within 7-10 days for time-sensitive proposals. If you are working toward a tight timeline or require your piece by a specific date, please contact us and we’ll do our best to accommodate.
            </p>
            <p className="pt-2">
              For detailed delivery information, please refer to our Shipping Information page <a href="https://www.orea.co.nz/pages/shipping-delivery" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black transition-colors font-medium">here</a>.
            </p>
          </div>
        );
      case 'warranty':
        return (
          <div className="space-y-6 text-[13px] font-light text-stone-600 leading-relaxed max-w-2xl">
            <p>
              ORÉA jewellery is crafted in solid gold or platinum and set with certified, 100% real lab-grown diamonds.
            </p>
            <p>
              Engagement rings are covered by a Lifetime Manufacturing Warranty. All other fine jewellery is covered by a 1-Year Manufacturing Warranty, with optional <a href="#" onClick={handleConciergeClick} className="underline underline-offset-4 text-black font-semibold hover:text-stone-500 transition-colors">ORÉA Concierge Service</a> available for extended care.
            </p>
            <p>
              Please check our Warranty Policy <a href="https://www.orea.co.nz/pages/warranty-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black transition-colors font-medium">here</a>.
            </p>
            <div className="pt-6 border-t border-stone-100">
              <p className="text-[11px] text-stone-400 italic leading-relaxed">
                Please note: Normal wear and tear, improper care, third-party repairs, scratches, loss or theft, and discolouration caused by harsh chemicals are not covered. Each ORÉA piece is handcrafted to order; slight variations are a natural part of its character.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="border-t border-stone-100">
      <div className="flex border-b border-stone-100 overflow-x-auto no-scrollbar scroll-smooth">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-6 px-5 text-[9px] font-bold tracking-[0.2em] uppercase transition-all relative whitespace-nowrap outline-none ${
              activeTab === tab.id ? 'text-black' : 'text-stone-300 hover:text-stone-400'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black" />}
          </button>
        ))}
      </div>
      <div className="py-12 min-h-[260px] animate-in fade-in duration-500 px-1 md:px-0">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs;
