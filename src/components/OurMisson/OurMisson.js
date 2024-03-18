import React from 'react';
import "./OurMisson.css";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function OurMisson() {
    return (
        <div className='our-misson-comp-wrapper'>
            <div className='our-misson-title our-misson-container-items' >
                OUR MISSON
                <div className='ver-line'></div>
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
                <p>Our mission at PowerMyCode is a dynamic force—innovation in action, commitment to excellence, and client-centric values. We stand at the forefront of empowering businesses through transformative solutions that redefine success.</p>
                <span className='sub-span'>Our mission is to pioneer innovation, infuse creativity into every project, and collaborate with unwavering commitment to client success. At Nikka, our journey is guided by a vision that prioritizes integrity, adaptability, and the pursuit of excellence.</span> <br/> <br/>
                <span>Join us as we unfold a future where businesses not only survive but thrive, and success is a continuous evolution. Welcome to a mission that goes beyond statements—it's a promise of crafting a future where your success is our mission.</span>

            </div>
        </div>
    )
}

export default OurMisson; 