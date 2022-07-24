import React from 'react'
import './footer.css';
import logo from '../../assets/lgg.png'
const Footer = () => {
  return (
    <div className="modern__footer section__padding">
      
      <div className="modern__footer-links">
        <div className="modern__footer-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="modern__footer-links_div">
          <h4>Projects Section Coming soon...</h4>
        </div>
       
      </div>
      
    </div>
  )
}

export default Footer