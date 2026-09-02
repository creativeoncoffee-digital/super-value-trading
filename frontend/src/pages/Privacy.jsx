import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const privacyData = [
  {
    id: "collect",
    title: "1. Information We Collect",
    content: "We collect information in two ways: information you give us directly, and information collected automatically as you browse.",
    subsections: [
      {
        subtitle: "Information you provide to us.",
        text: "When you submit an inquiry, request a consultation, or contact us through a form on the Site, we may collect:",
        list: ["Your full name", "Phone number", "Company name", "Email address", "Location / country", "Any additional information you choose to include in your message"]
      },
      {
        subtitle: "Information collected automatically.",
        text: "Like most websites, we and our service providers may automatically collect certain technical information when you visit the Site, including your IP address, browser type, device information, pages viewed, referring website, and time spent on pages. This is typically collected through cookies and similar tracking technologies."
      }
    ]
  },
  {
    id: "use",
    title: "2. How We Use Your Information",
    content: "We use the information we collect to:",
    list: [
      "Respond to your inquiries and provide the consultancy services you request",
      "Communicate with you about your inquiry, including by phone, email, or WhatsApp",
      "Understand how visitors use the Site, so we can improve it",
      "Comply with our legal and regulatory obligations under UAE law",
      "Detect, prevent, and address fraud, misuse, or security issues"
    ],
    footer: "We do not sell your personal information to third parties, and we do not use it for automated decision-making that produces legal or similarly significant effects."
  },
  {
    id: "legal",
    title: "3. Legal Basis for Processing",
    content: "We process your personal data on the basis of your consent (when you submit a form), our legitimate interest in operating and improving the Site and responding to inquiries, and, where applicable, to comply with a legal obligation. This Policy is intended to align with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (\"UAE PDPL\")."
  },
  {
    id: "cookies",
    title: "4. Cookies and Tracking",
    content: "The Site may use cookies and similar technologies to remember your preferences, understand Site traffic, and improve functionality. You can control or disable cookies through your browser settings; however, some parts of the Site may not function properly if you do so."
  },
  {
    id: "share",
    title: "5. How We Share Information",
    content: "We do not sell or rent your personal information. We may share it with:",
    list: [
      "Employees, consultants, and advisors within Go Super Value who need it to respond to your inquiry",
      "Service providers who support our website, hosting, communications, or analytics, under confidentiality obligations",
      "Government or regulatory authorities, where required by UAE law",
      "Professional advisors (legal, financial) where necessary to deliver the services you have requested"
    ]
  },
  {
    id: "security",
    title: "6. Data Security",
    content: "We take reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security."
  },
  {
    id: "retention",
    title: "7. Data Retention",
    content: "We retain your personal information for as long as necessary to respond to your inquiry, provide our services, and comply with our legal, accounting, or regulatory obligations, after which it is securely deleted or anonymized."
  },
  {
    id: "rights",
    title: "8. Your Rights",
    content: "Subject to applicable UAE law, you have the right to:",
    list: [
      "Request access to the personal information we hold about you",
      "Request correction of inaccurate or incomplete information",
      "Request deletion of your personal information",
      "Withdraw consent at any time, where processing is based on consent",
      "Object to certain processing of your information"
    ]
  },
  {
    id: "international",
    title: "9. International Transfers",
    content: "As we may work with international partners and service providers, your information may be processed outside the UAE. Where this occurs, we take reasonable steps to ensure it receives an adequate level of protection."
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: "The Site is intended for business use and is not directed at individuals under the age of 18. We do not knowingly collect personal information from children."
  }
];

export default function Privacy() {
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
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="hero-anim text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 flex items-center gap-4">
          
            Legal Information
          </p>
          <h1 className="hero-anim text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-orange-400">Policy</span>
          </h1>
          <p className="hero-anim text-slate-400 text-sm md:text-base font-medium  border-orange-500 pl-4">
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
                {privacyData.map((item) => (
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
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                Go Super Value General Trading LLC ("Go Super Value," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us through our website, www.gosupervalue.com (the "Site"). This Privacy Policy explains what information we collect, how we use it, and the choices you have.
              </p>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium text-[#071326]">
                By using the Site, you agree to the collection and use of information as described in this Policy. If you do not agree, please do not use the Site.
              </p>
            </div>

            {/* Render all mapped sections */}
            {privacyData.map((section, idx) => (
              <div key={section.id} id={section.id} className="content-anim relative group scroll-mt-32">
                
                <span className="absolute -top-6 -left-4 text-7xl md:text-8xl font-black text-slate-100 -z-10 group-hover:text-orange-50 transition-colors duration-500 select-none">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#071326] mb-4 tracking-tight pt-2">
                  {section.title}
                </h2>
                
                {section.content && <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">{section.content}</p>}
                
                {/* Handling complex subsections for Section 1 */}
                {section.subsections && (
                  <div className="flex flex-col gap-6">
                    {section.subsections.map((sub, i) => (
                      <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-[#071326] mb-2">{sub.subtitle}</h4>
                        <p className="text-slate-600 leading-relaxed text-base mb-4">{sub.text}</p>
                        {sub.list && (
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {sub.list.map((item, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                                <span className="text-slate-600 text-sm font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.list && !section.subsections && (
                  <ul className="mt-4 space-y-3 bg-slate-50 p-6 rounded-xl border border-slate-100">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(243,121,10,0.5)]"></span>
                        <span className="text-slate-600 leading-relaxed text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="mt-6 text-slate-500 italic text-sm border-l-2 border-slate-300 pl-4">
                    {section.footer}
                  </p>
                )}
              </div>
            ))}

            <div className="content-anim mt-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#071326] mb-4 tracking-tight">11. Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The "Last updated" date at the top of this page indicates when it was last revised. We encourage you to review this page periodically.
              </p>
            </div>

            {/* Contact Box */}
            <div className="content-anim mt-8 bg-[#071326] rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-[50px]"></div>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight relative z-10">12. Contact Us</h2>
              <p className="text-slate-300 mb-6 relative z-10">If you have questions about this Privacy Policy or how we handle your information, please contact us:</p>
              
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
              <Link to="/terms" className="text-orange-500 hover:text-orange-600 transition-colors font-bold text-sm flex items-center gap-2 group">
                Terms & Conditions
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}