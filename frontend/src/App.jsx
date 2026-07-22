import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your structural components
import Header from './components/Header';
import Footer from './components/Footer';

// Import your pages
import Home from './pages/Home';
// You will import other pages here as you build them
import About from './pages/About';
// import Contact from './pages/Contact';
// import BusinessActivities from './pages/BusinessActivities';
// import GlobalPresence from './pages/GlobalPresence';
// import Leadership from './pages/Leadership';
import Contact from './pages/Contact'; // Import the Contact page
import NotFound from './pages/NotFound'; //
import Blogs from './pages/BlogMain'; // Import the Blogs component


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
            {/* Add your other routes here as you create the files */}
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/business" element={<BusinessActivities />} />  
            <Route path="/global-presence" element={<GlobalPresence />} />
            <Route path="/leadership" element={<Leadership />} /> */}
            <Route path="/blogs" element={<Blogs />} /> {/* Add the Blogs route */}

            <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */
            }
            
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