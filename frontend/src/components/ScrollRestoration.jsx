import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the very top whenever the URL path changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' prevents weird jumping animations on page load
    });
  }, [pathname]);

  return null; // This component doesn't render anything to the screen
}