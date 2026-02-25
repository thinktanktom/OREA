'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Product, Variant } from './types';
import SendAHintModal from './SendAHintModal';
import GiftReminderModal from './GiftReminderModal';
import SizeGuideModal from './SizeGuideModal';
import DiamondShapeSelector from '../../components/product/DiamondShapeSelector';

// These products get the diamond shape selector panel
const SOLITAIRE_PRODUCT_IDS = ['necklace-1', 'bracelet-1', 'earring-1', 'pendant-1'];
const SHOPIFY_STORE = 'https://orea-8820.myshopify.com';

interface ProductDetailsProps {
  product: Product;
  selectedMetal: string;
  setSelectedMetal: (metal: string) => void;
  selectedShape?: string;
  setSelectedShape?: (shape: string) => void;
  isRing?: boolean;
  selectedCarat?: string;
  setSelectedCarat?: (carat: string) => void;
  selectedSize?: string;
  setSelectedSize?: (size: string) => void;
}

const metalMetadata: Record<string, { label: string; text: string; gradient: string }> = {
  'Platinum':        { label: 'Platinum(950)', text: 'PL', gradient: 'linear-gradient(135deg, #E8DFD3 0%, #D4C4A8 50%, #F9F6F1 100%)' },
  '18k Yellow Gold': { label: '18k Yellow Gold', text: '18K', gradient: 'linear-gradient(135deg, #EFD695 0%, #C5B8A0 50%, #F7E8C1 100%)' },
  '18k White Gold':  { label: '18k White Gold',  text: '18K', gradient: 'linear-gradient(135deg, #F8F8F8 0%, #E8DFD3 50%, #F9F6F1 100%)' },
  '14k Yellow Gold': { label: '14k Yellow Gold', text: '14K', gradient: 'linear-gradient(135deg, #EFD695 0%, #C5B8A0 50%, #F7E8C1 100%)' },
  '14k White Gold':  { label: '14k White Gold',  text: '14K', gradient: 'linear-gradient(135deg, #F8F8F8 0%, #E8DFD3 50%, #F9F6F1 100%)' },
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product, selectedMetal, setSelectedMetal,
  selectedShape, setSelectedShape,
  isRing, selectedCarat, setSelectedCarat,
  selectedSize, setSelectedSize,
}) => {
  const showShapeSelector = SOLITAIRE_PRODUCT_IDS.includes(product.id) && !!setSelectedShape;
  const [isHintModalOpen,     setIsHintModalOpen]     = useState(false);
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [isMetalInfoOpen,     setIsMetalInfoOpen]     = useState(false);
  const [isSizeGuideOpen,     setIsSizeGuideOpen]     = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [currentVariant, setCurrentVariant] = useState<Variant | null>(null);
  const navigate = useNavigate();

  const isInquiryRequired =
    (isRing && selectedCarat?.toLowerCase().includes('3+')) || product.id === 'ring-16';

  // Does this product have carat options?
  const hasCarat = (product.options.carat?.length ?? 0) > 0;

  // Keep currentVariant in sync
  useEffect(() => {
    if (!product.variants?.length) { setCurrentVariant(null); return; }
    const match = product.variants.find(v => {
      const metalOk = v.option1?.trim() === selectedMetal.trim();
      if (!hasCarat) return metalOk;
      return metalOk && v.option2 === selectedCarat;
    });
    setCurrentVariant(match ?? null);
  }, [selectedMetal, selectedCarat, product.variants, hasCarat]);

  const displayPrice = currentVariant?.price ?? product.price;

  // Add to Bag: builds Shopify checkout URL and redirects
  const handleAddToBag = () => {
    if (!selectedMetal) {
      setStatusMsg({ type: 'error', text: 'Please select a metal to continue.' }); return;
    }
    if (hasCarat && !selectedCarat) {
      setStatusMsg({ type: 'error', text: 'Please select a carat weight to continue.' }); return;
    }
    if (isRing && !selectedSize) {
      setStatusMsg({ type: 'error', text: 'Please select a ring size to continue.' }); return;
    }
    if (!currentVariant?.id) {
      setStatusMsg({ type: 'error', text: "This combination isn't available — please try a different selection." }); return;
    }
    setStatusMsg(null);
    let url = `${SHOPIFY_STORE}/cart/${currentVariant.id}:1`;
    if (isRing && selectedSize) {
      url += `?attributes[Ring+Size]=${encodeURIComponent(selectedSize)}`;
    }
    window.location.href = url;
  };

  // Send a Hint: mailto pre-fill
  const handleSendHint = () => {
    const subject = encodeURIComponent(`Hint: ${product.name}`);
    const body    = encodeURIComponent(`I'd love this: ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const currentMetalInfo = metalMetadata[selectedMetal];
  const labelStyle = 'text-micro font-bold uppercase tracking-widest text-orea-dark';

  return (
    <div className="flex flex-col gap-10">

      {/* Title & price */}
      <div className="flex flex-col gap-3">
        <h1 className="text-h3 font-light text-orea-dark tracking-wide font-serif uppercase leading-tight">{product.name}</h1>
        <div className="flex items-baseline gap-2">
          <span className="text-h4 text-orea-dark font-light tracking-wide">${displayPrice.toLocaleString()} NZD</span>
          {currentVariant && !currentVariant.available && (
            <span className="text-micro font-bold text-orea-taupe uppercase tracking-widest ml-2">Out of Stock</span>
          )}
        </div>
      </div>

      {/* Metal */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <label className={labelStyle}>Metal:</label>
          <span className="text-body-sm font-light text-orea-taupe tracking-wide">{currentMetalInfo?.label ?? selectedMetal}</span>
          <button onClick={() => setIsMetalInfoOpen(true)} className="text-orea-champagne hover:text-orea-dark transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-wrap gap-5 items-center">
          {product.options.metal.map((metal) => {
            const info = metalMetadata[metal];
            const isActive = selectedMetal === metal;
            return (
              <button key={metal} onClick={() => { setSelectedMetal(metal); setStatusMsg(null); }}
                className="relative flex items-center justify-center transition-all duration-300 group focus:outline-none">
                <div className={`absolute inset-0 border rounded-full transition-all duration-300 ${isActive ? 'scale-125 border-orea-dark' : 'scale-100 border-transparent group-hover:border-orea-sand'}`}
                  style={{ width: '40px', height: '40px', margin: 'auto' }} />
                <div className={`relative w-10 h-10 rounded-full flex items-center justify-center text-micro font-bold tracking-tighter transition-all duration-300 border border-orea-sand shadow-sm ${isActive ? 'scale-90 text-orea-dark' : 'text-orea-taupe hover:scale-105'}`}
                  style={{ background: info?.gradient ?? '#E8DFD3' }}>
                  {info ? info.text : metal.charAt(0)}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Diamond shape selector (solitaire products only) */}
      {showShapeSelector && selectedShape !== undefined && setSelectedShape && (
        <DiamondShapeSelector
          shapes={product.options.shape}
          selectedShape={selectedShape}
          onShapeChange={setSelectedShape}
        />
      )}

      {/* Carat — rings AND non-ring pieces that have carat variants (e.g. Solitaire Bracelet) */}
      {hasCarat && selectedCarat !== undefined && setSelectedCarat && (
        <div className="flex flex-col gap-4">
          <label className={labelStyle}>{isRing ? 'Carat' : 'Diamond Weight'}</label>
          <div className="grid grid-cols-3 gap-2">
            {product.options.carat.map((carat) => (
              <button key={carat}
                onClick={() => { setSelectedCarat(carat); setStatusMsg(null); }}
                className={`py-3 text-micro font-bold uppercase tracking-widest border transition-all ${
                  selectedCarat === carat
                    ? 'border-orea-dark bg-orea-dark text-orea-cream'
                    : `border-orea-linen text-orea-taupe hover:border-orea-dark ${carat.includes('3+') ? 'border-dashed' : ''}`
                }`}>
                {carat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Ring size — rings only */}
      {isRing && setSelectedSize && selectedSize !== undefined && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className={labelStyle}>Ring Size</label>
            <button onClick={() => setIsSizeGuideOpen(true)}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-orea-champagne underline underline-offset-4 hover:text-orea-dark transition-colors">
              Size Guide
            </button>
          </div>
          <div className="relative">
            <select value={selectedSize} onChange={(e) => { setSelectedSize(e.target.value); setStatusMsg(null); }}
              className="w-full py-4 px-4 bg-transparent border border-orea-linen text-xs font-medium focus:outline-none focus:border-orea-dark appearance-none cursor-pointer text-orea-dark"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234A3F35'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}>
              {product.options.size.map((size) => <option key={size} value={size}>{size}</option>)}
            </select>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="flex flex-col gap-3 pt-6">
        {statusMsg?.type === 'error' && (
          <p className="text-xs text-red-700 tracking-wide font-medium text-center -mb-1">{statusMsg.text}</p>
        )}
        {isInquiryRequired ? (
          <button onClick={() => navigate('/contact')}
            className="w-full py-6 text-micro font-bold uppercase tracking-widest bg-orea-dark text-orea-cream hover:bg-orea-taupe transition-all">
            Inquiry Required
          </button>
        ) : (
          <button onClick={handleAddToBag}
            disabled={currentVariant !== null && !currentVariant.available}
            className={`w-full py-6 text-micro font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
              currentVariant && !currentVariant.available
                ? 'bg-orea-sand text-orea-taupe cursor-not-allowed border border-orea-sand'
                : 'bg-orea-dark text-orea-cream hover:bg-orea-taupe'
            }`}>
            {currentVariant && !currentVariant.available ? 'Out of Stock' : 'Add to Bag'}
          </button>
        )}

        <Link to="/contact"
          className="w-full border border-orea-linen text-orea-dark py-6 text-micro font-bold uppercase tracking-widest hover:bg-orea-linen/40 transition-colors text-center block">
          Contact Us
        </Link>

        <div className="flex w-full justify-center gap-12 pt-2">
          <button onClick={handleSendHint}
            className="flex items-center gap-2.5 text-micro font-bold uppercase tracking-widest text-orea-taupe hover:text-orea-dark transition-all group min-w-[120px] justify-center">
            <svg className="w-4 h-4 text-orea-champagne group-hover:text-orea-dark transition-all duration-300" viewBox="0 0 24 24" fill="none">
              <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="0.8"/>
            </svg>
            <span className="border-b border-transparent group-hover:border-orea-dark pb-0.5">Send a Hint</span>
          </button>

          <button onClick={() => setIsReminderModalOpen(true)}
            className="flex items-center gap-2.5 text-micro font-bold uppercase tracking-widest text-orea-taupe hover:text-orea-dark transition-all group min-w-[120px] justify-center">
            <svg className="w-4 h-4 text-orea-champagne group-hover:text-orea-dark transition-all duration-300" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="5" width="14" height="14" rx="0.5" stroke="currentColor" strokeWidth="0.8"/>
              <path d="M5 10H19" stroke="currentColor" strokeWidth="0.8"/>
              <circle cx="12" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="0.8"/>
            </svg>
            <span className="border-b border-transparent group-hover:border-orea-dark pb-0.5">Save for Occasion</span>
          </button>
        </div>
      </div>

      {isHintModalOpen     && <SendAHintModal    isOpen={true} product={product} onClose={() => setIsHintModalOpen(false)} />}
      {isReminderModalOpen && <GiftReminderModal isOpen={true} product={product} onClose={() => setIsReminderModalOpen(false)} />}
      {isSizeGuideOpen     && <SizeGuideModal    isOpen={true} onClose={() => setIsSizeGuideOpen(false)} />}

      {isMetalInfoOpen && (
        <div className="fixed inset-0 bg-orea-dark/40 z-50 flex items-end justify-center" onClick={() => setIsMetalInfoOpen(false)}>
          <div className="bg-white w-full max-w-lg p-8 pb-12 space-y-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-micro font-bold uppercase tracking-widest">About Our Metals</h3>
            <p className="text-body-sm text-orea-taupe font-light leading-relaxed">
              All ORÉA pieces are crafted in solid 14k or 18k gold, or Platinum(950). 14k gold offers excellent durability for everyday wear. 18k gold has a richer colour with a slightly softer feel. Platinum is the most durable and hypoallergenic option.
            </p>
            <button onClick={() => setIsMetalInfoOpen(false)} className="text-micro font-bold uppercase tracking-widest underline underline-offset-4">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;