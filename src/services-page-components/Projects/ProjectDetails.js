import React, { useRef, useState, useCallback } from 'react';
import "./ProjectDetails.css";
import CarouselComp from '../../common-components/Carousel/CarouselComp';

import { useInView } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Next and Prev bttn icons
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

// sample 


function ProjectDetails() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const bwcSlider = useRef(null);
    const bwcSliderMob = useRef(null);

    const inwoodSlider = useRef(null);
    const inwoodSliderMob = useRef(null);

    const eminentCastleSlider = useRef(null);
    const eminentCastleSliderMob = useRef(null);

    const carteSlider = useRef(null);
    const carteSliderMob = useRef(null);

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
    // const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const desc = `BWC Clothing is an online store that makes shopping easy. Users can sign up, log in, and manage their profiles without any hassle. The website has a wide range of products, neatly organized into categories. Each product page has clear images, descriptions, and prices. The checkout process is quick and secure, thanks to Stripe payments, and users can even check out as guests without creating an account. <br/><br/>

Customers can view their past orders and track new ones, getting email updates along the way. The admin panel allows store managers to add, edit, and delete products, manage orders and payments, and handle user accounts. It also provides tools to answer user inquiries and generate sales reports.<br/><br/>

BWC Clothing supports easy returns and exchanges, with users getting email notifications about their requests. The site also features live search for instant results and SMS newsletters for promotions. It is mobile-friendly and integrates with social media, providing a contact form for user queries and a media gallery to display images and videos.`

    const shortDesc = desc.slice(0, 500) + "<span style='color: var(--darkblue); cursor: pointer'> Read More...</span>";
    const longDesc = desc + "<span style='color: var(--darkblue); cursor: pointer'> Read Less</span>";






    const inwoodDesc = `Inwood Pizza is a dynamic and responsive web application developed with React.js and Node.js, designed to offer a seamless pizza ordering experience. The platform allows users to sign up or log in, providing access to a personalized interface. The extensive menu showcases vivid images, detailed descriptions, and pricing information, helping users make informed choices about their favorite pizzas and other offerings. <br/><br/>

One of the standout features of Inwood Pizza is its special offers section. This feature highlights the latest deals and discounts, encouraging users to take advantage of the best prices available. The offers are regularly updated to ensure that users always have access to fresh and exciting deals. The streamlined ordering process allows users to easily select items, review their orders, and provide delivery details, ensuring a smooth and efficient experience.<br/><br/>

