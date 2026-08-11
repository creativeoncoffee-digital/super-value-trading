import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

// Premium fallback images for the 6 steps
const stepImages = [
  "https://images.unsplash.com/photo-1616949755610-8c9bac08f9f8?q=80&w=800", // Idea/Notes
  "https://images.unsplash.com/photo-1595425970377-c9703d740873?q=80&w=800", // Direction/Mixing
  "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800", // Bottle/Glass
  "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800", // Brand Identity
  "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800", // Packaging
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800"  // Finished Product
];

export default function PerfumeryPrivateLabelProcess({ category = "perfumery" }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  
  // Pull the process data (01 Idea to 06 Finished Product)
  const data = productData[category]?.privateLabelProcess;

  useEffect(() => {
    if (!data) return;

    let ctx = gsap.context(() => {
      
      // 1. Entrance Animation
      gsap.fromTo('.process-card', 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: 'power3.out', 
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } 
        }
      );

      // 2. Continuous Infinite Loop (Marquee)
      const loopAnim = gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 40, // Nice, slow, premium speed
        repeat: -1,
      });

      // 3. Hover to Pause
      trackRef.current.addEventListener("mouseenter", () => loopAnim.pause());
      trackRef.current.addEventListener("mouseleave", () => loopAnim.play());

      // 4. Header Text Reveal
      gsap.fromTo('.process-header', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );

    }, containerRef);
    
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  // Duplicate the array so the GSAP horizontal loop is completely seamless
  const doubledData = [...data, ...data];

  return (
    <section ref={containerRef} className="relative w-full bg-[#040914] py-24 md:py-32 overflow-hidden font-sans border-t border-white/5">
      
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] mb-16 md:mb-20 relative z-10">
        {/* HEADER */}
        <div className="process-header flex flex-col items-center text-center">
          <h4 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            The Creation Journey
          </h4>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
            FROM IDEA TO YOUR BRAND
          </h2>
        </div>
      </div>

      {/* --- CONTINUOUS RUNNING LOOP (MARQUEE) --- */}
      <div className="relative w-full flex items-center overflow-visible z-20">
        
        {/* Edge shadows to fade the cards elegantly into the background */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#040914] to-transparent z-30 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#040914] to-transparent z-30 pointer-events-none"></div>

        {/* The Moving Track */}
        <div ref={trackRef} className="flex gap-4 md:gap-6 w-max pl-4 md:pl-6 cursor-grab active:cursor-grabbing pb-8">
          
          {doubledData.map((step, i) => {
            // Map the index to the 6 images (modulo ensures it works for the duplicated array)
            const bgImage = stepImages[i % 6];

            return (
              <div 
                key={i} 
                className="process-card relative w-[300px] md:w-[400px] h-[400px] md:h-[480px] flex-shrink-0 rounded-[1.5rem] bg-[#0A101D] overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)]"
              >
                {/* Background Image */}
                <img 
                  src={bgImage} 
                  alt={step.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                />

                {/* Dark Gradient Overlay: Keeps text readable even when image is fully visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/80 to-[#040914]/40 group-hover:via-[#040914]/40 group-hover:to-transparent transition-all duration-700"></div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10 pointer-events-none">
                  
                  {/* Top: Step Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl md:text-5xl font-serif text-orange-500 drop-shadow-md">
                      {step.num}
                    </span>
                    <div className="w-8 h-[1px] bg-orange-500/50 group-hover:bg-orange-500 group-hover:w-12 transition-all duration-500"></div>
                  </div>

                  {/* Bottom: Text Content */}
                  <div className="flex flex-col transform transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-widest uppercase drop-shadow-lg">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed drop-shadow-md border-l-2 border-orange-500 pl-4">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}