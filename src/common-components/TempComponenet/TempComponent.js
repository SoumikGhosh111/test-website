import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

import "./TempComponent.css"
import Stars from '../Review/Stars';

function TempComponent() {
    const [paraStrength, setParaStrength] = useState(100)
    // const image = "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg";
    const image = "https://img.freepik.com/free-photo/creative-people-working-office_23-2147656715.jpg?t=st=1729062944~exp=1729066544~hmac=aef5bf548f29ab85e8751fdf4af04448f559651f45faefe0e760318e64e5b44e&w=1060"
    const unQuote = "https://assets-global.website-files.com/653e50f60ac329e82ba89473/6542276b627fc9baf1f06120_quote-icon-inverse.svg";
    const googleLogo = "https://powermycode.com/assets/img/home-5/google-1.svg";
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
        <div className='temp-comp-wrapper'>
            <Parallax bgImage={image} strength={paraStrength}>
                <div style={{ height: 700 }}>
                    <div style={insideStyles}>
                        <span className='temp-comp-wrapper-span'>
                            <div><img src={unQuote} /></div>
                            Their commitment surpassed our expectations. An innovative collaboration!
                            {/* <div className='company-review'>
                                <img src={googleLogo} />
                                <div className='google-ratting'><Stars rate={4} />4.5/5</div>
                            </div> */}
                        </span>
                        
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