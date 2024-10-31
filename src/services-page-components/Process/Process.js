import React, { useState, useEffect } from 'react';
import "./Process.css";
import { Parallax } from 'react-parallax';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { useLocation } from 'react-router-dom';
import webdev from "../../assets/web-dev.jpg";
import ParallaxImg from '../../common-components/ParallaxImg/ParallaxImg';
import appdev from "../../assets/app-dev.jpg"; 
import softsoln from "../../assets/custom-soft-soln.jpg"; 
import uiux from "../../assets/ui-ux.jpg"; 
import ecomm from "../../assets/e-comm.jpg"; 
import consulting from "../../assets/consulting.jpg"; 
function Process() {
    // const location = useLocation(); 
    // console.log(scrollOp); 
    // useEffect(() => { 
    //     if(location.pathname === '/services' && scrollOp){ 
    //         location.pathname = `${location.pathname}${scrollOp}`; 
    //     }
    // }, [scrollOp]); 

    // const image1 = "https://picsum.photos/id/539/1920/1080";
    const image1 = webdev; 
    const image2 = appdev;
    const image3 = softsoln;
    const image4 = uiux;
    const image5 = ecomm;
    const image6 = consulting;

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [paraStrength, setParaStrength] = useState(200)

    useEffect(() => {
        const handleResize = () => {
            const isPortrait = window.matchMedia("(orientation: portrait)").matches;
            if (isPortrait) {
                setWindowHeight(500);
                setParaStrength(40); 
            }else{ 
                setWindowHeight(window.innerHeight)
            }

        };

        window.addEventListener('resize', handleResize);
        handleResize();
        // Step 4: Remove the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    // useEffect(() => {
    //     const handleOrientationChange = () => {
    //         const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    //         setParaStrength(isPortrait ? 75 : paraStrength);
    //     };

    //     window.addEventListener('resize', handleOrientationChange);

    //     // Call the handler right away so state gets updated with initial window size
    //     handleOrientationChange();

    //     return () => {
    //         window.removeEventListener('resize', handleOrientationChange);
    //     };
    // }, []);

    const insideStyles = {
        // background: "white",
        // border: "1px solid red",
        width: "100%",
        height: "100%",
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };


    return (
        <div className='process-wrapper'>
            <div className='process-section-1'>
                <div className='process-bg-img-1'>
                    {/* <Parallax bgImage={image1} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Web Application Development</span>
                            </div>
                        </div>
                    </Parallax> */}

                    <ParallaxImg img={webdev} sentence={"Web Application Development"} className={"process-header"}/>
                </div>
                <div className='process-content' id='web_dev'>
                    <div className='process-content-wrapper' >
                        <h1>Pioneering Web Application Development</h1>
                        <p className='sub-para-1'>Empower your digital presence with bespoke web applications embodying innovation, efficiency, and scalability. Our team harnesses modern web technologies to create responsive, adaptive solutions. Strategically designed, they enhance user engagement and maximize conversion rates.</p>
                        <p className='sub-para-2'>Dedicated to your success, we craft web applications that push boundaries, offering seamless experiences and driving impactful results.</p>
                        <div className='list'>
                            <span>STRATEGY SERVICES</span>
                            <div className='line'></div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Platform Integration Strategy
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Performance Optimization Tactics
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Security and Compliance Measures
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                System Integration Enhancement
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Continuous Monitoring and Maintenance
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='process-section-2'>
                <div className='process-bg-img-1'>
                    {/* <Parallax bgImage={image2} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Mobile App Development</span>
                            </div>
                        </div>
                    </Parallax> */}
                    <ParallaxImg img={"https://i.pinimg.com/564x/45/b1/61/45b1613370e3f981c0968fe73ec813cd.jpg"} sentence={"Mobile App Developement"} className={"process-header"}/>
                </div>
                <div className='process-content'>
                    <div className='process-content-wrapper'>
                        <h1>Leading the Way in Mobile App Development</h1>
                        <p className='sub-para-1'>Bridge the gap between your business and customers through our custom mobile app development services. We prioritize immersive experiences via intuitive design and robust functionality. Anticipate cutting-edge applications that surpass user expectations, ensuring your brand leads the mobile revolution.</p>


                        <p className='sub-para-2'>Count on us to deliver innovative solutions that elevate your brand's mobile presence. Our commitment to excellence ensures your app stands out, captivating users and driving sustained success.</p>
                        <div className='list'>
                            <span>STRATEGY SERVICES</span>
                            <div className='line'></div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                ASO(App Store Optimization)
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                User Engagement Tactics
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                User Experience Amplification
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Cross-Platform Development
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Performance Monitoring and Optimization
                            </div>
                        </div>
                    </div>
                </div>


            </div>





            <div className='process-section-1'>
                <div className='process-bg-img-1'>
                    {/* <Parallax bgImage={image3} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Custom Software Solutions</span>
                            </div>
                        </div>
                    </Parallax> */}
                    <ParallaxImg img={softsoln} sentence={"Custom Software Solutions"} className={"process-header"}/>
                </div>
                <div className='process-content'>
                    <div className='process-content-wrapper'>
                        <h1> Revolutionizing Custom Software Solutions</h1>
                        <p className='sub-para-1'>Transform your business processes with our custom software solutions. We specialize in developing unique software tailored to the intricate needs of your business. Through automation and specialized tools, we deliver reliable, efficient solutions.</p>
                        <p className='sub-para-2'>Expect our solutions to drive substantial business growth and innovation. With our expertise, your business will thrive in today's dynamic landscape, equipped with powerful tools to streamline operations and accelerate success.</p>
                        <div className='list'>
                            <span>STRATEGY SERVICES</span>
                            <div className='line'></div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Business Process Analysis
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                User-Centric Approach
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Scalability and Future-Proofing
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Adaptive Architecture
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Integration Flexibility
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='process-section-2'>
                <div className='process-bg-img-1'>
                    {/* <Parallax bgImage={image4} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>UI/UX Design</span>
                            </div>
                        </div>
                    </Parallax> */}
                    <ParallaxImg img={uiux} sentence={"UI/UX Design"} className={"process-header"}/>
                </div>
                <div className='process-content'>
                    <div className='process-content-wrapper'>
                        <h1>Enhancing User Experience with Intuitive Design</h1>
                        <p className='sub-para-1'>Our UI/UX design services are at the intersection of art and technology. We craft aesthetically pleasing interfaces that are grounded in solid user experience research. The result is a harmonious balance of form and function that not only captivates users but also facilitates seamless interaction with your software.</p>
                        <p className='sub-para-2'>
                            Creating captivating digital experiences, our UI/UX design services focus on intuitive interfaces backed by robust user experience research. This results in designs that effortlessly captivate users and facilitate smooth interactions with your software.</p>
                        <div className='list'>
                            <span>STRATEGY SERVICES</span>
                            <div className='line'></div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                User-Focused Principle
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Visual Storytelling
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Iterative Design Process
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Accessibility Enhancement
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Interactive Prototyping
                            </div>
                        </div>
                    </div>
                </div>


            </div>



            <div className='process-section-1'>
                <div className='process-bg-img-1'>
                    {/* <Parallax bgImage={image5} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>E-Commerce Solutions</span>
                            </div>
                        </div>
                    </Parallax> */}
                    <ParallaxImg img={"https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} sentence={"E-Commerce Solutions"} className={"process-header"}/>
                </div>
                <div className='process-content'>
                    <div className='process-content-wrapper'>
                        <h1>Modernizing E-commerce Solutions</h1>
                        <p className='sub-para-1'>Elevate your online retail experience with our comprehensive e-commerce solutions. Our platforms seamlessly integrate secure payment processing and captivating storefront designs, ensuring a smooth shopping journey for your customers.</p>
                        <p className='sub-para-2'>Furthermore, we harness advanced analytics to provide valuable insights into customer behavior, enabling you to optimize their journey and drive sales growth effectively. Trust us to empower your e-commerce business with cutting-edge solutions tailored to your unique needs.</p>
                        <div className='list'>
                            <span>STRATEGY SERVICES</span>
                            <div className='line'></div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Penetration Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Conversion Optimization Tactics
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Customer Retention Strategies
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Personalized Marketing Initiatives
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Streamlined Checkout Experience
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='process-section-2'>
                <div className='process-bg-img-1'>
                    {/* <Parallax bgImage={image6} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Consulting Service</span>
                            </div>
                        </div>
                    </Parallax> */}
                    <ParallaxImg img={"https://www.shutterstock.com/image-photo/team-diverse-partners-mature-latin-600nw-2346448085.jpg"} sentence={"Consulting Services"} className={"process-header for-only-consulting"}/>
                </div>
                <div className='process-content'>
                    <div className='process-content-wrapper'>
                        <h1>Empowering Through Consulting Services</h1>
                        <p className='sub-para-1'>Unlock the potential of your technology investments with our expert consulting services. We offer strategic guidance spanning market analysis to architecture design, ensuring your software initiatives align seamlessly with your business objectives.</p>
                        <p className='sub-para-2'>Leverage our industry insights to make informed decisions that propel your company forward. With our tailored approach, your technology investments will drive innovation and deliver tangible business value.</p>
                        <div className='list'>
                            <span>STRATEGY SERVICES</span>
                            <div className='line'></div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Strategic Planning and Guidance
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Technology Roadmap Development
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Risk Assessment and Mitigation
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Operational Assistance
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Continuous Improvement Framework
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    )
}

export default Process; 