import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import logoImg from '../assets/img/logo.png';

export default function Header() {
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Smooth fade-down entrance for the header
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Business Activities', path: '/business' },
    { name: 'Global Presence', path: '/global-presence' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header ref={headerRef} className="bg-[#0B1E3A] text-white py-4 px-8 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
        <img src={logoImg} alt="Super Value Logo" className="h-10" />
          <div className="leading-tight">
            <span className="block font-bold text-lg tracking-wide">Super Value</span>
            <span className="text-[10px] text-orange-500 uppercase tracking-widest font-semibold">General Trading LLC</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`pb-1 transition-colors hover:text-orange-400 ${
                  isActive ? 'text-white border-b-2 border-orange-500' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <Link 
          to="/contact" 
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 px-6 rounded transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}   