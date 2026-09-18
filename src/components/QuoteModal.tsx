'use client';

import { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import QuoteForm from './QuoteForm';
import { businessConfig } from '@/data/businessConfig';

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-quote-modal', handleOpen);
    return () => window.removeEventListener('open-quote-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-2 sm:p-4">
          <QuoteForm presetService="" />
        </div>
      </div>
    </div>
  );
}
