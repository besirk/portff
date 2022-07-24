import React, { Suspense } from 'react'
import './header.css';
import { FaAddressCard, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'


import Typical from 'react-typical'
import {Canvas} from '@react-three/fiber';
import World from '../../components/World';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';



const Header = () => {
  return (
    <>
  
    <div className='modern__header section__padding ' id='home'>
     
      <div className='modern__header-content'>
        
         <Typical
        steps={['Hi, I am Besir Kurtishi', 3000, 'I\'m a Frontend Developer.', 1000, 'I also Like animations.', 1000, 'And I also like ThreeJs', 1000]}
        loop={Infinity}
        wrapper="h1"
      /> 
        <p>I'm a Frontend Software Developer with a strong passion for building web applications with great user experiences</p>
        
        <div className='modern__header-content_smedia'>
          <ul>
            <li><a href="https://www.instagram.com/besirkurtishi_"> <FaInstagram   size={27}/> </a></li>
            <li><a href="https://www.github.com/besirk"><FaGithub  size={27}/></a></li>
            <li><a href="https://www.linkedin.com/in/besir-kurtishi-660bb6197/"> <FaLinkedin size={27} /> </a></li>
            <li><a href="https://docdro.id/ozAkoAM"> <FaAddressCard size={27} /> </a></li>

          </ul>
        </div>
      </div>  
      
          <Canvas className='modern__header-image'  >
          <OrbitControls enableZoom={false} panSpeed={2} autoRotate={true} />
          <PerspectiveCamera fov={15} near={2} position={[20,20,10]} makeDefault={true} />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2,5,2]} intensity={1} />
          <Suspense fallback={null}  >
          <World  />
          </Suspense>
         
          </Canvas>
      
    </div>

    </>
  )
}

export default Header