import React from 'react';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-orea-taupe selection:text-white bg-orea-cream">
      <main>
        <ContactPage />
      </main>
    </div>
  );
};

export default App;