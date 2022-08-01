import React from 'react'
import './brand.css';
import Particle from '../../components/particle';
import {motion} from 'framer-motion';

const Brand = () => {
  return (
   <>
    <div id='skills'></div>
    <motion.div className='modern__brand section__padding'  
      initial = {{opacity:0}}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Particle />
      <motion.div className='modern__brand-content' 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.5}}
      >
      <h1>Skills</h1>
      
      </motion.div>
      </motion.div>
    </>
  )
}

export default Brand