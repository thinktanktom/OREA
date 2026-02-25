'use client';

import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import ProductTabs from './ProductTabs';
import ValueProps from './ValueProps';
import RelatedProducts from './RelatedProducts';

import { Product } from './types';
import { PRODUCTS } from '../collection/constants';
import {
  PRODUCT_SHOPIFY_HANDLES,
  PRODUCT_VARIANTS_MAP,
  getMetalsForProduct,
  getCaratsForProduct,
} from '../../data/products';

// Rings that have no carat selection (metal-only variants)
const NO_CARAT_RINGS = new Set([
  'Alternating Diamond Band',
  'Hera Trilogy Three-Stone Ring',
  'Nova Trilogy Three-Stone Ring',
  'The Rosé Trilogy Ring',
  'Oval Half Eternity Band',
  'Pavé Half Eternity Band',
]);

const ALL_RING_SIZES = ['F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const ALL_SHAPES     = ['Round','Oval','Emerald','Pear','Marquise','Princess','Radiant','Asscher','Cushion','Heart'];

const ProductPage: React.FC = () => {
  const { id } = useParams();

  const isRing = useMemo(() => {
    const base = PRODUCTS.find(p => p.id === id);
    return base?.category === 'Rings';
  }, [id]);

  const product: Product | undefined = useMemo(() => {
    const base = PRODUCTS.find(p => p.id === id);
    if (!base) return undefined;

    const isRingProduct = base.category === 'Rings';

    // ── Real Shopify variant data ──────────────────────────────────────────
    const shopifyHandle   = PRODUCT_SHOPIFY_HANDLES[base.id];
    const realVariants    = shopifyHandle ? PRODUCT_VARIANTS_MAP[shopifyHandle] : undefined;

    // Derive option lists directly from real variant data
    const metals  = getMetalsForProduct(base.id);
    const carats  = getCaratsForProduct(base.id);

    // ── Options objects ────────────────────────────────────────────────────
    const ringOptions = {
      metal:  metals,
      shape:  ALL_SHAPES,
      carat:  NO_CARAT_RINGS.has(base.name) ? [] : (carats.length ? carats : ['1.0CT','1.5CT','2.0CT','2.5CT','3.0CT','3+ ct']),
      size:   ALL_RING_SIZES,
    };

    // Non-ring: carat array is populated only for pieces that actually have
    // carat variants (Solitaire Bracelet, Orbit Necklace, etc.)
    const defaultOptions = {
      metal:  metals,
      shape:  ALL_SHAPES,
      carat:  carats,   // empty [] for metal-only non-ring products
      size:   ['Standard'],
    };

    // ── Variants ───────────────────────────────────────────────────────────
    // Use real Shopify variants when available; fall back to lightweight
    // placeholders (id = 0, price only — no checkout URL will be built) so
    // the UI still renders while a handle is being mapped.
    const builtVariants = realVariants ?? metals.map((metal, i) => ({
      id: 0,                // placeholder — will not produce a checkout URL
      title: metal,
      option1: metal,
      option2: null as string | null,
      price: base.price,
      available: true,
    }));

    return {
      ...base,
      description: 'Signature ORÉA fine jewellery piece crafted with precision.',
      materials: isRingProduct
        ? ['14k Gold', '18k Gold', 'Platinum', 'Lab Grown Diamond']
        : ['14k Gold', '18k Gold', 'Lab Grown Diamond'],
      images: base.imageUrl
        ? [base.imageUrl]
        : ['https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-1_1200x.jpg?v=1710924432'],
      options: isRingProduct ? ringOptions : defaultOptions,
      variants: builtVariants,
    } as Product;
  }, [id]);

  const [selectedMetal, setSelectedMetal] = useState(product?.options.metal[0] || '');
  const [selectedShape, setSelectedShape]  = useState(product?.options.shape[0] || 'Emerald');
  const [selectedCarat, setSelectedCarat]  = useState(product?.options.carat[0] || '');
  const [selectedSize, setSelectedSize]    = useState(isRing ? 'L' : 'Standard');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-orea-dark">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] pb-[120px] -mb-[120px]">
      <main className="flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ProductGallery images={product.images} />

          <div className="px-6 py-12 lg:px-16 xl:px-24">
            <div className="max-w-xl flex flex-col gap-12">
              <ProductDetails
                product={product}
                selectedMetal={selectedMetal}
                setSelectedMetal={setSelectedMetal}
                selectedShape={selectedShape}
                setSelectedShape={setSelectedShape}
                isRing={isRing}
                selectedCarat={selectedCarat}
                setSelectedCarat={setSelectedCarat}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
              <ProductTabs selectedShape={selectedShape} />
              <ValueProps />
            </div>
          </div>
        </div>

        <section className="mt-40 border-t border-orea-sand pt-24">
          <RelatedProducts currentId={id || ''} />
        </section>
      </main>
    </div>
  );
};

export default ProductPage;