import React, { useEffect } from 'react';
import "./CarouselComp.css"
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

function CarouselComp({carouselId}) {
    useEffect(() => {
        // const wrapper = document.querySelector(".wrapper");
        // const carousel = document.querySelector(".carousel");
        // const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        // const arrowBtns = document.querySelectorAll(".wrapper i");
        // const carouselChildrens = [...carousel.children];
        // let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
        // let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


        // // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        // carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        //     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        // });



        // // Insert copies of the first few cards to end of carousel for infinite scrolling
        // carouselChildrens.slice(0, cardPerView).forEach(card => {
        //     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        // });



        // // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
        // carousel.classList.add("no-transition");
        // carousel.scrollLeft = carousel.offsetWidth;
        // carousel.classList.remove("no-transition");



        // // Add event listeners for the arrow buttons to scroll the carousel left and right
        // arrowBtns.forEach(btn => {
        //     btn.addEventListener("click", () => {
        //         carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        //     });
        // });


        const wrapper = document.querySelector(`.wrapper-${carouselId}`);
        const carousel = document.querySelector(`.carousel-${carouselId}`);
        const firstCardWidth = carousel.querySelector(`.card-${carouselId}`).offsetWidth;
        const arrowBtns = document.querySelectorAll(`.wrapper-${carouselId} i`);
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
                carousel.scrollLeft += btn.id == `left-${carouselId}` ? -firstCardWidth : firstCardWidth;
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

    }, [carouselId])
    return (
        <div className={`wrapper wrapper-${carouselId}`}>
            {/* <i id="left" class="fa-solid fa-angle-left"><WestRoundedIcon /></i> */}
            <i id={`left-${carouselId}`} className={`fa-solid fa-angle-left`}>
                <WestRoundedIcon />
            </i>
            <div className={`carousel carousel-${carouselId}`}>
                <div className={`card card-${carouselId}`}>
                    <img src='https://picsum.photos/id/217/500/300' />
                </div>
                <div className={`card card-${carouselId}`}>
                    <img src='https://picsum.photos/id/238/500/300' />
                </div>
                <div className={`card card-${carouselId}`}>
                    <img src='https://picsum.photos/id/239/500/300' />
                </div>
                <div className={`card card-${carouselId}`}>
                    <img src='https://picsum.photos/id/247/500/300' />
                </div>
                <div className={`card card-${carouselId}`}>
                    <img src='https://picsum.photos/id/243/500/300' />
                </div>

            </div>
            {/* <i id="right" class="fa-solid fa-angle-right"><EastRoundedIcon /></i> */}
            <i id={`right-${carouselId}`} className={`fa-solid fa-angle-right`}>
                <EastRoundedIcon />
            </i>
        </div>
    )
}

export default CarouselComp