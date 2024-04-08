import React, { useState, useEffect } from 'react';
import "./ServicesPageHeroSection.css";
import { Parallax } from 'react-parallax';

// importing motion from framer motion
import { motion } from 'framer-motion';

function ServicesPageHeroSection() {
  const image1 = "https://picsum.photos/id/541/1920/1080";
  const [paraStrength, setParaStrength] = useState(200)
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
      setParaStrength(isPortrait ? 40 : paraStrength);
    };

    window.addEventListener('resize', handleOrientationChange);

    // Call the handler right away so state gets updated with initial window size
    handleOrientationChange();

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);
  return (
    <div className='services-page-hero-wrapper'>
      <Parallax bgImage={image1} strength={paraStrength}>
        <div style={{ height: 700 }}>
          <div style={insideStyles}>
            <motion.div className='services-hero-content'
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <span className='footer-header'>Crafting Solutions For <br />
                Your Unique Needs</span>

              <p className='footer-para'>
                Discover service excellence. We craft tailored solutions to <br />meet your unique needs and fuel success.
              </p>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default ServicesPageHeroSection