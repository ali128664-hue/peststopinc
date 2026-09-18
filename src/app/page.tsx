'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  Flame, 
  Bug, 
  Home as HomeIcon, 
  Building2, 
  AlertTriangle, 
  Sparkles, 
  FileText,
  Calendar
} from 'lucide-react';
import { businessConfig } from '@/data/businessConfig';
import { masterFaqs } from '@/data/faqsData';
import TrustStats from '@/components/TrustStats';
import PestSelector from '@/components/PestSelector';
import ReviewCards from '@/components/ReviewCards';
import FaqAccordion from '@/components/FaqAccordion';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import QuoteForm from '@/components/QuoteForm';
import { FaqSchema } from '@/components/SchemaJsonLd';

export default function HomePage() {
  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent('open-quote-modal'));
  };

  return (
    <div className="flex flex-col">
      <FaqSchema faqs={masterFaqs} />

      {/* =========================================================================
          SECTION 1: HERO SECTION
      ========================================================================= */}
      <section className="relative bg-gradient-to-b from-slate-950 via-brand-navy to-slate-900 text-white pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        {/* Subtle modern background texture / ambient glows */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#DE1B26_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-red/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-center">
            
            {/* Left Column: Core Value Proposition & Headings */}
            <div className="lg:col-span-7 space-y-6">
              {/* Friendly Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur-md text-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-300 font-bold">MILTON, ON</span>
                <span className="text-slate-400">•</span>
                <span>Prompt Local Dispatch Today</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-black tracking-tight text-white leading-[1.12]">
                Fast, Friendly Pest Control in{' '}
                <span className="bg-gradient-to-r from-red-400 via-rose-300 to-amber-200 bg-clip-text text-transparent">
                  Milton, Ontario
                </span>
              </h1>

              {/* Subtitle / Friendly Narrative */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Nobody enjoys unwanted critters invading their home. Pest Stop Inc. provides gentle, family-safe, and pet-friendly pest and wildlife solutions across Milton. From ants and bed bugs to attic raccoons and mice, our certified crew brings quick, guaranteed relief without pushy sales.
              </p>

              {/* Quick Pest Selector Chips */}
              <div className="pt-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <span>Common Issues in Milton:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: '🐜 Ants', href: '/ant-control-milton/' },
                    { label: '🐝 Wasps', href: '/wasp-removal-milton/' },
                    { label: '🐭 Mice', href: '/mouse-control-milton/' },
                    { label: '🛏️ Bed Bugs', href: '/bed-bug-control-milton/' },
                    { label: '🦝 Raccoons', href: '/raccoon-removal-milton/' },
                    { label: '🪳 Cockroaches', href: '/cockroach-control-milton/' },
                  ].map((chip, idx) => (
                    <Link
                      key={idx}
                      href={chip.href}
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-brand-red text-xs font-semibold text-white border border-white/15 hover:border-brand-red transition-all hover:scale-105 active:scale-95 shadow-sm"
                    >
                      {chip.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trust Micro-Bullets */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-base">🐾</span>
                  <span className="font-medium">100% Pet & Kid Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">⚡</span>
                  <span className="font-medium">Same-Day Milton Arrival</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🤝</span>
                  <span className="font-medium">Zero-Drama Guarantee</span>
                </div>
              </div>

              {/* CTA Action Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-black rounded-full text-base shadow-lg hover:shadow-glow-red hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>GET MY FREE QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={businessConfig.phone.telLink}
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-full text-base border border-white/20 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>CALL (437) 922-7700</span>
                </a>
              </div>

              {/* Friendly Verification Subtext */}
              <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
                <div className="flex text-amber-400 text-xs">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <span>
                  Rated <strong>4.9/5</strong> by <strong>2,000+</strong> Milton & Halton families
                </span>
              </div>
            </div>

            {/* Right Column: Genuine Technician Image & Floating Trust Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 bg-slate-900 group">
                <div className="relative h-[400px] sm:h-[460px] w-full">
                  <Image
                    src="/images/technician-action.jpg"
                    alt="Pest Stop Inc. Certified Technician applying eco-friendly perimeter spray in Milton"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                {/* Floating Bottom Card: Friendly Team Highlight */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white shadow-xl">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold text-slate-100">Milton Lead Tech: Arham</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                      Available Today
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 italic">
                    &ldquo;We treat every Milton home with the same care and respect as our own family&rsquo;s home.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUST & BENEFITS STATS BAR
      ========================================================================= */}
      <TrustStats />

      {/* =========================================================================
          SECTION 3: INTERACTIVE PEST SELECTOR ("WHAT'S BUGGING YOU?")
      ========================================================================= */}
      <PestSelector />

      {/* =========================================================================
          SECTION 4: INTRODUCTION TO PEST STOP INC.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 content-auto" id="about-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Image / Service Vehicle */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-sm hover:shadow-friendly transition-all duration-300 border border-slate-200 bg-white group">
                <div className="relative h-72 sm:h-96 w-full bg-slate-100">
                  <Image
                    src="/images/service-truck.jpg"
                    alt="Pest Stop Inc. mobile pest control service truck in Milton, ON"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold shadow-sm">
                      🚐 Mobile Milton Fleet
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-white border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Ready for Same-Day Neighborhood Dispatch</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Equipped with thermal detection, high-reach ladder gear, and low-toxicity botanical solutions for quiet, discreet visits.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Friendly, Local & Accountable</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-snug">
                Protecting Milton Families With Science, Care & Respect
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a mission to deliver gentle, effective, and environmentally conscious pest management, Pest Stop Inc. has grown into one of Milton&rsquo;s most trusted local service providers. Having helped over 2,000 Milton families and local businesses across Halton Region, we combine deep knowledge of Ontario wildlife and insects with compassionate, friendly customer service.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you live in a new build in Ford, a family home in Hawthorne Village, or an established property in Old Milton, our certified technicians find how pests get in and fix the root problem so you can enjoy your home in complete peace.
              </p>

              {/* 4 Friendly Brand Pillars (Bento Style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                    <span className="text-base">🐾</span>
                    <h4>Pet & Family Safe</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Health Canada PMRA approved botanical and low-impact formulas safe for curious pets, toddlers, and indoor plants.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-1">
                    <span className="text-base">🔍</span>
                    <h4>No-Rush Thorough Inspection</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We check foundation weep vents, roofline soffits, and interior hot-spots to stop the root infestation cause.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-1">
                    <span className="text-base">🤝</span>
                    <h4>Honest Upfront Quotes</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clear, transparent pricing before any work starts. No surprise surcharges or high-pressure upselling ever.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-rose-300 shadow-sm hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 text-brand-red font-bold text-sm mb-1">
                    <span className="text-base">🛡️</span>
                    <h4>100% Written Warranty</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If pests return during your warranty period, our Milton crew returns and re-treats free of charge until resolved.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: COMPLETE PEST & WILDLIFE SOLUTIONS (MAIN SERVICES)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white content-auto" id="main-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span>Tailored Solutions For Every Situation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
              Friendly, Comprehensive Home Protection
            </h2>
            <p className="mt-3.5 text-slate-600 text-base sm:text-lg">
              Explore our core service divisions designed specifically for family homes, townhouses, commercial spaces, and rural properties across Milton.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* Card 1: Pest Control */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-friendly hover:-translate-y-1 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-brand-red flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Bug className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-brand-red text-[10px] font-bold">
                    🌱 Pet-Safe
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Pest Control</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Eradicate carpenter ants, bed bugs, cockroaches, wasps, spiders, ticks, and carpet beetles with targeted eco-safe formulations.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" /><Link href="/ant-control-milton/" className="hover:text-brand-red font-medium">Carpenter & Pharaoh Ants</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" /><Link href="/bed-bug-control-milton/" className="hover:text-brand-red font-medium">Heat & Steam Bed Bug Care</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" /><Link href="/wasp-removal-milton/" className="hover:text-brand-red font-medium">Same-Day Wasp Nest Removal</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" /><Link href="/cockroach-control-milton/" className="hover:text-brand-red font-medium">German Roach Cleanout</Link></li>
                </ul>
              </div>
              <Link
                href="/pest-control-milton/"
                className="inline-flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-brand-red py-2.5 px-3 rounded-xl bg-white border border-slate-200 group-hover:border-red-200 transition-all shadow-sm"
              >
                <span>View Pest Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 2: Rodent Control */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-400/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-friendly hover:-translate-y-1 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-6 h-6 text-blue-700" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                    ⚡ Fast Relief
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Rodent Control</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Eliminate destructive house mice, deer mice, and rats nesting in attics, wall cavities, and basements with guaranteed exclusion.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" /><Link href="/mouse-control-milton/" className="hover:text-brand-red font-medium">Mouse & Mice Extermination</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" /><Link href="/rat-control-milton/" className="hover:text-brand-red font-medium">Norway & Roof Rat Control</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" /><Link href="/pest-proofing-milton/" className="hover:text-brand-red font-medium">Weep Hole & Foundation Sealing</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" /><span className="font-medium">Tamper-Proof Child/Pet Boxes</span></li>
                </ul>
              </div>
              <Link
                href="/rodent-control-milton/"
                className="inline-flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-brand-red py-2.5 px-3 rounded-xl bg-white border border-slate-200 group-hover:border-blue-200 transition-all shadow-sm"
              >
                <span>View Rodent Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 3: Wildlife Removal */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-friendly hover:-translate-y-1 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <HomeIcon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    🐾 100% Humane
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Wildlife Removal</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Ethical, 100% humane eviction of raccoons, squirrels, bats, and skunks using one-way doors and baby animal reunification.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" /><Link href="/raccoon-removal-milton/" className="hover:text-brand-red font-medium">Raccoon Attic Eviction</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" /><Link href="/squirrel-removal-milton/" className="hover:text-brand-red font-medium">Squirrel Roofline Removal</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" /><Link href="/bat-removal-milton/" className="hover:text-brand-red font-medium">Humane Bat Colony Exclusion</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" /><Link href="/skunk-removal-milton/" className="hover:text-brand-red font-medium">Skunk Deck L-Footer Mesh</Link></li>
                </ul>
              </div>
              <Link
                href="/wildlife-removal-milton/"
                className="inline-flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-brand-red py-2.5 px-3 rounded-xl bg-white border border-slate-200 group-hover:border-emerald-200 transition-all shadow-sm"
              >
                <span>View Wildlife Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 4: Prevention & Commercial */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-friendly hover:-translate-y-1 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-200 text-slate-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[10px] font-bold">
                    🛡️ Guaranteed
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Commercial & Proofing</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Permanent one-time structural pest proofing and audit-ready commercial pest management for restaurants and warehouses.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0" /><Link href="/pest-proofing-milton/" className="hover:text-brand-red font-medium">16-Gauge Galvanized Roof Caps</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0" /><Link href="/commercial-pest-control-milton/" className="hover:text-brand-red font-medium">Restaurant & HACCP Compliance</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0" /><Link href="/bird-control-milton/" className="hover:text-brand-red font-medium">Canada Goose & Bird Exclusion</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0" /><span className="font-medium">Discreet After-Hours Service</span></li>
                </ul>
              </div>
              <Link
                href="/commercial-pest-control-milton/"
                className="inline-flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-brand-red py-2.5 px-3 rounded-xl bg-white border border-slate-200 transition-all shadow-sm"
              >
                <span>View Commercial Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: RODENT CONTROL SPOTLIGHT (MILTON MICE & RATS)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden content-auto" id="rodent-spotlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-500/30">
                <AlertTriangle className="w-3.5 h-3.5 text-brand-red" />
                <span>Seasonal Protection Alert</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white leading-tight">
                Stop Mice & Rats Before They Damage Your Milton Home
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As night temperatures plummet across Milton, hundreds of field mice and rats migrate from surrounding Niagara Escarpment farmland directly into residential neighbourhoods. A juvenile mouse can squeeze through a gap as small as a dime, slipping through brick weep holes, AC line penetrations, and garage door corners into your warm attic.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Flame className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Attic Fire Hazards from Chewed Wires</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Rodents possess constantly growing teeth and gnaw through electrical wire coating, creating severe concealed fire risks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Guaranteed Permanent Structural Proofing</h4>
                    <p className="text-xs text-slate-300 mt-0.5">We don&apos;t just set traps; we seal exterior weep holes with stainless steel inserts and reinforce pipe collars with chew-proof mesh.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/mouse-control-milton/"
                  className="px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-105"
                >
                  Mouse Control Details
                </Link>
                <Link
                  href="/rat-control-milton/"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-xs sm:text-sm border border-white/20 transition-all hover:scale-105"
                >
                  Rat Control Details
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 bg-slate-800/90 group">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/images/pests/norway-rat.png"
                    alt="Rodent control and rat exclusion in Milton, Ontario"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    loading="lazy"
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-slate-950/80 border-t border-white/10 text-center">
                  <p className="text-xs font-semibold text-slate-300">
                    Norway Rats & Deer Mice require specialized sanitary handling to prevent contamination.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WILDLIFE REMOVAL SPOTLIGHT (HUMANE EVICTION)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white content-auto" id="wildlife-spotlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-sm hover:shadow-friendly transition-all border border-slate-200 bg-slate-50 group">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/images/pests/squirrel-roof.jpg"
                    alt="Squirrel chewing roof fascia board in Milton, ON"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase text-brand-red tracking-wider block">Real Wildlife Challenge</span>
                  <p className="text-xs text-slate-700 font-semibold mt-0.5">
                    Squirrels and raccoons exploit soft roof-soffit intersections to enter Milton attics.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                <HomeIcon className="w-3.5 h-3.5" />
                <span>100% Humane • MNRF Compliant</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                Humane Wildlife Eviction & Roofline Protection
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Raccoons and squirrels denning in your attic trample expensive insulation, tear apart heating ducts, and rip open roof shingles. Pest Stop Inc. enforces humane wildlife eviction compliant with the Ontario Fish and Wildlife Conservation Act.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">One-Way Exclusion Doors</h4>
                  <p className="text-xs text-slate-600">Animals push through custom spring doors to forage and cannot return, solving infestations without small cage trapping.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Baby Animal Reunification</h4>
                  <p className="text-xs text-slate-600">Spring baby litters are safely hand-retrieved and placed in heated release boxes so the mother safely relocates them.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/raccoon-removal-milton/"
                  className="px-5 py-2.5 bg-brand-navy hover:bg-brand-red text-white font-bold rounded-xl text-xs transition-colors"
                >
                  Raccoon Eviction
                </Link>
                <Link
                  href="/squirrel-removal-milton/"
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors"
                >
                  Squirrel Exclusion
                </Link>
                <Link
                  href="/bat-removal-milton/"
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors"
                >
                  Bat Removal
                </Link>
                <Link
                  href="/skunk-removal-milton/"
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors"
                >
                  Skunk Deck Screening
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: WHY CHOOSE PEST STOP INC.
      ========================================================================= */}
      {/* =========================================================================
          SECTION 8: WHY CHOOSE PEST STOP INC.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 content-auto" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider mb-3 border border-red-150">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Milton Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
              Why Milton Families Trust Us
            </h2>
            <p className="mt-3.5 text-slate-600 text-base sm:text-lg">
              We stand apart from generic franchises by providing personalized care, senior licensed exterminators, and honest, transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-friendly hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-brand-red flex items-center justify-center font-black text-base mb-4 shadow-sm">
                01
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Decades of Local Expertise</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We understand Milton’s unique building styles, local soil moisture conditions, and seasonal pest cycles along the Niagara Escarpment.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-friendly hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-base mb-4 shadow-sm">
                02
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Eco-Friendly & Pet Safe</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All formulations are Health Canada PMRA compliant, low-odor, and strategically applied to non-contact zones to safeguard children and pets.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-friendly hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-base mb-4 shadow-sm">
                03
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">100% Written Warranty</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If pests reappear during your warranty period, our technicians return and re-treat your property at absolutely zero additional charge.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-friendly hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-base mb-4 shadow-sm">
                04
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Rapid Same-Day Response</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Available 7 days a week from 7:00 AM to 10:00 PM. For active wasp stings or attic noises, we frequently arrive within 1 to 2 hours.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-friendly hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center font-black text-base mb-4 shadow-sm">
                05
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Permanent Exclusion Proofing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We go beyond temporary sprays by physically installing heavy-gauge galvanized steel mesh over weep holes, roof vents, and deck perimeters.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-friendly hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-base mb-4 shadow-sm">
                06
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Top 3 Rated Distinction</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Recognized on ThreeBestRated with an authentic 4.9/5 satisfaction score based on rigorous 50-point inspection criteria in Milton, ON.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: HOW WE WORK (3-STEP PROCESS)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white content-auto" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200">
              <Clock className="w-3.5 h-3.5 text-brand-red" />
              <span>Simple, Seamless Resolution</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
              Our 3-Step Friendly Process
            </h2>
            <p className="mt-3.5 text-slate-600 text-base sm:text-lg">
              Restoring comfort and safety to your home is straightforward with our proven inspection and eradication system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-red/40 transition-all duration-300 relative shadow-sm group">
              <span className="text-6xl font-display font-black text-slate-200/70 absolute top-4 right-6 group-hover:text-red-100 transition-colors">
                01
              </span>
              <div className="relative z-10 space-y-3">
                <span className="px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wide shadow-sm">
                  Step 1
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  Comprehensive Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Call or request a quote online. We discuss your symptoms, inspect your property, identify the pest species, and present a clear upfront price with zero obligations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-400/40 transition-all duration-300 relative shadow-sm group">
              <span className="text-6xl font-display font-black text-slate-200/70 absolute top-4 right-6 group-hover:text-blue-100 transition-colors">
                02
              </span>
              <div className="relative z-10 space-y-3">
                <span className="px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-bold uppercase tracking-wide shadow-sm">
                  Step 2
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  Targeted Treatment & Proofing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our licensed technicians deploy customized treatments: colony transfer baits, thermal steam, or humane one-way exit doors, followed by structural exclusion sealing.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500/40 transition-all duration-300 relative shadow-sm group">
              <span className="text-6xl font-display font-black text-slate-200/70 absolute top-4 right-6 group-hover:text-emerald-100 transition-colors">
                03
              </span>
              <div className="relative z-10 space-y-3">
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wide shadow-sm">
                  Step 3
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  Verification & Written Warranty
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We verify 100% elimination during follow-up checks. Your home remains protected under our written seasonal warranty for lasting peace of mind.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: VERIFIED REVIEWS CAROUSEL / GRID
      ========================================================================= */}
      <ReviewCards />

      {/* =========================================================================
          SECTION 11: LOCAL MILTON NEIGHBOURHOODS & HALTON REGION
      ========================================================================= */}
      <ServiceAreaSection />

      {/* =========================================================================
          SECTION 12: MASTER FAQS ACCORDION
      ========================================================================= */}
      <FaqAccordion 
        faqs={masterFaqs} 
        title="Pest Control Milton FAQs"
        subtitle="Clear, honest answers to common pest, rodent, and wildlife questions from Milton property owners."
      />

      {/* =========================================================================
          SECTION 13: HIGH-CONVERSION CONTACT & QUOTE FORM SECTION
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-100/70 border-t border-slate-200/80 content-auto" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider border border-red-150">
                <Phone className="w-3.5 h-3.5" />
                <span>Fast, Friendly Assistance</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
                Ready for Peace of Mind in Your Home?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Reach out to Pest Stop Inc. today. Our friendly Milton technicians are happy to answer your questions, provide transparent estimates, or dispatch a vehicle directly to your doorstep.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-friendly transition-all flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-rose-100 text-brand-red flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Milton Emergency Dispatch</span>
                    <a href={businessConfig.phone.telLink} className="block text-base font-black text-slate-900 hover:text-brand-red transition-colors">
                      {businessConfig.phone.formatted}
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-friendly transition-all flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Milton Headquarters</span>
                    <p className="text-xs font-bold text-slate-800">
                      {businessConfig.address.fullFormatted}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-friendly transition-all flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Operating Hours</span>
                    <p className="text-xs font-bold text-slate-800">
                      Mon–Sun: 7:00 AM – 10:00 PM (Emergency Dispatch 24/7)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Quote Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
