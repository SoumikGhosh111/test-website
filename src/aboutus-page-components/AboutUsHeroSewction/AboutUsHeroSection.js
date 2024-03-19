import React from 'react'; 
import "./AboutUsHeroSection.css"; 
import { Parallax } from 'react-parallax';

function AboutUsHeroSection() {
    const image1 = "https://picsum.photos/id/247/1920/1080";
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
  return (
    <div className='about-us-hero-wrapper'>
         <Parallax bgImage={image1} strength={200}>
                <div style={{ height:700 }}>
                    <div style={insideStyles}>
                        <span className='footer-header'>A Journey of Passion <br/> and Dedication</span>

                        <p className='footer-para'>
                        A journey fueled by passion and dedication, shaping <br/> meaningful experiences and success.
                        </p>
                    </div>
                </div>
            </Parallax>
    </div>
  )
}

export default AboutUsHeroSection