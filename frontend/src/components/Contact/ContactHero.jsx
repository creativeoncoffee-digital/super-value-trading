import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
    <section ref={sectionRef} className="relative w-full min-h-[60vh] flex flex-col justify-end bg-[#07101E] overflow-hidden font-sans pt-32 pb-16">
      
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2000&auto=format&fit=crop" 
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
          Let's Build Your Business Together <br className="md:hidden" />
          {/* <span className="text-orange-500"></span> */}
        </h1>

        <p className="contact-anim text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
          Whether you are looking for global distribution, wholesale pricing, or end-to-end private label manufacturing, our dedicated trade desk is ready to assist you.
        </p>

      </div>
    </section>
  );
}