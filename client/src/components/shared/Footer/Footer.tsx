import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary'
import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary'


const Footer = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (


        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">

                <div className="row">

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <ul className="list-unstyled mb-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Contact Us</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Our Team</a>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo">
                            <img
                                className="navbar-logo"
                                src="./assets/img/logo.png"
                                alt="Logo"
                            />
                        </Link>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <ul className="list-unstyled">
                                <li className="nav-item">
                                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Search</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/post" className="nav-links" onClick={closeMobileMenu}>
                                        Sell
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>


                <div className="text-center p-3">
                    © 2020 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/">Joia Group</a>
                </div>
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
