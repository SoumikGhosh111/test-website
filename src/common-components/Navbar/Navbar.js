import React, { useState, useEffect, useMemo } from 'react'
import "./Navbar.css";
import Button from '../Button/Button';
import logoImg from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [scroll, setScroll] = useState(0);
  const [bool, setBool] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.onscroll = function (e) {
      // print "false" if direction is down and "true" if up
      setBool(this.oldScroll > this.scrollY);
      this.oldScroll = this.scrollY;
    }
    const handleScroll = () => {
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    // console.log(window.location.href)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);




  // const getNavBarColor = () => {
  //   if (location.pathname === '/' && scroll < 900 ) {
  //     return 'transparent'
  //   }
  //   if ((location.pathname === '/' || location.pathname !== '/') && (scroll > 900 && bool)) {
  //     return 'var(--darkblue)';
  //   }
  //   // if (location.pathname !== '/') {
  //   //   return 'var(--darkblue)';
  //   // }
  // }

  // const getNavBarPosition = () => {
  //   if ((location.pathname === '/' || location.pathname !== '/') && scroll < 900) {
  //     return 'absolute'
  //   }
  //   // if ( && scroll < 900) {
  //   //   return 'absolute';
  //   // }
  //   if ((location.pathname !== '/' || location.pathname === '/') && (bool === true &&  scroll > 900)) {
  //     return "fixed";
  //   }
  // }

  const getNavBarColor = () => { 
    if(location.pathname === '/' && scroll < 900){ 
      return 'transparent'
    }
    if(location.pathname === '/' && scroll > 900){ 
      return 'var(--darkblue)'; 
    }
    if(location.pathname !== '/' ){ 
      return 'var(--darkblue)';  
    }
  }

  // const getNavBarPosition = () => { 
  //   if(location.pathname === '/' && scroll < 900){ 
  //     return 'absolute'
  //   }
  //   if(location.pathname !== '/' && scroll < 900){ 
  //     return 'relative'; 
  //   }
  //   if((location.pathname !== '/' ||  location.pathname === '/' )&& scroll > 900) { 
  //     return "fixed"; 
  //   }
  // }
  // scroll > 900 ? 'var(--darkblue)' : ''
  // position: getNavBarPosition()
  return (
    <div className='nav-section-wrapper' style={{ backgroundColor: getNavBarColor(), height: scroll > 900 ? '80px' : '', transition: 'all 0.5s ease' }}>
      <div className='nav-section-container-1'>
        <img src={logoImg} alt='PowerMyCode' />
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/services'>Services</a></li>
          <li><a href='/about'>About us</a></li>
          <li><a href='/blogs'>News</a></li>
        </ul>
      </div>
      <div className='notification-button'>
        <div className='notification'>0</div>
        <Button text={"Get in Touch"} bgColor={"var(--blur-bg)"} color={"var(--white)"} linkToOpen={"/contact_us"} />
      </div>
    </div>
  )
}

export default Navbar; 
