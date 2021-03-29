/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary'
import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary'
import './Navbar.css'

export const Navbar = () => {
  const [click, setClick] = useState(false)
  // const [active, setActive] = useState(true)
  // const [showButton, setShowButton] = useState(true)

  const handleClick = () => setClick(!click) // make it toggle between true and false
  const closeMobileMenu = () => setClick(false)

  // const showButtonMode = () => {
  //   window.innerWidth <= 960 ? setShowButton(false) : setShowButton(true)
  // }

  // useEffect(() => {
  //   showButtonMode()
  // }, [])

  // window.addEventListener('resize', showButtonMode)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              className="navbar-logo"
              src="./assets/img/logo.png"
              alt="Logo image"
            />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <a href="mailto: joia@live.com" className="nav-links" onClick={closeMobileMenu}>Contact Us</a>
            </li>

            <li className="nav-item">
              <Link to="/post" className="nav-links" onClick={closeMobileMenu}>
                Sell
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/allartworks" className="nav-links" onClick={closeMobileMenu}>
                All Art
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/allartworksbyuser" className="nav-links" onClick={closeMobileMenu}>
                All Art By Current User
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/account" className="nav-links" onClick={closeMobileMenu}>
                Account
              </Link>
            </li>

            <li>
              <Link to="/login" className="nav-links">
                <ButtonSecondary onClick={closeMobileMenu} text="login" />
              </Link>
            </li>

            <li>
              <Link to="/signup" className="nav-links">
                <ButtonPrimary onClick={closeMobileMenu} text="Register" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
