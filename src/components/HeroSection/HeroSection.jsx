import React from 'react'
import { Button } from '../Button/Button'
import './herosection.css'



function HeroSection(props) {
  return (
    <div className='hero-container'>
        <video src={`${props.video}`} autoPlay loop muted />


        {props.children}
       
        
        <p></p>
       
    </div>
  )
}

export default HeroSection