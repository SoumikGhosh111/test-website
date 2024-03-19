import React, { useEffect, useRef } from 'react'; 

import "./TempComponent.css"

function TempComponent() {
    const parallaxRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          const parallaxElement = parallaxRef.current;
          if (parallaxElement) {
            parallaxElement.style.transform = `translateY(-${scrollPosition * 0.12}px)`;
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
     }, []);
     return (
        <div className='temp-comp-wrapper'>
          <div className='temp-comp-wrapper-img-bg' >
            <img src='https://picsum.photos/id/500/1920/1080' className='background-img' alt='Process' ref={parallaxRef}/>
           <div className='quotes'>
           <span >" <br/>Their commitment surpassed our expectations. A innovative collaboration! </span>
             </div>
          </div>
        </div>
     );
    }
    

export default TempComponent; 