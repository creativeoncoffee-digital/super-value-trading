import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import logoImg from '../assets/img/logo.png';

export default function Header() {
  const headerRef = useRef(null);
  const location = useLocation();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // 1. Close mobile menu whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // 2. Initial header drop down animation
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );
  }, []);

  // 3. Staggered animation for sidebar links when opened
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo('.mobile-anim-item',
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );
    }
  }, [isMobileMenuOpen]);

  // 4. Structural fixes for "Desktop Site" mode and scroll locking
  useEffect(() => {
    // Prevent horizontal layout bleeding globally
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';

    // Lock vertical scrolling when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }

    // Auto-close the mobile menu if screen resizes to desktop dimensions (>= 768px)
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => { 
      document.body.style.overflowY = 'unset'; 
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      ref={headerRef} 
      className="bg-white text-[#0B1E3A] pt-4 pb-2 px-[clamp(1rem,5vw,3rem)] sticky top-0 z-50 transition-all duration-300 shadow-sm"
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-[clamp(1rem,2vw,2rem)]">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 relative z-[60]">
          <img src={logoImg} alt="Super Value Logo" className="h-[clamp(2.5rem,4vw,3.5rem)]" />
        </Link>

        {/* Mobile Hamburger Button - Now hides on 'md' instead of 'lg' */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-[60] p-2 text-[#0B1E3A] focus:outline-none cursor-pointer"
        >
          <div className="w-6 flex flex-col gap-1.5 items-end">
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>

        {/* ---------------------------------------------------- */}
        {/* DESKTOP NAVIGATION (Hidden on Mobile, Shows on Desktop Site) */}
        {/* ---------------------------------------------------- */}
        {/* Now uses 'md:flex' so it properly renders when "Desktop Site" is requested */}
        <nav className="hidden md:flex flex-wrap items-center gap-[clamp(1rem,2vw,2rem)] text-[clamp(0.85rem,1vw,1rem)] font-bold">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
             <Link to="/silvermax" className="hover:text-orange-500 transition-colors">Silvermax</Link>
          
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

     
        {/* Desktop Action Button - Now uses 'md:inline-flex' */}
        <Link 
          to="/contact" 
          className="hidden md:inline-flex brand-button text-white bg-orange-500 "
        >
          Inquiry Now
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 12h15"></path></svg>
        </Link>          
      </div>

      {/* ---------------------------------------------------- */}
      {/* MOBILE SIDEBAR SECTION                               */}
      {/* ---------------------------------------------------- */}
      
      {/* Dark Overlay Backdrop */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-[#0B1E3A]/60 backdrop-blur-sm z-[50] md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      ></div>

      {/* 
        The Sidebar 
        Hides completely via 'md:hidden' when Desktop site is active.
      */}
      <div 
        className={`fixed top-0 h-[100dvh] w-[75%] max-w-[320px] bg-white z-[55] shadow-2xl md:hidden flex flex-col pt-24 px-6 pb-8 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'right-0 visible' : '-right-[100%] invisible'}`}
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
              className="flex justify-between items-center text-lg font-bold text-[#0B1E3A] hover:text-orange-500 transition-colors outline-none cursor-pointer"
            >
              Product & Services
              <svg className={`w-5 h-5 transform transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-orange-500' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[300px] mt-4 opacity-100 pl-4' : 'max-h-0 opacity-0 pl-4'}`}>
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
        
           {/* Mobile Action Button */}
                <div className="mobile-anim-item mt-auto pt-6">
                  <Link 
                    to="/contact" 
                    className="brand-button text-white bg-orange-500 w-full"
                  >
                    Inquiry Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 12h15"></path></svg>
                  </Link>
                </div>

      </div>
    </header>
  );
}