import React from 'react'
import "./Button.css"; 

function Button({text ,bgColor, color, linkToOpen}) {
  const handleClick = () => { 
    window.location.href = linkToOpen; 
  }
  return (
    <button data-attr = {text} style={{backgroundColor: bgColor, color: color}} onClick={handleClick} className='universal-button'></button>
  )
}

export default Button