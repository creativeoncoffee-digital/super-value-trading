import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import logoImg from '../assets/img/logo.png';

export default function Header() {
  const headerRef = useRef(null);
  const location = useLocation();
  
  // State for mobile sidebar and mobile dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Initial header drop down animation
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );
  }, []);

  // Staggered animation for sidebar links when opened
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo('.mobile-anim-item',
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );
    }
  }, [isMobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <header 
      ref={headerRef} 
      className="bg-white text-[#0B1E3A] pt-4 pb-2 px-[clamp(1rem,5vw,3rem)] sticky top-0 z-50 transition-all duration-300 shadow-sm"
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-[clamp(1rem,3vw,2rem)]">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 relative z-[60]">
          <img src={logoImg} alt="Super Value Logo" className="h-[clamp(2.5rem,4vw,3.5rem)]" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-[60] p-2 text-[#0B1E3A] focus:outline-none"
        >
          <div className="w-6 flex flex-col gap-1.5 items-end">
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>

        {/* ---------------------------------------------------- */}
        {/* DESKTOP NAVIGATION (Hidden on Mobile/Tablets)        */}
        {/* ---------------------------------------------------- */}
        <nav className="hidden lg:flex flex-wrap items-center gap-8 text-[clamp(0.875rem,1.5vw,1rem)] font-bold">
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
            <div className="absolute top-full mt-2 left-0 min-w-[270px] bg-white shadow-2xl rounded-2xl flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-slate-50 overflow-hidden z-50">
              <Link to="/personal-care" className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-slate-50 flex items-center gap-4">
                FMCG and Personal Care
              </Link>
              <Link to="/perfumery" className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-slate-50 flex items-center gap-4">
                 Perfumery
              </Link>
              <Link to="/automobiles" className="px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-slate-50 flex items-center gap-4">
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

        {/* Desktop Action Button */}
        <Link 
          to="/contact" 
          className="hidden lg:inline-flex bg-orange-500 hover:bg-orange-600 text-white font-bold py-[clamp(0.6rem,1.5vw,0.8rem)] px-[clamp(1.2rem,3vw,1.8rem)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
        >
          Inquiry Now
        </Link>
      </div>

      {/* ---------------------------------------------------- */}
      {/* MOBILE SIDEBAR SECTION                               */}
      {/* ---------------------------------------------------- */}
      
      {/* Dark Overlay Backdrop */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-[#0B1E3A]/60 backdrop-blur-sm z-[50] lg:hidden transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      ></div>

      {/* The 60% Width Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[60%] min-w-[260px] bg-white z-[55] shadow-2xl lg:hidden flex flex-col pt-24 px-6 pb-8 transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-6 overflow-y-auto overflow-x-hidden h-full no-scrollbar">
          
          <Link to="/" className="mobile-anim-item text-lg font-bold text-[#0B1E3A] hover:text-orange-500 transition-colors border-b border-slate-100 pb-4">
            Home
          </Link>
          <Link to="/about" className="mobile-anim-item text-lg font-bold text-[#0B1E3A] hover:text-orange-500 transition-colors border-b border-slate-100 pb-4">
            About Us
          </Link>
          
          {/* Mobile Accordion Dropdown */}
          <div className="mobile-anim-item flex flex-col border-b border-slate-100 pb-4">
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex justify-between items-center text-lg font-bold text-[#0B1E3A] hover:text-orange-500 transition-colors outline-none"
            >
              Product & Services
              <svg className={`w-5 h-5 transform transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-orange-500' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className={`flex flex-col gap-4 pl-4 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link to="/personal-care" className="text-sm font-semibold text-slate-500 hover:text-orange-500 transition-colors">FMCG and Personal Care</Link>
              <Link to="/perfumery" className="text-sm font-semibold text-slate-500 hover:text-orange-500 transition-colors">Perfumery</Link>
              <Link to="/automobiles" className="text-sm font-semibold text-slate-500 hover:text-orange-500 transition-colors">Automobiles</Link>
              <Link to="/business" className="text-sm font-semibold text-slate-500 hover:text-orange-500 transition-colors">Others</Link>
            </div>
          </div>

          <Link to="/blogs" className="mobile-anim-item text-lg font-bold text-[#0B1E3A] hover:text-orange-500 transition-colors border-b border-slate-100 pb-4">
            Blogs
          </Link>
          <Link to="/contact" className="mobile-anim-item text-lg font-bold text-[#0B1E3A] hover:text-orange-500 transition-colors border-b border-slate-100 pb-4">
            Contact Us
          </Link>

        </div>
        
        {/* Mobile Action Button pushed to the bottom */}
        <div className="mobile-anim-item mt-auto pt-6">
          <Link 
            to="/contact" 
            className="flex justify-center items-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-colors"
          >
            Inquiry Now
          </Link>
        </div>

      </div>
    </header>
  );
}