The website's responsive design is a crucial aspect of its development. By ensuring compatibility across various devices, including mobile phones and tablets, Inwood Pizza delivers a consistent and enjoyable user experience. The mobile-friendly interface allows users to navigate the site effortlessly, browse the menu, and place orders with ease. Combining functionality, aesthetics, and user-centric design, Inwood Pizza offers a fast, reliable, and engaging experience for pizza lovers everywhere.`


    const inwoodShortDesc = inwoodDesc.slice(0, 400) + "<span style='color: var(--darkblue); cursor: pointer'> Read More...</span>"
    const inwoodLongDesc = inwoodDesc + "<span style='color: var(--darkblue); cursor: pointer'> Read Less</span>";






    // Inwood Slider ref Mob
    const inwoodPrevMob = useCallback(() => {
        if (!inwoodSliderMob.current) return;
        inwoodSliderMob.current.swiper.slidePrev();
    }, [])

    const inwoodNextMob = useCallback(() => {
        if (!inwoodSliderMob.current) return;
        inwoodSliderMob.current.swiper.slideNext();
    }, [])



    // Inwood Slider ref Dekstop
    const inwoodPrevDeks = useCallback(() => {
        if (!inwoodSlider.current) return;
        inwoodSlider.current.swiper.slidePrev();
    }, [])

    const inwoodNextDeks = useCallback(() => {
        if (!inwoodSlider.current) return;
        inwoodSlider.current.swiper.slideNext();
    }, [])








    // Bwc Slider ref Mob
    const prevMob = useCallback(() => {
        // console.log("Clicked Prev")
        if (!bwcSliderMob.current) return;
        bwcSliderMob.current.swiper.slidePrev();
    }, []);

    const nextMob = useCallback(() => {
        // console.log("Clicked Next")
        if (!bwcSliderMob.current) return;
        bwcSliderMob.current.swiper.slideNext();
    }, []);




    // Bwc Slider ref dekstop
    const prevDeks = useCallback(() => {
        // console.log("Clicked Prev")
        if (!bwcSlider.current) return;
        bwcSlider.current.swiper.slidePrev();
    }, []);

    const nextDeks = useCallback(() => {
        // console.log("Clicked Next")
        if (!bwcSlider.current) return;
        bwcSlider.current.swiper.slideNext();
    }, []);






    // Eminent Castle Slider ref Mob
    const eminentCastlePrevMob = useCallback(() => {
        if (!eminentCastleSliderMob.current) return;
        eminentCastleSliderMob.current.swiper.slidePrev();
    }, []);

    const eminentCastleNextMob = useCallback(() => {
        if (!eminentCastleSliderMob.current) return;
        eminentCastleSliderMob.current.swiper.slideNext();
    }, []);


    // Eminent Castle Slider ref Deks
    const eminentCastlePrevDeks = useCallback(() => {
        if (!eminentCastleSlider.current) return;
        eminentCastleSlider.current.swiper.slidePrev();
    }, []);

    const eminentCastleNextDeks = useCallback(() => {
        if (!eminentCastleSlider.current) return;
        eminentCastleSlider.current.swiper.slideNext();
    }, []);









    // Carte Blanche Slider ref Mob
    const cartePrevMob = useCallback(() => {
        if (!carteSliderMob.current) return;
        carteSliderMob.current.swiper.slidePrev();
    }, []);

    const carteNextMob = useCallback(() => {
        if (!carteSliderMob.current) return;
        carteSliderMob.current.swiper.slideNext();
    }, []);

    // Carte Blanche Slider ref Deks
    const cartePrevDeks = useCallback(() => {
        if (!carteSlider.current) return;
        carteSlider.current.swiper.slidePrev();
    }, []);

    const carteNextDeks = useCallback(() => {
        if (!carteSlider.current) return;
        carteSlider.current.swiper.slideNext();
    }, []);





    return (
        <>
            {/* <h1>Projects</h1> */}
            <span style={{ fontSize: '55px', fontWeight: '100' }}>Our Projects</span>
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
                        <h1 >Eminent Castle</h1>
                        <div className='project-details'>
                            <h2>An application developed using Flutter</h2>
                            <div className='carousel-comp project-card-items mob-view-d-block'>
                                {/* <CarouselComp carouselId={1} /> */}
                                <Swiper
                                    ref={eminentCastleSliderMob}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    // pagination={{
                                    //     clickable: true,
                                    // }}
                                    navigation={false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img src='https://picsum.photos/id/217/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/213/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/215/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/218/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/219/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/221/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/329/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/330/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/220/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                </Swiper>
                                <div className="bwc-prev-arrow bwc-slider" onClick={eminentCastlePrevMob} ><WestRoundedIcon /></div>
                                <div className="bwc-next-arrow bwc-slider" onClick={eminentCastleNextMob} ><EastRoundedIcon /></div>
                            </div>
                            <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                            {desc.length > 100 ? <p onClick={() => toggleState(0)} dangerouslySetInnerHTML={{ __html: !isClick[0] ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                        </div>
                    </div>
                    <div className='carousel-comp project-card-items mob-view-d-none'>
                        {/* <CarouselComp carouselId={2} /> */}
                        <Swiper
                            ref={eminentCastleSlider}
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            navigation={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src='https://picsum.photos/id/217/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/213/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/215/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/218/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/219/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/221/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/329/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/330/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/220/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                        </Swiper>
                        <div className="bwc-prev-arrow bwc-slider" onClick={eminentCastlePrevDeks} ><WestRoundedIcon /></div>
                        <div className="bwc-next-arrow bwc-slider" onClick={eminentCastleNextDeks} ><EastRoundedIcon /></div>
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
                        <h1 >Carte Blanche</h1>
                        <div className='project-details'>
                            <h2>A website build with React</h2>
                            <div className='carousel-comp project-card-items mob-view-d-block'>
                                {/* <CarouselComp carouselId={3} /> */}
                                <Swiper
                                    ref={carteSliderMob}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    // pagination={{
                                    //     clickable: true,
                                    // }}
                                    navigation={false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img src='https://picsum.photos/id/217/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/213/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/215/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/218/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/219/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/221/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/329/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/330/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/220/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                </Swiper>
                                <div className="bwc-prev-arrow bwc-slider" onClick={cartePrevMob} ><WestRoundedIcon /></div>
                                <div className="bwc-next-arrow bwc-slider" onClick={carteNextMob} ><EastRoundedIcon /></div>
                            </div>
                            <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p>
                            {desc.length > 100 ? <p onClick={() => toggleState(1)} dangerouslySetInnerHTML={{ __html: !isClick[1] ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                        </div>
                    </div>
                    <div className='carousel-comp project-card-items mob-view-d-none'>
                        {/* <CarouselComp carouselId={4} /> */}
                        <Swiper
                            ref={carteSlider}
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            navigation={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src='https://picsum.photos/id/217/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/213/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/215/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/218/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/219/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/221/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/329/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/330/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/220/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                        </Swiper>
                        <div className="bwc-prev-arrow bwc-slider" onClick={cartePrevDeks} ><WestRoundedIcon /></div>
                        <div className="bwc-next-arrow bwc-slider" onClick={carteNextDeks} ><EastRoundedIcon /></div>
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
                        <h1 >Inwoodpizzallc</h1>
                        <div className='project-details'>
                            <h2>A website build with ReactJs and NodeJs</h2>
                            <div className='carousel-comp project-card-items mob-view-d-block'>
                                {/* <CarouselComp carouselId={5} /> */}
                                <Swiper
                                    ref={inwoodSliderMob}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    // pagination={{
                                    //     clickable: true,
                                    // }}
                                    navigation={false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img src='https://picsum.photos/id/217/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/213/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/215/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/218/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/219/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/221/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/329/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/330/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/220/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                </Swiper>
                                <div className="bwc-prev-arrow bwc-slider" onClick={inwoodPrevMob} ><WestRoundedIcon /></div>
                                <div className="bwc-next-arrow bwc-slider" onClick={inwoodNextMob} ><EastRoundedIcon /></div>

                            </div>
                            {/* <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p> */}
                            {inwoodDesc.length > 400 ? <p onClick={() => toggleState(2)} dangerouslySetInnerHTML={{ __html: !isClick[2] ? inwoodShortDesc : inwoodLongDesc }} /> : <p dangerouslySetInnerHTML={{ __html: inwoodDesc }} />}
                        </div>
                    </div>
                    <div className='carousel-comp project-card-items mob-view-d-none'>
                        {/* <CarouselComp carouselId={6} /> */}
                        <Swiper
                            ref={inwoodSlider}
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            navigation={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src='https://picsum.photos/id/217/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/213/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/215/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/218/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/219/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/221/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/329/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/330/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/220/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                        </Swiper>
                        <div className="bwc-prev-arrow bwc-slider" onClick={inwoodPrevDeks} ><WestRoundedIcon /></div>
                        <div className="bwc-next-arrow bwc-slider" onClick={inwoodNextDeks} ><EastRoundedIcon /></div>
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
                        <h1 >BWC</h1>
                        <div className='project-details'>
                            <h2>A website build with PHP Laravel</h2>
                            <div className='carousel-comp project-card-items mob-view-d-block'>
                                {/* <CarouselComp carouselId={7} /> */}
                                <Swiper
                                    ref={bwcSliderMob}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    // pagination={{
                                    //     clickable: true,
                                    // }}
                                    navigation={false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img src='https://picsum.photos/id/217/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/213/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/215/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/218/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/219/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/221/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/329/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/330/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                    <SwiperSlide><img src='https://picsum.photos/id/220/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                                </Swiper>
                                <div className="bwc-prev-arrow bwc-slider" onClick={prevMob} ><WestRoundedIcon /></div>
                                <div className="bwc-next-arrow bwc-slider" onClick={nextMob} ><EastRoundedIcon /></div>
                            </div>
                            {/* <pre> */}
                            {/* <p>It is a logn established fact that a reader will be distracted by the redable content of a page when lookign at its layout. The point of using lorem ipsum is that it has a more or less normal distribution of letters as opposed.</p> */}
                            {desc.length > 500 ? <p onClick={() => toggleState(3)} dangerouslySetInnerHTML={{ __html: !isClick[3] ? shortDesc : longDesc }} /> : <p dangerouslySetInnerHTML={{ __html: desc }} />}
                            {/* </pre> */}
                        </div>
                    </div>
                    <div className='carousel-comp project-card-items mob-view-d-none'>
                        {/* <CarouselComp carouselId={8} /> */}
                        <Swiper
                            ref={bwcSlider}
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            navigation={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src='https://picsum.photos/id/217/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/213/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/215/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/218/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/219/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/221/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/329/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/330/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                            <SwiperSlide><img src='https://picsum.photos/id/220/500/300' style={{ borderRadius: '20px' }} /></SwiperSlide>
                        </Swiper>
                        <div className="bwc-prev-arrow bwc-slider" onClick={prevDeks} ><WestRoundedIcon /></div>
                        <div className="bwc-next-arrow bwc-slider" onClick={nextDeks} ><EastRoundedIcon /></div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default ProjectDetails;