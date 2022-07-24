import React from 'react'
import './possibility.css';
import possImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className="modern__possibility section__padding" id='possibility'>
      <div className="modern__possibility-image">
        <img src={possImage} alt="possibility" />
      </div>
      <div className="modern__possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond imagination</h1>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id nam ad, harum laboriosam mollitia rem eaque quibusdam debitis libero in similique ex reiciendis, beatae modi cupiditate tenetur esse itaque! Quaerat!</p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility