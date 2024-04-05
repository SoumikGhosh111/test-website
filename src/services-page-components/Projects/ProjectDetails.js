import React, { useRef, useState } from 'react';
import "./ProjectDetails.css";
import CarouselComp from '../../common-components/Carousel/CarouselComp';

import { useInView } from 'framer-motion';


function ProjectDetails() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);
    const isInView3 = useInView(ref3);
    const isInView4 = useInView(ref4);

    const [isClick, setClick] = useState(Array(4).fill(false));
    const toggleState = (index) => {
        const newList = [...isClick];
        newList[index] = !newList[index];
        setClick(newList);
    }
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const shortDesc = desc.slice(0, 100) + "<span style='color: var(--darkblue); cursor: pointer'> Read More...</span>";
    const longDesc = desc + "<span style='color: var(--darkblue); cursor: pointer'> Read Less...</span>";

    return (
        <div className='project-details-section-wrapper'>


            <div className='project-card-1 project-card'
                ref={ref1}
                style={{
                    transform: isInView1 ? "none" : "translateY(100px)",
                    opacity: isInView1 ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <div className='project-content project-card-items'>
                    <h1 >Precio</h1>
                    <div className='project-details'>
                        <h2>An application developed using Flutter</h2>
                        <div className='carousel-comp project-card-items mob-view-d-block'>
                            <CarouselComp carouselId={1} />
                        </div>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        {desc.length > 100 ? <p onClick={() => toggleState(0)} dangerouslySetInnerHTML={{ __html: !isClick[0] ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                    </div>
                </div>
                <div className='carousel-comp project-card-items mob-view-d-none'>
                    <CarouselComp carouselId={2} />
                </div>
            </div>

            <div className='project-card-2 project-card'
                ref={ref2}
                style={{
                    transform: isInView2 ? "none" : "translateY(100px)",
                    opacity: isInView2 ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <div className='project-content project-card-items'>
                    <h1 >PowerMyCode</h1>
                    <div className='project-details'>
                        <h2>A website build with React</h2>
                        <div className='carousel-comp project-card-items mob-view-d-block'>
                            <CarouselComp carouselId={3} />
                        </div>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        {desc.length > 100 ? <p onClick={() => toggleState(1)} dangerouslySetInnerHTML={{ __html: !isClick[1] ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                    </div>
                </div>
                <div className='carousel-comp project-card-items mob-view-d-none'>
                    <CarouselComp carouselId={4} />
                </div>
            </div>


            <div className='project-card-1 project-card'
                ref={ref3}
                style={{
                    transform: isInView3 ? "none" : "translateY(100px)",
                    opacity: isInView3 ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <div className='project-content project-card-items'>
                    <h1 >Precio</h1>
                    <div className='project-details'>
                        <h2>An application developed using Flutter</h2>
                        <div className='carousel-comp project-card-items mob-view-d-block'>
                            <CarouselComp carouselId={5} />
                        </div>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        {desc.length > 100 ? <p onClick={() => toggleState(2)} dangerouslySetInnerHTML={{ __html: !isClick[2] ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                    </div>
                </div>
                <div className='carousel-comp project-card-items mob-view-d-none'>
                    <CarouselComp carouselId={6} />
                </div>
            </div>


            <div className='project-card-2 project-card'
                 ref={ref4}
                 style={{
                     transform: isInView4 ? "none" : "translateY(100px)",
                     opacity: isInView4 ? 1 : 0,
                     transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                 }}
            >
                <div className='project-content project-card-items'>
                    <h1 >PowerMyCode</h1>
                    <div className='project-details'>
                        <h2>A website build with React</h2>
                        <div className='carousel-comp project-card-items mob-view-d-block'>
                            <CarouselComp carouselId={7} />
                        </div>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        {desc.length > 100 ? <p onClick={() => toggleState(3)} dangerouslySetInnerHTML={{ __html: !isClick[3] ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                    </div>
                </div>
                <div className='carousel-comp project-card-items mob-view-d-none'>
                    <CarouselComp carouselId={8} />
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;