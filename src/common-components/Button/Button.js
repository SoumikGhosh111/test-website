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
  // console.log(color, "thisi is from button component")
  const buttonStyles = { 
    default:{ 
      backgroundColor: bgColor, 
      color: color,
      borderColor: bgColor === "var(--blur-bg)" && "var(--white)"
    },
    hover: { 
      backgroundColor: bgColor === "var(--blur-bg)" ? bgColor : "var(--green-highlight)",
      color: bgColor === "var(--blur-bg)" ? "var(--green-highlight-light)" : color, 
      borderColor: bgColor === "var(--blur-bg)" && "var(--green-highlight-light)"
    }
  }
  return (
    <button style={hover ? buttonStyles.hover : buttonStyles.default}   onClick={handleClick} className='universal-button' onMouseEnter={handleMosueEnter} onMouseLeave={handleMouseLeave}>{text}</button>
  )
}

export default Button


// style={{backgroundColor: bgColor, color: color}}