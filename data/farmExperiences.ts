export type FarmExperience = {
  slug: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  location: string;
  price: string;
  highlights: string[];
  impact: string;
};

export const farmExperiences: FarmExperience[] = [
  {
    slug: "harvest-and-learn",
    title: "Harvest & learn",
    description: "Follow a crop from soil to basket with a farmer-led morning in the fields.",
    image: "/images/farm.jpeg",
    duration: "2 hours",
    location: "Alibaug, Maharashtra",
    price: "₹650",
    highlights: ["Seasonal field walk", "Meet a grower", "Harvest-to-basket lesson"],
    impact: "Supports farmer-led learning and keeps agricultural knowledge local.",
  },
  {
    slug: "kitchen-to-table",
    title: "Kitchen to table",
    description: "Pick seasonal ingredients, then turn them into a generous regional lunch.",
    image: "/images/about-sourcing-4.jpg",
    duration: "3 hours",
    location: "Nashik, Maharashtra",
    price: "₹1,200",
    highlights: ["Market garden tour", "Shared cooking", "Regional lunch"],
    impact: "Creates direct value for local cooks and small-scale growers.",
  },
  {
    slug: "golden-hour-trail",
    title: "Golden hour trail",
    description: "Walk through the paddies as the light changes and hear the stories of this place.",
    image: "/images/grain.jpeg",
    duration: "90 minutes",
    location: "Kolhapur, Maharashtra",
    price: "₹450",
    highlights: ["Guided nature walk", "Farm stories", "Sunset viewing"],
    impact: "Encourages low-impact travel and respect for working landscapes.",
  },
  {
    slug: "seed-library",
    title: "The seed library",
    description: "Discover native grains, save seeds, and learn why crop diversity matters.",
    image: "/images/about-sourcing-1.jpg",
    duration: "75 minutes",
    location: "Pune, Maharashtra",
    price: "₹500",
    highlights: ["Seed-saving demo", "Crop diversity talk", "Take-home seed card"],
    impact: "Makes biodiversity and climate resilience part of every visit.",
  },
  {
    slug: "farm-friends",
    title: "Farm friends",
    description: "A gentle, joyful visit with the animals and the people who care for them.",
    image: "/images/about-sourcing-2.png",
    duration: "1.5 hours",
    location: "Alibaug, Maharashtra",
    price: "₹550",
    highlights: ["Animal care basics", "Family-friendly visit", "Meet the hosts"],
    impact: "Builds appreciation for animal care and diversified farm livelihoods.",
  },
  {
    slug: "slow-living-workshop",
    title: "Slow living workshop",
    description: "Make something useful with local materials and take a little countryside home.",
    image: "/images/about-sourcing-3.png",
    duration: "2 hours",
    location: "Nashik, Maharashtra",
    price: "₹900",
    highlights: ["Local craft lesson", "Natural materials", "Made-by-you keepsake"],
    impact: "Keeps craft skills visible while reducing reliance on disposable souvenirs.",
  },
];
