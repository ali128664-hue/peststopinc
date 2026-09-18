# Pest Stop Inc. — Premium Pest & Wildlife Control (Milton & Halton Region)

A high-performance, conversion-optimized, fully responsive web application built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS** for **Pest Stop Inc. Pest Control Services**.

Redesigned and engineered to deliver top-tier Local SEO (Milton & Halton Region), sub-second page loads (Lighthouse 95+ target), structured JSON-LD schemas, accessible WCAG AA compliance, and high conversion rates.

---

## 🏢 Business Information (Verified Citations)

- **Company Name**: Pest Stop Inc. Pest Control Services
- **Official Address**: #565, Milton, ON L9T 8L8, Canada (565 Miller Way)
- **Phone**: [+1 (437) 922-7700](tel:+14379227700)
- **Email**: [peststopinc786@gmail.com](mailto:peststopinc786@gmail.com)
- **Operating Hours**: Mon – Sun: 7:00 AM – 10:00 PM (24/7 Emergency Dispatch Available)
- **Local Service Coverage**: Milton (Old Milton, Coates, Hawthorne Village, Clarke, Dempsey, Beaty, Willmott, Harrison, Cobban, Ford, Walker, Britannia, Timberlea, Dorset Park, Bronte Meadows, Mountainview) and surrounding Halton/Peel municipalities (Oakville, Burlington, Mississauga, Georgetown/Halton Hills, Campbellville).
- **Credentials & Licenses**: Ontario Ministry of the Environment, Conservation and Parks (MECP) Licensed, SPCAO & NPMA Member, Humane Wildlife Control certified, 100% Satisfaction Guarantee.

---

## 🚀 Key Features

1. **Brand-Authentic Visual Identity**:
   - Official octagonal red stop sign logo (`/images/logo.svg` retina vector & `/images/logo.jpg`).
   - Signature brand palette: Crimson Red (`#DE1B26`), Deep Navy (`#0B1E36`), Slate Neutral (`#F8FAFC`).
   - Clean, professional typography (Inter + Outfit) with zero cartoon insects.

2. **Full Local SEO & Content Architecture**:
   - **17 Dedicated Service Landing Pages** pre-rendered via Next.js Static Site Generation (`generateStaticParams`):
     - General Pest Control Milton (`/pest-control-milton`)
     - Bed Bug Extermination (`/bed-bug-control-milton`)
     - Ant Control & Carpenter Ants (`/ant-control-milton`)
     - Cockroach Extermination (`/cockroach-control-milton`)
     - Wasp & Hornet Nest Removal (`/wasp-removal-milton`)
     - Spider Control (`/spider-control-milton`)
     - Rodent Control (`/rodent-control-milton`)
     - Mouse Control (`/mouse-control-milton`)
     - Rat Control (`/rat-control-milton`)
     - Humane Wildlife Removal (`/wildlife-removal-milton`)
     - Raccoon Removal & Proofing (`/raccoon-removal-milton`)
     - Squirrel Removal (`/squirrel-removal-milton`)
     - Bat Removal & Attic Remediation (`/bat-removal-milton`)
     - Skunk Removal (`/skunk-removal-milton`)
     - Bird Control & Deterrence (`/bird-control-milton`)
     - Home Pest Proofing & Exclusion (`/pest-proofing-milton`)
     - Commercial Pest Control (`/commercial-pest-control-milton`)
   - **Hub Pages**: `/services`, `/about-us`, `/contact-us`, `/privacy-policy`, `/terms`.
   - **Metadata & OpenGraph**: Rich titles, descriptions, canonical URLs, and social preview cards for every page.
   - **Automated Sitemap & Robots**: Dynamically generated `/sitemap.xml` and `/robots.txt`.

3. **Structured Data (Schema.org)**:
   - `LocalBusiness` & `PestControl` schema with verified geo-coordinates (`43.5183, -79.8774`), opening hours, telephone, price range, and service area.
   - `FAQPage` schema on homepage and service pages for Google Rich Snippets.
   - `Service` schema on all service pages.
   - `BreadcrumbList` schema on all subpages.

