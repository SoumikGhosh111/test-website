import React, {useState, useEffect} from 'react'; 
import "./BlogsAndArticles.css"
import { Parallax } from 'react-parallax';

function BlogsAndArticles() {
    const [paraStrength, setParaStrength] = useState(200)
    const image1 = "https://picsum.photos/id/386/1920/1080";
    const image2 = "https://picsum.photos/id/387/1920/1080";
    const image3 = "https://picsum.photos/id/388/1920/1080";
    const image4 = "https://picsum.photos/id/389/1920/1080";
    const image5 = "https://picsum.photos/id/390/1920/1080";
    const image6 = "https://picsum.photos/id/391/1920/1080";
    const image7 = "https://picsum.photos/id/392/1920/1080";
    const image8 = "https://picsum.photos/id/393/1920/1080";
    

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
        <div className='blogs-articles-wrapper'>
            <div className='blogs-articles-title'>
                BLOGS & ARTICLES
                <div className='ver-line mob-view-ver-line'> </div>
            </div>
            <div className='blogs-articles-cards'>
                <div className='blogs-articles-cards-items'>
                    <Parallax bgImage={image1} strength={paraStrength}>
                        <div style={{ height: 300 }}>
                            <div style={insideStyles}>
                                <div className='date-blogs'>
                                    19 <br/>
                                    Mar
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <div className='blogs-content'>
                        <span>CONSULTING</span>
                        <div className='line'> </div>
                        <h2>A Blueprint for Business Brilliance</h2>
                        <p>Explore the intricacies of strategic planning and discover how it can transform your business landscape.</p>
                        <a href='/blogs'>Read Article</a>

                    </div>
                </div>


                <div className='blogs-articles-cards-items'>
                    <Parallax bgImage={image2} strength={paraStrength}>
                        <div style={{ height: 300 }}>
                            <div style={insideStyles}>
                                <div className='date-blogs'>
                                    19 <br/>
                                    Mar
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <div className='blogs-content'>
                        <span>CONSULTING</span>
                        <div className='line'> </div>
                        <h2>A Guide to Streamlining Your Business</h2>
                        <p>Dive into the world of operational efficiency and learn strategies to boost productivity effortlessly.</p>
                        <a href='/blogs'>Read Article</a>

                    </div>
                </div>



                <div className='blogs-articles-cards-items'>
                    <Parallax bgImage={image3} strength={paraStrength}>
                        <div style={{ height: 300 }}>
                            <div style={insideStyles}>
                                <div className='date-blogs'>
                                    19 <br/>
                                    Mar
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <div className='blogs-content'>
                        <span>CONSULTING</span>
                        <div className='line'> </div>
                        <h2>Navigating Market Entry</h2>
                        <p>Embark on a journey into market entry strategies, ensuring a seamless expansion into new territories.</p>
                        <a href='/blogs'>Read Article</a>

                    </div>
                </div>


                <div className='blogs-articles-cards-items'>
                    <Parallax bgImage={image4} strength={paraStrength}>
                        <div style={{ height: 300 }}>
                            <div style={insideStyles}>
                                <div className='date-blogs'>
                                    19 <br/>
                                    Mar
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <div className='blogs-content'>
                        <span>CONSULTING</span>
                        <div className='line'> </div>
                        <h2>Excellence in Your Organizational Leadership</h2>
                        <p>Explore the key principles of leadership development and cultivate a culture of excellence within.</p>
                        <a href='/blogs'>Read Article</a>

                    </div>
                </div>


                <div className='blogs-articles-cards-items'>
                    <Parallax bgImage={image5} strength={paraStrength}>
                        <div style={{ height: 300 }}>
                            <div style={insideStyles}>
                                <div className='date-blogs'>
                                    19 <br/>
                                    Mar
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <div className='blogs-content'>
                        <span>CONSULTING</span>
                        <div className='line'> </div>
                        <h2>A Blueprint for Business Brilliance</h2>
                        <p>Explore the intricacies of strategic planning and discover how it can transform your business landscape.</p>
                        <a href='/blogs'>Read Article</a>

                    </div>
                </div>


                <div className='blogs-articles-cards-items'>
                    <Parallax bgImage={image6} strength={paraStrength}>
                        <div style={{ height: 300 }}>
                            <div style={insideStyles}>
                                <div className='date-blogs'>
                                    19 <br/>
                                    Mar
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <div className='blogs-content'>
                        <span>CONSULTING</span>
                        <div className='line'> </div>
                        <h2>A Blueprint for Business Brilliance</h2>
                        <p>Explore the intricacies of strategic planning and discover how it can transform your business landscape.</p>
                        <a href='/blogs'>Read Article</a>

                    </div>
                </div>



                <div className='blogs-articles-cards-items'>
                    <Parallax bgImage={image7} strength={paraStrength}>
                        <div style={{ height: 300 }}>
                            <div style={insideStyles}>
                                <div className='date-blogs'>
                                    19 <br/>
                                    Mar
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <div className='blogs-content'>
                        <span>CONSULTING</span>
                        <div className='line'> </div>
                        <h2>A Blueprint for Business Brilliance</h2>
                        <p>Explore the intricacies of strategic planning and discover how it can transform your business landscape.</p>
                        <a href='/blogs'>Read Article</a>

                    </div>
                </div>



                <div className='blogs-articles-cards-items'>
                    <Parallax bgImage={image8} strength={paraStrength}>
                        <div style={{ height: 300 }}>
                            <div style={insideStyles}>
                                <div className='date-blogs'>
                                    19 <br/>
                                    Mar
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <div className='blogs-content'>
                        <span>CONSULTING</span>
                        <div className='line'> </div>
                        <h2>A Blueprint for Business Brilliance</h2>
                        <p>Explore the intricacies of strategic planning and discover how it can transform your business landscape.</p>
                        <a href='/blogs'>Read Article</a>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default BlogsAndArticles