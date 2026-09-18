import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '@/data/businessConfig';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Pest Stop Inc. | Free Pest Quote | 437-922-7700',
  description:
    'Contact Pest Stop Inc. in Milton, ON for emergency pest control & free inspection quotes. Call +1 437-922-7700 or request your free quote online now.',
  alternates: {
    canonical: 'https://peststopinc.com/contact-us/',
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/20 text-red-300 text-xs font-semibold">
              <Phone className="w-3.5 h-3.5" />
              <span>Milton Central Dispatch</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Contact Pest Stop Inc. Pest Control Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Get in touch with our certified Milton team today. We provide upfront flat-rate quotes, same-day emergency dispatch, and tailored pest advice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
                <h2 className="text-xl font-display font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Confirmed Business Information
                </h2>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Headquarters Address:</strong>
                      <span>Pest Stop Inc. Pest Control Services</span><br />
                      <span>{businessConfig.address.fullFormatted}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Telephone / Dispatch:</strong>
                      <a href={businessConfig.phone.telLink} className="text-brand-red font-bold text-base hover:underline">
                        {businessConfig.phone.formatted}
                      </a>
                      <span className="block text-xs text-slate-500">Fast same-day response in Milton</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Direct Email:</strong>
                      <a href={`mailto:${businessConfig.email}`} className="hover:text-brand-red break-all font-medium text-slate-800">
                        {businessConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Operating Hours:</strong>
                      <span>Monday – Sunday: 7:00 AM – 10:00 PM</span><br />
                      <span className="text-xs text-emerald-600 font-semibold">24/7 Emergency Dispatch Available</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Primary Service Territory:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
                    {businessConfig.primaryAreas.map((area, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-100 font-medium">
                        {area}, ON
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
