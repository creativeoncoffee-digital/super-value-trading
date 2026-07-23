import React from 'react';

// IMPORT YOUR IMAGES HERE (This fixes the broken image issue)
import BladeImg from '../assets/Products/Blade.png';
// import BannerImg from '../assets/Products/Banner.jpg';
import one from '../assets/Products/one.png'; 
import two from '../assets/Products/two.png';
import three from '../assets/Products/three.png';
import four from '../assets/Products/four.png';
import five from '../assets/Products/five.png';
import six from '../assets/Products/six.png';


export const productData = {
  "personal-care": {
    // 1. HERO SECTION DATA
    hero: {
      title: "Personal Care & Grooming",
      subtitle: "Precision & Performance",
      description: "Authorized distributors of premium grooming systems, razors, and blades, ensuring top-tier quality for regional and global markets.",
      leftImg: BladeImg,
      rightImg: BladeImg,
      bgBanner: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop", // Replace with BannerImg
      themeFrom: "from-[#0B1E3A]",
      themeTo: "to-[#041428]",
      accent: "text-orange-500"
    },
    
    // 2. TRUSTED MARKETS DATA (Logos)
    trustedMarkets: {
      title: "Trusted By Global Markets",
      logos: [
        { id: 1, name: "Silvermax", src: [one] }, // Replace with LogoOne
        { id: 2, name: "Gillette", src:[two] }, // Replace with LogoTwo
        { id: 3, name: "Nivea", src: [three] },
        { id: 4, name: "Dove", src:[four] },
        { id: 5, name: "Colgate", src: [five] },
        { id: 6, name: "Unilever", src: [six] }
      ]
    },

    // 3. SHOWCASE DATA (About & Grid)
    showcase: {
      about: {
        title: "About Super Value",
        highlight: "FMCG Partner",
        headline: "Your Trusted",
        description: "Super Value is committed to delivering high-quality personal care and grooming products that enhance everyday life. With a strong distribution network and customer-first approach, we ensure the best global brands reach you with trust and reliability.",
        image: "https://images.unsplash.com/photo-1621607505833-616916c46a25?q=80&w=1000&auto=format&fit=crop",
        stats: [
          { value: "10+", label: "Years Experience" },
          { value: "50+", label: "Countries" },
          { value: "1000+", label: "Retail Partners" }
        ]
      },
      categories: [
        { title: "Hair Care", desc: "Shampoos, conditioners & oils.", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop" },
        { title: "Skin Care", desc: "Face care, body lotions & creams.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" },
        { title: "Bath & Shower", desc: "Soaps, body washes & bathing essentials.", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop" },
        { title: "Oral Care", desc: "Toothpaste & mouthwash.", img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop" },
        { title: "Men's Grooming", desc: "Shaving, beard care & deodorants.", img: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?q=80&w=800&auto=format&fit=crop" },
        { title: "Feminine Care", desc: "Hygiene & intimate care.", img: "https://images.unsplash.com/photo-1584305574647-0cc9ec5ee60a?q=80&w=800&auto=format&fit=crop" }
      ]
    },

    // 4. SOLUTIONS DATA
    solutions: {
      headline: "Trusted Personal Care Solutions for Every Lifestyle",
      description: "From daily essentials to premium care, we deliver a wide range of personal care products that meet the highest standards of quality, safety and value.",
      cards: [
        { title: "Hair Care", icon: <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> },
        { title: "Skin Care", icon: <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg> },
        { title: "Bath & Shower", icon: <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7.5V5.25m0 0a2.25 2.25 0 10-4.5 0v2.25m4.5 0a2.25 2.25 0 11-4.5 0m4.5 0h.008v.008H15V7.5zm-4.5 0h.008v.008H10.5V7.5zm-2.25 3h10.5c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5H8.25c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5z" /></svg> },
        { title: "Oral Care", icon: <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.43 3 12c0 4.556 4.03 8.25 9 8.25z" /></svg> }
      ]
    }
  },
  
  "automobiles": {
    // You can fill this out following the exact same structure!
  }
};