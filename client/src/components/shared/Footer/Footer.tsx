import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary'
import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary'


const Footer = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (


        <footer className="bg-light">
            <div className="container p-4 d-flex flex-row justify-content-around">

                <ul className="list-unstyled d-flex flex-row">

                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="text-dark">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="text-dark">Our Team</a>
                    </li>

                    <li>
                        <Link to="/" className="navbar-logo">
                            <img
                                className="navbar-logo"
                                src="./assets/img/logo.png"
                                alt="Logo"
                            />
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            About
                         </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="text-dark">Search</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/post" className="nav-links" onClick={closeMobileMenu}>
                            Sell
                        </Link>
                    </li>
                </ul>

            </div>

            <hr></hr>

            <div className="text-center p-3">
                © 2020 Copyright:
                <a className="text-dark" href="#">Joia Group</a>
            </div>

        </footer>




    )
}

//elements from left to right:
//home
//contact us
//team members
//PICTURE LOGO IN CENTER
//about
//search
//sell

//bottom elements underneath nav
//dummy social media icons (link to #)
//joia copyright info?

export default Footer
