import React from 'react'
import { Button } from '../Button/Button'
import './herosection.css'



function HeroSection(props) {
  return (
    <div className='hero-container'>
        <video src={`${props.video}`} autoPlay loop muted />
        <h1>{props.main}</h1>
        <h2>{props.sub}</h2>
        <h3> {props.title}</h3>
        
        <p></p>
        <div className="hero-btns">
            <Button className='btns' link='/portfolio' buttonStyle='btn--outline'
            buttonSize='btn--large'>CHECK MY CURRICULUM VITAE OUT.</Button>
             <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large' link='/contact'>CONTACT JERR <i className="fa-solid fa-message-code"></i>  </Button>
        </div>
    </div>
  )
}

export default HeroSection