4. **High-Converting Interactive Tools**:
   - **Interactive Pest Selector**: Filter pests by category (Insects, Rodents, Wildlife, Birds) with instant symptoms, risks, and 1-click booking.
   - **Instant Quote & Pricing Calculator**: Multi-step quote calculator for residential and commercial spaces.
   - **Sticky Mobile Dispatch Bar**: Call Now and Free Quote buttons on all mobile viewports.
   - **Emergency Dispatch Indicator**: Real-time "Dispatching Today in Milton" status badge with live timer simulation.

5. **Performance & Accessibility**:
   - 100% Static HTML generation (SSG) with minimal first-load JS (~103 kB shared).
   - Optimized SVG icons (`lucide-react`) and responsive images.
   - Full keyboard navigation and WCAG AA contrast compliance.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, SSG)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI & Styling**: [Tailwind CSS 3](https://tailwindcss.com/), [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts via `next/font/google` (Inter, Outfit)
- **Package Manager**: npm

---

## 💻 Getting Started (Local Development)

### 1. Prerequisites
- Node.js 18.18+ or 20+ (Node 22 LTS tested)
- npm 9+

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/ali128664-hue/peststopinc.git
cd peststopinc

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
peststopinc/
├── public/
│   ├── images/
│   │   ├── logo.svg               # Official scalable vector stop sign logo
│   │   ├── logo.jpg               # Official original photographic logo
│   │   ├── favicon.svg            # Favicon
│   │   ├── technician-action.jpg  # Verified technician spraying perimeter
│   │   ├── service-truck.jpg      # Verified Pest Stop Inc. branded truck
│   │   ├── wasp-removal-action.jpg# Technician Arham removing nest
│   │   └── pests/                 # 21 high-res biological pest reference photos
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout, Google Fonts, global Schema.org
│   │   ├── page.tsx               # Homepage (~2,500 words, 18 structured sections)
│   │   ├── services/page.tsx      # Comprehensive Services Catalog hub
│   │   ├── about-us/page.tsx      # Company story, credentials, technician profiles
│   │   ├── contact-us/page.tsx    # Contact details, emergency dispatch & hours
│   │   ├── [serviceSlug]/page.tsx # SSG dynamic route pre-rendering 17 service pages
│   │   ├── privacy-policy/page.tsx# Privacy Policy (PIPEDA/Ontario compliant)
│   │   ├── terms/page.tsx         # Terms of Service & warranty details
│   │   ├── sitemap.ts             # Dynamic XML sitemap generator
│   │   └── robots.ts              # Search engine robots.txt
│   ├── components/
│   │   ├── Header.tsx             # Sticky navbar, emergency bar & mobile drawer
│   │   ├── Footer.tsx             # 4-column rich footer with NAP & trust badges
│   │   ├── MobileBottomBar.tsx    # Sticky mobile CTA (Call Now & Free Quote)
│   │   ├── PestSelector.tsx       # Interactive 21-species pest identification tool
│   │   ├── QuoteForm.tsx          # High-converting multi-step quote calculator
│   │   ├── QuoteModal.tsx         # Accessible quote request modal dialog
│   │   ├── ReviewCards.tsx        # Customer testimonials & verified review cards
│   │   ├── TrustStats.tsx         # Trust bar (jobs completed, warranty, rating)
│   │   ├── ServiceAreaSection.tsx # Milton & Halton Region municipal service areas
│   │   ├── Breadcrumbs.tsx        # Hierarchical navigation breadcrumbs
│   │   └── SchemaJsonLd.tsx       # Schema.org JSON-LD component
│   └── data/
│       ├── businessConfig.ts      # Master NAP, hours, credentials, metrics
│       ├── servicesData.ts        # Comprehensive 17-service deep dataset
│       ├── reviewsData.ts         # Verified customer reviews
│       ├── faqsData.ts            # Master FAQ dataset
│       ├── serviceAreas.ts        # Halton & Peel Region neighborhood catalog
│       └── pestsCatalog.ts        # 21-pest species catalog
├── next.config.ts                 # Next.js configuration & legacy 301 redirects
├── tailwind.config.ts             # Custom colors, fonts, shadows
└── tsconfig.json                  # TypeScript configuration
```

---

## 📜 License & Ownership
Copyright © 2026 Pest Stop Inc. All Rights Reserved.  
#565, Milton, ON L9T 8L8, Canada.
