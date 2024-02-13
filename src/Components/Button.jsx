import React from 'react'
import "./Button.css"

function HandleClick() {
  window.scrollTo({top:0, left: 0, behavior:'smooth'});
}

export default function Button() {
  return (
    <div>
      <a href="https://www.google.com" target="_blank">
        <button className = "button">Google</button>
        </a>
    <button className = "button" onClick = {HandleClick}>Top</button>
    </div>
  )
}