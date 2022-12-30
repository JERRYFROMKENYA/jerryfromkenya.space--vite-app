import React, {useEffect} from 'react'
import { Button } from '../Button/Button'
import './herosection.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



function HeroSection(props) {
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
//scene for shape
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

const controls = new OrbitControls(camera, renderer.domElement);



const spaceTexture = new THREE.TextureLoader().load('./assets/assets/space.jpg');
scene.background =spaceTexture;

// const avatar

const avatarTexture =new THREE.TextureLoader().load('./assets/assets/avatar.jpg');

const avatar = new THREE.Mesh(
  new THREE.BoxGeometry(10,10,10),
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

let positionz=0;
const findPosition = () => 
{
positionz=Math.floor(Math.random() * 30)

}
findPosition();

moon.position.z= ((-1) * positionz);
moon.position.setX(-20);
moon.position.setY(12);

torus.position.z= ((-1) * positionz);
torus.position.setX(-5);
torus.position.setY(-12);




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
avatar.rotation.z +=0.01;
avatar.rotation.y +=0.0005;



{/*avatar2.rotation.x +=0.01;
avatar2.rotation.z +=0.01;
avatar2.rotation.y +=0.0005;*/}


moon.rotation.x +=0.01;
{/*moon.rotation.z +=0.01;*/}

controls.update();

  renderer.render(scene,camera);
}

animate()


  }
  useEffect(() => {
    background();
  }, []);
  window.addEventListener("resize",background)
  return (
    <div className='hero-container'>
     <canvas className='canvas bg' id='bg'></canvas>
        {/* <video src={`${props.video}`} autoPlay loop muted /> */}


        {props.children}
       
        
        <p></p>
       
    </div>
  )
}

export default HeroSection