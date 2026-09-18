import { businessConfig } from '@/data/businessConfig';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'PestControl'],
    name: businessConfig.legalName,
    alternateName: businessConfig.name,
    url: 'https://peststopinc.com',
    logo: 'https://peststopinc.com/images/logo.jpg',
    image: [
      'https://peststopinc.com/images/technician-action.jpg',
      'https://peststopinc.com/images/service-truck.jpg',
      'https://peststopinc.com/images/logo.jpg'
    ],
    telephone: businessConfig.phone.raw,
    email: businessConfig.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.province,
      postalCode: businessConfig.address.postalCode,
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.5183,
      longitude: -79.8774,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '07:00',
        closes: '22:00',
      },
    ],
    areaServed: businessConfig.primaryAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area}, ON`,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessConfig.stats.rating.toString(),
      reviewCount: businessConfig.stats.ratingCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pest Control and Wildlife Removal Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Pest Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bed Bug Extermination' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ant Extermination' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wasp & Hornet Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rodent & Mouse Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Humane Wildlife Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pest & Wildlife Proofing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Pest Management' } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': ['LocalBusiness', 'PestControl'],
      name: businessConfig.legalName,
      telephone: businessConfig.phone.raw,
      url: 'https://peststopinc.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Milton, Ontario',
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
