/* Marco Grotemeyer — AI Consulting
   Minimal JS: FAQ accordion + reveal-on-scroll + year stamp.
   No frameworks. No dependencies. */

(() => {
  'use strict';

  /* -------------------------------------------
     FAQ accordion
     ------------------------------------------- */
  const faqButtons = document.querySelectorAll('.faq-q');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // close all
      document.querySelectorAll('.faq-item.open').forEach((el) => {
        el.classList.remove('open');
        el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* -------------------------------------------
     Reveal on scroll (IntersectionObserver)
     ------------------------------------------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    // fallback / reduced motion: show all immediately
    reveals.forEach((el) => el.classList.add('in'));
  }

  /* -------------------------------------------
     Year stamp
     ------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();