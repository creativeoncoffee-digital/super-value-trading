import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.about-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full  min-h-[90vh] flex flex-col justify-end bg-[#07101E] overflow-hidden font-sans pt-32 pb-16">
      
      {/* Background Image & Gradient */}
      <div className="absolute  inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          alt="About Super Value" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101E] via-[#07101E]/90 to-transparent lg:w-[65%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px]  mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="w-full lg:w-[60%] mb-8">
          
          {/* <p className="about-anim text-orange-500  font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            ABOUT US
          </p> */}

          <h1 className="about-anim text-4xl md:text-6xl  font-bold text-white tracking-tight leading-[1.05] mb-6">
            23+ Years of <br />
            <span className="text-orange-500">International Trade</span>
          </h1>

          <p className="about-anim text-gray-300 text-base md:text-md leading-relaxed max-w-xl mb-10">
            Super Value General Trading LLC is a Dubai-based partner for FMCG, perfumery, automobiles, and private-label growth, serving markets across the Middle East, Africa, Europe, Asia, and beyond.
          </p>

          <div className="about-anim">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-8 py-3.5 rounded transition-all shadow-[0_4px_20px_rgba(243,121,10,0.4)]">
              Partner With Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}