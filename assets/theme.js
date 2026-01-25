// Main theme JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Update cart count
  function updateCartCount() {
    fetch('/cart.js')
      .then(res => res.json())
      .then(cart => {
        const countEl = document.getElementById('cart-count');
        if (countEl) {
          countEl.textContent = cart.item_count;
        }
      });
  }

  // Call on load
  updateCartCount();

  // Update after cart changes
  document.addEventListener('cart:updated', updateCartCount);
});