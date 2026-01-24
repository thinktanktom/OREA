
import React, { useState } from 'react';
import { Product } from '../types';

interface GiftReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const GiftReminderModal: React.FC<GiftReminderModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    recipient: '',
    occasion: 'Anniversary',
    date: '',
    leadTime: '45'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate luxury scheduling service
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
        onClose();
      }, 2500);
    }, 1800);
  };

  const inputClass = "w-full py-4 bg-transparent border-b border-stone-100 text-[13px] focus:outline-none focus:border-stone-400 transition-all duration-500 placeholder:text-stone-300 font-light tracking-widest text-stone-800";
  const labelClass = "text-[8px] font-bold uppercase tracking-widest text-stone-400 block mb-1";

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px] animate-in fade-in duration-700">
      <div className="bg-[#fcfcf9] w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-in zoom-in-95 duration-500">
        
        {/* Global Close */}
        <button onClick={onClose} className="absolute top-8 right-8 z-30 text-stone-300 hover:text-black transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Form Container */}
        <div className="w-full md:w-1/2 p-10 md:p-14 bg-white border-r border-stone-50 flex flex-col">
          <div className="mb-10">
            <h3 className="text-3xl font-light serif italic text-stone-800 mb-2">Save for Occasion</h3>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400">A considered reminder for a meaningful moment</p>
          </div>
          
          <form onSubmit={handleSchedule} className="flex-grow flex flex-col justify-between">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>Your details</label>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className={inputClass}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className={inputClass}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Occasion</label>
                      <select 
                        className={inputClass}
                        value={formData.occasion}
                        onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                      >
                        <option>Anniversary</option>
                        <option>Birthday</option>
                        <option>Proposal</option>
                        <option>Holiday</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Occasion date</label>
                      <input 
                        type="date" 
                        className={inputClass}
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Choose when you’d like to be reminded.</label>
                    <div className="flex space-x-3 pt-2">
                      {['30', '45', '60'].map(days => (
                        <button
                          key={days}
                          type="button"
                          onClick={() => setFormData({...formData, leadTime: days})}
                          className={`flex-1 py-3 text-[9px] font-bold uppercase tracking-widest border transition-all ${
                            formData.leadTime === days ? 'bg-black text-white border-black shadow-sm' : 'border-stone-100 text-stone-400 hover:border-stone-200'
                          }`}
                        >
                          {days} Days Prior
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <button 
                type="submit"
                disabled={isSaving || isSaved}
                className={`w-full py-6 text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-700 flex items-center justify-center ${
                  isSaved ? 'bg-stone-900 text-white' : 'bg-black text-white hover:bg-stone-800'
                }`}
              >
                {isSaving ? (
                  <div className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  isSaved ? 'Reminder Scheduled' : 'Schedule Reminder'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Content Side: Stationery Preview */}
        <div className="w-full md:w-1/2 bg-[#f9f9f7] p-10 md:p-16 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-xs bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-10 relative flex flex-col items-center space-y-8 animate-in slide-in-from-right-8 duration-1000">
            {/* OREA Logo */}
            <div className="text-[10px] font-light tracking-[0.5em] text-stone-900">OREA</div>
            
            <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="space-y-4">
              <p className="serif italic text-[14px] text-stone-500 leading-relaxed px-2">
                We’ll gently remind you {formData.leadTime} days before your upcoming {formData.occasion.toLowerCase()} - so you have time to prepare.
              </p>
              
              <div className="h-px bg-stone-50 w-full" />
              
              <div className="space-y-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800">{product.name}</p>
                <div className="relative group">
                  <div className="bg-[#fcfcf9] p-2">
                    <img 
                      src={product.images[0]} 
                      alt="Product thumbnail" 
                      className="w-24 h-32 object-cover mx-auto grayscale opacity-40 group-hover:opacity-60 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-stone-300 pt-4">
              With Love, ORÉA
            </div>
            
            <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center -translate-y-1/2 translate-x-1/2">
                <div className="w-px h-12 bg-stone-100 rotate-45 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftReminderModal;
