import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Text slides in from the left
      gsap.fromTo('.why-text-anim',
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out', 
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } 
        }
      );

      // Image placeholder slides in from the right
      gsap.fromTo('.why-img-anim',
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: 'power3.out', 
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // Background color set to project theme. If you want the exact bright blue from the image, change #0B1E3A to #165296
    <section ref={sectionRef} className="w-full bg-[#084ea3] py-[clamp(4rem,10vw,8rem)] px-[clamp(1.5rem,5vw,4rem)] overflow-hidden">
      
      {/* Fluid Flex Container (No Grid, No Breakpoints) */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-start justify-between gap-[clamp(3rem,6vw,5rem)]">
        
        {/* Left Side: Text Content (Pinned to Top Left) */}
        <div className="flex flex-col flex-1 min-w-[300px] max-w-[700px]">
          
          <h2 className="why-text-anim text-white font-bold text-3xl md:text-5xl leading-tight mb-1">
            Why Choose Us
          </h2>
          
          <p className="why-text-anim text-white/90 text-sm font-medium mb-5">
            Super Value General Trading LLC
          </p>

          <p className="why-text-anim text-white/90 text-lg leading-relaxed max-w-[600px]">
            BLADES & Personal Care: Authorized Distributor of DORCO (South
            Korea), SILVERMAX and personal care products, including razors and
            premium grooming systems for regional markets.
          </p>
          
        </div>

        {/* Right Side: Image Container */}
        <div className="why-img-anim flex-1 min-w-[300px] flex justify-center md:justify-end items-center">
          
          {/* 
            This is the placeholder for your background-removed SV image. 
            When you are ready, replace the <div> content with your <img /> tag.
          */}
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center rounded-3xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-sm">
            <span className="text-white/50 font-medium tracking-widest uppercase text-sm text-center px-4">
              Add Background-Removed <br/> SV Image Here
            </span>
            
            {/* Example of how you will add your image later: */}
            {/* <img src="/assets/img/your-sv-image.png" alt="SV Product" className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl" /> */}
          </div>

        </div>

      </div>
    </section>
  );
}