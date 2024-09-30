import React, { useState, useEffect } from 'react'
import "./Navbar.css";
import Button from '../Button/Button';
import logoImg from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";
import TemporaryDrawer from './Drawer';



function Navbar() {
  const [scroll, setScroll] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    });

  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const getNavBarColor = () => {
    if (location.pathname === '/' && scroll < 200) {
      return 'transparent'
    }
    if (location.pathname === '/' && scroll > 200) {
      return 'var(--darkblue)';
    }
    if (location.pathname !== '/') {
      return 'var(--darkblue)';
    }
  }

  // const getNavBarPosition = () => { 
  //   if(location.pathname === '/' && scroll < 100){ 
  //     return 'absolute'
  //   }
  //   if(location.pathname !== '/' && scroll < 900){ 
  //     return 'relative'; 
  //   }
  //   // if((location.pathname !== '/' ||  location.pathname === '/' )&& scroll > 900) { 
  //   //   return "fixed"; 
  //   // }
  // }
  // scroll > 900 ? 'var(--darkblue)' : ''
  // style={{ backgroundColor: getNavBarColor(), height: scroll > 900 ? '80px' : '' }}

  return (
    <>
      <div className='nav-section-wrapper' style={{ backgroundColor: getNavBarColor(), height: scroll > 200 ? '80px' : '' }}>
        <div className='nav-section-container-1'>
          <img src={logoImg} alt='PowerMyCode' />
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/about'>About us</a></li>
            {/* <li><a href='/blogs'>News</a></li> */}
          </ul>
        </div>
        <div className='notification-button'>
          {/* <div className='notification'>0</div> */}
          <Button text={"Get in Touch"} bgColor={"var(--blur-bg)"} color={"var(--white)"} linkToOpen={"/contact_us"} />
        </div>
      </div>
      <div className='mob-view-nav'>
        <img src={logoImg} />
        <TemporaryDrawer />
        </div>
    </>
  )
}

export default Navbar; 