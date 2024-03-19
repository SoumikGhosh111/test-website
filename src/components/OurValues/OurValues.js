import React from 'react';
import "./OurValues.css";

function OurValues() {
    return (
        <div className='our-values-comp-wrapper'>
            <div className='our-values-title our-values-container-items' >
                OUR VALUES
                <div className='ver-line'></div>
            </div>
            <div className='our-values-header our-values-container-items'><span>Guiding Principles:<br/>
            Our Values Unveiled</span></div>
            <div className='our-values-content our-values-container-items'>
                <p>In the tapestry of PowerMyCode, our core values are the threads weaving excellence. Integrity is the backbone, anchoring our commitment to transparency, honesty, and ethical practices.</p>
                <span className='sub-span'>Innovation is the driving force propelling us forward, infusing every project with creativity and forward-thinking solutions. Collaboration is the heartbeat, creating a vibrant environment where diverse talents converge to achieve greatness.</span> <br/> <br/>
                <span>These values are not just words; they are the pillars shaping our culture, defining our actions, and guiding us on a journey of collective success. Join us in unveiling the essence of Nikka, where our values illuminate the path to excellence.</span>

            </div>
        </div>
    )
}

export default OurValues; 