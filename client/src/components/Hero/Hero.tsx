/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary'
import './Hero.css'

export const Hero = () => {
  return (
    <div className="hero-container row hero">
      <div className="col-lg-6 col-sm-12 justify-content-center">
        <div className="d-flex flex-column">
          <h1 className="text-center"> The largest community</h1>
          <h1 className="text-center"> of art enthusiasts</h1>

          <Link to="/signup" className="mx-auto mt-4" >
            <div>
              <ButtonPrimary text={'Join Today'} />
            </div>
          </Link>

          <Link to="/allartworks" className="mx-auto mt-4" >
            <div>
              <ButtonPrimary text={'View recent artworks'} />
            </div>
          </Link>

        </div>
      </div>

      <div className="col-lg-6 col-sm-12 ">
        <img
          src="./assets/img/watercolor-5049980_1920.jpg"
          className="hero-img"
        />
      </div>
    </div>
  )
}

export default Hero
