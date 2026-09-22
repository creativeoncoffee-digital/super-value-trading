import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Banner from '../../assets/ContactBanner.png';
export default function ContactHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.contact-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[55vh] flex flex-col justify-end bg-[#07101E] overflow-hidden font-sans pt-20 pb-16">
      
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src={Banner} 
          alt="Contact Us" 
          className="w-full h-full object-cover opacity-90 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/70 to-[#07101E]/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] text-center flex flex-col items-center">
        
        <p className="contact-anim text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
          GET IN TOUCH
        </p>

        <h1 className="contact-anim text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6">
          Contact Us <br className="md:hidden" />
          {/* <span className="text-orange-500"></span> */}
        </h1>

        <p className="contact-anim text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
          We are here to assist you with your trade inquiries, partnerships, and any questions you may have. Reach out to us and our team will respond promptly.
        </p>

      </div>
    </section>
  );
}