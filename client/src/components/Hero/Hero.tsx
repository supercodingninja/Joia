import React from 'react'
import './Hero.css'
import {Button} from '../shared/Button/Button'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero-container' id='hero'>
            <div className='row'>
                <div className='col-lg-6 col-md-12'>
                    <h1 className='h1'> The largest community</h1>
                    <h1 className='h1'> of art enthusiasts</h1>
                    <Link to='/'>
                        <Button>Join Today</Button>
                    </Link>                    
                </div>

                <div className='col-lg-6 col-md-12 hero-img'>
                                        
                </div>
            </div>           
        </div>
    )
}

export default Hero
