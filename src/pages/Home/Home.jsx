import React, { useEffect } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Cards from '../../components/Cards/Cards'
import { Button } from '../../components/Button/Button'
import './Home.css'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";



export default function Home() {
  const background = async () =>{
    // await delay(1000);
    const TEXTURE_PATH = "./Background/grid.png";
  const DISPLACEMENT_PATH = "./Background/displacement.png";
  const METALNESS_PATH = "./Background/metalness.png";
  
  // Textures
  const textureLoader = new THREE.TextureLoader();
  const gridTexture = textureLoader.load(TEXTURE_PATH);
  const terrainTexture = textureLoader.load(DISPLACEMENT_PATH);
  const metalnessTexture = textureLoader.load(METALNESS_PATH);
  
  const canvas = document.querySelector('#bg');
  
  // Scene
  const scene = new THREE.Scene();
  
  // Fog
  const fog = new THREE.Fog("#000000", 1, 2.5);
  scene.fog = fog;
  const spaceTexture = new THREE.TextureLoader().load('./assets/assets/space.jpg');
scene.background =spaceTexture;
  // Objects
  const geometry = new THREE.PlaneGeometry(1, 2, 24, 24);
  const material = new THREE.MeshStandardMaterial({
      map: gridTexture,
      displacementMap: terrainTexture,
      displacementScale: 0.4,
      /**
       * Add a metalnessMap to our material that will tell the renderer
       * where the "rough" parts of our terrains are
       */ 
      metalnessMap: metalnessTexture,
      /**
       * Make the terrain very very metallic so it will reflect the light
       * and not diffuse it: it will stay black
       */ 
      metalness: 0.96,
      /**
       * Make the terrain a bit rough so the rough parts will diffuse the light
       * well
       */ 
      roughness: 0.5,
  });
  
  const plane = new THREE.Mesh(geometry, material);
  plane.rotation.x = -Math.PI * 0.5;
  plane.position.y = 0.0;
  plane.position.z = 0.15;
  
  
  const plane2 = new THREE.Mesh(geometry, material);
  plane2.rotation.x = -Math.PI * 0.5;
  plane2.position.y = 0.0;
  plane2.position.z = -1.85; // 0.15 - 2 (the length of the first plane)
  
  scene.add(plane);
  scene.add(plane2);
  
  // Light
  // Ambient Light
  const ambientLight = new THREE.AmbientLight("#FCFCFC", 10);
  scene.add(ambientLight);
  
  // Right Spotlight aiming to the left
  const spotlight = new THREE.SpotLight("#AF37AF", 20, 25, Math.PI * 0.1, 0.25);
  spotlight.position.set(0.5, 0.75, 2.2);
  // Target the spotlight to a specific point to the left of the scene
  spotlight.target.position.x = -0.25;
  spotlight.target.position.y = 0.25;
  spotlight.target.position.z = 0.25;
  scene.add(spotlight);
  scene.add(spotlight.target);
  

  // Left Spotlight aiming to the right
  const spotlight2 = new THREE.SpotLight("#C53D3D", 20, 25, Math.PI * 0.1, 0.25);
  spotlight2.position.set(-0.5, 0.75, 2.2);
  const spotlight3 = new THREE.SpotLight("#406CAF", 20, 25, Math.PI * 0.1, 0.25);
  spotlight3.position.set(+0.5, 1.75, 4.2);
  // const spotlight4 = new THREE.SpotLight("#E5FF00", 20, 25, Math.PI * 0.1, 0.25);
  // spotlight4.position.set(+0.5, 1.75, 4.2);
  // Target the spotlight to a specific point to the right side of the scene
  spotlight2.target.position.x = 0.25;
  spotlight2.target.position.y = 0.25;
  spotlight2.target.position.z = 0.25;
  spotlight3.target.position.x = 0.25;
  spotlight3.target.position.y = 0.25;
  spotlight3.target.position.z = 0.25;
  // spotlight4.target.position.x = 0.25;
  // spotlight4.target.position.y = 0.25;
  // spotlight4.target.position.z = 0.25;
  scene.add(spotlight2);
  scene.add(spotlight2.target);
  scene.add(spotlight3);
  scene.add(spotlight3.target);
  // scene.add(spotlight4);
  // scene.add(spotlight4.target);
  
  
  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  
  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.01,
    20
  );
  camera.position.x = 0;
  camera.position.y = 0.06;
  camera.position.z = 1.1;
  
  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  
  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Post Processing
  const effectComposer = new EffectComposer(renderer);
  effectComposer.setSize(sizes.width, sizes.height);
  effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  const renderPass = new RenderPass(scene, camera);
  effectComposer.addPass(renderPass);
  
  const rgbShiftPass = new ShaderPass(RGBShiftShader);
  rgbShiftPass.uniforms["amount"].value = 0.0015;
  
  effectComposer.addPass(rgbShiftPass);
  
  const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
  effectComposer.addPass(gammaCorrectionPass);
  
  // Event listener to handle screen resize
  window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
  
      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
  
      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
      // Update effect composer
      effectComposer.setSize(sizes.width, sizes.height);
      effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
  
  const clock = new THREE.Clock();
  
  // Animate
  const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      // Update controls
      controls.update();
  
      plane.position.z = (elapsedTime * 0.15) % 2;
      plane2.position.z = ((elapsedTime * 0.15) % 2) - 2;
  
      // Render
      // renderer.render(scene, camera);
      effectComposer.render();
  
      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
  };
  
  tick();
  }
  
  
const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
 useEffect( () => {
    background();
  }, []);
    const glitch = () =>
    {
      var x = Math.floor(Math.random() * 10)
      if (x <= 5) {
        document.getElementById('wlx').innerHTML="W3LCOM3";
      } else {
        document.getElementById('wlx').innerHTML="WELCOME";
      }
      
    };
    window.addEventListener('scroll',glitch);
    
  return (
    <>
 <div>
    <HeroSection>

      <>
      <canvas id='bg'className='bg'></canvas>
          <h1 id='wlx' >WELCOME <br />  </h1>
          <h3>to</h3>
      <h3>the wonderful world of Jerr <br /> </h3>
      <div className="hero-btns">
            <Button className='btns' link='/portfolio' buttonStyle='btn--outline'
            buttonSize='btn--large'>CHECK MY PORTFOLIO.</Button>
             <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large' link='/contact'>CONTACT JERR <i className="fa-solid fa-message-code"></i>  </Button>
        </div>
      </>
      
      
    </HeroSection></div>
    {/* Home section */}
    <Cards />


    </>
   
    
  )
}
