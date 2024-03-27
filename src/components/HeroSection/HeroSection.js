import React from 'react'
import "./HeroSection.css";
import Button from "../../common-components/Button/Button"
import bgVideo from "../../assets/bg-video.mp4";
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';


function HeroSection() {

    const handleClick = () => { 
        window.location.href = '#our_colabrators'
    }
    return (
        <div className='hero-section-wrapper'>
            <div className='hero-section-container-1'>
                <div className='hero-section-container-1-content'>
                    <span><span>Innovate <br /> Today, <br /></span> Lead <br />Tommorow.</span>
                    <p>Navigate the future with our innovative consulting, where today's breakthroughs become the leadership strategies propelling your business into tomorrow's forefront.</p>
                    <div className='buttons'>
                        <Button text={"Our Services"} bgColor={"var(--white-white)"} color={"var(--darkblue)"} linkToOpen={"/services"} />
                        <Button text={"About Us"} bgColor={"var(--blur-bg)"} color={"var(--white-white)"} linkToOpen ={"/about"}/>
                    </div>
                </div>

            </div>
            <div className='hero-section-container-2'>
                <video playsInline="playsIvideo-bgnline" autoPlay="autoPlay" muted="muted" loop="loop">
                    <source src={bgVideo} type='video/mp4' />
                    Browser not supported
                </video>
                <div className='video-bg'>
                </div>
                <div className='rating'>
                    <div className='scroll-animation-icon'>
                        SCROLL DOWN <div className='scroll-icon' onClick={handleClick}><SouthRoundedIcon sx={{fontSize: "18px"}}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection