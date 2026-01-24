
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#f9f9f7]/95 backdrop-blur-sm border-b border-stone-100">
      <div className="container mx-auto px-8 h-24 flex items-center justify-between">
        {/* Navigation */}
        <nav className="flex-1 hidden md:flex items-center space-x-10 text-[10px] font-semibold uppercase tracking-widest-plus text-stone-600">
          <a href="#" className="hover:text-black transition-colors">Jewelry</a>
          <a href="#" className="hover:text-black transition-colors">Bespoke</a>
          <a href="#" className="hover:text-black transition-colors">Journal</a>
        </nav>

        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <h1 className="text-4xl font-light tracking-[0.2em] text-black">OREA</h1>
        </div>

        {/* Utilities */}
        <div className="flex-1 flex items-center justify-end space-x-8 text-[10px] font-semibold uppercase tracking-widest-plus text-stone-600">
          <a href="#" className="hidden md:block hover:text-black">Account</a>
          <a href="#" className="hover:text-black">Bag (0)</a>
          <button className="md:hidden p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
