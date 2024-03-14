import React from 'react'
import './header.css'
import arrow from './arrow.png'
const Header = () => {
  return (
    <div className='header'>
        <div className='headertext'>
        <h2 className='header'>Unlock Your Potential:</h2>
        <h5 className='header_tagline'>Free Productivity Tools for Success</h5>
        </div>
        <div className='arrow'>
            <img src={arrow} alt='arrow'></img>
        </div>
    </div>
  )
}

export default Header