// =============================================================================
// src/data/products.ts — Shopify Variant IDs
// Auto-generated from shopify_products.xlsx
// Each variant id is the real Shopify ProductVariant numeric ID.
// option1 = Metal  |  option2 = Carat Weight (null for metal-only products)
// option3 is NOT a Shopify variant dimension — ring size is captured at
// checkout as a line item property via the cart URL attributes parameter.
// =============================================================================

export interface ProductVariant {
  id: number;
  title: string;
  option1: string;          // Metal
  option2: string | null;   // Carat weight (null for metal-only products)
  price: number;            // NZD, no cents
  available: boolean;
}

export interface ProductData {
  id: string;
  title: string;
  variants: ProductVariant[];
}

// ---------------------------------------------------------------------------
// Variant maps — one export per product
// ---------------------------------------------------------------------------

// Alternating Diamond Band
export const VARIANTS_ALTERNATING_DIAMOND_BAND: ProductVariant[] = [
  { id: 52002916598041, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 2500, available: true },
  { id: 52002912469273, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 2500, available: true },
  { id: 52002904211737, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 2900, available: true },
  { id: 52002908340505, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 2900, available: true },
  { id: 52002900082969, title: "Platinum", option1: "Platinum", option2: null, price: 2900, available: true },
];

// Asscher Solitaire Ring
export const VARIANTS_ASSCHER_SOLITAIRE_RING: ProductVariant[] = [
  { id: 52003927556377, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003927589145, title: "14k White Gold / 1.5 CT", option1: "14k White Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003927621913, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003927654681, title: "14k White Gold / 2.5 CT", option1: "14k White Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003927687449, title: "14k White Gold / 3.0 CT", option1: "14k White Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 52003927392537, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003927425305, title: "14k Yellow Gold / 1.5 CT", option1: "14k Yellow Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003927458073, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003927490841, title: "14k Yellow Gold / 2.5 CT", option1: "14k Yellow Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003927523609, title: "14k Yellow Gold / 3.0 CT", option1: "14k Yellow Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 51811133489433, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51811217277209, title: "18k White Gold / 1.5 CT", option1: "18k White Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51811217309977, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51811217342745, title: "18k White Gold / 2.5 CT", option1: "18k White Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51811217375513, title: "18k White Gold / 3.0 CT", option1: "18k White Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51811133522201, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51811217408281, title: "18k Yellow Gold / 1.5 CT", option1: "18k Yellow Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51811217441049, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51811217473817, title: "18k Yellow Gold / 2.5 CT", option1: "18k Yellow Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51811217506585, title: "18k Yellow Gold / 3.0 CT", option1: "18k Yellow Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51811133456665, title: "Platinum / 1.0 CT", option1: "Platinum", option2: "1.0CT", price: 3990, available: true },
  { id: 51811217146137, title: "Platinum / 1.5 CT", option1: "Platinum", option2: "1.5CT", price: 4990, available: true },
  { id: 51811217178905, title: "Platinum / 2.0 CT", option1: "Platinum", option2: "2.0CT", price: 5990, available: true },
  { id: 51811217211673, title: "Platinum / 2.5 CT", option1: "Platinum", option2: "2.5CT", price: 6990, available: true },
  { id: 51811217244441, title: "Platinum / 3.0 CT", option1: "Platinum", option2: "3.0CT", price: 7990, available: true },
];

// Cascade Diamond Earrings
export const VARIANTS_CASCADE_DIAMOND_EARRINGS: ProductVariant[] = [
  { id: 51858244600089, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 3450, available: true },
  { id: 51858244632857, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 3450, available: true },
  { id: 51858244534553, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 4250, available: true },
  { id: 51858244567321, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 4250, available: true },
];

// Clover Diamond Studs
export const VARIANTS_CLOVER_DIAMOND_STUDS: ProductVariant[] = [
  { id: 51858241224985, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 1150, available: true },
  { id: 51858241257753, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 1150, available: true },
  { id: 51858241159449, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 1450, available: true },
  { id: 51858241192217, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 1450, available: true },
];

// Cross Diamond Pendant
export const VARIANTS_CROSS_DIAMOND_PENDANT: ProductVariant[] = [
  { id: 51811435675929, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 1550, available: true },
  { id: 51811435708697, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 1550, available: true },
  { id: 51811435610393, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 1950, available: true },
  { id: 51811435643161, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 1950, available: true },
];

// Curved Bar Diamond Necklace
export const VARIANTS_CURVED_BAR_DIAMOND_NECKLACE: ProductVariant[] = [
  { id: 51808191938841, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 1400, available: true },
  { id: 51808191906073, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 1400, available: true },
  { id: 51808191873305, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 1750, available: true },
  { id: 51808191840537, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 1750, available: true },
];

