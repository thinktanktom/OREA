
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AboutDiamondsPage } from './pages/AboutDiamondsPage';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-stone-200">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <AboutDiamondsPage />
      </main>

      <Footer />
    </div>
  );
};

export default App;
