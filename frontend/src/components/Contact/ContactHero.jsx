import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const pageRef = useRef(null);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Entrance Animation
      gsap.fromTo('.hero-text',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power4.out' }
      );

      // 2. Trust Icons Stagger
      gsap.fromTo('.trust-card',
        { opacity: 0, scale: 0.8, y: 20 },
        { 
          opacity: 1, scale: 1, y: 0, 
          duration: 0.6, stagger: 0.1, 
          ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.trust-section', start: 'top 85%' }
        }
      );

      // 3. Form and Info Panel Slide-ins
      gsap.fromTo('.info-panel',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.contact-section', start: 'top 75%' } }
      );

      gsap.fromTo('.form-panel',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.contact-section', start: 'top 75%' } }
      );

    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Inquiry submitted successfully. A setup expert will contact you shortly.');
    e.target.reset();
    setTimeout(() => setFormStatus(''), 5000);
  };

  const trustFeatures = [
    { 
      title: "Global Trust", 
      desc: "Trusted by enterprises across 90+ countries.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    { 
      title: "Certified Setup", 
      desc: "Fully compliant with UAE mainland & freezone laws.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    },
    { 
      title: "24/7 Advisory", 
      desc: "Round-the-clock support for international time zones.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    { 
      title: "Dedicated Help", 
      desc: "End-to-end guidance from licensing to logistics.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    }
  ];

  return (
    <main ref={pageRef} className="w-full bg-[#f8fafc] min-h-screen font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-[#0B1E3A] pt-25 pb-24 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979434-d4ce210b2302?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A] to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="hero-text flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
              Global Connectivity
            </p>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          <h1 className="hero-text text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Establish Your Business <br />
            <span className="text-orange-500">in Dubai's Strategic Hub.</span>
          </h1>
          <p className="hero-text text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you are expanding your trading routes or setting up a new corporate entity, our experts provide end-to-end solutions for international investors.
          </p>
        </div>
      </section>

      {/* --- TRUST BANNER --- */}
      <section className="trust-section max-w-7xl mx-auto px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustFeatures.map((feature, idx) => (
            <div key={idx} className="trust-card bg-white rounded-xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-[#0B1E3A] font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MAIN CONTACT SECTION --- */}
      <section className="contact-section max-w-7xl mx-auto px-8 ">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-8 bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
          
       

        </div>
      </section>

    </main>
  );
}