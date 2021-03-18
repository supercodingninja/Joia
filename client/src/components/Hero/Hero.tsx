/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { ButtonPrimary } from '../shared/ButtonPrimary/ButtonPrimary'
import './Hero.css'

export const Hero = () => {
  return (
    <div className="hero-container row hero">
      <div className="col-lg-6 col-sm-12 justify-content-center">
        <div className="d-flex flex-column">
          <h1 className="text-center"> The largest community</h1>
          <h1 className="text-center"> of art enthusiasts</h1>

          <div className="mx-auto mt-4">
            <ButtonPrimary text={'Join Today'} />
          </div>
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
