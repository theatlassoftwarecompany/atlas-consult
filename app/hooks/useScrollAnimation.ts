'use client';

import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // One-time animations (fade-up, fade-in) — unobserve after first trigger
    const oneTimeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            oneTimeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Repeat animations (hero-enter) — fire every time element enters view
    const repeatObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.fade-up, .fade-in').forEach((el) => {
      oneTimeObserver.observe(el);
    });

    document.querySelectorAll('.hero-enter, .zoom-in, .slide-left, .slide-right, .rise-up').forEach((el) => {
      repeatObserver.observe(el);
    });

    return () => {
      oneTimeObserver.disconnect();
      repeatObserver.disconnect();
    };
  }, []);
}
