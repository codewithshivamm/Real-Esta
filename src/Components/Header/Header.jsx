import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='h-wrapper'>
      <div className="flexCenter paddings innerWidth h-container">

      <img src="./logo.png" alt="logo" width={100} />

        <div className={`h-menu flexCenter ${isOpen ? 'active' : ''}`}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Service</a>
          <a href="">Properties</a>
          <a href="">Contact</a>

          <button className='button'>
            <a href="">Contact Us</a>
          </button>
        </div>

        <span className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </span>
      </div>
    </section>
  )
}

export default Header
