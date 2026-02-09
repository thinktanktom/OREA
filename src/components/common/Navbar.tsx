
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Heart, User, Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'shop' | 'concierge' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shopLinks = [
    { name: 'RINGS', link: '/collection' },
    { name: 'NECKLACES', link: '/collection' },
    { name: 'EARRINGS', link: '/collection' },
    { name: 'BRACELETS', link: '/collection' },
    { name: 'PENDANTS', link: '/collection' },
    { name: 'GIFT CARDS', link: '/collection' },
  ];

  const conciergeData = [
    {
      category: 'ABOUT',
      links: [
        { name: 'Our Story', link: '/about' },
        { name: 'About Lab-Grown Diamonds', link: '/diamonds' },
      ]
    },
    {
      category: 'BESPOKE',
      links: [
        { name: 'Bespoke Process', link: '/bespoke', highlighted: true },
        { name: 'Concierge Service', link: '/concierge' },
      ]
    },
    {
      category: 'CLIENT CARE',
      links: [
        { name: 'Client Care', link: '/faq' },
        { name: 'Jewellery Care', link: '/care-guide' },
        { name: 'Delivery', link: '/shipping' },
        { name: 'Returns', link: '/returns' },
        { name: 'Begin a Conversation', link: '/contact', highlighted: true },
      ]
    }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${
        isScrolled || activeDropdown ? 'bg-white/98 backdrop-blur-sm border-b border-orea-champagne/10 py-4 md:py-5' : 'bg-transparent py-6 md:py-10'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-[1800px] mx-auto px-5 md:px-16 flex justify-between items-center">
        
        {/* Left Pillar Navigation */}
        <div className="hidden lg:flex items-center space-x-12 text-[10px] tracking-[0.4em] font-medium text-orea-dark uppercase">
          <div 
            className="relative group py-2 cursor-pointer"
            onMouseEnter={() => setActiveDropdown('shop')}
          >
            <span className={`hover:text-orea-gold transition-colors duration-500 ${activeDropdown === 'shop' ? 'text-orea-gold' : ''}`}>
              Shop
            </span>
          </div>
          
          <div 
            className="relative group py-2 cursor-pointer"
            onMouseEnter={() => setActiveDropdown('concierge')}
          >
            <span className={`hover:text-orea-gold transition-colors duration-500 ${activeDropdown === 'concierge' ? 'text-orea-gold' : ''}`}>
              Concierge
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-orea-dark p-1" onClick={() => setIsMenuOpen(true)}>
          <Menu size={20} strokeWidth={1.5} />
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <Link to="/" className="font-serif text-2xl md:text-4xl tracking-[0.15em] text-orea-dark hover:opacity-70 transition-opacity duration-700">
            ORÉA
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 md:space-x-8 text-orea-dark">
          <button className="p-1 hover:text-orea-gold transition-colors duration-500" aria-label="Search">
            <Search size={18} strokeWidth={1.2} />
          </button>
          
          <button className="hidden sm:block p-1 hover:text-orea-gold transition-colors duration-500" aria-label="Wishlist">
            <Heart size={18} strokeWidth={1.2} />
          </button>
          
          <button className="hidden sm:block p-1 hover:text-orea-gold transition-colors duration-500" aria-label="Account">
            <User size={18} strokeWidth={1.2} />
          </button>
          
          <button className="p-1 hover:text-orea-gold transition-colors duration-500 relative" aria-label="Shopping Bag">
            <ShoppingBag size={18} strokeWidth={1.2} />
            <span className="absolute -top-0.5 -right-0.5 text-[7px] bg-orea-dark text-orea-cream w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
      </div>

      {/* SHOP Dropdown (Desktop only) */}
      <div className={`hidden lg:block absolute left-0 w-full bg-white transition-all duration-700 ease-in-out overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] ${
        activeDropdown === 'shop' ? 'max-h-[850px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="max-w-[1800px] mx-auto px-16 py-20 flex flex-row gap-24 items-start">
          <div className="w-[180px] pt-4">
            <ul className="space-y-[24px]">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.link} 
                    className="text-[12px] tracking-[0.4em] uppercase text-orea-dark hover:text-orea-gold transition-all duration-500 font-light block hover:translate-x-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full max-w-[380px]">
            <div className="flex flex-col space-y-10">
              <Link to="/collection" className="relative group overflow-hidden bg-orea-linen aspect-[4/5] block">
                <img 
                  src="https://placehold.co/1000x1250/F9F6F1/D4C4A8?text=SIGNATURE+PIECE" 
                  alt="Featured Signature Product" 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-700"></div>
              </Link>
              <Link 
                to="/collection" 
                className="inline-flex items-center space-x-6 text-[10px] tracking-[0.4em] uppercase text-orea-dark border-b border-orea-dark/10 pb-2 hover:border-orea-dark transition-all duration-500 group self-start"
              >
                <span className="font-medium">View All Pieces</span>
                <ArrowRight size={16} strokeWidth={1} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
          <div className="w-full max-w-[380px]">
            <div className="flex flex-col space-y-10">
              <Link to="/bespoke" className="relative group overflow-hidden bg-orea-linen aspect-[4/5] block">
                <img 
                  src="https://placehold.co/1000x1250/F9F6F1/D4C4A8?text=BESPOKE+JOURNEY" 
                  alt="The Bespoke Journey" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-700"></div>
              </Link>
              <div className="flex flex-col items-start py-2">
                <Link 
                  to="/bespoke" 
                  className="text-[11px] tracking-[0.15em] text-orea-dark hover:text-orea-gold transition-colors duration-500 font-light flex items-center group"
                >
                  <span className="opacity-80">Looking for something custom?</span>
                  <span className="text-orea-gold mx-3 group-hover:translate-x-1 transition-transform">→</span>
                  <span className="uppercase tracking-[0.3em] font-medium border-b border-transparent group-hover:border-orea-dark transition-all">Begin Bespoke</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1800px] mx-auto px-16 py-8 border-t border-orea-champagne/5 flex justify-between items-center text-[8px] tracking-[0.3em] uppercase text-orea-dark/40 font-light">
          <span>Sustainably grown diamonds</span>
          <span>Complimentary NZ Delivery</span>
        </div>
      </div>

      {/* CONCIERGE Dropdown (Desktop only) */}
      <div className={`hidden lg:block absolute left-0 w-full bg-white transition-all duration-700 ease-in-out overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] ${
        activeDropdown === 'concierge' ? 'max-h-[600px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="max-w-[1800px] mx-auto px-16 py-20 grid grid-cols-3 gap-24">
          {conciergeData.map((section) => (
            <div key={section.category} className="space-y-10">
              <div className="space-y-4">
                <h4 className="text-[10px] tracking-[0.6em] text-orea-dark uppercase font-semibold">
                  {section.category}
                </h4>
                <div className="w-8 h-[1px] bg-orea-gold/30"></div>
              </div>
              <ul className="space-y-[24px]">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.link} 
                      className={`text-[12px] tracking-[0.3em] uppercase transition-all duration-500 block relative group text-orea-dark hover:text-orea-gold font-light
                        ${link.highlighted ? 'inline-flex items-center' : 'hover:translate-x-2'}`}
                    >
                      {link.name}
                      {link.highlighted && (
                        <span className="inline-flex items-center ml-4">
                          <ArrowRight size={16} strokeWidth={1} className="text-orea-gold group-hover:translate-x-2 transition-transform" />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col p-8 md:p-12 transition-all duration-700 transform-gpu ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-2xl tracking-widest text-orea-dark uppercase">ORÉA</h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-orea-dark p-2">
            <X size={24} strokeWidth={1.2} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto pb-12 space-y-12">
          <div className="space-y-6">
            <p className="text-[9px] tracking-[0.4em] uppercase text-orea-gold font-bold">Shop</p>
            <div className="flex flex-col space-y-6">
              {shopLinks.map(link => (
                <a key={link.name} href={link.link} className="text-base tracking-[0.2em] uppercase text-orea-dark font-light" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
              ))}
            </div>
          </div>
          
          {conciergeData.map(section => (
            <div key={section.category} className="space-y-6">
              <p className="text-[9px] tracking-[0.4em] uppercase text-orea-gold font-bold">{section.category}</p>
              <div className="flex flex-col space-y-6">
                {section.links.map(link => (
                  <a key={link.name} href={link.link} 
                    className={`text-base tracking-[0.2em] uppercase text-orea-dark font-light ${link.highlighted ? 'text-orea-gold' : ''}`} 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Menu Bottom Bar */}
        <div className="pt-8 border-t border-orea-champagne/20 flex justify-center space-x-12">
           <Search size={20} strokeWidth={1} className="text-orea-dark" />
           <Heart size={20} strokeWidth={1} className="text-orea-dark" />
           <User size={20} strokeWidth={1} className="text-orea-dark" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
