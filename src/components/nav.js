import React from 'react'
import "./nav.css"
const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <a href='blank'><img src='./Quid_tool.png' alt='logo'></img></a>
        </div>
        <div className='menu'>
            <ul>
                <li className='About_us navs'><a href=' '>About us</a></li>
                <li className='Explore_tools navs'><a href=' ' id='button'>Explore Tools</a></li>
                {/* <li className='menus'></li> */}
            </ul>
        </div>
    </div>
  )
}

export default Nav;