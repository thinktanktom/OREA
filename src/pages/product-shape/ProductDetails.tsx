
import React, { useState, useEffect } from 'react';
import { Product, Variant } from './types';
import SendAHintModal from './SendAHintModal';
import GiftReminderModal from './GiftReminderModal';

interface ProductDetailsProps {
  product: Product;
  selectedMetal: string;
  setSelectedMetal: (metal: string) => void;
  selectedShape: string;
  setSelectedShape: (shape: string) => void;
}

const metalMetadata: Record<string, { label: string; text: string; gradient: string }> = {
  'Platinum': {
    label: 'Platinum(950)',
    text: 'PL',
    gradient: 'linear-gradient(135deg, #E8DFD3 0%, #D4C4A8 50%, #F9F6F1 100%)'
  },
  '18k Yellow Gold': {
    label: '18k Yellow Gold',
    text: '18K',
    gradient: 'linear-gradient(135deg, #EFD695 0%, #C5B8A0 50%, #F7E8C1 100%)'
  },
  '18k White Gold': {
    label: '18k White Gold',
    text: '18K',
    gradient: 'linear-gradient(135deg, #F8F8F8 0%, #E8DFD3 50%, #ffffff 100%)'
  },
  '14k Yellow Gold': {
    label: '14k Yellow Gold',
    text: '14K',
    gradient: 'linear-gradient(135deg, #EFD695 0%, #C5B8A0 50%, #F7E8C1 100%)'
  },
  '14k White Gold': {
    label: '14k White Gold',
    text: '14K',
    gradient: 'linear-gradient(135deg, #F8F8F8 0%, #E8DFD3 50%, #ffffff 100%)'
  }
};

