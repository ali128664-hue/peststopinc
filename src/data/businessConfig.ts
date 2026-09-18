export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  address: {
    street: string;
    suite: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  phone: {
    raw: string;
    formatted: string;
    telLink: string;
  };
  email: string;
  hours: {
    days: string;
    time: string;
    emergency: string;
  };
  stats: {
    rating: number;
    ratingCount: number;
    completedServices: string;
    yearsInMilton: string;
    satisfactionRate: string;
  };
  licenseInfo: string;
  socials: {
    facebook?: string;
    instagram?: string;
  };
  primaryAreas: string[];
}

export const businessConfig: BusinessConfig = {
  name: "Pest Stop Inc.",
  legalName: "Pest Stop Inc. Pest Control Services",
  tagline: "Professional Pest & Wildlife Management in Milton, Ontario",
  address: {
    street: "565 Miller Way",
    suite: "#565",
    city: "Milton",
    province: "ON",
    postalCode: "L9T 8L8",
    country: "Canada",
    fullFormatted: "#565, Milton, ON L9T 8L8, Canada",
  },
  phone: {
    raw: "+14379227700",
    formatted: "(437) 922-7700",
    telLink: "tel:+14379227700",
  },
  email: "peststopinc786@gmail.com",
  hours: {
    days: "Monday – Sunday",
    time: "7:00 AM – 10:00 PM",
    emergency: "24/7 Emergency Dispatch Available",
  },
  stats: {
    rating: 4.9,
    ratingCount: 148,
    completedServices: "2,000+",
    yearsInMilton: "3+ Years",
    satisfactionRate: "100%",
  },
  licenseInfo: "Licensed Structural Exterminator (Ontario Ministry of Environment, Conservation and Parks) & Health Canada PMRA Compliant",
  socials: {
    facebook: "https://facebook.com/peststopinc",
  },
  primaryAreas: [
    "Milton",
    "Campbellville",
    "Halton Hills",
    "Georgetown",
    "Acton",
    "Oakville",
    "Burlington",
    "Mississauga",
    "Brampton",
  ],
};
