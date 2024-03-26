import React, {useState, useEffect} from 'react';

import "./OurProcess.css"
import bgImg from "../../assets/parallax-hook-bg.jpg";
import { Parallax } from "react-parallax";

function OurProcess() {
  const [paraStrength, setParaStrength] = useState(200); 
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
  const paralaxStyle = { 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }


  useEffect(() => {
        const handleOrientationChange = () => {
            const isPortrait = window.matchMedia("(orientation: portrait)").matches;
            setParaStrength(isPortrait ? 40 : paraStrength);
        };
    
        window.addEventListener('resize', handleOrientationChange);
    
        // Call the handler right away so state gets updated with initial window size
        handleOrientationChange();
    
        return () => {
            window.removeEventListener('resize', handleOrientationChange);
        };
    }, []);

  // const image1 = "../../assets/parallax-hook-bg.jpg"
  return (
    <div className='our-process-wrapper'>
      <div className='our-process-wrapper-img-bg' >
        <Parallax bgImage={ bgImg} strength={paraStrength} style={paralaxStyle}>
          <div style={{ height: 778,  }}>
            <div style={insideStyles}>

            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}


export default OurProcess
//         <img src='https://plus.unsplash.com/premium_photo-1672280727826-44018d85e422?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// ' className='background-img' alt='Process' ref={parallaxRef} />