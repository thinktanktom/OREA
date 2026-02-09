/**
 * ORÉA Theme JavaScript
 * Converted from React to vanilla JavaScript for Shopify
 */

(function() {
  'use strict';

  // ========================================
  // HEADER/NAVBAR FUNCTIONALITY
  // ========================================
  
  function initHeader() {
    const header = document.querySelector('.header-section');
    if (!header) return;

    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });

    // Dropdown menus (desktop)
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    
    dropdownTriggers.forEach(trigger => {
      trigger.addEventListener('mouseenter', function() {
        const dropdownType = this.dataset.dropdown;
        const menu = document.querySelector(`.${dropdownType}-dropdown`);
        
        // Close all dropdowns first
        dropdownMenus.forEach(m => m.classList.remove('active'));
        
        // Open the hovered dropdown
        if (menu) {
          menu.classList.add('active');
          header.classList.add('dropdown-active');
        }
      });
    });

    // Close dropdowns when mouse leaves nav area
    header.addEventListener('mouseleave', () => {
      dropdownMenus.forEach(m => m.classList.remove('active'));
      header.classList.remove('dropdown-active');
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
          document.body.style.overflow = '';
        } else {
          mobileMenu.classList.remove('hidden');
          menuIcon.classList.add('hidden');
          closeIcon.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }
      });

      // Close mobile menu when clicking a link
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
          document.body.style.overflow = '';
        });
      });
    }
  }

  // ========================================
  // ACCORDION FUNCTIONALITY
  // ========================================
  
  function initAccordions() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        const content = button.nextElementSibling;
        
        // Close all other accordions (optional - remove for multi-open)
        accordionButtons.forEach(btn => {
          if (btn !== button) {
            btn.setAttribute('aria-expanded', 'false');
            const otherContent = btn.nextElementSibling;
            if (otherContent) {
              otherContent.classList.remove('active');
            }
          }
        });
        
        // Toggle current accordion
        button.setAttribute('aria-expanded', !expanded);
        if (content) {
          content.classList.toggle('active');
        }
      });
    });
  }

  // ========================================
  // PRODUCT VARIANT SELECTION
  // ========================================
  
  function initProductVariants() {
    const variantSelectors = document.querySelectorAll('[data-variant-selector]');
    const productForm = document.querySelector('.product-form');
    
    if (!productForm) return;
    
    variantSelectors.forEach(selector => {
      selector.addEventListener('change', function() {
        updateVariant();
      });
    });
    
    function updateVariant() {
      const selectedOptions = Array.from(variantSelectors).map(select => select.value);
      const variant = findVariant(selectedOptions);
      
      if (variant) {
        // Update price
        const priceElement = document.querySelector('[data-product-price]');
        if (priceElement && variant.price) {
          priceElement.textContent = formatMoney(variant.price);
        }
        
        // Update variant ID
        const variantInput = document.querySelector('[name="id"]');
        if (variantInput) {
          variantInput.value = variant.id;
        }
        
        // Update availability
        const addToCartButton = document.querySelector('[data-add-to-cart]');
        if (addToCartButton) {
          if (variant.available) {
            addToCartButton.disabled = false;
            addToCartButton.textContent = addToCartButton.dataset.addToCart || 'Add to Cart';
          } else {
            addToCartButton.disabled = true;
            addToCartButton.textContent = addToCartButton.dataset.soldOut || 'Sold Out';
          }
        }
      }
    }
    
    function findVariant(selectedOptions) {
      const variants = JSON.parse(document.querySelector('[data-product-variants]')?.textContent || '[]');
      return variants.find(variant => {
        return selectedOptions.every((option, index) => {
          return variant[`option${index + 1}`] === option;
        });
      });
    }
  }

  // ========================================
  // CART FUNCTIONALITY
  // ========================================
  
  function initCart() {
    // Add to cart
    const addToCartForms = document.querySelectorAll('.product-form');
    
    addToCartForms.forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const addToCartButton = form.querySelector('[data-add-to-cart]');
        
        if (addToCartButton) {
          addToCartButton.disabled = true;
          const originalText = addToCartButton.textContent;
          addToCartButton.textContent = 'Adding...';
          
          try {
            const response = await fetch('/cart/add.js', {
              method: 'POST',
              body: formData
            });
            
            if (response.ok) {
              const data = await response.json();
              updateCartCount();
              addToCartButton.textContent = 'Added!';
              
              setTimeout(() => {
                addToCartButton.textContent = originalText;
                addToCartButton.disabled = false;
              }, 2000);
            } else {
              throw new Error('Failed to add to cart');
            }
          } catch (error) {
            console.error('Error adding to cart:', error);
            addToCartButton.textContent = 'Error';
            setTimeout(() => {
              addToCartButton.textContent = originalText;
              addToCartButton.disabled = false;
            }, 2000);
          }
        }
      });
    });
  }

  async function updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      const cartCountElements = document.querySelectorAll('.cart-count');
      cartCountElements.forEach(el => {
        el.textContent = cart.item_count;
      });
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  // ========================================
  // SEARCH FUNCTIONALITY
  // ========================================
  
  function initSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    
    if (searchToggle && searchOverlay) {
      searchToggle.addEventListener('click', () => {
        searchOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        const searchInput = searchOverlay.querySelector('input');
        if (searchInput) {
          setTimeout(() => searchInput.focus(), 100);
        }
      });
      
      if (searchClose) {
        searchClose.addEventListener('click', () => {
          searchOverlay.classList.add('hidden');
          document.body.style.overflow = '';
        });
      }
      
      // Close on ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !searchOverlay.classList.contains('hidden')) {
          searchOverlay.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    }
  }

  // ========================================
  // UTILITY FUNCTIONS
  // ========================================
  
  function formatMoney(cents, format = '${{amount}}') {
    const value = (cents / 100).toFixed(2);
    return format.replace('{{amount}}', value);
  }

  // ========================================
  // PRODUCT FILTERS (Collection Page)
  // ========================================
  
  function initProductFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const sortButtons = document.querySelectorAll('[data-sort]');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterType = this.dataset.filterType;
        const filterValue = this.dataset.filter;
        
        // Update URL with filter params
        const url = new URL(window.location);
        url.searchParams.set(filterType, filterValue);
        window.location = url.toString();
      });
    });
    
    sortButtons.forEach(button => {
      button.addEventListener('click', function() {
        const sortValue = this.dataset.sort;
        
        // Update URL with sort param
        const url = new URL(window.location);
        url.searchParams.set('sort_by', sortValue);
        window.location = url.toString();
      });
    });
  }

  // ========================================
  // IMAGE ZOOM (Product Page)
  // ========================================
  
  function initImageZoom() {
    const zoomImages = document.querySelectorAll('[data-zoom]');
    
    zoomImages.forEach(img => {
      img.addEventListener('click', function() {
        // Create zoom overlay
        const overlay = document.createElement('div');
        overlay.className = 'zoom-overlay';
        overlay.innerHTML = `
          <div class="zoom-container">
            <img src="${this.src}" alt="${this.alt}">
            <button class="zoom-close">&times;</button>
          </div>
        `;
        
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        
        const closeBtn = overlay.querySelector('.zoom-close');
        closeBtn.addEventListener('click', () => {
          overlay.remove();
          document.body.style.overflow = '';
        });
        
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) {
            overlay.remove();
            document.body.style.overflow = '';
          }
        });
      });
    });
  }

  // ========================================
  // INITIALIZE ON DOM READY
  // ========================================
  
  function init() {
    initHeader();
    initAccordions();
    initProductVariants();
    initCart();
    initSearch();
    initProductFilters();
    initImageZoom();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
