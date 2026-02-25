// Centralized product data extracted from page-level constants and inline component definitions.
// Data shapes are preserved exactly as they were — no values, keys, or ordering has changed.

import { HomeProduct, HomeCollection } from '../types/common';
import { Product as CollectionProduct } from '../pages/collection/types';
import { Product as BoutiqueProduct } from '../pages/boutique/types';
import { Product as ProductShapeProduct } from '../pages/product-shape/types';

// ---------------------------------------------------------------------------
// Home page product data (previously in src/pages/home/constants.tsx)
// ---------------------------------------------------------------------------

const HOME_PLACEHOLDER = 'https://placehold.co/1200x1600/F9F6F1/D4C4A8?text=REPLACE+IMAGE';

export const HOME_PRODUCTS: HomeProduct[] = [
  {
    id: 'ring-5',
    name: 'Hera Trilogy Three-Stone Ring',
    category: 'RINGS',
    price: '$4,800',
    image: HOME_PLACEHOLDER,
    description: 'Three stones. One story. A timeless expression of past, present, and future.'
  },
  {
    id: 'ring-10',
    name: 'Pavé Half Eternity Band',
    category: 'RINGS',
    price: '$2,600',
    image: HOME_PLACEHOLDER,
    description: 'Brilliant diamonds set in a continuous pavé arc — effortless luxury.'
  },
  {
    id: 'ring-15',
    name: 'Signature Marquise Ring',
    category: 'RINGS',
    price: '$3,800',
    image: HOME_PLACEHOLDER,
    description: 'The elongated marquise — bold, architectural, and unmistakably ORÉA.'
  },
  {
    id: 'pendant-1',
    name: 'Solitaire Pendant',
    category: 'PENDANTS',
    price: '$1,200',
    image: HOME_PLACEHOLDER,
    description: 'A single diamond, suspended in refined gold. Pure and enduring.'
  },
  {
    id: 'ring-9',
    name: 'Oval Solitaire Ring',
    category: 'RINGS',
    price: '$3,200',
    image: HOME_PLACEHOLDER,
    description: 'The oval cut — a study in grace, proportion, and lasting brilliance.'
  },
  {
    id: 'necklace-5',
    name: 'Orbit Bezel Diamond Necklace',
    category: 'NECKLACES',
    price: '$1,800',
    image: HOME_PLACEHOLDER,
    description: 'A bezel-set diamond orbits gently — modern, minimal, and wearable every day.'
  }
];

export const HOME_COLLECTIONS: HomeCollection[] = [
  {
    id: 'rings',
    title: 'RINGS',
    image: HOME_PLACEHOLDER,
    link: '#rings'
  },
  {
    id: 'fine-jewellery',
    title: 'FINE JEWELLERY',
    image: HOME_PLACEHOLDER,
    link: '#fine-jewellery'
  },
  {
    id: 'bespoke',
    title: 'BESPOKE',
    image: HOME_PLACEHOLDER,
    link: '#bespoke'
  },
  {
    id: 'about',
    title: 'ABOUT ORÉA',
    image: HOME_PLACEHOLDER,
    link: '#about'
  }
];

// ---------------------------------------------------------------------------
// Collection page product data (previously in src/pages/collection/constants.ts)
// ---------------------------------------------------------------------------

