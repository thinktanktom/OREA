import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import ProductTabs from './ProductTabs';
import ValueProps from './ValueProps';
import RelatedProducts from './RelatedProducts';

import { Product } from './types';
import { PRODUCTS } from '../collection/constants';

const ProductPage: React.FC = () => {

  const { id } = useParams();

  const product: Product | undefined = useMemo(() => {

    const base = PRODUCTS.find(p => p.id === id);

    if (!base) return undefined;

    // ADAPTER — convert collection product into full product model

    return {
      ...base,
      description: 'Signature OREA fine jewellery piece crafted with precision.',
      materials: ['14k Gold', '18k Gold', 'Platinum', 'Lab Grown Diamond'],
      images: base.imageUrl
        ? [base.imageUrl]
        : [
            'https://www.orea.co.nz/cdn/shop/files/ClassicSolitaireRing-Emerald-1_1200x.jpg?v=1710924432'
          ],
      options: {
        metal: ['Platinum', '18k Yellow Gold', '18k White Gold'],
        carat: ['1.0CT'],
        size: ['Standard']
      },
      variants: [
        {
          id: 1,
          title: 'Default',
          option1: 'Platinum',
          option2: '1.0CT',
          option3: 'Standard',
          price: base.price,
          available: true
        }
      ]
    } as Product;

  }, [id]);

  const [selectedMetal, setSelectedMetal] = useState(
    product?.options.metal[0] || ''
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-orea-cream">
      <main className="flex-grow">

        <div className="grid grid-cols-1 lg:grid-cols-2">

          <ProductGallery images={product.images} />

          <div className="px-6 py-12 lg:px-16 xl:px-24">
            <div className="max-w-xl space-y-12">

              <ProductDetails
                product={product}
                selectedMetal={selectedMetal}
                setSelectedMetal={setSelectedMetal}
              />

              <ProductTabs />
              <ValueProps />

            </div>
          </div>

        </div>

        <section className="mt-40 border-t border-orea-linen pt-24">
          <RelatedProducts />
        </section>

      </main>
    </div>
  );
};

export default ProductPage;
