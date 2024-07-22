import React, { useState, useEffect, useRef } from 'react';
import "./TeamMembers.css";
import { Parallax } from 'react-parallax';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// importing framer motions
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;



function TeamMembers() {
    const [isLoaded, setIsLoaded] = useState(Array(5).fill(false));
    // const [isInView, setIsInView] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    // const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null); 
    const ref7 = useRef(null);
    const ref8 = useRef(null);

    const cardInView1 = useInView(ref1);
    const cardInView2 = useInView(ref2);
    const cardInView3 = useInView(ref3);
    // const cardInView4 = useInView(ref4);
    const cardInView5 = useInView(ref5);
    const cardInView6 = useInView(ref6); 
    const cardInView7 = useInView(ref7); 
    const cardInView8 = useInView(ref8); 


    const toggleImageLoad = (index) => {
        const newList = [...isLoaded];
        newList[index] = true;
        setIsLoaded(newList);
    }

    const [paraStrength, setParaStrength] = useState(100);
    const image1 = "https://picsum.photos/id/400/1080/1920";
    const image2 = "https://picsum.photos/id/560/1080/1920";
    const image3 = "https://picsum.photos/id/388/1080/1920";
    const image4 = "https://picsum.photos/id/566/1080/1920";
    const image5 = "https://picsum.photos/id/568/1080/1920";
    const image6 = "https://picsum.photos/id/391/1080/1920";
    const insideStyles = {
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

    useEffect(() => {
        const handleOrientationChange = () => {
            const isPortrait = window.matchMedia("(orientation: portrait)").matches;
            setParaStrength(isPortrait ? 50 : paraStrength);
        };

        window.addEventListener('resize', handleOrientationChange);

        // Call the handler right away so state gets updated with initial window size
        handleOrientationChange();

        return () => {
            window.removeEventListener('resize', handleOrientationChange);
        };
    }, []);
    return (
        <div className='team-members-wrapper'>
            <div className='team-members-cards'>
                <div className='team-members-cards-items'
                    ref={ref1}
                    style={{
                        transform: cardInView1 ? "none" : "translateY(100px)",
                        opacity: cardInView1 ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <motion.div
                        // initial={false}
                        // animate={
                        //     cardInView1
                        //         ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        //         : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        // }
                        // transition={{ duration: 1}}
                    >
                        <Parallax bgImage={image1} strength={paraStrength} >
                            <div style={{ height: 450 }}>
                                <div style={insideStyles}>
                                    <div className='team-members-social'>
                                        <a href='#'><div className='team-members-social-icons'><InstagramIcon sx={{ fontSize: "15px" }} /></div></a>
                                        <div className='team-members-social-icons'><FacebookIcon sx={{ fontSize: "15px" }} /></div>
                                        <div className='team-members-social-icons'><LinkedInIcon sx={{ fontSize: "15px" }} /></div>
                                    </div>

                                </div>
                            </div>
                        </Parallax>
                    </motion.div>
                    <div className='team-members-content'>
                        <span>DIRECTOR/CEO</span>
                        <div className='line'> </div>
                        <h2>ARUN RACHURI</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>


                <div className='team-members-cards-items'
                    ref={ref2}
                    style={{
                        transform: cardInView2 ? "none" : "translateY(100px)",
                        opacity: cardInView2 ? 1 : 0,
                        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <motion.div

                        // initial={false}
                        // animate={
                        //      cardInView2
                        //         ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        //         : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        // }
                        // transition={{ duration: 1}}
                    // viewport={{ once: true }}
                    // onViewportEnter={() => setIsInView(true)}
                    >
                        <Parallax bgImage={image2} strength={paraStrength} >
                            <div style={{ height: 450 }}>
                                <div style={insideStyles}>
                                    <div className='team-members-social'>
                                        <a href='#'><div className='team-members-social-icons'><InstagramIcon sx={{ fontSize: "15px" }} /></div></a>
                                        <div className='team-members-social-icons'><FacebookIcon sx={{ fontSize: "15px" }} /></div>
                                        <div className='team-members-social-icons'><LinkedInIcon sx={{ fontSize: "15px" }} /></div>
                                    </div>

                                </div>
                            </div>
                        </Parallax>
                    </motion.div>
                    <div className='team-members-content'>
                        <span>ACCOUNT MANAGER</span>
                        <div className='line'> </div>
                        <h2>BARRY GOENKA</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>





                <div className='team-members-cards-items'
                    ref={ref3}
                    style={{
                        transform: cardInView3 ? "none" : "translateY(100px)",
                        opacity: cardInView3 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >

                    <motion.div
                        // initial={false}
                        // animate={
                        //      cardInView3
                        //         ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        //         : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        // }
                        // transition={{ duration: 1}}
                    >
                        <Parallax bgImage={image3} strength={paraStrength}>
                            <div style={{ height: 450 }}>
                                <div style={insideStyles}>
                                    <div className='team-members-social'>
                                        <a href='#'><div className='team-members-social-icons'><InstagramIcon sx={{ fontSize: "15px" }} /></div></a>
                                        <div className='team-members-social-icons'><FacebookIcon sx={{ fontSize: "15px" }} /></div>
                                        <div className='team-members-social-icons'><LinkedInIcon sx={{ fontSize: "15px" }} /></div>
                                    </div>

                                </div>
                            </div>
                        </Parallax>
                    </motion.div>
                    <div className='team-members-content'>
                        <span>ACCOUNT MANAGER</span>
                        <div className='line'> </div>
                        <h2>TINA D</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>


                <div className='team-members-cards-items'
                    ref={ref5}
                    style={{
                        transform: cardInView5 ? "none" : "translateY(100px)",
                        opacity: cardInView5 ? 1 : 0,
                        transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <motion.div
                        // initial={false}
                        // animate={
                        //     cardInView5
                        //         ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        //         : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        // }
                        // transition={{ duration: 1}}
                    >
                        <Parallax bgImage={image5} strength={paraStrength}>
                            <div style={{ height: 450 }}>
                                <div style={insideStyles}>
                                    <div className='team-members-social'>
                                        <a href='#'><div className='team-members-social-icons'><InstagramIcon sx={{ fontSize: "15px" }} /></div></a>
                                        <div className='team-members-social-icons'><FacebookIcon sx={{ fontSize: "15px" }} /></div>
                                        <div className='team-members-social-icons'><LinkedInIcon sx={{ fontSize: "15px" }} /></div>
                                    </div>

                                </div>
                            </div>
                        </Parallax>
                    </motion.div>
                    <div className='team-members-content'>
                        <span>FRONTEND DEVELOPER</span>
                        <div className='line'> </div>
                        <h2>SUBHANKAR GHOSH</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>

                <div className='team-members-cards-items'
                    ref={ref6}
                    style={{
                        transform: cardInView6 ? "none" : "translateY(100px)",
                        opacity: cardInView6 ? 1 : 0,
                        transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >

                    <motion.div
                        // initial={false}
                        // animate={
                        //      cardInView4
                        //         ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        //         : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        // }
                        // transition={{ duration: 1}}
                    >
                        <Parallax bgImage={image4} strength={paraStrength}>
                            <div style={{ height: 450 }}>
                                <div style={insideStyles}>
                                    <div className='team-members-social'>
                                        <a href='#'><div className='team-members-social-icons'><InstagramIcon sx={{ fontSize: "15px" }} /></div></a>
                                        <div className='team-members-social-icons'><FacebookIcon sx={{ fontSize: "15px" }} /></div>
                                        <div className='team-members-social-icons'><LinkedInIcon sx={{ fontSize: "15px" }} /></div>
                                    </div>

                                </div>
                            </div>
                        </Parallax>
                    </motion.div>
                    <div className='team-members-content'>
                        <span>FRONTEND DEVELOPER</span>
                        <div className='line'> </div>
                        <h2>SOUMIK GHOSH</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>

                <div className='team-members-cards-items'
                    ref={ref7}
                    style={{
                        transform: cardInView7 ? "none" : "translateY(100px)",
                        opacity: cardInView7 ? 1 : 0,
                        transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >

                    <motion.div
                        // initial={false}
                        // animate={
                        //      cardInView4
                        //         ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        //         : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        // }
                        // transition={{ duration: 1}}
                    >
                        <Parallax bgImage={image4} strength={paraStrength}>
                            <div style={{ height: 450 }}>
                                <div style={insideStyles}>
                                    <div className='team-members-social'>
                                        <a href='#'><div className='team-members-social-icons'><InstagramIcon sx={{ fontSize: "15px" }} /></div></a>
                                        <div className='team-members-social-icons'><FacebookIcon sx={{ fontSize: "15px" }} /></div>
                                        <div className='team-members-social-icons'><LinkedInIcon sx={{ fontSize: "15px" }} /></div>
                                    </div>

                                </div>
                            </div>
                        </Parallax>
                    </motion.div>
                    <div className='team-members-content'>
                        <span>FULLSTACK DEVELOPER</span>
                        <div className='line'> </div>
                        <h2>RAJESH KAYAL</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>


                <div className='team-members-cards-items'
                    ref={ref8}
                    style={{
                        transform: cardInView8 ? "none" : "translateY(100px)",
                        opacity: cardInView8 ? 1 : 0,
                        transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >

                    <motion.div
                        // initial={false}
                        // animate={
                        //      cardInView4
                        //         ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        //         : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        // }
                        // transition={{ duration: 1}}
                    >
                        <Parallax bgImage={image4} strength={paraStrength}>
                            <div style={{ height: 450 }}>
                                <div style={insideStyles}>
                                    <div className='team-members-social'>
                                        <a href='#'><div className='team-members-social-icons'><InstagramIcon sx={{ fontSize: "15px" }} /></div></a>
                                        <div className='team-members-social-icons'><FacebookIcon sx={{ fontSize: "15px" }} /></div>
                                        <div className='team-members-social-icons'><LinkedInIcon sx={{ fontSize: "15px" }} /></div>
                                    </div>

                                </div>
                            </div>
                        </Parallax>
                    </motion.div>
                    <div className='team-members-content'>
                        <span>BACKEND DEVELOPER</span>
                        <div className='line'> </div>
                        <h2>MOHIT MISHRA</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>




                {/* <div className='team-members-cards-items'>
                    <Parallax bgImage={image6} strength={paraStrength}>
                        <div style={{ height: 450}}>
                            <div style={insideStyles}>
                                <div className='team-members-social'>
                                    <a href='#'><div className='team-members-social-icons'><InstagramIcon sx={{fontSize: "15px"}}/></div></a>
                                    <div className='team-members-social-icons'><FacebookIcon sx={{fontSize: "15px"}} /></div>
                                    <div className='team-members-social-icons'><LinkedInIcon sx={{fontSize: "15px"}} /></div>
                                </div>
                                
                            </div>
                        </div>
                    </Parallax>
                    <div className='team-members-content'>
                        <span>PROJECT CORDINATOR</span>
                        <div className='line'> </div>
                        <h2>SOPHIE TURNER</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div> */}





            </div>
        </div>
    )
}

export default TeamMembers




{/* <div className='team-members-wrapper'>
        <div className='team-members'></div>
    </div> */}