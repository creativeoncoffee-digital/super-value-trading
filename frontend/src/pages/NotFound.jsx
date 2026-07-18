import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function NotFound() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered entrance for all content
      gsap.fromTo('.not-found-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      // Subtle continuous floating effect for the massive 404 text
      gsap.to('.float-text', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={containerRef} 
      className="w-full flex-grow flex flex-col items-center justify-center bg-[#0f172a] relative overflow-hidden py-32 px-8"
    >
      
      {/* Decorative Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Decorative Grid Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="not-found-anim flex items-center gap-4 mb-2">
          <span className="w-6 h-[2px] bg-orange-500"></span>
          <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">
            Error 404
          </p>
          <span className="w-6 h-[2px] bg-orange-500"></span>
        </div>

        {/* Massive 404 Text */}
        <h1 className="not-found-anim float-text text-[8rem] md:text-[8rem] font-bold text-white leading-none tracking-tighter drop-shadow-2xl mb-6">
          4<span className="text-orange-500">0</span>4
        </h1>

        {/* Heading */}
        <h2 className="not-found-anim text-3xl md:text-5xl font-bold text-white mb-6">
          Lost in transit.
        </h2>

        {/* Description */}
        <p className="not-found-anim text-slate-400 text-lg leading-relaxed mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
        </p>

        {/* Return Button */}
        <div className="not-found-anim">
          <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded transition-colors inline-block shadow-lg shadow-orange-500/20"
          >
            Return to Homepage
          </Link>
        </div>
        
      </div>
    </main>
  );
}