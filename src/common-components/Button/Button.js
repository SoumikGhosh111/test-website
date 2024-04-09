import React, {useState} from 'react'
import "./Button.css"; 

function Button({text ,bgColor, color, linkToOpen}) {
  const [hover, setHover] = useState(false); 

  // click event
  const handleClick = () => { 
    window.location.href = linkToOpen; 
  }

  // styling events
  const handleMosueEnter = () => { 
    setHover(true); 
  }
  const handleMouseLeave = () => { 
    setHover(false); 
  }

  const buttonStyles = { 
    default:{ 
      backgroundColor: bgColor, 
      color: color
    },
    hover: { 
      backgroundColor: "var(--green-highlight)",
      color: color
    }
  }
  return (
    <button style={hover ? buttonStyles.hover : buttonStyles.default}   onClick={handleClick} className='universal-button' onMouseEnter={handleMosueEnter} onMouseLeave={handleMouseLeave}>{text}</button>
  )
}

export default Button


// style={{backgroundColor: bgColor, color: color}}