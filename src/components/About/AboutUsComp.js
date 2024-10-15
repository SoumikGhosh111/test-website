import React from 'react';
import "./AboutUsComp.css";

function AboutUsComp() {
    return (
        <div className='about-us-comp-wrapper' id='about_us'>
            <div className='about-us-title about-us-container-items' >
                ABOUT
                <div className='ver-line mob-view-ver-line'></div>
            </div>
            <div className='about-us-header about-us-container-items'><span>Navigating Success: <br/>
                Your Strategic  Partner</span></div>
            <div className='about-us-content about-us-container-items'>
                <p>At Powermycode Solutions Private Limited, We empower success through tailored strategic solutions. From innovative consulting to business development and monitoring, we navigate the complexities of the business landscape with you.</p>
                <span className='sub-span'>Our team is dedicated to crafting strategies that align with your vision, consulting services that address challenges, and driving business development for expansion. We monitor your operations with precision, ensuring continuous improvement and sustainable growth.</span> <br/> <br/>
                <span>With a commitment to excellence, innovation, and client success, discover how our integrated services can elevate your business journey and unlock its full potential.</span>

                <div className='link-to-about-us'>
                <a href='/about'>About us</a>
                </div>

            </div>
        </div>
    )
}

export default AboutUsComp; 