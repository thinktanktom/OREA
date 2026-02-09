import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#E8DFD3] last:border-0 group">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-8 text-left focus:outline-none"
      >
        <span className="serif-heading text-xl md:text-2xl font-light tracking-wide text-[#4A3F35] group-hover:text-[#7D6B5C] transition-colors">
          {question}
        </span>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus size={20} strokeWidth={1} className="text-[#7D6B5C]" />
          ) : (
            <Plus size={20} strokeWidth={1} className="text-[#7D6B5C]" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-[15px] leading-relaxed text-[#7D6B5C] font-light max-w-4xl whitespace-pre-wrap">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;