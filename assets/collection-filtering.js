/**
 * ORÉA Collection Filtering & Sorting
 * ====================================
 * Converted from: React state management in App.tsx
 * 
 * Handles:
 * - Diamond shape filtering
 * - Sort options (Featured, Best Selling, Price)
 * - Dynamic product grid updates
 * - URL parameter state management
 */

(function() {
  'use strict';

  let currentShape = 'all';
  let currentSort = 'featured';
  let allProducts = [];

  // ================================================
  // Initialize
  // ================================================
  
  function init() {
    // Get all products from the grid
    const productCards = document.querySelectorAll('.product-card');
    allProducts = Array.from(productCards).map(card => ({
      element: card,
      shape: card.getAttribute('data-shape') || '',
      price: parseFloat(card.getAttribute('data-price')) || 0,
      isNew: card.getAttribute('data-is-new') === 'true',
      isBestSeller: card.getAttribute('data-is-bestseller') === 'true'
    }));

    // Read URL parameters
    const params = new URLSearchParams(window.location.search);
    if (params.has('shape')) {
      currentShape = params.get('shape');
    }
    if (params.has('sort')) {
      currentSort = params.get('sort');
    }

    setupEventListeners();
    updateUI();
    filterAndSort();
  }

  // ================================================
  // Event Listeners
  // ================================================
  
  function setupEventListeners() {
    // Shape filter toggle
    const shapeToggle = document.getElementById('shape-filter-toggle');
    const shapeDropdown = document.getElementById('shape-filter-dropdown');
    const shapeIcon = document.getElementById('shape-filter-icon');
    
    if (shapeToggle && shapeDropdown) {
      shapeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !shapeDropdown.classList.contains('hidden');
        shapeDropdown.classList.toggle('hidden');
        shapeIcon.classList.toggle('rotate-180');
        
        // Close sort dropdown
        document.getElementById('sort-dropdown')?.classList.add('hidden');
        document.getElementById('sort-icon')?.classList.remove('rotate-180');
      });
    }

    // Sort toggle
    const sortToggle = document.getElementById('sort-toggle');
    const sortDropdown = document.getElementById('sort-dropdown');
    const sortIcon = document.getElementById('sort-icon');
    
    if (sortToggle && sortDropdown) {
      sortToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !sortDropdown.classList.contains('hidden');
        sortDropdown.classList.toggle('hidden');
        sortIcon.classList.toggle('rotate-180');
        
        // Close shape dropdown
        document.getElementById('shape-filter-dropdown')?.classList.add('hidden');
        document.getElementById('shape-filter-icon')?.classList.remove('rotate-180');
      });
    }

    // Shape filter options
    const shapeOptions = document.querySelectorAll('.shape-filter-option');
    shapeOptions.forEach(option => {
      option.addEventListener('click', () => {
        currentShape = option.getAttribute('data-shape');
        updateURL();
        updateUI();
        filterAndSort();
        shapeDropdown?.classList.add('hidden');
        shapeIcon?.classList.remove('rotate-180');
      });
    });

    // Sort options
    const sortOptions = document.querySelectorAll('.sort-option');
    sortOptions.forEach(option => {
      option.addEventListener('click', () => {
        currentSort = option.getAttribute('data-sort');
        updateURL();
        updateUI();
        filterAndSort();
        sortDropdown?.classList.add('hidden');
        sortIcon?.classList.remove('rotate-180');
      });
    });

    // Clear filters
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        currentShape = 'all';
        currentSort = 'featured';
        updateURL();
        updateUI();
        filterAndSort();
      });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#shape-filter-container')) {
        shapeDropdown?.classList.add('hidden');
        shapeIcon?.classList.remove('rotate-180');
      }
      if (!e.target.closest('#sort-container')) {
        sortDropdown?.classList.add('hidden');
        sortIcon?.classList.remove('rotate-180');
      }
    });
  }

  // ================================================
  // Filtering & Sorting Logic
  // ================================================
  
  function filterAndSort() {
    let filtered = [...allProducts];

    // Filter by shape
    if (currentShape !== 'all') {
      filtered = filtered.filter(p => p.shape === currentShape);
    }

    // Sort
    switch (currentSort) {
      case 'best-selling':
        filtered.sort((a, b) => {
          if (a.isBestSeller && !b.isBestSeller) return -1;
          if (!a.isBestSeller && b.isBestSeller) return 1;
          return 0;
        });
        break;
      
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
    }

    // Update DOM
    renderProducts(filtered);
    updateProductCount(filtered.length);
  }

  // ================================================
  // DOM Updates
  // ================================================
  
  function renderProducts(filteredProducts) {
    const grid = document.getElementById('product-grid');
    const emptyState = document.getElementById('empty-state');
    
    if (!grid) return;

    // Hide all products first
    allProducts.forEach(p => {
      p.element.style.display = 'none';
    });

    // Show filtered products in order
    if (filteredProducts.length > 0) {
      filteredProducts.forEach((p, index) => {
        p.element.style.display = 'flex';
        p.element.style.order = index;
      });
      emptyState?.classList.add('hidden');
    } else {
      emptyState?.classList.remove('hidden');
    }
  }

  function updateProductCount(count) {
    const countEl = document.getElementById('product-count');
    if (countEl) {
      countEl.textContent = `${count} ${count === 1 ? 'Piece' : 'Pieces'}`;
    }
  }

  function updateUI() {
    // Update shape filter label
    const shapeLabel = document.getElementById('shape-filter-label');
    if (shapeLabel) {
      if (currentShape === 'all') {
        shapeLabel.textContent = 'Shape';
      } else {
        const shapeName = currentShape.charAt(0).toUpperCase() + currentShape.slice(1);
        shapeLabel.textContent = `Shape: ${shapeName}`;
      }
    }

    // Update shape filter options styling
    const shapeOptions = document.querySelectorAll('.shape-filter-option');
    shapeOptions.forEach(option => {
      const shape = option.getAttribute('data-shape');
      if (shape === currentShape) {
        option.classList.remove('text-[#4A3F35]/60', 'hover:text-[#4A3F35]');
        option.classList.add('text-[#4A3F35]', 'font-bold', 'bg-[#E8DFD3]/20');
      } else {
        option.classList.add('text-[#4A3F35]/60', 'hover:text-[#4A3F35]');
        option.classList.remove('text-[#4A3F35]', 'font-bold', 'bg-[#E8DFD3]/20');
      }
    });

    // Update sort label
    const sortLabel = document.getElementById('sort-label');
    if (sortLabel) {
      const sortNames = {
        'featured': 'Featured',
        'best-selling': 'Best Selling',
        'price-low': 'Price, Low To High',
        'price-high': 'Price, High To Low'
      };
      sortLabel.textContent = `Sort: ${sortNames[currentSort] || 'Featured'}`;
    }

    // Update sort options styling
    const sortOptions = document.querySelectorAll('.sort-option');
    sortOptions.forEach(option => {
      const sort = option.getAttribute('data-sort');
      if (sort === currentSort) {
        option.classList.remove('text-[#4A3F35]/60', 'hover:text-[#4A3F35]');
        option.classList.add('text-[#4A3F35]', 'font-bold', 'bg-[#E8DFD3]/20');
      } else {
        option.classList.add('text-[#4A3F35]/60', 'hover:text-[#4A3F35]');
        option.classList.remove('text-[#4A3F35]', 'font-bold', 'bg-[#E8DFD3]/20');
      }
    });

    // Show/hide clear button
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
      if (currentShape !== 'all') {
        clearBtn.classList.remove('hidden');
      } else {
        clearBtn.classList.add('hidden');
      }
    }
  }

  function updateURL() {
    const params = new URLSearchParams();
    
    if (currentShape !== 'all') {
      params.set('shape', currentShape);
    }
    if (currentSort !== 'featured') {
      params.set('sort', currentSort);
    }

    const newURL = params.toString() 
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
    
    window.history.replaceState({}, '', newURL);
  }

  // ================================================
  // Start
  // ================================================
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
