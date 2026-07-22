import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactHero from '../components/Contact/ContactHero';
import Form from '../components/Contact/Form';
import License from '../components/Contact/License';



gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
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
      <ContactHero />

        {/* 2. The Contact Form Section */}
        <Form />
        {/* 3. The License & Compliance Section */}
        {/* <License />
         */}

    

    </main>
  );
}