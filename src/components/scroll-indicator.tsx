"use client";

import { useEffect } from 'react';

export default function ScrollIndicator() {
  useEffect(() => {
    const updateScrollIndicator = () => {
      const scrollIndicator = document.getElementById('scroll-indicator');
      if (!scrollIndicator) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);

      scrollIndicator.style.transform = `scaleX(${scrollPercent / 100})`;
    };

    window.addEventListener('scroll', updateScrollIndicator);
    return () => window.removeEventListener('scroll', updateScrollIndicator);
  }, []);

  return <div className="scroll-indicator" id="scroll-indicator" />;
}
