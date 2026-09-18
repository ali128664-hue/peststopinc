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
      <section className="relative bg-gradient-to-b from-slate-900 via-brand-navy to-slate-900 text-white pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
        {/* Subtle background texture / overlays */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DE1B26_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Core Value Proposition & Headings */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <MapPin className="w-3.5 h-3.5 text-brand-red" />
                <span>MILTON, ONTARIO • LOCAL DISPATCH</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12]">
                Professional Pest Control in <span className="text-brand-red underline decoration-brand-red/40 decoration-4 underline-offset-8">Milton, Ontario</span>
              </h1>

              {/* Subtitle / Rich Narrative (as required in prompt item 8) */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Pest Stop Inc. provides professional pest control and wildlife management solutions for homeowners, businesses, and commercial facilities in Milton and surrounding areas. From ants and cockroaches to rodents, bed bugs, wasps, and unwanted wildlife, our certified team helps identify the problem and determine a targeted, guaranteed solution.
              </p>

              {/* Trust Micro-Bullets */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Same-Day Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Eco & Pet-Safe IPM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Written Warranty</span>
                </div>
              </div>

              {/* CTA Action Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-xl text-base shadow-lg hover:shadow-glow-red transition-all flex items-center justify-center gap-2 group"
                >
                  <span>GET A FREE QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={businessConfig.phone.telLink}
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl text-base border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2.5"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>CALL {businessConfig.phone.formatted}</span>
                </a>
              </div>

              {/* Verification Subtext */}
              <p className="text-xs text-slate-400 pt-1">
                ⭐ Rated <strong>4.9 / 5.0</strong> by Milton homeowners • Over <strong>2,000+</strong> services completed
              </p>
            </div>

            {/* Right Column: Genuine Technician Image & Floating Trust Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-800">
                <div className="relative h-[420px] sm:h-[480px] w-full">
                  <Image
                    src="/images/technician-action.jpg"
                    alt="Pest Stop Inc. Certified Technician applying eco-friendly perimeter spray in Milton"
                    fill
                    priority
                    className="object-cover"
                  />
                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">Official Milton Technician</span>
                    <p className="text-xs font-semibold text-slate-100">Licensed Structural Exterminator</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                    Active On Duty
                  </span>
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
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="about-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image / Service Vehicle */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card border border-slate-200 bg-white">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/service-truck.jpg"
                    alt="Pest Stop Inc. mobile pest control service truck in Milton, ON"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 bg-white border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-900">
                    Pest Stop Inc. Service Vehicle Fleet
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fully equipped with high-reach inspection ladders, thermal imaging, and Health Canada PMRA registered formulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>About Pest Stop Inc.</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-snug">
                Protecting Milton Homes & Businesses with Proven Science & Integrity
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a mission to deliver safe, effective, and environmentally responsible pest management, Pest Stop Inc. has grown into one of Milton’s most trusted local service providers. Having completed over 2,000 residential and commercial treatments across Halton Region, we combine deep biological knowledge of local pests with compassionate customer service.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you own a modern townhouse in Hawthorne Village, a historic home in Old Milton, or manage a commercial restaurant along Main Street, our certified technicians assess the root cause of your infestation rather than merely applying surface-level band-aids. We eliminate active populations and permanently proof building structures to ensure pests never return.
              </p>

              {/* 4 Brand Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Expertise & Experience</h4>
                  <p className="text-xs text-slate-600">
                    Licensed structural technicians with decades of cumulative hands-on field experience solving southern Ontario infestations.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Tailored Approach</h4>
                  <p className="text-xs text-slate-600">
                    Personalized Integrated Pest Management (IPM) plans engineered for your unique architecture and family requirements.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Safety Priority</h4>
                  <p className="text-xs text-slate-600">
                    Eco-responsible, pet-friendly, and family-safe products adhering strictly to Health Canada PMRA environmental safety codes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Reliable Support</h4>
                  <p className="text-xs text-slate-600">
                    Rapid same-day response times, weekend emergency availability, and written service warranties for total peace of mind.
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
      <section className="py-20 bg-white" id="main-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5 text-brand-red" />
              <span>Full-Service Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              Complete Pest & Wildlife Solutions
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Explore our comprehensive service divisions tailored for residential properties, commercial facilities, and rural estates across Milton.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Pest Control */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-red transition-all flex flex-col justify-between shadow-sm hover:shadow-card">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                  <Bug className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pest Control</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Eradicate carpenter ants, bed bugs, cockroaches, wasps, spiders, ticks, and carpet beetles with targeted eco-safe formulations.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /><Link href="/ant-control-milton/" className="hover:underline">Carpenter & Pharaoh Ants</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /><Link href="/bed-bug-control-milton/" className="hover:underline">Heat & Steam Bed Bug Care</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /><Link href="/wasp-removal-milton/" className="hover:underline">Emergency Wasp Nest Removal</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /><Link href="/cockroach-control-milton/" className="hover:underline">German Roach Baiting</Link></li>
                </ul>
              </div>
              <Link
                href="/pest-control-milton/"
                className="inline-flex items-center justify-between text-xs font-bold text-brand-red hover:text-brand-red-dark py-2 border-t border-slate-200 group"
              >
                <span>View Pest Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 2: Rodent Control */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-navy transition-all flex flex-col justify-between shadow-sm hover:shadow-card">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Rodent Control</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Eliminate destructive house mice, deer mice, and rats nesting in attics, wall cavities, and basements with guaranteed exclusion.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-navy" /><Link href="/mouse-control-milton/" className="hover:underline">Mouse & Mice Extermination</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-navy" /><Link href="/rat-control-milton/" className="hover:underline">Norway & Roof Rat Control</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-navy" /><Link href="/pest-proofing-milton/" className="hover:underline">Weep Hole & Foundation Sealing</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-navy" /><span>Tamper-Proof Child/Pet Stations</span></li>
                </ul>
              </div>
              <Link
                href="/rodent-control-milton/"
                className="inline-flex items-center justify-between text-xs font-bold text-brand-navy hover:text-brand-red py-2 border-t border-slate-200 group"
              >
                <span>View Rodent Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 3: Wildlife Removal */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-600 transition-all flex flex-col justify-between shadow-sm hover:shadow-card">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Wildlife Removal</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Ethical, 100% humane eviction of raccoons, squirrels, bats, and skunks using one-way doors and baby animal reunification.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /><Link href="/raccoon-removal-milton/" className="hover:underline">Raccoon Attic Eviction</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /><Link href="/squirrel-removal-milton/" className="hover:underline">Squirrel Roofline Removal</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /><Link href="/bat-removal-milton/" className="hover:underline">Humane Bat Colony Exclusion</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /><Link href="/skunk-removal-milton/" className="hover:underline">Skunk Deck L-Footer Mesh</Link></li>
                </ul>
              </div>
              <Link
                href="/wildlife-removal-milton/"
                className="inline-flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-brand-red py-2 border-t border-slate-200 group"
              >
                <span>View Wildlife Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 4: Prevention & Commercial */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-navy-light transition-all flex flex-col justify-between shadow-sm hover:shadow-card">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Commercial & Proofing</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Permanent one-time structural pest proofing and audit-ready commercial pest management for restaurants and warehouses.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-700" /><Link href="/pest-proofing-milton/" className="hover:underline">16-Gauge Galvanized Roof Caps</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-700" /><Link href="/commercial-pest-control-milton/" className="hover:underline">Restaurant & HACCP Compliance</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-700" /><Link href="/bird-control-milton/" className="hover:underline">Canada Goose & Pigeon Deterrence</Link></li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-700" /><span>Discreet After-Hours Service</span></li>
                </ul>
              </div>
              <Link
                href="/commercial-pest-control-milton/"
                className="inline-flex items-center justify-between text-xs font-bold text-slate-800 hover:text-brand-red py-2 border-t border-slate-200 group"
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
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="rodent-spotlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-red-400 text-xs font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Critical Seasonal Threat</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                Stop Mice & Rats Before They Destroy Your Milton Home
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As night temperatures plummet across Milton, hundreds of field mice and rats migrate from surrounding Niagara Escarpment farmland directly into residential neighbourhoods. A juvenile mouse can squeeze through a gap as small as a dime, slipping through brick weep holes, AC line penetrations, and garage door corners into your warm attic.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Flame className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Attic Fire Hazards from Chewed Wires</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Rodents possess constantly growing teeth and gnaw through electrical wire coating, creating severe concealed fire risks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Guaranteed Permanent Structural Proofing</h4>
                    <p className="text-xs text-slate-300 mt-0.5">We don&apos;t just set traps; we seal exterior weep holes with stainless steel inserts and reinforce pipe collars with chew-proof mesh.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="/mouse-control-milton/"
                  className="px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-xl text-sm shadow-md transition-colors"
                >
                  Mouse Control Details
                </Link>
                <Link
                  href="/rat-control-milton/"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm border border-white/20 transition-colors"
                >
                  Rat Control Details
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-800">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/pests/norway-rat.png"
                    alt="Rodent control and rat exclusion in Milton, Ontario"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="p-5 bg-slate-950/80 border-t border-white/10 text-center">
                  <p className="text-xs font-semibold text-slate-200">
                    Norway Rats & Deer Mice require specialized sanitary handling to prevent Hantavirus & Leptospirosis transmission.
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
      <section className="py-20 bg-white" id="wildlife-spotlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-card border border-slate-200 bg-slate-50">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/pests/squirrel-roof.jpg"
                    alt="Squirrel chewing roof fascia board in Milton, ON"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 bg-white border-t border-slate-100">
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
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Milton Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              Why Milton Chooses Pest Stop Inc.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              We stand apart from generic franchises by providing personalized care, senior licensed exterminators, and honest, transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-brand-red text-white flex items-center justify-center font-extrabold text-lg mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Decades of Local Expertise</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We understand Milton’s unique building styles, local soil moisture conditions, and seasonal pest cycles along the Niagara Escarpment.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center font-extrabold text-lg mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Eco-Friendly & Pet Safe</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All formulations are Health Canada PMRA compliant, low-odor, and strategically applied to non-contact zones to safeguard children and pets.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-lg mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">100% Written Warranty</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                If pests reappear during your warranty period, our technicians return and re-treat your property at absolutely zero additional charge.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-lg mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Rapid Same-Day Response</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Available 7 days a week from 7:00 AM to 10:00 PM. For active wasp stings or attic noises, we frequently arrive within 1 to 2 hours.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center font-extrabold text-lg mb-4">
                05
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Permanent Exclusion Proofing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We go beyond temporary sprays by physically installing heavy-gauge galvanized steel mesh over weep holes, roof vents, and deck perimeters.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center font-extrabold text-lg mb-4">
                06
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Top 3 Rated Distinction</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recognized on ThreeBestRated with an authentic 4.9/5 satisfaction score based on rigorous 50-point inspection criteria in Milton, ON.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: HOW WE WORK (3-STEP PROCESS)
      ========================================================================= */}
      <section className="py-20 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Simple, Seamless Resolution</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              Our 3-Step Pest Elimination Process
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Restoring comfort and safety to your home is straightforward with our proven inspection and eradication system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <span className="text-6xl font-display font-extrabold text-slate-200 absolute top-4 right-6">
                01
              </span>
              <div className="relative z-10 space-y-3">
                <span className="px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase">
                  Step 1
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Comprehensive Consultation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Call or request a quote online. We discuss your symptoms, inspect your property, identify the pest species, and present a clear upfront price with zero obligations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <span className="text-6xl font-display font-extrabold text-slate-200 absolute top-4 right-6">
                02
              </span>
              <div className="relative z-10 space-y-3">
                <span className="px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-bold uppercase">
                  Step 2
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Targeted Treatment & Proofing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our licensed technicians deploy customized treatments: colony transfer baits, thermal steam, or humane one-way exit doors, followed by structural exclusion sealing.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <span className="text-6xl font-display font-extrabold text-slate-200 absolute top-4 right-6">
                03
              </span>
              <div className="relative z-10 space-y-3">
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase">
                  Step 3
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Verification & Written Warranty
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
      <section className="py-20 bg-gradient-to-b from-white to-slate-100 border-t border-slate-200" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5" />
                <span>Immediate Assistance</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                Ready to Reclaim a Pest-Free Space?
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Contact Pest Stop Inc. today. Our local Milton technicians are ready to answer your questions, provide instant pricing, or dispatch an emergency response vehicle directly to your door.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Emergency Dispatch Line</span>
                    <a href={businessConfig.phone.telLink} className="block text-base font-extrabold text-slate-900 hover:text-brand-red">
                      {businessConfig.phone.formatted}
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Milton Headquarters</span>
                    <p className="text-xs font-semibold text-slate-800">
                      {businessConfig.address.fullFormatted}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Operating Hours</span>
                    <p className="text-xs font-semibold text-slate-800">
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
