'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Phone, AlertCircle, ShieldCheck } from 'lucide-react';
import { businessConfig } from '@/data/businessConfig';

export default function QuoteForm({
  compact = false,
  presetService = "",
}: {
  compact?: boolean;
  presetService?: string;
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: presetService || 'General Pest Control',
    propertyType: 'Residential Home',
    urgent: false,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous client-side feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-emerald-200 shadow-card">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received!</h3>
        <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
          Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our Milton dispatch team has received your details and will call you at <span className="font-semibold text-slate-800">{formData.phone}</span> within 15–30 minutes to confirm service and pricing.
        </p>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 mb-6">
          <p className="font-semibold text-slate-700 mb-1">Need Immediate Same-Day Help?</p>
          <p>Call our dispatch technician directly right now:</p>
          <a
            href={businessConfig.phone.telLink}
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-brand-red text-white font-bold rounded-lg hover:bg-brand-red-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{businessConfig.phone.formatted}</span>
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs text-slate-500 underline hover:text-slate-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-8">
      {!compact && (
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Fast Response • Free Inspection Quotes</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900">
            Request a Free Quote & Inspection
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            Fill out this quick form or call <a href={businessConfig.phone.telLink} className="text-brand-red font-bold hover:underline">{businessConfig.phone.formatted}</a> for immediate assistance.
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Full Name <span className="text-brand-red">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Phone Number <span className="text-brand-red">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="(437) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Property Type
            </label>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red bg-white"
            >
              <option value="Residential Home">Residential Home (Detached / Semi)</option>
              <option value="Townhouse / Condo">Townhouse / Condo</option>
              <option value="Commercial Facility">Commercial / Industrial Facility</option>
              <option value="Restaurant / Food Service">Restaurant / Food Service</option>
              <option value="Property Management">Property Management Portfolio</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Service Required <span className="text-brand-red">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red bg-white"
          >
            <option value="General Pest Control">General Pest Control</option>
            <option value="Wasp & Hornet Removal">Wasp & Hornet Removal (Same-Day)</option>
            <option value="Bed Bug Treatment">Bed Bug Treatment</option>
            <option value="Ant Control (Carpenter / Pharaoh)">Ant Control (Carpenter / Pharaoh)</option>
            <option value="Cockroach Control">Cockroach Control</option>
            <option value="Mouse & Mice Control">Mouse & Mice Control</option>
            <option value="Rat Control">Rat Control</option>
            <option value="Raccoon Removal">Raccoon Removal</option>
            <option value="Squirrel Removal">Squirrel Removal</option>
            <option value="Bat Removal & Exclusion">Bat Removal & Exclusion</option>
            <option value="Skunk Removal">Skunk Removal</option>
            <option value="Bird & Goose Control">Bird & Goose Control</option>
            <option value="Pest & Wildlife Proofing">Pest & Wildlife Proofing</option>
            <option value="Commercial Pest Control">Commercial Pest Control</option>
            <option value="Other / Unsure">Other / Need Professional Inspection</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Describe the Issue (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Where are you noticing activity? (e.g. kitchen baseboards, roof eaves, scratching in attic at night)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red"
          />
        </div>

        <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
          <input
            type="checkbox"
            id="urgent-check"
            checked={formData.urgent}
            onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
            className="w-4 h-4 text-brand-red rounded border-slate-300 focus:ring-brand-red"
          />
          <label htmlFor="urgent-check" className="text-xs font-medium text-brand-red cursor-pointer">
            <span className="font-bold">Urgent / Emergency:</span> I need same-day emergency inspection/treatment.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Transmitting Request...</span>
          ) : (
            <>
              <span>Get My Free Quote</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-500">
          🔒 Your information is confidential. Never shared with third parties. No high-pressure sales.
        </p>
      </div>
    </form>
  );
}
