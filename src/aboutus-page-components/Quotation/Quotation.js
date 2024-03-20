import React from 'react'; 
import "./Quotation.css"
import bgVideo from "../../assets/bg-video.mp4"
import { Parallax } from 'react-parallax';

function Quotation() {
    const video = "https://picsum.photos/id/327/1920/1080"; 


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
    return (
       <div className='quote-comp-wrapper'>
           <Parallax bgImage={video} strength={200}>
               <div style={{ height: 700 }}>
                   <div style={insideStyles}>
                       <span className='quote-comp-wrapper-span'>I love the collaborative spirit, <br/> innovation & growth <br/> opportunities here.</span>
                   </div>
               </div>
           </Parallax>
       </div>
    );
}

export default Quotation