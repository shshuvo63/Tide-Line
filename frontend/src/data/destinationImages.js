// Destination photography, keyed by trip id (see backend/src/data/trips.json).
// Sources: Pexels (free licence) and Wikimedia Commons. Each entry builds a URL for a requested width
// and always crops to 16:9, so every card gets the same aspect ratio.

const pexels = (id) => (w) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${Math.round((w * 9) / 16)}`;

const commons = (file) => (w) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;

export const destinationImages = [
  { id: 1, title: 'Santorini Escape', url: pexels(3215009), alt: 'Whitewashed buildings and blue church domes in Oia, Santorini, above the Aegean Sea' },
  { id: 2, title: 'Kyoto in Bloom', url: pexels(16153999), alt: 'Traditional Japanese pagoda framed by pink cherry blossoms in Kyoto in spring' },
  { id: 3, title: 'Sundarbans River Trail', url: commons('River View of Sundarban,Khulna.jpg'), alt: 'River channel winding through the Sundarbans mangrove forest near Khulna, Bangladesh' },
  { id: 4, title: 'Amalfi Coast Drive', url: pexels(26976150), alt: 'Colorful cliffside houses of Positano on the Amalfi Coast above the Mediterranean Sea' },
  { id: 5, title: 'Serengeti Safari', url: pexels(33650618), alt: 'African elephants walking across the golden savanna of Serengeti National Park, Tanzania' },
  { id: 6, title: 'Patagonia Trek', url: pexels(30530388), alt: 'Mount Fitz Roy rising above a turquoise lake near El Chaltén, Patagonia, Argentina' },
  { id: 7, title: 'Maldives Overwater', url: pexels(28843940), alt: 'Overwater villas on stilts above the turquoise lagoon of the Maldives, seen from above' },
  { id: 8, title: 'Cusco & Machu Picchu', url: pexels(6176481), alt: 'Inca ruins of Machu Picchu among lush green Andes mountains in Peru' },
];

const byId = Object.fromEntries(destinationImages.map((d) => [d.id, d]));
export const getDestinationImage = (tripId) => byId[tripId];

// Shown if a photo fails to load. Inline SVG, so it works offline.
export const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b6e7f"/><stop offset="1" stop-color="#08323b"/></linearGradient></defs><rect width="16" height="9" fill="url(#g)"/><path d="M0 7 L4 4 L6.5 6 L10 2.5 L16 7.5 V9 H0Z" fill="#ffffff" fill-opacity=".18"/></svg>`
  );

export const IMAGE_WIDTHS = [480, 800];

// Hero carousel photographs (Pexels). `position` keeps the subject visible when the image is cropped;
// `origin` is where the slow Ken Burns zoom is anchored.
export const HERO_SLIDES = [
  { id: 'maldives', label: 'Maldives', url: pexels(38238), position: '70% 50%', origin: '70% 55%', alt: 'Overwater bungalows above a clear turquoise lagoon in the Maldives' },
  { id: 'patagonia', label: 'Patagonia, Argentina', url: pexels(30530388), position: '50% 45%', origin: '50% 40%', alt: 'Mount Fitz Roy rising above a turquoise lake in Patagonia' },
  { id: 'santorini', label: 'Santorini, Greece', url: pexels(3215009), position: '50% 55%', origin: '40% 60%', alt: 'Whitewashed buildings and blue church domes in Oia, Santorini' },
  { id: 'rainforest', label: 'Waterfall and rainforest', url: pexels(28824190), position: '50% 50%', origin: '50% 50%', alt: 'Waterfall cascading through lush green rainforest' },
  { id: 'machu-picchu', label: 'Machu Picchu, Peru', url: pexels(6176481), position: '50% 55%', origin: '55% 50%', alt: 'Inca ruins of Machu Picchu among lush green Andes mountains' },
];
export const HERO_WIDTHS = [800, 1280, 1920];
