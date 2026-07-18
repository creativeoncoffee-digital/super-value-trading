import { gsap } from 'gsap';

export const initHeroSequence = () => {
  const tl = gsap.timeline();
  
  tl.fromTo('.hero-eyebrow', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.4 })
    .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
    .fromTo('.hero-desc', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.3')
    .fromTo('.hero-cta-btn', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 }, '-=0.2');
};