// Cushion Solitaire Ring
export const VARIANTS_CUSHION_SOLITAIRE_RING: ProductVariant[] = [
  { id: 52002868887833, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52002869575961, title: "14k White Gold / 1.5 CT", option1: "14k White Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52002870264089, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52002870952217, title: "14k White Gold / 2.5 CT", option1: "14k White Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52002871640345, title: "14k White Gold / 3.0 CT", option1: "14k White Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 52002864759065, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52002865447193, title: "14k Yellow Gold / 1.5 CT", option1: "14k Yellow Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52002866135321, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52002866823449, title: "14k Yellow Gold / 2.5 CT", option1: "14k Yellow Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52002867511577, title: "14k Yellow Gold / 3.0 CT", option1: "14k Yellow Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 52002856501529, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 52002857189657, title: "18k White Gold / 1.5 CT", option1: "18k White Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 52002857877785, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 52002858565913, title: "18k White Gold / 2.5 CT", option1: "18k White Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 52002859254041, title: "18k White Gold / 3.0 CT", option1: "18k White Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 52002860630297, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 52002861318425, title: "18k Yellow Gold / 1.5 CT", option1: "18k Yellow Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 52002862006553, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 52002862694681, title: "18k Yellow Gold / 2.5 CT", option1: "18k Yellow Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 52002863382809, title: "18k Yellow Gold / 3.0 CT", option1: "18k Yellow Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 52002852372761, title: "Platinum / 1.0 CT", option1: "Platinum", option2: "1.0CT", price: 3990, available: true },
  { id: 52002853060889, title: "Platinum / 1.5 CT", option1: "Platinum", option2: "1.5CT", price: 4990, available: true },
  { id: 52002853749017, title: "Platinum / 2.0 CT", option1: "Platinum", option2: "2.0CT", price: 5990, available: true },
  { id: 52002854437145, title: "Platinum / 2.5 CT", option1: "Platinum", option2: "2.5CT", price: 6990, available: true },
  { id: 52002855125273, title: "Platinum / 3.0 CT", option1: "Platinum", option2: "3.0CT", price: 7990, available: true },
];

// Emerald Solitaire Ring
export const VARIANTS_EMERALD_SOLITAIRE_RING: ProductVariant[] = [
  { id: 51904827031833, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 51904827719961, title: "14k White Gold / 1.5 CT", option1: "14k White Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 51904828473625, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 51904829161753, title: "14k White Gold / 2.5 CT", option1: "14k White Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 51904829849881, title: "14k White Gold / 3.0 CT", option1: "14k White Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 51904822903065, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 51904823591193, title: "14k Yellow Gold / 1.5 CT", option1: "14k Yellow Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 51904824279321, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 51904824967449, title: "14k Yellow Gold / 2.5 CT", option1: "14k Yellow Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 51904825655577, title: "14k Yellow Gold / 3.0 CT", option1: "14k Yellow Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 51813213962521, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813214060825, title: "18k White Gold / 1.5 CT", option1: "18k White Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813214159129, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813214257433, title: "18k White Gold / 2.5 CT", option1: "18k White Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813214355737, title: "18k White Gold / 3.0 CT", option1: "18k White Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813213995289, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813214093593, title: "18k Yellow Gold / 1.5 CT", option1: "18k Yellow Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813214191897, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813214290201, title: "18k Yellow Gold / 2.5 CT", option1: "18k Yellow Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813214388505, title: "18k Yellow Gold / 3.0 CT", option1: "18k Yellow Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813213929753, title: "Platinum / 1.0 CT", option1: "Platinum", option2: "1.0CT", price: 3990, available: true },
  { id: 51813214028057, title: "Platinum / 1.5 CT", option1: "Platinum", option2: "1.5CT", price: 4990, available: true },
  { id: 51813214126361, title: "Platinum / 2.0 CT", option1: "Platinum", option2: "2.0CT", price: 5990, available: true },
  { id: 51813214224665, title: "Platinum / 2.5 CT", option1: "Platinum", option2: "2.5CT", price: 6990, available: true },
  { id: 51813214322969, title: "Platinum / 3.0 CT", option1: "Platinum", option2: "3.0CT", price: 7990, available: true },
];

// Five-Stone Bezel Diamond Bracelet
export const VARIANTS_FIVE_STONE_BEZEL_DIAMOND_BRACELET: ProductVariant[] = [
  { id: 51813120049433, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 4750, available: true },
  { id: 51813120082201, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 4750, available: true },
  { id: 51813119983897, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 5950, available: true },
  { id: 51813120016665, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 5950, available: true },
];

// Floating Bezel Diamond Bracelet
export const VARIANTS_FLOATING_BEZEL_DIAMOND_BRACELET: ProductVariant[] = [
  { id: 51813104812313, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 2350, available: true },
  { id: 51813104845081, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 2350, available: true },
  { id: 51813104746777, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 2950, available: true },
  { id: 51813104779545, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 2950, available: true },
];

// Floating Diamond Necklace
export const VARIANTS_FLOATING_DIAMOND_NECKLACE: ProductVariant[] = [
  { id: 51810824945945, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 3150, available: true },
  { id: 51810824978713, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 3150, available: true },
  { id: 51810824880409, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 3950, available: true },
  { id: 51810824913177, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 3950, available: true },
];

// Heart Diamond Necklace
export const VARIANTS_HEART_DIAMOND_NECKLACE: ProductVariant[] = [
  { id: 51810888220953, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 1450, available: true },
  { id: 51810888253721, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 1450, available: true },
  { id: 51810888155417, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 1850, available: true },
  { id: 51810888188185, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 1850, available: true },
];

// Heart Diamond Studs
export const VARIANTS_HEART_DIAMOND_STUDS: ProductVariant[] = [
  { id: 51812951032089, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 1050, available: true },
  { id: 51812951064857, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 1050, available: true },
  { id: 51812950966553, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 1350, available: true },
  { id: 51812950999321, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 1350, available: true },
];

