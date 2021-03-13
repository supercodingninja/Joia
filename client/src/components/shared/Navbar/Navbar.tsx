import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click); // make it toggle between true and false 
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
          <Link to='/' className='navbar-logo' src='./assets/img/logo.png' onClick={closeMobileMenu}>
          </Link>

          <Link to='/search' className='nav-item'> Search </Link>

          <div className='menu-icon' onClick={handleClick}>
              <i className={ click} ? 'fas fa-times' : 'fas fa-bars' />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                  Sell
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Account
              </Link>
            </li>
          </ul>

          <Button buttonStyle='btn--outline'>Log in</Button>}

          <Button> Register </Button> }  

      </div>
    </nav>
  )
}

export default Navbar
