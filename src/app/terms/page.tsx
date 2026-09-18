import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { businessConfig } from '@/data/businessConfig';

export const metadata: Metadata = {
  title: 'Terms of Service | Pest Stop Inc.',
  description: 'Terms of Service for Pest Stop Inc. Pest Control Services in Milton, Ontario.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-6 text-slate-700 text-sm leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500">Last updated: September 2026</p>

        <p>
          Welcome to the official website of <strong>{businessConfig.legalName}</strong>. By accessing this website or engaging our pest control and wildlife management services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-lg font-bold text-slate-900 pt-4">1. Scope of Pest Control Services</h2>
        <p>
          Pest Stop Inc. provides professional structural extermination, rodent control, and humane wildlife exclusion services. All treatments are performed by licensed exterminators certified by the Ontario Ministry of the Environment, Conservation and Parks in accordance with Health Canada PMRA product registrations.
        </p>

        <h2 className="text-lg font-bold text-slate-900 pt-4">2. Client Preparation & Access</h2>
        <p>
          For specific treatments (such as interior bed bug treatments or flea control), homeowners agree to follow our provided preparation guidelines. Safe access to the treatment areas must be provided to our technicians upon arrival.
        </p>

        <h2 className="text-lg font-bold text-slate-900 pt-4">3. Service Warranty Terms</h2>
        <p>
          Written warranties are provided for qualifying structural treatments and physical wildlife exclusion installations. The warranty guarantees free follow-up re-treatments during the stated warranty window provided that customer structural and sanitation recommendations have been maintained.
        </p>

        <h2 className="text-lg font-bold text-slate-900 pt-4">4. Contact Information</h2>
        <p>
          <strong>{businessConfig.legalName}</strong><br />
          {businessConfig.address.fullFormatted}<br />
          Email: {businessConfig.email}<br />
          Phone: {businessConfig.phone.formatted}
        </p>
      </div>
    </div>
  );
}
