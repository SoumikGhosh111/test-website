import React, { useEffect, useState } from 'react';
import "./ClientsReview.css";
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import Stars from '../Review/Stars';


function ClientsReview() {
    useEffect(() => {
        const wrapper = document.querySelector(".wrapper-clients-review");
        const carousel = document.querySelector(".carousel-clients-review");
        const firstCardWidth = carousel.querySelector(".card-clients-review").offsetWidth;
        const arrowBtns = document.querySelectorAll(".wrapper-clients-review i");
        const carouselChildrens = [...carousel.children];
        let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });



        // Insert copies of the first few cards to end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });



        // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");



        // Add event listeners for the arrow buttons to scroll the carousel left and right
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id == "left-clients-review" ? -firstCardWidth : firstCardWidth;
            });
        });
        // if (btn) {
        //     btn.forEach(item => {
        //         item.addEventListener("click", () => {
        //             carousel.scrollLeft += item.id == "left" ? -firstCardWidth : firstCardWidth;
        //         })
        //     })
        // }


        // Records the initial cursor and scroll position of the carousel
        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }


        const dragging = (e) => {
            if (!isDragging) return; // if isDragging is false return from here
            // Updates the scroll position of the carousel based on the cursor movement
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }


        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }


        const infiniteScroll = () => {
            // If the carousel is at the beginning, scroll to the end
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            }
            // If the carousel is at the end, scroll to the beginning
            else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }
            // Clear existing timeout & start autoplay if mouse is not hovering over carousel
            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        }
        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
            // Autoplay the carousel after every 2500 ms
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        }
        autoPlay();
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);

    }, [])


    return (
        <div className='clients-review-section-wrapper'>
            <div className='clients-review-title'>CLIENTS TESTIMONIALS
                <div className='ver-line mob-view-ver-line'></div>
            </div>
            <div className="wrapper-clients-review">
                <i id="left-clients-review" className="fa-solid fa-angle-right "><WestRoundedIcon  sx={{fontSize: "13px"}}/></i>


                <div className='carousel-clients-review'>
                    <div className='card-clients-review'>
                        <div className='client-img-name'>
                            <div className='client-img'>
                                <img src='https://picsum.photos/id/280/200/300' />

                            </div>
                            <div className='client-name-project'>
                                <h2 className='client-name'>John Doe</h2>
                                <Stars rate={5} />
                            </div>
                        </div>

                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>


                    </div>



                    <div className='card-clients-review'>
                        <div className='client-img-name'>
                            <div className='client-img'>
                                <img src='https://picsum.photos/id/281/200/300' />

                            </div>
                            <div className='client-name-project'>
                                <h2 className='client-name'>John Luie</h2>
                                <Stars rate={5} />
                            </div>
                        </div>

                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>


                    </div>




                    <div className='card-clients-review'>
                        <div className='client-img-name'>
                            <div className='client-img'>
                                <img src='https://picsum.photos/id/282/200/300' />

                            </div>
                            <div className='client-name-project'>
                                <h2 className='client-name'>Watson Wasington</h2>
                                <Stars rate={5} />
                            </div>
                        </div>

                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>


                    </div>




                    <div className='card-clients-review'>
                        <div className='client-img-name'>
                            <div className='client-img'>
                                <img src='https://picsum.photos/id/283/200/300' />

                            </div>
                            <div className='client-name-project'>
                                <h2 className='client-name'>Jerry</h2>
                                <Stars rate={5} />
                            </div>
                        </div>

                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>


                    </div>




                    <div className='card-clients-review'>
                        <div className='client-img-name'>
                            <div className='client-img'>
                                <img src='https://picsum.photos/id/284/200/300' />

                            </div>
                            <div className='client-name-project'>
                                <h2 className='client-name'>Tom Hanks</h2>
                                <Stars rate={5} />
                            </div>
                        </div>

                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>

                    </div>




                    <div className='card-clients-review'>
                        <div className='client-img-name'>
                            <div className='client-img'>
                                <img src='https://picsum.photos/id/343/200/300' />

                            </div>
                            <div className='client-name-project'>
                                <h2 className='client-name'>Arnold Lynch</h2>
                                <Stars rate={5} />
                            </div>
                        </div>

                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>


                    </div>
                  
                </div>
                <i id="right-clients-review" className="fa-solid fa-angle-left "><EastRoundedIcon sx={{fontSize: "13px"}}/></i>
              
            </div>
        </div>
    )
}

export default ClientsReview;