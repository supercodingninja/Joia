/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../Button/PrimaryButton';
import './Navbar.css';

export const Navbar = () => {
  
  const [click, setClick] = useState(false);
  const [showButton, setShowButton] = useState(true);
 
  const handleClick = () => setClick(!click); // make it toggle between true and false 
  const closeMobileMenu = () => setClick(false);

  const showButtonMode = () => {

    window.innerWidth <= 960 ? setShowButton(false): setShowButton(true);

  };

  useEffect(() => {
    showButtonMode();
  }, []);

  window.addEventListener('resize', showButtonMode);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img className='navbar-logo' src="./assets/img/logo.png" alt='Logo image'/>
          </Link>

          <div className='menu-icon' onClick={ handleClick }>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={ closeMobileMenu }>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={ closeMobileMenu }
              >
                About
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/post'
                className='nav-links'
                onClick={ closeMobileMenu }
              >
                Sell
              </Link>
            </li>

            <li>
              <Link
                to='/account'
                className='nav-links-mobile'
                onClick={ closeMobileMenu }
              >
                Account
              </Link>
            </li>

            <li>
              <Link
                to='/account'
                className='nav-links-mobile'
                onClick={ closeMobileMenu }
              >
                Account
              </Link>
            </li>

            {showButton && <PrimaryButton onClick={closeMobileMenu} buttonSize='btn--outline' text='Login' />}

            {showButton && <PrimaryButton onClick={closeMobileMenu} buttonSize='btn--outline' text='Register' />}
          </ul>
        </div>
      </nav>
  
    </>
  );
}

