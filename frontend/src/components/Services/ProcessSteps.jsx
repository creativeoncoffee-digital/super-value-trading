import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Replace this with your actual image path for the manufacturing image
import S3 from "../../assets/Products/Sub/SV3.png";
// import autoImg from '../../assets/img/auto-manufacturing.jpg';
// import perfumeryImg from '../../assets/img/perfumery-manufacturing.jpg';
// import fmcgImg from '../../assets/img/fmcg-manufacturing.jpg';

gsap.registerPlugin(ScrollTrigger);

const processDataStore = {
  "silvermax": {
    kicker: "OUR MANUFACTURING",
    title: "PRECISION AT EVERY STAGE",
    desc: "From raw materials to finished blades, our manufacturing process combines advanced technology with strict quality control to ensure consistent performance at scale.",
    image: S3,
    steps: [
      { num: "01", title: "Material Selection", text: "High-grade stainless steel and optimized blade profiles." },
      { num: "02", title: "Blade Forming", text: "Precision geometry and controlled dimensions." },
      { num: "03", title: "Edge Finishing", text: "Grinding, honing and precision finishing." },
      { num: "04", title: "Surface Treatment", text: "Platinum, chromium and polymer coatings with cryogenic and sputtering technology." },
      { num: "05", title: "Quality Testing", text: "Sharpness, durability, coating integrity and corrosion checks." }
    ]
  },
  /* 
  "automobiles": {
    kicker: "OUR PROCESS",
    title: "ENGINEERED FOR EXCELLENCE",
    desc: "Your description here for automobiles.",
    image: autoImg,
    steps: [
      { num: "01", title: "Step 1", text: "Description here." },
      { num: "02", title: "Step 2", text: "Description here." }
    ]
  },
  "perfumery": {
    kicker: "OUR CRAFT",
    title: "THE ART OF FRAGRANCE",
    desc: "Your description here for perfumery.",
    image: perfumeryImg,
    steps: [
      { num: "01", title: "Step 1", text: "Description here." },
      { num: "02", title: "Step 2", text: "Description here." }
    ]
  },
  "personal-care": {
    kicker: "OUR FORMULAS",
    title: "DEVELOPED WITH CARE",
    desc: "Your description here for FMCG.",
    image: fmcgImg,
    steps: [
      { num: "01", title: "Step 1", text: "Description here." },
      { num: "02", title: "Step 2", text: "Description here." }
    ]
  }
  */
};

export default function ProcessSteps({ category = "silvermax" }) {
  const containerRef = useRef(null);
  
  const safeCategory = category ? category.toLowerCase().trim() : "silvermax";
  const data = processDataStore[safeCategory] || processDataStore["silvermax"];

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Image slide in
      gsap.fromTo('.process-img', 
        { opacity: 0, x: -40 }, 
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
      
      // Header text reveal
      gsap.fromTo('.process-header', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );

      // Staggered Steps Reveal
      gsap.fromTo('.process-step', 
        { opacity: 0, x: 20 }, 
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.process-steps-container', start: 'top 85%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-white py-16 md:py-24 font-sans overflow-hidden border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* ======================================================= */}
        {/* LEFT SIDE: Image Container                              */}
        {/* ======================================================= */}
        <div className="process-img w-full lg:w-1/2 relative lg:sticky lg:top-32 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] w-full">
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-full object-cover"
            />
            {/* Subtle brand overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/40 to-transparent mix-blend-multiply"></div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* RIGHT SIDE: Content & Steps                             */}
        {/* ======================================================= */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-8">
          
          <div className="process-header flex flex-col items-start mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <h4 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
                {data.kicker}
              </h4>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0B1E3A] tracking-tight leading-[1.15] mb-5">
              {data.title}
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed">
              {data.desc}
            </p>
          </div>

          <div className="process-steps-container flex flex-col gap-8">
            {data.steps.map((step, idx) => (
              <div key={idx} className="process-step flex items-start gap-5 group">
                
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md group-hover:scale-110 group-hover:bg-orange-600 transition-all duration-300">
                  {step.num}
                </div>
                
                {/* Step Content */}
                <div className="flex flex-col pt-1">
                  <h3 className="text-[#0B1E3A] font-bold text-lg mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    {step.text}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}