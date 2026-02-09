
import React, { useState, useEffect } from 'react';
import { Product, Variant } from './types';
import SizeGuideModal from './SizeGuideModal';
import SendAHintModal from './SendAHintModal';
import VirtualTryOn from './VirtualTryOn';

interface ProductDetailsProps {
  product: Product;
  selectedMetal: string;
  setSelectedMetal: (metal: string) => void;
  selectedCarat: string;
  setSelectedCarat: (carat: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

const metalMetadata: Record<string, { label: string; color: string; gradient: string }> = {
  'Platinum': { label: 'Platinum', color: '#E8DFD3', gradient: 'linear-gradient(135deg, #E8DFD3 0%, #D4C4A8 100%)' },
  '18k Yellow Gold': { label: '18k Yellow Gold', color: '#EFD695', gradient: 'linear-gradient(135deg, #EFD695 0%, #C5B8A0 100%)' },
  '18k White Gold': { label: '18k White Gold', color: '#F8F8F8', gradient: 'linear-gradient(135deg, #F8F8F8 0%, #E8DFD3 100%)' },
  '14k Yellow Gold': { label: '14k Yellow Gold', color: '#EFD695', gradient: 'linear-gradient(135deg, #EFD695 0%, #C5B8A0 100%)' },
  '14k White Gold': { label: '14k White Gold', color: '#F8F8F8', gradient: 'linear-gradient(135deg, #F8F8F8 0%, #E8DFD3 100%)' }
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ 
  product, 
  selectedMetal, setSelectedMetal, 
  selectedCarat, setSelectedCarat, 
  selectedSize, setSelectedSize 
}) => {
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isTryOnOpen, setIsTryOnOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentVariant, setCurrentVariant] = useState<Variant | null>(null);

  useEffect(() => {
    if (product.variants) {
      const match = product.variants.find(v => 
        v.option1 === selectedMetal && v.option2 === selectedCarat
      );
      setCurrentVariant(match || null);
    }
  }, [selectedMetal, selectedCarat]);

  const price = currentVariant?.price || product.price;

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-light text-orea-dark tracking-wide serif italic">
          {product.name}
        </h1>
        <div className="flex items-center space-x-6">
          <p className="text-xl text-orea-taupe font-light tracking-wide">
            ${price.toLocaleString()} NZD
          </p>
          <button 
            onClick={() => setIsTryOnOpen(true)}
            className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-orea-gold border-b border-orea-gold/30 pb-0.5 hover:border-orea-gold transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeWidth={1} /></svg>
            <span>Virtual Try-On</span>
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Metal Selection */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-orea-dark">Metal: <span className="font-normal text-orea-taupe ml-2">{selectedMetal}</span></label>
          <div className="flex flex-wrap gap-4">
            {product.options.metal.map((metal) => (
              <button
                key={metal}
                onClick={() => setSelectedMetal(metal)}
                className={`w-10 h-10 rounded-full border transition-all relative ${selectedMetal === metal ? 'border-orea-dark scale-110' : 'border-orea-linen hover:border-orea-taupe'}`}
                style={{ background: metalMetadata[metal]?.gradient || '#eee' }}
                title={metal}
              >
                {selectedMetal === metal && <div className="absolute inset-[-4px] border border-orea-dark/20 rounded-full" />}
              </button>
            ))}
          </div>
        </div>

        {/* Carat Selection */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-orea-dark">Diamond Size</label>
          <div className="grid grid-cols-3 gap-2">
            {product.options.carat.map((carat) => (
              <button
                key={carat}
                onClick={() => setSelectedCarat(carat)}
                className={`py-4 text-[10px] font-bold uppercase tracking-[0.25em] border transition-all ${selectedCarat === carat ? 'bg-orea-dark text-white border-orea-dark' : 'text-orea-taupe border-orea-linen hover:border-orea-taupe'}`}
              >
                {carat}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-orea-dark">Ring Size</label>
            <button onClick={() => setIsSizeGuideOpen(true)} className="text-[9px] font-bold uppercase tracking-[0.2em] text-orea-gold underline underline-offset-4">Size Guide</button>
          </div>
          <select 
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full py-4 px-4 bg-transparent border border-orea-linen text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:border-orea-dark appearance-none cursor-pointer"
          >
            {product.options.size.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-4 pt-6">
        <button 
          onClick={() => { setIsAdding(true); setTimeout(() => setIsAdding(false), 1000); }}
          className="w-full py-6 bg-orea-dark text-white text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-orea-taupe transition-all flex items-center justify-center space-x-2"
        >
          {isAdding ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Add to Bag'}
        </button>
        
        <div className="flex justify-center space-x-8 pt-4">
          <button onClick={() => setIsHintModalOpen(true)} className="text-[9px] font-bold uppercase tracking-[0.2em] text-orea-taupe hover:text-orea-dark transition-colors">Send a Hint</button>
          <button className="text-[9px] font-bold uppercase tracking-[0.2em] text-orea-taupe hover:text-orea-dark transition-colors">Contact Concierge</button>
        </div>
      </div>

      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
      <SendAHintModal isOpen={isHintModalOpen} onClose={() => setIsHintModalOpen(false)} product={product} />
      <VirtualTryOn isOpen={isTryOnOpen} onClose={() => setIsTryOnOpen(false)} />
    </div>
  );
};

export default ProductDetails;
