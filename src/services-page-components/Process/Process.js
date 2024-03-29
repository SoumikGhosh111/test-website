import React, { useState, useEffect } from 'react';
import "./Process.css";
import { Parallax } from 'react-parallax';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

function Process() {

    const image1 = "https://picsum.photos/id/539/1920/1080";
    const image2 = "https://picsum.photos/id/542/1920/1080";
    const image3 = "https://picsum.photos/id/543/1920/1080";
    const image4 = "https://picsum.photos/id/600/1920/1080";
    const image5 = "https://picsum.photos/id/551/1920/1080";
    const image6 = "https://picsum.photos/id/610/1920/1080";

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [paraStrength, setParaStrength] = useState(200)

    useEffect(() => {
        const handleResize = () => {
            const isPortrait = window.matchMedia("(orientation: portrait)").matches;
            if (isPortrait) {
                setWindowHeight(window.innerHeight / 2);
                setParaStrength(40)
            }
            else {
                setWindowHeight(window.innerHeight);

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
                    <Parallax bgImage={image1} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Web Application Development</span>
                            </div>
                        </div>
                    </Parallax>
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
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='process-section-2'>
                <div className='process-bg-img-1'>
                    <Parallax bgImage={image2} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Mobile App Developmen</span>
                            </div>
                        </div>
                    </Parallax>
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
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                        </div>
                    </div>
                </div>


            </div>





            <div className='process-section-1'>
                <div className='process-bg-img-1'>
                    <Parallax bgImage={image3} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Custom Software Solutions</span>
                            </div>
                        </div>
                    </Parallax>
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
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='process-section-2'>
                <div className='process-bg-img-1'>
                    <Parallax bgImage={image4} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>UI/UX Design</span>
                            </div>
                        </div>
                    </Parallax>
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
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                        </div>
                    </div>
                </div>


            </div>



            <div className='process-section-1'>
                <div className='process-bg-img-1'>
                    <Parallax bgImage={image5} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>E-Commerce Solutions</span>
                            </div>
                        </div>
                    </Parallax>
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
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='process-section-2'>
                <div className='process-bg-img-1'>
                    <Parallax bgImage={image6} strength={paraStrength}>
                        <div style={{ height: windowHeight }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Consulting Service</span>
                            </div>
                        </div>
                    </Parallax>
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
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>

                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>


                            <div className='process-list-items'>
                                <div className='process-tick'>
                                    <DoneRoundedIcon sx={{ color: "var(--darkgrey)" }} />
                                </div>
                                Market Entry Strategies
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    )
}

export default Process; 