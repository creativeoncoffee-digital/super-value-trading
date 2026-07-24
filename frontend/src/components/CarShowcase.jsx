import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

 // Adjust path to your uploaded  image
import carImg from '../assets/Products/car-top.png'; // Adjust path to your uploaded  image


gsap.registerPlugin(ScrollTrigger);

export default function CarShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // Master timeline tied to the scroll position
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Smooth catching up to the scroll wheel
        }
      });

      // --- INITIAL STATE ---
      // Bike starts off-screen at the bottom. Text is hidden.
      gsap.set('.bike-wrapper', { y: '100vh', x: '0vw' });
      gsap.set('.auto-text-panel', { opacity: 0, x: -50 });
      // Add a slight motion blur effect to the bike initially (using scale/rotation)
      gsap.set('.bike-img', { scale: 0.9, filter: 'blur(4px)' });

      // --- PHASE 1: Bike Speeds In & Stops ---
      tl.to('.bike-wrapper', { 
        y: '0vh', 
        ease: 'power3.out', // power3.out creates a "braking/stopping" feel
        duration: 2 
      }, 0)
      .to('.bike-img', {
        scale: 1,
        filter: 'blur(0px)', // Removes blur as it stops
        duration: 1.5,
        ease: 'power2.out'
      }, 0.5);

      // --- PHASE 2: Bike Shifts Right & Text Appears ---
      tl.to('.bike-wrapper', { 
        x: '15vw', // Moves right to make space for text
        ease: 'power2.inOut', 
        duration: 1.5 
      }, 2.5)
      .to('.auto-text-panel', { 
        opacity: 1, 
        x: 0, 
        ease: 'power2.out', 
        duration: 1.5 
      }, 2.5);

      // --- PHASE 3: Hold for Reading ---
      // This empty tween just adds scrolling distance where nothing moves, giving the user time to read.
      tl.to({}, { duration: 1.5 }); 

      // --- PHASE 4: Text Vanishes & Bike Accelerates Off-Screen ---
      tl.to('.auto-text-panel', { 
        opacity: 0, 
        x: -50, 
        duration: 1 
      }, 5.5)
      .to('.bike-wrapper', { 
        y: '-120vh', // Accelerates off the top
        ease: 'power3.in', // power3.in creates a "speeding up" feel
        duration: 2 
      }, 5.5)
      .to('.bike-img', {
        scale: 0.85,
        filter: 'blur(3px)', // Adds blur back as it speeds away
        duration: 1.5,
        ease: 'power2.in'
      }, 6);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // The Outer Container is 300vh to give plenty of scrolling distance for the full sequence
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[#0A101D] font-sans">
      
      {/* Sticky Wrapper keeps the viewport locked while we scroll through the 300vh height */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Sleek Background Glow to make the vehicle pop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        {/* --- ROAD LINES (Optional aesthetic touch) --- */}
        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-20">
          <div className="w-[2px] h-full bg-[linear-gradient(to_bottom,transparent_50%,#fff_50%)] bg-[length:100%_60px]"></div>
        </div>

        {/* --- TEXT PANEL (Left Side) --- */}
        <div className="auto-text-panel absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 w-[90%] md:w-[40%] flex flex-col items-start justify-center z-40 pointer-events-auto">
          
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-blue-500"></span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              High-Performance <br/> Mobility.
            </h2>
          </div>
          
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed ml-12 mb-10">
            Premium two-wheeler and automotive solutions engineered for the modern road. <br className="hidden xl:block" />
            <span className="text-blue-500 font-bold">Uncompromising quality and endurance</span><br className="hidden xl:block" />
            distributed across our global network to keep your business moving forward.
          </p>
          
          <div className="ml-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:-translate-y-1"
            >
              Explore Solutions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>

        {/* --- THE BIKE IMAGE --- */}
        {/* Placed in a wrapper to control the physical movement (x/y), while the img tag controls scaling/blur */}
        <div className="bike-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full max-w-[400px] flex justify-center">
          <img 
            src={carImg}
            alt="Premium Automotive Scooter" 
            className="bike-img w-[80%] md:w-full h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
          />
        </div>

      </div>
    </section>
  );
}