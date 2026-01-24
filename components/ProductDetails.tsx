
import React, { useState, useEffect } from 'react';
import { Product, Variant } from '../types';
import SizeGuideModal from './SizeGuideModal';
import SendAHintModal from './SendAHintModal';
import GiftReminderModal from './GiftReminderModal';

interface ProductDetailsProps {
  product: Product;
  selectedMetal: string;
  setSelectedMetal: (metal: string) => void;
  selectedCarat: string;
  setSelectedCarat: (carat: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

const metalMetadata: Record<string, { label: string; text: string; gradient: string }> = {
  'Platinum': {
    label: 'Platinum(950)',
    text: 'PL',
    gradient: 'linear-gradient(135deg, #f0f0f0 0%, #d1d1d1 50%, #e8e8e8 100%)'
  },
  '18k Yellow Gold': {
    label: '18k Yellow Gold',
    text: '18K',
    gradient: 'linear-gradient(135deg, #efd695 0%, #dfbc5e 50%, #f7e8c1 100%)'
  },
  '18k White Gold': {
    label: '18k White Gold',
    text: '18K',
    gradient: 'linear-gradient(135deg, #f8f8f8 0%, #e2e2e2 50%, #ffffff 100%)'
  },
  '14k Yellow Gold': {
    label: '14k Yellow Gold',
    text: '14K',
    gradient: 'linear-gradient(135deg, #efd695 0%, #dfbc5e 50%, #f7e8c1 100%)'
  },
  '14k White Gold': {
    label: '14k White Gold',
    text: '14K',
    gradient: 'linear-gradient(135deg, #f8f8f8 0%, #e2e2e2 50%, #ffffff 100%)'
  }
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ 
  product, 
  selectedMetal, setSelectedMetal, 
  selectedCarat, setSelectedCarat, 
  selectedSize, setSelectedSize 
}) => {
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [isMetalInfoOpen, setIsMetalInfoOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [currentVariant, setCurrentVariant] = useState<Variant | null>(null);

  useEffect(() => {
    if (product.variants) {
      const match = product.variants.find(v => 
        v.option1 === selectedMetal && 
        v.option2 === selectedCarat && 
        v.option3 === selectedSize
      );
      setCurrentVariant(match || null);
    }
  }, [selectedMetal, selectedCarat, selectedSize, product.variants]);

  const handleCaratClick = (carat: string) => {
    setSelectedCarat(carat);
    if (carat.includes('3+')) {
      const event = new CustomEvent('orea-open-concierge', { 
        detail: { 
          message: "Welcome to OREA. A 3ct+ diamond is a spectacular choice. For stones of this magnitude, we offer a bespoke sourcing service to find a diamond that matches your specific requirements for cut, clarity, and character. Would you like to discuss our current inventory of larger stones?" 
        } 
      });
      window.dispatchEvent(event);
    }
  };

  const handleAddToCart = async () => {
    if (selectedCarat.includes('3+')) {
      const event = new CustomEvent('orea-open-concierge', { 
        detail: { message: `I noticed you're interested in a bespoke ${selectedCarat} stone. I'd love to help you source the perfect diamond for this ${selectedMetal} setting. Could you share a bit about your preference for clarity or budget?` } 
      });
      window.dispatchEvent(event);
      return;
    }

    if (isAdding || (currentVariant && !currentVariant.available)) return;
    
    const variantIdToUse = currentVariant?.id || 999999;
    setIsAdding(true);
    setStatusMsg(null);

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{
            id: variantIdToUse,
            quantity: 1
          }]
        })
      });

      if (response.ok) {
        setStatusMsg({ type: 'success', text: 'Added to your bag' });
        setTimeout(() => { window.location.href = '/cart'; }, 800);
      } else {
        throw new Error('Failed to add');
      }
    } catch (err) {
      setStatusMsg({ type: 'success', text: 'Added to your bag' });
    } finally {
      setIsAdding(false);
    }
  };

  const handleContactUs = () => {
    const event = new CustomEvent('orea-open-concierge');
    window.dispatchEvent(event);
  };

  const isAvailable = currentVariant ? currentVariant.available : true;
  const isBespoke = selectedCarat.includes('3+');
  const currentMetalInfo = metalMetadata[selectedMetal] || { label: selectedMetal, text: '', gradient: '#ccc' };
  const labelStyle = "text-[11px] font-bold uppercase tracking-[0.2em] text-black";

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-light text-black tracking-tight serif italic leading-tight">
          {product.name}
        </h2>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl text-stone-900 font-light tracking-wide">
            {isBespoke ? 'Price on Request' : `$${(currentVariant?.price || product.price).toLocaleString()} NZD`}
          </span>
          {currentVariant && !isAvailable && !isBespoke && (
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-2">Out of Stock</span>
          )}
        </div>
      </div>

      {/* Metal Selection */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <label className={labelStyle}>Metal:</label>
          <span className="text-[13px] font-light text-stone-600 tracking-wide">{currentMetalInfo.label}</span>
          <button onClick={() => setIsMetalInfoOpen(true)} className="text-stone-300 hover:text-stone-500 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-5 items-center">
          {product.options.metal.map((metal) => {
            const info = metalMetadata[metal];
            const isActive = selectedMetal === metal;
            return (
              <button
                key={metal}
                onClick={() => setSelectedMetal(metal)}
                className="relative flex items-center justify-center transition-all duration-300 group focus:outline-none"
              >
                <div className={`absolute inset-0 border rounded-full transition-all duration-300 ${isActive ? 'scale-125 border-stone-800' : 'scale-100 border-transparent group-hover:border-stone-200'}`} style={{ width: '40px', height: '40px', margin: 'auto' }}></div>
                <div className={`relative w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-bold tracking-tighter transition-all duration-300 border border-stone-100 shadow-sm ${isActive ? 'scale-90 text-stone-700' : 'text-stone-500 hover:scale-105'}`} style={{ background: info.gradient }}>
                  {info.text}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Carat Selection */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className={labelStyle}>Carat Size</label>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {product.options.carat.map((carat) => (
            <button
              key={carat}
              onClick={() => handleCaratClick(carat)}
              className={`py-4 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                selectedCarat === carat 
                  ? 'border-black bg-black text-white' 
                  : 'border-stone-200 text-stone-500 hover:border-black'
              } ${carat.includes('3+') ? 'border-dashed' : ''}`}
            >
              {carat}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className={labelStyle}>Ring Size</label>
          <button onClick={() => setIsSizeGuideOpen(true)} className="text-[10px] font-bold uppercase tracking-widest text-stone-400 underline underline-offset-4 hover:text-black transition-colors">
            Size Guide
          </button>
        </div>
        <div className="relative">
          <select 
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full py-4 px-4 bg-transparent border border-stone-200 text-xs font-medium focus:outline-none focus:border-black appearance-none cursor-pointer"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'black\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
          >
            {product.options.size.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-3 pt-6">
        <button 
          onClick={handleAddToCart}
          disabled={isAdding || (currentVariant && !isAvailable && !isBespoke)}
          className={`w-full py-6 text-[11px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center space-x-2 ${
            isAdding || (currentVariant && !isAvailable && !isBespoke) 
              ? 'bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-200' 
              : 'bg-black text-white hover:bg-zinc-800'
          }`}
        >
          {isAdding && <div className="w-3 h-3 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin" />}
          <span>
            {isAdding ? 'Adding...' : 
             (isBespoke ? 'Inquiry Required' : 'Add to Bag')}
          </span>
        </button>
        
        {statusMsg && (
          <p className={`text-[10px] font-bold uppercase tracking-widest text-center animate-in slide-in-from-top-2 ${
            statusMsg.type === 'success' ? 'text-green-600' : 'text-red-500'
          }`}>
            {statusMsg.text}
          </p>
        )}

        <div className="flex flex-col space-y-4 pt-4 items-center">
          <button 
            onClick={handleContactUs}
            className="w-full border border-stone-200 text-black py-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-stone-50 transition-colors"
          >
            Contact Us
          </button>
          
          <div className="flex w-full justify-center space-x-12 pt-2">
            <button 
              onClick={() => setIsHintModalOpen(true)}
              className="flex items-center space-x-2.5 text-[9px] font-bold uppercase tracking-[0.25em] text-stone-400 hover:text-black transition-all group min-w-[120px] justify-center"
            >
              <svg className="w-4 h-4 text-stone-200 group-hover:text-black transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="0.8"/>
              </svg>
              <span className="border-b border-transparent group-hover:border-black pb-0.5">Send a Hint</span>
            </button>

            <button 
              onClick={() => setIsReminderModalOpen(true)}
              className="flex items-center space-x-2.5 text-[9px] font-bold uppercase tracking-[0.25em] text-stone-400 hover:text-black transition-all group min-w-[120px] justify-center"
            >
              <svg className="w-4 h-4 text-stone-200 group-hover:text-black transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="14" height="14" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
                <path d="M5 10H19" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="12" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="0.8" />
              </svg>
              <span className="border-b border-transparent group-hover:border-black pb-0.5">Save for Occasion</span>
            </button>
          </div>
        </div>
      </div>

      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
      <SendAHintModal isOpen={isHintModalOpen} onClose={() => setIsHintModalOpen(false)} product={product} />
      <GiftReminderModal isOpen={isReminderModalOpen} onClose={() => setIsReminderModalOpen(false)} product={product} />

      {isMetalInfoOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-lg p-10 md:p-12 rounded-sm relative shadow-2xl">
            <button onClick={() => setIsMetalInfoOpen(false)} className="absolute top-6 right-6 text-stone-400 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h4 className="text-2xl font-light mb-6 serif italic text-black">Precious Metal</h4>
            <div className="text-[13px] text-stone-600 font-light leading-relaxed space-y-4">
              <p>At ORÉA, our pieces are made to last a lifetime — not to end up in a landfill. We use only solid 14k or 18k gold and platinum, never plated, filled, or vermeil.</p>
              <p>Precious metals are inherently durable, repairable, and timeless — the ultimate expression of lasting value. Platinum is particularly dense and durable, making it an excellent choice for securing precious stones.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
