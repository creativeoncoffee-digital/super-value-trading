import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import logoImg from '../assets/img/logo.png';

export default function Header() {
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // GSAP smooth slide-down entrance
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );
  }, []);

  return (
    <header 
      ref={headerRef} 
      className="bg-white text-[#0B1E3A] pt-4 pb-2 px-[clamp(1rem,5vw,3rem)] sticky top-0 z-50    transition-all duration-300"
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-[clamp(1rem,3vw,2rem)]">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Super Value Logo" className="h-[clamp(2.5rem,4vw,3.5rem)]" />
        </Link>

        {/* Fluid Navigation Links (No Grid, No Breakpoints) */}
        <nav className="flex flex-wrap items-center gap-8 text-[clamp(0.875rem,1.5vw,1rem)] font-bold">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
          
          {/* Animated Dropdown Menu for Products & Services */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-orange-500 transition-colors py-2 cursor-pointer outline-none">
              Product & Services 
              <svg 
                className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-500" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* The Dropdown Card */}
            <div className="absolute top-full mt-2  left-0 min-w-[270px] bg-white shadow-2xl rounded-2xl flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-slate-50 overflow-hidden z-50">
              <Link to="/business" className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-slate-50 flex items-center gap-4">
                FMCG and Personal Care
              </Link>
              <Link to="/business" className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-slate-50 flex items-center gap-4">
                 Perfumery
              </Link>
              <Link to="/business" className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-slate-50 flex items-center gap-4">
                 Automobiles
              </Link>
              <Link to="/business" className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors flex items-center gap-4">
                 Others
              </Link>
            </div>
          </div>

          <Link to="/blogs" className="hover:text-orange-500 transition-colors">Blogs</Link>
          <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link>
        </nav>

        {/* Action Button */}
        <Link 
          to="/contact" 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-[clamp(0.6rem,1.5vw,0.8rem)] px-[clamp(1.2rem,3vw,1.8rem)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
        >
          Inquiry Now
        </Link>

      </div>
    </header>
  );
}