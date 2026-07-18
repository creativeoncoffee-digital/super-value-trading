import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your custom Business components
import GlobalHero from '../components/Global/GlobalHero';
import GlobalOperations from '../components/Global/GlobalOperations';
// import BusinessSectors from '../components/Business/BusinessSectors';

gsap.registerPlugin(ScrollTrigger);

export default function BusinessActivities() {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Smooth scroll reveal for the bottom CTA band
      gsap.fromTo('.cta-reveal',
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power2.out',
          scrollTrigger: { 
            trigger: '.cta-section', 
            start: 'top 85%' 
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="w-full">
      
      {/* 1. The custom Animated Business Hero */}
      <GlobalHero />
      <GlobalOperations />



    
      {/* 3. Bottom Call to Action Band */}
      {/* <section className="cta-section bg-slate-50 py-24 px-8 text-center relative overflow-hidden border-t border-slate-200">
        <div className="max-w-4xl mx-auto relative z-10 cta-reveal flex flex-col items-center">
          
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">
              Partner with us
            </p>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight">
            Have a product you'd like us to source or distribute?
          </h2>
          
          <Link 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded transition-colors inline-block"
          >
            Start a conversation
          </Link>
          
        </div>
      </section> */}

    </main>
  );
}