import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import the map image
import mapImg from '../../assets/img/world-map.png';

gsap.registerPlugin(ScrollTrigger);

export default function GlobalOperations() {
  const containerRef = useRef(null);
  
  // Refs for counting stats
  const stat90Ref = useRef(null);
  const stat5Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat1Ref = useRef(null);

  const regions = [
    { title: "Middle East", desc: "UAE headquarters with active presence across Saudi Arabia and the wider Middle East." },
    { title: "Europe", desc: "Presence in Belgium, with trade reach across multiple countries in Europe." },
    { title: "Africa", desc: "Morocco, Tunisia, Algeria, Senegal, Nigeria, Burkina Faso, Uganda, Angola, Zambia and Zimbabwe." },
    { title: "Asia", desc: "Sourcing and trade partnerships in China." },
    { title: "Americas", desc: "Trade reach across the USA, Mexico and Brazil." },
    { title: "Logistics Network", desc: "Integrated sea, air and land transport with warehousing and last-mile delivery." }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Text Reveals
      gsap.utils.toArray('.text-reveal').forEach((text) => {
        gsap.fromTo(text,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: text, start: 'top 85%' }
          }
        );
      });

      // 2. Map Entrance & Continuous Float
      const mapTl = gsap.timeline({
        scrollTrigger: { trigger: '.map-container', start: 'top 80%' }
      });
      
      mapTl.fromTo('.map-image',
        { opacity: 0, scale: 0.95, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      ).to('.map-image', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // 3. Staggered Grid Reveal (Regions)
      gsap.fromTo('.region-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.regions-grid', start: 'top 85%' }
        }
      );

      // 4. Staggered Grid Reveal (Advantages)
      gsap.fromTo('.advantage-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.advantages-grid', start: 'top 80%' }
        }
      );

      // 5. Stats Counter Animation
      const animateCount = (target, ref, duration = 2) => {
        gsap.fromTo(ref.current,
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: duration,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            scrollTrigger: { trigger: '.stats-bar', start: 'top 90%', once: true }
          }
        );
      };

      animateCount(90, stat90Ref, 2);
      animateCount(5, stat5Ref, 1.5);
      animateCount(2, stat2Ref, 1.5);
      animateCount(1, stat1Ref, 1);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col">
      
      {/* --- SECTION 1: MAP & REGIONS --- */}
      <section className="bg-slate-50 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="text-reveal">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                  International Presence
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Where we operate
              </h2>
            </div>
            <div className="text-reveal max-w-sm">
              <p className="text-slate-500 font-medium">
                Active trade presence across the Middle East, Europe, Africa and the Americas, plus China.
              </p>
            </div>
          </div>

          {/* Map Container */}
          <div className="map-container relative w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border border-slate-100 overflow-hidden">
            {/* Subtle background grid pattern for high-tech feel */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
            <img 
              src={mapImg} 
              alt="Global Operations Map" 
              className="map-image relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Regions Grid */}
          <div className="regions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {regions.map((region, index) => (
              <div 
                key={index} 
                className="region-card group relative pt-6 border-t-2 border-orange-500/30 hover:border-orange-500 transition-colors duration-300"
              >
                {/* Hover glow effect block */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
                
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3 group-hover:text-orange-600 transition-colors">
                  {region.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {region.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 2: DARK BLUE STATS BAR --- */}
      <section className="stats-bar bg-[#0f172a] py-20 px-8 relative overflow-hidden">
        {/* Decorative ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-left relative z-10">
          <div>
            <div ref={stat90Ref} className="text-5xl md:text-6xl font-bold text-orange-500 mb-3">0</div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Countries served</div>
          </div>
          <div>
            <div ref={stat5Ref} className="text-5xl md:text-6xl font-bold text-orange-500 mb-3">0</div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Continents reached</div>
          </div>
          <div>
            <div ref={stat2Ref} className="text-5xl md:text-6xl font-bold text-orange-500 mb-3">0</div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Dubai airports for air freight</div>
          </div>
          <div>
            <div ref={stat1Ref} className="text-5xl md:text-6xl font-bold text-orange-500 mb-3">0</div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest leading-relaxed">World's largest man-made<br/>harbor, nearby</div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: STRATEGIC ADVANTAGES --- */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-reveal mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                Strategic Advantages
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Why Dubai, why us
            </h2>
          </div>

          <div className="advantages-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="advantage-card group bg-[#0f172a] p-10 md:p-14 rounded-xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors duration-500"></div>
              
              <div className="w-12 h-12 bg-orange-500 mb-8 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-orange-500/30"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 leading-snug">
                Prime Dubai Hub with Jebel Ali Port Access
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Strategically positioned in Business Bay, one of Dubai's premier commercial districts, with direct connectivity to Jebel Ali Port — the world's largest man-made harbor and the region's busiest trade hub. Our location enables rapid customs clearance, competitive shipping rates and seamless access to global maritime routes connecting Asia, Europe, Africa and the Americas.
              </p>
            </div>

            {/* Card 2 */}
            <div className="advantage-card group bg-[#0f172a] p-10 md:p-14 rounded-xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors duration-500"></div>
              
              <div className="w-12 h-12 bg-orange-500 mb-8 transform group-hover:-rotate-12 transition-transform duration-500 shadow-lg shadow-orange-500/30"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 leading-snug">
                World-Class Air-Freight & Logistics Network
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Dubai International Airport and Al Maktoum International Airport provide unparalleled air-freight capabilities for time-sensitive shipments. Our integrated logistics network combines sea, air and land transport solutions, ensuring efficient delivery across 90 countries with comprehensive warehousing and last-mile delivery services.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}