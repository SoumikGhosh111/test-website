import React, {useEffect} from 'react'; 
import ServicesPageHeroSection from '../services-page-components/ServicesPageHeroSection/ServicesPageHeroSection';
import MarqueeImages from '../common-components/Marquee/MarqueeImages';
import WorkProcess from '../services-page-components/WorkProcess/WorkProcess';
import Process from '../services-page-components/Process/Process';
import ProjectDetails from '../services-page-components/Projects/ProjectDetails';

// import { useLocation } from 'react-router-dom';

function ServicesPage() {
  // const location = useLocation(); 
  // const {scrollTo} = location.pathname || {}; 

  //   useEffect(() => { 
  //     if(scrollTo){ 
  //       const element = document.getElementById(scrollTo); 
  //       if(element){ 
  //         element.scrollIntoView({ 
  //           behavior: "smooth"
  //         })
  //       }
  //     }
  //   }, [scrollTo]); 

  return (
    <>
      <ServicesPageHeroSection />
      <MarqueeImages />
      <WorkProcess />
      <div id='process_section'><Process /></div>
      <ProjectDetails />
    </>
  )
}

export default ServicesPage;