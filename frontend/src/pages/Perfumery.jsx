import ProductCategoryPage from '../components/Services/ProductCategoryPage';
import Faq from '../components/FAQ/Faq'; // Make sure to import the Faq component

export default function Perfumery() {
  return (
    <main>
      <ProductCategoryPage category="perfumery" />
      <Faq page="perfumery" />
    </main>
  );
}