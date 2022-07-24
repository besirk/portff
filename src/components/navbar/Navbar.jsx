import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/lgg.png';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whpt3">About Us</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#whpt3">Open Ai</a></p>
    <p><a href="#blog">Library</a></p>
  </>        
)

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);

  return (
    <div className="modern__navbar">
      
        <div className="modern__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="modern__navbar-links_container">
          <Menu />
        </div>
      
     
      <div className="modern__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="modern__navbar-menu_container scale-up-center">
            <div className="modern__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar