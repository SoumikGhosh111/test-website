import React from 'react'
import "./Button.css"; 

function Button({text ,bgColor, color}) {
  return (
    <button data-attr = {text} style={{backgroundColor: bgColor, color: color}}></button>
  )
}

export default Button