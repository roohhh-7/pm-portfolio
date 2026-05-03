  // Init Lucide icons
  lucide.createIcons();

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = entry.target.style.transitionDelay || '0s';
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(el => observer.observe(el));

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
        // Update the title of the opened modal based on the clicked card
        const title = card.querySelector('.card-title').innerText;
        const modalTitleEl = modal.querySelector('.modal-title');
        if (modalTitleEl) modalTitleEl.innerText = title;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
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
