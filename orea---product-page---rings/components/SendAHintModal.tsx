
import React, { useState } from 'react';
import { Product } from '../types';

interface SendAHintModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const SendAHintModal: React.FC<SendAHintModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    receiverName: '',
    receiverEmail: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate luxury API delay
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 1800);
  };

  const inputClass = "w-full py-4 bg-transparent border-b border-stone-100 text-[13px] focus:outline-none focus:border-stone-400 transition-all duration-500 placeholder:text-stone-300 font-light tracking-widest text-stone-800";

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px] animate-in fade-in duration-700">
      <div className="bg-[#fcfcf9] w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-in zoom-in-95 duration-500 min-h-[600px]">
        
        {/* Global Close */}
        <button onClick={onClose} className="absolute top-8 right-8 z-30 text-stone-300 hover:text-black transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {isSent ? (
          /* Premium Post-Send Confirmation Screen */
          <div className="w-full flex flex-col items-center justify-center p-12 md:p-24 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="mb-12 relative">
               <svg className="w-20 h-20 text-stone-100 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 4V6M12 18V20M6 12H4M20 12H18M17.657 6.343L16.243 7.757M7.757 16.243L6.343 17.657M17.657 17.657L16.243 16.243M7.757 7.757L6.343 6.343" strokeWidth="0.5" strokeLinecap="round"/><circle cx="12" cy="12" r="3" strokeWidth="0.5"/></svg>
               <div className="absolute inset-0 flex items-center justify-center">
                 <svg className="w-6 h-6 text-stone-800 animate-in zoom-in duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" /></svg>
               </div>
            </div>
            
            <div className="max-w-md space-y-6">
              <h3 className="text-4xl font-light serif italic text-stone-800">Sent with Care</h3>
              <p className="text-[14px] text-stone-500 font-light leading-relaxed serif italic">
                A thoughtful gesture for a beautiful future. Your hint to {formData.receiverName || 'them'} has been shared.
              </p>
              
              <div className="pt-12 flex flex-col items-center space-y-8">
                <div className="h-px w-12 bg-stone-100" />
                
                <div className="flex flex-col md:flex-row gap-8">
                  <button 
                    onClick={onClose}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-black border-b border-black pb-2 hover:text-stone-400 hover:border-stone-400 transition-all"
                  >
                    Return to the Piece
                  </button>
                  <button 
                    onClick={() => {
                      onClose();
                      window.dispatchEvent(new CustomEvent('orea-open-concierge'));
                    }}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 hover:text-black transition-all"
                  >
                    Discuss Bespoke Sourcing
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Form Container */}
            <div className="w-full md:w-5/12 p-10 md:p-14 bg-white border-r border-stone-50 flex flex-col">
              <div className="mb-12">
                <h3 className="text-3xl font-light serif italic text-stone-800 mb-2">Send a Hint</h3>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400">Share your vision with someone special</p>
              </div>
              
              <form onSubmit={handleSend} className="flex-grow flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-1">
                      <p className="text-[8px] font-bold uppercase tracking-widest text-stone-400">From</p>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className={inputClass}
                        value={formData.senderName}
                        onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                        required
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email Address" 
                        className={inputClass}
                        value={formData.senderEmail}
                        onChange={(e) => setFormData({...formData, senderEmail: e.target.value})}
                        required
                      />
                    </div>

                    <div className="py-2 flex items-center">
                      <div className="h-px bg-stone-100 flex-grow" />
                      <div className="mx-4 text-[8px] font-bold uppercase tracking-widest text-stone-200">Recipient</div>
                      <div className="h-px bg-stone-100 flex-grow" />
                    </div>

                    <div className="space-y-1">
                      <p className="text-[8px] font-bold uppercase tracking-widest text-stone-400">To</p>
                      <input 
                        type="text" 
                        placeholder="Their Name" 
                        className={inputClass}
                        value={formData.receiverName}
                        onChange={(e) => setFormData({...formData, receiverName: e.target.value})}
                        required
                      />
                      <input 
                        type="email" 
                        placeholder="Their Email Address" 
                        className={inputClass}
                        value={formData.receiverEmail}
                        onChange={(e) => setFormData({...formData, receiverEmail: e.target.value})}
                        required
                      />
                    </div>

                    <div className="pt-4">
                      <textarea 
                        placeholder="Write a personal message (optional)..." 
                        rows={2}
                        className={`${inputClass} border-stone-50 focus:border-stone-200 resize-none italic serif`}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-6">
                  <button 
                    type="submit"
                    disabled={isSending}
                    className={`w-full py-6 text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-700 flex items-center justify-center bg-black text-white hover:bg-stone-800 ${isSending ? 'opacity-90' : 'opacity-100'}`}
                  >
                    {isSending ? (
                      <div className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      'Send Hint'
                    )}
                  </button>
                  
                  <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-stone-300 text-center">
                    We’ll only send this once, unless they choose to hear from us.
                  </div>
                </div>
              </form>
            </div>

            {/* Preview Container: "The Virtual Stationery" */}
            <div className="w-full md:w-7/12 bg-[#f9f9f7] p-10 md:p-20 flex items-center justify-center relative">
              <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                 <svg className="w-64 h-64 text-stone-800" viewBox="0 0 24 24" fill="none"><path d="M12 4V6M12 18V20M6 12H4M20 12H18M17.657 6.343L16.243 7.757M7.757 16.243L6.343 17.657M17.657 17.657L16.243 16.243M7.757 7.757L6.343 6.343" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1"/></svg>
              </div>

              <div className="w-full max-w-sm bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] p-12 relative flex flex-col items-center animate-in slide-in-from-right-12 duration-1000">
                <div className="mb-10 text-center">
                  <p className="text-[10px] font-light tracking-[0.5em] text-stone-900 mb-1">OREA</p>
                  <div className="w-4 h-[1px] bg-stone-100 mx-auto" />
                </div>

                <div className="space-y-8 text-center w-full">
                  <div className="space-y-4">
                    <p className="serif italic text-xl text-stone-800 truncate px-4">Dear {formData.receiverName || '[Recipient Name]'}</p>
                    <div className="px-2">
                      <p className="serif italic text-[14px] text-stone-500 leading-relaxed">
                        We thought you might like to see something that’s been on {formData.senderName || "[Your Name]"}’s mind lately.
                      </p>
                    </div>
                  </div>

                  <div className="relative group mx-auto w-fit py-2">
                    <div className="bg-[#fcfcf9] p-2 shadow-sm">
                      <img 
                        src={product.images[0]} 
                        alt="Hint Product" 
                        className="w-48 h-60 object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                      />
                    </div>
                  </div>

                  <div className="space-y-6 pt-2">
                    <div>
                      <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-800 mb-1">{product.name}</h4>
                    </div>
                    
                    {formData.message && (
                      <div className="pt-4 border-t border-stone-50">
                        <p className="serif italic text-[13px] text-stone-600 line-clamp-3">"{formData.message}"</p>
                      </div>
                    )}

                    <div className="pt-4">
                      <p className="serif italic text-[10px] text-stone-400 mb-2">With love,</p>
                      <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-900">
                        ORÉA
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#f9f9f7] border border-white shadow-inner flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-stone-300" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SendAHintModal;
