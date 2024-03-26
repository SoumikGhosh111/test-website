import React from 'react';
import "./StatsSection.css"

function StatsSection() {
    return (
        <div className='stats-section-wrapper'>
            <div className='stats-section-title'>
                STATS
                <div className='ver-line mob-view-ver-line'> </div>
            </div>
            <div className='stats-section-cards'>
                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>CLIENTS</span>
                    <div className='stats-line'></div>
                    <h1>200+</h1>
                    <p>Over 200 satisfied clients trust our expertise and exceptional services.</p>
                </div>

                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>PROJECTS</span>
                    <div className='stats-line'></div>
                    <h1>300+</h1>
                    <p>We've successfully completed over 300 projects, delivering outstanding results every time.</p>
                </div>


                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>HAPPY CLIENTS</span>
                    <div className='stats-line'></div>
                    <h1>100%</h1>
                    <p>Our focus on client satisfaction ensures a 100% happiness rate with our services.</p>
                </div>


                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>COMMITMENT</span>
                    <div className='stats-line'></div>
                    <h1>110%</h1>
                    <p>With our unwavering dedication, we give 110% commitment to every project we undertake.</p>
                </div>


                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>FOLLOWERS</span>
                    <div className='stats-line'></div>
                    <h1>1 Mio</h1>
                    <p>Join our community of 1 million loyal followers and be part of something extraordinary.</p>
                </div>


                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>TEAM</span>
                    <div className='stats-line'></div>
                    <h1>20</h1>
                    <p>Each member is a driving force, contributing unique skills, expertise, and passion to our journey.</p>
                </div>
            </div>
        </div>
    )
}

export default StatsSection