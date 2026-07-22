import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurClients() {
  const sectionRef = useRef(null);

  // Generate 8 placeholder boxes (you can replace these with <img> tags later)
  const placeholders = Array.from({ length: 8 });

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the title
      gsap.fromTo('.clients-title',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      );

      // Stagger animate the client placeholder boxes
      gsap.fromTo('.client-box',
        { opacity: 0, scale: 0.8, y: 20 },
        { 
          opacity: 1, scale: 1, y: 0, 
          duration: 0.5, stagger: 0.1, 
          ease: 'back.out(1.5)', 
          scrollTrigger: { trigger: '.clients-grid', start: 'top 85%' } 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-16 px-8 overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <h2 className="clients-title text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
          Our Clients
        </h2>

        {/* Clients Flex Container */}
        <div className="clients-grid flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full">
          {placeholders.map((_, index) => (
            <div 
              key={index} 
              className="client-box w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-md transition-colors hover:bg-gray-300 flex-shrink-0"
            >
              {/* Future logo image goes here */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}