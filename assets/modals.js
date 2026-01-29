/**
 * ORÉA Fine Jewellery - Modal Management System
 * Handles all modal interactions across the theme
 */

class ModalManager {
  constructor() {
    this.modals = {
      sizeGuide: document.getElementById('size-guide-modal'),
      sendHint: document.getElementById('send-hint-modal'),
      giftReminder: document.getElementById('gift-reminder-modal'),
      hintSuccess: document.getElementById('hint-success-screen')
    };
    
    this.init();
  }

  init() {
    this.attachTriggers();
    this.attachClosers();
    this.initSendHintModal();
    this.initGiftReminderModal();
    this.initKeyboardNavigation();
  }

  open(modalId) {
    const modal = this.modals[modalId];
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
      
      // Focus first focusable element
      const focusable = modal.querySelector('button, input, select, textarea');
      if (focusable) {
        setTimeout(() => focusable.focus(), 100);
      }
    }
  }

  close(modal) {
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  closeAll() {
    Object.values(this.modals).forEach(modal => {
      if (modal && !modal.classList.contains('hidden')) {
        this.close(modal);
      }
    });
  }

  attachTriggers() {
    // Size Guide
    document.querySelectorAll('.size-guide-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        this.open('sizeGuide');
      });
    });

    // Send Hint
    document.querySelectorAll('.send-hint-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        this.open('sendHint');
      });
    });

    // Gift Reminder
    document.querySelectorAll('.gift-reminder-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        this.open('giftReminder');
      });
    });

    // Request Sizer (opens concierge)
    document.querySelectorAll('.request-sizer').forEach(btn => {
      btn.addEventListener('click', () => {
        this.close(this.modals.sizeGuide);
        window.dispatchEvent(new CustomEvent('orea-open-concierge', {
          detail: { message: "I'd like to request a complimentary ORÉA ring sizer. Could you please help me with the next steps?" }
        }));
      });
    });
  }

  attachClosers() {
    // Close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('[id$="-modal"], [id$="-screen"]');
        this.close(modal);
      });
    });

    // Close on backdrop click
    Object.values(this.modals).forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            this.close(modal);
          }
        });
      }
    });
  }

  initKeyboardNavigation() {
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAll();
      }
    });
  }

  initSendHintModal() {
    const form = document.getElementById('send-hint-form');
    const inputs = document.querySelectorAll('.hint-input');
    
    if (!form) return;

    // Live preview updates
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        if (name === 'sender_name') {
          const el = document.getElementById('preview-sender');
          if (el) el.textContent = value || '[Your Name]';
        } else if (name === 'receiver_name') {
          const el = document.getElementById('preview-receiver');
          if (el) el.textContent = value || '[Recipient Name]';
        } else if (name === 'message') {
          const container = document.getElementById('preview-message-container');
          const messageEl = document.getElementById('preview-message');
          
          if (container && messageEl) {
            if (value.trim()) {
              messageEl.textContent = `"${value}"`;
              container.classList.remove('hidden');
            } else {
              container.classList.add('hidden');
            }
          }
        }
      });
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<div class="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin"></div>';
      
      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Add product info
      data.product_url = window.location.href;
      data.product_title = document.getElementById('preview-product-name')?.textContent || '';
      
      try {
        // Send to your backend endpoint
        // Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1800));
        
        // Success
        this.close(this.modals.sendHint);
        this.open('hintSuccess');
        
        // Reset form
        form.reset();
        this.resetSendHintPreview();
        
      } catch (error) {
        console.error('Error sending hint:', error);
        submitBtn.innerHTML = '<span>Error - Try Again</span>';
        
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
        }, 2000);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });

    // Success screen actions
    document.querySelectorAll('.open-concierge').forEach(btn => {
      btn.addEventListener('click', () => {
        this.close(this.modals.hintSuccess);
        window.dispatchEvent(new CustomEvent('orea-open-concierge', {
          detail: { message: "I'd like to discuss bespoke sourcing options for a special piece." }
        }));
      });
    });
  }

  resetSendHintPreview() {
    const senderEl = document.getElementById('preview-sender');
    const receiverEl = document.getElementById('preview-receiver');
    const messageContainer = document.getElementById('preview-message-container');
    
    if (senderEl) senderEl.textContent = '[Your Name]';
    if (receiverEl) receiverEl.textContent = '[Recipient Name]';
    if (messageContainer) messageContainer.classList.add('hidden');
  }

  initGiftReminderModal() {
    const form = document.getElementById('gift-reminder-form');
    const leadTimeButtons = document.querySelectorAll('.lead-time-btn');
    
    if (!form) return;

    // Lead time selection
    leadTimeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const days = btn.dataset.days;
        
        // Update button states
        leadTimeButtons.forEach(b => {
          b.classList.remove('bg-black', 'text-white', 'border-black', 'shadow-sm');
          b.classList.add('border-stone-100', 'text-stone-400', 'hover:border-stone-200');
        });
        
        btn.classList.add('bg-black', 'text-white', 'border-black', 'shadow-sm');
        btn.classList.remove('border-stone-100', 'text-stone-400', 'hover:border-stone-200');
        
        // Update hidden input
        const hiddenInput = document.getElementById('selected-lead-time');
        if (hiddenInput) hiddenInput.value = days;
        
        // Update preview
        const previewDays = document.getElementById('reminder-preview-days');
        if (previewDays) previewDays.textContent = days;
      });
    });

    // Occasion preview update
    const occasionSelect = form.querySelector('select[name="occasion"]');
    if (occasionSelect) {
      occasionSelect.addEventListener('change', (e) => {
        const previewOccasion = document.getElementById('reminder-preview-occasion');
        if (previewOccasion) {
          previewOccasion.textContent = e.target.value.toLowerCase();
        }
      });
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<div class="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin"></div>';
      
      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Add product info
      data.product_url = window.location.href;
      
      try {
        // Send to your backend endpoint
        // Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1800));
        
        // Success
        submitBtn.innerHTML = '<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Reminder Scheduled';
        
        setTimeout(() => {
          this.close(this.modals.giftReminder);
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          form.reset();
          this.resetGiftReminderForm();
        }, 2500);
        
      } catch (error) {
        console.error('Error scheduling reminder:', error);
        submitBtn.innerHTML = '<span>Error - Try Again</span>';
        
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  }

  resetGiftReminderForm() {
    const hiddenInput = document.getElementById('selected-lead-time');
    const previewDays = document.getElementById('reminder-preview-days');
    const previewOccasion = document.getElementById('reminder-preview-occasion');
    const leadTimeButtons = document.querySelectorAll('.lead-time-btn');
    
    if (hiddenInput) hiddenInput.value = '30';
    if (previewDays) previewDays.textContent = '30';
    if (previewOccasion) previewOccasion.textContent = 'anniversary';
    
    leadTimeButtons.forEach((btn, i) => {
      if (i === 0) {
        btn.classList.add('bg-black', 'text-white', 'border-black', 'shadow-sm');
        btn.classList.remove('border-stone-100', 'text-stone-400');
      } else {
        btn.classList.remove('bg-black', 'text-white', 'border-black', 'shadow-sm');
        btn.classList.add('border-stone-100', 'text-stone-400');
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ModalManager();
});
