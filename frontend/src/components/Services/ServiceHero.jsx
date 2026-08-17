import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { productData } from '../../data/ProductData';

export default function ServiceHero({ category = "personal-care" }) {
  const sectionRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  
  const data = productData[category]?.hero;
  const isAutomobile = category === 'automobiles';

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.hero-text-anim', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );
      
      tl.fromTo(leftImgRef.current, 
        { opacity: 0, xPercent: -100, rotation: -5 }, 
        { opacity: 1, xPercent: -30, rotation: -2, duration: 1.2, ease: 'power3.out' }, 
        "-=0.8"
      );
      
      // Right image slides in
      tl.fromTo(rightImgRef.current, 
        { opacity: 0, xPercent: 100, rotation: 5 }, 
        { opacity: 1, xPercent: 30, rotation: 2, duration: 1.2, ease: 'power3.out' }, 
        "-=1.2"
      );
      
      // FIX 2: Minimized the floating animation distance from 8 to 3 so it doesn't clip the borders
      tl.add(() => {
        gsap.to(leftImgRef.current, { y: -3, rotation: -2, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 });
        gsap.to(rightImgRef.current, { y: 3, rotation: 2, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });
      });
      
    }, sectionRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return <div className="h-[60vh] flex items-center justify-center">Category not found.</div>;

  // FIX 1: Explicitly defining full strings so Tailwind compiles the correct desktop sizes
  const leftWrapperClass = isAutomobile 
    ? "w-[16vw] max-w-[300px]" 
    : "w-[25vw] max-w-[600px]";
    
  const rightWrapperClass = isAutomobile 
    ? "w-[45vw] sm:w-[35vw] lg:w-[16vw] max-w-[300px]" 
    : "w-[45vw] sm:w-[35vw] lg:w-[25vw] max-w-[600px]";

  return (
    <section ref={sectionRef} className="relative w-full min-h-[70vh] lg:min-h-[70vh] flex flex-col justify-center font-sans overflow-hidden bg-[#071326] brand-section pt-10 pb-20 lg:pt-0 lg:pb-0">
      
      <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${data.themeFrom} ${data.themeTo}`}>
        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-screen" style={{ backgroundImage: `url(${data.bgBanner})` }}></div>
        <div className="absolute top-0 right-0 w-[60vh] h-[60vh] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      {/* FLOATING IMAGES */}
      
      {/* Left Image: Moved up slightly to top-[48%] to give safe distance from bottom border */}
      <div ref={leftImgRef} className={`hidden lg:block absolute -left-1 top-[48%] -translate-y-1/2 ${leftWrapperClass} z-10 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] opacity-60`}>
        <img src={data.leftImg} alt="Left Background" className="w-[70%] h-auto object-contain" />
      </div>

      {/* Right Image: Moved up slightly to top-[48%] on desktop, applied explicit Tailwind class */}
      <div ref={rightImgRef} className={`absolute right-[14%] sm:right-[10%] top-[75%] lg:-right-25 lg:top-[48%] -translate-y-1/2 ${rightWrapperClass} z-20 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] opacity-50 lg:opacity-100`}>
        <img src={data.rightImg} alt="Right Showcase" className="w-full lg:w-[70%] h-auto object-contain" />
      </div>

      {/* MAIN TEXT CONTENT */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] lg:pt-24 lg:pb-32">
        <div className="w-full lg:w-[65%] flex flex-col items-start text-left">
          
          <h2 className={`hero-text-anim ${data.accent} font-bold uppercase tracking-[0.18em] text-xs md:text-sm mb-4`}> 
            {data.eyebrow}
          </h2>

          <h1 className="hero-text-anim text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] md:leading-[0.98] mb-6 tracking-tight drop-shadow-lg whitespace-pre-line max-w-3xl">
            {data.title}
          </h1>

          <p className="hero-text-anim text-slate-200 text-base md:text-xl leading-relaxed max-w-2xl font-normal mb-10 md:mb-12 drop-shadow-md brand-lead text-slate-100/90">
            {data.description}
          </p>

          {/* Feature Icons Row */}
          {data.features && (
            <div className="hero-text-anim flex flex-col lg:flex-row flex-wrap gap-x-8 gap-y-4 md:gap-y-6">
              {data.features.map((feat, index) => (
                <div key={index} className="flex items-center gap-3 w-fit">
                  <div className="text-orange-500 bg-white/10 p-2 md:p-2.5 rounded-xl md:rounded-2xl backdrop-blur-md border border-white/20 shadow-lg shadow-black/20">
                    {feat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm leading-tight drop-shadow-md">{feat.title}</span>
                    <span className="text-slate-300 text-[11px] md:text-xs font-medium">{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* BOTTOM CURVED SWOOP */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-40 transform translate-y-[1px] pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[60px] md:h-[80px] lg:h-[120px] block" preserveAspectRatio="none">
          <path d="M0,120 C480,120 960,40 1440,0 L1440,120 Z" fill="#ffffff" />
          <path 
            d="M0,116 C480,116 960,36 1440,-4" 
            fill="none" 
            stroke="#f97316" 
            strokeWidth="5" 
            vectorEffect="non-scaling-stroke" 
          />
        </svg>
      </div>

    </section>
  );
}