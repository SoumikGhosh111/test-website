import React, {useState, useEffect} from 'react'; 
import "./TeamMembers.css"; 
import { Parallax } from 'react-parallax';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function TeamMembers() {
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
                <div className='team-members-cards-items'>
                    <Parallax bgImage={image1} strength={paraStrength}>
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
                        <span>DIRECTOR/CEO</span>
                        <div className='line'> </div>
                        <h2>ARUN RACHURI</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>


                <div className='team-members-cards-items'>
                    <Parallax bgImage={image2} strength={paraStrength}>
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
                        <span>ACCOUNT MANAGER</span>
                        <div className='line'> </div>
                        <h2>BARRY GOENKA</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>





                <div className='team-members-cards-items'>
                    <Parallax bgImage={image3} strength={paraStrength}>
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
                        <span>ACCOUNT MANAGER</span>
                        <div className='line'> </div>
                        <h2>TINA D</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>




                <div className='team-members-cards-items'>
                    <Parallax bgImage={image4} strength={paraStrength}>
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
                        <span>SENIOR DEVELOPER</span>
                        <div className='line'> </div>
                        <h2>SOMNATH MISTRY</h2>
                        <p>Proactive organizer and communicator, driving project success through meticulous planning and seamless coordination.</p>

                    </div>
                </div>




                <div className='team-members-cards-items'>
                    <Parallax bgImage={image5} strength={paraStrength}>
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
                        <span>FRONTEND DEVELOPER</span>
                        <div className='line'> </div>
                        <h2>SUBHANKAR GHOSH</h2>
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