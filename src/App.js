import './App.css';
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// all the common components
import Navbar from './common-components/Navbar/Navbar';
import Footer from './common-components/Footer/Footer';

// all the pages 
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import BlogsPage from './pages/BlogsPage';
import ContactUsPage from './pages/ContactUsPage';


import Process from './services-page-components/Process/Process';

function App() {
  return (
    <div className='app'>
      <Router>
          <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/blogs' element={<BlogsPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/contact_us' element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
