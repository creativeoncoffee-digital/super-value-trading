import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const termsData = [
  {
    id: "about",
    title: "1. About Us",
    content: "Go Super Value General Trading LLC provides trading and investment consultancy services. Our registered office is Office 1707, Damac XL Tower, Marasi Drive, Business Bay, Dubai, United Arab Emirates."
  },
  {
    id: "use",
    title: "2. Use of the Site",
    content: "The Site is provided for informational purposes and to allow visitors to learn about our services and submit inquiries. You agree to use the Site only for lawful purposes and not to:",
    list: [
      "Use the Site in any way that violates applicable UAE or international law",
      "Attempt to gain unauthorized access to the Site, our systems, or related networks",
      "Transmit any harmful code, malware, or unsolicited advertising",
      "Copy, reproduce, or misuse content from the Site without our written permission"
    ]
  },
  {
    id: "sales",
    title: "3. No Online Sales or Payments",
    content: "The Site does not process online payments, sales, or orders. Any forms on the Site are for the purpose of submitting inquiries or requesting a consultation only. No contract for services is formed simply by submitting a form — a formal engagement begins only once both parties sign a separate service agreement or engagement letter."
  },
  {
    id: "services",
    title: "4. Nature of Our Services",
    content: "Content on the Site, including articles, FAQs, and service descriptions, is provided for general informational purposes only and does not constitute financial, investment, legal, or tax advice. Trading and investment activities carry inherent risk, and past performance or general commentary on the Site should not be relied upon as a guarantee of any particular outcome. You should seek independent professional advice before making any financial or investment decision, and any formal advice from Go Super Value will only be provided through a direct, documented client engagement."
  },
  {
    id: "ip",
    title: "5. Intellectual Property",
    content: "All content on the Site — including text, graphics, logos, images, and design — is the property of Go Super Value or its licensors and is protected by applicable intellectual property laws. You may view and print pages of the Site for your personal, non-commercial use, but may not reproduce, republish, or distribute any content without our prior written consent."
  },
  {
    id: "links",
    title: "6. Third-Party Links",
    content: "The Site may contain links to third-party websites (including WhatsApp or social media) for your convenience. We do not control and are not responsible for the content, accuracy, or practices of any third-party site, and including a link does not imply our endorsement."
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: "To the fullest extent permitted by UAE law, Go Super Value shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, the Site, including any reliance placed on informational content published on the Site. The Site and its content are provided \"as is\" without warranties of any kind, express or implied."
  },
  {
    id: "indemnity",
    title: "8. Indemnification",
    content: "You agree to indemnify and hold Go Super Value, its directors, employees, and agents harmless from any claim or demand arising out of your misuse of the Site or your violation of these Terms."
  },
  {
    id: "changes",
    title: "9. Changes to These Terms",
    content: "We may revise these Terms from time to time. Updates will be posted on this page with a revised \"Last updated\" date. Your continued use of the Site after changes are posted constitutes acceptance of the revised Terms."
  },
  {
    id: "law",
    title: "10. Governing Law",
    content: "These Terms are governed by the laws of the United Arab Emirates. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE."
  }
];

export default function Terms() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' });
      gsap.fromTo('.sidebar-anim', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
      gsap.fromTo('.content-anim', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.content-wrapper', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="w-full bg-[#f8fafc] font-sans pb-24">
      
      {/* Premium Dark Hero */}
      <section className="bg-[#071326] pt-32 pb-24 px-6 relative overflow-hidden border-b border-orange-500/20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="hero-anim text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 flex items-center gap-4">
           
            Legal Information
          </p>
          <h1 className="hero-anim text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Terms & <span className="text-transparent bg-clip-text bg-orange-400 ">Conditions</span>
          </h1>
          <p className="hero-anim text-slate-400 text-sm md:text-base font-medium  pl-4">
            Last updated: September 2, 2026
          </p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-16 relative z-20 content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Sticky Sidebar Navigation (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-4 sidebar-anim">
            <div className="sticky top-32 bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm">
              <h3 className="text-[#071326] font-bold text-lg mb-6 tracking-tight">Table of Contents</h3>
              <nav className="flex flex-col gap-3">
                {termsData.map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    className="text-slate-500 hover:text-orange-500 text-sm font-medium transition-colors border-l-2 border-transparent hover:border-orange-500 pl-3 py-1"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Document Content */}
          <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16">
            
            {/* Intro text */}
            <div className="content-anim bg-white rounded-2xl p-6 md:p-8 border border-slate-200/60 shadow-sm ">
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                These Terms and Conditions ("Terms") govern your access to and use of the website www.gosupervalue.com (the "Site"), operated by Go Super Value General Trading LLC ("Go Super Value," "we," "us," or "our"), a company based in Dubai, United Arab Emirates. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
              </p>
            </div>

            {/* Render all mapped sections */}
            {termsData.map((section, idx) => (
              <div key={section.id} id={section.id} className="content-anim relative group scroll-mt-32">
                {/* Large Background Number for editorial design */}
                <span className="absolute -top-6 -left-4 text-7xl md:text-8xl font-black text-slate-100 -z-10 group-hover:text-orange-50 transition-colors duration-500 select-none">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#071326] mb-4 tracking-tight pt-2">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">{section.content}</p>
                
                {section.list && (
                  <ul className="mt-6 space-y-3 bg-slate-50 p-6 rounded-xl border border-slate-100">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(243,121,10,0.5)]"></span>
                        <span className="text-slate-600 leading-relaxed text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact Box */}
            <div className="content-anim mt-8 bg-[#071326] rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-[50px]"></div>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight relative z-10">11. Contact Us</h2>
              <p className="text-slate-300 mb-6 relative z-10">For any questions about these Terms, please contact us directly:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="flex flex-col gap-1">
                  <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">Headquarters</p>
                  <p className="text-white font-medium">Go Super Value General Trading LLC</p>
                  <p className="text-slate-400 text-sm leading-relaxed">Office 1707, Damac XL Tower<br/>Marasi Drive, Business Bay<br/>Dubai, UAE</p>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  <a href="tel:+971529607401" className="flex items-center gap-3 text-slate-300 hover:text-orange-500 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                    +971 52 960 7401
                  </a>
                  <a href="mailto:gosupervalue@outlook.com" className="flex items-center gap-3 text-slate-300 hover:text-orange-500 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                    gosupervalue@outlook.com
                  </a>
                </div>
              </div>
            </div>

            <div className="content-anim pt-8 border-t border-slate-200 flex justify-between items-center">
              <Link to="/" className="text-slate-500 hover:text-orange-500 transition-colors font-bold text-sm flex items-center gap-2 group">
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Return to Home
              </Link>
              <Link to="/privacy" className="text-orange-500 hover:text-orange-600 transition-colors font-bold text-sm flex items-center gap-2 group">
                Privacy Policy
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}