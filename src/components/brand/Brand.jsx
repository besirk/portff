import React from 'react'
import './brand.css';
import Particle from '../../components/particle';
import {motion} from 'framer-motion';

const Brand = () => {
  return (
   <>
    
    <motion.div className='modern__brand section__padding'  id='skills'
      initial = {{opacity:0}}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Particle />
      <motion.div className='modern__brand-content' 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        
      >
      <motion.h1
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{delay:0.5}}

      >Skills</motion.h1>
      
      </motion.div>
      </motion.div>
    </>
  )
}

export default Brand