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
  const modal = document.getElementById('case-study-modal');
  const projectCards = document.querySelectorAll('#work .card');
  
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      // In a real scenario, you'd populate modal contents here based on the card clicked.
      // For now, we update the title and show the modal template.
      const title = card.querySelector('.card-title').innerText;
      document.getElementById('modal-title').innerText = title;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  window.closeModal = function() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close when clicking outside content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
