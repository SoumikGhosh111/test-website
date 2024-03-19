import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

// all the common components
import Navbar from './common-components/Navbar/Navbar';
import Footer from './common-components/Footer/Footer';

// all the pages 
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import BlogsPage from './pages/BlogsPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUsPage />}/>
          <Route path='/blogs' element={<BlogsPage />}/>
          <Route path='/services' element={<ServicesPage />}/>
          <Route  path='/contact_us' element={<ContactUsPage />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
