import { Star, ShieldCheck, Clock, Award } from 'lucide-react';

export default function TrustStats() {
  const stats = [
    {
      icon: Star,
      value: "4.9 / 5.0",
      label: "Customer Rating",
      sub: "Top 3 Rated in Milton, ON",
      color: "text-amber-500",
    },
    {
      icon: Award,
      value: "2,000+",
      label: "Completed Services",
      sub: "Across Halton & GTA",
      color: "text-brand-red",
    },
    {
      icon: Clock,
      value: "Same-Day",
      label: "Emergency Dispatch",
      sub: "Open 7 Days (7am–10pm)",
      color: "text-brand-navy",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Guaranteed Results",
      sub: "Written Service Warranty",
      color: "text-emerald-600",
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle">
                <div className="flex justify-center mb-2">
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
