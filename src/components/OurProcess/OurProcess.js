import React, { useEffect, useRef } from 'react'; 

import "./OurProcess.css"

function OurProcess() {
    const parallaxRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          const parallaxElement = parallaxRef.current;
          if (parallaxElement) {
            parallaxElement.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
     }, []);
     return (
        <div className='our-process-wrapper'>
          <div className='our-process-wrapper-img-bg' >
            <img src='https://plus.unsplash.com/premium_photo-1672280727826-44018d85e422?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
' className='background-img' alt='Process' ref={parallaxRef}/>
          </div>
        </div>
     );
    }
    

export default OurProcess