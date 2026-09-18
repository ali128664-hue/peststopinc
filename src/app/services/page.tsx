import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Bug, AlertTriangle, Home as HomeIcon, Building2, CheckCircle2, Phone } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { businessConfig } from '@/data/businessConfig';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustStats from '@/components/TrustStats';
import FaqAccordion from '@/components/FaqAccordion';
import { masterFaqs } from '@/data/faqsData';

export const metadata: Metadata = {
  title: 'Pest & Wildlife Control Services Milton | Pest Stop Inc.',
  description:
    'Full-service pest control, rodent extermination, wildlife removal & pest proofing in Milton, Ontario. Eco-friendly & guaranteed. Call 437-922-7700.',
  alternates: {
    canonical: 'https://peststopinc.com/services/',
  },
};

export default function ServicesPage() {
  const categories = [
    {
      name: 'Pest Control',
      icon: Bug,
      desc: 'Eliminating crawling and flying insect infestations with precision non-repellent formulations and thermal steam.',
      services: servicesData.filter((s) => s.category === 'Pest Control'),
    },
    {
      name: 'Rodent Control',
      icon: AlertTriangle,
      desc: 'Targeted trapping and permanent architectural sealing for house mice, deer mice, and invasive rats.',
      services: servicesData.filter((s) => s.category === 'Rodent Control'),
    },
    {
      name: 'Wildlife Removal',
      icon: HomeIcon,
      desc: '100% humane eviction of raccoons, squirrels, bats, and skunks using one-way doors and baby reunification.',
      services: servicesData.filter((s) => s.category === 'Wildlife Removal'),
    },
    {
      name: 'Prevention & Commercial',
      icon: Building2,
      desc: 'Permanent structural pest proofing for residential homes and audit-ready commercial compliance programs.',
      services: servicesData.filter((s) => s.category === 'Prevention & Commercial'),
    },
  ];

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-red-300 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Comprehensive Milton Service Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Pest & Wildlife Control Services in Milton, Ontario
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              From seasonal insect outbreaks to urgent attic wildlife evictions, Pest Stop Inc. delivers science-backed, eco-responsible pest eradication with a 100% written service warranty.
            </p>
          </div>
        </div>
      </section>

      <TrustStats />

      {/* Categorized Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          {categories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <div key={catIdx} id={cat.name.toLowerCase().replace(/\s+/g, '-')}>
                <div className="border-b border-slate-200 pb-4 mb-8 flex items-baseline justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                        {cat.name} Solutions
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{cat.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.services.map((service) => (
                    <div
                      key={service.slug}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-44 w-full bg-slate-50 rounded-xl overflow-hidden mb-4">
                          <Image
                            src={service.pestImage || service.primaryImage}
                            alt={service.name}
                            fill
                            className="object-contain p-3"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                          {service.shortDesc}
                        </p>
                      </div>

                      <Link
                        href={`/${service.slug}/`}
                        className="inline-flex items-center justify-between text-xs font-bold text-brand-red hover:text-brand-red-dark py-2.5 px-3 rounded-lg bg-red-50/60 hover:bg-red-50 transition-colors"
                      >
                        <span>View Service Details & Pricing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FaqAccordion faqs={masterFaqs} />
    </div>
  );
}