const ShapeIcon: React.FC<{ shape: string; className?: string }> = ({ shape, className = "w-8 h-8" }) => {
  // Simplified line-art diamond shape SVGs
  switch (shape) {
    case 'Round':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="0.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3L18.36 5.64L21 12L18.36 18.36L12 21L5.64 18.36L3 12L5.64 5.64L12 3Z" />
          <path d="M12 3V21M3 12H21" strokeWidth="0.5" />
        </svg>
      );
    case 'Oval':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="0.8">
          <ellipse cx="12" cy="12" rx="7" ry="10" />
          <path d="M12 2L17 5L19 12L17 19L12 22L7 19L5 12L7 5L12 2Z" />
          <path d="M12 2V22M5 12H19" strokeWidth="0.5" />
        </svg>
      );
    case 'Pear':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="0.8">
          <path d="M12 2C12 2 5 10 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10 12 2 12 2Z" />
          <path d="M12 2V22M7 11H17" strokeWidth="0.5" />
        </svg>
      );
    case 'Marquise':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="0.8">
          <path d="M12 2C12 2 5 12 12 22C12 22 19 12 12 2Z" />
          <path d="M12 2V22M7 12H17" strokeWidth="0.5" />
        </svg>
      );
    case 'Princess':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="0.8">
          <rect x="4" y="4" width="16" height="16" />
          <path d="M4 4L20 20M4 20L20 4" strokeWidth="0.5" />
          <path d="M12 4V20M4 12H20" strokeWidth="0.5" />
        </svg>
      );
    case 'Emerald':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="0.8">
          <path d="M7 2H17L22 7V17L17 22H7L2 17V7L7 2Z" />
          <rect x="6" y="6" width="12" height="12" strokeWidth="0.5" />
          <path d="M2 7H22M2 17H22M7 2V22M17 2V22" strokeWidth="0.3" />
        </svg>
      );
    case 'Radiant':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="0.8">
          <path d="M7 3H17L21 7V17L17 21H7L3 17V7L7 3Z" />
          <path d="M3 7L21 17M3 17L21 7M7 3L17 21M17 3L7 21" strokeWidth="0.4" />
        </svg>
      );
    case 'Asscher':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="0.8">
          <path d="M8 3H16L21 8V16L16 21H8L3 16V8L8 3Z" />
          <rect x="7" y="7" width="10" height="10" strokeWidth="0.5" />
          <path d="M3 8H21M3 16H21M8 3V21M16 3V21" strokeWidth="0.3" />
        </svg>
      );
    case 'Cushion':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="0.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <path d="M3 3L21 21M3 21L21 3" strokeWidth="0.5" />
          <path d="M12 3V21M3 12H21" strokeWidth="0.5" />
        </svg>
      );
    case 'Heart':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="0.8">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
          <path d="M12 5V21" strokeWidth="0.5" />
        </svg>
      );
    default:
      return null;
  }
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ 
  product, 
  selectedMetal, setSelectedMetal,
  selectedShape, setSelectedShape
}) => {
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [isMetalInfoOpen, setIsMetalInfoOpen] = useState(false);
  const [isShapeInfoOpen, setIsShapeInfoOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [currentVariant, setCurrentVariant] = useState<Variant | null>(null);

  useEffect(() => {
    if (product.variants) {
      const match = product.variants.find(v => {
        return (
          v.option1?.trim() === selectedMetal.trim() &&
          v.option2?.trim() === selectedShape.trim()
        );
      });
      setCurrentVariant(match || null);
    }
  }, [selectedMetal, selectedShape, product.variants]);

  const handleAddToCart = async () => {
    if (isAdding) return;
    
    setIsAdding(true);
    setStatusMsg(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setStatusMsg({ type: 'success', text: 'Added to your bag' });
      document.dispatchEvent(new CustomEvent('cart:refresh'));
    } catch (err) {
      setStatusMsg({ type: 'error', text: 'Failed to add' });
    } finally {
      setIsAdding(false);
    }
  };

  const currentMetalInfo = metalMetadata[selectedMetal] || { label: selectedMetal, text: '', gradient: '#ccc' };
  const labelStyle = "text-[10px] font-bold uppercase tracking-[0.4em] text-orea-dark";

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-light text-orea-dark tracking-[0.05em] serif uppercase leading-tight">
          {product.name}
        </h2>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl text-orea-dark font-light tracking-wide">
            {`$${(currentVariant?.price || product.price).toLocaleString()} NZD`}
          </span>
          {currentVariant && !currentVariant.available && (
            <span className="text-[10px] font-bold text-orea-taupe uppercase tracking-widest ml-2">Out of Stock</span>
          )}
        </div>
      </div>

      {/* Metal Variant Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <label className={labelStyle}>Metal:</label>
          <span className="text-[13px] font-light text-orea-taupe tracking-wide">{currentMetalInfo.label}</span>
          <button onClick={() => setIsMetalInfoOpen(true)} className="text-orea-champagne hover:text-orea-gold transition-colors">
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
                <div className={`absolute inset-0 border rounded-full transition-all duration-300 ${isActive ? 'scale-125 border-orea-dark' : 'scale-100 border-transparent group-hover:border-orea-linen'}`} style={{ width: '40px', height: '40px', margin: 'auto' }}></div>
                <div className={`relative w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-bold tracking-tighter transition-all duration-300 border border-orea-linen shadow-sm ${isActive ? 'scale-90 text-orea-dark' : 'text-orea-taupe hover:scale-105'}`} style={{ background: info ? info.gradient : '#e5e5e5' }}>
                  {info ? info.text : metal.charAt(0)}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Shape Variant Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <label className={labelStyle}>Shape:</label>
          <span className="text-[13px] font-light text-orea-taupe tracking-wide">{selectedShape}</span>
          <button onClick={() => setIsShapeInfoOpen(true)} className="text-orea-champagne hover:text-orea-gold transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-x-6 gap-y-8 items-end">
          {product.options.shape.map((shape) => {
            const isActive = selectedShape === shape;
            return (
              <button
                key={shape}
                onClick={() => setSelectedShape(shape)}
                className="relative flex flex-col items-center group transition-all duration-300 focus:outline-none"
              >
                <div className={`transition-all duration-500 mb-2 ${isActive ? 'text-orea-dark scale-110' : 'text-orea-taupe/40 group-hover:text-orea-taupe'}`}>
                  <ShapeIcon shape={shape} className="w-7 h-7" />
                </div>
                {isActive && (
                  <div className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-orea-dark animate-in slide-in-from-bottom-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3 pt-6">
        <button 
          onClick={handleAddToCart}
          disabled={isAdding || (currentVariant && !currentVariant.available)}
          className={`w-full py-6 text-[10px] font-bold uppercase tracking-[0.45em] transition-all flex items-center justify-center space-x-2 ${
            isAdding || (currentVariant && !currentVariant.available) 
              ? 'bg-orea-linen text-orea-taupe cursor-not-allowed border border-orea-linen' 
              : 'bg-orea-dark text-orea-cream hover:bg-orea-taupe'
          }`}
        >
          {isAdding && <div className="w-3 h-3 border-2 border-orea-champagne border-t-orea-dark rounded-full animate-spin" />}
          <span>
            {isAdding ? 'Adding...' : (currentVariant && !currentVariant.available ? 'Out of Stock' : 'Add to Bag')}
          </span>
        </button>
        
        {statusMsg && (
          <p className={`text-[10px] font-bold uppercase tracking-widest text-center animate-in slide-in-from-top-2 ${
            statusMsg.type === 'success' ? 'text-green-800' : 'text-red-800'
          }`}>
            {statusMsg.text}
          </p>
        )}

        <div className="flex flex-col space-y-4 pt-4 items-center">
          <a 
            href="mailto:hello@orea.co.nz"
            className="w-full border border-orea-linen text-orea-dark py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-orea-linen transition-colors text-center block"
          >
            Contact Us
          </a>
          
          <div className="flex w-full justify-center space-x-12 pt-2">
            <button 
              onClick={() => setIsHintModalOpen(true)}
              className="flex items-center space-x-2.5 text-[9px] font-bold uppercase tracking-[0.35em] text-orea-taupe hover:text-orea-dark transition-all group min-w-[120px] justify-center"
            >
              <svg className="w-4 h-4 text-orea-champagne group-hover:text-orea-dark transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="0.8"/>
              </svg>
              <span className="border-b border-transparent group-hover:border-orea-dark pb-0.5">Send a Hint</span>
            </button>

            <button 
              onClick={() => setIsReminderModalOpen(true)}
              className="flex items-center space-x-2.5 text-[9px] font-bold uppercase tracking-[0.35em] text-orea-taupe hover:text-orea-dark transition-all group min-w-[120px] justify-center"
            >
              <svg className="w-4 h-4 text-orea-champagne group-hover:text-orea-dark transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="14" height="14" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
                <path d="M5 10H19" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="12" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="0.8" />
              </svg>
              <span className="border-b border-transparent group-hover:border-orea-dark pb-0.5">Save for Occasion</span>
            </button>
          </div>
        </div>
      </div>

      <SendAHintModal isOpen={isHintModalOpen} onClose={() => setIsHintModalOpen(false)} product={product} />
      <GiftReminderModal isOpen={isReminderModalOpen} onClose={() => setIsReminderModalOpen(false)} product={product} />

      {/* Metal Info Modal */}
      {isMetalInfoOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-orea-dark/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-lg p-10 md:p-12 rounded-sm relative shadow-2xl">
            <button onClick={() => setIsMetalInfoOpen(false)} className="absolute top-6 right-6 text-orea-taupe hover:text-orea-dark">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h4 className="text-2xl font-light mb-6 serif text-orea-dark uppercase tracking-wide">Precious Metal</h4>
            <div className="text-[13px] text-orea-taupe font-light leading-relaxed space-y-4">
              <p>At ORÉA, our pieces are made to last a lifetime — not to end up in a landfill. We use only solid 14k or 18k gold and platinum, never plated, filled, or vermeil.</p>
              <p>Precious metals are inherently durable, repairable, and timeless — the ultimate expression of lasting value.</p>
            </div>
          </div>
        </div>
      )}

      {/* Shape Info Modal */}
      {isShapeInfoOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-orea-dark/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-lg p-10 md:p-12 rounded-sm relative shadow-2xl">
            <button onClick={() => setIsShapeInfoOpen(false)} className="absolute top-6 right-6 text-orea-taupe hover:text-orea-dark">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h4 className="text-2xl font-light mb-6 serif text-orea-dark uppercase tracking-wide">Diamond Shapes</h4>
            <div className="text-[13px] text-orea-taupe font-light leading-relaxed space-y-4">
              <p>The shape of a diamond can dramatically affect the appearance of your piece. From the classic brilliance of a Round cut to the architectural lines of an Emerald cut, each shape offers a unique personality.</p>
              <p>At ORÉA, we curate only the finest cuts to ensure maximum light return and aesthetic balance regardless of your chosen silhouette.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
