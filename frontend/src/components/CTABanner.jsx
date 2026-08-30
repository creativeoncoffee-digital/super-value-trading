import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sv1 from '../assets/CTA/AutoCTA.png';
import sv2 from '../assets/CTA/CareCTA.png';
import sv3 from '../assets/CTA/SilvermaxCTA.png';
import sv4 from '../assets/CTA/SilvermaxCTA2.png';

// Simply drop your 4 banner image URLs here. 
// They will automatically loop across all pages.
const bannerImages = [
  sv1,
  sv2,
  sv3,
  sv4
];

export default function CTABanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-change the banner every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[300px] md:h-[550px] bg-[#0A101D] overflow-hidden font-sans group cursor-pointer border-t border-slate-100">
      
      {/* The entire section acts as a clickable link */}
      <Link to="/contact" className="absolute inset-0 w-full h-full block">
        
        {bannerImages.map((img, index) => {
          const isActive = index === currentSlide;

          return (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img 
                src={img} 
                alt={`Promotional Banner ${index + 1}`} 
                // Retained the slow zooming effect for premium aesthetic
                className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-linear ${isActive ? 'scale-105' : 'scale-100'}`}
              />
              
              {/* Subtle dark overlay that lightens when hovered, signaling it's clickable */}
              <div className="absolute inset-0 bg-black/5  transition-colors duration-500"></div>
            </div>
          );
        })}

      </Link>
    </section>
  );
}