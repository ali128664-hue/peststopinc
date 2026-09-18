export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  verified: boolean;
  content: string;
  source: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Dave & Sarah M.",
    location: "Milton (Hawthorne Village)",
    rating: 5,
    date: "August 2025",
    service: "Wasp & Carpenter Bee Removal",
    verified: true,
    source: "Verified Customer Review",
    content: "We have used Pest Stop Inc. twice now — once for a stubborn carpenter bee issue boring into our back deck and again for paper wasps under the second-story roof eaves. Both experiences were excellent. Arham was incredibly responsive to our requests, arriving promptly within hours and taking the time to explain everything clearly. The pricing was very reasonable, and the customer service was top-notch. We highly recommend Pest Stop Inc. to anyone in Milton!",
  },
  {
    id: "rev-2",
    author: "Mark T.",
    location: "Milton (Dorset Park)",
    rating: 5,
    date: "July 2025",
    service: "Emergency Wasp Nest Removal",
    verified: true,
    source: "Verified Customer Review",
    content: "We found a VERY large active wasp nest today inside our detached garage ceiling. With two young children playing outside, we couldn't wait. We called Pest Stop Inc. and they arrived within the hour to treat and safely remove the entire nest. Great, fast, efficient service. Fantastic relief and peace of mind.",
  },
  {
    id: "rev-3",
    author: "Elena R.",
    location: "Milton (Clarke Community)",
    rating: 5,
    date: "September 2025",
    service: "Wasp & Hornet Control",
    verified: true,
    source: "Verified Customer Review",
    content: "Wasp nest removal. Very friendly technician, arrived fast, came within the hour of calling. Fantastic service, highly recommend. Will definitely use again if any other pests show up.",
  },
  {
    id: "rev-4",
    author: "Gurpreet S.",
    location: "Milton (Coates)",
    rating: 5,
    date: "November 2025",
    service: "Mouse & Rodent Proofing",
    verified: true,
    source: "Verified Customer Review",
    content: "Heard mice scratching in the attic above the master bedroom as soon as temperatures dropped in November. Pest Stop did a complete interior attic inspection and exterior perimeter walk. They found two hidden entry gaps behind the AC lines and sealed them with steel mesh after trapping the mice. Clean, polite, and zero noise since. Excellent warranty too.",
  },
  {
    id: "rev-5",
    author: "Jason P.",
    location: "Milton (Old Milton)",
    rating: 5,
    date: "May 2025",
    service: "Carpenter Ant Treatment",
    verified: true,
    source: "Verified Customer Review",
    content: "Had large black carpenter ants emerging around our kitchen island and patio slider in our older Milton home. Pest Stop tracked down the satellite nest, applied non-repellent transfer treatment, and sprayed the exterior foundation perimeter. Within one week, completely gone. Highly professional team.",
  },
  {
    id: "rev-6",
    author: "Tariq K.",
    location: "Milton (Beaty)",
    rating: 5,
    date: "October 2025",
    service: "Humane Raccoon Removal",
    verified: true,
    source: "Verified Customer Review",
    content: "A raccoon tore open the roof soffit on our roof corner. Pest Stop installed a heavy-gauge one-way exclusion door so the animal could safely leave but not return, and once out, they secured the roof damage with galvanized steel screening. Humane, clean, and prevented thousands in roof water damage.",
  }
];
