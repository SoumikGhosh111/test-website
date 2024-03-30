import React from 'react';
import "./ProjectDetails.css";
import CarouselComp from '../../common-components/Carousel/CarouselComp';

function ProjectDetails() {
    return (
        <div className='project-details-section-wrapper'>
            <div className='project-card-1 project-card'>
                <div className='project-content project-card-items'>
                    <h1 >Precio</h1>
                    <div className='project-details'>
                        <h2>An application developed using Flutter</h2>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        <p className='second-para'>What descrbes with relavant image and description</p>
                    </div>
                </div>
                <div className='carousel-comp project-card-items'>
                    <CarouselComp carouselId={1}/>
                </div>
            </div>


            <div className='project-card-2 project-card'>
                <div className='project-content project-card-items'>
                    <h1 >PowerMyCode</h1>
                    <div className='project-details'>
                        <h2>A website build with React</h2>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        <p className='second-para'>What descrbes with relavant image and description</p>
                    </div>
                </div>
                <div className='carousel-comp project-card-items'>
                    <CarouselComp carouselId={2}/>
                </div>
            </div>


            <div className='project-card-1 project-card'>
                <div className='project-content project-card-items'>
                    <h1 >Precio</h1>
                    <div className='project-details'>
                        <h2>An application developed using Flutter</h2>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        <p className='second-para'>What descrbes with relavant image and description</p>
                    </div>
                </div>
                <div className='carousel-comp project-card-items'>
                    <CarouselComp carouselId={1}/>
                </div>
            </div>


            <div className='project-card-2 project-card'>
                <div className='project-content project-card-items'>
                    <h1 >PowerMyCode</h1>
                    <div className='project-details'>
                        <h2>A website build with React</h2>
                        <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                        <p className='second-para'>What descrbes with relavant image and description</p>
                    </div>
                </div>
                <div className='carousel-comp project-card-items'>
                    <CarouselComp carouselId={2}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;