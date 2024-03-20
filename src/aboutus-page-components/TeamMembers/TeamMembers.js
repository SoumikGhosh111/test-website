import React from 'react'; 
import "./TeamMembers.css"; 
import { Parallax } from 'react-parallax';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function TeamMembers() {
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
  return (
    <div className='team-members-wrapper'>
            <div className='team-members-cards'>
                <div className='team-members-cards-items'>
                    <Parallax bgImage={image1} strength={200}>
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
                </div>


                <div className='team-members-cards-items'>
                    <Parallax bgImage={image2} strength={200}>
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
                </div>





                <div className='team-members-cards-items'>
                    <Parallax bgImage={image3} strength={200}>
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
                </div>




                <div className='team-members-cards-items'>
                    <Parallax bgImage={image4} strength={200}>
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
                </div>




                <div className='team-members-cards-items'>
                    <Parallax bgImage={image5} strength={200}>
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
                </div>




                <div className='team-members-cards-items'>
                    <Parallax bgImage={image6} strength={200}>
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
                </div>



                

            </div>
        </div>
  )
}

export default TeamMembers




{/* <div className='team-members-wrapper'>
        <div className='team-members'></div>
    </div> */}