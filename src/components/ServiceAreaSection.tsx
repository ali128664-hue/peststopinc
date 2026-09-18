import { MapPin, CheckCircle2, Clock } from 'lucide-react';
import { miltonNeighbourhoods, surroundingTowns } from '@/data/serviceAreas';
import { businessConfig } from '@/data/businessConfig';

export default function ServiceAreaSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Local Milton Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Proudly Serving Milton & Surrounding Communities
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Based right here at <span className="font-semibold text-slate-800">#565, Milton, ON</span>, our mobile service trucks are dispatched throughout Milton and neighboring towns across Halton Region every single day.
          </p>
        </div>

        {/* Milton Neighbourhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {miltonNeighbourhoods.map((n, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {n.name}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {n.description}
              </p>
              <div className="pt-3 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Common Seasonal Callouts:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {n.commonPests.map((pest, pIdx) => (
                    <span
                      key={pIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                    >
                      <CheckCircle2 className="w-3 h-3 text-brand-red" />
                      <span>{pest}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Surrounding Region Badge Bar */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-red" />
              <span>Same-Day Response Radius From Milton Central</span>
            </h4>
            <span className="text-xs text-slate-500">Call (437) 922-7700 for immediate dispatch ETA</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {surroundingTowns.map((town, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <p className="text-xs font-bold text-slate-900">{town.name}</p>
                <p className="text-[11px] text-brand-red font-semibold">{town.distance}</p>
                <p className="text-[10px] text-slate-500">{town.eta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
