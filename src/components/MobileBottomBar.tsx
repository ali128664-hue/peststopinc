'use client';

import { Phone, Calendar } from 'lucide-react';
import { businessConfig } from '@/data/businessConfig';

export default function MobileBottomBar() {
  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent('open-quote-modal'));
  };

  return (
    <aside aria-label="Quick Action Bar" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        <a
          href={businessConfig.phone.telLink}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-brand-red text-white font-bold rounded-xl shadow-sm text-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>

        <button
          type="button"
          onClick={openQuoteModal}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-brand-navy text-white font-bold rounded-xl shadow-sm text-sm active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Free Quote</span>
        </button>
      </div>
    </aside>
  );
}
