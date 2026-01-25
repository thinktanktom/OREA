class ProductPage {
  constructor() {
    this.selectedMetal = null;
    this.selectedCarat = null;
    this.selectedSize = null;
    this.variants = [];
    
    this.init();
  }

  init() {
    this.loadProductData();
    this.attachEventListeners();
    this.initializeSelections();
  }

  loadProductData() {
    // Get product JSON from Shopify
    fetch(window.location.pathname + '.js')
      .then(res => res.json())
      .then(product => {
        this.product = product;
        this.variants = product.variants;
        this.updateUI();
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
    document.getElementById('size-selector')?.addEventListener('change', (e) => {
      this.selectSize(e.target.value);
    });

    // Add to cart
    document.getElementById('add-to-cart-button')?.addEventListener('click', () => {
      this.addToCart();
    });

    // Modal triggers
    document.querySelector('.size-guide-trigger')?.addEventListener('click', () => {
      this.openModal('size-guide');
    });

    document.querySelector('.send-hint-trigger')?.addEventListener('click', () => {
      this.openModal('send-hint');
    });

    document.querySelector('.gift-reminder-trigger')?.addEventListener('click', () => {
      this.openModal('gift-reminder');
    });
  }

  selectMetal(metal) {
    this.selectedMetal = metal;
    
    // Update UI
    document.querySelectorAll('.metal-option').forEach(btn => {
      const isActive = btn.dataset.metal === metal;
      btn.dataset.active = isActive;
      
      const ring = btn.querySelector('.metal-option-ring');
      const button = btn.querySelector('.metal-option-button');
      
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
    });

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

    // Handle 3+ carat special case
    if (carat.includes('3+')) {
      this.openAIConcierge("Welcome to OREA. A 3ct+ diamond is a spectacular choice...");
    }

    this.updateVariant();
  }

  selectSize(size) {
    this.selectedSize = size;
    this.updateVariant();
  }

  updateVariant() {
    const variant = this.variants.find(v => 
      v.option1 === this.selectedMetal &&
      v.option2 === this.selectedCarat &&
      v.option3 === this.selectedSize
    );

    if (variant) {
      this.currentVariant = variant;
      this.updatePrice(variant.price);
      this.updateAvailability(variant.available);
    }
  }

  updatePrice(price) {
    const priceElement = document.getElementById('product-price');
    if (priceElement) {
      priceElement.textContent = new Intl.NumberFormat('en-NZ', {
        style: 'currency',
        currency: 'NZD'
      }).format(price / 100);
    }
  }

  updateAvailability(available) {
    const button = document.getElementById('add-to-cart-button');
    if (button) {
      if (available) {
        button.disabled = false;
        button.classList.remove('bg-stone-100', 'text-stone-400', 'cursor-not-allowed');
        button.classList.add('bg-black', 'text-white', 'hover:bg-zinc-800');
      } else {
        button.disabled = true;
        button.classList.add('bg-stone-100', 'text-stone-400', 'cursor-not-allowed');
        button.classList.remove('bg-black', 'text-white', 'hover:bg-zinc-800');
      }
    }
  }

  async addToCart() {
    if (!this.currentVariant) return;

    const button = document.getElementById('add-to-cart-button');
    button.disabled = true;
    button.innerHTML = '<div class="w-3 h-3 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin"></div><span>Adding...</span>';

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{
            id: this.currentVariant.id,
            quantity: 1
          }]
        })
      });

      if (response.ok) {
        // Success - redirect to cart or show notification
        window.location.href = '/cart';
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      button.disabled = false;
      button.innerHTML = '<span>Add to Bag</span>';
    }
  }

  openModal(modalType) {
    // Implement modal logic
    console.log('Opening modal:', modalType);
  }

  openAIConcierge(message) {
    window.dispatchEvent(new CustomEvent('orea-open-concierge', {
      detail: { message }
    }));
  }

  initializeSelections() {
    // Set initial selections from first available variant
    if (this.product) {
      const firstVariant = this.product.variants[0];
      this.selectMetal(firstVariant.option1);
      this.selectCarat(firstVariant.option2);
      this.selectSize(firstVariant.option3);
    }
  }

  updateUI() {
    // Additional UI updates after product data loads
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