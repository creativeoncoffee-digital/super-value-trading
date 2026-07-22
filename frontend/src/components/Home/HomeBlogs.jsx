import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeBlogs() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  // Mock data for the news articles
  const newsData = [
    {
      id: 1,
      date: "2nd July 2024",
      title: "The Future Of Trading: Insights From Our Latest Industry Conference",
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      date: "2nd July 2024",
      title: "Super Value Secures Major Contract With Leading Global Supplier",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      date: "2nd July 2024",
      title: "Super Value Expands Global Network: New Partnerships Announced",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      date: "2nd July 2024",
      title: "Innovations in Logistics: How We Are Streamlining Cross-Border Trade",
      img: "https://images.unsplash.com/photo-1586528116311-ad8ed744d463?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      date: "1st July 2024",
      title: "Market Trends: The Rise of Premium Perfumery in the Middle East",
      img: "https://images.unsplash.com/photo-1595425970377-c9703d740873?q=80&w=800&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Animation
      gsap.fromTo('.news-header',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      // 2. Staggered Cards Reveal
      gsap.fromTo('.news-card',
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out', 
          scrollTrigger: { trigger: '.news-slider', start: 'top 85%' } 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Slider Navigation Logic
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.8; // Scroll by 80% of container width
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    // Applied the #084ea3 theme as a rich gradient
    <section ref={sectionRef} className="w-full bg-gradient-to-br from-[#084ea3] to-[#042859] py-24 px-8 overflow-hidden relative">
      
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="news-header flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Latest News
          </h2>
          
          <div className="flex items-center gap-6">
            <Link to="/news" className="hidden md:flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-semibold tracking-wide">
              See all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </Link>

            {/* Slide Navigation Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => scrollSlider('left')}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button 
                onClick={() => scrollSlider('right')}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel / Slider Container */}
        <div className="news-slider relative w-full">
          {/* 
            Hide scrollbar but allow native scrolling (touch swipe) + programmatic button scrolling 
            'snap-x' ensures it snaps perfectly to the cards on mobile/tablet.
          */}
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {newsData.map((news) => (
              <div 
                key={news.id} 
                className="news-card group flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[350px] xl:w-[23%] flex flex-col snap-start cursor-pointer"
              >
                {/* Image Container with Hover Zoom */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-white/10 bg-[#063b7d]">
                  <img 
                    src={news.img} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Date */}
                <p className="text-white/60 text-xs font-semibold tracking-wider mb-3">
                  {news.date}
                </p>

                {/* Title */}
                <h3 className="text-white text-lg font-bold leading-snug mb-4 line-clamp-3 group-hover:text-orange-400 transition-colors duration-300">
                  {news.title}
                </h3>

                {/* Read More Link */}
                <div className="mt-auto flex items-center gap-2 text-[#4da6ff] group-hover:text-orange-400 transition-colors text-sm font-semibold">
                  Read More 
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}