export const COLLECTION_PRODUCTS: CollectionProduct[] = [
  // --- Bracelets ---
  {
    id: 'bracelet-1',
    name: 'Solitaire Bracelet',
    price: 1850,
    category: 'Bracelets',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'bracelet-2',
    name: 'Five-Stone Bezel Diamond Bracelet',
    price: 3200,
    category: 'Bracelets',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'bracelet-3',
    name: 'Floating Bezel Diamond Bracelet',
    price: 2400,
    category: 'Bracelets',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  // --- Pendants ---
  {
    id: 'pendant-1',
    name: 'Solitaire Pendant',
    price: 1450,
    category: 'Pendants',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'pendant-2',
    name: 'Cross Diamond Pendant',
    price: 2100,
    category: 'Pendants',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  // --- Earrings ---
  {
    id: 'earring-1',
    name: 'Solitaire Studs',
    price: 1250,
    category: 'Earrings',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'earring-2',
    name: 'Cascade Diamond Earrings',
    price: 2800,
    category: 'Earrings',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'earring-3',
    name: 'Clover Diamond Studs',
    price: 1950,
    category: 'Earrings',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'earring-4',
    name: 'Heart Diamond Studs',
    price: 1750,
    category: 'Earrings',
    shape: 'Heart',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'earring-5',
    name: 'Orbit Bezel Diamond Studs',
    price: 1600,
    category: 'Earrings',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  // --- Necklaces ---
  {
    id: 'necklace-1',
    name: 'Solitaire Necklace',
    price: 1650,
    category: 'Necklaces',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'necklace-2',
    name: 'Curved Bar Diamond Necklace',
    price: 2400,
    category: 'Necklaces',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'necklace-3',
    name: 'Floating Diamond Necklace',
    price: 1950,
    category: 'Necklaces',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'necklace-4',
    name: 'Heart Diamond Necklace',
    price: 2100,
    category: 'Necklaces',
    shape: 'Heart',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'necklace-5',
    name: 'Orbit Bezel Diamond Necklace',
    price: 1800,
    category: 'Necklaces',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  // --- Rings ---
  {
    id: 'ring-1',
    name: 'Alternating Diamond Band',
    price: 2800,
    category: 'Rings',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-2',
    name: 'Asscher Solitaire Ring',
    price: 3200,
    category: 'Rings',
    shape: 'Asscher',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-3',
    name: 'Cushion Solitaire Ring',
    price: 3200,
    category: 'Rings',
    shape: 'Cushion',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-4',
    name: 'Emerald Solitaire Ring',
    price: 3400,
    category: 'Rings',
    shape: 'Emerald',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-5',
    name: 'Hera Trilogy Three-Stone Ring',
    price: 4800,
    category: 'Rings',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-6',
    name: 'Marquise Solitaire Ring',
    price: 3200,
    category: 'Rings',
    shape: 'Marquise',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-7',
    name: 'Nova Trilogy Three-Stone Ring',
    price: 5100,
    category: 'Rings',
    shape: 'Oval',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-8',
    name: 'Oval Half Eternity Band',
    price: 3600,
    category: 'Rings',
    shape: 'Oval',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-9',
    name: 'Oval Solitaire Ring',
    price: 3200,
    category: 'Rings',
    shape: 'Oval',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-10',
    name: 'Pavé Half Eternity Band',
    price: 2600,
    category: 'Rings',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-11',
    name: 'Pear Solitaire Ring',
    price: 3200,
    category: 'Rings',
    shape: 'Pear',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-12',
    name: 'Princess Solitaire Ring',
    price: 3200,
    category: 'Rings',
    shape: 'Princess',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-13',
    name: 'Radiant Solitaire Ring',
    price: 3400,
    category: 'Rings',
    shape: 'Radiant',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-14',
    name: 'Round Solitaire Ring',
    price: 3000,
    category: 'Rings',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-15',
    name: 'Signature Marquise Ring',
    price: 3800,
    category: 'Rings',
    shape: 'Marquise',
    imageUrl: '',
    hoverImageUrl: ''
  },
  {
    id: 'ring-16',
    name: 'The Rosé Trilogy Ring',
    price: 5400,
    category: 'Rings',
    shape: 'Round',
    imageUrl: '',
    hoverImageUrl: ''
  }
];

// ---------------------------------------------------------------------------
// Boutique page product (previously inline DEFAULT_OREA_PRODUCT in BoutiquePage.tsx)
// ---------------------------------------------------------------------------

export const BOUTIQUE_PRODUCT: BoutiqueProduct = {
  id: 'orea-emerald-001',
  name: 'Classic Solitaire Ring - Emerald',
  price: 1850,
  description: 'A celebration of modern love and classic architecture. The Emerald focal stone is held in a minimalist cathedral setting, meticulously engineered to allow your wedding band to sit completely flush.',
  materials: ['Solid 14k or 18k Gold', 'Platinum', 'IGI Certified Lab-Grown Diamond'],
  options: {
    metal: ['Platinum', '18k Yellow Gold', '18k White Gold', '14k Yellow Gold', '14k White Gold'],
    carat: ['1.0CT', '1.5CT', '2.0CT', '2.5CT', '3.0CT', '3+ ct'],
    size: ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '0', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  },
  images: [
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-1_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-2_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-3_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-4_1200x.jpg?v=1710924432',
  ],
  variants: [
    { id: 1001, title: 'Platinum / 1.0CT / L', option1: 'Platinum', option2: '1.0CT', option3: 'L', price: 1850, available: true },
    { id: 1002, title: '18k Yellow Gold / 1.0CT / L', option1: '18k Yellow Gold', option2: '1.0CT', option3: 'L', price: 1850, available: true },
  ]
};

// ---------------------------------------------------------------------------
// Product-shape page product (previously inline DEFAULT_OREA_PRODUCT in ProductShapePage.tsx)
// ---------------------------------------------------------------------------

export const PRODUCT_SHAPE_PRODUCT: ProductShapeProduct = {
  id: 'orea-emerald-necklace-001',
  name: 'Classic Solitaire Necklace - Emerald',
  price: 1850,
  description: 'A celebration of modern love and classic architecture. The Emerald focal stone is held in a minimalist setting, meticulously engineered to catch the light from every angle.',
  materials: ['Solid 14k or 18k Gold', 'IGI Certified Lab-Grown Diamond'],
  options: {
    metal: ['18k Yellow Gold', '18k White Gold', '14k Yellow Gold', '14k White Gold'],
    shape: ['Round', 'Oval', 'Pear', 'Marquise', 'Princess', 'Emerald', 'Radiant', 'Asscher', 'Cushion', 'Heart'],

    carat: ['1.0CT'],
    size: ['45cm']
  },
  images: [
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-1_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-2_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-3_1200x.jpg?v=1710924432',
    'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-4_1200x.jpg?v=1710924432',
  ],
  variants: [
    { id: 1001, title: '18k Yellow Gold', option1: '18k Yellow Gold', option2: 'Emerald', option3: '45cm', price: 1850, available: true },
    { id: 1002, title: '18k White Gold', option1: '18k White Gold', option2: 'Emerald', option3: '45cm', price: 1850, available: true },
  ]
};
