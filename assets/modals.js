// Modal Management System for OREA
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
    this.initValuePropModals();
  }

  open(modalId) {
    const modal = this.modals[modalId];
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  }

  close(modal) {
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  attachTriggers() {
    // Size Guide
    document.querySelector('.size-guide-trigger')?.addEventListener('click', () => {
      this.open('sizeGuide');
    });

    // Send Hint
    document.querySelector('.send-hint-trigger')?.addEventListener('click', () => {
      this.open('sendHint');
    });

    // Gift Reminder
    document.querySelector('.gift-reminder-trigger')?.addEventListener('click', () => {
      this.open('giftReminder');
    });

    // Request Sizer
    document.querySelector('.request-sizer')?.addEventListener('click', () => {
      this.close(this.modals.sizeGuide);
      window.dispatchEvent(new CustomEvent('orea-open-concierge', {
        detail: { message: "I'd like to request a complimentary ORÉA ring sizer. Could you please help me with the next steps?" }
      }));
    });
  }

  attachClosers() {
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

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        Object.values(this.modals).forEach(modal => {
          if (modal && !modal.classList.contains('hidden')) {
            this.close(modal);
          }
        });
      }
    });
  }

  initSendHintModal() {
    const form = document.getElementById('send-hint-form');
    const inputs = document.querySelectorAll('.hint-input');
    
    // Live preview updates
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        if (name === 'sender_name') {
          document.getElementById('preview-sender').textContent = value || '[Your Name]';
        } else if (name === 'receiver_name') {
          document.getElementById('preview-receiver').textContent = value || '[Recipient Name]';
        } else if (name === 'message') {
          const container = document.getElementById('preview-message-container');
          const messageEl = document.getElementById('preview-message');
          
          if (value.trim()) {
            messageEl.textContent = `"${value}"`;
            container.classList.remove('hidden');
          } else {
            container.classList.add('hidden');
          }
        }
      });
    });

    // Form submission
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<div class="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin"></div>';
      
      // Simulate sending (replace with actual API call)
      setTimeout(() => {
        this.close(this.modals.sendHint);
        this.open('hintSuccess');
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        
        // Reset preview
        document.getElementById('preview-sender').textContent = '[Your Name]';
        document.getElementById('preview-receiver').textContent = '[Recipient Name]';
        document.getElementById('preview-message-container').classList.add('hidden');
      }, 1800);
    });

    // Success screen actions
    document.querySelectorAll('.open-concierge').forEach(btn => {
      btn.addEventListener('click', () => {
        this.close(this.modals.hintSuccess);
        window.dispatchEvent(new CustomEvent('orea-open-concierge'));
      });
    });
  }

  initGiftReminderModal() {
    const form = document.getElementById('gift-reminder-form');
    const leadTimeButtons = document.querySelectorAll('.lead-time-btn');
    
    // Lead time selection
    leadTimeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const days = btn.dataset.days;
        
        leadTimeButtons.forEach(b => {
          b.classList.remove('bg-black', 'text-white', 'border-black', 'shadow-sm');
          b.classList.add('border-stone-100', 'text-stone-400', 'hover:border-stone-200');
        });
        
        btn.classList.add('bg-black', 'text-white', 'border-black', 'shadow-sm');
        btn.classList.remove('border-stone-100', 'text-stone-400', 'hover:border-stone-200');
        
        document.getElementById('selected-lead-time').value = days;
        document.getElementById('reminder-preview-days').textContent = days;
      });
    });

    // Occasion preview update
    const occasionSelect = form?.querySelector('select[name="occasion"]');
    occasionSelect?.addEventListener('change', (e) => {
      document.getElementById('reminder-preview-occasion').textContent = e.target.value.toLowerCase();
    });

    // Form submission
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<div class="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin"></div>';
      
      // Simulate scheduling (replace with actual API call)
      setTimeout(() => {
        submitBtn.innerHTML = 'Reminder Scheduled';
        
        setTimeout(() => {
          this.close(this.modals.giftReminder);
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          form.reset();
          
          // Reset to defaults
          document.getElementById('selected-lead-time').value = '30';
          document.getElementById('reminder-preview-days').textContent = '30';
          document.getElementById('reminder-preview-occasion').textContent = 'anniversary';
          
          leadTimeButtons.forEach((b, i) => {
            if (i === 0) {
              b.classList.add('bg-black', 'text-white', 'border-black', 'shadow-sm');
              b.classList.remove('border-stone-100', 'text-stone-400');
            } else {
              b.classList.remove('bg-black', 'text-white', 'border-black', 'shadow-sm');
              b.classList.add('border-stone-100', 'text-stone-400');
            }
          });
        }, 2500);
      }, 1800);
    });
  }

  initValuePropModals() {
    const modalContent = {
      'precious-metal': {
        title: 'Precious Metal',
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2v20M2 12h20" stroke-width="0.5" stroke-opacity="0.3" />
          <circle cx="12" cy="12" r="9" stroke-width="0.8" />
          <circle cx="12" cy="12" r="4" stroke-width="0.8" />
        </svg>`,
        content: `
          <div class="space-y-4">
            <p>At ORÉA, our pieces are made to last a lifetime - not to be discarded.</p>
            <p>We use only solid 14k or 18k gold and platinum, never plated, filled, or vermeil. Precious metals are inherently durable, repairable, and timeless - the ultimate expression of lasting value.</p>
          </div>
        `
      },
      'premium-diamond': {
        title: 'Premium Diamond',
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L4.5 9L12 22L19.5 9L12 2Z" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4.5 9H19.5" stroke-width="0.8" />
          <path d="M8 9L12 2L16 9" stroke-width="0.8" />
        </svg>`,
        content: `
          <div class="space-y-6 text-left">
            <p>ORÉA works exclusively with certified lab-grown diamonds, selected for exceptional brilliance, integrity, and traceable quality.</p>
            <p>All centre stones in our engagement rings, as well as any diamond of 1 carat and above, meet the following minimum standards:</p>
            <ul class="space-y-2 border-l border-stone-100 pl-6 text-[13px]">
              <li><strong>Cut:</strong> Excellent / Ideal</li>
              <li><strong>Clarity:</strong> VS and above</li>
              <li><strong>Colour:</strong> D–F</li>
            </ul>
            <p class="text-stone-400 italic text-[12px]">All diamonds over 1 carat are independently graded by the IGI, the global authority for lab-grown diamond certification.</p>
          </div>
        `
      },
      'free-shipping': {
        title: 'Free Shipping',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>`,
        content: `
          <div class="space-y-4">
            <p>Free fully insured shipping on all New Zealand orders.</p>
            <p>Orders are dispatched securely with signature required on delivery. Alternatively, you may collect your piece in person from our Christchurch studio.</p>
            <p>For full details, view our <a href="/pages/shipping-delivery" class="underline underline-offset-4 hover:text-black transition-colors font-medium">Shipping & Delivery information</a>.</p>
          </div>
        `
      },
      'sustainable': {
        title: 'Sustainable Practices',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.952 11.952 0 0112 13.5a11.952 11.952 0 01-8.716 1.247M3.284 14.253A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>`,
        content: `
          <div class="text-left space-y-8">
            <div>
              <p class="font-bold text-black text-[11px] uppercase tracking-widest mb-2">Longevity</p>
              <p>We use the highest-quality materials to ensure your jewellery can be worn, loved, and passed on for years to come.</p>
            </div>
            <div>
              <p class="font-bold text-black text-[11px] uppercase tracking-widest mb-2">Lab-Grown Diamonds</p>
              <p>Physically, chemically, and visually identical to mined diamonds. This modern approach reduces environmental impact while creating enduring beauty.</p>
            </div>
            <div>
              <p class="font-bold text-black text-[11px] uppercase tracking-widest mb-2">Carbon Offset Commitment</p>
              <p>ORÉA plants one tree for every purchase through Trees for Survival, contributing to long-term restoration beyond each piece we create.</p>
            </div>
          </div>
        `
      }
    };

    document.querySelectorAll('.value-prop-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const modalType = trigger.dataset.modal;
        const data = modalContent[modalType];
        
        if (data) {
          this.showValuePropModal(data);
        }
      });
    });
  }

  showValuePropModal(data) {
    const container = document.getElementById('value-prop-modals');
    
    const modalHTML = `
      <div class="value-prop-modal fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
        <div class="bg-white w-full max-w-xl p-10 md:p-16 rounded-sm relative shadow-2xl overflow-y-auto max-h-[90vh]">
          <button class="value-prop-close absolute top-8 right-8 text-stone-400 hover:text-black">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="mb-10 flex justify-center text-stone-800 scale-150">${data.icon}</div>
          <h4 class="text-2xl md:text-3xl font-light mb-8 text-center serif italic tracking-tight uppercase">${data.title}</h4>
          <div class="text-[14px] text-stone-600 font-light leading-relaxed text-center space-y-6">
            ${data.content}
          </div>
        </div>
      </div>
    `;
    
    container.innerHTML = modalHTML;
    document.body.style.overflow = 'hidden';
    
    // Close handlers
    const modal = container.querySelector('.value-prop-modal');
    const closeBtn = container.querySelector('.value-prop-close');
    
    closeBtn.addEventListener('click', () => {
      container.innerHTML = '';
      document.body.style.overflow = '';
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        container.innerHTML = '';
        document.body.style.overflow = '';
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ModalManager();
});