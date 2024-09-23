import './App.css';
import React, { useEffect, useRef } from 'react';
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


// lenis js for smooth scrolling 
import lenis from '@studio-freight/lenis';

import Process from './services-page-components/Process/Process';

function App() {

  const scrollTargetRef = useRef(null);

  useEffect(() => {
    // Ensure the ref is attached to an element before initializing Lenis
    if (!scrollTargetRef.current) return;

    // Initialize Lenis with the target element
    const lenisInstance = new lenis({
      el: scrollTargetRef.current, // Specify the target element
      lerp: 0.5,
      smooth: true,
      // Add other options as needed
    });

    // Start Lenis.js
    lenisInstance.start();

    // Cleanup function to stop Lenis.js when the component unmounts
    return () => {
      lenisInstance.stop();
    };
  }, []);


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
          <Route path='#process' element={<Process />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
