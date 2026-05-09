document.addEventListener('DOMContentLoaded', () => {
  // Init Lucide icons with safety check
  if (typeof lucide !== 'undefined') {
    try {
      lucide.createIcons();
    } catch (e) {
      console.error('Lucide icons error:', e);
    }
  }

  // Scroll reveal logic
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    reveals.forEach(el => el.classList.add('visible'));
  }

  // Stagger children in grids
  document.querySelectorAll('.bento-grid .card, .skills-grid .skill-card').forEach((el, i) => {
    if (!el.style.transitionDelay) {
      el.style.transitionDelay = (i * 0.08) + 's';
    }
  });

  // Modal Logic
  const modals = document.querySelectorAll('.case-study-modal');
  const projectCards = document.querySelectorAll('#work .card');
  
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      if (!modalId) return;
      
      const modal = document.getElementById(modalId);
      if (modal) {
        const titleEl = card.querySelector('.card-title');
        const title = titleEl ? titleEl.innerText : 'Project Details';
        const modalTitleEl = modal.querySelector('.modal-title');
        if (modalTitleEl) modalTitleEl.innerText = title;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Close when clicking outside content
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeModal(modal.id);
      }
    });
  });
});
