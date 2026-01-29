/**
 * ORÉA Fine Jewellery - Theme JavaScript
 * Main functionality for the Shopify theme
 */

(function() {
  'use strict';

  // ================================================
  // Cart Functions
  // ================================================
  
  function updateCartCount() {
    fetch('/cart.js')
      .then(res => res.json())
      .then(cart => {
        const countEl = document.getElementById('cart-count');
        if (countEl) {
          countEl.textContent = cart.item_count;
        }
      })
      .catch(err => console.error('Error updating cart count:', err));
  }

  // ================================================
  // Mobile Menu
  // ================================================
  
  function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    
    if (toggle && menu) {
      toggle.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        
        // Update aria-expanded
        const isExpanded = !menu.classList.contains('hidden');
        toggle.setAttribute('aria-expanded', isExpanded);
      });
    }
  }

  // ================================================
  // Smooth Scroll for Anchor Links
  // ================================================
  
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ================================================
  // Lazy Loading Images
  // ================================================
  
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // ================================================
  // Scroll-Triggered Animations
  // ================================================
  
  function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
      const animatedElements = document.querySelectorAll('[data-animate]');
      
      const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
            animationObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach(el => {
        el.style.opacity = '0';
        animationObserver.observe(el);
      });
    }
  }

  // ================================================
  // Newsletter Form
  // ================================================
  
  function initNewsletterForm() {
    const forms = document.querySelectorAll('form[action*="newsletter"]');
    
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput && !emailInput.validity.valid) {
          e.preventDefault();
          emailInput.classList.add('border-red-500');
          return;
        }
      });
    });
  }

  // ================================================
  // Accessibility: Skip to Content
  // ================================================
  
  function initSkipToContent() {
    const skipLink = document.querySelector('.skip-to-content');
    const mainContent = document.getElementById('main-content');
    
    if (skipLink && mainContent) {
      skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        mainContent.focus();
        mainContent.scrollIntoView();
      });
    }
  }

  // ================================================
  // Product Quick View (if implemented)
  // ================================================
  
  function initQuickView() {
    document.querySelectorAll('[data-quick-view]').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const productUrl = this.dataset.quickView;
        // Implement quick view logic here
        console.log('Quick view requested for:', productUrl);
      });
    });
  }

  // ================================================
  // Currency Formatting Helper
  // ================================================
  
  window.OREA = window.OREA || {};
  
  window.OREA.formatMoney = function(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    
    const value = parseFloat(cents) / 100;
    
    const formatString = format || '${{amount}}';
    
    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';
      
      if (isNaN(number) || number === null) {
        return 0;
      }
      
      number = (number / 100.0).toFixed(precision);
      
      const parts = number.split('.');
      const dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      const cents = parts[1] ? (decimal + parts[1]) : '';
      
      return dollars + cents;
    }
    
    let formattedValue = '';
    
    switch (formatString.match(/\{\{\s*(\w+)\s*\}\}/)[1]) {
      case 'amount':
        formattedValue = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        formattedValue = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        formattedValue = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        formattedValue = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }
    
    return formatString.replace(/\{\{\s*(\w+)\s*\}\}/, formattedValue);
  };

  // ================================================
  // Initialize Everything on DOM Ready
  // ================================================
  
  function init() {
    updateCartCount();
    initMobileMenu();
    initSmoothScroll();
    initLazyLoading();
    initScrollAnimations();
    initNewsletterForm();
    initSkipToContent();
    initQuickView();
    
    // Update cart count after cart changes
    document.addEventListener('cart:updated', updateCartCount);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
