import React, {useState, useEffect} from 'react'; 
import "./Quotation.css"
import bgVideo from "../../assets/bg-video.mp4"
import { Parallax } from 'react-parallax';
import Stars from '../../common-components/Review/Stars';

function Quotation() {
    const video = "https://images.unsplash.com/photo-1504119089809-1d5100a33f27?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    const [paraStrength ,setParaStrength] = useState(200); 
    const trustPilotLogo = "https://powermycode.com/assets/img/home-5/trustpilot-1.svg"; 
    const unQuote = "https://assets-global.website-files.com/653e50f60ac329e82ba89473/6542276b627fc9baf1f06120_quote-icon-inverse.svg";

    const insideStyles = {
     // background: "white",
     width: "100%",
     height: "100%",
     position: "absolute",
     top: "50%",
     left: "50%",
     transform: "translate(-50%,-50%)",
     display: "flex",
     justifyContent: "center",
     alignItems: "flex-start",
     flexDirection: "column",

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
       <div className='quote-comp-wrapper'>
           <Parallax bgImage={video} strength={paraStrength}>
               <div style={{ height: 700 }}>
                   <div style={insideStyles}>
                   
                       <span className='quote-comp-wrapper-span'>
                       <div><img src={unQuote} /></div>
                        I love the collaborative spirit, innovation & growth  opportunities here.
                       <div className='company-review'>
                                <img src={trustPilotLogo} />
                                <div className='google-ratting'><Stars rate={5} />5/5</div>
                            </div>
                       </span>
                   </div>
               </div>
           </Parallax>
       </div>
    );
}

export default Quotation; 
// https://images.pexels.com/photos/5092813/pexels-photo-5092813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1