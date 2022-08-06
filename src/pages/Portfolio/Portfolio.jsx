import React, { useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import './portfolio.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

reload

let o=0
let v=0
function Portfolio() {

//background animation-->


const background = () =>
  {
    const scene = new THREE.Scene();
//create a camera, first argument(field of view, aspect-ratio[w / h],view frustrum[x,y])
const camera = new THREE.PerspectiveCamera(  75, window.innerWidth / window.innerHeight,0.1,1000 );
//renderer
const renderer = new THREE.WebGLRenderer({
canvas: document.querySelector('#bg'),
});
//setting the pixel ratio
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
//calling the renderer's render method
renderer.render( scene, camera);
//shape geometry

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial( {color: 0xFF6347, } );
const torus = new THREE.Mesh(geometry, material);
//scence for shape
scene.add(torus)
//lighting
const pointLight= new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)
//ambiient ligavatar
const ambientLight= new THREE.AmbientLight(0xffffff)

//scene add for lighting
scene.add(pointLight, ambientLight)
//DEBUGGING LIGHTING
//lighthelper
//substantiate the light helpeer
{/*const lightHelper = new THREE.PointLightHelper(pointLight)
//grid helper
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper, gridHelper)
*/}
//controls
const controls = new OrbitControls(camera, renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.25,24,24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff})
  const star = new THREE.Mesh(geometry, material);

  const [ x, y ,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread( 100 ))

  star.position.set(x,y,z);
  scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('./assets/assets/space.jpg');
scene.background =spaceTexture;

// const avatar

const avatarTexture =new THREE.TextureLoader().load('./assets/assets/avatar.jpg');

const avatar = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({ map: avatarTexture})
);

scene.add(avatar);

// Moon

const moonTexture =new THREE.TextureLoader().load('./assets/assets/moon.jpg');
const normalTexture =new THREE.TextureLoader().load('./assets/assets/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshBasicMaterial({ map: moonTexture,
  normalMap: normalTexture
})
);

moon.position.z= 30;
moon.position.setX(-10);


{/*function moveCamera(){
//current position
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  avatar.rotation.y += 0.01;
  avatar.rotation.z +=0.01;

  camera.position.z = t *-0.01;
  camera.position.x = t *-0.0002;
  camera.rotation.y = t* -0.0002;
  

}
document.body.onscroll = moveCamera */}

scene.add(moon);


function animate(){
  requestAnimationFrame( animate );

torus.rotation.x +=0.01;
torus.rotation.y +=0.005;
torus.rotation.z +=0.01;

avatar.rotation.x +=0.01;
avatar.rotation.y +=0.005;
avatar.rotation.z +=0.01;

controls.update();

  renderer.render(scene,camera);
}

animate()


  }
  useEffect(() => {
    background();
  }, []);

  return (
     <>
  {/** <canvas className="bg" id="bg"></canvas>*/ }
    <canvas className='canvas bg' id='bg'></canvas>
    <>
    
    <div className='portfolio'>
      
      <Parallax pages={5}>
   <ParallaxLayer></ParallaxLayer>
       <ParallaxLayer offset={0} speed={0} factor={7} sticky={true}>
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
    </>
 
  

    </>

      
      
    
    
    
   
       
    
    
  )
}

export default Portfolio