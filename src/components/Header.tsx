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
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Top Emergency Announcement Bar */}
      <div className="bg-brand-navy text-white text-xs py-2 px-4 border-b border-brand-navy-light/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="inline-flex items-center gap-1.5 text-red-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              <Flame className="w-3.5 h-3.5 text-brand-red" />
              <span>SAME-DAY EMERGENCY DISPATCH IN MILTON</span>
            </div>
            <span className="hidden sm:inline text-slate-400">|</span>
            <div className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon–Sun: 7:00 AM – 10:00 PM</span>
            </div>
            <span className="hidden md:inline text-slate-400">|</span>
            <div className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              <span>#565, Milton, ON L9T 8L8</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline text-slate-300 font-medium">Need Immediate Help?</span>
            <a
              href={businessConfig.phone.telLink}
              className="inline-flex items-center gap-1.5 font-bold text-white bg-brand-red hover:bg-brand-red-dark px-3 py-1 rounded-md transition-colors text-xs shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {businessConfig.phone.formatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
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
          <div className="text-right hidden xl:block">
            <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Milton Dispatch</span>
            <a href={businessConfig.phone.telLink} className="text-sm font-bold text-slate-900 hover:text-brand-red">
              {businessConfig.phone.formatted}
            </a>
          </div>
          <button
            type="button"
            onClick={openQuoteModal}
            className="px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            Get Free Quote
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
