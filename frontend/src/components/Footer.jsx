import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../assets/img/logo.png';

// Import your blueprint background image
import footerBg from '../assets/footerBg.jpeg'; 

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.footer-item',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power2.out',
          force3D: true, 
          scrollTrigger: { 
            trigger: footerRef.current, 
            start: 'top 95%', 
            once: true,       
          }
        }
      );

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <footer ref={footerRef} className="relative w-full bg-[#07101E] text-white pt-24 pb-8 overflow-hidden border-t border-white/10 font-sans">
      
      {/* ======================================================= */}
      {/* BACKGROUND IMAGE & CINEMATIC OVERLAY (FIXED VISIBILITY) */}
      {/* ======================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Base dark background */}
        <div className="absolute inset-0 bg-[#050A14]"></div>
        
        {/* 2. The Blueprint Image - Opacity increased to 40% and set to screen blend to make lines glow */}
        <img 
          src={footerBg} 
          alt="Manufacturing Blueprint Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen" 
        />
        
        {/* 3. Very subtle gradient overlay just to keep text readable (reduced from 95% opacity to 40%) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E3A]/40 via-[#07101E]/40 to-[#050A14]/80"></div>
      </div>

      {/* ======================================================= */}
      {/* FOOTER CONTENT (Wrapped in relative z-10 to sit above BG) */}
      {/* ======================================================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        
        {/* --- TOP SECTION: DIRECT CONTACT & MINIMALIST FORM --- */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
          
          {/* Left: Trading Desk Info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="footer-item flex items-center gap-4 mb-6">
              <span className="w-4 h-[2px] bg-orange-500"></span>
              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                Global Trade Desk
              </p>
            </div>
            
            <h2 className="footer-item text-3xl md:text-4xl font-bold leading-tight mb-6 text-white tracking-tight drop-shadow-md">
              Initiate your next trade opportunity.
            </h2>
            
            <p className="footer-item text-slate-300 text-base leading-relaxed mb-10 max-w-md">
              Connect directly with our sourcing and logistics experts. We facilitate seamless cross-border transactions across 80+ countries.
            </p>

            <div className="footer-item flex flex-col gap-6 border-l-2 border-orange-500/30 pl-6">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Direct Line</p>
                <a href="tel:+971529607401" className="text-xl font-medium text-white hover:text-orange-500 transition-colors">+971 52 960 7401</a>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Trading Enquiries</p>
                <a href="mailto:gosupervalue@outlook.com" className="text-lg font-medium text-white hover:text-orange-500 transition-colors">gosupervalue@outlook.com</a>
              </div>
            </div>
          </div>

          {/* Right: Trader-Style Minimalist Form */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-8 bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="footer-item relative group">
                  <input 
                    type="text" 
                    required 
                    placeholder="First Name *"
                    className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm"
                  />
                </div>
                <div className="footer-item relative group">
                  <input 
                    type="text" 
                    required 
                    placeholder="Last Name *"
                    className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="footer-item relative group">
                  <input 
                    type="email" 
                    required 
                    placeholder="Corporate Email *"
                    className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm"
                  />
                </div>
                <div className="footer-item relative group">
                  <input 
                    type="tel" 
                    required 
                    placeholder="Phone Number *"
                    className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm"
                  />
                </div>
              </div>

              <div className="footer-item relative group">
                <textarea 
                  rows="3" 
                  placeholder="Tell us about your sourcing or distribution needs..."
                  className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-slate-400 text-sm resize-none"
                ></textarea>
              </div>

              <div className="footer-item pt-4">
                <button 
                  type="submit" 
                  className="text-white bg-orange-500 hover:bg-[#d9660a] shadow-[0_4px_20px_rgba(243,121,10,0.3)] hover:shadow-[0_6px_25px_rgba(243,121,10,0.5)] font-bold py-4 px-10 rounded-xl text-sm tracking-wide transition-all duration-300 w-full md:w-auto hover:-translate-y-1"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* --- BOTTOM SECTION: 4-COLUMN MEGA FOOTER --- */}
        <div className="border-t border-white/10 pt-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Col 1: Brand */}
            <div className="footer-item flex flex-col gap-6">
              <Link to="/" className="flex items-center -gap-1 group">
                <div className="leading-tight">
                  <img src={Logo} alt="Super Value General Trading LLC Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div>
                   <span className="text-white text-xl md:text-2xl ml-2 font-semibold tracking-tight">Super Value</span>
                   <p className="text-orange-500 text-xs md:text-sm ml-2 font-bold tracking-tight">General Trading LLC</p>    
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed pr-4">
                Specializing in the sourcing, distribution, and cross-border trade of high-demand commodities and consumer goods across 5 continents.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="footer-item flex flex-col gap-4 lg:pl-8">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-2">Company</h4>
              <Link to="/" className="text-slate-400 text-sm hover:text-orange-500 hover:translate-x-1 transition-all w-fit">Home</Link>
              <Link to="/about" className="text-slate-400 text-sm hover:text-orange-500 hover:translate-x-1 transition-all w-fit">About Us</Link>
            </div>

            {/* Col 3: Sectors */}
            <div className="footer-item flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-2">Sectors</h4>
              <Link to="/personal-care" className="text-slate-400 text-sm hover:text-orange-500 hover:translate-x-1 transition-all w-fit">FMCG & Personal Care</Link>
              <Link to="/perfumery" className="text-slate-400 text-sm hover:text-orange-500 hover:translate-x-1 transition-all w-fit">Perfumery & Fragrances</Link>
              <Link to="/automobiles" className="text-slate-400 text-sm hover:text-orange-500 hover:translate-x-1 transition-all w-fit">Automotive Solutions</Link>
              <Link to="/silvermax" className="text-slate-400 text-sm hover:text-orange-500 hover:translate-x-1 transition-all w-fit">Silvermax Blades</Link>
            </div>

            {/* Col 4: Location */}
            <div className="footer-item flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-2">Office Location</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Office 1707, Damac XL Tower<br />
                Marasi Drive, Business Bay<br />
                Dubai, United Arab Emirates
              </p>
            </div>

          </div>
        </div>

        {/* --- COPYRIGHT & SOCIALS --- */}
        <div className="footer-item flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-slate-500 text-xs font-medium">
            © {new Date().getFullYear()} Super Value General Trading LLC. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy" className="text-slate-500 text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 text-xs hover:text-white transition-colors">Terms & Conditions</Link>
            
            <div className="flex items-center gap-4 md:ml-4">
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors hover:-translate-y-1" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors hover:-translate-y-1" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}