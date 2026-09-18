import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { businessConfig } from '@/data/businessConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pest Stop Inc.',
  description: 'Privacy Policy for Pest Stop Inc. Pest Control Services in Milton, Ontario.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-6 text-slate-700 text-sm leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">Last updated: September 2026</p>

        <p>
          At <strong>{businessConfig.legalName}</strong> (&quot;Pest Stop Inc.&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we are committed to protecting your personal privacy. This Privacy Policy details how we collect, use, and safeguard personal information collected through our website (<a href="https://peststopinc.com" className="text-brand-red underline">peststopinc.com</a>) and our customer service channels.
        </p>

        <h2 className="text-lg font-bold text-slate-900 pt-4">1. Information We Collect</h2>
        <p>
          When you request a quote, schedule a consultation, or contact us via telephone or email, we may collect personal information including:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li>Full name</li>
          <li>Contact telephone number</li>
          <li>Email address</li>
          <li>Physical property address for service dispatch in Milton or surrounding areas</li>
          <li>Details regarding your pest or wildlife issue</li>
        </ul>

        <h2 className="text-lg font-bold text-slate-900 pt-4">2. How We Use Your Information</h2>
        <p>
          We use your information solely for legitimate business purposes:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li>Responding to your quote inquiries and service requests</li>
          <li>Dispatching licensed technicians to your property</li>
          <li>Providing written warranty records and follow-up service communications</li>
          <li>Complying with municipal and provincial structural extermination reporting regulations</li>
        </ul>

        <h2 className="text-lg font-bold text-slate-900 pt-4">3. Data Sharing & Third Parties</h2>
        <p>
          <strong>We never sell, rent, or trade your personal information.</strong> Your data is only shared with our direct internal technicians and dispatch software to fulfill your service requests.
        </p>

        <h2 className="text-lg font-bold text-slate-900 pt-4">4. Contact Information</h2>
        <p>
          For questions regarding this policy, please contact us at:<br />
          <strong>{businessConfig.legalName}</strong><br />
          {businessConfig.address.fullFormatted}<br />
          Email: {businessConfig.email}<br />
          Phone: {businessConfig.phone.formatted}
        </p>
      </div>
    </div>
  );
}
