export interface PestItem {
  id: string;
  name: string;
  scientificName?: string;
  category: "Wildlife" | "Rodents" | "Crawling Insects" | "Flying Insects";
  image: string;
  badge: string;
  threatLevel: "High" | "Severe" | "Moderate";
  shortDescription: string;
  targetServiceSlug: string;
}

export const pestsCatalog: PestItem[] = [
  // Wildlife
  {
    id: "raccoon",
    name: "Raccoon",
    scientificName: "Procyon lotor",
    category: "Wildlife",
    image: "/images/pests/raccoon.jpg",
    badge: "Attic & Roof Threat",
    threatLevel: "Severe",
    shortDescription: "Tears open roof vents, soffits, and shingles to establish attic nursery dens and latrines.",
    targetServiceSlug: "raccoon-removal-milton"
  },
  {
    id: "squirrel",
    name: "Gray & Red Squirrel",
    scientificName: "Sciurus carolinensis",
    category: "Wildlife",
    image: "/images/pests/squirrel-roof.jpg",
    badge: "Electrical Hazard",
    threatLevel: "High",
    shortDescription: "Chews through roof fascia, vents, and attic wiring, creating severe hidden fire hazards.",
    targetServiceSlug: "squirrel-removal-milton"
  },
  {
    id: "bat",
    name: "Big & Little Brown Bat",
    scientificName: "Eptesicus fuscus / Myotis",
    category: "Wildlife",
    image: "/images/pests/bat-attic.jpg",
    badge: "Protected Species",
    threatLevel: "High",
    shortDescription: "Roosts in attics and soffits; guano deposits cause Histoplasmosis fungal health risks.",
    targetServiceSlug: "bat-removal-milton"
  },
  {
    id: "skunk",
    name: "Striped Skunk",
    scientificName: "Mephitis mephitis",
    category: "Wildlife",
    image: "/images/pests/skunk.jpg",
    badge: "Under-Deck Burrower",
    threatLevel: "High",
    shortDescription: "Burrows beneath decks, porches, and sheds; delivers blinding sulfurous spray when startled.",
    targetServiceSlug: "skunk-removal-milton"
  },
  {
    id: "canada-goose",
    name: "Canada Goose",
    scientificName: "Branta canadensis",
    category: "Wildlife",
    image: "/images/pests/canada-goose.webp",
    badge: "Commercial Nuisance",
    threatLevel: "Moderate",
    shortDescription: "Aggressive nesting and heavy droppings across commercial landscapes and retention ponds.",
    targetServiceSlug: "bird-control-milton"
  },
  {
    id: "pigeon-starling",
    name: "Starling & Sparrow",
    scientificName: "Sturnus vulgaris",
    category: "Wildlife",
    image: "/images/pests/starling.jpg",
    badge: "Vent Nester",
    threatLevel: "Moderate",
    shortDescription: "Clogs dryer exhausts and bathroom flues with twigs; corrosive droppings deface facades.",
    targetServiceSlug: "bird-control-milton"
  },

  // Rodents
  {
    id: "house-mouse",
    name: "House Mouse",
    scientificName: "Mus musculus",
    category: "Rodents",
    image: "/images/pests/mouse.jpg",
    badge: "Rapid Breeder",
    threatLevel: "High",
    shortDescription: "Invades kitchen pantries and basements, contaminating food and gnawing wires.",
    targetServiceSlug: "mouse-control-milton"
  },
  {
    id: "deer-mouse",
    name: "Deer Mouse",
    scientificName: "Peromyscus maniculatus",
    category: "Rodents",
    image: "/images/pests/mouse.jpg",
    badge: "Hantavirus Vector",
    threatLevel: "Severe",
    shortDescription: "White-bellied field mouse that enters attics each autumn; primary carrier of Hantavirus.",
    targetServiceSlug: "mouse-control-milton"
  },
  {
    id: "norway-rat",
    name: "Norway Rat",
    scientificName: "Rattus norvegicus",
    category: "Rodents",
    image: "/images/pests/norway-rat.png",
    badge: "Burrow Destroyer",
    threatLevel: "Severe",
    shortDescription: "Heavy ground burrower eroding concrete slabs, patio pavers, and sewer conduits.",
    targetServiceSlug: "rat-control-milton"
  },
  {
    id: "roof-rat",
    name: "Roof Rat",
    scientificName: "Rattus rattus",
    category: "Rodents",
    image: "/images/pests/roof-rat.jpg",
    badge: "Agile Climber",
    threatLevel: "High",
    shortDescription: "Nests in upper levels, attics, and ceilings, gnawing structural framing and pipes.",
    targetServiceSlug: "rat-control-milton"
  },

  // Crawling Insects
  {
    id: "carpenter-ant",
    name: "Carpenter Ant",
    scientificName: "Camponotus pennsylvanicus",
    category: "Crawling Insects",
    image: "/images/pests/carpenter-ant.png",
    badge: "Wood Destroyer",
    threatLevel: "Severe",
    shortDescription: "Excavates structural wood framing and window headers, compromising home integrity.",
    targetServiceSlug: "ant-control-milton"
  },
  {
    id: "pharaoh-ant",
    name: "Pharaoh Ant",
    scientificName: "Monomorium pharaonis",
    category: "Crawling Insects",
    image: "/images/pests/pharaoh-ant.png",
    badge: "Budding Colony",
    threatLevel: "High",
    shortDescription: "Tiny yellow ants nesting in electrical outlets and plumbing walls; spreads bacteria.",
    targetServiceSlug: "ant-control-milton"
  },
  {
    id: "bed-bug",
    name: "Bed Bug",
    scientificName: "Cimex lectularius",
    category: "Crawling Insects",
    image: "/images/pests/bed-bug.png",
    badge: "Blood Feeder",
    threatLevel: "Severe",
    shortDescription: "Hides in mattresses, headboards, and baseboards; delivers itchy nighttime bites.",
    targetServiceSlug: "bed-bug-control-milton"
  },
  {
    id: "cockroach",
    name: "German & American Roach",
    scientificName: "Blattella germanica",
    category: "Crawling Insects",
    image: "/images/pests/cockroach.jpg",
    badge: "Asthma & Bacteria",
    threatLevel: "Severe",
    shortDescription: "Prolific indoor breeder in kitchens and drains; triggers severe respiratory allergies.",
    targetServiceSlug: "cockroach-control-milton"
  },
  {
    id: "carpet-beetle",
    name: "Varied Carpet Beetle",
    scientificName: "Anthrenus verbasci",
    category: "Crawling Insects",
    image: "/images/pests/carpet-beetle.jpg",
    badge: "Fabric Destroyer",
    threatLevel: "Moderate",
    shortDescription: "Larvae consume natural wool, silk, feathers, and carpets, causing bald fabric patches.",
    targetServiceSlug: "pest-control-milton"
  },
  {
    id: "spider",
    name: "Wolf & Cellar Spider",
    scientificName: "Araneae",
    category: "Crawling Insects",
    image: "/images/pests/spider.webp",
    badge: "Web Spinner",
    threatLevel: "Moderate",
    shortDescription: "Spins messy webs around windows, basements, and light fixtures; delivers sharp bites.",
    targetServiceSlug: "spider-control-milton"
  },
  {
    id: "tick",
    name: "Blacklegged Deer Tick",
    scientificName: "Ixodes scapularis",
    category: "Crawling Insects",
    image: "/images/pests/tick.webp",
    badge: "Lyme Disease",
    threatLevel: "High",
    shortDescription: "Perimeter lawn pest transported by rodents and deer; primary carrier of Lyme disease.",
    targetServiceSlug: "pest-control-milton"
  },
  {
    id: "cricket",
    name: "Field & House Cricket",
    scientificName: "Gryllidae",
    category: "Crawling Insects",
    image: "/images/pests/cricket.webp",
    badge: "Basement Invader",
    threatLevel: "Moderate",
    shortDescription: "Invades damp basements in late summer, chewing on fabrics and creating loud chirping.",
    targetServiceSlug: "pest-control-milton"
  },

  // Flying Insects
  {
    id: "wasp-hornet",
    name: "Wasp & Hornet",
    scientificName: "Vespula / Vespa",
    category: "Flying Insects",
    image: "/images/pests/wasp.png",
    badge: "Severe Sting Hazard",
    threatLevel: "Severe",
    shortDescription: "Aggressive stinging paper wasps, yellowjackets, and bald-faced hornets on eaves and decks.",
    targetServiceSlug: "wasp-removal-milton"
  },
  {
    id: "carpenter-bee",
    name: "Carpenter Bee",
    scientificName: "Xylocopa",
    category: "Flying Insects",
    image: "/images/pests/carpenter-bee.png",
    badge: "Deck Wood Borer",
    threatLevel: "Moderate",
    shortDescription: "Bores neat 1/2-inch round tunnels into unpainted deck railings, pergolas, and roof trim.",
    targetServiceSlug: "wasp-removal-milton"
  }
];
