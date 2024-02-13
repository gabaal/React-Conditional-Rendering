import React from 'react'
import {useState} from'react';
import "./Button.css"
export default function Monkey() {
  
  const [visible, setVisible] = useState(false)
  
  return (
    <>
      <button className = "button" onClick={() => {setVisible(!visible)}}>Show Monkey</button>
      {visible && <img src='https://cdn.britannica.com/28/148328-050-961326DE/eye-structure-tarsier-light-levels-animal.jpg?w=400&h=225&c=crop'/>}
    </>
  )
}