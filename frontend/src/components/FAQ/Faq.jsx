import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faqData } from './FaqData';

gsap.registerPlugin(ScrollTrigger);

export default function Faq({ page = 'home' }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  // Fetch the correct FAQs based on the page prop, default to empty array if not found
  const faqs = faqData[page] || [];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.faq-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      // Staggered FAQ Items Reveal
      gsap.fromTo('.faq-item',
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power2.out', 
          scrollTrigger: { trigger: '.faq-list', start: 'top 85%' } 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // If no FAQs exist for this page, don't render the section
  if (faqs.length === 0) return null;

  return (
    <section ref={sectionRef} className="w-full bg-[#f8fafc] py-10 px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="faq-header text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
              Knowledge Base
            </p>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0B1E3A]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index} 
                className={`faq-item bg-white border ${isOpen ? 'border-orange-500 shadow-md shadow-orange-500/10' : 'border-slate-200 shadow-sm'} rounded-xl overflow-hidden transition-all duration-300`}
              >
                {/* Clickable Question Area */}
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <h3 className={`text-lg md:text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-orange-500' : 'text-[#0B1E3A] group-hover:text-orange-500'}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Animated Plus/Minus Icon */}
                  <div className={`relative w-6 h-6 flex-shrink-0 ml-4 rounded-full flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180 bg-orange-500' : 'bg-slate-100 group-hover:bg-orange-100'}`}>
                    {/* Horizontal Line */}
                    <span className={`absolute w-3 h-[2px] rounded-full transition-colors duration-300 ${isOpen ? 'bg-white' : 'bg-[#0B1E3A] group-hover:bg-orange-500'}`}></span>
                    {/* Vertical Line (rotates flat when open) */}
                    <span className={`absolute w-[2px] h-3 rounded-full transition-all duration-300 ${isOpen ? 'bg-white rotate-90 opacity-0' : 'bg-[#0B1E3A] group-hover:bg-orange-500 opacity-100'}`}></span>
                  </div>
                </button>

                {/* Answer Area (Uses CSS Grid for smooth height transition) */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-slate-600 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}