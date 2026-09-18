import { Star, ShieldCheck, Clock, Award, HeartHandshake, Sparkles } from 'lucide-react';

export default function TrustStats() {
  const stats = [
    {
      icon: Star,
      value: "4.9 / 5.0",
      label: "Neighbor Rating",
      sub: "Top 3 Rated by Milton Families",
      badge: "⭐ Milton Favorite",
      bgGradient: "from-amber-500/10 to-orange-500/5",
      borderColor: "border-amber-200/60",
      iconBg: "bg-amber-100 text-amber-600",
    },
    {
      icon: Award,
      value: "2,000+",
      label: "Homes Protected",
      sub: "Across Milton, Oakville & Halton",
      badge: "🏆 Proven Track Record",
      bgGradient: "from-rose-500/10 to-red-500/5",
      borderColor: "border-rose-200/60",
      iconBg: "bg-rose-100 text-brand-red",
    },
    {
      icon: Clock,
      value: "Same-Day",
      label: "Prompt Dispatch",
      sub: "Open 7 Days • 7am to 10pm",
      badge: "⚡ 45-Min Avg Response",
      bgGradient: "from-blue-500/10 to-indigo-500/5",
      borderColor: "border-blue-200/60",
      iconBg: "bg-blue-100 text-blue-700",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Pet & Family Safe",
      sub: "Zero-Drama Written Warranty",
      badge: "🐾 Paws & Kids Friendly",
      bgGradient: "from-emerald-500/10 to-teal-500/5",
      borderColor: "border-emerald-200/60",
      iconBg: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-10 sm:py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative p-5 rounded-2xl bg-white border ${item.borderColor} shadow-sm hover:shadow-friendly hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                {/* Subtle top corner gradient */}
                <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${item.bgGradient} rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60`} />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-slate-100 text-slate-700 border border-slate-200/60">
                      {item.badge}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">
                    {item.label}
                  </div>
                </div>

                <p className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

