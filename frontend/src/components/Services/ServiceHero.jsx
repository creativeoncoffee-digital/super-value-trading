import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { productData } from '../../data/ProductData';

export default function ServiceHero({ category = "personal-care" }) {
  const sectionRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  
  // Dynamic Data Pull
  const data = productData[category]?.hero;

  const isAutomobile = category === 'automobiles';

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Text Reveal
      tl.fromTo('.hero-text-anim', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );
      
      // Images Slide In
      tl.fromTo(leftImgRef.current, 
        { opacity: 0, xPercent: -100, rotation: -5 }, 
        { opacity: 1, xPercent: -30, rotation: -2, duration: 1.2, ease: 'power3.out' }, 
        "-=0.8"
      );
      tl.fromTo(rightImgRef.current, 
        { opacity: 0, xPercent: 100, rotation: 5 }, 
        { opacity: 1, xPercent: 30, rotation: 2, duration: 1.2, ease: 'power3.out' }, 
        "-=1.2"
      );
      
      // Continuous Minimal Float
      tl.add(() => {
        gsap.to(leftImgRef.current, { y: -8, rotation: -4, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 });
        gsap.to(rightImgRef.current, { y: 8, rotation: 4, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });
      });
      
    }, sectionRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return <div className="h-[60vh] flex items-center justify-center">Category not found.</div>;

  const imageSizeClass = isAutomobile ? "w-[16vw] max-w-[300px]" : "w-[25vw] max-w-[600px]";

  // Helper to render the breadcrumb string into actionable links
  const renderBreadcrumb = () => {
    if (!data.breadcrumb) return null;
    const parts = data.breadcrumb.split(' > ');
    return (
      <div className="hero-text-anim flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
        {parts.map((part, index) => (
          <span key={index} className="flex items-center gap-2">
            {/* If it's the last item, make it orange, otherwise gray */}
            <span className={index === parts.length - 1 ? "text-orange-500 font-bold" : ""}>
              {part}
            </span>
            {index < parts.length - 1 && <span className="text-slate-600">›</span>}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className={`relative w-full min-h-[70vh] max-h-full flex flex-col justify-center font-sans overflow-hidden bg-[#071326] brand-section`}>
      
      {/* Background Gradients & Overlay */}
      <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${data.themeFrom} ${data.themeTo}`}>
        {/* Subtle texture/image overlay */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-screen" style={{ backgroundImage: `url(${data.bgBanner})` }}></div>
        {/* Right side glow light */}
        <div className="absolute top-0 right-0 w-[60vh] h-[60vh] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      {/* FLOATING IMAGES (Kept exactly as requested, positioned absolute) */}
      {/* Reduced left image opacity slightly on mobile so text remains readable */}
      <div ref={leftImgRef} className={`absolute -left-1 top-1/2 -translate-y-1/2 ${imageSizeClass} z-10 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] opacity-20 lg:opacity-60`}>
        <img src={data.leftImg} alt="Left Background" className="w-[70%] h-auto object-contain" />
      </div>
      <div ref={rightImgRef} className={`absolute -right-25 top-1/2 -translate-y-1/2 ${imageSizeClass} z-20 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]`}>
        <img src={data.rightImg} alt="Right Showcase" className="w-[70%] h-auto object-contain" />
      </div>

      {/* MAIN TEXT CONTENT - Aligned Left */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pt-24 pb-32">
        <div className="w-full lg:w-[65%] flex flex-col items-start text-left">
          
          {renderBreadcrumb()}

          {/* Eyebrow */}
          <h2 className={`hero-text-anim ${data.accent} font-bold uppercase tracking-[0.18em] text-sm mb-4`}> 
            {data.eyebrow}
          </h2>

          {/* Main Title (Preserves \n for line breaks) */}
          <h1 className="hero-text-anim text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.98] mb-6 tracking-tight drop-shadow-lg whitespace-pre-line max-w-3xl">
            {data.title}
          </h1>

          {/* Description */}
          <p className="hero-text-anim text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl font-normal mb-12 drop-shadow-md brand-lead text-slate-100/90">
            {data.description}
          </p>

          {/* Feature Icons Row */}
          {data.features && (
            <div className="hero-text-anim flex flex-wrap gap-x-8 gap-y-6">
              {data.features.map((feat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-orange-500 bg-white/8 p-2.5 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg shadow-black/10">
                    {feat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm leading-tight">{feat.title}</span>
                    <span className="text-slate-400 text-xs">{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* BOTTOM CURVED SWOOP (Exactly matching the design) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-40 transform translate-y-1 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[60px] md:h-[120px] block" preserveAspectRatio="none">
          {/* Solid White Fill for the next section background */}
          <path d="M0,120 C480,120 960,40 1440,0 L1440,120 Z" fill="#ffffff" />
          {/* Thick Orange Stroke matching the curve */}
          <path d="M0,120 C480,120 960,40 1440,0" fill="none" stroke="#f97316" strokeWidth="6" />
        </svg>
      </div>

    </section>
  );
}