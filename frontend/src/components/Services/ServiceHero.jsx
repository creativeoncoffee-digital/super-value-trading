import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { productData } from '../../data/ProductData';
import HeroBadgeBar from '../../components/HeroBadgeBar'; 

export default function ServiceHero({ category = "personal-care" }) {
  const sectionRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  
  // Dynamic Data Pull
  const data = productData[category]?.hero;

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.hero-text-anim', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' });
      tl.fromTo(leftImgRef.current, { opacity: 0, xPercent: -100, rotation: -15 }, { opacity: 1, xPercent: -30, rotation: -5, duration: 1.2, ease: 'power3.out' }, "-=0.8");
      tl.fromTo(rightImgRef.current, { opacity: 0, xPercent: 100, rotation: 15 }, { opacity: 1, xPercent: 30, rotation: 5, duration: 1.2, ease: 'power3.out' }, "-=1.2");
      tl.add(() => {
        gsap.to(leftImgRef.current, { y: 7, rotation: -8, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
        gsap.to(rightImgRef.current, { y: -7, rotation: 8, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return <div className="h-[60vh] flex items-center justify-center">Category not found.</div>;

  return (
    <section ref={sectionRef} className={`relative w-full h-[60vh] min-h-[500px] flex items-center justify-center font-sans`}>
      <div className={`absolute inset-0 w-full h-full  bg-gradient-to-br ${data.themeFrom} ${data.themeTo}`}>
        {/* DYNAMIC BANNER */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 mix-blend-screen" style={{ backgroundImage: `url(${data.bgBanner})` }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div ref={leftImgRef} className="absolute left-0 top-1/2 -translate-y-1/2 w-[25vw] max-w-[600px] z-20 pointer-events-none drop-shadow-2xl">
          <img src={data.leftImg} alt="Left" className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
        </div>
        <div ref={rightImgRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-[25vw] max-w-[600px] z-20 pointer-events-none drop-shadow-2xl">
          <img src={data.rightImg} alt="Right" className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-8 pointer-events-none">
        <div className="hero-text-anim flex items-center gap-4 mb-4">
          <span className="w-10 h-[2px] bg-white/20"></span>
          <p className={`${data.accent} font-bold uppercase tracking-[0.2em] text-xs md:text-sm`}>{data.subtitle}</p>
          <span className="w-10 h-[2px] bg-white/20"></span>
        </div>
        <h1 className="hero-text-anim text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">{data.title}</h1>
        <p className="hero-text-anim text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl font-light">{data.description}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full mt-20 translate-y-1/2 z-30">
        <HeroBadgeBar />
      </div>
    </section>
  );
}