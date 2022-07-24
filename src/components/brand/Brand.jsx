import React from 'react'
import './brand.css';
import Particle from '../../components/particle';
import {motion} from 'framer-motion';
const Brand = () => {
  return (
   <>
   
    <motion.div className='modern__brand section__padding' id='skills'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.5}}
    >
      <Particle />
      <div className='modern__brand-content'>
      <h1>Skills</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>ReactJs</li>
      </ul>
      </div>
      </motion.div>
    </>
  )
}

export default Brand