import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, Users, HeartHandshake, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { businessConfig } from '@/data/businessConfig';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustStats from '@/components/TrustStats';
import ReviewCards from '@/components/ReviewCards';

export const metadata: Metadata = {
  title: 'About Pest Stop Inc. | Trusted Milton Pest Specialists',
  description:
    'Learn about Pest Stop Inc., Milton\'s trusted pest control experts. Over 2,000+ jobs completed, eco-friendly treatments & 4.9-star rated service.',
  alternates: {
    canonical: 'https://peststopinc.com/about-us/',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/20 text-red-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Milton’s Established Pest Specialists</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              About Pest Stop Inc. Pest Control Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Delivering reliable, eco-friendly, and scientifically grounded pest control solutions to protect homes, businesses, and public health across Milton, Ontario.
            </p>
          </div>
        </div>
      </section>

      <TrustStats />

      {/* Mission & Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider">
                <span>Our Heritage & Purpose</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                Rooted in Milton, Committed to Environmental Responsibility
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                At Pest Stop Inc., our mission is simple: to protect homes and businesses by delivering expert, environmentally responsible pest control and humane wildlife services. Established right in Milton at <strong>#565, Milton, ON L9T 8L8</strong>, we have spent over three years actively serving local families throughout Hawthorne Village, Clarke, Coates, Harrison, and Old Milton.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We believe that modern pest management should never rely on indiscriminate blanket chemical spraying. Through Integrated Pest Management (IPM), our licensed structural technicians prioritize precise species identification, source habitat reduction, physical exclusion barriers, and low-toxicity Health Canada PMRA registered formulations that keep your children and pets safe.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Licensed Structural Exterminators</h4>
                    <p className="text-xs text-slate-600">Certified with the Ontario Ministry of the Environment, Conservation and Parks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">100% Humane Wildlife Eviction</h4>
                    <p className="text-xs text-slate-600">Strict adherence to Ontario Ministry of Natural Resources cruelty-free guidelines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Recognized Industry Standing</h4>
                    <p className="text-xs text-slate-600">Selected as one of the Top 3 Pest Control Services in Milton, ON on ThreeBestRated with an authentic 4.9/5 score.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative h-96 w-full">
                  <Image
                    src="/images/wasp-removal-action.jpg"
                    alt="Pest Stop technician Arham removing wasp nest in protective gear in Milton"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-slate-900 text-white">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Field Leadership</p>
                  <p className="text-sm font-bold mt-1">Technician Arham & Senior Field Specialists</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Praised across verified customer reviews for rapid 1-hour emergency response, transparent explanations, and compassionate customer service.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ReviewCards />
    </div>
  );
}
