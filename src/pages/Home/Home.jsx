import React, { useEffect } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Cards from '../../components/Cards/Cards'
import { Button } from '../../components/Button/Button'
import './home.css'



export default function Home() {
    {/*const glitch = () =>
    {
      x = Math.floor(Math.random() * 10)
      if (x <= 5) {
        document.getElementById('wlx').innerHTML="W3LCOM3";
      } else {
        document.getElementById('wlx').innerHTML="WELCOME";
      }
    };
    useEffect(() => {
      glitch();
    }, []);*/}
  return (
    <>
 <div>
    <HeroSection video='./videos/video-1.mp4'>

      <h1 id='wlx' >WELCOME <br />  </h1>
          <h3>to</h3>
      <h3>the wonderful world of Jerr <br /> </h3>

      <div className="hero-btns">
            <Button className='btns' link='/portfolio' buttonStyle='btn--outline'
            buttonSize='btn--large'>CHECK MY CURRICULUM VITAE OUT.</Button>
             <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large' link='/contact'>CONTACT JERR <i className="fa-solid fa-message-code"></i>  </Button>
        </div>
    </HeroSection></div>
    {/* Home section */}
    <Cards />


    </>
   
    
  )
}
