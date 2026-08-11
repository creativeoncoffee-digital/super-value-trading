import ServiceHero from '../components/Services/ServiceHero';
import TrustedMarkets from '../components/TrustedMarkets';
import ServiceAbout from '../components/Services/ServiceAbout';
import PerfumeryPrivateLabelShowcase from '../components/Services/PerfumeryPrivateLabelShowcase';
import PerfumeryPrivateLabelProcess from '../components/Services/PerfumeryPrivateLabelProcess';
import ProductShowcase from '../components/Services/ProductShowcase';
import PerfumeryVisualStory from '../components/Services/PerfumeryVisualStory';
import PerfumeryCapabilities from '../components/Services/PerfumeryCapabilities';
import ServiceGrid from '../components/Services/ServiceGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import Faq from '../components/FAQ/Faq';
import ServiceCTA from '../components/ServiceCTA';
import Breadcrumb from '../components/Breadcrumb';

export default function Perfumery() {
  const category = "perfumery";

  return (
    <main className="w-full">
      <Breadcrumb />
      
      <ServiceHero category={category} />
      <TrustedMarkets category={category} />
      <ServiceAbout category={category} />
      
      {/* Conditionally render the Private Label Showcase instead of standard ServiceGrid */}
      
        <PerfumeryPrivateLabelShowcase category={category} />
    
        <ServiceGrid category={category} />
    

      <PerfumeryPrivateLabelProcess category={category} />
      
      {/* Product Showcase acts as the distinct "Super Value - Our Own Brand" section based on data */}
      <ProductShowcase category={category} />
      
      <PerfumeryVisualStory category={category} />
      <PerfumeryCapabilities category={category} />
      
      <WhyChooseUs category={category} />
      <ServiceCTA category={category} />
      <Faq page="perfumery" />
    </main>
  );
}   