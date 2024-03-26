import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import "./Blogs.css";

function Blogs() {
    const [paraStrength, setParaStrength] = useState(100)
    const image1 = "https://picsum.photos/id/386/1920/1080";
    const image2 = "https://picsum.photos/id/387/1920/1080";
    const image3 = "https://picsum.photos/id/388/1920/1080";
    const image4 = "https://picsum.photos/id/389/1920/1080";
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
                setParaStrength(isPortrait ? 75 : paraStrength);
            };
        
            window.addEventListener('resize', handleOrientationChange);
        
            // Call the handler right away so state gets updated with initial window size
            handleOrientationChange();
        
            return () => {
                window.removeEventListener('resize', handleOrientationChange);
            };
        }, []);
    
    return (
        <div className='blogs-section-wrapper'>
            <div className='blogs-section-title'>
                BLOGS & ARTICLES
                <div className='ver-line mob-view-ver-line'> </div>
            </div>
            <div className='blogs-section-cards'>
                <div className='blogs-section-cards-items'>
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


                <div className='blogs-section-cards-items'>
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



                <div className='blogs-section-cards-items'>
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


                <div className='blogs-section-cards-items'>
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

            </div>
        </div>
    );
}

export default Blogs;























{/* {[1, 2, 3, 4].map((index) => (
    <div className='blogs-section-cards-items' key={index}>
        <div className='blogs-img-bg'>
            <img src={`https://picsum.photos/id/${489 + index}/1920/1080`} className='blogs-bg-img' ref={blogsCardsRefs[index - 1]} />
            <div className='blog-date'>
                {index === 1 ? '1' : 'MAR 18'}
            </div>
        </div>
        <div className='blogs-content'>
            <span>CONSULTING</span>
            <div className='line'> </div>
            <h2>A Blueprint for Business Brilliance</h2>
            <p>Explore the intricacies of strategic planning and discover how it can transform your business landscape.</p>
            <a href='#'>Read Article</a>
        </div>
    </div>
))} */}














// const blogsCard1 = useRef(null);
// const blogsCard2 = useRef(null);
// const blogsCard3 = useRef(null);
// const blogsCard4 = useRef(null);

// useEffect(() => {
//     const handleScroll = () => {
//         const scrollPosition = window.pageYOffset;
//         const parallaxElement = blogsCard1.current;
//         if (parallaxElement) {
//             parallaxElement.style.transform = `translateY(-${scrollPosition * 0.05}px)`;
//         }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
// }, []);
// useEffect(() => {
//     const handleScroll = () => {
//         const scrollPosition = window.pageYOffset;
//         const parallaxElement = blogsCard2.current;
//         if (parallaxElement) {
//             parallaxElement.style.transform = `translateY(-${scrollPosition * 0.05}px)`;
//         }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
// }, []);

// useEffect(() => {
//     const handleScroll = () => {
//         const scrollPosition = window.pageYOffset;
//         const parallaxElement = blogsCard3.current;
//         if (parallaxElement) {
//             parallaxElement.style.transform = `translateY(-${scrollPosition * 0.05}px)`;
//         }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
// }, []);

// useEffect(() => {
//     const handleScroll = () => {
//         const scrollPosition = window.pageYOffset;
//         const parallaxElement = blogsCard4.current;
//         if (parallaxElement) {
//             parallaxElement.style.transform = `translateY(-${scrollPosition * 0.05}px)`;
//         }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
// }, []);
// return (
//     <div className='blogs-section-wrapper'>
//         <div className='blogs-section-title'>
//             BLOGS & ARTICLES
//             <div className='ver-line'> </div>
//         </div>
//         <div className='blogs-section-cards'>
//             <div className='blogs-section-cards-items'>
//                 <div className='blogs-img-bg'>
//                     <img src='https://picsum.photos/id/466/1920/1080' className='blogs-bg-img' ref={blogsCard1} />
//                     <div className='blog-date'>
//                         1
//                     </div>
//                 </div>
//                 <div className='blogs-content'>
//                     <span>CONSULTING</span>
//                     <div className='line'> </div>
//                     <h2>A Blueprint for Business Brilliance</h2>
//                     <p>Explore the intricacies of strategic planning and discover how it can transform your business landscape.</p>
//                     <a href='#'>Read Article</a>

//                 </div>
//             </div>

//             <div className='blogs-section-cards-items'>
//                 <div className='blogs-img-bg'>
//                     <img src='https://picsum.photos/id/467/1920/1080' className='blogs-bg-img' ref={blogsCard2} />
//                     <div className='blog-date'>
//                         1
//                     </div>
//                 </div>
//                 <div className='blogs-content'>
//                     <span>CONSULTING</span>
//                     <div className='line'> </div>
//                     <h2>A Blueprint for Business Brilliance</h2>
//                     <p>Explore the intricacies of strategic planning and discover how it can transform your business landscape.</p>
//                     <a href='#'>Read Article</a>

//                 </div>
//             </div>


//             <div className='blogs-section-cards-items'>
//                 <div className='blogs-img-bg'>
//                     <img src='https://picsum.photos/id/468/1920/1080' className='blogs-bg-img' ref={blogsCard3} />
//                     <div className='blog-date'>
//                         MAR 18
//                     </div>
//                 </div>
//                 <div className='blogs-content'>
//                     <span>CONSULTING</span>
//                     <div className='line'> </div>
//                     <h2>A Blueprint for Business Brilliance</h2>
//                     <p>Explore the intricacies of strategic planning and discover how it can transform your business landscape.</p>
//                     <a href='#'>Read Article</a>

//                 </div>
//             </div>


//             <div className='blogs-section-cards-items'>
//                 <div className='blogs-img-bg'>
//                     <img src='https://picsum.photos/id/450/1920/1080' className='blogs-bg-img' ref={blogsCard4} />
//                     <div className='blog-date'>
//                         1
//                     </div>
//                 </div>
//                 <div className='blogs-content'>
//                     <span>CONSULTING</span>
//                     <div className='line'> </div>
//                     <h2>A Blueprint for Business Brilliance</h2>
//                     <p>Explore the intricacies of strategic planning and discover how it can transform your business landscape.</p>
//                     <a href='#'>Read Article</a>

//                 </div>
//             </div>


//         </div>
//     </div>
// )