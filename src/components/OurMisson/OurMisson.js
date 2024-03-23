import React from 'react';
import "./OurMisson.css";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function OurMisson() {
    return (
        <div className='our-misson-comp-wrapper'>
            <div className='our-misson-title our-misson-container-items' >
                OUR MISSON
                <div className='ver-line mob-view-ver-line'></div>
            </div>
            <div className='our-misson-header our-misson-container-items'><span>Innovation in Action: <br/>
            Our Mission Revealed</span>
                <div className='ph-no our-misson-icons' >
                    <div className='icons'><CallOutlinedIcon /> </div>
                    <a href='tel:+91-99080-78538'>+91-99080-78538</a>
                </div>
                <div className='mail-to our-misson-icons' >
                    <div className='icons'><EmailOutlinedIcon /> </div>
                    <a href='mainto:info@powermycode.com'>info@powermycode.com</a>
                </div>
            </div>
            <div className='our-misson-content our-misson-container-items'>
                <p>At PowerMyCode, innovation isn't just a buzzword. It's the heartbeat of our mission. With a relentless commitment to excellence and a client-centric approach, we stand at the forefront of empowering businesses through transformative solutions.</p>

                <span className='sub-span'> Join us as we pioneer innovation, infusing creativity into every project and collaborating with unwavering dedication to our clients' success.</span> <br/> <br/>
                <span>Welcome to a mission that transcends mere statements—it's a promise to craft a future where your success is our sole mission.</span>

            </div>
        </div>
    )
}

export default OurMisson; 