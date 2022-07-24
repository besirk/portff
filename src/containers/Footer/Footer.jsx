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
          <h4>Links</h4>
          <p>Overson</p>
          <p>Social Media</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="modern__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Social Media</p>
          <p>Privacy Policy</p>
        </div>
        <div className="modern__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Skopje North Macedonia, 1000</p>
          <p>070362182</p>
          <p>kurtishi45@gmail.com</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer