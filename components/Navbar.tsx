
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'py-5 glass-effect border-b border-stone-100' : 'py-10 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-center items-center">
        <div>
          <a href="/" className="group">
            <h1 className={`font-serif tracking-[0.8em] transition-all duration-700 ${
              scrolled ? 'text-lg' : 'text-3xl'
            }`}>ORÉA</h1>
          </a>
        </div>
      </div>
    </nav>
  );
};
