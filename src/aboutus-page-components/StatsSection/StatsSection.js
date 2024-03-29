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
                    <h1>7</h1>
                    <p>Seven satisfied clients who trust our punctuality and exceptional services.</p>
                </div>

                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>PROJECTS</span>
                    <div className='stats-line'></div>
                    <h1>4</h1>
                    <p>Diligently managing 4 ongoing projects, with 3 in the pipeline and 4 successful past completions.</p>
                </div>


                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>HAPPY CLIENTS</span>
                    <div className='stats-line'></div>
                    <h1>100%</h1>
                    <p>Our unwavering commitment ensures a 100% happiness rate with our punctual delivery.</p>
                </div>


                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>COMMITMENT</span>
                    <div className='stats-line'></div>
                    <h1>110%</h1>
                    <p> With our dedication to punctuality, we ensure on-time delivery for every project we undertake.</p>
                </div>


                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>FOLLOWERS</span>
                    <div className='stats-line'></div>
                    <h1>400+</h1>
                    <p> Join our growing community of 400 followers across all social media platforms.</p>
                </div>


                <div className='stats-section-items'>
                    <span className='stats-section-card-title'>TEAM</span>
                    <div className='stats-line'></div>
                    <h1>20</h1>
                    <p>A dedicated team of 20 members, each contributing their unique skills, expertise, and passion to our projects.</p>
                </div>
            </div>
        </div>
    )
}

export default StatsSection