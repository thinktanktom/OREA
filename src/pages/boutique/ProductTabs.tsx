
import React, { useState } from 'react';

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'details', label: 'Details' },
    { id: 'shipping', label: 'ORDERING' },
    { id: 'warranty', label: 'Our SERVICE' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="space-y-6 animate-in fade-in duration-700">
             <p className="text-[16px] leading-relaxed text-orea-dark/80 font-serif">
              A celebration of modern love and classic architecture. The Emerald focal stone is held in a minimalist cathedral setting, meticulously engineered to allow your wedding band to sit completely flush.
             </p>
          </div>
        );
      case 'details':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 text-[12px] font-sans tracking-wide text-orea-taupe animate-in fade-in duration-700">
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-orea-dark uppercase tracking-[0.3em]">Diamond Shape</p>
              <p>Emerald Cut (IGI Certified)</p>
            </div>
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-orea-dark uppercase tracking-[0.3em]">Band Width</p>
              <p>1.6mm Slender Profile</p>
            </div>
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-orea-dark uppercase tracking-[0.3em]">Metal Choice</p>
              <p>Solid 14k/18k Gold or Platinum</p>
            </div>
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-orea-dark uppercase tracking-[0.3em]">Setting Style</p>
              <p>Low Profile, Flush-Stacking Cathedral</p>
            </div>
          </div>
        );
      case 'shipping':
        return (
          <div className="space-y-4 text-[13px] font-light text-orea-taupe leading-relaxed animate-in fade-in duration-700">
            <p>Our pieces are made to order and typically take between 2–8 weeks to produce, depending on the design.</p>
            <p>We also offer a curated selection available to ship within 7–10 days for time-sensitive proposals. If you are working toward a tight timeline or require your piece by a specific date, please contact us and we'll do our best to accommodate.</p>
            <p>For detailed delivery information, please refer to our <a href="/pages/shipping-delivery" className="text-orea-dark border-b border-orea-champagne pb-0.5">Shipping Information page</a>.</p>
          </div>
        );
      case 'warranty':
        return (
          <div className="space-y-4 text-[13px] font-light text-orea-taupe leading-relaxed animate-in fade-in duration-700">
            <p>ORÉA jewellery is crafted in solid gold or platinum and set with certified, 100% real lab-grown diamonds.</p>
            <p>Engagement rings are covered by a Lifetime Manufacturing Warranty. All other fine jewellery is covered by a 1-Year Manufacturing Warranty, with optional <a href="/pages/concierge" className="underline underline-offset-4 text-orea-dark hover:text-orea-gold transition-colors">ORÉA Concierge Service</a> available for extended care.</p>
            <p>Please check our <a href="/pages/warranty-policy" className="text-orea-dark border-b border-orea-champagne pb-0.5">Warranty Policy</a>.</p>
            <p className="text-[12px] pt-2 text-orea-taupe/70 leading-relaxed font-sans">
              Please note: Normal wear and tear, improper care, third-party repairs, scratches, loss or theft, and discolouration caused by harsh chemicals are not covered. Each ORÉA piece is handcrafted to order; slight variations are a natural part of its character.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="border-t border-orea-linen">
      <div className="flex border-b border-orea-linen/50 overflow-x-auto no-scrollbar lg:overflow-visible">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-6 px-4 md:px-5 text-[9px] font-bold tracking-[0.35em] uppercase transition-all relative whitespace-nowrap outline-none flex-grow lg:flex-grow-0 ${
              activeTab === tab.id ? 'text-orea-dark' : 'text-orea-taupe hover:text-orea-dark/60'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-orea-gold" />}
          </button>
        ))}
      </div>
      <div className="py-12">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs;
