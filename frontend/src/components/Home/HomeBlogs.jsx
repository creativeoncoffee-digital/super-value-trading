import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. Import your dynamic blog data
import { blogData } from '../../data/BlogData';

gsap.registerPlugin(ScrollTrigger);

export default function HomeBlogs() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 2. Automatically compile all blogs into one array and grab the top 5-6 latest posts
  const allBlogs = [blogData.featured, ...blogData.subFeatured, ...blogData.gridPosts];
  const latestNewsData = allBlogs.slice(0, 6);

  // 3. Duplicate the array to create a seamless infinite scrolling loop
  const duplicatedNewsData = [...latestNewsData, ...latestNewsData];

  // GSAP Entrance Animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.news-header',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      gsap.fromTo('.news-card',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.news-slider', start: 'top 85%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // AUTO-SCROLL MARQUEE LOGIC
  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId;
    let scrollAccumulator = slider ? slider.scrollLeft : 0;

    const playMarquee = () => {
      if (slider && !isHovered) {
        // Very slow, smooth increment (0.5 pixels per frame)
        scrollAccumulator += 0.5;
        slider.scrollLeft = scrollAccumulator;

        // Seamless Infinite Loop: If we scroll past exactly half the container, silently snap back to 0
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
          scrollAccumulator = 0;
        }
      } else if (slider) {
        // Keep accumulator synced if the user manually scrolls
        scrollAccumulator = slider.scrollLeft;
      }
      
      animationFrameId = requestAnimationFrame(playMarquee);
    };

    animationFrameId = requestAnimationFrame(playMarquee);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  // Manual Slider Navigation Logic
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.6; 
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-gray-50 py-24 px-8 overflow-hidden relative border-t border-slate-200">
      
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div 
        className="max-w-[1400px] mx-auto relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        
        {/* Header Area */}
        <div className="news-header flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0B1E3A] tracking-tight">
            Latest News
          </h2>
          
          <div className="flex items-center gap-6">
            <Link to="/blogs" className="hidden md:flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-colors text-sm font-semibold tracking-wide">
              See all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </Link>

            {/* Slide Navigation Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => scrollSlider('left')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button 
                onClick={() => scrollSlider('right')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel / Slider Container */}
        <div className="news-slider relative w-full">
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedNewsData.map((news, index) => (
              // 4. Wrapped the entire card in a Link tag leading to /blogs
              <Link 
                to="/blogs"
                key={`${news.id}-${index}`} 
                className="news-card group flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[350px] xl:w-[23%] flex flex-col cursor-pointer block"
              >
                {/* Image Container with Hover Zoom */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-slate-200 bg-slate-100 shadow-sm">
                  <img 
                    src={news.img} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Date */}
                <p className="text-slate-500 text-xs font-semibold tracking-wider mb-3 uppercase">
                  {news.date}
                </p>

                {/* Title (Text stays dark on hover as requested) */}
                <h3 className="text-[#0B1E3A] text-lg font-bold leading-snug mb-4 line-clamp-3 transition-colors duration-300">
                  {news.title}
                </h3>

                {/* Read More Link */}
                <div className="mt-auto flex items-center gap-2 text-orange-500 group-hover:text-orange-600 transition-colors text-sm font-bold uppercase tracking-wider">
                  Read More 
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}