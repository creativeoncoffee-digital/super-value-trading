import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// IMPORT YOUR BACKGROUND-REMOVED BLADE IMAGE HERE
import bladeImg from '../../assets/Products/Blade.png';

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5, 
        }
      });

      // INITIAL STATE 
      gsap.set('.text-1', { opacity: 0, x: -50 });
      gsap.set('.text-2', { opacity: 0, x: 50 });
      gsap.set('.text-3', { opacity: 0, y: 50 });
      // Set initial 3D perspective for the blade
      gsap.set('.blade-img', { transformPerspective: 1000 });

      // PHASE 1: Scroll starts -> Blade shrinks, adds 3D tilt, moves right. Text 1 comes in.
      tl.to('.blade-img', { scale: 0.7, x: '25vw', y: '5vh', rotation: 15, rotationY: 25, duration: 1 }, 0)
        .to('.glow-effect', { x: '25vw', duration: 1 }, 0)
        .to('.text-1', { opacity: 1, x: 0, duration: 1 }, 0);

      // PHASE 2: Keep scrolling -> Text 1 leaves, Blade swoops left with reverse 3D tilt. Text 2 comes in.
      tl.to('.text-1', { opacity: 0, x: -50, duration: 1 }, 1.5)
        .to('.blade-img', { scale: 0.85, x: '-25vw', y: '-5vh', rotation: -10, rotationY: -25, duration: 1.5 }, 1.5)
        .to('.glow-effect', { x: '-25vw', duration: 1.5 }, 1.5)
        .to('.text-2', { opacity: 1, x: 0, duration: 1 }, 2);

      // PHASE 3: Scroll nearing end -> Text 2 leaves, Blade centers, levels out, and scales up. Text 3 appears.
      tl.to('.text-2', { opacity: 0, x: 50, duration: 1 }, 3.5)
        .to('.blade-img', { scale: 1.1, x: '0vw', y: '-10vh', rotation: 0, rotationY: 0, duration: 1.5 }, 3.5)
        .to('.glow-effect', { x: '0vw', scale: 1.5, duration: 1.5 }, 3.5)
        .to('.text-3', { opacity: 1, y: 0, duration: 1 }, 4);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-white font-sans">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Decorative Ambient Glow */}
        <div className="glow-effect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* --- THE Z-INDEX BLADE IMAGE --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full max-w-[800px] flex justify-center">
          <img 
            src={bladeImg}
            alt="Premium Blade" 
            className="blade-img w-[50%] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* --- TEXT PANEL 1 (Exact Layout Requested) --- */}
        <div className="text-1 absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 w-[90%] md:w-1/2 lg:w-[40%] flex flex-col items-start justify-center z-40 pointer-events-auto">
          <div className="about-text flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight">
              Precision Engineering
            </h2>
          </div>
          <p className="about-text text-slate-600 text-lg md:text-xl leading-relaxed ml-12 mb-10">
            Crafted from high-grade stainless steel, ensuring<br className="hidden xl:block" />
            <span className="text-orange-500 font-bold">maximum durability and performance</span><br className="hidden xl:block" />
            for the premium global grooming market.<br />
            Designed to deliver a flawlessly smooth<br className="hidden xl:block" />
            experience, our authorized products meet<br className="hidden xl:block" />
            the highest standards of international trade<br className="hidden xl:block" />
            and consumer goods distribution.
          </p>
          <div className="about-text">
            <Link 
              to="/contact" 
              className="inline-flex items-center ml-12 gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:-translate-y-1"
            >
              Inquiry Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>

        {/* --- TEXT PANEL 2 (Exact Layout Requested) --- */}
        <div className="text-2 absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-[90%] md:w-1/2 lg:w-[40%] flex flex-col items-start justify-center z-40 pointer-events-auto">
          <div className="about-text flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight">
              Advanced Coating
            </h2>
          </div>
          <p className="about-text text-slate-600 text-lg md:text-xl leading-relaxed ml-12 mb-10">
            Our authorized personal care products utilize <br className="hidden xl:block" />
            <span className="text-orange-500 font-bold">multi-layered platinum coating technology</span><br className="hidden xl:block" />
            to dramatically extend product lifespan.<br />
            This specialized cross-border trade<br className="hidden xl:block" />
            commodity maintains absolute edge integrity,<br className="hidden xl:block" />
            servicing highly demanding consumers<br className="hidden xl:block" />
            across 90 countries on five continents.
          </p>
          <div className="about-text">
            <Link 
              to="/contact" 
              className="inline-flex items-center ml-12 gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:-translate-y-1"
            >
              Inquiry Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>

        {/* --- TEXT PANEL 3 (Bottom Center) --- */}
        <div className="text-3 absolute bottom-[10%] left-1/2 -translate-x-1/2 max-w-xl z-40 pointer-events-none text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1E3A] leading-tight mb-4 tracking-tight">
            Distributed globally by <span className="text-orange-500">Super Value</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            Seamlessly supplying regional markets with top-tier grooming systems.
          </p>
        </div>

      </div>
    </section>
  );
}