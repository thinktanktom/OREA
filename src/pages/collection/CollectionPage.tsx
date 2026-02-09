import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Category, Product, DiamondShape } from './types';
import { PRODUCTS } from './constants';
import ProductCard from './ProductCard';
import CollectionHeader from './CollectionHeader';
import { Link } from 'react-router-dom';


const DIAMOND_SHAPES: DiamondShape[] = ['Round', 'Oval', 'Pear', 'Marquise', 'Princess', 'Emerald', 'Radiant', 'Asscher', 'Cushion', 'Heart'];

type SortOption = 'Featured' | 'Best Selling' | 'Price, Low To High' | 'Price, High To Low';

const CollectionPage: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<Category>('All');
  const [currentShape, setCurrentShape] = useState<DiamondShape | 'All'>('All');
  const [sortBy, setSortBy] = useState<SortOption>('Featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const sortRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const processedProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (currentCategory !== 'All') {
      result = result.filter(p => p.category === currentCategory);
    }
    if (currentShape !== 'All') {
      result = result.filter(p => p.shape === currentShape);
    }
    switch (sortBy) {
      case 'Best Selling':
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      case 'Price, Low To High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price, High To Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Featured':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }
    return result;
  }, [currentCategory, currentShape, sortBy]);

  const handleSortSelect = (option: SortOption) => {
    setSortBy(option);
    setIsSortOpen(false);
  };

  const handleShapeSelect = (shape: DiamondShape | 'All') => {
    setCurrentShape(shape);
    setIsFilterOpen(false);
  };

  return (
    <div>
      <CollectionHeader 
        currentCategory={currentCategory} 
        onCategoryChange={setCurrentCategory} 
      />

      <main className="max-w-screen-2xl mx-auto px-6 md:px-12 pb-32">
        {/* Toolbar */}
        <div className="flex justify-between items-center mb-16 text-[10px] uppercase tracking-[0.4em] text-[#4A3F35]/70 border-b border-[#E8DFD3]/40 pb-6">
          <div className="flex items-center gap-6">
            <span className="opacity-60">{processedProducts.length} Pieces</span>
            {(currentCategory !== 'All' || currentShape !== 'All') && (
              <button 
                onClick={() => { setCurrentCategory('All'); setCurrentShape('All'); }}
                className="hover:text-[#4A3F35] border-l border-[#E8DFD3] pl-6 transition-colors font-medium underline underline-offset-4"
              >
                Clear
              </button>
            )}
          </div>
          
          <div className="flex gap-10 items-center">
            {/* Filter */}
            <div className="relative" ref={filterRef}>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 hover:text-[#4A3F35] transition-colors font-medium"
              >
                Shape{currentShape !== 'All' ? `: ${currentShape}` : ''}
                <svg className={`w-3 h-3 transition-transform duration-500 ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 top-full mt-4 w-48 bg-[#F9F6F1] border border-[#E8DFD3] shadow-sm z-50 py-4 max-h-80 overflow-y-auto no-scrollbar">
                  <button onClick={() => handleShapeSelect('All')} className={`w-full text-left px-6 py-2 text-[10px] tracking-[0.35em] transition-colors ${currentShape === 'All' ? 'text-[#4A3F35] font-bold bg-[#E8DFD3]/20' : 'text-[#4A3F35]/60 hover:text-[#4A3F35]'}`}>ALL SHAPES</button>
                  {DIAMOND_SHAPES.map((shape) => (
                    <button key={shape} onClick={() => handleShapeSelect(shape)} className={`w-full text-left px-6 py-2 text-[10px] tracking-[0.35em] transition-colors uppercase ${currentShape === shape ? 'text-[#4A3F35] font-bold bg-[#E8DFD3]/20' : 'text-[#4A3F35]/60 hover:text-[#4A3F35]'}`}>{shape}</button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort */}
            <div className="relative" ref={sortRef}>
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 hover:text-[#4A3F35] transition-colors font-medium"
              >
                Sort: {sortBy}
                <svg className={`w-3 h-3 transition-transform duration-500 ${isSortOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isSortOpen && (
                <div className="absolute right-0 top-full mt-4 w-56 bg-[#F9F6F1] border border-[#E8DFD3] shadow-sm z-50 py-4">
                  {(['Featured', 'Best Selling', 'Price, Low To High', 'Price, High To Low'] as SortOption[]).map((option) => (
                    <button key={option} onClick={() => handleSortSelect(option)} className={`w-full text-left px-6 py-2 text-[10px] tracking-[0.35em] transition-colors uppercase ${sortBy === option ? 'text-[#4A3F35] font-bold bg-[#E8DFD3]/20' : 'text-[#4A3F35]/60 hover:text-[#4A3F35]'}`}>{option}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24">
          {processedProducts.map((product) => (
  <Link key={product.id} to={`/product/${product.id}`}>
    <ProductCard product={product} />
  </Link>
))}

          {processedProducts.length === 0 && (
            <div className="col-span-full py-40 text-center opacity-40">
              <p className="text-[10px] tracking-[0.5em] uppercase">No pieces found in this selection</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CollectionPage;
