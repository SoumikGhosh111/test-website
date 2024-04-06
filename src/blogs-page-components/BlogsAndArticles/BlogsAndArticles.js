import React, {useState, useEffect, useRef} from 'react'; 
import "./BlogsAndArticles.css"
import { Parallax } from 'react-parallax';

import { UseInView, useInView } from 'framer-motion';

function BlogsAndArticles() {
    const ref1 = useRef(null); 
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const isInView1  = useInView(ref1); 
    const isInView2  = useInView(ref2);
    const isInView3 = useInView(ref3);
    const isInView4  = useInView(ref4);


    const [paraStrength, setParaStrength] = useState(100)
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
        <div className='blogs-articles-wrapper'>
            <div className='blogs-articles-title'>
                BLOGS & ARTICLES
                <div className='ver-line mob-view-ver-line'> </div>
            </div>
            <div className='blogs-articles-cards'>
                <div className='blogs-articles-cards-items'
                     ref={ref1}
                     style={{ 
                         transform : isInView1 ? "none" : "translateY(50px)",
                         opacity: isInView1 ? 1 : 0, 
                         transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                     }}
                >
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


                <div className='blogs-articles-cards-items'
                     ref={ref1}
                     style={{ 
                         transform : isInView1 ? "none" : "translateY(50px)",
                         opacity: isInView1 ? 1 : 0, 
                         transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                     }}
                >
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



                <div className='blogs-articles-cards-items'
                     ref={ref2}
                     style={{ 
                         transform : isInView2 ? "none" : "translateY(50px)",
                         opacity: isInView2 ? 1 : 0, 
                         transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                     }}
                >
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


                <div className='blogs-articles-cards-items'
                    ref={ref2}
                    style={{ 
                        transform : isInView2 ? "none" : "translateY(50px)",
                        opacity: isInView2 ? 1 : 0, 
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
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


                <div className='blogs-articles-cards-items'
                    ref={ref3}
                    style={{ 
                        transform : isInView3 ? "none" : "translateY(50px)",
                        opacity: isInView3 ? 1 : 0, 
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
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


                <div className='blogs-articles-cards-items'
                     ref={ref3}
                     style={{ 
                         transform : isInView3 ? "none" : "translateY(50px)",
                         opacity: isInView3 ? 1 : 0, 
                         transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                     }}
                >
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



                <div className='blogs-articles-cards-items'
                     ref={ref4}
                     style={{ 
                         transform : isInView4 ? "none" : "translateY(50px)",
                         opacity: isInView4 ? 1 : 0, 
                         transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                     }}
                >
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



                <div className='blogs-articles-cards-items'
                     ref={ref4}
                     style={{ 
                         transform : isInView4 ? "none" : "translateY(50px)",
                         opacity: isInView4 ? 1 : 0, 
                         transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                     }}
                >
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