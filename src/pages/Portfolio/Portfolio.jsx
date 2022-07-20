import React from 'react'
//import Portfoliotext from './Portfoliotext'
import './portfolio.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Canvas from '../../components/Canvas/Canvas'
//import Animate from './Animate'

let o=0
let v=0
function Portfolio() {
  return (
     <Canvas video='./videos/video-1.mp4'>
    <div className='portfolio'>
 
  <Parallax pages={6}>
    <ParallaxLayer offset={0} factor={12}>

    </ParallaxLayer>
   
       <ParallaxLayer offset={0} speed={0} factor={6} sticky={true}>
         <header className='pfheader'>
         <h1>Jerry Ochieng</h1>
         <h3>🚀 Welcome to my website!</h3>
       </header>
       </ParallaxLayer>
       <ParallaxLayer offset={o+=0.75} speed={v+=0.2} factor={1}>
         <blockquote className='pfblockquote'>
         <p>I'm a full-stack developer(in the making) that takes on multiple languages.</p>
       </blockquote>
       </ParallaxLayer>
       <ParallaxLayer offset={o+=0.75} speed={v+=0.2} factor={1}>
        <section className='pfsection'>
         <h2>📜 Manifesto</h2>
         <p>
           By the end of 2022, I'd have done two full-stack projects for clients.
         </p>
 
         <p>
           I'd have fully acquinted myself with python and data-science.
         </p>
 
         <p>
           I'd have built a content management system for this site and updated my host or upgraded my package.
         </p>
 
       </section>
   </ParallaxLayer>
       <ParallaxLayer offset={o+=0.75} speed={v+=0.2} factor={1}> 
       <section className="pfsection light">
         <h2>👩🏽‍🚀 Projects</h2>
 
         <p>
           I'm working on multiple projects at the moment and by the beginning of 2023, I'll have the showcase. <br /> jerrfromkenya <br /> .space site working.
         </p>
 
         <h2 className='pfhtype longwrd'>🏆 Accomplishments</h2>
 
         <p>
           3rd Best Diamond Challenge 2020. (Team Leader and CEO of Pata Goods Project.)
         </p>
 
       </section>
       </ParallaxLayer>
 
       <ParallaxLayer offset={o+=0.75} speed={v+=0.2} factor={1}>
       <blockquote className='pfblockquote'>
         <p>The <b>more</b> we value <i>things</i> <br/>the <b>less</b> we value <i>Ourselves</i> <br/>-Bruce Lee</p>
       </blockquote>
       </ParallaxLayer>
 
       <ParallaxLayer offset={o+=0.75} speed={v+=0.2} factor={1}>
       <blockquote className='pfblockquote'>
         <p>Still working on the site!</p>
         <br />
         <p>Designed by <a href="https://www.github.com/jerryfromkenya">Jerry Ochieng A.</a> with Love.😁</p>
       </blockquote>
       </ParallaxLayer>
 
 
       </Parallax>
       
 
 
       
 
      
      
 
       
 
        <div>
       <main>
       
 
 
     </main> 
 
     </div>
</div>
    </Canvas>

      
      
    
    
    
   
       
    
    
  )
}

export default Portfolio