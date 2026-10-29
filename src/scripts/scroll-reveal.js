import ScrollReveal from 'scrollreveal';

export default function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return;
  }

  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '16px',
    duration: 650,
    delay: 80,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    reset: false,
    viewFactor: 0.12,
  });

  // Hero elements
  sr.reveal('.reveal-hero-badge', { delay: 60, distance: '10px' });
  sr.reveal('.reveal-hero-title', { delay: 120, distance: '20px' });
  sr.reveal('.reveal-hero-desc', { delay: 200, distance: '16px' });
  sr.reveal('.reveal-hero-cta', { delay: 280, distance: '14px' });

  // Section titles and intro
  sr.reveal('.reveal-header', { delay: 100, distance: '16px' });

  // Cards with soft stagger
  sr.reveal('.reveal-card', {
    delay: 140,
    interval: 80,
    distance: '20px',
  });

  // Stack items
  sr.reveal('.reveal-stack-item', {
    delay: 100,
    interval: 40,
    distance: '12px',
  });

  // Contact & footer
  sr.reveal('.reveal-contact', {
    delay: 120,
    distance: '16px',
  });
}
