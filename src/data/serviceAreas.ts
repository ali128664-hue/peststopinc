export interface NeighbourhoodInfo {
  name: string;
  description: string;
  commonPests: string[];
}

export const miltonNeighbourhoods: NeighbourhoodInfo[] = [
  {
    name: "Hawthorne Village & Coates",
    description: "Modern brick-veneer master-planned communities featuring high rooflines and extensive weep holes vulnerable to mice, paper wasps, and carpenter ants.",
    commonPests: ["Mice", "Wasps", "Carpenter Ants", "Spiders"]
  },
  {
    name: "Clarke & Dempsey",
    description: "Close to conservation corridors and stormwater ponds with elevated pressures from foraging raccoons, skunks under decks, and seasonal mosquitoes.",
    commonPests: ["Raccoons", "Skunks", "Pavement Ants", "Wasps"]
  },
  {
    name: "Harrison, Willmott & Ford",
    description: "Rapidly growing south Milton developments bordering open farmland where field deer mice and rats frequently seek winter shelter in attics.",
    commonPests: ["Deer Mice", "Rats", "Hornets", "Spiders"]
  },
  {
    name: "Old Milton & Downtown",
    description: "Historic homes with mature tree canopies and older wooden architectural soffits that gray squirrels, bats, and carpenter ants frequently target.",
    commonPests: ["Squirrels", "Bats", "Carpenter Ants", "House Mice"]
  },
  {
    name: "Dorset Park & Timberlea",
    description: "Established residential neighbourhoods with mature backyards, garden sheds, and wood decks prone to under-deck skunk and raccoon burrowing.",
    commonPests: ["Skunks", "Raccoons", "Wasps", "Cockroaches"]
  },
  {
    name: "Campbellville & Escarpment Country",
    description: "Rural and semi-rural properties directly against the Niagara Escarpment experiencing heavy wildlife, bat colonies, mice, and carpenter bees.",
    commonPests: ["Bats", "Field Mice", "Carpenter Bees", "Raccoons"]
  }
];

export const surroundingTowns = [
  { name: "Campbellville", distance: "8 mins", eta: "Same-Day Dispatch" },
  { name: "Georgetown (Halton Hills)", distance: "15 mins", eta: "Same-Day Dispatch" },
  { name: "Acton", distance: "18 mins", eta: "Same-Day Dispatch" },
  { name: "Oakville", distance: "20 mins", eta: "Same-Day Dispatch" },
  { name: "Burlington", distance: "20 mins", eta: "Same-Day Dispatch" },
  { name: "Mississauga", distance: "22 mins", eta: "Same-Day Dispatch" },
  { name: "Brampton", distance: "25 mins", eta: "Same-Day Dispatch" },
];
