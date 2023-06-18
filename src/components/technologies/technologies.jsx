import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiNpm } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import {SiGo, SiGoland, SiNextdotjs, SiTailwindcss, SiTypescript} from 'react-icons/si'
import { FaReact } from 'react-icons/fa';
import './technologies.css';
import user from '../../assets/besir.png';
import {motion} from 'framer-motion';
import Particle from '../particle';


const Technologies = () => {
    
  return (
      <>
      
    <motion.div className="tech" id='tech'
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{delay:0.5}}
        exit={{opacity:0}}

    >
         {/* <Particle /> */}
        <h1 className='techno__header-text'>
            Technologies
        </h1>
        <div className='techno__main'>
       
        <img src={user} alt="user" className='techno__img' />
        <div className="technos">
            
                <figure className='techno_lang'>
                    {/* <AiFill className='techno__icon'/> */}
                    <SiNextdotjs className='techno__icon' />
                    <span>Next.js</span>
                </figure>
                <figure className='techno_lang'>
                    <SiTypescript className='techno__icon'/>
                    <span>Typescript</span>
                </figure>
                <figure className='techno_lang'> 
                    <SiGo className='techno__icon'/> 
                    <span>Golang</span>
                </figure>
                <figure className='techno_lang'> 
                    <SiTailwindcss className='techno__icon'/>
                    <span>TailwindCSS</span>
                </figure>
                <figure className='techno_lang'>
                    <DiNpm className='techno__icon' /> 
                    <span>NPM</span>
                </figure>
            
        </div>
    </div>
    </motion.div>
    </>
  )
}

export default Technologies