import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      const windowHeight = scrollHeight - clientHeight;
      const progress = (scrollTop / windowHeight) * 100;
      
      setScrollProgress(progress);

      // Show button after scrolling down 400px
      if (scrollTop > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll back to the hero section
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-700 ease-out flex items-center justify-center
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}
      `}
    >
      <button 
        onClick={scrollToTop}
        // Glassmorphism base with sleek shadows
        className="group relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgba(11,30,58,0.12)] border border-white/60 hover:shadow-[0_0_30px_rgba(243,121,10,0.4)] transition-all duration-500 overflow-hidden"
        aria-label="Scroll to top"
      >
        {/* The Liquid Fill Hover Effect (Slides up from the bottom) */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-orange-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

        {/* SVG Progress Ring */}
        <svg 
          className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-sm" 
          viewBox="0 0 50 50"
        >
          {/* Faint Background Track */}
          <circle 
            cx="25" cy="25" r={radius} 
            fill="none" 
            stroke="rgba(11,30,58,0.06)" 
            strokeWidth="3" 
          />
          {/* Dynamic Orange Progress Indicator (Turns white on hover) */}
          <circle 
            cx="25" cy="25" r={radius} 
            fill="none" 
            stroke="#f3790a" 
            strokeWidth="3" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out group-hover:stroke-white"
          />
        </svg>

        {/* Inner Up Arrow Icon */}
        <div className="relative z-10 text-[#0B1E3A] group-hover:text-white transition-colors duration-300">
          <svg 
            // Bounces slightly up when hovered
            className="w-5 h-5 transform group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"></path>
          </svg>
        </div>
      </button>
    </div>
  );
}