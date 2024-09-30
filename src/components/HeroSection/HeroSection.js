import React, {useEffect, useRef} from 'react'
import "./HeroSection.css";
import Button from "../../common-components/Button/Button"
import bgVideo from "../../assets/bg-video.mp4";
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import Stars from '../../common-components/Review/Stars';

import demoBg from "../../assets/demo-bg-3.mp4"; 


// importing framer motions 
import { motion } from 'framer-motion';

function HeroSection() {

    const videoRef = useRef(null);
    
    useEffect(() => { 
        if(videoRef.current){ 
            videoRef.current.playbackRate = 1.5; //controling the video speed
        }
    }, []); 

    const handleClick = () => {
        window.location.href = '#about_us'
    }
    return (
        <div className='hero-section-wrapper'>
            <div className='hero-section-container-1'>
                <motion.div className='hero-section-container-1-content'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <span>
                        <span>Innovate <br /> Today, <br /></span> Lead <br />Tommorow.
                    </span>
                    <p>Navigate the future with our innovative consulting, where today's breakthroughs become the leadership strategies propelling your business into tomorrow's forefront.</p>
                    <div className='buttons'>
                        <Button text={"Our Services"} bgColor={"var(--white-white)"} color={"var(--darkblue)"} linkToOpen={"/services"} />
                        <Button text={"About Us"} bgColor={"var(--blur-bg)"} color={"var(--white-white)"} linkToOpen={"/about"} />
                    </div>
                </motion.div>

            </div>
            <div className='hero-section-container-2'>
                <video playsInline="playsIvideo-bgnline" autoPlay="autoPlay" muted="muted" loop="loop" ref={videoRef}>
                    <source src={demoBg} type='video/mp4' />
                    Browser not supported
                </video>
                <div className='video-bg'>
                </div>
                <div className='rating'>
                    <div className='scroll-animation-icon'>
                        SCROLL DOWN <div className='scroll-icon' onClick={handleClick}><SouthRoundedIcon sx={{ fontSize: "18px" }} /></div>
                    </div>
                    {/* <div className='stars-images-hero'>
                        <div className='review-stars'>
                            <Stars rate={5} /> 
                            Trusted by our clients and partners.
                        </div>

                        <div className='stars-images-hero-video-bg'>
                            <div className='stars-images-hero-video-bg-items stars-images-item-1'>
                                <img src='https://picsum.photos/id/260/50/50' />
                            </div>
                            <div className='stars-images-hero-video-bg-items  stars-images-item-2'>
                                <img src='https://picsum.photos/id/261/50/50' />
                            </div>
                            <div className='stars-images-hero-video-bg-items stars-images-item-3'>
                                <img src='https://picsum.photos/id/264/50/50' />
                            </div>
                            <div className='stars-images-hero-video-bg-items stars-images-item-4'>
                                <img src='https://picsum.photos/id/263/50/50' />
                            </div>
                        </div>


                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection