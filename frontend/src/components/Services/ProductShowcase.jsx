import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// IMPORT YOUR BACKGROUND-REMOVED BLADE IMAGE HERE
import bladeImg from '../../assets/Products/Blade.png';

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // We create a master timeline linked to the scroll of the entire 300vh container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5, // This makes the animation catch up smoothly to the scrollbar
        }
      });

      // INITIAL STATE (Setup before scroll starts)
      gsap.set('.text-1', { opacity: 0, x: -50 });
      gsap.set('.text-2', { opacity: 0, x: 50 });
      gsap.set('.text-3', { opacity: 0, y: 50 });

      // PHASE 1: Scroll starts -> Blade shrinks and moves right, Text 1 comes in from left
      tl.to('.blade-img', { scale: 0.7, x: '25vw', rotation: 12, duration: 1 }, 0)
        .to('.glow-effect', { x: '25vw', duration: 1 }, 0)
        .to('.text-1', { opacity: 1, x: 0, duration: 1 }, 0);

      // PHASE 2: Keep scrolling -> Text 1 leaves, Blade moves far left, Text 2 comes in from right
      tl.to('.text-1', { opacity: 0, x: -50, duration: 1 }, 1.5)
        .to('.blade-img', { scale: 0.85, x: '-25vw', rotation: -10, duration: 1.5 }, 1.5)
        .to('.glow-effect', { x: '-25vw', duration: 1.5 }, 1.5)
        .to('.text-2', { opacity: 1, x: 0, duration: 1 }, 2);

      // PHASE 3: Scroll nearing end -> Text 2 leaves, Blade centers and scales up massive, Text 3 appears below
      tl.to('.text-2', { opacity: 0, x: 50, duration: 1 }, 3.5)
        .to('.blade-img', { scale: 1.2, x: '0vw', y: '-10vh', rotation: 0, duration: 1.5 }, 3.5)
        .to('.glow-effect', { x: '0vw', scale: 1.5, duration: 1.5 }, 3.5)
        .to('.text-3', { opacity: 1, y: 0, duration: 1 }, 4);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // 1. The Outer Container is extremely tall (300vh) to give you plenty of scrolling room
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[#041428] font-sans">
      
      {/* 2. The Sticky Wrapper stays pinned to the screen while you scroll through the 300vh */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Decorative Ambient Glow that follows the blade */}
        <div className="glow-effect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* --- THE Z-INDEX BLADE IMAGE --- */}
        {/* It starts perfectly centered, and GSAP moves it around based on scroll progress */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full max-w-[800px] flex justify-center">
          {/* Replace this placeholder src with your actual blade image variable */}
          <img 
            src={bladeImg}
            alt="Premium Blade" 
            className="blade-img w-[50%] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* --- TEXT PANEL 1 (Appears on the Left) --- */}
        <div className="text-1 absolute left-[10%] top-1/2 -translate-y-1/2 max-w-sm z-40 pointer-events-none">
          <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Phase 01</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
            Precision <br /> Engineering.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Crafted from high-grade stainless steel, ensuring maximum durability and a flawlessly smooth experience for premium markets.
          </p>
        </div>

        {/* --- TEXT PANEL 2 (Appears on the Right) --- */}
        <div className="text-2 absolute right-[10%] top-1/2 -translate-y-1/2 max-w-sm z-40 pointer-events-none text-right">
          <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Phase 02</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
            Advanced <br /> Coating.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed ml-auto">
            Our authorized personal care products utilize multi-layered platinum coating technology to extend product lifespan and maintain edge integrity.
          </p>
        </div>

        {/* --- TEXT PANEL 3 (Appears Bottom Center) --- */}
        <div className="text-3 absolute bottom-[15%] left-1/2 -translate-x-1/2 max-w-xl z-40 pointer-events-none text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Distributed globally by <span className="text-orange-500">Super Value</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Seamlessly supplying regional markets with top-tier grooming systems.
          </p>
        </div>

      </div>
    </section>
  );
}