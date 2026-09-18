export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const masterFaqs: FaqItem[] = [
  {
    question: "What types of pests and wildlife do you handle in Milton?",
    answer: "Pest Stop Inc. provides complete eradication and humane exclusion for all crawling insects (carpenter ants, pharaoh ants, pavement ants, bed bugs, German cockroaches, American cockroaches, spiders, ticks, carpet beetles, crickets), flying insects (wasps, hornets, yellowjackets, carpenter bees, flies, mosquitoes), rodents (house mice, deer mice, Norway rats, roof rats), and nuisance wildlife (raccoons, squirrels, bats, skunks, geese, and pest birds).",
    category: "General"
  },
  {
    question: "Are your pest control methods safe for children, pets, and the environment?",
    answer: "Yes, family and pet safety is our top priority. We utilize Integrated Pest Management (IPM) methodologies emphasizing targeted applications, tamper-resistant locked bait stations, physical exclusion barriers, and Health Canada PMRA-registered eco-responsible products. Our licensed technicians provide clear re-entry instructions to ensure your loved ones remain safe.",
    category: "Safety"
  },
  {
    question: "Can I stay home during the pest control treatment?",
    answer: "It depends on the specific service. For exterior perimeter barriers, rodent baiting, and wildlife exclusion, you may remain inside your home comfortably. For broadcast aerosol treatments or interior chemical applications (such as advanced bed bug or heavy flea treatments), Health Canada safety protocols require vacating the property for 4 to 6 hours until surfaces are completely dry and ventilated.",
    category: "Safety"
  },
  {
    question: "How quickly can you respond to an emergency pest infestation in Milton?",
    answer: "We offer same-day and emergency pest control dispatch throughout Milton and the Halton Region 7 days a week from 7:00 AM to 10:00 PM. For active stings (wasps/hornets), sudden raccoon attic intrusions, or severe rodent infestations, our local technicians are frequently on-site within 1 to 2 hours of your call.",
    category: "Service"
  },
  {
    question: "How long does it take to see results after treatment?",
    answer: "For wasp nest removals and direct contact sprays, results are immediate (within hours). For ant colonies, German cockroaches, and rodents, our non-repellent formulations and baiting systems work within 3 to 10 days as the active ingredients are transferred back to the core nesting galleries, ensuring total colony elimination.",
    category: "Treatment"
  },
  {
    question: "Do you offer warranties and service guarantees?",
    answer: "Yes. All structural pest treatments and wildlife exclusion repairs come with a written warranty. If target pests reappear within the guaranteed warranty period following our prescribed protocol, our technicians will return and re-treat your property at zero additional cost to you.",
    category: "Warranty"
  },
  {
    question: "What should I expect during an initial pest inspection?",
    answer: "Our licensed technician conducts a thorough 360-degree assessment of your property: identifying the exact species, locating primary nesting harborages, discovering hidden structural entry points (such as weep holes, unsealed conduit, roof vents, or damaged soffits), evaluating conducive conditions (moisture, food sources), and presenting a transparent upfront quote before any work begins.",
    category: "Inspection"
  },
  {
    question: "What is pest proofing and why is it important?",
    answer: "Pest proofing is physical exclusion: sealing the architectural gaps, foundation fissures, roof line vents, chimney tops, and weep holes that pests and wildlife use to invade your building. While extermination resolves the current population, pest proofing is a one-time permanent investment that stops future generations from entering.",
    category: "Prevention"
  },
  {
    question: "Do you provide commercial pest control for Milton businesses?",
    answer: "Yes. We manage pest prevention programs for restaurants, food processing facilities, warehouses, logistics hubs, retail plazas, property management portfolios, and medical offices across Milton. We provide discreet service, digital inspection logs, and documentation compliant with Health Protection and Promotion Act (HPPA) and HACCP standards.",
    category: "Commercial"
  }
];
