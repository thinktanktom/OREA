
import { Product, Collection } from './types';

// Placeholder URL that is clearly labeled for replacement in Shopify
// Neutral colors to maintain the editorial layout without stock imagery
const PLACEHOLDER = 'https://placehold.co/1200x1600/F9F6F1/D4C4A8?text=REPLACE+IMAGE';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Trilogy Ring',
    category: 'ENGAGEMENT RINGS',
    price: '$4,200',
    image: PLACEHOLDER,
    description: 'A timeless expression of love, featuring a conflict-free lab-grown diamond.'
  },
  {
    id: '2',
    name: 'The Ellipse Ring',
    category: 'ETERNITY BANDS',
    price: '$3,850',
    image: PLACEHOLDER,
    description: 'Breathtaking brilliance in an elegant oval cut, hand-set in recycled gold.'
  },
  {
    id: '3',
    name: 'Solitaire Necklace',
    category: 'FINE JEWELLERY',
    price: '$1,950',
    image: PLACEHOLDER,
    description: 'Modern luxury meets sustainable sourcing. Perfection for the bridal morning.'
  },
  {
    id: '4',
    name: 'The Link Bracelet',
    category: 'RINGS',
    price: '$5,100',
    image: PLACEHOLDER,
    description: 'For the modern minimalist who values unique structural design.'
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'rings',
    title: 'RINGS',
    image: PLACEHOLDER,
    link: '#rings'
  },
  {
    id: 'fine-jewellery',
    title: 'FINE JEWELLERY',
    image: PLACEHOLDER,
    link: '#fine-jewellery'
  },
  {
    id: 'bespoke',
    title: 'BESPOKE',
    image: PLACEHOLDER,
    link: '#bespoke'
  },
  {
    id: 'about',
    title: 'ABOUT ORÉA',
    image: PLACEHOLDER,
    link: '#about'
  }
];
