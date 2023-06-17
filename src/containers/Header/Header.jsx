import React, { Suspense } from 'react'
import './header.css';
import { FaAddressCard, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'


import Typical from 'react-typical'
import {Canvas} from '@react-three/fiber';
import World from '../../components/World';
import Porsche from '../../components/Porsche';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { CgScrollV } from 'react-icons/cg';



const Header = () => {
  return (
    <>
  
    <motion.div className='modern__header section__padding ' id='home'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.4}}
    >
     
      <div className='modern__header-content'
      >
        <CgScrollV className='scroll'/> 
         <Typical
        steps={['Hi, I am Besir Kurtishi', 3000, 'I\'m a Frontend Developer.', 1000, 'I also Like animations.', 1000, 'And I also like ThreeJs', 1000]}
        loop={Infinity}
        wrapper="h1"
      /> 
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}>I'm a Frontend Software Developer with a strong passion for building web applications with great user experiences</motion.p>
        
        <div className='modern__header-content_smedia'>
          <ul>
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} ><a href="https://www.instagram.com/besirkurtishi_"> <FaInstagram   size={30}/> </a></motion.li>
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.15}} ><a href="https://www.github.com/besirk"><FaGithub  size={30}/></a></motion.li>
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.25}} ><a href="https://www.linkedin.com/in/besir-kurtishi-660bb6197/"> <FaLinkedin size={30} /> </a></motion.li>
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.35}} ><a href="https://docdro.id/WphQcsQ"> <FaAddressCard size={30} /> </a></motion.li>

          </ul>
        </div>
      </div>  
      
          <Canvas className='modern__header-image'  >
          <OrbitControls enableZoom={false} panSpeed={2} autoRotate={true} />
          <PerspectiveCamera fov={10} near={1} position={[20,20,10]} makeDefault={true} />
          <ambientLight intensity={1} />
          <Stars />
          <directionalLight position={[10,30,0]} intensity={1} />
          <directionalLight position={[30,30,10]} intensity={1} />
          <directionalLight position={[-30,30,10]} intensity={1} />
          <Suspense fallback={null}  >
          {/* <World  /> */}
          <Porsche />
          </Suspense>
         
          </Canvas>
      
    </motion.div>

    </>
  )
}

export default Header