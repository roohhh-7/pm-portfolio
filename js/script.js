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
