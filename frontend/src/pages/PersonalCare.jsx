import ServiceHero from '../components/Services/ServiceHero';
import ProductShowcase from '../components/Services/ProductShowcase';

export default function PersonalCarePage() {
  return (
    <div>
      <ServiceHero category="personal-care" />
      <ProductShowcase />
      {/* The rest of your page content goes here */}
    </div>
  )
}