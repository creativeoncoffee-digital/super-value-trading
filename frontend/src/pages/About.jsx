import React from 'react';
import AboutHero from '../components/About/AboutHero';
import WhoWeAre from '../components/About/WhoWeAre';
import CoreValues from '../components/About/CoreValues';
import ProductDivisions from '../components/About/ProductDivisions';
import AboutStats from '../components/About/AboutStats';
import AboutCTA from '../components/About/AboutCTA';
import TrustedMarks from '../components/TrustedMarkets';
import Faq from '../components/FAQ/Faq';
import Breadcrumb from '../components/Breadcrumb';
import ServiceGallery from '../components/Services/ServiceGallery';
import AboutStory from '../components/About/AboutStory';
import OurServices from '../components/About/OurServices';
import HeroMarquee from '../components/HeroMarquee';

export default function About() {
  return (
    <main className="w-full min-h-screen">
    <Breadcrumb 
  textColor="text-white" 
  hoverColor="hover:text-orange-400" 
  activeColor="text-orange-500" 
/>
      <AboutHero />
      <HeroMarquee />
      {/* <TrustedMarks /> */}
      <AboutStory />
      {/* <WhoWeAre /> */}
      {/* <CoreValues /> */}
      <ProductDivisions />
      <OurServices />
      <AboutStats />
      <AboutCTA />
      <ServiceGallery category="exhibition  " />
      <Faq page="about" />
    </main>
  );
}