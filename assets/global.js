/**
 * ORÉA Global JavaScript
 * Handles navigation, dropdowns, mobile menu, and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== HEADER SCROLL EFFECT =====
  const header = document.getElementById('orea-header');
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

  // ===== DROPDOWN NAVIGATION =====
  const navItems = document.querySelectorAll('.nav-item');
  const dropdowns = {
    shop: document.getElementById('shop-dropdown'),
    concierge: document.getElementById('concierge-dropdown')
  };

  navItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const dropdownType = this.getAttribute('data-dropdown');
      
      // Close all dropdowns
      Object.values(dropdowns).forEach(dropdown => {
        if (dropdown) dropdown.classList.remove('active');
      });
      
      // Open the relevant dropdown
      if (dropdowns[dropdownType]) {
        dropdowns[dropdownType].classList.add('active');
      }
    });
  });

  // Close dropdowns when mouse leaves header
  header.addEventListener('mouseleave', function() {
    Object.values(dropdowns).forEach(dropdown => {
      if (dropdown) dropdown.classList.remove('active');
    });
  });

  // ===== MOBILE MENU =====
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }

  // ===== ACCORDION (for FAQ/Shipping/Returns pages) =====
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentElement;
      const isOpen = item.classList.contains('active');
      
      // Close all accordions
      document.querySelectorAll('.accordion-item').forEach(acc => {
        acc.classList.remove('active');
      });
      
      // Open clicked accordion if it wasn't open
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  // ===== PRODUCT IMAGE GALLERY =====
  const thumbnails = document.querySelectorAll('.product-thumbnail');
  const mainImage = document.querySelector('.product-main-image');
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      const newSrc = this.getAttribute('data-image-src');
      if (mainImage && newSrc) {
        mainImage.src = newSrc;
        
        // Update active state
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // ===== VARIANT SELECTOR =====
  const variantSelectors = document.querySelectorAll('.variant-selector');
  
  variantSelectors.forEach(selector => {
    selector.addEventListener('change', function() {
      // Update price, availability, etc based on selected variant
      const variantId = this.value;
      // Additional variant handling logic here
    });
  });

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ===== FADE IN ON SCROLL =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // ===== CART ICON UPDATE =====
  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(data => {
        const cartCount = document.querySelector('[data-cart-count]');
        if (cartCount) {
          cartCount.textContent = data.item_count;
          if (data.item_count === 0) {
            cartCount.style.display = 'none';
          } else {
            cartCount.style.display = 'flex';
          }
        }
      });
  }

  // Update cart count on page load
  updateCartCount();

  // Listen for cart updates
  document.addEventListener('cart:updated', updateCartCount);
});
