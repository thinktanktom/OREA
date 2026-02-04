import React from 'react';
import { Category } from '../types';

interface CollectionHeaderProps {
  currentCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const COLLECTION_LINKS: Category[] = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Pendants'];

const CollectionHeader: React.FC<CollectionHeaderProps> = ({ currentCategory, onCategoryChange }) => {
  return (
    <header className="pt-16 pb-8 md:pt-24 md:pb-12 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">
      <div className="flex flex-col items-center">
        <nav className="w-full flex justify-center py-4">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {COLLECTION_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => onCategoryChange(link)}
                  className={`group relative text-[10px] uppercase tracking-[0.45em] transition-colors duration-500 pb-2 font-bold
                    ${currentCategory === link ? 'text-[#4A3F35]' : 'text-[#4A3F35]/80 hover:text-[#4A3F35]'}
                  `}
                >
                  {link}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#D4C4A8] transition-transform duration-500 origin-left 
                    ${currentCategory === link ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default CollectionHeader;