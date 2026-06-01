import casaFigueira from "@/assets/project-casa-figueira.jpg";
import littleBirch from "@/assets/project-little-birch.jpg";
import gatewayHouse from "@/assets/project-gateway-house.jpg";
import casaballin from "@/assets/project-casaballin.jpg";
import permanentWeekender from "@/assets/project-permanent-weekender.jpg";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  type: string;
  image: string;
  excerpt: string;
  body: string[];
  team?: string[];
  features?: string[];
  awards?: string[];
};

export const projects: Project[] = [
  {
    slug: "casa-figueira",
    title: "Casa Figueira",
    location: "Rose Bay, Sydney",
    year: "2017 — 2020",
    type: "Architecture & Interiors — Private Residence",
    image: casaFigueira,
    excerpt:
      "Named after and centred around a century-old heritage-protected fig tree, a truly bespoke family home balancing poise and resilience.",
    body: [
      "Casa Figueira is named after and centred around the century old heritage protected fig tree. A highly complex design resolution relied on a collaborative approach. As lead Architect, we focussed on tangibility, materiality and detail, to hone the design processes, and deliver a truly bespoke family home balancing poise and resilience.",
      "Behind a rammed earth spine wall the program unfolds into an open air living space enveloping a central courtyard. Under large span off form concrete ceilings, floor to ceiling glazing frames and draws the experience to the surrounding cultivated landscape. Signature chimney structures draw the eye upward as restrained lines of American walnut joinery with bronze touch points carefully conceal service areas and equipment, allowing the main program to be read uninterrupted.",
      "Balancing aesthetics and performance, material selection and detailing was key, to withstand the test of time and allow the home to weather gracefully. Set to patina gently against its backdrop, the home provides a lasting respite from the bustling city beyond.",
    ],
    team: [
      "Lead Architect — buck&simple",
      "Landscape Design — Dangar Barin Smith",
      "Interiors — Atelier Alwill",
      "Joinery design & detailing — buck&simple",
      "Design Architect (Pre-Tender) — Luigi Rosselli",
      "Builder — Morrison Homes",
      "Photography — Prue Ruscoe",
    ],
    features: ["Architectural Digest Italia", "Est Living", "The Local Project", "Design Milk"],
  },
  {
    slug: "little-birch",
    title: "Little Birch",
    location: "Little Bay, Sydney",
    year: "2021 — 2025",
    type: "Architecture & Interiors — Private Residence",
    image: littleBirch,
    excerpt:
      "A case study in the bespoke detail — resort vibes, domestic ease — realising a young family's dream of calm adjacent to the daily grind.",
    body: [
      "Little Birch represents a case study in the bespoke detail. Realising a young family's dream to achieve the day to day calm of resort living adjacent to the daily grind. Resort vibes, domestic ease.",
      "The site presented as a compact urban setting with our challenge to conceal, direct and connect to spaces beyond. The exterior presents to the established streetscape as intersection of tectonic forms, mass and planes; the simple geometry provides a counterpoint to the neighbourhood's incoherent mish-mash of typologies.",
      "Descending from the street level sees glimpses of district views recede before you're enveloped in a garden oasis shared across indoor-outdoor entertaining and lower ground living spaces. Planar joinery conceals service & private areas of the program, while ribbon-like concrete stairs puncture the double height void connecting & engaging across the home.",
      "Little Birch demonstrates how passive house design principles and sustainable home design can be seamlessly embedded within a contemporary family residence — reinforced by on-site solar generation, battery storage, EV charging and an integrated smart home system.",
    ],
    team: [
      "Architect — buck&simple",
      "Interiors — buck&simple",
      "Landscape Design — Bates Landscape",
      "Builder — Prostruct",
      "Photography — Tim Pascoe",
    ],
    features: ["Arch Daily", "Dwell.com", "Amazing Architecture"],
    awards: ["Architizer Awards — Special Mention"],
  },
  {
    slug: "gateway-house",
    title: "Gateway House",
    location: "Seaforth, Northern Beaches",
    year: "2025",
    type: "Architecture & Interiors — Private Residence",
    image: gatewayHouse,
    excerpt:
      "A connected, private family retreat overlooking Middle Harbour, designed for privacy, outdoor living and coastal connection.",
    body: [
      "Scheduled for completion in 2025, Gateway House envelops and layers to form a connected, private family retreat on Sydney's Northern Beaches.",
      "From the street, a sculptural secondary dwelling presents as the main address — its battened curves and layered forms concealing the residence behind. A central walkway draws visitors through this gateway structure and into a private courtyard framed by warm materials, soft landscaping, and a generous covered entertaining area.",
      "At the heart of the courtyard, a custom stone outdoor fireplace rises from the ground and pierces the concrete eave above, anchoring the space with warmth and architectural drama.",
      "Green roofs crown both buildings, improving thermal performance and blurring the threshold between built form and nature — a key design gesture in this Northern Beaches family home.",
    ],
  },
  {
    slug: "casaballin",
    title: "Casaballin",
    location: "Warriewood, Northern Beaches",
    year: "2021 — 2024",
    type: "Architecture & Interiors — Private Residence",
    image: casaballin,
    excerpt:
      "Perched on a sandstone cliff between the beach and the headland — meticulously detailed and imbued with retro feeling.",
    body: [
      "Casaballin occupies a prominent position on top of a sandstone cliff, perched between the beach and the headland on Sydney's Northern Beaches.",
      "Meticulously detailed, imbued with a retro feeling in keeping with the original home, and capped off with a vintage diving board.",
    ],
    team: [
      "Architect — buck&simple",
      "Interiors — buck&simple",
      "Landscape Design — Bates Landscape",
      "Builder — TN Made",
      "Photography — Tim Pascoe",
    ],
    features: ["Arch Daily", "Architizer", "Amazing Architecture"],
  },
  {
    slug: "permanent-weekender",
    title: "Permanent Weekender",
    location: "Wagstaffe, Central Coast",
    year: "2018 — 2021",
    type: "Architecture & Interiors — Private Residence",
    image: permanentWeekender,
    excerpt:
      "The realisation of a dream to live in the trees overlooking the water — friendly, warm and calm.",
    body: [
      "Permanent Weekender is the realisation of a dream to live in the trees overlooking the water. The layout consists of public and private wings that create a raised courtyard, open on one side to frame the view and create a place of refuge from the elements.",
      "The home is friendly, warm and calm, using natural light and materials to create interlocking spaces. Tactile materiality is used throughout, using a simple combination of recycled brick, concrete and recycled blackbutt to create a familiar palette and highlight the inherent texture and beauty of natural materials.",
      "Our clients' sea/green change is a common goal. To be more in touch with the surrounding environment and to live in a way that is more in tune with the outside world.",
    ],
    team: [
      "Architect — buck&simple",
      "Interiors — buck&simple",
      "Photography — Simon Whitbread",
    ],
    features: ["The Local Project — Wagstaffe House", "Habitus Living — A Downsizers Dream", "Arch Daily"],
  },
];

export const additionalWork = [
  { title: "Sasso Nero", location: "Northern Beaches, Sydney", year: "Current" },
  { title: "Whyte", location: "Northern Beaches, Sydney", year: "Current" },
  { title: "Pool House", location: "Sydney, NSW", year: "2024" },
  { title: "Four Bayes Beach House", location: "Avalon, Northern Beaches", year: "Current" },
  { title: "The Fold Beach House", location: "Northern Beaches, Sydney", year: "Current" },
  { title: "Fitzroy North", location: "Fitzroy North, Victoria", year: "2021" },
];

export const archive = [
  { title: "Gilliver", year: "2017" },
  { title: "Casa M", year: "2021" },
  { title: "Casa Crisp", year: "2016" },
  { title: "Punto di Vista", year: "—" },
  { title: "AC Residence", year: "2019" },
  { title: "a+h", year: "2018" },
  { title: "Curly Beach House", year: "—" },
  { title: "DK Beach House", year: "2017" },
  { title: "Torquay", year: "2019" },
  { title: "Soldiers", year: "—" },
  { title: "Macmasters Beach House", year: "2018" },
  { title: "B+V House", year: "2021" },
];

export const underConstruction = [
  { title: "Jin House" },
  { title: "Peak Mojo" },
];
