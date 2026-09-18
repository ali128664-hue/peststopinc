'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, Bug, ShieldAlert } from 'lucide-react';
import { pestsCatalog, PestItem } from '@/data/pestsCatalog';

export default function PestSelector() {
  const categories: { label: string; value: "All" | "Wildlife" | "Rodents" | "Crawling Insects" | "Flying Insects"; emoji: string }[] = [
    { label: "All Pests", value: "All", emoji: "🔍" },
    { label: "Wildlife", value: "Wildlife", emoji: "🦝" },
    { label: "Rodents", value: "Rodents", emoji: "🐭" },
    { label: "Crawling Insects", value: "Crawling Insects", emoji: "🐜" },
    { label: "Flying Insects", value: "Flying Insects", emoji: "🐝" },
  ];

  const [activeCat, setActiveCat] = useState<"All" | "Wildlife" | "Rodents" | "Crawling Insects" | "Flying Insects">("All");

  const filteredPests = activeCat === "All"
    ? pestsCatalog
    : pestsCatalog.filter((p) => p.category === activeCat);

  return (
    <section className="py-16 sm:py-24 bg-white content-auto" id="whats-bugging-you">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider mb-3 border border-red-150">
            <Bug className="w-3.5 h-3.5" />
            <span>Interactive Milton Pest Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
            What’s Bugging Your Home?
          </h2>
          <p className="mt-3.5 text-slate-600 text-base sm:text-lg">
            Choose your unwanted guest below for tailored, pet-friendly elimination steps, biology, and Milton same-day arrival times.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mt-6">
            {categories.map((cat) => {
              const isActive = activeCat === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCat(cat.value)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-brand-red text-white shadow-md shadow-red-500/20 scale-105'
                      : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Friendly Helpful Hint Pill */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs text-left max-w-xl">
            <span className="text-base shrink-0">💡</span>
            <p>
              <strong>Not sure what pest it is?</strong> Snap a quick photo and text it to <a href="tel:+14379227700" className="underline font-bold text-brand-red">(437) 922-7700</a>. We’ll identify it for you free of charge!
            </p>
          </div>
        </div>

        {/* Pest Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredPests.map((pest) => {
            return (
              <div
                key={pest.id}
                className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-friendly hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Pest Image Container */}
                  <div className="relative h-44 w-full bg-gradient-to-b from-slate-50 to-slate-100/50 overflow-hidden flex items-center justify-center p-3 border-b border-slate-100">
                    <Image
                      src={pest.image}
                      alt={`${pest.name} pest control in Milton ON`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${
                        pest.threatLevel === 'Severe'
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : pest.threatLevel === 'High'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}>
                        {pest.badge}
                      </span>
                    </div>
                  </div>

                  {/* Pest Details */}
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-red transition-colors">
                        {pest.name}
                      </h3>
                    </div>
                    {pest.scientificName && (
                      <p className="text-[11px] italic text-slate-500 mb-2 font-mono">
                        {pest.scientificName}
                      </p>
                    )}
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {pest.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-5 pb-5 pt-1">
                  <Link
                    href={`/${pest.targetServiceSlug}/`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-slate-800 group-hover:text-white py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-brand-red border border-slate-200/80 group-hover:border-brand-red transition-all shadow-sm"
                  >
                    <span>View Treatment Plan</span>
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
