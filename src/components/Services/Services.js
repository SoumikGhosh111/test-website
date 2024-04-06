import React, { useRef } from 'react'
import "./Services.css";
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

// importing framer motions
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

function Services() {
    const ref = useRef(null);
    const ref2 = useRef(null); 
    const ref3 = useRef(null); 
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const isInView = useInView(ref);
    const isInView2 = useInView(ref2); 
    const isInView3 = useInView(ref3); 
    const isInView4 = useInView(ref4);
    const isInView5 = useInView(ref5);
    const isInView6 = useInView(ref6);

    return (
        <div className='services-section-wrapper'>
            <div className='services-section-title'>
                SERVICES
                <div className='ver-line mob-view-ver-line'> </div>
            </div>
            <div className='services-section-cards'>
                <div className='services-section-items'
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateY(100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}

                >
                    <h1>
                        Web Application Developement
                    </h1>
                    <p>Harness the potential of the web with dynamic and responsive web applications that engage users and drive conversions.</p>
                    <span>STRATEGY SERVICES</span>
                    <div className='line'></div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Platform Integration Strategy
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Performance Optimization Tactics
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Security and Compliance Measures
                    </div>
                </div>

                <div className='services-section-items'
                    ref={ref2}
                    style={{
                        transform: isInView2 ? "none" : "translateY(100px)",
                        opacity: isInView2 ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <h1>
                        Mobile App Developement
                    </h1>
                    <p>Reach your audience on their favorite devices with intuitive and feature-rich mobile apps that deliver an exceptional user experience.</p>
                    <span>STRATEGY SERVICES</span>
                    <div className='line'></div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        ASO Strategy
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        User Engagement Tactics
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Cross-Platform Development
                    </div>
                </div>


                <div className='services-section-items'
                    ref={ref3}
                    style={{
                        transform: isInView3 ? "none" : "translateY(100px)", 
                        opacity: isInView3 ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <h1>
                        Custom Software Solutions
                    </h1>
                    <p>Whether it's automating processes or creating specialized tools, we craft tailor-made software that empowers your business to thrive.</p>
                    <span>STRATEGY SERVICES</span>
                    <div className='line'></div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Business Process Analysis
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        User-Centric Design Approach
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Scalability and Future-Proofing
                    </div>
                </div>

                <div className='services-section-items'
                    ref={ref4}
                    style={{
                        transform: isInView4 ? "none" : "translateY(100px)", 
                        opacity: isInView4 ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <h1>
                        UI/UX Design
                    </h1>
                    <p> Our design experts create visually stunning and user-centric interfaces that make your software not only functional but also delightful to use.</p>
                    <span>STRATEGY SERVICES</span>
                    <div className='line'></div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        User-Focused Principle
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Visual Storytelling
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Iterative Design Process
                    </div>
                </div>



                <div className='services-section-items'
                    ref={ref5}
                    style={{ 
                        transform: isInView5 ? "none" : "translateY(100px)", 
                        opacity: isInView5 ? 1 : 0, 
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <h1>
                        E-Commerce Solutions
                    </h1>
                    <p>Open up new avenues of revenue with robust and secure e-commerce platforms that ensure seamless online transactions.</p>
                    <span>STRATEGY SERVICES</span>
                    <div className='line'></div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Market Penetration Strategies
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Conversion Optimization Tactics
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Customer Retention Strategies
                    </div>
                </div>



                <div className='services-section-items'
                     ref={ref6}
                     style={{ 
                         transform: isInView6 ? "none" : "translateY(100px)", 
                         opacity: isInView6 ? 1 : 0, 
                         transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                     }}
                >
                    <h1>
                        Consulting Services
                    </h1>
                    <p> Leverage our industry insights and technical expertise to make informed decisions about your software strategy and architecture.</p>
                    <span>STRATEGY SERVICES</span>
                    <div className='line'></div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Strategic Planning and Guidance
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Technology Roadmap Development
                    </div>
                    <div className='list-items'>
                        <div className='tick'>
                            <DoneRoundedIcon />
                        </div>
                        Risk Assessment and Mitigation
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;