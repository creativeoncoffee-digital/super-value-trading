import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSequence({ category = 'automobiles' }) {
  const containerRef = useRef(null);
  
  // Pull the dynamic array of items
  const data = productData[category]?.featureSequence;

  useEffect(() => {
    if (!data || data.length === 0) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          // Perfectly paces the speed: 1500px of scrolling distance per product
          end: `+=${data.length * 1500}`, 
          scrub: 1.2, // Smooth interpolation
          pin: true,  // Locks the screen in place during the sequence
          anticipatePin: 1
        }
      });

      // INITIAL STATE SETUP: Hide everything except the first item
      data.forEach((_, i) => {
        if (i > 0) {
          gsap.set(`.img-seq-${i}`, { y: '30vh', opacity: 0, scale: 0.85 });
          gsap.set(`.text-seq-${i}`, { y: 40, opacity: 0 });
        }
      });

      // ANIMATION SEQUENCE: Cross-fade items
      data.forEach((_, i) => {
        if (i < data.length - 1) {
          // Animate OUT the current item
          tl.to(`.img-seq-${i}`, { y: '-30vh', opacity: 0, scale: 0.85, duration: 1, ease: 'power2.inOut' }, `step${i}`)
            .to(`.text-seq-${i}`, { y: -40, opacity: 0, duration: 1, ease: 'power2.inOut' }, `step${i}`)
            
          // Animate IN the next item simultaneously
            .to(`.img-seq-${i+1}`, { y: '0vh', opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' }, `step${i}`)
            .to(`.text-seq-${i+1}`, { y: 0, opacity: 1, duration: 1, ease: 'power2.inOut' }, `step${i}`);
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data || data.length === 0) return null;

  return (
    <section ref={containerRef} className="w-full h-screen bg-[#0A101D] relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-[0.15]">
        <div className="w-[1px] h-full bg-[linear-gradient(to_bottom,transparent_50%,#fff_50%)] bg-[length:100%_40px]"></div>
      </div>

      <div className="w-full h-full max-w-[1400px] mx-auto relative px-[clamp(1.5rem,5vw,4rem)]">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between pointer-events-none pt-20"
          >
            
            {/* Left Side: Text Panel */}
            <div className={`text-seq-${index} w-full md:w-[45%] flex flex-col items-start justify-center pointer-events-auto z-40`}>
              
              <div className="flex items-center gap-4 mb-6">
                <span className={`w-8 h-[2px] ${item.accentClass || 'bg-blue-500'}`}></span>
                <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tight leading-[1.1] whitespace-pre-line drop-shadow-lg">
                  {item.title}
                </h2>
              </div>
              
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                {item.description}
              </p>
              
              <Link
                to={item.ctaHref || '/contact'}
                className={`inline-flex items-center gap-3 ${item.ctaClass || 'bg-blue-600 hover:bg-blue-500'} text-white font-bold py-[clamp(0.8rem,1vw,1rem)] px-[clamp(1.5rem,2vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1`}
              >
                {item.ctaLabel || 'Explore Solutions'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>

            {/* Right Side: Image Showcase */}
            <div className={`img-seq-${index} w-full md:w-[50%] h-[40vh] md:h-[80vh] flex items-center justify-center relative mt-8 md:mt-0 pointer-events-auto`}>
               <img 
                  src={item.image} 
                  alt="Product Showcase" 
                  className="w-[90%] md:w-[110%] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
               />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}