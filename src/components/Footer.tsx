'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '@/data/businessConfig';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Credentials */}
          <div className="space-y-4">
            <div className="relative w-56 h-12 bg-white/95 p-1 rounded-2xl shadow-sm">
              <Image
                src="/images/logo.svg"
                alt="Pest Stop Inc. Logo"
                fill
                sizes="224px"
                className="object-contain p-1"
              />
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Pest Stop Inc. is Milton’s trusted, licensed pest control and humane wildlife management specialist. Committed to eco-friendly, family-safe treatments with 100% guaranteed results.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                🐾 Pet & Kid Safe
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-bold text-amber-300 border border-amber-500/30">
                ⚡ Same-Day Milton
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-bold text-rose-300 border border-rose-500/30">
                🤝 Written Warranty
              </span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 space-y-1 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Award className="w-4 h-4 shrink-0" />
                <span>Top 3 Pest Control in Milton, ON</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Verified 4.9/5 Rating based on 50-Point Inspection criteria.
              </p>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Pest & Rodent Services</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><Link href="/pest-control-milton/" className="hover:text-brand-red transition-colors">General Pest Control</Link></li>
              <li><Link href="/bed-bug-control-milton/" className="hover:text-brand-red transition-colors">Bed Bug Extermination</Link></li>
              <li><Link href="/ant-control-milton/" className="hover:text-brand-red transition-colors">Ant Control (Carpenter/Pharaoh)</Link></li>
              <li><Link href="/cockroach-control-milton/" className="hover:text-brand-red transition-colors">Cockroach Extermination</Link></li>
              <li><Link href="/wasp-removal-milton/" className="hover:text-brand-red transition-colors">Wasp & Hornet Removal</Link></li>
              <li><Link href="/mouse-control-milton/" className="hover:text-brand-red transition-colors">Mouse & Mice Control</Link></li>
              <li><Link href="/rat-control-milton/" className="hover:text-brand-red transition-colors">Rat Control (Norway & Roof)</Link></li>
            </ul>
          </div>

          {/* Col 3: Wildlife & Prevention */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Wildlife & Proofing</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><Link href="/wildlife-removal-milton/" className="hover:text-brand-red transition-colors">Humane Wildlife Removal</Link></li>
              <li><Link href="/raccoon-removal-milton/" className="hover:text-brand-red transition-colors">Raccoon Attic Eviction</Link></li>
              <li><Link href="/squirrel-removal-milton/" className="hover:text-brand-red transition-colors">Squirrel Attic Removal</Link></li>
              <li><Link href="/bat-removal-milton/" className="hover:text-brand-red transition-colors">Bat Exclusion & Sanitization</Link></li>
              <li><Link href="/skunk-removal-milton/" className="hover:text-brand-red transition-colors">Skunk Deck Exclusion</Link></li>
              <li><Link href="/pest-proofing-milton/" className="hover:text-brand-red transition-colors">Pest & Wildlife Proofing</Link></li>
              <li><Link href="/commercial-pest-control-milton/" className="hover:text-brand-red transition-colors">Commercial Pest Management</Link></li>
            </ul>
          </div>

          {/* Col 4: Verified NAP Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Milton Contact Info</span>
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>
                  <strong>Pest Stop Inc.</strong><br />
                  #565, Milton, ON L9T 8L8<br />
                  Canada
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href={businessConfig.phone.telLink} className="hover:text-brand-red font-bold text-white">
                  {businessConfig.phone.formatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`mailto:${businessConfig.email}`} className="hover:text-brand-red break-all">
                  {businessConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Monday – Sunday</span><br />
                  <span>7:00 AM – 10:00 PM</span><br />
                  <span className="text-[11px] text-emerald-400">Same-Day Dispatch Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Ribbon */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400">
          <p className="mb-2 font-semibold text-slate-300 uppercase tracking-wider">
            Primary Service Areas in Halton Region & GTA:
          </p>
          <div className="flex flex-wrap gap-2 text-slate-300">
            {businessConfig.primaryAreas.map((area, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                <CheckCircle2 className="w-3 h-3 text-brand-red" />
                <span>{area}, ON</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {businessConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
