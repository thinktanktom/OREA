
import React from 'react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Exhaustive conversion table for AU range F to Z
  const sizes = [
    { au: 'F', us: '3', eu: '44', mm: '14.1' },
    { au: 'G', us: '3.5', eu: '45', mm: '14.5' },
    { au: 'H', us: '4', eu: '46.5', mm: '14.9' },
    { au: 'I', us: '4.5', eu: '48', mm: '15.3' },
    { au: 'J', us: '5', eu: '49', mm: '15.7' },
    { au: 'K', us: '5.5', eu: '50', mm: '16.1' },
    { au: 'L', us: '6', eu: '51.5', mm: '16.5' },
    { au: 'M', us: '6.5', eu: '53', mm: '16.9' },
    { au: 'N', us: '7', eu: '54', mm: '17.3' },
    { au: 'O', us: '7.5', eu: '55.5', mm: '17.7' },
    { au: 'P', us: '8', eu: '56.5', mm: '18.1' },
    { au: 'Q', us: '8.5', eu: '58', mm: '18.5' },
    { au: 'R', us: '9', eu: '59.5', mm: '19.0' },
    { au: 'S', us: '9.5', eu: '61', mm: '19.4' },
    { au: 'T', us: '10', eu: '62', mm: '19.8' },
    { au: 'U', us: '10.5', eu: '63', mm: '20.2' },
    { au: 'V', us: '11', eu: '64.5', mm: '20.6' },
    { au: 'W', us: '11.5', eu: '66', mm: '21.0' },
    { au: 'X', us: '12', eu: '67.5', mm: '21.4' },
    { au: 'Y', us: '12.25', eu: '68', mm: '21.6' },
    { au: 'Z', us: '12.5', eu: '69', mm: '21.8' },
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-500">
      <div className="bg-[#fcfcf9] w-full max-w-2xl p-8 md:p-16 rounded-sm shadow-2xl relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-10 right-10 text-stone-300 hover:text-black transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-light serif italic text-black">Size Guide</h3>
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">Finding Your Perfect Fit</p>
          </div>

          {/* Conversion Table */}
          <div className="space-y-8">
            <div className="flex justify-between items-baseline border-b border-stone-200 pb-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">International Conversion</h4>
              <span className="text-[10px] text-stone-400 italic serif">AU / NZ / UK Standards (F-Z)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] tracking-widest min-w-[400px]">
                <thead>
                  <tr className="text-stone-400 border-b border-stone-100">
                    <th className="py-6 font-bold uppercase text-[8px] tracking-[0.3em]">AU / NZ / UK</th>
                    <th className="py-6 font-bold uppercase text-[8px] tracking-[0.3em]">US / CAN</th>
                    <th className="py-6 font-bold uppercase text-[8px] tracking-[0.3em]">EU</th>
                    <th className="py-6 font-bold uppercase text-[8px] tracking-[0.3em] text-right">INNER DIAMETER</th>
                  </tr>
                </thead>
                <tbody className="text-stone-700">
                  {sizes.map((s, idx) => (
                    <tr key={idx} className="border-b border-stone-50 hover:bg-stone-50/50 transition-colors group">
                      <td className="py-4 font-medium text-black">{s.au}</td>
                      <td className="py-4 font-light text-stone-500">{s.us}</td>
                      <td className="py-4 font-light text-stone-500">{s.eu}</td>
                      <td className="py-4 font-light text-right text-stone-400 italic serif group-hover:text-black transition-colors">{s.mm}mm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sizing Tips - Grid matching reference image */}
          <div className="pt-12 border-t border-stone-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-[12px] text-stone-600 font-light leading-relaxed">
              <div className="space-y-3">
                <p className="font-bold text-black uppercase tracking-[0.1em] text-[10px]">Temperature Matters</p>
                <p>Ensure you measure your finger at room temperature. Fingers tend to shrink in the cold and swell in the heat.</p>
              </div>
              <div className="space-y-3">
                <p className="font-bold text-black uppercase tracking-[0.1em] text-[10px]">Band Width</p>
                <p>Wider bands fit more tightly than narrow ones. For wider bands, consider selecting a half size larger.</p>
              </div>
              <div className="space-y-3">
                <p className="font-bold text-black uppercase tracking-[0.1em] text-[10px]">Between Sizes</p>
                <p>If your measurement falls between two sizes, we recommend selecting the larger size for a comfortable fit.</p>
              </div>
              <div className="space-y-3">
                <p className="font-bold text-black uppercase tracking-[0.1em] text-[10px]">Expert Advice</p>
                <p>If in doubt, get in touch with us, or request a complimentary ORÉA ring sizer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;
