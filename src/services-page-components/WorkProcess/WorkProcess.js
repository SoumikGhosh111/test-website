import React from 'react';
import "./WorkProcess.css"; 
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function WorkProcess() {
    return (
        <div className='work-rpocess-comp-wrapper'>
            <div className='work-rpocess-title work-rpocess-container-items' >
                HOW WE WORK
                <div className='ver-line mob-view-ver-line'></div>
            </div>
            <div className='work-rpocess-header work-rpocess-container-items'><span>Tailored Solutions for<br />
            Business Excellence</span>
                <div className='ph-no work-rpocess-icons' >
                    <div className='icons'><CallOutlinedIcon /> </div>
                    <a href='tel:+91-99080-78538'>+91-99080-78538</a>
                </div>
                <div className='mail-to work-rpocess-icons' >
                    <div className='icons'><EmailOutlinedIcon /> </div>
                    <a href='mainto:info@powermycode.com'>info@powermycode.com</a>
                </div>
            </div>
            <div className='work-rpocess-content work-rpocess-container-items'>
                <p>Experience business excellence with our array of tailored solutions. Our services are crafted to meet the unique demands of your industry, ensuring strategic alignment and maximum impact. From cutting-edge technology solutions to personalized consultancy, we prioritize your success journey.
</p>
                <span className='sub-span'>At PowerMyCode Pvt Ltd Solution, Our commitment to innovation, client-centricity, and continuous improvement defines our service philosophy. Dive into a world of strategic planning, operational efficiency, and transformative business solutions.</span> <br /> <br />
                <span>Whether you are a startup or an established enterprise, our services are designed to elevate your performance, amplify your strengths, and guide you toward sustained success.</span>

            </div>
        </div>
    )
}

export default WorkProcess