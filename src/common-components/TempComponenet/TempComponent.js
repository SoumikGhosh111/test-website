import React, { useEffect, useState } from 'react'; 
import { Parallax } from 'react-parallax';

import "./TempComponent.css"

function TempComponent() {
const [paraStrength, setParaStrength] = useState(200)
 const image = "https://picsum.photos/id/323/1920/1080"; 

     const insideStyles = {
      // background: "white",
      // border: "1px solid red",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
  };

  useEffect(() => {
        const handleOrientationChange = () => {
            const isPortrait = window.matchMedia("(orientation: portrait)").matches;
            setParaStrength(isPortrait ? 46 : paraStrength);
        };
    
        window.addEventListener('resize', handleOrientationChange);
    
        // Call the handler right away so state gets updated with initial window size
        handleOrientationChange();
    
        return () => {
            window.removeEventListener('resize', handleOrientationChange);
        };
    }, []);

     return (
        <div className='temp-comp-wrapper'>
            <Parallax bgImage={image} strength={paraStrength}>
                <div style={{ height: 700 }}>
                    <div style={insideStyles}>
                        <span className='temp-comp-wrapper-span'> Their commitment surpassed our expectations. A innovative collaboration!</span>
                    </div>
                </div>
            </Parallax>
        </div>
     );
    }
    

export default TempComponent; 




// const parallaxRef = useRef(null);
// useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.pageYOffset;
//       const parallaxElement = parallaxRef.current;
//       if (parallaxElement) {
//         parallaxElement.style.transform = `translateY(-${scrollPosition * 0.12}px)`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//  }, []);

{/* <div className='temp-comp-wrapper-img-bg' >
            <img src='https://picsum.photos/id/500/1920/1080' className='background-img' alt='Process' ref={parallaxRef}/>
           <div className='quotes'>
           <span >" <br/>Their commitment surpassed our expectations. A innovative collaboration! </span>
             </div>
          </div> */}