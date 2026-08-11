import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Instantly jump to the top
    window.scrollTo(0, 0);

    // 2. THE FIX: Forcefully unlock the scrollbar. 
    // This clears any lingering 'overflow: hidden' left behind by GSAP pinned sections.
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    // 3. Wait for the new page's images/components to mount, then recalculate GSAP math
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}