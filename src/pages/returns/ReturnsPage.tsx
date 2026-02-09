import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import { RETURNS_FAQ } from './constants';

const ReturnsPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="flex-grow">
      {/* Page Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="serif-heading text-4xl md:text-6xl font-light tracking-[0.05em] mb-8 animate-fade-in text-[#4A3F35]">
            Returns & Exchanges
          </h1>
          <div className="w-16 h-[1px] bg-[#C5B8A0] mx-auto mb-12"></div>
        </div>
      </section>

      {/* Content Accordion Section */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-[#E8DFD3]">
            {RETURNS_FAQ.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer as string}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReturnsPage;
