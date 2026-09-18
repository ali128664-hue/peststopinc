'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, Bug, ShieldAlert } from 'lucide-react';
import { pestsCatalog, PestItem } from '@/data/pestsCatalog';

export default function PestSelector() {
  const categories: ("All" | "Wildlife" | "Rodents" | "Crawling Insects" | "Flying Insects")[] = [
    "All",
    "Wildlife",
    "Rodents",
    "Crawling Insects",
    "Flying Insects",
  ];

  const [activeCat, setActiveCat] = useState<typeof categories[number]>("All");

  const filteredPests = activeCat === "All"
    ? pestsCatalog
    : pestsCatalog.filter((p) => p.category === activeCat);

  return (
    <section className="py-20 bg-white" id="whats-bugging-you">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold uppercase tracking-wider mb-3">
            <Bug className="w-3.5 h-3.5" />
            <span>Interactive Pest Identifier</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            What’s Bugging You?
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Identify your unwanted intruder below. Click any species for comprehensive treatment processes, biology, risks, and emergency dispatch options in Milton.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = activeCat === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-brand-red text-white shadow-md scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pest Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPests.map((pest) => {
            return (
              <div
                key={pest.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Pest Image Container */}
                  <div className="relative h-48 w-full bg-slate-50 overflow-hidden flex items-center justify-center p-3">
                    <Image
                      src={pest.image}
                      alt={`${pest.name} pest control in Milton ON`}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        pest.threatLevel === 'Severe'
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : pest.threatLevel === 'High'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {pest.badge}
                      </span>
                    </div>
                  </div>

                  {/* Pest Details */}
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                        {pest.name}
                      </h3>
                    </div>
                    {pest.scientificName && (
                      <p className="text-xs italic text-slate-500 mb-2">
                        {pest.scientificName}
                      </p>
                    )}
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {pest.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-5 pb-5 pt-2">
                  <Link
                    href={`/${pest.targetServiceSlug}/`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-slate-800 group-hover:text-brand-red py-2 px-3 rounded-lg bg-slate-50 group-hover:bg-red-50 border border-slate-100 group-hover:border-red-100 transition-all"
                  >
                    <span>View Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
