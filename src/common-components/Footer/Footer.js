import React, { useEffect, useState } from 'react'
import "./Footer.css";
import { Parallax } from "react-parallax";
import Button from '../Button/Button';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import bgImg from "../../assets/parallax-hook-bg.jpg";
import {useNavigate} from 'react-router-dom'


function Footer() {
    const [paraStrength, setParaStrength] = useState(100)
    const image1 =
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ";
    const insideStyles = {
        // background: "white",
        // border: "1px solid red",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };
    const navigate = useNavigate(); 
 

    const paraStyling = { 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    useEffect(() => {
            const handleOrientationChange = () => {
                const isPortrait = window.matchMedia("(orientation: portrait)").matches;
                setParaStrength(isPortrait ? 40 : paraStrength);
            };
        
            window.addEventListener('resize', handleOrientationChange);
        
            // Call the handler right away so state gets updated with initial window size
            handleOrientationChange();
        
            return () => {
                window.removeEventListener('resize', handleOrientationChange);
            };
        }, []);


       
    
    return (
        <div className='footer-wrapper'>
            <Parallax bgImage={image1} strength={paraStrength}>
                <div style={{ height: 600 }}>
                    <div style={insideStyles}>
                        <span className='footer-header'>Action Now: Propel Your Journey to Success</span>

                        <p className='footer-para'>
                            Seize the moment. Click now to propel your journey and  unlock the door to success.
                        </p>
                        <div className='footer-buttons'>
                            <Button text={"Get Started"} bgColor={"var(--white)"} color={"var(--darkblue)" } linkToOpen={"contact_us"}/>
                            <Button text={"About Us"} bgColor={"var(--blur-bg)"} color={"var(--white)" } linkToOpen={"/about"} />
                        </div>
                    </div>
                </div>
            </Parallax>
            <div className='footer-body'>
                <h3>Connect With Us</h3>
                <div className='footer-ph-email'>
                    <div className='footer-items'>
                        <div className='footer-icons'><CallOutlinedIcon /></div>
                        <a href='tel:+91-99080-78538'>+91-99080-78538</a>
                    </div>

                    <div className='footer-items'>
                        <div className='footer-icons'><EmailOutlinedIcon /></div>
                        <a href='mailto:info@powermycode.com'>info@powermycode.com</a>
                    </div>
                </div>
            </div>
            <div className='footer-body-links'>


                <div className='footer-body-items padd'>

                   <h1>PowerMyCode</h1>
                    <p>Lets Power Your Code Together</p>

                    <div className='footer-social-links'>

                        <div className='footer-social-links-items'>
                            <div className='footer-social-links-icons'><InstagramIcon sx={{fontSize: "18px"}}/></div>
                            <a href='https://www.instagram.com/abhishek.rachuri'>INSTAGRAM</a>
                        </div>
                        <div className='footer-social-links-items'>
                            <div className='footer-social-links-icons'><LinkedInIcon sx={{fontSize: "18px"}}/></div>
                            <a href='https://www.linkedin.com/company/powermycode/'>LINKEDIN</a>
                        </div>
                        <div className='footer-social-links-items'>
                            <div className='footer-social-links-icons'><FacebookIcon sx={{fontSize: "18px"}}/></div>
                            <a href='https://www.facebook.com/profile.php?id=100089064531542&mibextid=ZbWKwL'>FACEBOOK</a>
                        </div>
                        {/* <div className='footer-social-links-items'>
                            <div className='footer-social-links-icons'><XIcon sx={{fontSize: "18px"}}/></div>
                            <a href='#'>TWITTER</a>
                        </div> */}
                    </div>
                </div>


                <div className='footer-body-items padd'>
                    <h2>Our Solutions</h2>
                    <div className='footer-ver-line'></div>
                    <span className='disabled-anchor-tags'>Web Developement</span>
                    <span className='disabled-anchor-tags'>Mobile Developement</span>
                    <span className='disabled-anchor-tags'>Consulting Services</span>
                    <span className='disabled-anchor-tags'>E-Commerce Solutions</span>
                    <span className='disabled-anchor-tags'>UI/UX Design</span>
                    <span className='disabled-anchor-tags'>Software developement</span>

                    <div className='disabled-anchors-buttons'>
                    <Button text={"Our Solutions"} bgColor={"var(--lightgrey)"} color={"var(--darkblue)"} linkToOpen={"/services"}/>
                    </div>
                </div>



                <div className='footer-body-items padd'>
                    <h2>Company</h2>
                    <div className='footer-ver-line'></div>
                    <a href='/services'>Services</a>
                    <a href='/about'>About Us</a>
                    <a href='/blogs'>News & Article</a>
                    <a href='/contact_us'>Contact Us</a>
                </div>



                <div className='footer-body-items padd'>
                    <h2>Resources</h2>
                    <div className='footer-ver-line'></div>
                    {/* <a href='#'>Support Area</a>
                    <a href='#'>Support Policy</a> */}
                    <a href='#'>Terms & Conditions</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Career</a>
                </div>
            </div>
            <div className='copy-right'>
            {/* <div className='copy-right-border-line'></div> */}

                <span>© 2024 PowerMyCode. All rights reserved.</span>
            </div>

        </div>
    )
}

export default Footer



// ©