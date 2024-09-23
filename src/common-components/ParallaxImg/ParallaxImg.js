import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ParallaxImg.css"

function ParallaxImg() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });


    const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);

    return (
        <div>ParallaxImg</div>
    )
}

export default ParallaxImg;