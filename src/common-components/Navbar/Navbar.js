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

    return () => { 
      window.removeEventListener("scroll", handleScroll); 
    }
  }, [])
  return (
    <div className='nav-section-wrapper' style={{backgroundColor: scroll > 900 ? 'var(--darkblue)' : '', position: scroll > 900 ? 'sticky': '', top: "0", height: scroll > 900 ? '80px' : '' , transition: 'all 0.5s ease'}}>
        <div className='nav-section-container-1'>
            <img src={logoImg} alt='PowerMyCode'/>
            <ul>
               <li><a href='#'>Home</a></li>
               <li><a href='#'>Services</a></li>
               <li><a href='#'>About us</a></li>
               <li><a href='#'>News</a></li>
               <li><div  className='notification'>0</div></li>
            </ul>
        </div>
        <Button text ={"Get in Touch"} bgColor={"var(--blur-bg)"} color={"var(--white)"}/>
    </div>
  )
}

export default Navbar; 