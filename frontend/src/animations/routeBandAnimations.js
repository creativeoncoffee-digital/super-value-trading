import { gsap } from 'gsap';

export const animateRouteBand = (pathRef, ringsClass, nodesClass) => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  // Draw the connecting international trade line path
  tl.fromTo(pathRef, 
    { strokeDasharray: '1000', strokeDashoffset: '1000' },
    { strokeDashoffset: '0', duration: 1.6 }
  );

  // Pulse the location node circles (e.g., Dubai Hub markers)
  tl.fromTo(nodesClass,
    { scale: 0, transformOrigin: 'center' },
    { scale: 1, duration: 0.4, stagger: 0.2 },
    '-=0.8'
  );

  // Expand the ring highlights around the nodes
  tl.fromTo(ringsClass,
    { scale: 0, opacity: 0, transformOrigin: 'center' },
    { scale: 1, opacity: 0.4, duration: 0.6, stagger: 0.2, repeat: -1, yoyo: true },
    '-=0.4'
  );
};