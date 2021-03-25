import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

    return (

        <footer className="bg-white">
            <div className="container p-4 d-flex flex-row justify-content-around">

                <ul className="list-unstyled d-flex flex-row">

                    <li>
                        <Link to="/" className="navbar-logo">
                            <img
                                className="navbar-logo"
                                src="./assets/img/logo.png"
                                alt="Logo"
                            />
                        </Link>
                    </li>

                </ul>

            </div>

            <hr className="border-warning" />

            <div className="text-center p-3">
                © 2020 Copyright: Joia Group
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
