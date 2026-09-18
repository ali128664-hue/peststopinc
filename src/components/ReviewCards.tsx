'use client';

import { Star, CheckCircle2, Award, Quote } from 'lucide-react';
import { reviewsData } from '@/data/reviewsData';
import { businessConfig } from '@/data/businessConfig';

export default function ReviewCards() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Real Experiences from Milton Homeowners
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            See why Pest Stop Inc. is recognized among the Top 3 Pest Control Services in Milton, ON with an authentic 4.9 out of 5 satisfaction rating.
          </p>

          {/* Rating Summary Pill */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.9 / 5.0</span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs text-slate-300">Over 2,000+ Completed Services</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
                </div>

                <div className="relative mb-4">
                  <Quote className="w-8 h-8 text-white/10 absolute -top-2 -left-2" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed relative z-10 pl-2">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{review.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h3>
                  <p className="text-[11px] text-slate-400">{review.location}</p>
                </div>
                <span className="px-2 py-1 rounded bg-white/10 text-[10px] text-slate-300 font-semibold">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
