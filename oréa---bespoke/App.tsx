import React from 'react';
import BespokePage from './pages/BespokePage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#C5B8A0] selection:text-[#4A3F35] overflow-x-hidden bg-[#F9F6F1]">
      <main>
        <BespokePage />
      </main>
    </div>
  );
};

export default App;