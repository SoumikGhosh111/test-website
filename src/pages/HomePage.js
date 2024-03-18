import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'; 
import MarqueeImages from '../common-components/Marquee/MarqueeImages';
import AboutUsComp from '../components/About/AboutUsComp';
import Services from '../components/Services/Services';
import OurProcess from '../components/OurProcess/OurProcess';
import OurMisson from '../components/OurMisson/OurMisson';
import OurValues from '../components/OurValues/OurValues';
import TempComponent from '../common-components/TempComponenet/TempComponent';
import Blogs from '../components/Blogs/Blogs';
function HomePage() {
  return (
    <>
        <HeroSection />
        <MarqueeImages />
        <AboutUsComp />
        <Services />
        <OurProcess />
        <OurMisson />
        <TempComponent />
        <OurValues />
        <Blogs />
    </>
  )
}

export default HomePage