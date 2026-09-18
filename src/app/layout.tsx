import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import QuoteModal from '@/components/QuoteModal';
import { LocalBusinessSchema } from '@/components/SchemaJsonLd';
import { businessConfig } from '@/data/businessConfig';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://peststopinc.com'),
  title: {
    default: 'Pest Control Milton ON | Pest Stop Inc. | Free Quote',
    template: '%s | Pest Stop Inc.',
  },
  description:
    'Top-rated pest control & wildlife removal in Milton, ON. Fast same-day service for ants, bed bugs, rodents & wildlife. Call Pest Stop Inc: 437-922-7700.',
  keywords: [
    'pest control milton',
    'milton pest control',
    'bed bug control milton',
    'raccoon removal milton On',
    'rodent control milton On',
    'ant control milton On',
    'wasp removal milton',
    'wildlife removal milton',
    'cockroach control milton',
    'squirrel removal milton',
    'mouse control in milton',
    'pest proofing in milton',
    'commercial pest control milton',
    'Rat Control Milton',
    'Mice Control Milton',
    'milton ontario pest control',
    'Bed Bug Treatment Milton',
    'Emergency Pest Control Milton',
    'Same Day Pest Control Milton',
    'Pest Control Near Me Milton',
  ],
  authors: [{ name: businessConfig.legalName }],
  creator: businessConfig.legalName,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://peststopinc.com',
    siteName: businessConfig.name,
    title: 'Pest Control Milton ON | Pest Stop Inc. | Professional Pest & Wildlife Services',
    description:
      'Milton’s trusted pest control & humane wildlife specialists. Certified, eco-friendly, same-day response. Call (437) 922-7700.',
    images: [
      {
        url: '/images/technician-action.jpg',
        width: 1200,
        height: 630,
        alt: 'Pest Stop Inc. Professional Technician in Milton, ON',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control Milton ON | Pest Stop Inc.',
    description:
      'Top-rated pest control & wildlife removal in Milton, Ontario. Call (437) 922-7700.',
    images: ['/images/technician-action.jpg'],
  },
  alternates: {
    canonical: 'https://peststopinc.com',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomBar />
        <QuoteModal />
      </body>
    </html>
  );
}
