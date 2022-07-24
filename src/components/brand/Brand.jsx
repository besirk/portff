import React from 'react'
import './brand.css';
import Particle from '../../components/particle';

import {google,slack,atlassian,dropbox,shopify} from './imports';
const Brand = () => {
  return (
    <div className='modern__brand section__padding'>
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
    </div>
  )
}

export default Brand