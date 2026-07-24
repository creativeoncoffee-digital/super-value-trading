import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your structural components
import Header from './components/Header';
import Footer from './components/Footer';

// Import your pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'; 
import NotFound from './pages/NotFound'; 
import Blogs from './pages/BlogMain'; 
import Perfumery from './pages/Perfumery'; 
import Automobliles from './pages/Automobiles'; 
import PersonalCare from './pages/Product'; 
// import BusinessActivities from './pages/BusinessActivities'; // Import this when ready for the "Others" link

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* The Header will always show at the top */}
        <Header />

        {/* The main content area that changes based on the URL */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> 
            
            {/* Products & Services Routes */}
            <Route path="/perfumery" element={<Perfumery />} /> 
            <Route path="/automobiles" element={<Automobliles />} /> 
            <Route path="/personal-care" element={<PersonalCare />} /> 
            
            {/* Fallback for "Others" dropdown link (Uncomment and add component when ready) */}
            {/* <Route path="/business" element={<BusinessActivities />} /> */}

            <Route path="/blogs" element={<Blogs />} /> 
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* The Footer will always show at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;