
import React, { useState } from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex flex-col items-center justify-center p-6 bg-transparent border border-stone-100 hover:bg-stone-50 transition-all space-y-3 group text-center aspect-square"
      >
        <span className="text-stone-400 group-hover:text-black transition-colors">{icon}</span>
        <span className="text-[9px] font-bold uppercase tracking-widest text-stone-900 leading-tight">{title}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-xl p-10 md:p-16 rounded-sm relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-stone-400 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="mb-10 flex justify-center text-stone-800 scale-150">{icon}</div>
            <h4 className="text-2xl md:text-3xl font-light mb-8 text-center serif italic tracking-tight uppercase">{title}</h4>
            <div className="text-[14px] text-stone-600 font-light leading-relaxed text-center space-y-6">
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ValueProps: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-8">
      <InfoCard 
        title="Precious Metal" 
        icon={
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2v20M2 12h20" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="12" cy="12" r="9" strokeWidth="0.8" />
            <circle cx="12" cy="12" r="4" strokeWidth="0.8" />
          </svg>
        }
        content={
          <div className="space-y-4">
            <p>At ORÉA, our pieces are made to last a lifetime - not to be discarded.</p>
            <p>We use only solid 14k or 18k gold and platinum, never plated, filled, or vermeil. Precious metals are inherently durable, repairable, and timeless - the ultimate expression of lasting value.</p>
          </div>
        }
      />
      <InfoCard 
        title="Premium Diamond" 
        icon={
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L4.5 9L12 22L19.5 9L12 2Z" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.5 9H19.5" strokeWidth="0.8" />
            <path d="M8 9L12 2L16 9" strokeWidth="0.8" />
          </svg>
        }
        content={
          <div className="space-y-6 text-left">
            <p>ORÉA works exclusively with certified lab-grown diamonds, selected for exceptional brilliance, integrity, and traceable quality.</p>
            <p>All centre stones in our engagement rings, as well as any diamond of 1 carat and above, meet the following minimum standards:</p>
            <ul className="space-y-2 border-l border-stone-100 pl-6 text-[13px]">
              <li><strong>Cut:</strong> Excellent / Ideal</li>
              <li><strong>Clarity:</strong> VS and above</li>
              <li><strong>Colour:</strong> D–F</li>
            </ul>
            <p className="text-stone-400 italic text-[12px]">All diamonds over 1 carat are independently graded by the IGI, the global authority for lab-grown diamond certification.</p>
          </div>
        }
      />
      <InfoCard 
        title="Free Shipping" 
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        }
        content={
          <div className="space-y-4">
            <p>Free fully insured shipping on all New Zealand orders.</p>
            <p>Orders are dispatched securely with signature required on delivery. Alternatively, you may collect your piece in person from our Christchurch studio.</p>
            <p>For full details, view our Shipping & Delivery information <a href="https://www.orea.co.nz/pages/shipping-delivery" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black transition-colors font-medium">here</a>.</p>
          </div>
        }
      />
      <InfoCard 
        title="sustainable practices" 
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.952 11.952 0 0112 13.5a11.952 11.952 0 01-8.716 1.247M3.284 14.253A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253" />
          </svg>
        }
        content={
          <div className="text-left space-y-8">
            <div>
              <p className="font-bold text-black text-[11px] uppercase tracking-widest mb-2">Longevity</p>
              <p>We use the highest-quality materials to ensure your jewellery can be worn, loved, and passed on for years to come.</p>
            </div>
            <div>
              <p className="font-bold text-black text-[11px] uppercase tracking-widest mb-2">Lab-Grown Diamonds</p>
              <p>Physically, chemically, and visually identical to mined diamonds. This modern approach reduces environmental impact while creating enduring beauty.</p>
            </div>
            <div>
              <p className="font-bold text-black text-[11px] uppercase tracking-widest mb-2">Carbon Offset Commitment</p>
              <p>ORÉA plants one tree for every purchase through Trees for Survival, contributing to long-term restoration beyond each piece we create.</p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ValueProps;
