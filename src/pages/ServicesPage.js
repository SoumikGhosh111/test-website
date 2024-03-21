import React from 'react'; 
import ServicesPageHeroSection from '../services-page-components/ServicesPageHeroSection/ServicesPageHeroSection';
import MarqueeImages from '../common-components/Marquee/MarqueeImages';
import WorkProcess from '../services-page-components/WorkProcess/WorkProcess';
import Process from '../services-page-components/Process/Process';

function ServicesPage() {
  return (
    <>
      <ServicesPageHeroSection />
      <MarqueeImages />
      <WorkProcess />
      <Process />
    </>
  )
}

export default ServicesPage