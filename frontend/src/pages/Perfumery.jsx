import ServiceHero from '../components/Services/ServiceHero';
import TrustedMarkets from '../components/TrustedMarkets';
import ServiceAbout from '../components/Services/ServiceAbout';       // IMPORT NEW COMPONENT
import ServiceGrid from '../components/Services/ServiceGrid'; 
import ProductShowcase from '../components/Services/ProductShowcase';
import PersonalCareSolutions from '../components/PersonalCareSolutions';
import WhyChooseUs from '../components/WhyChooseUs';
import Faq from '../components/FAQ/Faq';

export default function Perfumery() {
  const category = "perfumery";

  return (
    <main className="w-full">
      <ServiceHero category={category} />
      <TrustedMarkets category={category} />
      
        <ServiceAbout category={category} />
        <ProductShowcase category={category} />
        <ServiceGrid category={category} />
      <PersonalCareSolutions category={category} />
      <WhyChooseUs category={category} />
      
      {/* FAQ for Perfumery */}
      <Faq page="perfumery" />
    </main>
  );
}