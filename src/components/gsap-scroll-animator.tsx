'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollAnimator() {
  useEffect(() => {
    const animatedSections = gsap.utils.toArray('.gsap-animated-section');

    animatedSections.forEach((section) => {
      gsap.fromTo(
        section as HTMLElement,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section as HTMLElement,
            start: 'top 85%',
            end: 'bottom top',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return null;
}
