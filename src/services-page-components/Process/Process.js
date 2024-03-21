import React from 'react';
import "./Process.css";
import { Parallax } from 'react-parallax';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

function Process() {

    const image1 = "https://picsum.photos/id/539/1920/1080";
    const image2 = "https://picsum.photos/id/542/1920/1080";
    const image3 = "https://picsum.photos/id/543/1920/1080";
    const image4 = "https://picsum.photos/id/600/1920/1080";

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
                    <Parallax bgImage={image1} strength={200}>
                        <div style={{ height: 776 }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Strategy</span>
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
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>

                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>


                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='process-section-2'>
                <div className='process-bg-img-1'>
                    <Parallax bgImage={image2} strength={200}>
                        <div style={{ height: 776 }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Strategy</span>
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
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>

                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>


                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                    </div>
                    </div>
                </div>


            </div>





            <div className='process-section-1'>
                <div className='process-bg-img-1'>
                    <Parallax bgImage={image3} strength={200}>
                        <div style={{ height: 776 }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Strategy</span>
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
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>

                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>


                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='process-section-2'>
                <div className='process-bg-img-1'>
                    <Parallax bgImage={image4} strength={200}>
                        <div style={{ height: 776 }}>
                            <div style={insideStyles}>
                                <span className='process-header'>Strategy</span>
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
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>
                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>

                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
                            </div>
                            Market Entry Strategies
                        </div>


                        <div className='process-list-items'>
                            <div className='process-tick'>
                                <DoneRoundedIcon sx={{color: "var(--darkgrey)"}}/>
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