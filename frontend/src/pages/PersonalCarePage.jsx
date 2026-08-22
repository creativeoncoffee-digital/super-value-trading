import ServiceHero from '../components/Services/ServiceHero';
import TrustedMarkets from '../components/TrustedMarkets';
import ServiceAbout from '../components/Services/ServiceAbout';       // IMPORT NEW COMPONENT
import ServiceGrid from '../components/Services/ServiceGrid'; 
import ProductShowcase from '../components/Services/ProductShowcase';
        // IMPORT NEW COMPONENT
import PersonalCareSolutions from '../components/PersonalCareSolutions';
import WhyChooseUs from '../components/WhyChooseUs';
import Faq from '../components/FAQ/Faq';
import ServiceCTA from '../components/ServiceCTA';
import AestheticShowcase from '../components/Services/AestheticShowcase';
import Breadcrumb from '../components/Breadcrumb';
import WhatWeOffer from '../components/Services/WhatWeOffer';
import CreateYourBrand from '../components/Services/CreateYourBrand'; 



export default function PersonalCarePage() {
  const category = "personal-care";

  return (
    <main className="w-full">
      <Breadcrumb />

      <ServiceHero category={category} />
        <ServiceGrid category={category} />
      <ServiceAbout category={category} />
      <CreateYourBrand category={category} />
   
      
      {/* <PersonalCareSolutions category={category} /> */}
      <WhyChooseUs category={category} />
      <WhatWeOffer category={category} />
      <ServiceCTA category={category} />
      {/* <AestheticShowcase /> */}
      <Faq page="fmcg" />
    </main>
  );
}