// Hera Trilogy Three-Stone Ring
export const VARIANTS_HERA_TRILOGY_THREE_STONE_RING: ProductVariant[] = [
  { id: 51811118514457, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 5200, available: true },
  { id: 51811118547225, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 5200, available: true },
  { id: 51811118448921, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 6500, available: true },
  { id: 51811118481689, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 6500, available: true },
  { id: 51811118416153, title: "Platinum", option1: "Platinum", option2: null, price: 6500, available: true },
];

// Marquise Solitaire Ring
export const VARIANTS_MARQUISE_SOLITAIRE_RING: ProductVariant[] = [
  { id: 52003881812249, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003881845017, title: "14k White Gold / 1.5 CT", option1: "14k White Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003881877785, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003881910553, title: "14k White Gold / 2.5 CT", option1: "14k White Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003881943321, title: "14k White Gold / 3.0 CT", option1: "14k White Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 52003881648409, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003881681177, title: "14k Yellow Gold / 1.5 CT", option1: "14k Yellow Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003881713945, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003881746713, title: "14k Yellow Gold / 2.5 CT", option1: "14k Yellow Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003881779481, title: "14k Yellow Gold / 3.0 CT", option1: "14k Yellow Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 51813151277337, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813151375641, title: "18k White Gold / 1.5 CT", option1: "18k White Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813151473945, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813151572249, title: "18k White Gold / 2.5 CT", option1: "18k White Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813151670553, title: "18k White Gold / 3.0 CT", option1: "18k White Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813151310105, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813151408409, title: "18k Yellow Gold / 1.5 CT", option1: "18k Yellow Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813151506713, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813151605017, title: "18k Yellow Gold / 2.5 CT", option1: "18k Yellow Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813151703321, title: "18k Yellow Gold / 3.0 CT", option1: "18k Yellow Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813151244569, title: "Platinum / 1.0 CT", option1: "Platinum", option2: "1.0CT", price: 3990, available: true },
  { id: 51813151342873, title: "Platinum / 1.5 CT", option1: "Platinum", option2: "1.5CT", price: 4990, available: true },
  { id: 51813151441177, title: "Platinum / 2.0 CT", option1: "Platinum", option2: "2.0CT", price: 5990, available: true },
  { id: 51813151539481, title: "Platinum / 2.5 CT", option1: "Platinum", option2: "2.5CT", price: 6990, available: true },
  { id: 51813151637785, title: "Platinum / 3.0 CT", option1: "Platinum", option2: "3.0CT", price: 7990, available: true },
];

// Nova Trilogy Three-Stone Ring
export const VARIANTS_NOVA_TRILOGY_THREE_STONE_RING: ProductVariant[] = [
  { id: 52002938093849, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 6500, available: true },
  { id: 52002933965081, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 6500, available: true },
  { id: 52002925707545, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 8100, available: true },
  { id: 52002929836313, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 8100, available: true },
  { id: 52002921578777, title: "Platinum", option1: "Platinum", option2: null, price: 8100, available: true },
];

// Orbit Bezel Diamond Necklace
export const VARIANTS_ORBIT_BEZEL_DIAMOND_NECKLACE: ProductVariant[] = [
  { id: 52006641238297, title: "14k White Gold / 0.25 CT", option1: "14k White Gold", option2: "0.25CT", price: 1250, available: true },
  { id: 51992824316185, title: "14k White Gold / 0.5 CT", option1: "14k White Gold", option2: "0.5CT", price: 1850, available: true },
  { id: 51992824480025, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 2450, available: true },
  { id: 52006641205529, title: "14k Yellow Gold / 0.25 CT", option1: "14k Yellow Gold", option2: "0.25CT", price: 1250, available: true },
  { id: 51992824348953, title: "14k Yellow Gold / 0.5 CT", option1: "14k Yellow Gold", option2: "0.5CT", price: 1850, available: true },
  { id: 51992824512793, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 2450, available: true },
  { id: 52006641172761, title: "18k White Gold / 0.25 CT", option1: "18k White Gold", option2: "0.25CT", price: 1550, available: true },
  { id: 51992824250649, title: "18k White Gold / 0.5 CT", option1: "18k White Gold", option2: "0.5CT", price: 2300, available: true },
  { id: 51992824414489, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 3050, available: true },
  { id: 52006641139993, title: "18k Yellow Gold / 0.25 CT", option1: "18k Yellow Gold", option2: "0.25CT", price: 1550, available: true },
  { id: 51992824283417, title: "18k Yellow Gold / 0.5 CT", option1: "18k Yellow Gold", option2: "0.5CT", price: 2300, available: true },
  { id: 51992824447257, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 3050, available: true },
];

