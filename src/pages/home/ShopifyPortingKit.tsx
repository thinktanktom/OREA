
import React, { useState } from 'react';

const ShopifyPortingKit: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'foundation' | 'commerce' | 'experience' | 'variants'>('foundation');

  const liquidSnippets = {
    foundation: `
<!-- layout/theme.liquid (Core Bridge) -->
<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    {{ content_for_header }}
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      :root { --orea-cream: #F9F6F1; --orea-dark: #4A3F35; }
      body { background-color: var(--orea-cream); color: var(--orea-dark); }
    </style>
  </head>
  <body>
    {% section 'header' %}
    <main role="main">{{ content_for_layout }}</main>
    {% section 'footer' %}
  </body>
</html>
    `,
    commerce: `
<!-- snippets/product-card.liquid -->
<div class="product-card group">
  <a href="{{ product.url }}" class="aspect-[3/4] block overflow-hidden bg-orea-cream relative">
    {{ product.featured_image | image_url: width: 800 | image_tag: class: 'hover:scale-105 transition-transform duration-[2s]' }}
    {% if product.compare_at_price > product.price %}
      <span class="absolute top-4 left-4 text-[8px] tracking-widest uppercase bg-orea-gold text-white px-2 py-1">Signature</span>
    {% endif %}
  </a>
  <h3 class="text-[10px] tracking-[0.4em] uppercase text-center mt-6">{{ product.title }}</h3>
  <p class="text-[9px] text-center mt-2 opacity-60">{{ product.price | money }}</p>
</div>
    `,
    variants: `
<!-- Logic for Diamond Shape Selection (Product Page) -->
<div class="variant-picker">
  <label class="text-[9px] tracking-widest uppercase font-bold mb-4 block">Select Diamond Shape</label>
  <div class="flex gap-4">
    {% for variant in product.variants %}
      <button 
        class="shape-btn px-4 py-3 border border-orea-champagne/20 text-[10px] uppercase hover:border-orea-dark transition-all"
        data-variant-id="{{ variant.id }}"
        data-variant-image="{{ variant.featured_image | image_url: width: 1000 }}"
      >
        {{ variant.option1 }}
      </button>
    {% endfor %}
  </div>
</div>

<script>
  // Simple Vanilla JS for Variant Image Switching
  document.querySelectorAll('.shape-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const imgUrl = btn.dataset.variantImage;
      const mainImg = document.querySelector('.main-product-image');
      if(imgUrl && mainImg) mainImg.src = imgUrl;
      // Update hidden input for cart
      document.querySelector('[name="id"]').value = btn.dataset.variantId;
    });
  });
</script>
    `,
    experience: `
<!-- templates/page.bespoke.liquid -->
<section class="bespoke-hero h-[80vh] bg-orea-linen flex items-center justify-center relative overflow-hidden">
  <div class="text-center z-10 px-6">
    <h1 class="font-serif text-5xl md:text-7xl uppercase mb-6">{{ page.title }}</h1>
    <div class="w-16 h-[1px] bg-orea-gold mx-auto mb-6"></div>
    <p class="text-[12px] tracking-[0.4em] uppercase text-orea-dark/60">Crafted to your story.</p>
  </div>
</section>
    `
  };

  return (
    <div className="fixed top-0 right-0 w-[450px] h-full bg-[#111] text-white z-[90] shadow-[-20px_0_60px_rgba(0,0,0,0.8)] flex flex-col border-l border-white/5 overflow-hidden">
      <div className="p-8 border-b border-white/10 bg-[#1a1a1a]">
        <h2 className="font-serif text-2xl tracking-widest uppercase mb-1">Porting Kit</h2>
        <p className="text-[9px] tracking-widest uppercase opacity-40 font-bold italic">Conversion Path: Foundations → Commerce → Brand</p>
      </div>

      <div className="flex bg-[#0a0a0a] border-b border-white/5">
        {(Object.keys(liquidSnippets) as Array<keyof typeof liquidSnippets>).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-[8px] tracking-[0.2em] uppercase font-bold transition-all ${
              activeTab === tab ? 'text-orea-gold bg-white/5 border-b border-orea-gold' : 'text-white/30'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-6 font-mono text-[11px] leading-relaxed">
        <div className="bg-black/60 p-6 rounded-lg border border-white/5 relative group">
          <button 
            onClick={() => navigator.clipboard.writeText(liquidSnippets[activeTab])}
            className="absolute top-4 right-4 bg-orea-gold text-orea-dark px-3 py-1.5 rounded text-[8px] hover:bg-white transition-colors uppercase tracking-widest font-bold"
          >
            Copy Snippet
          </button>
          <pre className="whitespace-pre-wrap text-orea-champagne/90 pt-8">
            {liquidSnippets[activeTab]}
          </pre>
        </div>
        
        <div className="mt-8 p-6 bg-white/5 rounded border border-white/5">
          <h4 className="text-[10px] text-orea-gold uppercase tracking-[0.3em] font-bold mb-4">Implementation Note</h4>
          <p className="text-[10px] text-orea-oatmeal/60 leading-loose">
            {activeTab === 'foundation' && "Start here. theme.liquid is the skeleton that holds your Tailwind config and global font imports."}
            {activeTab === 'commerce' && "Ensure product.liquid handles variants using the 'option_selection.js' pattern for Shopify compatibility."}
            {activeTab === 'variants' && "For diamond shapes, use 'Alt Text' in Shopify images to store shape names for easier filtering in Liquid."}
            {activeTab === 'experience' && "Bespoke and About pages should be 'Section-Rendered' to allow the client to change imagery easily."}
          </p>
        </div>
      </div>
      
      <div className="p-6 bg-[#0a0a0a] text-[8px] tracking-[0.3em] uppercase text-white/20 border-t border-white/5 text-center">
        Step 1 of 15: Foundation and Layout
      </div>
    </div>
  );
};

export default ShopifyPortingKit;
