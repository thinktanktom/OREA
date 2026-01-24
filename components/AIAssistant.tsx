
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const DEFAULT_GREETING = "Welcome to OREA. Choosing a ring is such a beautiful and significant journey. I'm here to guide you with the same care we put into our craft. To help you find the perfect match, are you looking for something timelessly traditional, or does your heart lean towards a more contemporary design?";
  
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: DEFAULT_GREETING }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = (e: any) => {
      const customMessage = e.detail?.message;
      if (customMessage) {
        setMessages([{ role: 'model', text: customMessage }]);
      } else {
        // Reset to default if opened normally without custom text
        setMessages([{ role: 'model', text: DEFAULT_GREETING }]);
      }
      setIsOpen(true);
    };

    window.addEventListener('orea-open-concierge', handleOpen);
    return () => window.removeEventListener('orea-open-concierge', handleOpen);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMsg, messages);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble connecting with our studio records. Choosing the right piece is a journey that shouldn't be rushed—could you please try your message once more?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[380px] h-[550px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rounded-lg flex flex-col border border-stone-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          {/* Header */}
          <div className="bg-stone-50 p-6 flex justify-between items-center border-b border-stone-100">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-black tracking-[0.2em] uppercase">Contact Us</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-300 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-[13px] leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-black text-white rounded-sm' 
                    : 'bg-stone-50 text-stone-700 rounded-sm italic serif'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-1.5 p-4 bg-stone-50 rounded-sm">
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-pulse delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white border-t border-stone-100">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Share your thoughts with us..."
                className="w-full pr-12 pl-0 py-3 bg-transparent border-b border-stone-200 text-sm focus:outline-none focus:border-black transition-all placeholder:text-stone-300"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-0 p-2 text-black disabled:text-stone-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <p className="text-[9px] text-stone-300 mt-3 text-center uppercase tracking-widest font-bold">
              Bespoke AI Guidance
            </p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white hover:bg-stone-50 text-black px-6 py-4 rounded-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] flex items-center space-x-4 transition-all transform hover:-translate-y-1 active:scale-95 border border-stone-100 group"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Inquiry</span>
          <div className="w-px h-4 bg-stone-200"></div>
          <svg className="w-5 h-5 text-stone-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