// Orbit Bezel Diamond Studs
export const VARIANTS_ORBIT_BEZEL_DIAMOND_STUDS: ProductVariant[] = [
  { id: 52006640845081, title: "14k White Gold / 0.5 CT", option1: "14k White Gold", option2: "0.5CT", price: 1450, available: true },
  { id: 51812994613529, title: "14k White Gold / 1. CT", option1: "14k White Gold", option2: "1.0CT", price: 2050, available: true },
  { id: 51812994777369, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 2650, available: true },
  { id: 52006640812313, title: "14k Yellow Gold / 0.5 CT", option1: "14k Yellow Gold", option2: "0.5CT", price: 1450, available: true },
  { id: 51812994646297, title: "14k Yellow Gold / 1. CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 2050, available: true },
  { id: 51812994810137, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 2650, available: true },
  { id: 52006640779545, title: "18k White Gold / 0.5 CT", option1: "18k White Gold", option2: "0.5CT", price: 1850, available: true },
  { id: 51812994547993, title: "18k White Gold / 1. CT", option1: "18k White Gold", option2: "1.0CT", price: 2650, available: true },
  { id: 51812994711833, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 3450, available: true },
  { id: 52006640746777, title: "18k Yellow Gold / 0.5 CT", option1: "18k Yellow Gold", option2: "0.5CT", price: 1850, available: true },
  { id: 51812994580761, title: "18k Yellow Gold / 1. CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 2650, available: true },
  { id: 51812994744601, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 3450, available: true },
];

// Oval Half Eternity Band
export const VARIANTS_OVAL_HALF_ETERNITY_BAND: ProductVariant[] = [
  { id: 52002889892121, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 3600, available: true },
  { id: 52002885763353, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 3600, available: true },
  { id: 52002877505817, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 4500, available: true },
  { id: 52002881634585, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 4500, available: true },
  { id: 52002873377049, title: "Platinum", option1: "Platinum", option2: null, price: 4500, available: true },
];

// Oval Solitaire Ring
export const VARIANTS_OVAL_SOLITAIRE_RING: ProductVariant[] = [
  { id: 52003854090521, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003854123289, title: "14k White Gold / 1.5 CT", option1: "14k White Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003854156057, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003854188825, title: "14k White Gold / 2.5 CT", option1: "14k White Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003854221593, title: "14k White Gold / 3.0 CT", option1: "14k White Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 52003853926681, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003853959449, title: "14k Yellow Gold / 1.5 CT", option1: "14k Yellow Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003853992217, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003854024985, title: "14k Yellow Gold / 2.5 CT", option1: "14k Yellow Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003854057753, title: "14k Yellow Gold / 3.0 CT", option1: "14k Yellow Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 51813165990169, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813166088473, title: "18k White Gold / 1.5 CT", option1: "18k White Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813166186777, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813166285081, title: "18k White Gold / 2.5 CT", option1: "18k White Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813166383385, title: "18k White Gold / 3.0 CT", option1: "18k White Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813166022937, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813166121241, title: "18k Yellow Gold / 1.5 CT", option1: "18k Yellow Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813166219545, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813166317849, title: "18k Yellow Gold / 2.5 CT", option1: "18k Yellow Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813166416153, title: "18k Yellow Gold / 3.0 CT", option1: "18k Yellow Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813165957401, title: "Platinum / 1.0 CT", option1: "Platinum", option2: "1.0CT", price: 3990, available: true },
  { id: 51813166055705, title: "Platinum / 1.5 CT", option1: "Platinum", option2: "1.5CT", price: 4990, available: true },
  { id: 51813166154009, title: "Platinum / 2.0 CT", option1: "Platinum", option2: "2.0CT", price: 5990, available: true },
  { id: 51813166252313, title: "Platinum / 2.5 CT", option1: "Platinum", option2: "2.5CT", price: 6990, available: true },
  { id: 51813166350617, title: "Platinum / 3.0 CT", option1: "Platinum", option2: "3.0CT", price: 7990, available: true },
];

// Pavé Half Eternity Band
export const VARIANTS_PAVE_HALF_ETERNITY_BAND: ProductVariant[] = [
  { id: 51811038822681, title: "14k White Gold", option1: "14k White Gold", option2: null, price: 2600, available: true },
  { id: 51811038855449, title: "14k Yellow Gold", option1: "14k Yellow Gold", option2: null, price: 2600, available: true },
  { id: 51811038757145, title: "18k White Gold", option1: "18k White Gold", option2: null, price: 3300, available: true },
  { id: 51811038789913, title: "18k Yellow Gold", option1: "18k Yellow Gold", option2: null, price: 3300, available: true },
  { id: 51811038724377, title: "Platinum", option1: "Platinum", option2: null, price: 3300, available: true },
];

// Pear Solitaire Ring
export const VARIANTS_PEAR_SOLITAIRE_RING: ProductVariant[] = [
  { id: 52003823091993, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003823124761, title: "14k White Gold / 1.5 CT", option1: "14k White Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003823157529, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003823190297, title: "14k White Gold / 2.5 CT", option1: "14k White Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003823223065, title: "14k White Gold / 3.0 CT", option1: "14k White Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 52003822928153, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003822960921, title: "14k Yellow Gold / 1.5 CT", option1: "14k Yellow Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003822993689, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003823026457, title: "14k Yellow Gold / 2.5 CT", option1: "14k Yellow Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003823059225, title: "14k Yellow Gold / 3.0 CT", option1: "14k Yellow Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 51813197152537, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813197250841, title: "18k White Gold / 1.5 CT", option1: "18k White Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813197349145, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813197447449, title: "18k White Gold / 2.5 CT", option1: "18k White Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813197545753, title: "18k White Gold / 3.0 CT", option1: "18k White Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813197185305, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813197283609, title: "18k Yellow Gold / 1.5 CT", option1: "18k Yellow Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813197381913, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813197480217, title: "18k Yellow Gold / 2.5 CT", option1: "18k Yellow Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813197578521, title: "18k Yellow Gold / 3.0 CT", option1: "18k Yellow Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813197119769, title: "Platinum / 1.0 CT", option1: "Platinum", option2: "1.0CT", price: 3990, available: true },
  { id: 51813197218073, title: "Platinum / 1.5 CT", option1: "Platinum", option2: "1.5CT", price: 4990, available: true },
  { id: 51813197316377, title: "Platinum / 2.0 CT", option1: "Platinum", option2: "2.0CT", price: 5990, available: true },
  { id: 51813197414681, title: "Platinum / 2.5 CT", option1: "Platinum", option2: "2.5CT", price: 6990, available: true },
  { id: 51813197512985, title: "Platinum / 3.0 CT", option1: "Platinum", option2: "3.0CT", price: 7990, available: true },
];

// Princess Solitaire Ring
export const VARIANTS_PRINCESS_SOLITAIRE_RING: ProductVariant[] = [
  { id: 52003788783897, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003788816665, title: "14k White Gold / 1.5 CT", option1: "14k White Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003788849433, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003788882201, title: "14k White Gold / 2.5 CT", option1: "14k White Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003788914969, title: "14k White Gold / 3.0 CT", option1: "14k White Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 52003788587289, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003788620057, title: "14k Yellow Gold / 1.5 CT", option1: "14k Yellow Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003788652825, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003788685593, title: "14k Yellow Gold / 2.5 CT", option1: "14k Yellow Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003788718361, title: "14k Yellow Gold / 3.0 CT", option1: "14k Yellow Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 51813201183001, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813201281305, title: "18k White Gold / 1.5 CT", option1: "18k White Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813201379609, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813201477913, title: "18k White Gold / 2.5 CT", option1: "18k White Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813201576217, title: "18k White Gold / 3.0 CT", option1: "18k White Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813201215769, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813201314073, title: "18k Yellow Gold / 1.5 CT", option1: "18k Yellow Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813201412377, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813201510681, title: "18k Yellow Gold / 2.5 CT", option1: "18k Yellow Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813201608985, title: "18k Yellow Gold / 3.0 CT", option1: "18k Yellow Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813201150233, title: "Platinum / 1.0 CT", option1: "Platinum", option2: "1.0CT", price: 3990, available: true },
  { id: 51813201248537, title: "Platinum / 1.5 CT", option1: "Platinum", option2: "1.5CT", price: 4990, available: true },
  { id: 51813201346841, title: "Platinum / 2.0 CT", option1: "Platinum", option2: "2.0CT", price: 5990, available: true },
  { id: 51813201445145, title: "Platinum / 2.5 CT", option1: "Platinum", option2: "2.5CT", price: 6990, available: true },
  { id: 51813201543449, title: "Platinum / 3.0 CT", option1: "Platinum", option2: "3.0CT", price: 7990, available: true },
];

// Radiant Solitaire Ring
export const VARIANTS_RADIANT_SOLITAIRE_RING: ProductVariant[] = [
  { id: 52002846736665, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52002847424793, title: "14k White Gold / 1.5 CT", option1: "14k White Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52002848112921, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52002848801049, title: "14k White Gold / 2.5 CT", option1: "14k White Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52002849489177, title: "14k White Gold / 3.0 CT", option1: "14k White Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 52002842607897, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52002843296025, title: "14k Yellow Gold / 1.5 CT", option1: "14k Yellow Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52002843984153, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52002844672281, title: "14k Yellow Gold / 2.5 CT", option1: "14k Yellow Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52002845360409, title: "14k Yellow Gold / 3.0 CT", option1: "14k Yellow Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 52002834350361, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 52002835038489, title: "18k White Gold / 1.5 CT", option1: "18k White Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 52002835726617, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 52002836414745, title: "18k White Gold / 2.5 CT", option1: "18k White Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 52002837102873, title: "18k White Gold / 3.0 CT", option1: "18k White Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 52002838479129, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 52002839167257, title: "18k Yellow Gold / 1.5 CT", option1: "18k Yellow Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 52002839855385, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 52002840543513, title: "18k Yellow Gold / 2.5 CT", option1: "18k Yellow Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 52002841231641, title: "18k Yellow Gold / 3.0 CT", option1: "18k Yellow Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 52002830221593, title: "Platinum / 1.0 CT", option1: "Platinum", option2: "1.0CT", price: 3990, available: true },
  { id: 52002830909721, title: "Platinum / 1.5 CT", option1: "Platinum", option2: "1.5CT", price: 4990, available: true },
  { id: 52002831597849, title: "Platinum / 2.0 CT", option1: "Platinum", option2: "2.0CT", price: 5990, available: true },
  { id: 52002832285977, title: "Platinum / 2.5 CT", option1: "Platinum", option2: "2.5CT", price: 6990, available: true },
  { id: 52002832974105, title: "Platinum / 3.0 CT", option1: "Platinum", option2: "3.0CT", price: 7990, available: true },
];

// Round Solitaire Ring
export const VARIANTS_ROUND_SOLITAIRE_RING: ProductVariant[] = [
  { id: 52003725246745, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003725279513, title: "14k White Gold / 1.5 CT", option1: "14k White Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003725312281, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003725345049, title: "14k White Gold / 2.5 CT", option1: "14k White Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003725377817, title: "14k White Gold / 3.0 CT", option1: "14k White Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 52003725082905, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 3190, available: true },
  { id: 52003725115673, title: "14k Yellow Gold / 1.5 CT", option1: "14k Yellow Gold", option2: "1.5CT", price: 3990, available: true },
  { id: 52003725148441, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 4790, available: true },
  { id: 52003725181209, title: "14k Yellow Gold / 2.5 CT", option1: "14k Yellow Gold", option2: "2.5CT", price: 5590, available: true },
  { id: 52003725213977, title: "14k Yellow Gold / 3.0 CT", option1: "14k Yellow Gold", option2: "3.0CT", price: 6390, available: true },
  { id: 51813204099353, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813204197657, title: "18k White Gold / 1.5 CT", option1: "18k White Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813204295961, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813204394265, title: "18k White Gold / 2.5 CT", option1: "18k White Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813204492569, title: "18k White Gold / 3.0 CT", option1: "18k White Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813204132121, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 3990, available: true },
  { id: 51813204230425, title: "18k Yellow Gold / 1.5 CT", option1: "18k Yellow Gold", option2: "1.5CT", price: 4990, available: true },
  { id: 51813204328729, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 5990, available: true },
  { id: 51813204427033, title: "18k Yellow Gold / 2.5 CT", option1: "18k Yellow Gold", option2: "2.5CT", price: 6990, available: true },
  { id: 51813204525337, title: "18k Yellow Gold / 3.0 CT", option1: "18k Yellow Gold", option2: "3.0CT", price: 7990, available: true },
  { id: 51813204066585, title: "Platinum / 1.0 CT", option1: "Platinum", option2: "1.0CT", price: 3990, available: true },
  { id: 51813204164889, title: "Platinum / 1.5 CT", option1: "Platinum", option2: "1.5CT", price: 4990, available: true },
  { id: 51813204263193, title: "Platinum / 2.0 CT", option1: "Platinum", option2: "2.0CT", price: 5990, available: true },
  { id: 51813204361497, title: "Platinum / 2.5 CT", option1: "Platinum", option2: "2.5CT", price: 6990, available: true },
  { id: 51813204459801, title: "Platinum / 3.0 CT", option1: "Platinum", option2: "3.0CT", price: 7990, available: true },
];

// Signature Marquise Ring
export const VARIANTS_SIGNATURE_MARQUISE_RING: ProductVariant[] = [
  { id: 51811096756505, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 3600, available: true },
  { id: 52013847380249, title: "14k White Gold / 1.5 CT", option1: "14k White Gold", option2: "1.5CT", price: 4400, available: true },
  { id: 52013848068377, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 5200, available: true },
  { id: 52013848756505, title: "14k White Gold / 2.5 CT", option1: "14k White Gold", option2: "2.5CT", price: 6000, available: true },
  { id: 52013849444633, title: "14k White Gold / 3.0 CT", option1: "14k White Gold", option2: "3.0CT", price: 6800, available: true },
  { id: 51811096789273, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 3600, available: true },
  { id: 52013844627737, title: "14k Yellow Gold / 1.5 CT", option1: "14k Yellow Gold", option2: "1.5CT", price: 4400, available: true },
  { id: 52013845315865, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 5200, available: true },
  { id: 52013846003993, title: "14k Yellow Gold / 2.5 CT", option1: "14k Yellow Gold", option2: "2.5CT", price: 6000, available: true },
  { id: 52013846692121, title: "14k Yellow Gold / 3.0 CT", option1: "14k Yellow Gold", option2: "3.0CT", price: 6800, available: true },
  { id: 51811096690969, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 4500, available: true },
  { id: 52013841875225, title: "18k White Gold / 1.5 CT", option1: "18k White Gold", option2: "1.5CT", price: 5500, available: true },
  { id: 52013842563353, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 6500, available: true },
  { id: 52013843251481, title: "18k White Gold / 2.5 CT", option1: "18k White Gold", option2: "2.5CT", price: 7500, available: true },
  { id: 52013843939609, title: "18k White Gold / 3.0 CT", option1: "18k White Gold", option2: "3.0CT", price: 8500, available: true },
  { id: 51811096723737, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 4500, available: true },
  { id: 52013839089945, title: "18k Yellow Gold / 1.5 CT", option1: "18k Yellow Gold", option2: "1.5CT", price: 5500, available: true },
  { id: 52013839778073, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 6500, available: true },
  { id: 52013840466201, title: "18k Yellow Gold / 2.5 CT", option1: "18k Yellow Gold", option2: "2.5CT", price: 7500, available: true },
  { id: 52013841154329, title: "18k Yellow Gold / 3.0 CT", option1: "18k Yellow Gold", option2: "3.0CT", price: 8500, available: true },
  { id: 51811096658201, title: "Platinum / 1.0 CT", option1: "Platinum", option2: "1.0CT", price: 4500, available: true },
  { id: 52013836337433, title: "Platinum / 1.5 CT", option1: "Platinum", option2: "1.5CT", price: 5500, available: true },
  { id: 52013837025561, title: "Platinum / 2.0 CT", option1: "Platinum", option2: "2.0CT", price: 6500, available: true },
  { id: 52013837713689, title: "Platinum / 2.5 CT", option1: "Platinum", option2: "2.5CT", price: 7500, available: true },
  { id: 52013838401817, title: "Platinum / 3.0 CT", option1: "Platinum", option2: "3.0CT", price: 8500, available: true },
];

// Solitaire Bracelet
export const VARIANTS_SOLITAIRE_BRACELET: ProductVariant[] = [
  { id: 52006639370521, title: "14k White Gold / 0.25 CT", option1: "14k White Gold", option2: "0.25CT", price: 690, available: true },
  { id: 52006639698201, title: "14k White Gold / 0.5 CT", option1: "14k White Gold", option2: "0.5CT", price: 1190, available: true },
  { id: 52006640025881, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 1690, available: true },
  { id: 52006638387481, title: "14k Yellow Gold / 0.25 CT", option1: "14k Yellow Gold", option2: "0.25CT", price: 690, available: true },
  { id: 52006638715161, title: "14k Yellow Gold / 0.5 CT", option1: "14k Yellow Gold", option2: "0.5CT", price: 1190, available: true },
  { id: 52006639042841, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 1690, available: true },
  { id: 52006637404441, title: "18k White Gold / 0.25 CT", option1: "18k White Gold", option2: "0.25CT", price: 890, available: true },
  { id: 52006637732121, title: "18k White Gold / 0.5 CT", option1: "18k White Gold", option2: "0.5CT", price: 1490, available: true },
  { id: 52006638059801, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 2090, available: true },
  { id: 52006636421401, title: "18k Yellow Gold / 0.25 CT", option1: "18k Yellow Gold", option2: "0.25CT", price: 890, available: true },
  { id: 52006636749081, title: "18k Yellow Gold / 0.5 CT", option1: "18k Yellow Gold", option2: "0.5CT", price: 1490, available: true },
  { id: 52006637076761, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 2090, available: true },
];

// Solitaire Necklace
export const VARIANTS_SOLITAIRE_NECKLACE: ProductVariant[] = [
  { id: 52006634225945, title: "14k White Gold / 0.25 CT", option1: "14k White Gold", option2: "0.25CT", price: 1090, available: true },
  { id: 51810620604697, title: "14k White Gold / 0.5 CT", option1: "14k White Gold", option2: "0.5CT", price: 1590, available: true },
  { id: 51810620768537, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 2090, available: true },
  { id: 52006633898265, title: "14k Yellow Gold / 0.25 CT", option1: "14k Yellow Gold", option2: "0.25CT", price: 1090, available: true },
  { id: 51810620637465, title: "14k Yellow Gold / 0.5 CT", option1: "14k Yellow Gold", option2: "0.5CT", price: 1590, available: true },
  { id: 51810620801305, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 2090, available: true },
  { id: 52006633570585, title: "18k White Gold / 0.25 CT", option1: "18k White Gold", option2: "0.25CT", price: 1290, available: true },
  { id: 51810620539161, title: "18k White Gold / 0.5 CT", option1: "18k White Gold", option2: "0.5CT", price: 1990, available: true },
  { id: 51810620703001, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 2690, available: true },
  { id: 52006633242905, title: "18k Yellow Gold / 0.25 CT", option1: "18k Yellow Gold", option2: "0.25CT", price: 1290, available: true },
  { id: 51810620571929, title: "18k Yellow Gold / 0.5 CT", option1: "18k Yellow Gold", option2: "0.5CT", price: 1990, available: true },
  { id: 51810620735769, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 2690, available: true },
];

// Solitaire Pendant
export const VARIANTS_SOLITAIRE_PENDANT: ProductVariant[] = [
  { id: 52006630752537, title: "14k White Gold / 0.25 CT", option1: "14k White Gold", option2: "0.25CT", price: 590, available: true },
  { id: 51811294413081, title: "14k White Gold / 0.5 CT", option1: "14k White Gold", option2: "0.5CT", price: 990, available: true },
  { id: 51811294576921, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 1390, available: true },
  { id: 52006630424857, title: "14k Yellow Gold / 0.25 CT", option1: "14k Yellow Gold", option2: "0.25CT", price: 590, available: true },
  { id: 51811294445849, title: "14k Yellow Gold / 0.5 CT", option1: "14k Yellow Gold", option2: "0.5CT", price: 990, available: true },
  { id: 51811294609689, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 1390, available: true },
  { id: 52006630097177, title: "18k White Gold / 0.25 CT", option1: "18k White Gold", option2: "0.25CT", price: 790, available: true },
  { id: 51811294347545, title: "18k White Gold / 0.5 CT", option1: "18k White Gold", option2: "0.5CT", price: 1290, available: true },
  { id: 51811294511385, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 1790, available: true },
  { id: 52006629769497, title: "18k Yellow Gold / 0.25 CT", option1: "18k Yellow Gold", option2: "0.25CT", price: 790, available: true },
  { id: 51811294380313, title: "18k Yellow Gold / 0.5 CT", option1: "18k Yellow Gold", option2: "0.5CT", price: 1290, available: true },
  { id: 51811294544153, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 1790, available: true },
];

// Solitaire Studs
export const VARIANTS_SOLITAIRE_STUDS: ProductVariant[] = [
  { id: 52006632522009, title: "14k White Gold / 0.5 CT", option1: "14k White Gold", option2: "0.5CT", price: 1390, available: true },
  { id: 52006624624921, title: "14k White Gold / 1.0 CT", option1: "14k White Gold", option2: "1.0CT", price: 1990, available: true },
  { id: 52006624952601, title: "14k White Gold / 2.0 CT", option1: "14k White Gold", option2: "2.0CT", price: 2590, available: true },
  { id: 52006632194329, title: "14k Yellow Gold / 0.5 CT", option1: "14k Yellow Gold", option2: "0.5CT", price: 1390, available: true },
  { id: 52006623969561, title: "14k Yellow Gold / 1.0 CT", option1: "14k Yellow Gold", option2: "1.0CT", price: 1990, available: true },
  { id: 52006624297241, title: "14k Yellow Gold / 2.0 CT", option1: "14k Yellow Gold", option2: "2.0CT", price: 2590, available: true },
  { id: 52006631866649, title: "18k White Gold / 0.5 CT", option1: "18k White Gold", option2: "0.5CT", price: 1690, available: true },
  { id: 52006623314201, title: "18k White Gold / 1.0 CT", option1: "18k White Gold", option2: "1.0CT", price: 2490, available: true },
  { id: 52006623641881, title: "18k White Gold / 2.0 CT", option1: "18k White Gold", option2: "2.0CT", price: 3290, available: true },
  { id: 52006631538969, title: "18k Yellow Gold / 0.5 CT", option1: "18k Yellow Gold", option2: "0.5CT", price: 1690, available: true },
  { id: 52006622658841, title: "18k Yellow Gold / 1.0 CT", option1: "18k Yellow Gold", option2: "1.0CT", price: 2490, available: true },
  { id: 52006622986521, title: "18k Yellow Gold / 2.0 CT", option1: "18k Yellow Gold", option2: "2.0CT", price: 3290, available: true },
];

// The Rosé Trilogy Ring
export const VARIANTS_THE_ROSE_TRILOGY_RING: ProductVariant[] = [
  { id: 52010393698585, title: "Default Title", option1: "Default Title", option2: null, price: 15000, available: true },
];


// ---------------------------------------------------------------------------
// Master lookup: map product title (normalised) → variants array
// Usage: PRODUCT_VARIANTS_MAP["emerald-solitaire-ring"]
// ---------------------------------------------------------------------------
export const PRODUCT_VARIANTS_MAP: Record<string, ProductVariant[]> = {
  "alternating-diamond-band": VARIANTS_ALTERNATING_DIAMOND_BAND,
  "asscher-solitaire-ring": VARIANTS_ASSCHER_SOLITAIRE_RING,
  "cascade-diamond-earrings": VARIANTS_CASCADE_DIAMOND_EARRINGS,
  "clover-diamond-studs": VARIANTS_CLOVER_DIAMOND_STUDS,
  "cross-diamond-pendant": VARIANTS_CROSS_DIAMOND_PENDANT,
  "curved-bar-diamond-necklace": VARIANTS_CURVED_BAR_DIAMOND_NECKLACE,
  "cushion-solitaire-ring": VARIANTS_CUSHION_SOLITAIRE_RING,
  "emerald-solitaire-ring": VARIANTS_EMERALD_SOLITAIRE_RING,
  "five-stone-bezel-diamond-bracelet": VARIANTS_FIVE_STONE_BEZEL_DIAMOND_BRACELET,
  "floating-bezel-diamond-bracelet": VARIANTS_FLOATING_BEZEL_DIAMOND_BRACELET,
  "floating-diamond-necklace": VARIANTS_FLOATING_DIAMOND_NECKLACE,
  "heart-diamond-necklace": VARIANTS_HEART_DIAMOND_NECKLACE,
  "heart-diamond-studs": VARIANTS_HEART_DIAMOND_STUDS,
  "hera-trilogy-three-stone-ring": VARIANTS_HERA_TRILOGY_THREE_STONE_RING,
  "marquise-solitaire-ring": VARIANTS_MARQUISE_SOLITAIRE_RING,
  "nova-trilogy-three-stone-ring": VARIANTS_NOVA_TRILOGY_THREE_STONE_RING,
  "orbit-bezel-diamond-necklace": VARIANTS_ORBIT_BEZEL_DIAMOND_NECKLACE,
  "orbit-bezel-diamond-studs": VARIANTS_ORBIT_BEZEL_DIAMOND_STUDS,
  "oval-half-eternity-band": VARIANTS_OVAL_HALF_ETERNITY_BAND,
  "oval-solitaire-ring": VARIANTS_OVAL_SOLITAIRE_RING,
  "pave-half-eternity-band": VARIANTS_PAVE_HALF_ETERNITY_BAND,
  "pear-solitaire-ring": VARIANTS_PEAR_SOLITAIRE_RING,
  "princess-solitaire-ring": VARIANTS_PRINCESS_SOLITAIRE_RING,
  "radiant-solitaire-ring": VARIANTS_RADIANT_SOLITAIRE_RING,
  "round-solitaire-ring": VARIANTS_ROUND_SOLITAIRE_RING,
  "signature-marquise-ring": VARIANTS_SIGNATURE_MARQUISE_RING,
  "solitaire-bracelet": VARIANTS_SOLITAIRE_BRACELET,
  "solitaire-necklace": VARIANTS_SOLITAIRE_NECKLACE,
  "solitaire-pendant": VARIANTS_SOLITAIRE_PENDANT,
  "solitaire-studs": VARIANTS_SOLITAIRE_STUDS,
  "the-rose-trilogy-ring": VARIANTS_THE_ROSE_TRILOGY_RING,
};

/**
 * Returns the Shopify checkout URL for the selected variant + optional ring size.
 *
 * @param productId  - kebab-case product id (e.g. "emerald-solitaire-ring")
 * @param metal      - e.g. "18k White Gold"
 * @param carat      - e.g. "1.0CT" (null for metal-only products)
 * @param ringSize   - optional NZ ring size letter, passed as a cart attribute
 */
export function buildCheckoutUrl(
  productId: string,
  metal: string,
  carat: string | null,
  ringSize?: string,
): string | null {
  const variants = PRODUCT_VARIANTS_MAP[productId];
  if (!variants) return null;
  const variant = variants.find(v =>
    v.option1 === metal && v.option2 === carat
  );
  if (!variant) return null;
  const base = `https://orea-8820.myshopify.com/cart/${variant.id}:1`;
  if (ringSize) {
    return `${base}?attributes[Ring+Size]=${encodeURIComponent(ringSize)}`;
  }
  return base;
}