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
        transition={{delay:0.6}}
        >
        <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1}} >HTML</motion.li>
        <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.2}} >CSS</motion.li>
        <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.4}} >Javascript</motion.li>
        <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.6}} >ReactJs</motion.li>
      </motion.ul>
      </motion.div>
      </motion.div>
    </>
  )
}

export default Brand