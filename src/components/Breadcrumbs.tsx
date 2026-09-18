'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-100/70 border-b border-slate-200 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5">
        <Link href="/" className="inline-flex items-center gap-1 hover:text-brand-red font-medium transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <div key={idx} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-brand-red font-medium transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-semibold" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
