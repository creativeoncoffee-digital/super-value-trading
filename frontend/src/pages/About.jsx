import React from 'react';
import AboutHero from '../components/About/AboutHero';
import WhoWeAre from '../components/About/WhoWeAre';
import CoreValues from '../components/About/CoreValues';
import ProductDivisions from '../components/About/ProductDivisions';
import AboutStats from '../components/About/AboutStats';
import AboutCTA from '../components/About/AboutCTA';
import TrustedMarks from '../components/TrustedMarkets';
import Faq from '../components/Faq/Faq';

export default function About() {
  return (
    <main className="w-full min-h-screen">
      <AboutHero />
      <TrustedMarks />
      <WhoWeAre />
      <CoreValues />
      <ProductDivisions />
      <AboutStats />
      <AboutCTA />
      <Faq page="about" />
    </main>
  );
}