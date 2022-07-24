import React from 'react'
import './brand.css';
import Particle from '../../components/particle';
import {motion} from 'framer-motion';

const Brand = () => {
  return (
   <>
   
    <motion.div className='modern__brand section__padding' id='skills' 
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
      <motion.ul
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.8}}
        >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>ReactJs</li>
      </motion.ul>
      </motion.div>
      </motion.div>
    </>
  )
}

export default Brand