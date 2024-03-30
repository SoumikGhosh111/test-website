import React, { useState } from 'react';
import "./ProjectDetails.css";
import CarouselComp from '../../common-components/Carousel/CarouselComp';

function ProjectDetails() {

    const [isClick, setClick] = useState(false);
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const shortDesc = desc.slice(0, 100) + "<span style='color: var(--darkblue); cursor: pointer'> Read More...</span>";
    const longDesc = desc + "<span style='color: var(--darkblue); cursor: pointer'> Read Less...</span>";

    return (
        <div className='project-details-section-wrapper'>
            <div className='project-card-1 project-card'>
                <div className='project-content project-card-items'>
                    <h1 >Precio</h1>
                    <div className='project-details'>
                        <h2>An application developed using Flutter</h2>
                        <div className='carousel-comp project-card-items mob-view-d-block'>
                            <CarouselComp carouselId={1} />
                        </div>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        {desc.length > 100 ? <p onClick={() => setClick(!isClick)} dangerouslySetInnerHTML={{ __html: !isClick ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                    </div>
                </div>
                <div className='carousel-comp project-card-items mob-view-d-none'>
                    <CarouselComp carouselId={1} />
                </div>
            </div>


            <div className='project-card-2 project-card'>
                <div className='project-content project-card-items'>
                    <h1 >PowerMyCode</h1>
                    <div className='project-details'>
                        <h2>A website build with React</h2>
                        <div className='carousel-comp project-card-items mob-view-d-block'>
                            <CarouselComp carouselId={2} />
                        </div>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        {desc.length > 100 ? <p onClick={() => setClick(!isClick)} dangerouslySetInnerHTML={{ __html: !isClick ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                    </div>
                </div>
                <div className='carousel-comp project-card-items mob-view-d-none'>
                    <CarouselComp carouselId={2} />
                </div>
            </div>


            <div className='project-card-1 project-card'>
                <div className='project-content project-card-items'>
                    <h1 >Precio</h1>
                    <div className='project-details'>
                        <h2>An application developed using Flutter</h2>
                        <div className='carousel-comp project-card-items mob-view-d-block'>
                            <CarouselComp carouselId={3} />
                        </div>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        {desc.length > 100 ? <p onClick={() => setClick(!isClick)} dangerouslySetInnerHTML={{ __html: !isClick ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                    </div>
                </div>
                <div className='carousel-comp project-card-items mob-view-d-none'>
                    <CarouselComp carouselId={3} />
                </div>
            </div>


            <div className='project-card-2 project-card'>
                <div className='project-content project-card-items'>
                    <h1 >PowerMyCode</h1>
                    <div className='project-details'>
                        <h2>A website build with React</h2>
                        <div className='carousel-comp project-card-items mob-view-d-block'>
                            <CarouselComp carouselId={4} />
                        </div>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        {desc.length > 100 ? <p onClick={() => setClick(!isClick)} dangerouslySetInnerHTML={{ __html: !isClick ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                    </div>
                </div>
                <div className='carousel-comp project-card-items mob-view-d-none'>
                    <CarouselComp carouselId={4} />
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;