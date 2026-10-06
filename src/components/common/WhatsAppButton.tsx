import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { schoolConfig } from '../../config/school';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const cleanNumber = schoolConfig.contact.whatsapp.replace(/\D/g, '');
  const defaultMessage = encodeURIComponent(
    `Hello Glowing Sun Kids School! I would like to enquire about admissions for my child.`
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end gap-3 select-none">
      {/* Speech Bubble / Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold px-3.5 py-2.5 rounded-2xl shadow-xl border border-emerald-100 animate-bounce duration-1000">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Chat with us on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1 transition"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Pulsing Aura */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />

        {/* Mobile quick badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-amber-950">
          1
        </span>
      </a>
    </div>
  );
};
