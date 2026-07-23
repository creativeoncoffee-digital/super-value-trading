import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { productData } from '../../data/ProductData';
import Banner from '../../assets/Products/PlaceHolder.png'; // Replace with your actual banner image path
import HeroBadgeBar from '../../components/HeroBadgeBar'; // Ensure this path is correct

export default function ServiceHero({ category = "personal-care" }) {
  const sectionRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  
  const data = productData[category];

  useEffect(() => {
    // If invalid category is passed, prevent animation errors
    if (!data) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Text Entrance Animation
      tl.fromTo('.hero-text-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );

      // 2. Images Slide In (Overlapping 60% visibility)
      // Left image comes from far left (-100%) to its resting overlapping position (-30%)
      tl.fromTo(leftImgRef.current,
        { opacity: 0, xPercent: -100, rotation: -15 },
        { opacity: 1, xPercent: -30, rotation: -5, duration: 1.2, ease: 'power3.out' },
        "-=0.8" // Start slightly before text finishes
      );

      // Right image comes from far right (100%) to its resting overlapping position (30%)
      tl.fromTo(rightImgRef.current,
        { opacity: 0, xPercent: 100, rotation: 15 },
        { opacity: 1, xPercent: 30, rotation: 5, duration: 1.2, ease: 'power3.out' },
        "-=1.2"
      );

      // 3. Continuous Floating Animation
      // Starts after the entrance timeline completes
      tl.add(() => {
        gsap.to(leftImgRef.current, {
          y: 7,
          rotation: -8,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });

        gsap.to(rightImgRef.current, {
          y: -7,
          rotation: 8,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.5 // Offset the float timing slightly from the left image
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return <div className="h-[60vh] flex items-center justify-center">Category not found.</div>;

  return (
    <section 
      ref={sectionRef} 
      className={`relative w-full h-[60vh] min-h-[500px]  bg-gradient-to-br ${data.themeFrom} ${data.themeTo} flex items-center justify-center font-sans`}
    >
         {/* --- NEW BANNER BACKGROUND --- */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- LEFT OVERLAPPING IMAGE --- */}
      <div 
        ref={leftImgRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[20vw] max-w-[500px] z-10 pointer-events-none drop-shadow-2xl"
      >
        {/* Replace object-cover with object-contain when you add your real background-removed PNGs */}
        <img 
          src={data.leftImg} 
          alt="Product Element Left" 
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* --- RIGHT OVERLAPPING IMAGE --- */}
      <div 
        ref={rightImgRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[20vw] max-w-[500px] z-10 pointer-events-none drop-shadow-2xl"
      >
        <img 
          src={data.rightImg} 
          alt="Product Element Right" 
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* --- CENTER TEXT CONTENT --- */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-3xl px-8">
        <div className="hero-text-anim flex items-center gap-4 mb-4">
          <span className="w-10 h-[2px] bg-white/20"></span>
          <p className={`${data.accent} font-bold uppercase tracking-[0.2em] text-xs md:text-sm`}>
            {data.subtitle}
          </p>
          <span className="w-10 h-[2px] bg-white/20"></span>
        </div>
        
        <h1 className="hero-text-anim text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
          {data.title}
        </h1>
        
        <p className="hero-text-anim text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
          {data.description}
        </p>
      </div>
      {/* --- OVERLAPPING BADGE BAR --- */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-30">
        <HeroBadgeBar />
      </div>

    </section>
  );
}