import React, { useEffect, useRef } from 'react'
import "./Blogs.css";

function Blogs() {
    const blogsCard1 = useRef(null);
    const blogsCard2 = useRef(null);
    const blogsCard3 = useRef(null);
    const blogsCard4 = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const parallaxElement = blogsCard1.current;
            if (parallaxElement) {
                parallaxElement.style.transform = `translateY(-${scrollPosition * 0.05}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const parallaxElement = blogsCard2.current;
            if (parallaxElement) {
                parallaxElement.style.transform = `translateY(-${scrollPosition * 0.05}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const parallaxElement = blogsCard3.current;
            if (parallaxElement) {
                parallaxElement.style.transform = `translateY(-${scrollPosition * 0.05}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const parallaxElement = blogsCard4.current;
            if (parallaxElement) {
                parallaxElement.style.transform = `translateY(-${scrollPosition * 0.05}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className='blogs-section-wrapper'>
            <div className='blogs-section-title'>
                BLOGS & ARTICLES
                <div className='ver-line'> </div>
            </div>
            <div className='blogs-section-cards'>
                <div className='blogs-section-cards-items'>
                    <div className='blogs-img-bg'>
                        <img src='https://picsum.photos/id/466/1920/1080' className='blogs-bg-img' ref={blogsCard1} />
                        <div className='blog-date'>
                            1
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

                <div className='blogs-section-cards-items'>
                    <div className='blogs-img-bg'>
                        <img src='https://picsum.photos/id/467/1920/1080' className='blogs-bg-img' ref={blogsCard2} />
                        <div className='blog-date'>
                            1
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


                <div className='blogs-section-cards-items'>
                    <div className='blogs-img-bg'>
                        <img src='https://picsum.photos/id/468/1920/1080' className='blogs-bg-img' ref={blogsCard3} />
                        <div className='blog-date'>
                            MAR 18
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


                <div className='blogs-section-cards-items'>
                    <div className='blogs-img-bg'>
                        <img src='https://picsum.photos/id/450/1920/1080' className='blogs-bg-img' ref={blogsCard4} />
                        <div className='blog-date'>
                            1
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


            </div>
        </div>
    )
}

export default Blogs;