import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.footer-element', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, 
          scrollTrigger: { trigger: footerRef.current, start: 'top 85%' }
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0f172a] text-white pt-20 pb-8 px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
     

        {/* Big CTA inside Footer matching screenshot */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 footer-element">
          <h2 className="text-4xl font-bold max-w-md leading-tight mb-6 md:mb-0">
            Looking for a reliable trading partner in the Gulf?
          </h2>
          <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded transition-colors">
            Get in touch
          </Link>
        </div>

        {/* Traditional Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-t border-slate-800 pt-12 footer-element">
          <div>
            <img src="/assets/img/logo.png" alt="Super Value Logo" className="h-8 mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              A Dubai-based multi-sector trading enterprise sourcing and distributing personal care, perfumery, consumer goods and automotive products worldwide.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h5 className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">Navigate</h5>
            <Link to="/about" className="text-slate-300 hover:text-white text-sm">About</Link>
            <Link to="/business" className="text-slate-300 hover:text-white text-sm">Business Activities</Link>
            <Link to="/global-presence" className="text-slate-300 hover:text-white text-sm">Global Presence</Link>
            <Link to="/leadership" className="text-slate-300 hover:text-white text-sm">Leadership</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">Contact</h5>
            <a href="mailto:gosupervalue@outlook.com" className="text-slate-300 hover:text-white text-sm">gosupervalue@outlook.com</a>
            <a href="tel:+971529607401" className="text-slate-300 hover:text-white text-sm">+971 52 960 7401</a>
            <p className="text-slate-400 text-sm leading-relaxed">Office 1707, Damac XL Tower<br/>Marasi Drive, Business Bay, Dubai</p>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">Registration</h5>
            <p className="text-slate-300 text-sm">Commercial License No. 822355</p>
            <p className="text-slate-300 text-sm">Dubai Chamber Membership No. 313811</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 border-t border-slate-800 pt-6 footer-element">
          <span>© 2026 Super Value General Trading LLC</span>
          <span>Business Bay, Dubai, UAE</span>
        </div>
      </div>
    </footer>
  );
}