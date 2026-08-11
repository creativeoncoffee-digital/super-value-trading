import { productData } from '../../data/ProductData';

export default function PerfumeryCapabilities({ category = "perfumery" }) {
  const data = productData[category]?.capabilities;
  if (!data) return null;

  return (
    <section className="w-full bg-[#f8fafc] py-16 font-sans border-t border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <h3 className="text-center text-orange-500 font-bold uppercase tracking-widest text-xs mb-10">
          BUILT AROUND YOUR BRAND
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {data.map((cap, i) => (
            <div key={i} className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center flex-1 min-w-[180px] max-w-[250px]">
              <span className="text-[#0B1E3A] font-bold text-sm tracking-wider uppercase mb-1">{cap.title}</span>
              <span className="text-slate-500 text-xs">{cap.desc}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-xs mt-8 italic">
          *Private-label opportunities and custom packaging available where applicable.
        </p>
      </div>
    </section>
  );
}