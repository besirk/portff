import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiNpm } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import './technologies.css';
import user from '../../assets/besir.png';
import {motion} from 'framer-motion';

const Technologies = () => {
    
  return (
      <>
      
    <motion.div className="tech"
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{delay:0.5}}
        exit={{opacity:0}}

    >
 
        <h1 className='techno__header-text'>
            Technologies
        </h1>
        <div className='techno__main'>
        <img src={user} alt="user" className='techno__img' />
        <div className="technos">
            
                <figure className='techno_lang'>
                    <AiFillHtml5 className='techno__icon'/>
                    <span>HTML</span>
                </figure>
                <figure className='techno_lang'>
                    <DiCss3 className='techno__icon'/>
                    <span>CSS</span>
                </figure>
                <figure className='techno_lang'> 
                    <IoLogoJavascript className='techno__icon'/> 
                    <span>JAVASCRIPT</span>
                </figure>
                <figure className='techno_lang'> 
                    <FaReact className='techno__icon'/>
                    <span>REACT</span>
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