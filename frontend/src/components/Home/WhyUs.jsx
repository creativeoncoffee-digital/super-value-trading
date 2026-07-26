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
    <section ref={sectionRef} className="w-full bg-[#084ea3] py-[clamp(4rem,10vw,8rem)] px-[clamp(1.5rem,5vw,4rem)] overflow-hidden">
      
      {/* Expanded Container for a bigger image */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-24">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col w-full lg:w-1/2">
          
          <h2 className="why-text-anim text-white font-bold text-3xl md:text-5xl leading-tight mb-12">
            Why Choose Super Value General Trading LLC
          </h2>

          <ul className="why-text-anim text-white/90 text-md leading-relaxed space-y-6">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl mt-1">•</span>
              <p><strong>Strategic Global Location</strong> – Headquartered in Dubai, a world-class logistics and trade hub, enabling seamless international sourcing and distribution.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl mt-1">•</span>
              <p><strong>Diverse Trading Expertise</strong> – Serving multiple industries with a broad portfolio of high-demand commodities and consumer goods.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl mt-1">•</span>
              <p><strong>Reliable Global Supply Chain</strong> – Strong sourcing network and efficient logistics ensure timely deliveries and consistent product quality.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl mt-1">•</span>
              <p><strong>Customer-Centric & Trusted Partner</strong> – Committed to transparency, competitive pricing, and building long-term business relationships through dependable service.</p>
            </li>
          </ul>
          
        </div>

        {/* Right Side: Image Container (Made significantly larger) */}
        <div className="why-img-anim w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          
          <div className="relative w-full max-w-[600px] lg:max-w-[700px] aspect-square flex items-center justify-center rounded-3xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden">
            <img 
              src="/src/assets/Home/HomeWhyUsPic.jpeg" 
              alt="Super Value Core Strengths" 
              className="absolute inset-0 w-full h-full object-cover drop-shadow-2xl transition-transform duration-700 hover:scale-105" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}