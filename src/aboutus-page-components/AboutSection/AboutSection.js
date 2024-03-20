import React from 'react';
import "./AboutSection.css"

function AboutSection() {
    return (
        <div className='about-section-wrapper'>
            <div className='about-us-title about-us-container-items' >
                ABOUT
                <div className='ver-line'></div>
            </div>
            <div className='about-us-header about-us-container-items'><span>Our Story, <br/> Our Journey</span></div>
            <div className='about-us-content about-us-container-items'>
                <p>In the tapestry of our organizational narrative, every thread weaves a story of passion, dedication, and purpose. Our journey is a testament to resilience, growth, and the pursuit of excellence. From humble beginnings to impactful milestones, each chapter reflects our commitment to innovation and unwavering integrity.</p>

                <span className='sub-span'>We are more than a company; we are a community, a collective of individuals driven by a shared vision. Explore the pages of our story, where every triumph, challenge, and decision has shaped the unique identity that defines us. Welcome to the heart of our narrative—welcome to our story.</span>

            </div>
        </div>
    )
}

export default AboutSection