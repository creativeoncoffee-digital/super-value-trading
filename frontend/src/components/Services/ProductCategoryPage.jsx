import ServiceHero from './ServiceHero';
import TrustedMarkets from '../TrustedMarkets';
import FMCGShowcase from './FMCGShowcase';
import ProductShowcase from './ProductShowcase';
import PersonalCareSolutions from '../PersonalCareSolutions';
import BikeShowcase from '../BikeShowcase';
import CarShowcase from '../CarShowcase';
import WhyChooseUs from '../WhyChooseUs';
import { productData } from '../../data/ProductData';

const sectionRegistry = {
  trustedMarkets: TrustedMarkets,
  fmcgShowcase: FMCGShowcase,
  productShowcase: ProductShowcase,
  solutions: PersonalCareSolutions,
  bikeShowcase: BikeShowcase,
  carShowcase: CarShowcase,
  whyChooseUs: WhyChooseUs,
};

export default function ProductCategoryPage({ category }) {
  const categoryData = productData[category];

  if (!categoryData) {
    return <div className="h-[60vh] flex items-center justify-center">Category not found.</div>;
  }

  return (
    <div>
      <ServiceHero category={category} />

      {(categoryData.sections || []).map((section, index) => {
        const sectionConfig = typeof section === 'string' ? { key: section } : section;
        const SectionComponent = sectionRegistry[sectionConfig.key];

        if (!SectionComponent) {
          return null;
        }

        return (
          <SectionComponent
            key={`${sectionConfig.key}-${index}`}
            category={category}
            {...(sectionConfig.props || {})}
          />
        );
      })}
    </div>
  );
}