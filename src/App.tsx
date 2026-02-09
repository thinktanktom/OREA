import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Main Pages
import HomePage from './pages/home/HomePage';
import AboutOreaPage from './pages/about-orea/AboutOreaPage';
import AboutDiamondsPage from './pages/about-diamonds/AboutDiamondsPage';
import BespokePage from './pages/bespoke/BespokePage';
import CollectionPage from './pages/collection/CollectionPage';
import ConciergePage from './pages/concierge/ConciergePage';
import ContactPage from './pages/contact/ContactPage';
import FAQPage from './pages/faq/FAQPage';
import CareGuidePage from './pages/care-guide/CareGuidePage';
import BoutiquePage from './pages/boutique/BoutiquePage';
import ProductPage from './pages/product/ProductPage';
import ProductShapePage from './pages/product-shape/ProductShapePage';
import ReturnsPage from './pages/returns/ReturnsPage';
import ShippingPage from './pages/shipping/ShippingPage';
import TermsPage from './pages/terms/TermsPage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">{/*Each page has its own background and styling*/}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutOreaPage />} />
          <Route path="/diamonds" element={<AboutDiamondsPage />} />
          <Route path="/bespoke" element={<BespokePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/concierge" element={<ConciergePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/care-guide" element={<CareGuidePage />} />
          <Route path="/boutique" element={<BoutiquePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product/:id/:shape" element={<ProductShapePage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
