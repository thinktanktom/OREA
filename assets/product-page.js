/**
 * ORÉA Fine Jewellery - Product Page JavaScript
 * Handles variant selection, pricing, and cart functionality
 */

class ProductPage {
  constructor() {
    this.selectedMetal = null;
    this.selectedCarat = null;
    this.selectedSize = null;
    this.variants = [];
    this.product = null;
    this.currentVariant = null;
    
    this.init();
  }

  init() {
    this.loadProductData();
    this.attachEventListeners();
  }

  loadProductData() {
    // Get product JSON from Shopify
    fetch(window.location.pathname + '.js')
      .then(res => res.json())
      .then(product => {
        this.product = product;
        this.variants = product.variants;
        this.initializeSelections();
        this.updateUI();
      })
      .catch(err => {
        console.error('Error loading product data:', err);
      });
  }

  attachEventListeners() {
    // Metal selection
    document.querySelectorAll('.metal-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const metal = e.currentTarget.dataset.metal;
        this.selectMetal(metal);
      });
    });

    // Carat selection
    document.querySelectorAll('.carat-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const carat = e.currentTarget.dataset.carat;
        this.selectCarat(carat);
      });
    });

    // Size selection
    const sizeSelector = document.getElementById('size-selector');
    if (sizeSelector) {
      sizeSelector.addEventListener('change', (e) => {
        this.selectSize(e.target.value);
      });
    }

    // Add to cart
    const addToCartButton = document.getElementById('add-to-cart-button');
    if (addToCartButton) {
      addToCartButton.addEventListener('click', () => {
        this.addToCart();
      });
    }

    // Contact Us button
    const contactButton = document.getElementById('contact-us-button');
    if (contactButton) {
      contactButton.addEventListener('click', () => {
        this.openAIConcierge("I have a question about this piece.");
      });
    }
  }

  selectMetal(metal) {
    this.selectedMetal = metal;
    
    // Update UI
    document.querySelectorAll('.metal-option').forEach(btn => {
      const isActive = btn.dataset.metal === metal;
      btn.dataset.active = isActive;
      
      const ring = btn.querySelector('.metal-option-ring');
      const button = btn.querySelector('.metal-option-button');
      
      if (ring && button) {
        if (isActive) {
          ring.classList.add('scale-125', 'border-stone-800');
          ring.classList.remove('scale-100', 'border-transparent');
          button.classList.add('scale-90', 'text-stone-700');
          button.classList.remove('text-stone-500');
        } else {
          ring.classList.remove('scale-125', 'border-stone-800');
          ring.classList.add('scale-100', 'border-transparent');
          button.classList.remove('scale-90', 'text-stone-700');
          button.classList.add('text-stone-500');
        }
      }
    });

    // Update label
    const metalLabel = document.getElementById('selected-metal-label');
    if (metalLabel) {
      metalLabel.textContent = metal;
    }

    this.updateVariant();
  }

  selectCarat(carat) {
    this.selectedCarat = carat;
    
    // Update UI
    document.querySelectorAll('.carat-option').forEach(btn => {
      const isActive = btn.dataset.carat === carat;
      btn.dataset.active = isActive;
      
      if (isActive) {
        btn.classList.add('border-black', 'bg-black', 'text-white');
        btn.classList.remove('border-stone-200', 'text-stone-500');
      } else {
        btn.classList.remove('border-black', 'bg-black', 'text-white');
        btn.classList.add('border-stone-200', 'text-stone-500');
      }
    });

    // Handle 3+ carat special case - open concierge
    if (carat && carat.includes('3+')) {
      this.openAIConcierge("Welcome to ORÉA. A 3ct+ diamond is a spectacular choice. These exceptional stones require special sourcing and we'd love to help you find the perfect one. What shape and setting style are you considering?");
    }

    this.updateVariant();
  }

  selectSize(size) {
    this.selectedSize = size;
    this.updateVariant();
  }

  updateVariant() {
    if (!this.variants || this.variants.length === 0) return;

    // Find matching variant
    const variant = this.variants.find(v => {
      const matches = [];
      if (this.selectedMetal && v.option1) {
        matches.push(v.option1 === this.selectedMetal);
      }
      if (this.selectedCarat && v.option2) {
        matches.push(v.option2 === this.selectedCarat);
      }
      if (this.selectedSize && v.option3) {
        matches.push(v.option3 === this.selectedSize);
      }
      return matches.every(m => m);
    });

    if (variant) {
      this.currentVariant = variant;
      this.updatePrice(variant.price);
      this.updateAvailability(variant.available);
      
      // Update URL without reload
      const url = new URL(window.location);
      url.searchParams.set('variant', variant.id);
      window.history.replaceState({}, '', url);
    }
  }

  updatePrice(price) {
    const priceElement = document.getElementById('product-price');
    if (priceElement) {
      // Format price using OREA helper or basic formatting
      if (window.OREA && window.OREA.formatMoney) {
        priceElement.textContent = window.OREA.formatMoney(price);
      } else {
        priceElement.textContent = new Intl.NumberFormat('en-NZ', {
          style: 'currency',
          currency: 'NZD'
        }).format(price / 100);
      }
    }
  }

  updateAvailability(available) {
    const button = document.getElementById('add-to-cart-button');
    if (!button) return;

    if (available) {
      button.disabled = false;
      button.classList.remove('bg-stone-100', 'text-stone-400', 'cursor-not-allowed');
      button.classList.add('bg-black', 'text-white', 'hover:bg-zinc-800');
      button.innerHTML = '<span>Add to Bag</span>';
    } else {
      button.disabled = true;
      button.classList.add('bg-stone-100', 'text-stone-400', 'cursor-not-allowed');
      button.classList.remove('bg-black', 'text-white', 'hover:bg-zinc-800');
      button.innerHTML = '<span>Sold Out</span>';
    }
  }

  async addToCart() {
    if (!this.currentVariant) {
      console.error('No variant selected');
      return;
    }

    const button = document.getElementById('add-to-cart-button');
    if (!button) return;

    // Disable button and show loading state
    button.disabled = true;
    const originalContent = button.innerHTML;
    button.innerHTML = '<div class="w-4 h-4 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin"></div><span class="ml-2">Adding...</span>';

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          items: [{
            id: this.currentVariant.id,
            quantity: 1
          }]
        })
      });

      if (response.ok) {
        // Success - update cart count and show success
        document.dispatchEvent(new CustomEvent('cart:updated'));
        
        button.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg><span class="ml-2">Added!</span>';
        
        setTimeout(() => {
          button.innerHTML = originalContent;
          button.disabled = false;
        }, 2000);
        
      } else {
        const error = await response.json();
        console.error('Error adding to cart:', error);
        button.innerHTML = '<span>Error - Try Again</span>';
        
        setTimeout(() => {
          button.innerHTML = originalContent;
          button.disabled = false;
        }, 2000);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      button.innerHTML = originalContent;
      button.disabled = false;
    }
  }

  openAIConcierge(message) {
    window.dispatchEvent(new CustomEvent('orea-open-concierge', {
      detail: { message }
    }));
  }

  initializeSelections() {
    if (!this.product || !this.variants || this.variants.length === 0) return;

    // Get initial variant from URL or use first available
    const urlParams = new URLSearchParams(window.location.search);
    const variantId = urlParams.get('variant');
    
    let initialVariant;
    if (variantId) {
      initialVariant = this.variants.find(v => v.id === parseInt(variantId));
    }
    
    if (!initialVariant) {
      initialVariant = this.variants.find(v => v.available) || this.variants[0];
    }

    if (initialVariant) {
      if (initialVariant.option1) this.selectMetal(initialVariant.option1);
      if (initialVariant.option2) this.selectCarat(initialVariant.option2);
      if (initialVariant.option3) {
        this.selectedSize = initialVariant.option3;
        const sizeSelector = document.getElementById('size-selector');
        if (sizeSelector) {
          sizeSelector.value = initialVariant.option3;
        }
      }
    }
  }

  updateUI() {
    // Additional UI updates after product data loads
    // Can be extended for specific needs
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ProductPage();
  });
} else {
  new ProductPage();
}
