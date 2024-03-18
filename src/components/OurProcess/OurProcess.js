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
            <img src='https://picsum.photos/id/250/1080/1920' className='background-img' alt='Process' ref={parallaxRef}/>
          </div>
        </div>
     );
    }
    

export default OurProcess