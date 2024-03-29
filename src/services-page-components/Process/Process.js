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
            if(isPortrait){ 
                setWindowHeight(window.innerHeight / 2);
                setParaStrength(40)
            }
            else{ 
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
                <div className='process-content'>
                    <div className='process-content-wrapper'>
                        <h1>Strategic Vision: Guiding <br /> Your Business Triumph</h1>
                        <p className='sub-para-1'>Our strategic consulting empowers businesses to navigate complexities, anticipate challenges, and embrace opportunities for enduring success. From market analysis to goal-setting, we craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.</p>
                        <p className='sub-para-2'>Our strategic approach goes beyond conventional methods, embracing innovation and adaptability to keep your business ahead of the curve. With a focus on long-term growth, our strategy service is your compass in the ever-evolving business landscape.</p>
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
                        <h1>Strategic Vision: Guiding <br /> Your Business Triumph</h1>
                        <p className='sub-para-1'>Our strategic consulting empowers businesses to navigate complexities, anticipate challenges, and embrace opportunities for enduring success. From market analysis to goal-setting, we craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.</p>
                        <p className='sub-para-2'>Our strategic approach goes beyond conventional methods, embracing innovation and adaptability to keep your business ahead of the curve. With a focus on long-term growth, our strategy service is your compass in the ever-evolving business landscape.</p>
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
                        <h1>Strategic Vision: Guiding <br /> Your Business Triumph</h1>
                        <p className='sub-para-1'>Our strategic consulting empowers businesses to navigate complexities, anticipate challenges, and embrace opportunities for enduring success. From market analysis to goal-setting, we craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.</p>
                        <p className='sub-para-2'>Our strategic approach goes beyond conventional methods, embracing innovation and adaptability to keep your business ahead of the curve. With a focus on long-term growth, our strategy service is your compass in the ever-evolving business landscape.</p>
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
                        <h1>Strategic Vision: Guiding <br /> Your Business Triumph</h1>
                        <p className='sub-para-1'>Our strategic consulting empowers businesses to navigate complexities, anticipate challenges, and embrace opportunities for enduring success. From market analysis to goal-setting, we craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.</p>
                        <p className='sub-para-2'>Our strategic approach goes beyond conventional methods, embracing innovation and adaptability to keep your business ahead of the curve. With a focus on long-term growth, our strategy service is your compass in the ever-evolving business landscape.</p>
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
                        <h1>Strategic Vision: Guiding <br /> Your Business Triumph</h1>
                        <p className='sub-para-1'>Our strategic consulting empowers businesses to navigate complexities, anticipate challenges, and embrace opportunities for enduring success. From market analysis to goal-setting, we craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.</p>
                        <p className='sub-para-2'>Our strategic approach goes beyond conventional methods, embracing innovation and adaptability to keep your business ahead of the curve. With a focus on long-term growth, our strategy service is your compass in the ever-evolving business landscape.</p>
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
                        <h1>Strategic Vision: Guiding <br /> Your Business Triumph</h1>
                        <p className='sub-para-1'>Our strategic consulting empowers businesses to navigate complexities, anticipate challenges, and embrace opportunities for enduring success. From market analysis to goal-setting, we craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.</p>
                        <p className='sub-para-2'>Our strategic approach goes beyond conventional methods, embracing innovation and adaptability to keep your business ahead of the curve. With a focus on long-term growth, our strategy service is your compass in the ever-evolving business landscape.</p>
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