import React,{useState, useEffect} from 'react'
import "./Navbar.css"; 
import Button from '../Button/Button';
import logoImg from "../../assets/logo.svg"; 

function Navbar() {
  const [scroll , setScroll] = useState(0); 
  useEffect(() => { 
    const handleScroll = () => { 
      setScroll(window.scrollY);
    }
    
    window.addEventListener("scroll", handleScroll); 

    console.log(window.location.href)
    return () => { 
      window.removeEventListener("scroll", handleScroll); 
    }
  }, [])
  return (
    <div className='nav-section-wrapper' style={{backgroundColor: scroll > 900 ? 'var(--darkblue)' : '', position: scroll > 900 ? 'fixed': '', top: "0", height: scroll > 900 ? '80px' : '' , transition: 'all 0.5s ease' }}>
        <div className='nav-section-container-1'>
            <img src={logoImg} alt='PowerMyCode'/>
            <ul>
               <li><a href='/'>Home</a></li>
               <li><a href='/services'>Services</a></li>
               <li><a href='/about'>About us</a></li>
               <li><a href='/blogs'>News</a></li>
            </ul>
        </div>
        <div className='notification-button'>
          <div className='notification'>0</div>
        <Button text ={"Get in Touch"} bgColor={"var(--blur-bg)"} color={"var(--white)"} linkToOpen = {"/contact_us"}/>
        </div>
    </div>
  )
}

export default Navbar; 
