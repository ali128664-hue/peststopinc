import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  MapPin, 
  ArrowRight,
  HelpCircle,
  Award
} from 'lucide-react';
import { servicesData, ServiceDetail } from '@/data/servicesData';
import { businessConfig } from '@/data/businessConfig';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';
import { ServiceSchema, FaqSchema } from '@/components/SchemaJsonLd';

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    serviceSlug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = servicesData.find((s) => s.slug === serviceSlug);

  if (!service) {
    return {
      title: 'Service Not Found | Pest Stop Inc.',
    };
  }

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `https://peststopinc.com/${service.slug}/`,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `https://peststopinc.com/${service.slug}/`,
      type: 'article',
      images: [
        {
          url: service.pestImage || service.primaryImage,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  const service = servicesData.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  const related = servicesData.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <div className="flex flex-col">
      <ServiceSchema
        name={service.name}
        description={service.metaDescription}
        url={`https://peststopinc.com/${service.slug}/`}
      />
      <FaqSchema faqs={service.faqs} />

      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services/' },
          { label: service.name },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-navy to-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-red-300 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-brand-red" />
                <span>MILTON, ON • DEDICATED SPECIALIST SERVICE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                {service.h1}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {service.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={businessConfig.phone.telLink}
                  className="px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-xl text-sm shadow-md transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {businessConfig.phone.formatted}</span>
                </a>
                <a
                  href="#quote-section"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm border border-white/20 transition-colors"
                >
                  Request Inspection Quote
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-800 p-6 flex items-center justify-center min-h-[320px]">
                <Image
                  src={service.pestImage || service.primaryImage}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="object-contain max-h-72 w-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Overview & Problem Deep Dive */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Introduction */}
              <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                  Comprehensive Overview & Identification
                </h2>
                {service.fullOverview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Problem Overview */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-brand-red" />
                  <span>Why This Issue Occurs in Milton Properties</span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.problemOverview}
                </p>
              </div>

              {/* Common Signs */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-slate-900">
                  Common Signs of Infestation
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.commonSigns.map((sign, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 text-brand-red font-bold text-sm mb-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{sign.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{sign.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Potential Risks & Hazards */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-slate-900">
                  Potential Risks & Structural Hazards
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.risksAndHazards.map((risk, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-red-50/50 border border-red-100">
                      <h4 className="text-sm font-bold text-red-950 mb-1.5">{risk.title}</h4>
                      <p className="text-xs text-red-900/80 leading-relaxed">{risk.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Process */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-slate-900">
                  Our Step-by-Step Treatment & Exclusion Process
                </h3>
                <div className="space-y-4">
                  {service.treatmentProcess.map((step, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                      <span className="w-9 h-9 rounded-lg bg-brand-red text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 mb-1">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Homeowner Prevention Tips */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-display font-bold text-slate-900">
                  Proactive Homeowner Prevention Checklist
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  {service.preventionTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Expect */}
              <div className="p-6 rounded-2xl bg-brand-navy text-white space-y-3">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-red" />
                  <span>What Customers Can Expect</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {service.whatToExpect}
                </p>
              </div>

              {/* Local Milton Context */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-red" />
                  <span>Local Milton Environmental & Housing Context</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.localMiltonContext}
                </p>
              </div>

            </div>

            {/* Sidebar with Quick Quote Form */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6" id="quote-section">
                <QuoteForm compact presetService={service.name} />

                {/* Direct Callout Box */}
                <div className="p-6 bg-brand-navy text-white rounded-2xl border border-slate-800 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Speak with Senior Tech</span>
                    <a href={businessConfig.phone.telLink} className="text-xl font-extrabold text-white hover:text-brand-red">
                      {businessConfig.phone.formatted}
                    </a>
                  </div>
                  <p className="text-xs text-slate-300">
                    Open Mon–Sun 7am–10pm with same-day emergency dispatch across Milton.
                  </p>
                </div>

                {/* Service Guarantees */}
                <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
                  <span className="font-bold text-slate-900 block text-sm">Pest Stop Service Guarantee:</span>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /><span>100% Written Warranty</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /><span>Licensed Ontario Exterminators</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /><span>Health Canada PMRA Compliant</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /><span>Top 3 Rated in Milton (4.9 Stars)</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <FaqAccordion
        faqs={service.faqs}
        title={`${service.shortName} FAQs`}
        subtitle={`Common questions about ${service.name.toLowerCase()} in Milton homes and commercial facilities.`}
      />

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">
              Related Pest & Wildlife Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <div key={rel.slug} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{rel.name}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2 mb-4">{rel.shortDesc}</p>
                  </div>
                  <Link href={`/${rel.slug}/`} className="inline-flex items-center justify-between text-xs font-bold text-brand-red hover:underline">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
