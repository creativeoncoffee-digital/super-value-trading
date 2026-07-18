import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import the office image
import xlTowerImg from '../../assets/img/xl-tower.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const containerRef = useRef(null);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Reveal Text and Image
      gsap.fromTo('.split-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 85%' }
        }
      );

      // 2. Staggered reveal for form input fields
      gsap.fromTo('.form-field',
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2,
          scrollTrigger: { trigger: '.contact-form', start: 'top 85%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("Thanks — we'll be in touch within one business day.");
    e.target.reset();
    
    // Clear message after 5 seconds
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <section ref={containerRef} className="bg-white py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">      {/* --- LEFT SIDE: IMAGE --- */}
        <div className="w-full lg:w-1/2 split-reveal relative">
          <div className="absolute -inset-4 bg-slate-50 rounded-3xl transform rotate-2 transition-transform duration-500 hover:rotate-0 -z-10"></div>
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-1 mt-30 border border-slate-100">
            <img 
              src={xlTowerImg} 
              alt="Damac XL Tower, Business Bay Dubai" 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        
        {/* --- RIGHT SIDE: TEXT & FORM --- */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          <div className="split-reveal mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                Send an enquiry
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We reply within one business day.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              Tell us what you're sourcing, distributing, or shipping — we'll route it to the right person on our team[cite: 3].
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-6 w-full">
            
            {/* Top Row: Name & Company */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="form-field flex-1 flex flex-col gap-2">
                <label htmlFor="name" className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  placeholder="Your name" 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
              
              <div className="form-field flex-1 flex flex-col gap-2">
                <label htmlFor="company" className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">
                  Company
                </label>
                <input 
                  type="text" 
                  id="company" 
                  placeholder="Company name" 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
            </div>

            {/* Middle Row: Email & Sector */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="form-field flex-1 flex flex-col gap-2">
                <label htmlFor="email" className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  placeholder="you@company.com" 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
              
              <div className="form-field flex-1 flex flex-col gap-2">
                <label htmlFor="sector" className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">
                  Sector of Interest
                </label>
                <div className="relative">
                  <select 
                    id="sector" 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 appearance-none outline-none transition-all duration-300 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 cursor-pointer"
                  >
                    <option>Personal Care & Grooming</option>
                    <option>Perfumery & Fragrances</option>
                    <option>Consumer Goods & Specialty</option>
                    <option>Automobiles</option>
                    <option>Other</option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Message */}
            <div className="form-field flex flex-col gap-2">
              <label htmlFor="message" className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">
                Your Message
              </label>
              <textarea 
                id="message" 
                required
                rows="5"
                placeholder="Tell us about your enquiry." 
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 resize-none"
              ></textarea>
            </div>

            {/* Submit Button & Status */}
            <div className="form-field flex items-center gap-6 mt-2">
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-3 px-8 rounded-lg shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Send message
              </button>
              {formStatus && (
                <span className="text-sm font-medium text-slate-600 animate-pulse">
                  {formStatus}
                </span>
              )}
            </div>

          </form>
        </div>

  
      </div>
    </section>
  );
}