import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ParallaxImg.css"; 
import webdev from "../../assets/web-dev.jpg"

function ParallaxImg({img, sentence, className}) {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });


    const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);

    const yInMob =  useTransform(scrollYProgress, [0, 1], [-50, 0]); 

    return (
        <div style={{ overflow: "hidden", width: '100%', height: '100%' }}>
            {/* <div className="first"></div> */}
            <div className="second" ref={container}>
                <div className="second-div-inner">
                    <motion.img src={img} style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center', y: window.innerWidth < 768 ? yInMob : y}} className="parallax-img"/>
                    <span className={className}>{sentence}</span>
                </div>
            </div>
            {/* <div className="third"></div> */}

        </div>
    )
}

export default ParallaxImg;