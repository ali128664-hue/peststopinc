'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, Menu, X, ChevronDown, ShieldCheck, Flame } from 'lucide-react';
import { businessConfig } from '@/data/businessConfig';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent('open-quote-modal'));
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      {/* Top Emergency & Friendly Announcement Bar */}
      <div className="bg-brand-navy text-white text-xs py-2 px-4 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <div className="inline-flex items-center gap-1.5 font-semibold text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">MILTON DISPATCH ACTIVE</span>
            </div>
            <span className="hidden sm:inline text-slate-500">•</span>
            <div className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Open 7 Days: 7:00 AM – 10:00 PM</span>
            </div>
            <span className="hidden md:inline text-slate-500">•</span>
            <div className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              <span>#565, Milton, ON L9T 8L8</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="hidden lg:inline text-slate-300 text-[11px] font-medium">Need fast, friendly help?</span>
            <a
              href={businessConfig.phone.telLink}
              className="inline-flex items-center gap-1.5 font-bold text-white bg-brand-red hover:bg-brand-red-dark px-3 py-1 rounded-full transition-all text-xs shadow-sm hover:scale-105 active:scale-95"
            >
              <Phone className="w-3 h-3" />
              <span>(437) 922-7700</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="inline-flex items-center gap-2 group shrink-0">
          <div className="relative w-48 sm:w-56 h-12">
            <Image
              src="/images/logo.svg"
              alt="Pest Stop Inc. Pest Control Services Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-slate-700 text-sm">
          <Link href="/" className="hover:text-brand-red transition-colors">
            Home
          </Link>

          {/* Services Mega Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="/services/"
              className="inline-flex items-center gap-1 hover:text-brand-red py-2 transition-colors"
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-xl border border-slate-200 p-6 grid grid-cols-3 gap-6 animate-in fade-in duration-150">
                {/* Pest Control */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-red mb-3 flex items-center gap-1.5">
                    <span>Pest Control</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li><Link href="/pest-control-milton/" className="hover:text-brand-red font-medium block">All Pest Control</Link></li>
                    <li><Link href="/bed-bug-control-milton/" className="hover:text-brand-red font-medium block">Bed Bug Treatment</Link></li>
                    <li><Link href="/ant-control-milton/" className="hover:text-brand-red font-medium block">Ant Extermination</Link></li>
                    <li><Link href="/cockroach-control-milton/" className="hover:text-brand-red font-medium block">Cockroach Control</Link></li>
                    <li><Link href="/wasp-removal-milton/" className="hover:text-brand-red font-medium block">Wasp & Hornet Removal</Link></li>
                    <li><Link href="/spider-control-milton/" className="hover:text-brand-red font-medium block">Spider Control</Link></li>
                  </ul>
                </div>

                {/* Rodent & Wildlife */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                    Rodent & Wildlife
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li><Link href="/rodent-control-milton/" className="hover:text-brand-red font-medium block">Rodent Control Hub</Link></li>
                    <li><Link href="/mouse-control-milton/" className="hover:text-brand-red font-medium block">Mouse Control</Link></li>
                    <li><Link href="/rat-control-milton/" className="hover:text-brand-red font-medium block">Rat Control</Link></li>
                    <li><Link href="/wildlife-removal-milton/" className="hover:text-brand-red font-medium block">Humane Wildlife Hub</Link></li>
                    <li><Link href="/raccoon-removal-milton/" className="hover:text-brand-red font-medium block">Raccoon Removal</Link></li>
                    <li><Link href="/squirrel-removal-milton/" className="hover:text-brand-red font-medium block">Squirrel Removal</Link></li>
                    <li><Link href="/bat-removal-milton/" className="hover:text-brand-red font-medium block">Bat Removal</Link></li>
                    <li><Link href="/skunk-removal-milton/" className="hover:text-brand-red font-medium block">Skunk Removal</Link></li>
                  </ul>
                </div>

                {/* Prevention & Commercial */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Prevention & Commercial
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 mb-4">
                    <li><Link href="/pest-proofing-milton/" className="hover:text-brand-red font-medium block">Pest & Wildlife Proofing</Link></li>
                    <li><Link href="/commercial-pest-control-milton/" className="hover:text-brand-red font-medium block">Commercial Pest Management</Link></li>
                    <li><Link href="/bird-control-milton/" className="hover:text-brand-red font-medium block">Bird & Goose Control</Link></li>
                  </ul>
                  <div className="pt-3 border-t border-slate-200">
                    <p className="text-[11px] text-slate-500 font-medium">Top 3 Pest Control in Milton, ON (4.9 Rating)</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/about-us/" className="hover:text-brand-red transition-colors">
            About Us
          </Link>
          <Link href="/contact-us/" className="hover:text-brand-red transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={businessConfig.phone.telLink}
            className="text-right hidden xl:block group px-3 py-1.5 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-1 justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Fast Local Response
            </span>
            <span className="text-sm font-black text-slate-900 group-hover:text-brand-red transition-colors">
              {businessConfig.phone.formatted}
            </span>
          </a>
          <button
            type="button"
            onClick={openQuoteModal}
            className="px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-full text-xs sm:text-sm shadow-md hover:shadow-glow-red hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-1.5 group"
          >
            <span>Get Free Quote</span>
            <span className="text-amber-200 group-hover:rotate-12 transition-transform">✨</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-150 max-h-[80vh] overflow-y-auto">
          <div className="space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-900 py-2 border-b border-slate-100"
            >
              Home
            </Link>
            <Link
              href="/services/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-900 py-2 border-b border-slate-100"
            >
              All Services Overview
            </Link>

            <div className="pl-3 py-1 space-y-1.5 text-sm text-slate-600 border-l-2 border-brand-red/30">
              <Link href="/pest-control-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">General Pest Control</Link>
              <Link href="/bed-bug-control-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Bed Bug Treatment</Link>
              <Link href="/ant-control-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Ant Control (Carpenter & Pharaoh)</Link>
              <Link href="/cockroach-control-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Cockroach Control</Link>
              <Link href="/wasp-removal-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1 font-semibold text-brand-red">Wasp & Hornet Removal (Same-Day)</Link>
              <Link href="/mouse-control-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Mouse & Mice Control</Link>
              <Link href="/rat-control-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Rat Control</Link>
              <Link href="/raccoon-removal-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Raccoon Removal</Link>
              <Link href="/squirrel-removal-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Squirrel Removal</Link>
              <Link href="/bat-removal-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Bat Removal</Link>
              <Link href="/skunk-removal-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Skunk Removal</Link>
              <Link href="/pest-proofing-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Pest & Wildlife Proofing</Link>
              <Link href="/commercial-pest-control-milton/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Commercial Pest Control</Link>
            </div>

            <Link
              href="/about-us/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-900 py-2 border-b border-slate-100"
            >
              About Us
            </Link>
            <Link
              href="/contact-us/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-900 py-2 border-b border-slate-100"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2 space-y-2.5">
            <a
              href={businessConfig.phone.telLink}
              className="w-full py-3 bg-brand-red text-white font-bold rounded-xl flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call {businessConfig.phone.formatted}</span>
            </a>
            <button
              type="button"
              onClick={openQuoteModal}
              className="w-full py-3 bg-brand-navy text-white font-bold rounded-xl text-center"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
