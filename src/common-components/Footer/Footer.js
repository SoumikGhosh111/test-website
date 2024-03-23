import React, { useEffect, useRef } from 'react'
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


function Footer() {
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

    const paraStyling = { 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div className='footer-wrapper'>
            <Parallax bgImage={image1} strength={200}>
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
                    <p>Innovate Today Lead Tomorrow</p>

                    <div className='footer-social-links'>

                        <div className='footer-social-links-items'>
                            <div className='footer-social-links-icons'><InstagramIcon sx={{fontSize: "18px"}}/></div>
                            <a href='#'>INSTAGRAM</a>
                        </div>
                        <div className='footer-social-links-items'>
                            <div className='footer-social-links-icons'><LinkedInIcon sx={{fontSize: "18px"}}/></div>
                            <a href='#'>LINKEDIN</a>
                        </div>
                        <div className='footer-social-links-items'>
                            <div className='footer-social-links-icons'><FacebookIcon sx={{fontSize: "18px"}}/></div>
                            <a href='#'>FACEBOOK</a>
                        </div>
                        <div className='footer-social-links-items'>
                            <div className='footer-social-links-icons'><XIcon sx={{fontSize: "18px"}}/></div>
                            <a href='#'>TWITTER</a>
                        </div>
                    </div>
                </div>


                <div className='footer-body-items padd'>
                    <h2>Our Solutions</h2>
                    <div className='footer-ver-line'></div>
                    <a href='#services'>Web Developement</a>
                    <a href='#services'>Mobile Developement</a>
                    <a href='#services'>App Developement</a>
                    <a href='#services'>Consulting Services</a>
                    <a href='#services'>E-Commerce Solutions</a>
                    <a href='#services'>UI/UX Design</a>
                    <a href='#services'>Software developement</a>
                </div>



                <div className='footer-body-items padd'>
                    <h2>Company</h2>
                    <div className='footer-ver-line'></div>
                    <a href='#about-us'>About us</a>
                    <a href='#services'>Case Study</a>
                    <a href='/blogs'>News & Article</a>
                    <a href='#team-members'>Our Team</a>
                </div>



                <div className='footer-body-items padd'>
                    <h2>Resources</h2>
                    <div className='footer-ver-line'></div>
                    <a href='#'>Support Area</a>
                    <a href='#'>Support Policy</a>
                    <a href='#'>Terms & Conditions</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Career</a>
                </div>
            </div>
        </div>
    )
}

export default Footer