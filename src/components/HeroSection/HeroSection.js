import React from 'react'
import "./HeroSection.css";
import Button from "../../common-components/Button/Button"
import bgVideo from "../../assets/bg-video.mp4";


function HeroSection() {
    return (
        <div className='hero-section-wrapper'>
            <div className='hero-section-container-1'>
                <div className='hero-section-container-1-content'>
                    <span><span>Innovate <br /> Today, <br /></span> Lead <br />Tommorow.</span>
                    <p>Navigate the future with our innovative consulting, where today's breakthroughs become the leadership strategies propelling your business into tomorrow's forefront.</p>
                    <div className='buttons'>
                        <Button text={"Our Services"} bgColor={"var(--white-white)"} color={"var(--darkblue)"} />
                        <Button text={"About Us"} bgColor={"var(--blur-bg)"} color={"var(--white-white)"} />
                    </div>
                </div>

            </div>
            <div className='hero-section-container-2'>
                <video playsInline="playsInline" autoPlay="autoPlay" muted="muted" loop="loop">
                    <source src={bgVideo} type='video/mp4' />
                    Browser not supported
                </video>
                <div className='video-bg'>
                </div>
                <div className='rating'>

                </div>
            </div>
        </div>
    )
}

export default HeroSection